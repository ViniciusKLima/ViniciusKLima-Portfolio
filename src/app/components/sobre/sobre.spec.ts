import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sobre } from './sobre';

describe('Sobre', () => {
  let component: Sobre;
  let fixture: ComponentFixture<Sobre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sobre], // MUDANÇA: declarations em vez de imports
    }).compileComponents();

    fixture = TestBed.createComponent(Sobre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
