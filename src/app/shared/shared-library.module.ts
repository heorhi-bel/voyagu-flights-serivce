import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    SliderModule,
    ButtonModule,
    MultiSelectModule,
    SelectModule,
    DropdownModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    SliderModule,
    ButtonModule,
    MultiSelectModule,
    SelectModule,
    DropdownModule,
    HttpClientModule
  ],
  providers: []
})
export class SharedLibraryModule {}
