import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit{

  /*employeeRegisterForm!: FormGroup;*/
  id!: BigInt;
  firstName!: string;
  lastName!: string;
  emailId!: string;
  phNo!: string;
  role!: string;
  salary!:number;
  workExperience!:number;
  joiningDate!:string;

  employee: Employee = new Employee(this.id, this.firstName, this.lastName, this.emailId, this.phNo, this.role, this.salary, this.workExperience, this.joiningDate);
  employeeService!: EmployeeService;

  router: Router;

  constructor(private fb:FormBuilder, employeeService: EmployeeService, router: Router){
   /* this.employeeRegisterForm = this.fb.group(
      {
         
      }
    );*/
    this.employeeService= employeeService;
    this.router = router;
  }

  ngOnInit():void{

  }
  
   gotToEmployeeList(){
    this.router.navigate(['employee-registry']);
   }

  registerClient():void{
    /*console.log("Registering Participant");
    console.log(this.employee);*/

    this.employeeService.registerEmployee(this.employee).subscribe(response => {
      console.log(response);
    },
    error =>{
      console.log('Unable to register employee ', error);
    }
  );

   this.gotToEmployeeList();
  }



}
