import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arxiu } from './arxiu';

describe('Arxiu', () => {
  let component: Arxiu;
  let fixture: ComponentFixture<Arxiu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arxiu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arxiu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
