import { IsString, IsEmail, IsNumber } from "class-validator";

export class CreateMessageDto {
  @IsString()
  readonly name?: string;

  @IsNumber()
  readonly date?: number;

  @IsNumber()
  readonly time?: number;

  @IsString()
  readonly message?: string;

  @IsString()
  readonly guestId?: string;
}
