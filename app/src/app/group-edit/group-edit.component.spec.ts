import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupEditComponent } from './group-edit.component';

describe('GroupEditComponent', () => {
  let component: GroupEditComponent;
  let fixture: ComponentFixture<GroupEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GroupEditComponent]
    });
    fixture = TestBed.createComponent(GroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
