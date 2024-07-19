import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Role } from './entities/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({ summary: 'Create new role' })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() dto: CreateRoleDto): Promise<Role> {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({ summary: 'Get all roles' })
  @ApiResponse({ status: 200, type: [Role] })
  @Get()
  getAll(): Promise<Role[]> {
    return this.roleService.getAllRoles();
  }

  @ApiOperation({ summary: 'Get role by name' })
  @ApiResponse({ status: 200, type: Role })
  @Get('/:name')
  getByName(@Param('name') name: string): Promise<Role> {
    return this.roleService.getRoleByName(name);
  }
}
