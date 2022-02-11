import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { CardEntity } from './card.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";

@Module({
    imports: [
        TypeOrmModule.forFeature([CardEntity])
    ],
    providers: [CardsService],
    controllers: [CardsController]
})

export class CardsModule {}