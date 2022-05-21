
 import { BrowserModule } from '@angular/platform-browser';
 import { RouterModule, Routes } from '@angular/router';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { NgModule } from '@angular/core';
 import { NgxSvgModule } from 'ngx-svg';
 import { AppComponent } from './app.component';
 import { RectComponent } from './pages/rect/rect.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 const routes: Routes = [
   { path: '', component: RectComponent },
 ];
 
 @NgModule({
   declarations: [
     AppComponent,
    //  HeaderComponent,
     RectComponent,
   ],
   imports: [
     ReactiveFormsModule,
     FormsModule,
     BrowserModule,
     RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
     NgxSvgModule,
     FormsModule,
     HttpClientModule,
     BrowserAnimationsModule,
     ToastrModule.forRoot(),
   ],
   providers: [],
   bootstrap: [AppComponent]
 })
 export class AppModule { }
 