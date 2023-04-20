import { IsString, IsEmail, IsNumber, IsBoolean } from "class-validator";

export class CreateGuestDto {
  @IsString()
  readonly firstName?: string;

  @IsString()
  readonly lastName?: string;

  @IsNumber()
  readonly phoneNumber?: string;

  @IsBoolean()
  readonly rsvp?: boolean;

  @IsNumber()
  readonly guests?: number;

  @IsString()
  readonly weddingId?: string;

  @IsString()
  readonly mealOptionId?: string;
}
