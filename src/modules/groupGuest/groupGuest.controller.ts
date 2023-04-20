import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from "@nestjs/common";
import { CreateGroupGuestDto } from "./dto/create-groupGuest.dto";
import { GroupGuestService } from "./groupGuest.service";

@Controller("groupGuest")
export class GroupGuestController {
  constructor(private readonly groupGuestService: GroupGuestService) {}

  @Get()
  findAll() {
    return this.groupGuestService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.groupGuestService.findOne(id);
  }

  @Post()
  create(@Body() CreateGroupGuestDto: CreateGroupGuestDto) {
    return this.groupGuestService.create(CreateGroupGuestDto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() body) {
    return this.groupGuestService.update(id, body);
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.groupGuestService.remove(id);
  }
}
