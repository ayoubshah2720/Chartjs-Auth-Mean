import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './user/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthGuard } from './authguard/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { LineChartComponent } from './Components/line-chart/line-chart.component';
import { BarChartsComponent } from './Components/bar-charts/bar-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    HomeComponent,
    LineChartComponent,
    BarChartsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
