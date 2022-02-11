import { ColumnDto } from './dto/column.dto';
import { ColumnsService } from './columns.service';
export declare class ColumnsController {
    private readonly columnsSerive;
    constructor(columnsSerive: ColumnsService);
    addColumns(columnDto: ColumnDto): Promise<import("./column.entity").ColumnEntity>;
    getAll(): Promise<import("./column.entity").ColumnEntity[]>;
    getColumn(): Promise<import("./column.entity").ColumnEntity[]>;
}
