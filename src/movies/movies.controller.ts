import { CreateMovieDto } from "./dto/create-movie.dto";
import { Movie } from "./entities/movie.entity.";
import { MoviesService } from "./movies.service";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";

@Controller("movies")
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get("search")
  search(@Query("year") searchingYear: string) {
    return `we are searching ${searchingYear}`;
  }

  @Get("/:id")
  getOne(@Param("id") id: number) {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete("/:id")
  remove(@Param("id") id: number) {
    return this.moviesService.deleteOne(id);
  }

  @Patch("/:id")
  patch(@Param("id") id: number, @Body() updateData) {
    return this.moviesService.update(id, updateData);
  }
}
