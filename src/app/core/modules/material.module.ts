import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatTableModule,
  MatSnackBarModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MATERIAL_MODULES],
  exports: [MATERIAL_MODULES]
})
export class MaterialModule { }
