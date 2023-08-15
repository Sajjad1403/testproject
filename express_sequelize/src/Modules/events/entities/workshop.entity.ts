import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey
} from 'sequelize-typescript';
import { ModelAttributeColumnOptions } from 'sequelize';


@Table({
  updatedAt: false,
})
export default class Workshop extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  declare id: number;

  @Column({ type: 'datetime' } as ModelAttributeColumnOptions)
  declare start: string;

  @Column({ type: 'datetime' } as ModelAttributeColumnOptions)
  declare end: string;

  @Column({
    type: 'integer',
    defaultValue: null,
  } as ModelAttributeColumnOptions)
  declare eventId: number;

  @Column
  declare name: string;

  @Column({ type: 'datetime' } as ModelAttributeColumnOptions)
  declare createdAt: string;
}
