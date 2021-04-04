import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'Hello';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `we are searching ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return ${id}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return 'This will return create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `This will delete ${id}`;
  }

  @Patch('/:id')
  patch(@Param('id') id: string, @Body() updateData) {
    return {
      updatedMovie: id,
      ...updateData,
    };
  }
}
