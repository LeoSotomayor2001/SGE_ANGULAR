import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Pipe({
  name: 'imagePipe',
  standalone: false,
})

export class ImagePipe implements PipeTransform {
 baseUrl=environment.API_URL
  transform(value: null | string | string[]): string {
    if (value === null) {
      return './assets/img/usuario.svg';
    }
    if (typeof value === 'string' && value.startsWith('blob:')) {
      return value;
    }
    if (typeof value === 'string') {
      return `${this.baseUrl}/imagen/${value}`;
    }

    const image = value[0];
    if (!image) {
      return './assets/images/no-image.jpg';
    }

    return `${this.baseUrl}/imagen/${image}`;
  }
}
