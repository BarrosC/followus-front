import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasAdminDialogComponent } from './noticias-admin-dialog.component';

describe('NoticiasAdminDialogComponent', () => {
  let component: NoticiasAdminDialogComponent;
  let fixture: ComponentFixture<NoticiasAdminDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasAdminDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
