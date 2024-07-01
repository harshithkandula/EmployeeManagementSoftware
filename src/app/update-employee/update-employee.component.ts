import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{
   employee: Employee = new Employee();
   employeeService: EmployeeService;
   route: ActivatedRoute;
   router: Router;
   id!: BigInt;

   constructor(employeeService: EmployeeService, route: ActivatedRoute, router: Router){
    this.employeeService = employeeService;
    this.route = route;
    this.router = router;
   }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeDetails(this.id).subscribe((response) => {
      this.employee = response;
    },
  error => {
    console.error('Error Fetching Employee Details', error);
  });
  }

  navigateToEmployeeList(){
    this.router.navigate(['employee-registry']);
  }
  
  updateClient():void{
    //this.id = this.route.snapshot.params['id'];
    this.employeeService.updateEmployee(this.id, this.employee).subscribe((response) => {
      console.log(response);
    },
  error =>{
    console.error('Something went wrong', error);
  });

  this.navigateToEmployeeList();
  }
  
   OnSubmit(): void{
     this.updateClient();
   }
}
