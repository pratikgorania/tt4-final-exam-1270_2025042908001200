import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bug, BugService } from '../../services/bug.service';

@Component({
  selector: 'app-bug-form',
  standalone: false,
  templateUrl: './bug-form.component.html'
})
export class BugFormComponent implements OnInit {
  bug: Bug = { id: 0, title: '', description: '', priority: '', isResolved: false };
  isEditMode = false;

  constructor(private bugService: BugService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.bugService.get(+id).subscribe(data => this.bug = data);
    }
  }

  submit(): void {
    if (this.isEditMode) {
      this.bugService.update(this.bug).subscribe(() => this.router.navigate(['/']));
    } else {
      this.bugService.create(this.bug).subscribe(() => this.router.navigate(['/']));
    }
  }
}
