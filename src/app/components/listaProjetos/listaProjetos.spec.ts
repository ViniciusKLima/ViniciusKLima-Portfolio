import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaProjetos } from './listaProjetos';

describe('ListaProjetos', () => {
  let component: ListaProjetos;
  let fixture: ComponentFixture<ListaProjetos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProjetos],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaProjetos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
