import { Component } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';




interface profile {
  category: string;
  description: string;
  id: string;
  image: string;
  price:string;
  title:string;
  rating:[];
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent {
profileData!:profile;

constructor(private service :DemoServiceService ){}


ngOnInit(){

 
  this.service.getData().subscribe((data:any)=>{
    console.log(data,"data in component");
    this.profileData=data;
  })
}
}
