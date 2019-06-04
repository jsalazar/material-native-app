import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { SharedModule } from '../shared/shared.module';
import { DrawerComponent } from './drawer.component';
import { DrawerRoutingModule } from './drawer-routing.module';

@NgModule({
  declarations: [
    DrawerComponent
  ],
  imports: [
    CommonModule,
    // SharedModule,
    DrawerRoutingModule
  ],
  providers: [],
  exports: [DrawerComponent]
})

export class DrawerModule { 
  
}
