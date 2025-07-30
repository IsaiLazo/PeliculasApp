import { Component, Input } from '@angular/core';
import { Movie } from '../../shared/interfaces/cartelera-response';
import { StarRatingComponent } from '../../shared/components/star-rating/star-rating';

@Component({
  selector: 'app-peliculas-poster-grid',
  imports: [StarRatingComponent],
  templateUrl: './peliculas-poster-grid.html',
  styleUrl: './peliculas-poster-grid.scss'
})
export class PeliculasPosterGrid {

  @Input() movies: Movie[] = [];
  
  /**
   * Returns the full URL for the movie poster image.
   * @param path The relative path of the movie poster image.
   * @returns The full URL for the movie poster image.
   */
  getBackgroundImage(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

}
