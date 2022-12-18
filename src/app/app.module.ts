import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app.routing.module';
import { ListComponentComponent } from './list-component/list-component.component';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { AddPersonComponentComponent } from './add-person-component/add-person-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ListComponentComponent,
    DetailsComponentComponent,
    AddPersonComponentComponent,
    NotFoundComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
