import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCarsComponent } from './my-cars/my-cars.component';
import { CarGalleryComponent } from './car-gallery/car-gallery.component';
import { BrandFavoritesComponent } from './brand-favorites/brand-favorites.component';
import { AuthComponent } from './auth/auth.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component : HomeComponent, canActivate: [AuthGuard]},
  {path: 'myCars', component : MyCarsComponent, canActivate: [AuthGuard], children: []},
  {path: 'carGallery', component : CarGalleryComponent, canActivate: [AuthGuard]}, 
  {path: 'brandFavorites', component : BrandFavoritesComponent , canActivate: [AuthGuard]},
  {path: 'auth', component: AuthComponent},
  {path: 'contact', component: ContactComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
