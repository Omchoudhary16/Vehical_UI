import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from './add-new/add-new.component';
import { CatalogViewComponent } from './catalog-view/catalog-view.component';

const routes: Routes = [
  { path : '', component : CatalogViewComponent },
  { path : 'add', component : AddNewComponent},
  { path : 'update/:id', component : AddNewComponent},
  { path : 'view', component : CatalogViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
