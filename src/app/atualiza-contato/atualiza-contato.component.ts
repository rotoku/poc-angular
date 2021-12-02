import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contato } from '../models/contato.model';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-atualiza-contato',
  templateUrl: './atualiza-contato.component.html',
  styleUrls: ['./atualiza-contato.component.scss']
})
export class AtualizaContatoComponent implements OnInit {
  @Output() aoAtualizar = new EventEmitter<Contato>();
  codigo: number;
  nome: string;
  telefone: string;
  dataNascimento: Date|string;

  constructor(private service: ContatoService, private router: Router, private datePipe: DatePipe) { }

  atualizar(): void {
    console.log('Solicitado atualizar cadastro');
    const codigo = this.codigo;
    const strDate: string = this.datePipe.transform(this.dataNascimento, 'yyyy-MM-dd');
    const contato: Contato = {nome: this.nome, telefone: this.telefone, data_nascimento: strDate};
    this.service.atualizar(codigo, contato)
      .subscribe(
        data => {
          this.router.navigateByUrl('lista-contato');
        },
        error => {
          console.log('Error: ', error);
        });
  }

  ngOnInit(): void {
    const codigo = localStorage.getItem('codigo');
    if (!codigo) {
      alert('Ação inválida!');
      this.router.navigateByUrl('lista-contato');
      return;
    }

    this.service.recuperar(Number(codigo)).subscribe(data => {
      this.codigo           = data.codigo;
      this.nome             = data.nome;
      this.telefone         = data.telefone;
      this.dataNascimento  = data.data_nascimento;
    });
  }

}
