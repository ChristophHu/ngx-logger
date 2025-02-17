// 1. Importiert alle relevanten Pakete
import { Observable, of } from "rxjs";
import { LogEntry } from "./log-entry";
import { LogPublisher } from "./log-publisher";

export class LogLocalStorage extends LogPublisher {
    constructor() {
        super(); // 2. & 3. Ruft den Konstruktor der Elternklasse auf
        this.location = 'log'; // 4. Überschreibt die Eigenschaft location mit 'log'
    }

    // 5. Methode log
    log(entry: LogEntry): Observable<boolean> {
        let values: LogEntry[] // 9.1. Variable für bestehende Log-Einträge

        try {
            values = JSON.parse(localStorage.getItem(this.location)!) || []; // 9.1. Liest die bestehenden Log-Einträge
            values.push(entry) // 9.2. & 9.3. Fügt den neuen Log-Eintrag hinzu
            localStorage.setItem(this.location, JSON.stringify(values)); // 9.4. Speichert die Log-Einträge
            return of(true); // 8. Gibt true zurück, wenn erfolgreich
        } catch (error) {
            console.error('Logging to localStorage failed', error);
            return of(false); // 8. Gibt false zurück, wenn fehlgeschlagen
        }
    }

    // 6. Methode clear
    clear(): Observable<boolean> {
        localStorage.removeItem(this.location); // 7. Löscht den lokalen Speicher
        return of(true); // 8. Gibt true zurück, wenn erfolgreich
    }
}