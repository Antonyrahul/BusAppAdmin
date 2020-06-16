import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-mytickets',
  templateUrl: './mytickets.component.html',
  styleUrls: ['./mytickets.component.css']
})
export class MyticketsComponent implements OnInit {
  prod;
  jwtToken;
    constructor(private productservice:ProductService, private router:Router) {
      if(localStorage.getItem("jwtToken")==null)
      {
        this.router.navigate(['login'])
      }
      this.productservice.getallaccounts().subscribe((data)=>{
        console.log(data)
       
       this.prod = data.data
  
      })
    }
  
    ngOnInit(): void {
    }
    processdata(email,uniqueid)
  
    {
      var userdata=
      {
        email:email,
        uniqueid:uniqueid
      }
      this.productservice.suspendaccount(userdata).subscribe((data)=>{
        console.log(data)
       
       this.prod = data.data
  
      })
      
  location.reload();
    }
  
  }
