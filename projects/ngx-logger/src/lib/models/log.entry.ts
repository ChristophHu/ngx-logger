import { LogLevel } from "../services/log.service"

export class LogEntry {
    entryDate: Date = new Date()
    component: string = ''
    level: LogLevel = LogLevel.Debug
    content: any[] = []
    logWithDate: boolean = true
    
    buildLogString(): string {
        let ret: string = ''
        
        if (this.logWithDate) {
            ret = `[${new Date().toLocaleString('de-DE')}] - `
        }
        
        // ret += "Type: " + LogLevel[this.level]
        ret += `${this.component}`
        if (this.content.length) {
            ret += ` - ${this.formatParams(this.content)}`
        }
        
        return ret
    }
    
    private formatParams(params: any[]): string {
        let ret: string = params.join(",")
        
        // Is there at least one object in the array?
        if (params.some(p => typeof p == "object")) {
            ret = ""
            
            // Build comma-delimited string
            for (let item of params) {
                ret += JSON.stringify(item) + ","
            }
        }
        
        return ret
    }
}