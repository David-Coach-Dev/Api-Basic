import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../shared/entities/base.entity";

@Entity({ name: "users" })
export class UserEntity extends BaseEntity{
  @Column()
  name!: string;
  @Column()
  lastName!: string;
  @Column()
  userName!: string;
  @Column()
  email!: string;
  @Column()
  password!: string;
  @Column()
  city!: string;
  @Column()
  province!: string;
  @Column()
  country!: string;
  @Column()
  numberPhone!: number;
  @Column()
  jobPosition!: string;
  @Column()
  rol!: string;
  @Column()
  status!: string;
  @Column()
  avatar!: string;
  @Column()
  token!: string;
}