import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlightsComponent } from './flights.component';
import { FlightsRoutingModule } from './flights.routing';
import { SharedModule } from '../../shared/shared.module';
import { FlightsService } from './flights.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [SharedModule, BrowserModule, CommonModule, FlightsRoutingModule, FormsModule, ReactiveFormsModule, DropdownModule],
  declarations: [FlightsComponent],
  exports: [FlightsComponent],
  providers: [FlightsService]
})
export class FlightsModule {}
