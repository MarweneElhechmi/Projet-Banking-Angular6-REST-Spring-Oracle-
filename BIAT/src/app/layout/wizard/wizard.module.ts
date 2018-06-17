import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { WizardComponent } from './wizard.component';
import { WizardRoutingModule } from './wizard-routing.module';


@NgModule({
    imports: [CommonModule, WizardRoutingModule,MatTabsModule,MatCardModule,FormsModule,TableModule],
    declarations: [WizardComponent]
})
export class WizardModule {}
