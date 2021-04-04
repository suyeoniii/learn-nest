import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'Hello';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return ${id}`;
  }

  @Post()
  create() {
    return 'This will return create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `This will delete ${id}`;
  }

  @Patch('/:id')
  patch(@Param('id') id: string) {
    return `This will delete ${id}`;
  }
}
