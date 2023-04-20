import { IsString, IsNumber } from "class-validator";

export class CreateMealOptionDto {
  @IsString()
  readonly name?: string;

  @IsNumber()
  readonly number?: number;

  @IsNumber()
  readonly counter?: number;

  @IsString()
  readonly weddingId?: string;
}
