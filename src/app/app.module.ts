import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthService } from './base/util/auth.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './base/header/header.component';
import { FooterComponent } from './base/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavMenuComponent } from './base/sidenav-menu/sidenav-menu.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { PerfilDialogComponent } from './components/perfil/perfil-dialog/perfil-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { NoticiasAdminComponent } from './components/noticias-admin/noticias-admin.component';
import { NoticiasAdminDialogComponent } from './components/noticias-admin/noticias-admin-dialog/noticias-admin-dialog.component';
import { NoticiasAdminRemoverDialogComponent } from './components/noticias-admin/noticias-admin-remover-dialog/noticias-admin-remover-dialog.component';
import { NoticiasDetalheDialogComponent } from './components/noticias/noticias-detalhe-dialog/noticias-detalhe-dialog.component';
import { EventosNovoDialogComponent } from './components/eventos/eventos-novo-dialog/eventos-novo-dialog.component';
import { MeusEventosComponent } from './components/meus-eventos/meus-eventos.component';
import { EventosDetalheDialogComponent } from './components/eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component';
import { MeusEventosDialogComponent } from './components/meus-eventos/meus-eventos-dialog/meus-eventos-dialog.component';
import { MeusEventosRemoverDialogComponent } from './components/meus-eventos/meus-eventos-remover-dialog/meus-eventos-remover-dialog.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthService]
  },
  {
    path: 'eventos',
    component: EventosComponent,
    canActivate: [AuthService]
  },
  {
    path: 'meus-eventos',
    component: MeusEventosComponent,
    canActivate: [AuthService]
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
    canActivate: [AuthService]
  },
  {
    path: 'noticiasadmin',
    component: NoticiasAdminComponent,
    canActivate: [AuthService]
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [AuthService]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    DashboardComponent,
    SidenavMenuComponent,
    EventosComponent,
    PerfilComponent,
    PerfilDialogComponent,
    NoticiasComponent,
    NoticiasAdminComponent,
    NoticiasAdminDialogComponent,
    NoticiasAdminRemoverDialogComponent,
    NoticiasDetalheDialogComponent,
    EventosNovoDialogComponent,
    MeusEventosComponent,
    EventosDetalheDialogComponent,
    MeusEventosDialogComponent,
    MeusEventosRemoverDialogComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    MatDatepickerModule,
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    PerfilDialogComponent,
    NoticiasDetalheDialogComponent,
    NoticiasAdminDialogComponent,
    NoticiasAdminRemoverDialogComponent,
    EventosNovoDialogComponent,
    EventosDetalheDialogComponent,
    MeusEventosDialogComponent,
    MeusEventosRemoverDialogComponent
  ]
})
export class AppModule { }
