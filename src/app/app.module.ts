import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';
import { EmployeeListComponentComponent } from './employee-list-component/employee-list-component.component';
import { EmployeeService } from './employee.service';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';



@NgModule({
    declarations: [AppComponent, EmployeeListComponentComponent, CreateEmployeeComponent, UpdateEmployeeComponent, EmployeeService],
    providers: [EmployeeService, provideRouter(routes, withComponentInputBinding())],
    imports: [AppComponent, EmployeeListComponentComponent, CreateEmployeeComponent, UpdateEmployeeComponent, FormsModule, BrowserModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
    exports:[RouterModule],
    bootstrap: [AppComponent]
})
export class AppModule { }