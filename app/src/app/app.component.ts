import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from './model/group';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JUG Tours';
  loading = true;
  groups: Group[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.loading = true;
    this.http.get<Group[]>('api/groups').subscribe((data: Group[]) => {
      this.groups = data;
      this.loading = false;
    });
  }
}
