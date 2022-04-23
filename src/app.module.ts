import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // save the schema in memory and regenerate it everytime we start the nestjs application
      autoSchemaFile: true,
    }),
    LessonModule,
  ],
})
export class AppModule {}
