import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const configService = app.get(ConfigService);
  const port = parseInt(configService.get('PORT'), 10);
  await app.listen(port, () =>
    console.log(`Backend Api started on ${port} PORT`),
  );
}
bootstrap();
