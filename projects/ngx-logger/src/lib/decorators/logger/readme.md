# Log()-Decorator
Der Log-Decorator gibt nach Wahl der Parameter alle In's und Out's einer Funktion aus. 

## Anwendung
### Parameter
Es können dabei folgende Einstelleungen vorgenommen werden:

1. ohne weitere Parameter: Es werden In's und Out's ausgegeben.
2. {type: 'log'}
3. {inputs: true}
4. {outputs: true}
5. {printInProd: true}

@Log() appended on top of method to console.log() input, output of the method attached to.

### Beispiele
```typescript
@LogDecorator()
defaultLog(name: string, age: number) {
    return `${name} ${age}`;
}
@LogDecorator({type: 'log'})
asLog(pramName: any) {
    return pramName;
}

@LogDecorator({type: 'log', inputs: true})
withOnlyInputs(students: any[]) {
    return students;
}

@LogDecorator({type: 'log', outputs: true})
withOnlyOutputs(grade: number, y: number) {
    return grade + y;
}
@LogDecorator({printInProd: true})
inProduction(func1: any) {
    return func1;
}
```