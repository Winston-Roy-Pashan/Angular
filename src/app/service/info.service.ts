import { Injectable } from '@angular/core';
import { SUPERADMIN } from '../components/main-content/super-admin-dialog/mocklist'
import { Admin}  from '../interfaces/admin'
import { ADMIN } from '../components/main-content/admin-dialog/mocklist'

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  getAllSuperAdmin() : Admin[] {
    return SUPERADMIN;
  }
  getAllAdmin() : Admin[] {
    return ADMIN;
  }
}
