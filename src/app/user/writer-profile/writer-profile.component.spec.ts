import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterProfileComponent } from './writer-profile.component';

describe('WriterProfileComponent', () => {
  let component: WriterProfileComponent;
  let fixture: ComponentFixture<WriterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriterProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
