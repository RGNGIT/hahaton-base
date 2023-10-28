import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreatePortalDto {
    @ApiProperty()
    readonly name: string;
    @ApiPropertyOptional()
    readonly description?: string;
    @ApiProperty()
    readonly admin_id: number;
}
