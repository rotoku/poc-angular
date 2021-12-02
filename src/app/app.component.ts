import { Component } from '@angular/core';
import { ContatoService } from './services/contato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Contatos';

  constructor(private service: ContatoService){}

}
