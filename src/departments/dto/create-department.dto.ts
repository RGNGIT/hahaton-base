export class CreateDepartmentDto {
    readonly name: string;
    readonly description?: string;
    readonly parent_department_id?: number;
    readonly portal_id: number;
}
