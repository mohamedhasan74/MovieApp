import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:"full"},
  {path: "home", component: HomeComponent},
  {path: 'moviedetails/:id', loadChildren: () => import('./moviedetails/moviedetails.module').then(m => m.MoviedetailsModule) },
  {path: "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
