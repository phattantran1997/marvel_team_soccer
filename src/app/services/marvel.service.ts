// src/app/marvel.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private publicKey = '58c4fb32997a6c01664f542d4182e08a';
  private privateKey = '98f10a35e2617daac0cecb9986befbbc0e30f087';
  private apiUrl = 'https://gateway.marvel.com:443/v1/public/characters';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    const timestamp = new Date().getTime().toString();
    const hash = CryptoJS.MD5(timestamp + this.privateKey + this.publicKey).toString();
    const url = `${this.apiUrl}?apikey=${this.publicKey}&ts=${timestamp}&hash=${hash}`;
    console.log('abc deelele',url);
    return this.http.get(url);
  }
}
