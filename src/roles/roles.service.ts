import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './entities/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}
  async createRole(dto: CreateRoleDto): Promise<Role> {
    return await this.roleRepository.create(dto);
  }

  async getAllRoles(): Promise<Role[]> {
    return await this.roleRepository.findAll();
  }
  async getRoleByName(name: string): Promise<Role> {
    return await this.roleRepository.findOne({
      rejectOnEmpty: false,
      where: { name },
    });
  }
}
