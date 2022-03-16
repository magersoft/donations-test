import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiModule } from './api/api.module';
import { appConfig, databaseConfig, exchangeConfig } from './config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (config: ConfigService) => {
        const host = config.get<string>('database.host');
        const database = config.get<string>('database.name');
        const user = config.get<string>('database.user');
        const password = config.get<string>('database.password');

        return {
          uri: `mongodb+srv://${user}:${password}@${host}/${database}?retryWrites=true&w=majority`,
        };
      },
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig, exchangeConfig],
    }),
    ApiModule,
  ],
})
export class AppModule {}
