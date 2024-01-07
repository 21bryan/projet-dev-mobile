import { Component, OnInit } from '@angular/core';
import { TrajetbusService } from 'src/app/services/trajetbus.service';

@Component({
  selector: 'app-trajetbus',
  templateUrl: './trajetbus.page.html',
  styleUrls: ['./trajetbus.page.scss'],
})
export class TrajetbusPage implements OnInit {

  items: any[];

  constructor(private trajet: TrajetbusService) { }
res:any
  ngOnInit() {
this.res=localStorage.getItem('item')


    this.trajet.getItems().subscribe(data => {
      this.items = data.filter(item=>item.nombus=this.res.nombus);
    });
  }

  // Ajoutez d'autres méthodes pour interagir avec les données au besoin.

}
