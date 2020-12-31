import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http:HttpClient) {}
   
  getUsers(){
    return this.http.get("http://localhost:8080/api");
  }
  deleteUser(id: any) {
    return this.http.delete("http://localhost:8080/api/delete/"+id);
  }
  
  registerUser(user:any){
    return this.http.post("http://localhost:8080/api/post",user);
  }

  getUserbyId(id:any) {
    return this.http.get("http://localhost:8080/api/user/"+id);
  }

  updateUser(id:any,user:any){
    return this.http.put("http://localhost:8080/api/put/"+id,user)
  }


}
