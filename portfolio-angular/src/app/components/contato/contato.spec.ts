import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Contato } from './contato';

describe('Contato', () => {
  let component: Contato;
  let fixture: ComponentFixture<Contato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Contato],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Contato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
