import { People } from '../modules/people/entities/people.entity'
import { DataSource } from 'typeorm'

export const database = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [People],
  synchronize: true
})







