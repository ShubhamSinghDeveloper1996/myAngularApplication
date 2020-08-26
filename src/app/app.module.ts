import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './custom/components/header/header.component';
import { FooterComponent } from './custom/components/footer/footer.component';
import { CoronaVirusComponent } from './custom/components/corona-virus/corona-virus.component';
import { PageNotFoundComponent } from './custom/components/page-not-found/page-not-found.component';

import { CoronaVirusService } from './custom/services/corona-virus.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoronaVirusComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CoronaVirusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
