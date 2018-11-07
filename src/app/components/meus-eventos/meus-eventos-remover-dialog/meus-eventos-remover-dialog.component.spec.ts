import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusEventosRemoverDialogComponent } from './meus-eventos-remover-dialog.component';

describe('MeusEventosRemoverDialogComponent', () => {
  let component: MeusEventosRemoverDialogComponent;
  let fixture: ComponentFixture<MeusEventosRemoverDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusEventosRemoverDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusEventosRemoverDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
