import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreateHrAnswerDto {
    @ApiProperty()
    readonly text: string;
    @ApiProperty()
    readonly appeal_id: number;
}
