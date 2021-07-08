import { Module } from '@nestjs/common';
import { resolve } from 'path';
import { TsxViewsModule } from 'nestjs-tsx-views';
import { AppController } from './app.controller';

@Module({
  imports: [
    TsxViewsModule.register({
      viewsDirectory: resolve(__dirname, './views'),
      prettify: true,
      forRoutes: [AppController],
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
