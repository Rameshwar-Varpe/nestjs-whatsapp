
export class CreateContactDto {
    contact_name: string;
    contact_number: number;
    contact_about: string;
    contact_lastseen: Date;
    profile_picture: Buffer;
}