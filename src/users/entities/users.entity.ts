import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../shared/entities/base.entity";


@Entity({ name: "users" })
export class UserEntity extends BaseEntity{
  @Column()
  userName!: string;

  @Column()
  name!: string;

  @Column()
  lastName!: string;

  @Column({
    nullable: true,
  })
  jobPosition?: string;

  @Column()
  numberPhone!: number;

}