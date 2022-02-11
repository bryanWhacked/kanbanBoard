import { ColumnsService } from './columns.service';
import { ColumnEntity } from './column.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { ColumnsController } from './columns.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([ColumnEntity])
    ],
    providers: [ColumnsService],
    controllers: [ColumnsController],
})

export class ColumnsModule {}