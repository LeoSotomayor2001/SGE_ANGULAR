import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ImagePipe } from './pipes/image-pipe.pipe';



@NgModule({
  declarations: [
    ErrorMessageComponent,
    ImagePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ErrorMessageComponent,
    ImagePipe
  ]
})
export class SharedModule { }
