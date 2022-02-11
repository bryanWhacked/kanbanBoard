import { ColumnDto } from './dto/column.dto';
import { ColumnsService } from './columns.service';
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('columns') //http://localhost:3003/columns
export class ColumnsController {
    
    constructor(
        private readonly columnsSerive: ColumnsService
    ) {}

    @Post()
    addColumns(
        @Body() columnDto: ColumnDto
    ) {
        return this.columnsSerive.addColumn(columnDto)
    }

    @Get()
    getAll() {
        return this.columnsSerive.getAllColumn();
    }

    @Get('cards')
    getColumn() {
        return this.columnsSerive.getColumnWithCards();
    }
}