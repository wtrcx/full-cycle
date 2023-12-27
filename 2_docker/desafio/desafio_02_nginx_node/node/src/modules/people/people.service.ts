import { database } from '../../database';
import { People } from './entities/people.entity';

export class PeopleService {

  async insertAndSelectAll(): Promise<People[]> {


    const peopleRepository = database.getRepository(People)

    const response = await fetch(
      "https://api.invertexto.com/v1/faker?token=1501%7CDHJFTC73LnQpI2YQ6tvwmojt3H9AmZdj&fields=name%2C+birth_date&locale=pt_BR"
    );

    const { name, birth_date: birthDate } = await response.json();

    await peopleRepository.insert({ name, birthDate })

    const peopleCount = await peopleRepository.count()

    const take = 10
    const skip = peopleCount <= take ? 0 : peopleCount - take

    const peoples = await peopleRepository.find({ skip, take })

    return peoples;
  }
}

