import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'


export class CreatePositionDto {
  @ApiProperty()
  readonly name: string;
  @ApiPropertyOptional()
  readonly description?: string;

}
