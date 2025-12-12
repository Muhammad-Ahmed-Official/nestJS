import { SetMetadata } from "@nestjs/common";

// SetMetadata function is to set multiple value into custom decoraters not buildIn in current snario

export const ROLES_KEY = 'roles';

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);