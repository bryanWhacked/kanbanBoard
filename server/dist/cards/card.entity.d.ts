import { ColumnEntity } from './../columns/column.entity';
export declare class CardEntity {
    id: string;
    title: string;
    content: string;
    platform: string;
    column: ColumnEntity;
}
