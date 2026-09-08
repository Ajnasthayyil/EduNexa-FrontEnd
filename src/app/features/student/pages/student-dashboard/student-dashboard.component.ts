import { Component, OnInit } from '@angular/core';

interface ScheduleItem {
  id: string;
  subject: string;
  time: string;
  room: string;
  teacher: string;
  type: 'Lecture' | 'Lab' | 'Seminar';
}

interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
  isUrgent: boolean;
}

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  studentName = 'Arjun Nair';
  
  // Metrics
  currentGpa = 3.8;
  attendancePercentage = 94;
  pendingAssignments = 3;
  upcomingExams = 2;

  // Mock Schedule
  todaySchedule: ScheduleItem[] = [
    { id: '1', subject: 'Advanced Physics', time: '09:00 AM - 10:30 AM', room: 'Lab 4B', teacher: 'Dr. Smith', type: 'Lab' },
    { id: '2', subject: 'Calculus III', time: '11:00 AM - 12:30 PM', room: 'Room 201', teacher: 'Prof. Davis', type: 'Lecture' },
    { id: '3', subject: 'Computer Science', time: '02:00 PM - 03:30 PM', room: 'Room 105', teacher: 'Ms. Taylor', type: 'Seminar' }
  ];

  // Mock Announcements
  announcements: Announcement[] = [
    { id: '1', title: 'Midterm Exam Schedule Released', date: 'Oct 15, 2026', content: 'The schedule for the upcoming midterm exams has been posted on the notice board.', isUrgent: true },
    { id: '2', title: 'Library Renovation', date: 'Oct 12, 2026', content: 'The main library will be closed for renovation this weekend. Please plan accordingly.', isUrgent: false },
    { id: '3', title: 'Guest Lecture: AI Ethics', date: 'Oct 10, 2026', content: 'Join us for a special guest lecture on AI Ethics by Dr. Turing this Friday.', isUrgent: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
