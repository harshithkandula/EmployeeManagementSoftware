import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@Component({
  selector: 'app-employee-list-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, UpdateEmployeeComponent],
  templateUrl: './employee-list-component.component.html',
  styleUrl: './employee-list-component.component.css'
})
export class EmployeeListComponentComponent implements OnInit{
      
      //employees:Employee[]=[];
      employees:Employee[] | undefined;
      employeeService: EmployeeService;
      private router!: Router;
      id!: BigInt;
      
      constructor(employeeService: EmployeeService, router: Router){
           this.employeeService = employeeService;
           this.router = router;
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

      updateEmployee(id: BigInt){
        this.router.navigate(['update-employee', id]);
      }

      deletingEmployee(id: BigInt){
        this.id = id;
        this.employeeService.deleteEmployee(this.id);
        console.log("Deleting employee with ID"+id);
        this.navigateToEmployeeList();
      }

      navigateToEmployeeList(){
        this.router.navigate(['employee-registry']);
      }
      
      
}
