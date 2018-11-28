import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosParticiparDialogComponent } from './eventos-participar-dialog.component';

describe('EventosParticiparDialogComponent', () => {
  let component: EventosParticiparDialogComponent;
  let fixture: ComponentFixture<EventosParticiparDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosParticiparDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosParticiparDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
