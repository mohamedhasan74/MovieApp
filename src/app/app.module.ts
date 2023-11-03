import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MovieComponent } from './Components/movie/movie.component';
import { TextcutPipe } from './Pipes/textcut.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { NumberfixedPipe } from './Pipes/numberfixed.pipe';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MovieComponent,
    TextcutPipe,
    HeaderComponent,
    NotfoundComponent,
    // NumberfixedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
