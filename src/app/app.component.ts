import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  isLoggedIn:boolean = false;

  constructor(){
     let loginToken = localStorage.getItem('login-token')
     console.log(loginToken)
  }

  ngOnInit(): void {
    
  }
}
