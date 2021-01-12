import { BLACK_ON_WHITE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import { SuperAdminDialogComponent } from '../super-admin-dialog/super-admin-dialog.component';


@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  closeIcon = "add";
  overlay = true;
  openOverlay = () => {
    this.overlay = !this.overlay;
    this.closeIcon = this.closeIcon === "add" ? "close" : "add";
  }

  openSuperAdminDialog() {
    this.dialog.open(SuperAdminDialogComponent)
  }

  openAdminDialog() {
    this.dialog.open(AdminDialogComponent);
  }

  ngOnInit(): void {
  }

}
