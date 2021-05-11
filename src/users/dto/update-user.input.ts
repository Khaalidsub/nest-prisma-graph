import { OmitType, PartialType, InputType } from "@nestjs/graphql";
import { UserEntity } from "../entities/user.entity";
@InputType()
export class UpdateUserInput extends PartialType(UserEntity,InputType){}