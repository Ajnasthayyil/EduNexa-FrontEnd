import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { SidebarService } from '../../../core/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  role$ = this.authService.currentRole$;
  userName: string = '';
  userInitials: string = '';
  showDropdown = false;

  constructor(private authService: AuthService, private sidebarService: SidebarService) {}

  ngOnInit() {
    this.authService.currentRole$.subscribe(role => {
      if (role) {
        if (role === 'Super Admin') {
          this.userName = 'System Admin';
          this.userInitials = 'SA';
        } else if (role === 'School Admin') {
          this.userName = 'Director';
          this.userInitials = 'DR';
        } else if (role === 'Principal') {
          this.userName = 'Dr. Sarah Jenkins';
          this.userInitials = 'SJ';
        } else if (role === 'HR') {
          this.userName = 'HR Manager';
          this.userInitials = 'HR';
        } else if (role === 'Teacher') {
          this.userName = 'Priya Mehta';
          this.userInitials = 'PM';
        } else if (role === 'Student') {
          this.userName = 'Arjun Nair';
          this.userInitials = 'AN';
        } else {
          this.userName = role;
          this.userInitials = role.charAt(0);
        }
      }
    });
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  toggleSidebar() {
    this.sidebarService.toggleMobileSidebar();
  }
}
