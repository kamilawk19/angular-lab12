import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//add components
import { ListComponentComponent } from './list-component/list-component.component';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { AddPersonComponentComponent } from './add-person-component/add-person-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

const routes: Routes = [
  { path: '', component: ListComponentComponent },
  { path: 'details/:id', component: DetailsComponentComponent },
  { path: 'add', component: AddPersonComponentComponent },
  { path: '**', component: NotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
