import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 1.把app.module.ts中引入的components复制粘贴到routing的配置中
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ProductsComponent } from './components/products/products.component';

import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductscontentComponent } from './components/productscontent/productscontent.component';

// 2.创建url的path, 分别显示不同的components
const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'news', component: NewsComponent
  },
  {
    // 1. news 子页面 newscontent:
    path: 'newscontent', component: NewscontentComponent
  },
  {
    // 2. news 子页面 newscontent/xxx:
    // 在url中用冒号加入一个动态route, :xxx
    path: 'newscontent/:aid', component: NewscontentComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'productscontent', component: ProductscontentComponent
  },
  {
    path: '**', redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
