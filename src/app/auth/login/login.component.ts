import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), //drugi argument to tablica validatorów
    password: new FormControl('', [Validators.required, Validators.minLength(8)]), //drugi argument to tablica validatorów
  });

  // Znak $ na końcu informuje ze to strumień

  public buttonDisabled$ = this.formGroup.statusChanges.pipe(
    map((status) => status === 'INVALID'), startWith(true)
  );

  public emailMessage$ = this.formGroup.valueChanges.pipe(
    map((value) => {
      const emailErrors = this.formGroup.controls.email?.errors;
      if(emailErrors){
        if(emailErrors?.required){
          return 'This field is required';
        } 
        if(emailErrors?.email){
          return 'Wrong email format';
        } 
      }      
      return '';
    })
  );

  public passwordMessage$ = this.formGroup.valueChanges.pipe(
    map((value) => {
      const passwordErrors = this.formGroup.controls.password?.errors;
      if(passwordErrors && this.formGroup.controls.password?.dirty){
        if(passwordErrors?.required){
          return 'This field is required';
        }
        if(passwordErrors?.minlength){
          return 'Password should have at least 8 chars';
        }
        return '';
      }  else {
        return '';
      }     
    }),
  )
  
  constructor() { }

  public ngOnInit(): void {
    const valueChanges$ = this.formGroup.valueChanges;

    // valueChanges$.subscribe((value) => {
    //   console.log(value);
    // });

    const statusChanges$ = this.formGroup.statusChanges;

    statusChanges$.subscribe((status) => {
      // const emailControl = this.formGroup.controls.email;
      // console.log(emailControl);      
    });
  }

}
