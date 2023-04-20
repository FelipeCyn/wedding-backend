import {
  IsString,
  IsEmail,
  IsNumber,
  IsDate,
  IsBoolean,
} from "class-validator";

export class CreateWeddingDto {
  @IsDate()
  readonly date?: Date;

  @IsNumber()
  readonly time?: number;

  @IsString()
  readonly address: string;

  @IsBoolean()
  readonly mealResponses?: boolean;

  @IsNumber()
  readonly userId?: number;

  @IsBoolean()
  readonly rsvps?: boolean;

  @IsBoolean()
  readonly trial?: boolean;

  @IsString()
  readonly status?: string;
}
