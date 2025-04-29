import { Component, OnInit } from '@angular/core';
import { Bug, BugService } from '../../services/bug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bug-list',
  standalone: false,
  templateUrl: './bug-list.component.html'
})
export class BugListComponent implements OnInit {
  bugs: Bug[] = [];

  constructor(private bugService: BugService, private router: Router) {}

  ngOnInit(): void {
    this.loadBugs();
  }

  loadBugs(): void {
    this.bugService.getAll().subscribe(data => this.bugs = data);
  }

  editBug(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deleteBug(id: number): void {
    if (confirm('Are you sure you want to delete this bug?')) {
      this.bugService.delete(id).subscribe(() => this.loadBugs());
    }
  }
}
