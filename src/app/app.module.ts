import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { InMemoryDataService } from "./in-memory-data-service";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppComponent } from './app.component';

import { Singleton } from "./singleton/singleton.component";
import { Repository } from "./repository/repository.component";
import { ServiceLocator } from "./service-locator/service-locator.component";
import { Observer } from "./observer/observer.component";
import { Decorator } from "./decorator/decorator.component";
import { Factory } from "./factory/factory.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      { path: 'singleton', component: Singleton },
      { path: 'repository', component: Repository },
      { path: 'service-locator', component: ServiceLocator },
      { path: 'observer', component: Observer },
      { path: 'decorator', component: Decorator },
      { path: 'factory', component: Factory }
    ])],
  declarations: [AppComponent, Singleton, Repository, ServiceLocator, Observer, Decorator, Factory],
  bootstrap: [AppComponent]
})
export class AppModule { }
