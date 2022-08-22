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
  created_at: Date;

  @Column()
  updated_at: Date;
}

export { User };
