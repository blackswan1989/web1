import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel은 이 패키지가 제공합니다.

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';

//애플리케이션 동작에 필요한 메타데이터는 @NgModule 데코레이터에 지정해준다.
@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// FormsModule 로드하기 : https://angular.kr/tutorial/toh-pt1#formsmodule-%EB%A1%9C%EB%93%9C%ED%95%98%EA%B8%B0
