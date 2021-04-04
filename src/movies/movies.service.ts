import { Movie } from './entities/movie.entity.';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];
}
