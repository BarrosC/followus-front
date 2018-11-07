import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosDetalheDialogComponent } from './eventos-detalhe-dialog.component';

describe('EventosDetalheDialogComponent', () => {
  let component: EventosDetalheDialogComponent;
  let fixture: ComponentFixture<EventosDetalheDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosDetalheDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosDetalheDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
