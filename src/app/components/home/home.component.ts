import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, state, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[

    trigger('EnterLeave1', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1s 100ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ]),

    trigger('EnterLeave2', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1.3s 130ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])



  ]
})
export class HomeComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
 
  }



  






}
