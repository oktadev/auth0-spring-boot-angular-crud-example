import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GroupEditComponent } from './group-edit.component';

describe('GroupEditComponent', () => {
  let component: GroupEditComponent;
  let fixture: ComponentFixture<GroupEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupEditComponent, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
