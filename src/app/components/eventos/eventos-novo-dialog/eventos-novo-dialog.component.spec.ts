import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosNovoDialogComponent } from './eventos-novo-dialog.component';

describe('EventosNovoDialogComponent', () => {
  let component: EventosNovoDialogComponent;
  let fixture: ComponentFixture<EventosNovoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosNovoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosNovoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
