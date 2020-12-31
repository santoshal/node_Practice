import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
userId:any;
user:any;
myForm:any;
  constructor(private activeRouter:ActivatedRoute,private userService:UserService,private fb:FormBuilder,private router:Router) { 
    this.myForm=this.fb.group({
      name:["",Validators.required]
    })  
    this.activeRouter.params.subscribe(uid=>{
        this.userId=uid['id'];
    })

   this.userService.getUserbyId(this.userId).subscribe((res:any)=>{
       this.user=res;
       this.myForm=this.fb.group({
        name:[this.user[0].username,Validators.required]
      })  
   })

  }

  ngOnInit(): void {
 
   }



  onSubmit(){
    this.userService.updateUser(this.userId,this.myForm.value).subscribe((res)=>{
    })

    this.router.navigate(['/user']);
  }

}
