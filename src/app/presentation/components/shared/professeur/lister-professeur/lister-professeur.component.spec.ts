import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerProfesseurComponent } from './lister-professeur.component';

describe('ListerProfesseurComponent', () => {
  let component: ListerProfesseurComponent;
  let fixture: ComponentFixture<ListerProfesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListerProfesseurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
