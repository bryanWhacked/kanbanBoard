import { ColumnDto } from './../columns/dto/column.dto';
import { CardDto } from './dto/card.dto';
import { CardsService } from './cards.service';
import { Body, Controller, Get, Param, Post, Req } from "@nestjs/common";
import RequestWithColumn from 'src/columns/columns.interface';

@Controller('cards') // http://localhost:3003/cards
export class CardsController {
    constructor(
        private readonly cardsService: CardsService,
    ) {}

    @Post()
    addCard(
        @Body() cardDto: CardDto
    ) {
        return this.cardsService.addCard(cardDto)
    }

    @Get()
    getAll() {
        return this.cardsService.getAllCard();
    }

    @Get(':id')
    findOne(@Param() params): any {
        return this.cardsService.getCard(params.id)
    }

    @Post('withColumn')
    createCardWithColumn(
        @Body() cardDto: CardDto,
        @Body() req: RequestWithColumn
    ) {
        return this.cardsService.addCardWithColumn(cardDto, req.column)
    }
}