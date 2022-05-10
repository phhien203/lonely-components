import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cmp1',
    loadComponent: () =>
      import('./cmp1/cmp1.component').then((m) => m.Cmp1Component),
  },
  {
    path: 'cmp2',
    loadComponent: () =>
      import('./cmp2/cmp2.component').then((m) => m.Cmp2Component),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoolFeatureRoutingModule {}
