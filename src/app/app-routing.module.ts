import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,  
},
{
  path: 'about',
  component: AboutComponent,
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
},
{ path: 'colors',
  loadChildren: () => import('./colors/colors.module').then(m => m.ColorsModule), 
},
  { path: 'auth', 
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
