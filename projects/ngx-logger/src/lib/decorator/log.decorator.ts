import { Injector } from "@angular/core"
import { LogParam } from "../models/log-param"
import { LogService } from "../services/log.service"

const defaultParam: Required<LogParam> = {
    logType: 'log',
    input: true,
    output: true,
    timestamp: true
}

export function LogDecorator(params?: LogParam): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void {
    
    const options: Required<LogParam> = {
        ...defaultParam,
        ...params
    }

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        
        // const injector = target.constructor.injector as Injector
        // const logService = injector.get(LogService)
        // logService.loge(target, propertyKey, descriptor)

        const ORIGINALMETHODE = descriptor.value;
        let paramName = descriptor.value.toString().replace(/\s/g,'').match(/\((.*?)\)/)[1].split(','); 
        
        descriptor.value = function (...args: any[]) {
            let paramValues = args.map(v => v)
            let nameAndValue: any = {}
            if (paramValues.length === paramName.length) {
                for (let i = 0; i < paramName.length; i++) {
                    nameAndValue = { ...nameAndValue, ...{[paramName[i]]: paramValues[i]} }
                }
            }

            const RESULT = ORIGINALMETHODE.apply(this, args)

            let timestamp = options.timestamp ? new Date().toLocaleTimeString() : ''

            switch (true) {
                case options.input && options.output:
                    console[options.logType](`[${timestamp}]`, 'Input:', nameAndValue, 'Output:', RESULT)
                    break
                case options.input:
                    console[options.logType](`[${timestamp}]`, 'Input:', nameAndValue)
                    break
                case options.output:
                    console[options.logType](`[${timestamp}]`, 'Output:', RESULT)
                    break
                default:
                    break
            }
            return RESULT
        }
    }
}