import { IsString } from "class-validator";

export class CreateGroupDto {
  @IsString()
  readonly groupName?: string;

  @IsString()
  readonly weddingId?: string;
}
