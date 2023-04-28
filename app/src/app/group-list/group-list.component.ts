import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Group } from '../model/group';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-group-list',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatTableModule, MatIconModule],
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent {
  title = 'Group List';
  loading = true;
  groups: Group[] = [];
  displayedColumns = ['id','name','events','actions'];
  feedback: any = {};

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.loading = true;
    this.http.get<Group[]>('api/groups').subscribe((data: Group[]) => {
      this.groups = data;
      this.loading = false;
      this.feedback = {};
    });
  }

  delete(group: Group): void {
    if (confirm(`Are you sure you want to delete ${group.name}?`)) {
      this.http.delete(`api/group/${group.id}`).subscribe({
        next: () => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.ngOnInit();
          }, 1000);
        },
        error: () => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      });
    }
  }

  protected readonly event = event;
}
