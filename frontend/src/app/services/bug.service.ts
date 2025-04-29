import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Bug {
  id: number;
  title: string;
  description: string;
  priority: string;
  isResolved: boolean;
}

@Injectable({ providedIn: 'root' })
export class BugService {
  private apiUrl = '/api/bugs';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Bug[]> {
    return this.http.get<Bug[]>(this.apiUrl);
  }

  get(id: number): Observable<Bug> {
    return this.http.get<Bug>(`${this.apiUrl}/${id}`);
  }

  create(bug: Bug): Observable<Bug> {
    return this.http.post<Bug>(this.apiUrl, bug);
  }

  update(bug: Bug): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${bug.id}`, bug);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
