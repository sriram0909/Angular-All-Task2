import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PplmForm1Component } from './pplm-form1/pplm-form1.component';
import { Form1ListComponent } from './form1-list/form1-list.component';
import { FileUploadDownloadComponent } from './file-upload-download/file-upload-download.component';
import { UnderlyingMatchingModule } from './underlying-matching/underlying-matching.module';




const routes: Routes = [
  {path:'',loadChildren:()=>import('./underlying-matching/underlying-matching.module').then(m=>m.UnderlyingMatchingModule)},
  // {path:'',redirectTo:'file-upload-download',pathMatch:'full'},
  {path:'pplm-form',component:PplmForm1Component},
  {path:'pplm-formlist',component:Form1ListComponent},
  {path:'pplm-form/:id',component:PplmForm1Component},
  {path:'file-upload-download',component:FileUploadDownloadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
