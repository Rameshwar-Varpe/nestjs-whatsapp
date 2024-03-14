import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Message } from "./Messages";


@Entity({ name: 'contacts' })
export class Contact extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    contact_name: string;

    @Column({ type: "bigint" })
    contact_number: number;

    @Column({ type: 'varchar', nullable: true })
    contact_about: string;

    @Column({ type: 'datetime', nullable: true })
    contact_lastseen: Date;

    @Column({ type: 'blob', nullable: true })
    profile_picture: Buffer;

    @OneToMany(() => Message, (messages) => messages.send_from_id)
    sent_messages: Message[];

    @OneToMany(() => Message, (messages) => messages.send_to_id)
    received_messages: Message[];

}