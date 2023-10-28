import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'


export class CreatePositionDto {
  @ApiProperty()
    name: string;
  @ApiPropertyOptional()
    description?: string;

}
