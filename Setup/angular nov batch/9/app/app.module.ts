import { NgModule } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';

import { StudentService } from "./student.service";

import { HttpModule } from "@angular/http";
@NgModule({
    imports: [BrowserModule,HttpModule],
    declarations: [AppComponent],
    providers:[StudentService],
    bootstrap: [AppComponent],
})
export class AppModule { }
