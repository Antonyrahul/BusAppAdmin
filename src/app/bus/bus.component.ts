import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
prod;
jwtToken;
  constructor(private productservice:ProductService, private router:Router) {
    if(localStorage.getItem("jwtToken")==null)
    {
      this.router.navigate(['login'])
    }
    this.productservice.getpendingbuses({status:"pending"}).subscribe((data)=>{
      console.log(data)
     
     this.prod = data.data

    })
  }

  ngOnInit(): void {
  }
  processdata(busno,uniqueid)

  {
    var userdata=
    {
      busregno:busno,
      uniqueid:uniqueid
    }
    this.productservice.approvebus(userdata).subscribe((data)=>{
      console.log(data)
     
     this.prod = data.data

    })
    
location.reload();
  }

}
