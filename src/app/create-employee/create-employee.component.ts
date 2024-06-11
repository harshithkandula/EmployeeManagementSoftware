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
  first_name!: string;
  last_name!: string;
  email_id!: string;
  ph_no!: string;
  role!: string;
  salary!:number;
  work_exp!:number;
  join_date!:string; 

  //employee: Employee = new Employee(this.id, this.first_name, this.last_name, this.email_id, this.ph_no, this.role, this.salary, this.work_exp, this.join_date);
  employee: Employee = new Employee();

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
      this.employee = new Employee();
    },
    error =>{
      console.log('Unable to register employee ', error);
    }
  );

   this.gotToEmployeeList();
  }

  onSubmitData():void {
    this.registerClient();
  }

  

}
