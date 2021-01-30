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
      'Ik weet niet alles, en weet je wat? Dat is gewoon helemaal oké',
      'Ik respecteer andere mensen, hun mening en hun eigendommen',
      'Ik besef dat het voor veel mensen (waaronder misschien ikzelf) een erg zware tijd is',
      'Ik ben trots op ons land, ook al worden er soms fouten gemaakt. Er is zoveel om trots op te zijn',
      'Ik besef dat deze nare coronatijd ook weer voorbij gaat',
      'Ik heb niet het idee dat ik de hele bevolking moet behoeden van wat dan ook',
      'Hoe rot deze tijd ook is, ik probeer er het beste van te maken',
      'Ik dring niemand mijn mening op',
      'Ik accepteer de mindere dagen, de boog kan niet altijd gespannen staan',
      'Ik laat mezelf niet zomaar iets aanpraten, maar ga ook niet overal iets achter zoeken',
      'Ik ben bewust dat ik niet de enige ben met onzekerheid en angstgevoelens',
      'Ik ga negatieve energieslopende perikelen, on- en offline, uit de weg',
      'Ik veroordeel zinloos geweld, maar geweld in het algemeen',
      'Ik ben bereid hier beter uit te komen, dat dat ik erin ging'
    ];
  }
}
