import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerEleveComponent } from './lister-eleve.component';

describe('ListerEleveComponent', () => {
  let component: ListerEleveComponent;
  let fixture: ComponentFixture<ListerEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListerEleveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
