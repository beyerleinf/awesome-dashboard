import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DashboardComponent, PingCardComponent } from './components';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent, PingCardComponent],
  imports: [CommonModule, DashboardRoutingModule, MatCardModule, MatProgressSpinnerModule],
})
export class DashboardModule {}
