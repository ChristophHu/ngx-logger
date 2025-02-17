import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerToggleComponent } from './logger-toggle.component';

describe('LoggerToggleComponent', () => {
  let component: LoggerToggleComponent;
  let fixture: ComponentFixture<LoggerToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggerToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggerToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
