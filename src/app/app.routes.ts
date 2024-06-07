import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeListComponentComponent } from './employee-list-component/employee-list-component.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

export const routes: Routes = [

    {path: 'home', component: AppComponent},
    {path: 'employee-registry', component: EmployeeListComponentComponent},
    {path: 'register-employee', component: CreateEmployeeComponent}
];
