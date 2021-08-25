import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CepPipe } from './cep.pipes';
import { AppComponent } from './app.component';

//IMPORTANDO A LINGUAGEM
import localePt from '@angular/common/locales/pt';
import { CpfPipe } from './cpf.pipe';
import { JoinStringsPipe } from './join-strings.pipe';
registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent, CepPipe, CpfPipe, JoinStringsPipe,
  ],
  imports: [
    BrowserModule
  ],
  //INSERIR NO PROVIDE O 'PT'
  providers: [{provide: LOCALE_ID, useValue: "en-US"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
