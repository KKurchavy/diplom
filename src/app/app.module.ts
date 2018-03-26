import { AppLoadingModule } from './app-loading/app-loading.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppService } from './app.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppLoadingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:3130/admin/hello'],
        blacklistedRoutes: ['localhost:3130/login']
      }
    })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
