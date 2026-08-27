import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { SidebarService } from '../../../core/services/sidebar.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userRole: string = 'Super Admin';
  userName: string = 'System Administrator';
  userInitials: string = 'SA';
  
  activeDept: string = '';
  activeTeamMgmt: boolean = false;
  activeEmployees: boolean = false;
  isMobileOpen = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private sidebarService: SidebarService
  ) {}

  ngOnInit() {
    this.sidebarService.isMobileOpen$.subscribe(isOpen => {
      this.isMobileOpen = isOpen;
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.isMobileOpen) {
        this.sidebarService.closeMobileSidebar();
      }
    });

    this.authService.currentRole$.subscribe((role: string | null) => {
      if (role) {
        this.userRole = role;
        
        // Mock user details based on role
        if (role === 'Bank Admin' || role === 'Branch Manager') {
          this.userName = 'Sanjay Gupta';
          this.userInitials = 'SG';
        } else if (role === 'Super Admin') {
          this.userName = 'System Administrator';
          this.userInitials = 'SA';
        } else {
          this.userName = role + ' User';
          this.userInitials = role.charAt(0);
        }
      }
    });
  }
  
  toggleDept(dept: string) {
    if (this.activeDept === dept) {
      this.activeDept = '';
    } else {
      this.activeDept = dept;
    }
  }

  toggleTeamMgmt() {
    this.activeTeamMgmt = !this.activeTeamMgmt;
  }
  
  toggleEmployees() {
    this.activeEmployees = !this.activeEmployees;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  closeSidebar() {
    this.sidebarService.closeMobileSidebar();
  }
}
