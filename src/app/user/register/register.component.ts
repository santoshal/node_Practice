import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myForm: any;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      password: ["", Validators.required],
      name: ["", Validators.required],
      email: [" ", Validators.required]
    })
  }

  onSubmit() {
    this.userService.registerUser(this.myForm.value).subscribe((res) => { })
    this.router.navigate(['/user']);
  }

}
