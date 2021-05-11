import { Field, ObjectType } from "@nestjs/graphql";
import { Prisma, PrismaClient, } from "@prisma/client";
import { BaseEntity } from "src/utils/base.entity";

@ObjectType()
export class UserEntity extends BaseEntity {
    @Field()
    email:string;
    @Field()
    name:string;
}