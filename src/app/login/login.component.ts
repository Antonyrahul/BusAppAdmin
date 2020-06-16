import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from'@angular/forms';
import {ProductService} from '../product.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform;
message;
  constructor(private productservice:ProductService,private router:Router) { 
    this.loginform = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      
     
      
    })
  }

  ngOnInit(): void {
  }

  processdata()
  {
    if(this.loginform.valid&&this.loginform.value.email=="admin@admin.com"&&this.loginform.value.password=="admin@123")
    {
    console.log(this.loginform.value)
   
      console.log("logged in")
      localStorage.setItem('name', "admin");
      localStorage.setItem('email',"admin@admin.com");
      localStorage.setItem('jwtToken',"qazwsxedc")
     
      
      
      this.router.navigate(['/'])
      .then(() => {
        window.location.reload();
      });

    }
      
      else
      {
      console.log("failed")
     
      }

   
  }
 

}
