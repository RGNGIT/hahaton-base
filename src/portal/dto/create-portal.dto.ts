export class CreatePortalDto {
    readonly name: string;
    readonly description?: string;
    readonly TIN: string;
    readonly address: string;
    readonly admin_id: number;
}
