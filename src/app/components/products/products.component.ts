import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  productsContent() {
    this.router.navigate(['/productscontent'])
  }

  goHome() {
    this.router.navigate(['/home'])
  }

  // js click event 跳转页面并 GET 传值

  
  newsContent() {
    this.router.navigate(['/newscontent', '1'])
  }


  newsContentParam() {
    let queryParams: NavigationExtras = {
      queryParams: { 'aid': 1 }
    }
    this.router.navigate(['/newscontent'], queryParams)
  }

}
