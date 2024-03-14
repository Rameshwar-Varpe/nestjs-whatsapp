import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./Contacts";

@Entity({ name: 'messages' })
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    message_content: string;

    @Column({ type: 'datetime' })
    creates_at: Date;

    @Column({ type: 'datetime', nullable: true })
    delivered_at: Date;

    @Column({ type: 'datetime', nullable: true })
    read_at: Date;

    @ManyToOne(() => Contact, (contact) => contact.sent_messages)
    send_from_id: Contact;

    @ManyToOne(() => Contact, (contact) => contact.received_messages)
    send_to_id: Contact;

}