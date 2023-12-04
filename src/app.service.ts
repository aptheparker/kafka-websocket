import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sendKafka(): string {
    return 'Kafta Message Sent!';
  }
}
