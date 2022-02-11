import { ColumnEntity } from './../columns/column.entity';
import { CardDto } from './dto/card.dto';
import { CardEntity } from './card.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

@Injectable()
export class CardsService {
    constructor(
        @InjectRepository(CardEntity)
        private cardsRepository: Repository<CardEntity>
    ) {}

    async addCard(data: CardDto) {
        const newCard = this.cardsRepository.create({
            title: data.title,
            content: data.content,
            platform: data.platform
        })
        await this.cardsRepository.save(newCard);
        return newCard;
    }

    async getAllCard() {
        const listOfCards = await this.cardsRepository.find();
        return listOfCards;
    }

    async addCardWithColumn(data: CardDto, column: ColumnEntity) {
        const newPost = await this.cardsRepository.create({
            ...data,
            column: column
        });
        await this.cardsRepository.save(newPost);
        return newPost;
    }

    async getCard(id: string) {
        const cardInfo = this.cardsRepository.findOne({ where: { id: id }});
        return cardInfo;
    }
}