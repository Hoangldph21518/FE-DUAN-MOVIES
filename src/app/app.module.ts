import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutClientComponent } from './layout/base-layout-client/base-layout-client.component';
import { BaseLayoutAdminComponent } from './layout/base-layout-admin/base-layout-admin.component';
import { BaseLayoutAuthComponent } from './layout/base-layout-auth/base-layout-auth.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutClientComponent,
    BaseLayoutAdminComponent,
    BaseLayoutAuthComponent,
    MoviesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
