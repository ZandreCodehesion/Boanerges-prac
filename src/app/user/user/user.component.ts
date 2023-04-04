import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Shared/userService/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  ngOnInit(): void {
    
  }

  constructor(private service:UserService, private router: Router) {}

  userForm: FormGroup = new FormGroup ({
    Name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    Surname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    Email: new FormControl("", [Validators.required, Validators.email ,Validators.minLength(3), Validators.maxLength(8)]),
    ID_number: new FormControl("", Validators.required),
    DoB: new FormControl("", Validators.required)


  })



  update()
  {

  }

}
