/**
 * @class User
 */

import { Role } from './Role/role.entity';

export class User {
  private id: number;

  private login: string;

  private password: string;

  private roles: Role[];

  constructor(login: string, password: string, roles: Role[] = []) {
    this.login = login;
    this.password = password;
    this.roles = roles;
  }

  public getId(): number {
    return this.id;
  }

  public getLogin(): string {
    return this.login;
  }

  public getPassword(): string {
    return this.password;
  }

  public changeLogin(login: string): void {
    this.login = login;
  }

  public changePassword(password: string): void {
    this.password = password;
  }

  public addRole(role: Role): void {
    this.roles.push(role);
  }

  public deleteRole(roleName: string): void {
    this.roles = this.roles.filter((role) => role.getName() !== roleName);
  }
}
