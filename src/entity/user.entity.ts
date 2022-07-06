/**
 * @class User
 */

import { PrimaryGeneratedColumn, Column } from 'typeorm';
import { Role } from './role.entity';

export class User {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private login: string;

  @Column()
  private password: string;

  @Column()
  private roles: Role[];

  constructor(id: number, login: string, password: string, roles: Role[] = []) {
    this.id = id;
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

  public deleteRole(roleValue: string): void {
    this.roles = this.roles.filter((role) => role.getValue() !== roleValue);
  }
}
