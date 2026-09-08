import { Component, OnInit } from '@angular/core';

interface StudentDetails {
  firstName: string;
  lastName: string;
  studentId: string;
  email: string;
  phone: string;
  dob: string;
  address: string;
  course: string;
  semester: string;
  batch: string;
  admissionDate: string;
  guardianName: string;
  guardianRelation: string;
  guardianContact: string;
  profilePicUrl?: string;
}

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  student: StudentDetails = {
    firstName: 'Alex',
    lastName: 'Johnson',
    studentId: 'STU-2026-0042',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    dob: 'May 15, 2004',
    address: '123 Campus Drive, Apt 4B, Collegeville, CA 90210',
    course: 'B.S. Computer Science',
    semester: '5th Semester',
    batch: 'Class of 2028',
    admissionDate: 'Aug 20, 2024',
    guardianName: 'Robert Johnson',
    guardianRelation: 'Father',
    guardianContact: '+1 (555) 987-6543'
  };

  isEditing: boolean = false;

  ngOnInit(): void {}

  toggleEditMode(): void {
    this.isEditing = !this.isEditing;
  }

  saveChanges(): void {
    // In a real app, send the updated 'student' object to the backend here
    this.isEditing = false;
    alert('Profile updated successfully!');
  }
}
