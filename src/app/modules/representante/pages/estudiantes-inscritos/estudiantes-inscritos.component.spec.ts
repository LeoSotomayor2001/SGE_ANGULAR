import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesInscritosComponent } from './estudiantes-inscritos.component';

describe('EstudiantesInscritosComponent', () => {
  let component: EstudiantesInscritosComponent;
  let fixture: ComponentFixture<EstudiantesInscritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstudiantesInscritosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiantesInscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
