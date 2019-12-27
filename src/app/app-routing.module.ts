import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HitsListingComponent } from './components/hits-listing/hits-listing.component';

const routes: Routes = [
  {
    path : "hits",
    component : HitsListingComponent
  },
  {
    path : "**",
    component : HitsListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
