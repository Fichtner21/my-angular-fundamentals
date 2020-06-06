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
      const emailErrors = this.formGroup.controls.email.errors;
      if(emailErrors?.required){
        return 'This field is required';
      } 
      if(emailErrors?.email){
        return 'Wrong email format';
      } 
      return '';
      
    })
  );
  
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
