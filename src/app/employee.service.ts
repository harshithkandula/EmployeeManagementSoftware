import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Employee } from './employee';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
   employee!: Employee;
   employees!: Employee[];
 
  
  private baseUrl = "http://localhost:8080/registry/employees/all"; 
  private registerUrl = "http://localhost:8080/registry/employees/add-employee";
  private empdUrl = "";
  public httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
        
   }

   /*getEmployeesList(): Observable<{employees: Employee[]}>{
    //return this.httpClient.get<{employees: Employee[]}>(this.baseUrl).pipe(map(response => response.employees));
     return this.httpClient.get<{employees: Employee[]}>(this.baseUrl);
   }*/

     getEmployeesList(): Observable<Employee[]>{
      
       return this.httpClient.get<Employee[]>(this.baseUrl);
     }

   /*registerEmployee(employee: Employee){
     return this.httpClient.post<{employee: Employee}>(this.registerUrl, this.employee);
   }*/


     registerEmployee(employee: Employee): Observable<Employee>{
      return this.httpClient.post<Employee>(this.registerUrl, employee);
    }

    getEmployeeDetails(id: BigInt):Observable<Employee>{
      return this.httpClient.get<Employee>("http://localhost:8080/registry/employees/"+id+"");
    }

    updateEmployee(id: BigInt, employee: Employee): Observable<Employee>{
      return this.httpClient.put<Employee>("http://localhost:8080/registry/employees/edit-employee/"+id+"", employee);
    }

    deleteEmployee(id: BigInt): void{
       this.httpClient.delete<Employee>("http://localhost:8080/registry/employees/delete-employee/"+id+"");
    }

    

}
