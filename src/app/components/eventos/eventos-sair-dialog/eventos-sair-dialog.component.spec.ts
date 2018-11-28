import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosSairDialogComponent } from './eventos-sair-dialog.component';

describe('EventosSairDialogComponent', () => {
  let component: EventosSairDialogComponent;
  let fixture: ComponentFixture<EventosSairDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosSairDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosSairDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
