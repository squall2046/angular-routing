import { Component, OnInit } from '@angular/core';

// 子组件 newscontent, 获取从父组件 news 来的传值
// step1:
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.css']
})
export class NewscontentComponent implements OnInit {

  // step2:
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    // step3:
    // ``` way1: 父组件 news 通过 GET 方式传值时 (url:  ?aid=xxx)
    // console.log(this.route.queryParams)

    // 可见, 当使用 GET方式传值时, @angular/router 中的 ActivatedRoute 模块,
    // 是通过获取 html 的 ng-route-link 中 [queryParams] 的值来完成传值的.
    // 但要注意, 无法直接使用 this.route.queryParams.value, 而是要用异步方式获得. 如下:
    this.route.queryParams.subscribe((data) => {
      console.log('queryParams', data)
    })

    // ``` way2: 父组件 news 通过 动态 route 传值时 (url:  /xxx)
    // console.log(this.route.params)

    // 可见, 当使用 动态 route 方式传值时, @angular/router 中的 ActivatedRoute 模块,
    // 是通过获取 html 的 ng-route-link 中 routeParam 的值来完成传值的.
    // 但要注意, 无法直接使用 this.route.params.value, 而是要用异步方式获得. 如下:
    this.route.params.subscribe((data) => {
      console.log('routeParam', data)
    })

  }

}
