import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public get roomData() {
    return JSON.parse(sessionStorage.getItem('roomData') || '{}')
  }

  public set roomData(value:any) {
    sessionStorage.setItem('roomData', JSON.stringify(value))
  }

  constructor() { }
}
