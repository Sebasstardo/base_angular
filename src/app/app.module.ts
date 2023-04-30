import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Counter } from './counter/counter.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { DbzModule } from './dbz/dbz.module';
import { MainPageComponent } from './dbz/pages/main-page/main-page.component';

@NgModule({
  declarations: [AppComponent, Counter, HeroComponent, ListComponent],
  imports: [BrowserModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
