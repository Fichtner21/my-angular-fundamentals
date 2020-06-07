import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public lang = new FormControl('pl');

  constructor(private title: Title, private translateService: TranslateService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    //this.title.setTitle('My Angular Fundamentals - Settings');
    this.lang.valueChanges.subscribe((lang) => {
      this.translateService.use(lang);
    });

    this.translateService.onLangChange.subscribe(lang => {
      this.snackBar.open('Language has changed', null, {
        duration: 2000,            
      });
    })
  }

}
