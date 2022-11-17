import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullReadComponent } from './full-read.component';

describe('FullReadComponent', () => {
  let component: FullReadComponent;
  let fixture: ComponentFixture<FullReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
