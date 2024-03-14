import { Module } from '@nestjs/common';
import { WhatsappController } from './whatsapp.controller';
import { WhatsappService } from './whatsapp.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/Contacts';
import { Message } from './entities/Messages';

@Module({
  imports: [TypeOrmModule.forFeature([Contact, Message])],
  controllers: [WhatsappController],
  providers: [WhatsappService]
})
export class WhatsappModule { }
