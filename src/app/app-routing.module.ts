import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCarsComponent } from './my-cars/my-cars.component';
import { CarGalleryComponent } from './car-gallery/car-gallery.component';
import { BrandFavoritesComponent } from './brand-favorites/brand-favorites.component';
import { AuthComponent } from './auth/auth.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component : HomeComponent},
  {path: 'myCars', component : MyCarsComponent, children: []},
  {path: 'carGallery', component : CarGalleryComponent},
  {path: 'brandFavorites', component : BrandFavoritesComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
