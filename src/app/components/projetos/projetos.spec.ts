import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Projetos } from './projetos';

describe('Projetos', () => {
  let component: Projetos;
  let fixture: ComponentFixture<Projetos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Projetos], // Mudança aqui: declarations em vez de imports
    }).compileComponents();

    fixture = TestBed.createComponent(Projetos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
