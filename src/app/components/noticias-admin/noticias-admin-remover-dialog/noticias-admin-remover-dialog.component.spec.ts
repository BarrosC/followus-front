import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasAdminRemoverDialogComponent } from './noticias-admin-remover-dialog.component';

describe('NoticiasAdminRemoverDialogComponent', () => {
  let component: NoticiasAdminRemoverDialogComponent;
  let fixture: ComponentFixture<NoticiasAdminRemoverDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasAdminRemoverDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasAdminRemoverDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
