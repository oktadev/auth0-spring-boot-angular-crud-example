import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupListComponent } from './group-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('GroupListComponent', () => {
  let component: GroupListComponent;
  let fixture: ComponentFixture<GroupListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GroupListComponent, HttpClientTestingModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(GroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
