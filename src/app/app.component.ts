import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = 'Uma mensagem qualquer';

  n = 12050.4856;

  hoje = new Date();

  meuCep:string = "30720492";

  meuCpf:string = "11111111111"

  strings:string[] = ["gato", "cavalo"];

  addString(newString: any){
    //se nao incluir o pipe impure utilize:
    //this.strings = [...this.strings, newString];
    this.strings.push(newString);
  }

}
