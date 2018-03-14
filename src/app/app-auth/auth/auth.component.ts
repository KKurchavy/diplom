import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public authForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AuthComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.authForm = this.fb.group({
      firstName: 'Ян',
      lastName: 'Кошелев',
      groupNumber: 45
    })
  }

  public submitData(): void {
    this.dialogRef.close(this.authForm.value);
  }

  ngOnDestroy() {

  }

}
