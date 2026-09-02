import { Component, OnInit } from '@angular/core';

export interface StudyMaterial {
  id: number;
  title: string;
  subject: string;
  type: 'pdf' | 'doc' | 'video' | 'link';
  uploadDate: string;
  size: string;
  author: string;
}

@Component({
  selector: 'app-student-materials',
  templateUrl: './student-materials.component.html',
  styleUrls: ['./student-materials.component.scss']
})
export class StudentMaterialsComponent implements OnInit {
  materials: StudyMaterial[] = [];
  filteredMaterials: StudyMaterial[] = [];
  categories: string[] = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Lit.'];
  activeCategory: string = 'All';
  searchQuery: string = '';

  ngOnInit(): void {
    this.materials = [
      { id: 1, title: 'Algebra Formula Sheet', subject: 'Mathematics', type: 'pdf', uploadDate: 'Oct 12, 2026', size: '1.2 MB', author: 'Mr. Smith' },
      { id: 2, title: 'Newton\'s Laws Overview', subject: 'Physics', type: 'video', uploadDate: 'Oct 14, 2026', size: '15 MB', author: 'Dr. Jones' },
      { id: 3, title: 'Periodic Table (HD)', subject: 'Chemistry', type: 'pdf', uploadDate: 'Oct 15, 2026', size: '2.5 MB', author: 'Mrs. White' },
      { id: 4, title: 'Cell Structure Notes', subject: 'Biology', type: 'doc', uploadDate: 'Oct 18, 2026', size: '500 KB', author: 'Ms. Green' },
      { id: 5, title: 'Hamlet Character Analysis', subject: 'English Lit.', type: 'doc', uploadDate: 'Oct 20, 2026', size: '800 KB', author: 'Mr. Brown' },
      { id: 6, title: 'Calculus Practice Set 1', subject: 'Mathematics', type: 'pdf', uploadDate: 'Oct 22, 2026', size: '3.1 MB', author: 'Mr. Smith' },
      { id: 7, title: 'Thermodynamics Lecture', subject: 'Physics', type: 'link', uploadDate: 'Oct 25, 2026', size: '--', author: 'Dr. Jones' },
      { id: 8, title: 'Organic Chemistry Reactions', subject: 'Chemistry', type: 'pdf', uploadDate: 'Oct 28, 2026', size: '4.2 MB', author: 'Mrs. White' }
    ];
    this.filteredMaterials = [...this.materials];
  }

  filterByCategory(category: string): void {
    this.activeCategory = category;
    this.applyFilters();
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value.toLowerCase();
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredMaterials = this.materials.filter(m => {
      const matchCategory = this.activeCategory === 'All' || m.subject === this.activeCategory;
      const matchSearch = m.title.toLowerCase().includes(this.searchQuery) || m.author.toLowerCase().includes(this.searchQuery);
      return matchCategory && matchSearch;
    });
  }

  getIconForType(type: string): string {
    switch (type) {
      case 'pdf': return '📄'; // Fallback emoji if icon class fails
      case 'doc': return '📝';
      case 'video': return '▶️';
      case 'link': return '🔗';
      default: return '📁';
    }
  }
}

