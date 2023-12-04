import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ReceiverModule } from './receiver/receiver.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'app-provider',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'app-provider',
            brokers: ['localhost:9094'],
          },
          consumer: {
            groupId: 'app-consumer',
          },
        },
      },
    ]),
    ReceiverModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
