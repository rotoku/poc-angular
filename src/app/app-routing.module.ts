import { ListaContatoComponent } from './lista-contato/lista-contato.component';
import { CriaContatoComponent } from './cria-contato/cria-contato.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtualizaContatoComponent } from './atualiza-contato/atualiza-contato.component';
import { ExluiContatoComponent } from './exlui-contato/exlui-contato.component';

const routes: Routes = [
  { path: ''                  , redirectTo: 'lista-contato', pathMatch: 'full' },
  { path: 'cria-contato'      , component: CriaContatoComponent },
  { path: 'atualiza-contato'  , component: AtualizaContatoComponent },
  { path: 'exclui-contato'    , component: ExluiContatoComponent },
  { path: 'lista-contato'     , component: ListaContatoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
