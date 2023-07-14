import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../config/entities/base.entity";


@Entity({ name: "user" })
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