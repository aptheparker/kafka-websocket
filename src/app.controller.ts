import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    @Inject('app-provider') private readonly kafkaProvider: ClientKafka,
  ) {}

  @Get()
  sendKafka(): string {
    this.kafkaProvider.emit('kafka-topic-1', 'kafka message sent');
    return this.appService.sendKafka();
  }
}
