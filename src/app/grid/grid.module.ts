import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { SharedModule } from '../shared/shared.module';
import { GridComponent } from './grid.component';
import { GridRoutingModule } from './grid-routing.module';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    // SharedModule,
    GridRoutingModule
  ],
  providers: [],
  exports: [GridComponent]
})

export class GridModule { 
  
}
