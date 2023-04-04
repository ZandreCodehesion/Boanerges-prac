import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Shared/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {
    
  }

  constructor(private service:UserService, private router: Router) {}

  loginForm: FormGroup = new FormGroup ({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  onSubmit(){
    //Write what happens when submit button is clicked
    console.log("We hit the submit button, this is the data", this.loginForm.value);
  
     this.service.login(this.loginForm.value).subscribe({
      next: (res) => {
        console.log("This is the api response", res);
        this.holdBearer(res)

        //localStorage.setItem('Token', JSON.stringify(res));
      
        this.router.navigate(['/userInfo']);
      }

      

      

      
      

      //Send the access token to the api to get users
      //this.getUser(res.access_token);

     })
  
  }

  holdBearer (token : any)
  {
    console.log("Sending token to API to get  users",token.access_token);
    this.service.getUsers(token.access_token).subscribe ({
      next: (res) => {
        console.log("last result", res)

        
      }
    });

  }

}
