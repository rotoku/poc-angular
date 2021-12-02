import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from './../models/contato.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private url = 'http://localhost:8080/api/v1/contatos';

  constructor(private httpClient: HttpClient) {}

  criar(contato: Contato): Observable<Contato> {
    return this.httpClient.post<Contato>(this.url, contato);
  }

  recuperar(codigo: number): Observable<Contato> {
    return this.httpClient.get<Contato>(this.url + '/' + codigo);
  }

  atualizar(codigo: number, contato: Contato): Observable<Contato> {
    return this.httpClient.put<Contato>(this.url + '/' + codigo, contato);
  }

  excluir(codigo: number): Observable<Contato> {
    return this.httpClient.delete<Contato>(this.url + '/' + codigo);
  }

  listar(): Observable<Contato[]> {
    return this.httpClient.get<Contato[]>(this.url);
  }

}
