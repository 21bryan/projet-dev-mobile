import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user:any
  constructor(public route:Router,public authservice:AuthentificationService) {
this.user=authservice.getProfile()
}


  async logout(){
  this.authservice.signOut().then(()=>{
    this.route.navigate(['/landing'])
  }).catch((error)=>{
    console.log(error)
  })
}

}
