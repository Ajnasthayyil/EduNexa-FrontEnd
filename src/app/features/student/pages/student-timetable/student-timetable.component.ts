import { Component, OnInit } from '@angular/core';

export interface TimetableSession {
  id: number;
  subject: string;
  teacher: string;
  room: string;
  startTime: string;
  endTime: string;
  dayOfWeek: string;
  theme: string;
}

@Component({
  selector: 'app-student-timetable',
  templateUrl: './student-timetable.component.html',
  styleUrls: ['./student-timetable.component.scss']
})
export class StudentTimetableComponent implements OnInit {
  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  schedule: TimetableSession[] = [];

  ngOnInit(): void {
    this.schedule = [
      { id: 1, subject: 'Mathematics', teacher: 'Mr. Smith', room: 'Room 101', startTime: '08:00 AM', endTime: '09:00 AM', dayOfWeek: 'Monday', theme: 'theme-blue' },
      { id: 2, subject: 'Physics', teacher: 'Dr. Jones', room: 'Lab 2', startTime: '09:30 AM', endTime: '10:30 AM', dayOfWeek: 'Monday', theme: 'theme-green' },
      { id: 3, subject: 'Chemistry', teacher: 'Mrs. White', room: 'Lab 1', startTime: '11:00 AM', endTime: '12:30 PM', dayOfWeek: 'Monday', theme: 'theme-purple' },
      
      { id: 4, subject: 'English Lit.', teacher: 'Mr. Brown', room: 'Room 205', startTime: '08:00 AM', endTime: '09:30 AM', dayOfWeek: 'Tuesday', theme: 'theme-yellow' },
      { id: 5, subject: 'Biology', teacher: 'Ms. Green', room: 'Lab 3', startTime: '10:00 AM', endTime: '11:30 AM', dayOfWeek: 'Tuesday', theme: 'theme-red' },
      { id: 6, subject: 'Mathematics', teacher: 'Mr. Smith', room: 'Room 101', startTime: '01:00 PM', endTime: '02:00 PM', dayOfWeek: 'Tuesday', theme: 'theme-blue' },

      { id: 7, subject: 'History', teacher: 'Mrs. Davis', room: 'Room 302', startTime: '09:00 AM', endTime: '10:30 AM', dayOfWeek: 'Wednesday', theme: 'theme-orange' },
      { id: 8, subject: 'Physical Ed.', teacher: 'Coach K', room: 'Gym', startTime: '11:00 AM', endTime: '12:00 PM', dayOfWeek: 'Wednesday', theme: 'theme-teal' },
      
      { id: 9, subject: 'Physics', teacher: 'Dr. Jones', room: 'Lab 2', startTime: '08:00 AM', endTime: '09:30 AM', dayOfWeek: 'Thursday', theme: 'theme-green' },
      { id: 10, subject: 'Chemistry', teacher: 'Mrs. White', room: 'Lab 1', startTime: '10:00 AM', endTime: '11:30 AM', dayOfWeek: 'Thursday', theme: 'theme-purple' },
      { id: 11, subject: 'English Lit.', teacher: 'Mr. Brown', room: 'Room 205', startTime: '01:00 PM', endTime: '02:30 PM', dayOfWeek: 'Thursday', theme: 'theme-yellow' },

      { id: 12, subject: 'Biology', teacher: 'Ms. Green', room: 'Lab 3', startTime: '08:00 AM', endTime: '09:30 AM', dayOfWeek: 'Friday', theme: 'theme-red' },
      { id: 13, subject: 'Mathematics', teacher: 'Mr. Smith', room: 'Room 101', startTime: '10:00 AM', endTime: '11:00 AM', dayOfWeek: 'Friday', theme: 'theme-blue' },
      { id: 14, subject: 'Art', teacher: 'Ms. Picasso', room: 'Studio 1', startTime: '01:00 PM', endTime: '03:00 PM', dayOfWeek: 'Friday', theme: 'theme-pink' }
    ];
  }

  getSessionsForDay(day: string): TimetableSession[] {
    return this.schedule.filter(s => s.dayOfWeek === day).sort((a, b) => {
      const parseTime = (time: string) => {
        const [timePart, modifier] = time.split(' ');
        let [hours, minutes] = timePart.split(':');
        let hrs = parseInt(hours, 10);
        if (modifier === 'PM' && hrs < 12) hrs += 12;
        if (modifier === 'AM' && hrs === 12) hrs = 0;
        return hrs * 60 + parseInt(minutes, 10);
      };
      return parseTime(a.startTime) - parseTime(b.startTime);
    });
  }
}

