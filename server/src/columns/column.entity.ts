import { CardEntity } from 'src/cards/card.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('column')
export class ColumnEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    columnName: string;

    @OneToMany(() => CardEntity, (card: CardEntity) => card.column)
    cards: CardEntity[];
}