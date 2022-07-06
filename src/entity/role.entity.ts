/**
 * @class Role
 */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private value: string;

  constructor(id: number, value: string) {
    this.id = id;
    this.value = value;
  }

  public getId(): number {
    return this.id;
  }

  public getValue(): string {
    return this.value;
  }

  public changeValue(value: string): void {
    this.value = value;
  }
}
