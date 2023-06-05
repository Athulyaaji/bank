import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pdata = "enter acno"

  serviceData: any

  acno: any
  psw: any

  constructor(private rout: Router, private ds: DataService) { }


  ngOnInit(): void {
console.log(this.serviceData);


  }

  login() {

     var acno=this.acno
   var psw=this.psw
    this.ds.login(acno,psw).subscribe((result:any)=>{
       alert(result.message)
       this.rout.navigateByUrl("home")

    },
    result=>{
      alert(result.error.message)
    }
    )

    //  console.log(this.acno);
    // console.log(this.psw);




  }


}
