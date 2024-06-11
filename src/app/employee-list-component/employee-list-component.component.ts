import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './employee-list-component.component.html',
  styleUrl: './employee-list-component.component.css'
})
export class EmployeeListComponentComponent implements OnInit{
      
      //employees:Employee[]=[];
      employees:Employee[] | undefined;
      employeeService: EmployeeService;

      constructor(employeeService: EmployeeService){
           this.employeeService = employeeService;
      }

      ngOnInit(): void {
        
        this.employeeService.getEmployeesList().subscribe((response) => {
          this.employees = response;
          console.log(this.employees)
        },
        error =>{
          console.error('An error has occured fetching employees list ', error);
          }
        
        );
      }

      
}
