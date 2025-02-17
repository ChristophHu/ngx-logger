export interface LogParam {
    logType: 'log' | 'info' | 'debug' | 'warn' | 'error';
    input: boolean
    output: boolean
    timestamp: boolean
}