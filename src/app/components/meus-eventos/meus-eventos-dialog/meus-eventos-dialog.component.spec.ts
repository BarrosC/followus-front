import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusEventosDialogComponent } from './meus-eventos-dialog.component';

describe('MeusEventosDialogComponent', () => {
  let component: MeusEventosDialogComponent;
  let fixture: ComponentFixture<MeusEventosDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusEventosDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusEventosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
