import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoolFeatureRoutingModule } from './cool-feature-routing.module';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';

@NgModule({
  imports: [
    CommonModule,
    CoolFeatureRoutingModule,
    Cmp1Component,
    Cmp2Component,
  ],
})
export class CoolFeatureModule {}
