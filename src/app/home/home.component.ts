import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  apiKey: string;

constructor(private router:Router){

}

  EnterApiKey(){
    this.router.navigate(['select-app'], {state: {key: this.apiKey}});
  }
}


