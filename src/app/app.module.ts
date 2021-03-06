import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { RouterModule } from '@angular/router'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    LogComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
   
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      
      { path: 'log', component: LogComponent },
     
      
    ])    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
