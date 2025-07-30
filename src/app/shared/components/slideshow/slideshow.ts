import { Component, Input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-slideshow',
  imports: [RouterLink],
  templateUrl: './slideshow.html',
  styleUrl: './slideshow.scss'
})
export class Slideshow {
  @Input() movies: Movie[] = [];
  currentIndex = signal(0);
  
  // URL base para imágenes de TMDB
  private baseImgUrl = 'https://image.tmdb.org/t/p/original';

  constructor() {
    // Auto-slide cada 5 segundos
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  getBackgroundImage(backdropPath: string): string {
    return `${this.baseImgUrl}${backdropPath}`;
  }

  nextSlide() {
    this.currentIndex.update(current => 
      current === this.movies.length - 1 ? 0 : current + 1
    );
  }

  prevSlide() {
    this.currentIndex.update(current => 
      current === 0 ? this.movies.length - 1 : current - 1
    );
  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
  }
}
