import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: "peoples" })
export class People {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ name: "name" })
  name: string

  @Column({ name: "birth_date" })
  birthDate: Date

}
