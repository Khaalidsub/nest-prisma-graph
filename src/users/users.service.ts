import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class UsersService {
  constructor(private prisma:PrismaService){}
  create(createUserInput: Prisma.UserCreateInput) {
    return this.prisma.user.create({data: createUserInput})
  }

  findAll(params:{    
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByInput;}) {

    return this.prisma.user.findMany(params)
  }

  findOne(userWhereInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({where: userWhereInput})
  }

  update(params:{where?: Prisma.UserWhereUniqueInput, data:Prisma.UserUpdateInput}) {
    const {data,where} = params
    return this.prisma.user.update({where,data})
  }

  remove(where:Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({where})
  }
}
