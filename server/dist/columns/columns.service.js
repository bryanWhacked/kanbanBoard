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
exports.ColumnsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const column_entity_1 = require("./column.entity");
const typeorm_2 = require("typeorm");
let ColumnsService = class ColumnsService {
    constructor(columnsRepository) {
        this.columnsRepository = columnsRepository;
    }
    async addColumn(data) {
        const newColumn = this.columnsRepository.create({
            columnName: data.columnName,
        });
        await this.columnsRepository.save(newColumn);
        return newColumn;
    }
    async getAllColumn() {
        const listOfColumns = await this.columnsRepository.find();
        return listOfColumns;
    }
    async getColumnWithCards() {
        const listOfColumns = await this.columnsRepository.find({ relations: ['cards'] });
        return listOfColumns;
    }
};
ColumnsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(column_entity_1.ColumnEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ColumnsService);
exports.ColumnsService = ColumnsService;
//# sourceMappingURL=columns.service.js.map