import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NewsComponent } from './components/news/news.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { StatusComponent } from './components/status/status.component';
import { ProgressComponent } from './components/progress/progress.component';
import { UserComponent } from './components/user/user.component';
import { SideComponent } from './components/side/side.component';
import { ReportsComponent } from './components/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    NavbarComponent,
    NotFoundComponent,
    NewsComponent,
    TasksComponent,
    StatusComponent,
    ProgressComponent,
    UserComponent,
    SideComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
