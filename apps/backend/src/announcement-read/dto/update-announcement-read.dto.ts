import { PartialType } from '@nestjs/swagger';
import { CreateAnnouncementReadDto } from './create-announcement-read.dto';

export class UpdateAnnouncementReadDto extends PartialType(
  CreateAnnouncementReadDto
) {}
