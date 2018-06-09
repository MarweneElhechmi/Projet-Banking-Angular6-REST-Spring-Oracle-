import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { User } from '../../model/model.user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { MatIconModule, MatCardModule, MatFormFieldModule,
     MatTabsModule, MatInputModule } from '@angular/material';


@NgModule({
    imports: [CommonModule, LoginRoutingModule, FormsModule,
        MatIconModule,MatCardModule,MatFormFieldModule,MatTabsModule,MatInputModule
        ],
    declarations: [LoginComponent]
})
export class LoginModule {}

