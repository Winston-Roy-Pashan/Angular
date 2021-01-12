import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  uri = 'http://localhost:4000/api/v1';

  constructor(private http: HttpClient) {
   }

  addAdmin(name,email,employeeCode) {
    const admin = {
      name:name,
      email:email,
      employeeCode:employeeCode
    };
    return this.http.post(`${this.uri}/users/addAdmin`, admin);
  }

  getAllAdmin() {
    return this.http.get(`${this.uri}/users/admin`);
  }

  getAllSuperAdmin() {
    return this.http.get(`${this.uri}/users/superAdmin`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }

  deleteAdmin(id) {
    return this.http.delete(`${this.uri}/users/${id}`);
  }
}

