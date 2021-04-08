import { CreateMovieDto } from "./create-movie.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
//타입으로 사용가능
//?붙여서 필수 값 아니어도됨
