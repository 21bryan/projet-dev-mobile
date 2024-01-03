import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/services/authentification.service';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  LoginForm: FormGroup 
  constructor(public formBuilder: FormBuilder, public loadingctrl:LoadingController, public authservice:AuthentificationService,public router:Router) { }

  ngOnInit() {

    this.LoginForm= this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"),

      ]],
      password:['',[
         Validators.required,
        Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[0-8])(?=.*[A-Z]).{8,}")
      ]]
    })
  }
  get errorControl(){
    return this.LoginForm?.controls
  }

async login(){
  const loading= await this.loadingctrl.create();
  await loading.present();
  if (this.LoginForm?.valid){
    
      const user= await this.authservice.loginUser(this.LoginForm.value.email, this.LoginForm.value.password).catch((error)=>{
        console.log(error);
        loading.dismiss()
        
      })
      
      if(user){
        loading.dismiss()
        this.router.navigate(['/home'])
      } else{
      console.log('provide correct values')
      
      }
      
          
        }
    
  }
}
