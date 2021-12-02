import { Component, EventEmitter, Output } from '@angular/core';
import { ContatoService } from '../services/contato.service';
import { Contato } from './../models/contato.model';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cria-contato',
  templateUrl: './cria-contato.component.html',
  styleUrls: ['./cria-contato.component.scss']
})
export class CriaContatoComponent {
  @Output() aoCriar = new EventEmitter<Contato>();
  nome: string;
  telefone: string;
  dataNascimento: Date;

  constructor(private service: ContatoService, private router: Router, private datePipe: DatePipe){}

  criar(): void{
    console.log('Solicitado novo cadastro');
    console.log('this.dataNascimento: ', this.dataNascimento);
    const strDate: string = this.datePipe.transform(this.dataNascimento, 'yyyy-MM-dd');
    console.log('strDate: ', strDate);

    const contato: Contato = {nome: this.nome, telefone: this.telefone, data_nascimento: strDate};
    console.log('Contato: ', contato);
    this.service.criar(contato).subscribe(resultado => {
      console.log('Resultado: ', resultado);
      this.limpar();
      this.router.navigateByUrl('lista-contato');
    }, error => {
      console.log('Error: ', error);
    });
  }

  limpar(): void{
    this.nome = '';
    this.telefone = '';
    this.dataNascimento = new Date();
  }

}
