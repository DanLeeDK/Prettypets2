import { GlobalEventsManager } from './shared/GlobalEventsManager';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthInterceptor } from './Interceptors/http.interceptor';
import { TokenService } from './token.service';
import { UserService } from './user/user.service';
import { SearchPipe } from './search-pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetService } from './pets/pet.service';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CreatePetComponent } from './pets/create-pet/create-pet.component';
import { MypetsComponent } from './pets/mypets/mypets.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { PetProfilComponent } from './pets/pet-profil/pet-profil.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { LoginComponent } from './user/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CreatePetComponent,
    MypetsComponent,
    PetListComponent,
    PetProfilComponent,
    CreateUserComponent,
    LoginComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    AlertModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CollapseModule,
    BrowserAnimationsModule
  ],
providers: [
    PetService,
    UserService,
    TokenService,
    AuthGuard,
    GlobalEventsManager,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
