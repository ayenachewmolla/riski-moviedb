import { NgModule } from '@angular/core';

import { MatToolbarModule } from "@angular/material/toolbar"
import { MatButtonModule } from '@angular/material/button'

import { from } from 'rxjs';
const material = [
  MatToolbarModule,

]
@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule { }
