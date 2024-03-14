import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { CreateContactDto } from './dto/CreateContactDto';
import { UpdateContactProfileDto } from './dto/UpdateContactProfileDto';

@Controller('whatsapp')
export class WhatsappController {


    constructor(private whatsappService: WhatsappService) { }

    @Post()
    createContact(@Body() createContactDto: CreateContactDto) {
        return this.whatsappService.createContact(createContactDto);
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.whatsappService.getOneContactById(id);
    }

    @Put('id')
    updateProfile(@Param('id', ParseIntPipe) id: number, @Body() updateContactProfileDto: UpdateContactProfileDto)
}
