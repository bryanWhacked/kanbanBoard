import { CardDto } from './dto/card.dto';
import { CardsService } from './cards.service';
import RequestWithColumn from 'src/columns/columns.interface';
export declare class CardsController {
    private readonly cardsService;
    constructor(cardsService: CardsService);
    addCard(cardDto: CardDto): Promise<import("./card.entity").CardEntity>;
    getAll(): Promise<import("./card.entity").CardEntity[]>;
    findOne(params: any): any;
    createCardWithColumn(cardDto: CardDto, req: RequestWithColumn): Promise<import("./card.entity").CardEntity>;
}
