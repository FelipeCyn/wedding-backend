import { IsString } from "class-validator";

export class CreateGroupGuestDto {
  @IsString()
  readonly guestId?: string;

  @IsString()
  readonly groupId?: string;
}
