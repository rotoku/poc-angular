import { Component, Input, OnInit } from '@angular/core';
import { Contato } from './../models/contato.model';
import { ContatoService } from '../services/contato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-contato',
  templateUrl: './lista-contato.component.html',
  styleUrls: ['./lista-contato.component.scss']
})
export class ListaContatoComponent implements OnInit {
  @Input() contatos: Contato[];

  constructor(private service: ContatoService, private router: Router){}

  ngOnInit(): void {
    this.service.listar().subscribe((lista: Contato[]) => {
      this.contatos = lista;
    }, error => {
      console.log('Error: ', error);
    });
  }

  atualizar(contato: Contato): void {
    const codigo: number = contato.codigo;
    localStorage.removeItem('codigo');
    localStorage.setItem('codigo', codigo.toString());
    this.router.navigateByUrl('atualiza-contato');
  }

  excluir(contato: Contato): void {
    const codigo: number = contato.codigo;
    this.service.excluir(codigo).subscribe(data => {
      this.contatos = this.contatos.filter(c => c !== contato);
    });
  }

}
