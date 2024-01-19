import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class AlarmTypeOrmEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  severity: string;
}
