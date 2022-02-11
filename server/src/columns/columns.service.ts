import { ColumnDto } from './dto/column.dto';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ColumnEntity } from "./column.entity";
import { Repository } from 'typeorm';

@Injectable()
export class ColumnsService {
    constructor(
        @InjectRepository(ColumnEntity)
        private columnsRepository: Repository<ColumnEntity>
    ) {}

    async addColumn(data: ColumnDto) {
        const newColumn = this.columnsRepository.create({
            columnName: data.columnName,
        })

        await this.columnsRepository.save(newColumn)
        return newColumn;
    }

    async getAllColumn() {
        const listOfColumns = await this.columnsRepository.find();
        return listOfColumns;
    }

    async getColumnWithCards() {
        const listOfColumns = await this.columnsRepository.find({ relations: ['cards']});
        return listOfColumns;
    }
}