import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule, MatTabsModule, MatDividerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavHeaderComponent } from './header/nav-header/nav-header.component';
import { AdvertistmentComponent } from './advertistments/advertistment/advertistment.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [

    SideNavBarComponent,
    NavHeaderComponent,
    AdvertistmentComponent,
    SearchBarComponent


  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  exports: [
    SideNavBarComponent,
    NavHeaderComponent,
    AdvertistmentComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }
