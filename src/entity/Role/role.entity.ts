/**
 * @class Role
 */

import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

const TABLE_NAME = 'roles';

@Entity({ name: TABLE_NAME })
export class Role {
  @PrimaryGeneratedColumn({ name: 'id' })
  @Expose({ name: 'id' })
  public _id!: number;

  @Column({ name: 'name', unique: true })
  @Expose({ name: 'name' })
  public _name: string;

  @Column({ name: 'description' })
  @Expose({ name: 'description' })
  public _description: string;

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  public getId(): number {
    return this._id;
  }

  public getName(): string {
    return this._name;
  }

  public getDescription(): string {
    return this._description;
  }

  public changeDescription(description: string): void {
    this._description = description;
  }

  public rename(name: string): void {
    this._name = name;
  }
}
