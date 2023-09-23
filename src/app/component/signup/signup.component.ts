import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private formBuild: FormBuilder) { }

  //1. Using FormGroup (although this creates repetition)
  signupForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  // to add UI validators
  //get user input
  get firstName() {
    return this.signupForm.get('firstname');
  }
  get lastName() {
    return this.signupForm.get('lastname');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }

  //2. We can also use FormBuilder to reduce boiler plate
  SignUp = this.formBuild.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required, Validators.pattern('[a-zA-Z]+$')],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  });


  onSubmit() {
    console.warn(this.signupForm.value);
  }

  onSubmitFormBuild() {
    console.log(this.SignUp.value);
  }

}
