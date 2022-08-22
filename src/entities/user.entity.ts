import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("users")
class User {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}

export { User };
