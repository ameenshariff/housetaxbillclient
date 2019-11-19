import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
// import { MatSortModule } from '@angular/material/sort';
import {MatSortModule, MatFormField, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatCardModule,MatProgressSpinnerModule
  ]
})

export class AngularMaterialModule {}