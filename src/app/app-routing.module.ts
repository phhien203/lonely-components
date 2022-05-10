import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hero-list',
    loadComponent: () =>
      import('./hero-list/hero-list.component').then(
        (m) => m.HeroListComponent
      ),
  },
  {
    path: 'cool-feature',
    loadChildren: () =>
      import('./cool-feature/cool-feature.module').then(
        (m) => m.CoolFeatureModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
