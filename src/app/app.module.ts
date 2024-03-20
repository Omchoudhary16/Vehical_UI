import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FootComponent } from './foot/foot.component';
import { AddNewComponent } from './add-new/add-new.component';
import { CatalogViewComponent } from './catalog-view/catalog-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { VehService } from './Service/veh.service';
import { VehsearchPipe } from './Pipe/vehsearch.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FootComponent,
    AddNewComponent,
    CatalogViewComponent,

    VehsearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    //Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [VehService],
  bootstrap: [AppComponent]
})
export class AppModule { }
