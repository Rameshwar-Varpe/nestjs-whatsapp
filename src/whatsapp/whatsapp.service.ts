import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/Contacts';
import { Repository } from 'typeorm';
import { CreateContactDto} from './dto/CreateContactDto';
import { CreateContactParams } from './utils/types';

@Injectable()
export class WhatsappService {

    constructor(
        @InjectRepository(Contact) private contactRepository: Repository<Contact>
    ) { }

    createContact(contactDetails: CreateContactParams) {
        const newUser = this.contactRepository.create(contactDetails)
        return this.contactRepository.save(newUser);
    }

    getOneContactById(id:number){
        return this.contactRepository.findOneBy({id});
    }


}
