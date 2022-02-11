import { ColumnDto } from './dto/column.dto';
import { ColumnEntity } from "./column.entity";
import { Repository } from 'typeorm';
export declare class ColumnsService {
    private columnsRepository;
    constructor(columnsRepository: Repository<ColumnEntity>);
    addColumn(data: ColumnDto): Promise<ColumnEntity>;
    getAllColumn(): Promise<ColumnEntity[]>;
    getColumnWithCards(): Promise<ColumnEntity[]>;
}
