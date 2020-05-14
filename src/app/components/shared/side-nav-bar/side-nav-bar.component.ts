import { Component, OnInit, ViewChild } from '@angular/core';
import { SideNavMessageService } from 'src/app/core/service/sidenav.message.service';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = false;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  select: boolean = true;

  constructor(private sideNavMessageService: SideNavMessageService) { }
  ngOnInit(): void {

    this.sideNavMessageService.getMessage().subscribe(message => {

      if (message) {
        if (message.id === 'FROM-NAV-HEADER') {
          if (message.topic === 'TOGGLE-SIDE-NAV-BAR') {
            this.isExpanded = message.data
          }
        }
      }
    })

  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

}
