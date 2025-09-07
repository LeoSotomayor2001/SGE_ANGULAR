import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-message',
  standalone: false,
  templateUrl: './welcome-message.component.html',
})
export class WelcomeMessageComponent  {
  fullText: string = 'Bienvenidos';
  displayedText: string = '';
  typingSpeed: number = 150; // Velocidad de escritura
  deletingSpeed: number = 75; // Velocidad de borrado
  pause: number = 1000; // Pausa entre escribir y borrar

  private isDeleting: boolean = false;
  private i: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter(): void {
    const totalLength = this.fullText.length;
    let speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting) {
      // Estado de escritura
      if (this.displayedText.length < totalLength) {
        this.displayedText += this.fullText.charAt(this.displayedText.length);
        this.i++;
      } else {
        // Pausar y cambiar a estado de borrado
        this.isDeleting = true;
        speed = this.pause;
      }
    } else {
      // Estado de borrado
      if (this.displayedText.length > 0) {
        this.displayedText = this.fullText.substring(0, this.displayedText.length - 1);
        this.i--;
      } else {
        // Pausar y cambiar a estado de escritura
        this.isDeleting = false;
        speed = this.pause;
      }
    }

    // Llamada recursiva para el siguiente paso de la animación
    setTimeout(() => this.typeWriter(), speed);
  }
}