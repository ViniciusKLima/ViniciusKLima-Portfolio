import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesModal } from './courses-modal';

describe('CoursesModal', () => {
  let component: CoursesModal;
  let fixture: ComponentFixture<CoursesModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesModal], // Mudança: declarations em vez de imports
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
