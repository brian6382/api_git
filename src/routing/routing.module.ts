import { ProfileComponent } from './../app/profile/profile.component';
import { searchComponent } from './../app/search/search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

// Defining routes
const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'search', component: searchComponent },
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  // { path:'**', component:NotFoundComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
