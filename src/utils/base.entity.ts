import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({isAbstract:true})
export class BaseEntity {
    @Field(() => ID)
    id: string
    
}