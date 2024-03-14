import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './whatsapp/entities/Contacts';
import { Message } from './whatsapp/entities/Messages';

@Module({
  imports: [WhatsappModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'whatsapp_db',
      entities: [Contact, Message],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
