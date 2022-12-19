import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PplmForm1Component } from './pplm-form1/pplm-form1.component';
import { Form1ListComponent } from './form1-list/form1-list.component';
import { HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FileUploadDownloadComponent } from './file-upload-download/file-upload-download.component';
import { UnderlyingMatchingModule } from './underlying-matching/underlying-matching.module';

@NgModule({
  declarations: [
    AppComponent,
    PplmForm1Component,
    Form1ListComponent,
    FileUploadDownloadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UnderlyingMatchingModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
