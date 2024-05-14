import { Injectable
  ,signal,WritableSignal
 } from '@angular/core';

import { SQLiteDBConnection,SQLiteConnection, CapacitorSQLite } from '@capacitor-community/sqlite';
import { TareoDet } from 'src/app/interfaces/plane/TareoDet';
const DB_GEOHIDRAULICA = 'fuxion_db';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  //private tareodet: WritableSignal<TareoDet[]> = signal<TareoDet[]>([]);

  private tareodet: WritableSignal<TareoDet[]> = signal<TareoDet[]>([]);

  constructor() {}

  async initializPlugin() {
    this.db = await this.sqlite.createConnection(
      DB_GEOHIDRAULICA,
      false,
      'no-encryption',
      1,
      false
    );
    await this.db.open();
  }
}
//https://www.youtube.com/watch?v=BM70fDqUo3c
