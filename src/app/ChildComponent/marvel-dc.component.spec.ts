import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelDcComponent } from './marvel-dc.component';

describe('MarvelDcComponent', () => {
  let component: MarvelDcComponent;
  let fixture: ComponentFixture<MarvelDcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelDcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelDcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
