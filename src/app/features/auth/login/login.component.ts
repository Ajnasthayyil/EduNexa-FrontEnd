import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  selectedRole: string = 'Super Admin';
  roles: string[] = ['Super Admin', 'Admin', 'Manager', 'Teacher', 'Student', 'Staff'];

  isDropdownOpen = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private elRef: ElementRef
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['role']) {
        this.selectedRole = params['role'];
      }
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectRole(role: string) {
    this.selectedRole = role;
    this.isDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.custom-select-wrapper')) {
      this.isDropdownOpen = false;
    }
  }

  onLogin(event: Event) {
    event.preventDefault();
    // Navigate to OTP verification instead of directly logging in
    this.router.navigate(['/verify-otp'], { queryParams: { role: this.selectedRole } });
  }
}
