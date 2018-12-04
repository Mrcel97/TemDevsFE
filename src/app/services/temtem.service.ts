import { Injectable } from '@angular/core';
import { Observable, forkJoin, Subject } from 'rxjs';
import { Temtem } from '../models/temtem';
import { HttpClient } from '@angular/common/http';
import { Type } from '../models/type';

@Injectable({
  providedIn: 'root'
})
export class TemtemService {

  constructor(private http: HttpClient) { }

  public getTemtems(): Observable<Temtem[]> {
    return this.http.get<Temtem[]>("/assets/temtems.json");
  }

  public getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>("/assets/types.json");
  }
}
