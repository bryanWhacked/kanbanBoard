"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsService = void 0;
const card_entity_1 = require("./card.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let CardsService = class CardsService {
    constructor(cardsRepository) {
        this.cardsRepository = cardsRepository;
    }
    async addCard(data) {
        const newCard = this.cardsRepository.create({
            title: data.title,
            content: data.content,
            platform: data.platform
        });
        await this.cardsRepository.save(newCard);
        return newCard;
    }
    async getAllCard() {
        const listOfCards = await this.cardsRepository.find();
        return listOfCards;
    }
    async addCardWithColumn(data, column) {
        const newPost = await this.cardsRepository.create(Object.assign(Object.assign({}, data), { column: column }));
        await this.cardsRepository.save(newPost);
        return newPost;
    }
    async getCard(id) {
        const cardInfo = this.cardsRepository.findOne({ where: { id: id } });
        return cardInfo;
    }
};
CardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(card_entity_1.CardEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CardsService);
exports.CardsService = CardsService;
//# sourceMappingURL=cards.service.js.map