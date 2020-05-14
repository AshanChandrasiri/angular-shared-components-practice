import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatDialogModule, MatCardModule, MatOptionModule, MatSelectModule, MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTabsModule } from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SideNavMessageService } from './core/service/sidenav.message.service';
import { SharedModule } from './components/shared/shared.module';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // SideNavBarComponent,
    // NavHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    FlexLayoutModule,
    SharedModule,

    RatingModule
    
  
  

    
  ],
  providers: [
    SideNavMessageService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
