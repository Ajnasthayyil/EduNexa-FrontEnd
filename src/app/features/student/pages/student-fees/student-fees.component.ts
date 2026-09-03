import { Component, OnInit } from '@angular/core';

interface FeeTransaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
  receiptUrl?: string;
}

@Component({
  selector: 'app-student-fees',
  templateUrl: './student-fees.component.html',
  styleUrls: ['./student-fees.component.scss']
})
export class StudentFeesComponent implements OnInit {
  totalFee: number = 50000;
  paidAmount: number = 30000;
  balanceAmount: number = 20000;

  transactions: FeeTransaction[] = [];

  ngOnInit(): void {
    this.transactions = [
      { id: 'TRX-1092', date: 'Oct 01, 2026', description: 'Tuition Fee - Fall 2026', amount: 15000, status: 'Paid', receiptUrl: '#' },
      { id: 'TRX-1085', date: 'Sep 15, 2026', description: 'Library Fee', amount: 2000, status: 'Paid', receiptUrl: '#' },
      { id: 'TRX-1070', date: 'Aug 20, 2026', description: 'Hostel Fee - Quarter 1', amount: 13000, status: 'Paid', receiptUrl: '#' },
      { id: 'INV-2041', date: 'Nov 01, 2026', description: 'Tuition Fee - Winter 2026', amount: 15000, status: 'Pending' },
      { id: 'INV-2022', date: 'Oct 10, 2026', description: 'Lab Equipment Fee', amount: 5000, status: 'Overdue' }
    ];
  }

  getStatusClass(status: string): string {
    switch(status.toLowerCase()) {
      case 'paid': return 'status-paid';
      case 'pending': return 'status-pending';
      case 'overdue': return 'status-overdue';
      default: return '';
    }
  }

  payNow(transaction: FeeTransaction) {
    alert(`Initiating payment for ${transaction.description} - $${transaction.amount}`);
  }
}
