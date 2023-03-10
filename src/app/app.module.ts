import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BagComponent } from './bag/bag.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DialogComponent } from './bag/dialog/dialog.component'
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { BaglistComponent } from './baglist/baglist.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MaterialComponent } from './material/material.component';
import { PlanComponent } from './plan/plan.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDividerModule} from '@angular/material/divider';
import { PlanListComponent } from './plan-list/plan-list.component';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PlanInfoComponent } from './plan-info/plan-info.component';
import { MaterialDialogComponent } from './material/dialog/dialog.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { DesckComponent } from './desck/desck.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BagPriceComponent } from './bag-price/bag-price.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { NullValidationHandler, provideOAuthClient, ValidationHandler } from 'angular-oauth2-oidc';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HeadersInterceptor } from './headers.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BagComponent,
    DialogComponent,
    BaglistComponent,
    MaterialComponent,
    MaterialDialogComponent,
    PlanComponent,
    PlanListComponent,
    PlanInfoComponent,
    DesckComponent,
    BagPriceComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    DragDropModule,
    

    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule,

    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['http://192.168.1.100:8085'],
          sendAccessToken: true
      }
  })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


