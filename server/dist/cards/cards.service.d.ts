import { ColumnEntity } from './../columns/column.entity';
import { CardDto } from './dto/card.dto';
import { CardEntity } from './card.entity';
import { Repository } from 'typeorm';
export declare class CardsService {
    private cardsRepository;
    constructor(cardsRepository: Repository<CardEntity>);
    addCard(data: CardDto): Promise<CardEntity>;
    getAllCard(): Promise<CardEntity[]>;
    addCardWithColumn(data: CardDto, column: ColumnEntity): Promise<CardEntity>;
    getCard(id: string): Promise<CardEntity>;
}
