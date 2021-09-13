import { Model, Column, Primary } from "../../deps.ts";

@Model("posts")
export default class PostsModel {
  @Primary()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column({name: "created_at", default: ()=> new Date() })
  created_at!: Date;
}
