import { IsString, IsNumber, IsBoolean } from "class-validator";

export class CreateMessageGroupDto {
  @IsString()
  readonly name?: string;

  @IsNumber()
  readonly date?: number;

  @IsNumber()
  readonly time?: number;

  @IsString()
  readonly message?: string;

  @IsString()
  readonly groupId?: string;

  @IsBoolean()
  readonly scheduled?: boolean;

  @IsBoolean()
  readonly sent?: boolean;
}
