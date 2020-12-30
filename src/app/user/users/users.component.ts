import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
user:any=[];
  constructor(private userService:UserService,private router:Router) { 
  this.getUser();
  }

  getUser(){
    this.userService.getUsers().subscribe((res)=>{
      this.user=res;
    });
  }
  ngOnInit(): void {
  }

  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe((res)=>{
    });
    this.getUser();
  }

  updateUser(id:any){
     this.router.navigate(['/userUpdate/'+id])
  }

   
}
