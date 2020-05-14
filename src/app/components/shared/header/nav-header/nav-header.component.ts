import { Component, OnInit } from '@angular/core';
import { SideNavMessageService } from 'src/app/core/service/sidenav.message.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {


  isExpanded = false;

  constructor(private sideNavMessageService: SideNavMessageService) { }

  ngOnInit() {
  }


  changeState(){
    this.isExpanded = !this.isExpanded
    this.sideNavMessageService.sendMessage('FROM-NAV-HEADER','TOGGLE-SIDE-NAV-BAR',this.isExpanded)

  }

}
