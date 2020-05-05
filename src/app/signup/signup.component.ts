import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  styles: [
    ' input.ng-invalid.ng-dirty{border-color:red}'
  ]
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  constructor(@Inject(FormBuilder) private fb:FormBuilder,private router:Router) { 
    this.buildForm();
  }
  get loginid():FormControl{
    return this.signupForm.get('loginid') as FormControl
  }
  get email():FormControl{
    return this.signupForm.get('email') as FormControl
  }
  get password():FormControl{
    return this.signupForm.get('password') as FormControl
  }
  get secqu():FormControl{
    return this.signupForm.get('secqu') as FormControl
  }
  get answer():FormControl{
    return this.signupForm.get('answer') as FormControl
  }
   
  ngOnInit() {
  }
  buildForm(){
    this.signupForm=this.fb.group({
      loginid:[null,[
        Validators.required,
        Validators.pattern('[a-z]+')
      ]],
      email:[null,[Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[capgemini]+\.[a-z]{2,}$')]],
      // fitsname and last nae will be same then pattern
      password:[null,[
        Validators.required,
        // Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
      ],
      ],
      secqu:[Validators.required],
      answer:[null,[Validators.required]]
    })
  }
   onSubmit(): void {
    console.log(this.signupForm.value);
    // alert("Successfully Registered. Yo will get login details on mail shortly")
    // this.router.navigate(['/login']);
 }

}
