import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { ionCarSportSharp } from '@ng-icons/ionicons';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { MyCarsComponent } from './my-cars/my-cars.component';
import { CarGalleryComponent } from './car-gallery/car-gallery.component';
import { ContactComponent } from './contact/contact.component';
import { BrandFavoritesComponent } from './brand-favorites/brand-favorites.component';
import { HomeComponent } from './home/home.component';
import { NightModeComponent } from './night-mode/night-mode.component';
import { MyCarsListComponent } from './my-cars/my-cars-list/my-cars-list.component';
import { MyCarsItemComponent } from './my-cars/my-cars-list/my-cars-item/my-cars-item.component';
import { myCarsService } from './my-cars/my-cars.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    MyCarsComponent,
    CarGalleryComponent,
    ContactComponent,
    BrandFavoritesComponent,
    HomeComponent,
    NightModeComponent,
    MyCarsListComponent,
    MyCarsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ ionCarSportSharp }),
    FormsModule,
    HttpClientModule
  ],
  providers: [myCarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
