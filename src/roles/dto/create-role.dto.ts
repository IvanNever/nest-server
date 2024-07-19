import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({
    example: 'admin',
    description: 'The unique name of the user role',
  })
  readonly name: string;

  @ApiProperty({
    example: 'User with administration permissions',
    description:
      'A brief explanation or summary of the responsibilities and permissions associated with the user role',
  })
  readonly description: string;
}
