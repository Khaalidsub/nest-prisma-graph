import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
    autoSchemaFile:join(process.cwd(),'src/TypeDef/schema.gql'),
    sortSchema:true,
      include:[UsersModule]
    }),
    
    UsersModule],
  providers: [PrismaService],
  exports:[PrismaService]
})
export class AppModule {}
