import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularAuth: AngularFireAuth) { }


  SignUp({email, password}: any){
    this.angularAuth.createUserWithEmailAndPassword(email, password).then(res=>{
      console.log(res, '*** User created')
    }).catch(err=>{
      console.log(err.message)
    })
  }


  
}
