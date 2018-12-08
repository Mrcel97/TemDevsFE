import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatSliderModule, MatSlideToggleModule, MatGridListModule, MatAutocompleteModule, MatFormFieldModule, MatOptionModule, MatInputModule } from '@angular/material';

const MATERIAL_MODULES = [
  CommonModule,
  MatTabsModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatOptionModule,
  MatInputModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
  declarations: []
})
export class MaterialModule { }
