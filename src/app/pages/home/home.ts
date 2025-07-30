import { Component, HostListener, signal } from '@angular/core';
import { Slideshow } from '../../shared/components/slideshow/slideshow';
import { CarteleraResponse, Movie } from '../../shared/interfaces/cartelera-response';
import { HttpClient } from '@angular/common/http';
import { PeliculasPosterGrid } from '../../components/peliculas-poster-grid/peliculas-poster-grid';

@Component({
  selector: 'app-home',
  imports: [Slideshow, PeliculasPosterGrid],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly url = 'https://api.themoviedb.org/3/movie/now_playing';
  private currentPage = signal(1);
  private loading = signal(false);
  public movies = signal<Movie[]>([]);

  constructor(private http: HttpClient) {
    this.loadMovies();
  }

  private loadMovies() {
    if (this.loading()) return;
    
    this.loading.set(true);
    this.http.get<CarteleraResponse>(this.url, {
      params: {
        page: this.currentPage().toString()
      }
    }).subscribe(resp => {
      this.movies.update(movies => [...movies, ...resp.results]);
      this.loading.set(false);
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max && !this.loading()) {
      this.currentPage.update(page => page + 1);
      this.loadMovies();
    }
  }
  
}
