import { Component, OnInit } from '@angular/core';

import { FormGroup , FormControl , Validators } from "@angular/forms";

@Component({
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent implements OnInit {

    studentForm:FormGroup;

    constructor() {
        this.studentForm = new FormGroup({
            id : new FormControl('',[Validators.required,Validators.minLength(4)]),
            name : new FormControl()
        });
     }

    ngOnInit() { }

    verify(){
        console.log(this.studentForm.value);
    }
}