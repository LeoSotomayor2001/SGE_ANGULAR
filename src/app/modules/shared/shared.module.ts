import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ImagePipe } from './pipes/image-pipe.pipe';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    ErrorMessageComponent,
    ImagePipe,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ErrorMessageComponent,
    LoadingSpinnerComponent,
    ImagePipe,
  ]
})
export class SharedModule { }
