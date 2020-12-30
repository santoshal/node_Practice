import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';



@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
userId:any;
user:any;
myForm:any;
  constructor(private activeRouter:ActivatedRoute,private userService:UserService) { 
    this.activeRouter.params.subscribe(uid=>{
        this.userId=uid['id'];
    })

   this.userService.getUserbyId(this.userId).subscribe((res)=>{
       this.user=res;  
   })

  }

  ngOnInit(): void { }
  onSubmit(){
    this.userService.updateUser()
  }

}
