import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EmployeeListComponentComponent } from "./employee-list-component/employee-list-component.component";
import { routes } from './app.routes'
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, EmployeeListComponentComponent, CreateEmployeeComponent, RouterModule]
})
export class AppComponent {
  title = 'employee-management-portal';
}
