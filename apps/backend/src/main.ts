import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT ? Number(process.env.PORT) : 3005

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(port, '0.0.0.0');

  console.log(`Server listening on port ${port}`)
}
bootstrap();