import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupEditComponent } from './group-edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GroupEditComponent', () => {
  let component: GroupEditComponent;
  let fixture: ComponentFixture<GroupEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GroupEditComponent, HttpClientTestingModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(GroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
