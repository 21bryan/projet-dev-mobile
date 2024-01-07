import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { BuslistService } from '../services/buslist.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user:any

  
  items: any[];

  constructor(public route:Router,public authservice:AuthentificationService, public firestore:AngularFirestore, 
    private bus:BuslistService) {
this.user=authservice.getProfile()
}
ngOnInit(){
  this.bus.getItems().subscribe(data => {
    this.items = data;
  });
}
goto(item:any){
  localStorage.setItem('item',item)
  this.route.navigate(['/trajetbus'])
}




async logout(){
  this.authservice.signOut().then(()=>{
    this.route.navigate(['/landing'])
  }).catch((error)=>{
    console.log(error)
  })
}






}
