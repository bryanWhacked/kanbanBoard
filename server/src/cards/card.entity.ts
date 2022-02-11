import { ColumnEntity } from './../columns/column.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('card')
export class CardEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column({ nullable: true })
    content: string;

    @Column({ nullable: true })
    platform: string;

    @ManyToOne(() => ColumnEntity, (column: ColumnEntity) => column.cards)
    column: ColumnEntity;
}