import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('receiver')
export class ReceiverController {
  @EventPattern('kafka-topic-1')
  async handleMessagePrinted(@Payload() msg) {
    console.log(msg);
  }
}
