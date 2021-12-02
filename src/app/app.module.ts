import { ContatoService } from './services/contato.service';
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CriaContatoComponent } from './cria-contato/cria-contato.component';
import { AtualizaContatoComponent } from './atualiza-contato/atualiza-contato.component';
import { ExluiContatoComponent } from './exlui-contato/exlui-contato.component';
import { ListaContatoComponent } from './lista-contato/lista-contato.component';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import { DatePipe, registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    ListaContatoComponent,
    CriaContatoComponent,
    AtualizaContatoComponent,
    ExluiContatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: DatePipe, useClass: DatePipe},
    {provide: LOCALE_ID, useValue: 'pt-br'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
