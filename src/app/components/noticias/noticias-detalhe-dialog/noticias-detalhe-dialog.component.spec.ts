import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasDetalheDialogComponent } from './noticias-detalhe-dialog.component';

describe('NoticiasDetalheDialogComponent', () => {
  let component: NoticiasDetalheDialogComponent;
  let fixture: ComponentFixture<NoticiasDetalheDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasDetalheDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasDetalheDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
