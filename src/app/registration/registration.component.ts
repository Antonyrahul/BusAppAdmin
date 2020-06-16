import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
prod;
  constructor(private productservice:ProductService,private router:Router) {
    if(localStorage.getItem("jwtToken")==null)
    {
      this.router.navigate(['login'])
    }
    this.productservice.getpendingtravels({accstatus:"pending"}).subscribe((data)=>{
      console.log(data)
     
     this.prod = data.data

    })
  }

  ngOnInit(): void {
  }
  processdata(name,uniqueid)

  {
    var userdata=
    {
      name:name,
      uniqueid:uniqueid
    }
    this.productservice.approvetravels(userdata).subscribe((data)=>{
      console.log(data)
     
     this.prod = data.data

    })

  }

}
