import { User } from "../entities/user.entity";
import constants from "../../common/constants";
import { UserRoles } from "../entities/user-roles.entity";
import { Role } from "src/role/entities/role.entity";

export const usersProvider = [
  {
    provide: constants.USERS_REPOSITORY,
    useValue: User,
  },
  {
    provide: constants.USER_ROLES_REPOSITORY,
    useValue: UserRoles,
  },
  {
    provide: constants.ROLES_REPOSITORY,
    useValue: Role,
  }
];