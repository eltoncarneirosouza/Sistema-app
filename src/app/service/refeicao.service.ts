import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Refeicao } from '../model/refeicao.model';
import { ResponsePageable } from '../model/ResponsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class RefeicaoService {
  apiUrl = "http://localhost:8080/refeicao";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public postRefeicao(refeicao: any): Observable<Refeicao>{
    return this.httpClient.post<any>(this.apiUrl, refeicao, this.httpOptions);
  }

  public getRefeicao(): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.apiUrl);  
  } 

}
