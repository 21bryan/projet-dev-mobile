import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-creer',
  templateUrl: './creer.page.html',
  styleUrls: ['./creer.page.scss'],
})
export class CreerPage implements OnInit {

  regForm: FormGroup |undefined;

  constructor(public formBuilder: FormBuilder, public loadingctrl:LoadingController, public authservice:AuthentificationService, public router: Router) { }

  ngOnInit() {
    this.regForm= this.formBuilder.group({
      fullname :['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")

      ]],
      password:['',[
         Validators.required,
        Validators.pattern("(?=.*)(?=.*[a-z])(?=.*[0-8])(?=.*[A-Z]).{8,}")
      ]]
    })
  }

  get errorControl(){
    return this.regForm?.controls
  }
async signUp(){
  const loading= await this.loadingctrl.create();
  await loading.present();
  if (this.regForm?.valid){
    const user= await this.authservice.registerUser(this.regForm.value.email, this.regForm.value.password).catch((error)=>{
    console.log(error);
    loading.dismiss()
  
  })

    if(user){
  loading.dismiss()
  this.router.navigate(['/authentification'])
} else{
console.log('provide correct values')

}

    
  }
}

  

}
