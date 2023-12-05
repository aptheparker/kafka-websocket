import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { KafkaServer } from './microservices/server/kafka-server';
import { KafkaModule } from './microservices/kafka.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  app.enableCors(
    {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
  );

  const kafka = await NestFactory.createMicroservice(KafkaModule, {
    strategy: new KafkaServer(),
  });
  kafka.listen();
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
