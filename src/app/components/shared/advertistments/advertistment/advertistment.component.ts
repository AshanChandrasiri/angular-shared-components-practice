import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-advertistment',
  templateUrl: './advertistment.component.html',
  styleUrls: ['./advertistment.component.scss']
})
export class AdvertistmentComponent implements OnInit {



  imageList: any[] = [];
  imageName
  i :number = 0

  


  constructor() { }

  ngOnInit() {

    this.imageList.push("https://image.winudf.com/v2/image1/YXUuY29tLmRvbWlub3Mub2xvLmFuZHJvaWQuYXBwX3NjcmVlbl8xXzE1NTMwNDc4MTdfMDEx/screen-1.jpg?fakeurl=1&type=.jpg");
    this.imageList.push('https://previews.123rf.com/images/ganpanjaneedesign/ganpanjaneedesign1802/ganpanjaneedesign180200048/95434649-pink-business-brochure-perfume-in-a4-size-magazine-ads-template-cosmetics-beauty-cover-design-.jpg');
    this.imageList.push('https://lh3.googleusercontent.com/proxy/b_XucTHvvtM6rxQP6Dwwy9NGlT1OWfSSRGCb38Y4fcFacyvhPp2XWeNXJZVfqhLHujYYlZbA27RK33LPkaG2uYa6oSolwbT2MhxVygBYrsfXgqdwr96dk37Z83oRJblUdXGw3cUn3vmabVmXlY7s-Lr0lxmF0NZ4');
    this.imageList.push('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aca0d170989373.5bc72b7cb3ba4.jpg');



    setInterval(()=>{

      if(this.i === 4){
        this.i = 0;
      }

      this.imageName = this.imageList[this.i++]



    },2000)



  }


}
