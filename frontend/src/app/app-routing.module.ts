import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugListComponent } from './components/bug-list/bug-list.component';
import { BugFormComponent } from './components/bug-form/bug-form.component';

const routes: Routes = [
  { path: '', component: BugListComponent },        // List all bugs
  { path: 'create', component: BugFormComponent },  // Create a new bug
  { path: 'edit/:id', component: BugFormComponent }, // Edit a bug
  { path: '**', redirectTo: '' }                    // Wildcard fallback to BugList
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
