import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from "@nestjs/common";
import { CreateMessageGroupDto } from "./dto/create-messageGroup.dto";
import { MessageGroupService } from "./messageGroup.service";

@Controller("message-group")
export class MessageGroupController {
  constructor(private readonly messageGroupService: MessageGroupService) {}

  @Get()
  findAll() {
    return this.messageGroupService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.messageGroupService.findOne(id);
  }

  @Post()
  create(@Body() CreateMessageGroupDto: CreateMessageGroupDto) {
    return this.messageGroupService.create(CreateMessageGroupDto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() body) {
    return this.messageGroupService.update(id, body);
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.messageGroupService.remove(id);
  }
}
