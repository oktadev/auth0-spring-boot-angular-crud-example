import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map, of, switchMap } from 'rxjs';
import { Group } from '../model/group';
import { Event } from '../model/event';
import { HttpClient } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-group-edit',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    MatButtonModule,
    RouterLink,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatTooltipModule
],
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {
  group!: Group;
  feedback: any = {};

  constructor(private route: ActivatedRoute, private router: Router,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.route.params.pipe(
      map(p => p['id']),
      switchMap(id => {
        if (id === 'new') {
          return of(new Group());
        }
        return this.http.get<Group>(`api/group/${id}`);
      })
    ).subscribe({
      next: group => {
        this.group = group;
        this.feedback = {};
      },
      error: () => {
        this.feedback = {type: 'warning', message: 'Error loading'};
      }
    });
  }

  save() {
    const id = this.group.id;
    const method = id ? 'put' : 'post';

    this.http[method]<Group>(`/api/group${id ? '/' + id : ''}`, this.group).subscribe({
      next: () => {
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(async () => {
          await this.router.navigate(['/groups']);
        }, 1000);
      },
      error: () => {
        this.feedback = {type: 'error', message: 'Error saving'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/groups']);
  }

  addEvent() {
    this.group.events.push(new Event());
  }

  removeEvent(index: number) {
    this.group.events.splice(index, 1);
  }
}
