import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataStorage {
    public data: any;
    public id: string;
    public constructor() { }
}
