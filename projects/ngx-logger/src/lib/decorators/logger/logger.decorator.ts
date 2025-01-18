import { isDevMode } from '@angular/core'

interface LoggerParams {
  type?: 'log' | 'trace' | 'warn' | 'info' | 'debug' | 'error'
  inputs?: boolean
  outputs?: boolean
  printInProd?: boolean
  timeStamp?: boolean
}

const defaultParams: Required<LoggerParams> = {
  type: 'log',
  inputs: true,
  outputs: true,
  printInProd: false,
  timeStamp: true
}

export function LogDecorator(params?: LoggerParams): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void {

  const options: Required<LoggerParams> = {
    type: params?.type || defaultParams.type,
    inputs: params?.inputs === undefined ? defaultParams.inputs : params.inputs,
    outputs: params?.outputs === undefined ? defaultParams.outputs : params.outputs,
    printInProd: params?.printInProd === undefined ? defaultParams.printInProd : params.printInProd,
    timeStamp: params?.timeStamp === undefined ? defaultParams.timeStamp : params.timeStamp
  }

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // console.log(target.constructor.name)
    if (!options.printInProd && !isDevMode()) {
      return
    }

    const original = descriptor.value
    let paramNames = descriptor.value.toString().replace(/\s/g, '').match(/\((.*?)\)/)[1].split(',')
    descriptor.value = function (...args: any[]) {
      let paramValues: any[] = args.map(v => v)
      let nameAndValue: any = {}
      if (paramValues.length === paramNames.length) {
        for (let i = 0; i < paramNames.length; i++) {
          nameAndValue = {...nameAndValue, ...{[paramNames[i]]: paramValues[i]}}
        }
      }

      const result = original.apply(this, args)

      let timeStamp = ''
      if (options.timeStamp) {
        timeStamp = formatConsoleDate(new Date())
      }

      if (params?.inputs && !params?.outputs) {
        console[options.type](timeStamp, target.constructor.name, original.name + ' -> IN: ', nameAndValue)
      }

      else if (!params?.inputs && params?.outputs) {
        console[options.type](timeStamp, target.constructor.name, original.name + ' -> OUT: ', result)
      }

      else {
        console[options.type](timeStamp, target.constructor.name, original.name + ' -> IN: ', nameAndValue, ' OUT: ', result)
      }

      return result
    }
  }
}

function formatConsoleDate(date: Date) {
  let hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  let milliseconds = date.getMilliseconds()

  return '[' + ((hour < 10) ? '0' + hour : hour) + ':' + ((minutes < 10) ? '0' + minutes : minutes) + ':' + ((seconds < 10) ? '0' + seconds : seconds) + '.' + ('00' + milliseconds).slice(-3) + ']'
}