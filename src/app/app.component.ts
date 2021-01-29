import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cvidpromise';

  checks = [];


  constructor(){
    console.log("WORKS");


    this.checks = [
      'Ik weet niet alles en dat is gewoon helemaal oké',
      'Ik respecteer andere mensen, hun mening en eigendommen',
      'Ik ben trots op ons land, ook al worden er soms fouten gemaakt',
      'Hoe rot deze tijd ook is, ik probeer er het beste van te maken',
      'Ik accepteer mindere dagen, de boog kan niet altijd gespannen staan',
      'Ik ben bewust dat ik niet de enige ben met onzekerheid en angstgevoelens',
      'Ik ga negatieve energieslopende situaties uit de weg'
    ];
  }
}
