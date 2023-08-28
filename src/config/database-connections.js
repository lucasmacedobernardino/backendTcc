import { Sequelize } from "sequelize";
import { databaseConfigSQLite} from "./database-config.js";

import { Disciplina } from "../models/Disciplina.js";
import { Questao } from "../models/Questao.js";
import { Usuario } from "../models/Usuario.js";
import { UsuarioResposta } from "../models/UsuarioResposta.js"

const sequelize = new Sequelize(databaseConfigSQLite)


Disciplina.init(sequelize)
Questao.init(sequelize)
Usuario.init(sequelize)
UsuarioResposta.init(sequelize)

Disciplina.associate(sequelize.models);
Questao.associate(sequelize.models);
Usuario.associate(sequelize.models);
UsuarioResposta.associate(sequelize.models)

databaseInserts();

function databaseInserts() {
    (async() => {
        await sequelize.sync();
        await sequelize.sync({ force: true })
        const disciplina1 = await Disciplina.create({ nome: "Português" });
        const disciplina2 = await Disciplina.create({ nome: "Matemática" });
        const disciplina3 = await Disciplina.create({ nome: "História" });
        const disciplina4 = await Disciplina.create({ nome: "Geografia" });
        const disciplina5 = await Disciplina.create({ nome: "Ciências" });
        /*
        const questao1 = await City.create({ name: "Cachoeiro", ufId: 1 });
        const questao2 = await City.create({ name: "Alegre", ufId: 1 });

        const bairro1 = await District.create({ name: "Vila do Sul", cityId: 1 });
        const bairro2 = await District.create({ name: "Guararema", cityId: 1 });
        const bairro3 = await District.create({ name: "Maria Ortiz", cityId: 2 });
        const bairro4 = await District.create({ name: "Centro", cityId: 2 });

        const tutor1 = await Tutor.create({ name: "Lucas Macedo Bernardino", house_number: "108", zip_code: "29.307-195", email: "lucasmacedoes@gmail.com", phone: "(28)99930-4053", public_place: "Aceito", date_of_birth: "2000/03/28", space_size: "500", districtId: 2 })
        const tutor2 = await Tutor.create({ name: "Raphael Macedo Bernardino", house_number: "108", zip_code: "29.307-195", email: "faeldojo@gmail.com", phone: "(28)99916-2116", public_place: "Aceito", date_of_birth: "2000/03/28", space_size: "500", districtId: 2 })
        const tutor3 = await Tutor.create({ name: "Jefferson Abreu", house_number: "49", zip_code: "29.307-125", email: "download10@gmail.com", phone: "(28)99914-4651", public_place: "Aceito", date_of_birth: "1980/02/14", space_size: "650", districtId: 1 })
        const tutor4 = await Tutor.create({ name: "Jonatas Silva Bernardino", house_number: "108", zip_code: "29.307-195", email: "jobernardino0@gmail.com", phone: "(28)99919-0497", public_place: "Aceito", date_of_birth: "1979/04/14", space_size: "650", districtId: 3 })

        const dogsize1 = await DogSize.create({
            name: "mini",
            occupied_size: "10"
        })
        const dogsize2 = await DogSize.create({
            name: "pequeno",
            occupied_size: "15"
        })
        const dogsize3 = await DogSize.create({
            name: "medio",
            occupied_size: "30"
        })
        const dogsize4 = await DogSize.create({
            name: "grande",
            occupied_size: "50"
        })
        const dogsize5 = await DogSize.create({
            name: "gigante",
            occupied_size: "100"
        })

        const breed1 = await Breed.create({ name: "Dogue alemão", dogSizeId: 3 })
        const breed2 = await Breed.create({ name: "Golden retriever", dogSizeId: 5 })
        const breed3 = await Breed.create({ name: "Husky siberiano", dogSizeId: 3 })
        const breed4 = await Breed.create({ name: "Bull Terrier", dogSizeId: 3 })
        const breed5 = await Breed.create({ name: "Fox Paulistinha", dogSizeId: 2 })

        /*DOG
  
        const vaccine1 = await Vaccine.create({ name: "AHS82", dosage_interval_days: "3"})
        const vaccine2 = await Vaccine.create({ name: "DJGH21", dosage_interval_days: "4"})
        const vaccine3 = await Vaccine.create({ name: "WYRT0", dosage_interval_days: "5"})
        const vaccine4 = await Vaccine.create({ name: "ADFH23", dosage_interval_days: "2"})

        await vaccine1.addBreeds(breed1, {through: "vaccine_breed"})
        await vaccine2.addBreeds(breed2, {through: "vaccine_breed"})
        await vaccine3.addBreeds(breed3, {through: "vaccine_breed"})
        await vaccine4.addBreeds(breed4, {through: "vaccine_breed"})
        await vaccine4.addBreeds(breed5, {through: "vaccine_breed"})

        const typeofoccurrence1 = await TypeOfOccurrence.create({
            name: "Pata quebrada",
            severity: 0.1,
            aggressor: true
        })
        const typeofoccurrence2 = await TypeOfOccurrence.create({
            name: "Ataque fuminante",
            severity: 1.0,
            aggressor: false
        })
        const typeofoccurrence3 = await TypeOfOccurrence.create({
            name: "Ataque ao morador",
            severity: 0.5,
            aggressor: true
        })
        const typeofoccurrence4 = await TypeOfOccurrence.create({
            name: "Atropelamento",
            severity: 0.9,
            aggressor: false
        })


        const dog1 = await Dog.create({
            name: "Ópera",
            weight: "14.0",
            date_of_birth: "2020/05/14",
            breedId: 5
        })
        const dog2 = await Dog.create({
            name: "Jazz",
            weight: "11.0",
            date_of_birth: "2020/11/14",
            breedId: 2
        })
        const dog3 = await Dog.create({
            name: "Xena",
            weight: "15.0",
            date_of_birth: "2020/06/14",
            breedId: 3
        })
        const dog4 = await Dog.create({
            name: "Totó",
            weight: "12.0",
            date_of_birth: "2020/01/14",
            breedId: 4
        })

        const employee1 = await Employee.create({
            name: "Lucas Macedo Bernardino",
            email: "lucasmacedoes@gmail.com",
            login: "lukasombrado",
            password: "Ab123!@#"
        })
        const employee2 = await Employee.create({
            name: "Jefferson Abreu",
            email: "download10@gmail.com",
            login: "JAbt",
            password: "asfgarh#"
        })
        const employee3 = await Employee.create({
            name: "Lucas Macedo Bernardino",
            email: "lucasmacedoes@gmail.com",
            login: "lukasombrado",
            password: "Ab123!@#"
        })
        const employee4 = await Employee.create({
            name: "Lilian Macedo Bernardino",
            email: "macedo123@gmail.com",
            login: "macedobernardino",
            password: "11346"
        })

        const veterinarian1 = await Veterinarian.create({
            name: "Milena Macedo Bernardino",
        })
        const veterinarian2 = await Veterinarian.create({
            name: "Mônica Macedo Bernardino",
        })
        const veterinarian3 = await Veterinarian.create({
            name: "Paulo Macedo Bernardino",
        })
        const veterinarian4 = await Veterinarian.create({
            name: "Carlos Eduardo",
        })

        const vaccination1 = await Vaccination.create({
            date: "2021/03/28",
            vaccineId: 1,
            dogId: 1,
            employeeId: 1,
            veterinarianId: 1
        })
        const vaccination5 = await Vaccination.create({
            date: "2021/03/10",
            vaccineId: 1,
            dogId: 1,
            employeeId: 1,
            veterinarianId: 1
        })
        const vaccination2 = await Vaccination.create({
            date: "2021/03/28",
            vaccineId: 2,
            dogId: 1,
            employeeId: 1,
            veterinarianId: 1
        })
        const vaccination3 = await Vaccination.create({
            date: "2020/02/28",
            vaccineId: 2,
            dogId: 2,
            employeeId: 4,
            veterinarianId: 2
        })
        const vaccination4 = await Vaccination.create({
            date: "2020/02/28",
            vaccineId: 3,
            dogId: 1,
            employeeId: 4,
            veterinarianId: 4
        })
        const occurrence1 = await Occurrence.create({
            description: "askmjfdjhgkwaerg",
            date: "2000/02/15",
            dog_health_state: "ÓTIMO",
            veterinarianId: 1,
            dogId: 1,
            employeeId: 1,
            typeOfOccurrenceId: 1
        })
        const occurrence2 = await Occurrence.create({
            description: "aasdasdasdasdasdasdasdasdasdasdg",
            date: "2000/03/12",
            dog_health_state: "MAL",
            veterinarianId: 1,
            dogId: 2,
            employeeId: 3,
            typeOfOccurrenceId: 2
        })
        const occurrence3 = await Occurrence.create({
            description: "aDESCRIÇÃO LINDArg",
            date: "2021/04/12",
            dog_health_state: "MAIS OU MENOS",
            veterinarianId: 2,
            dogId: 1,
            employeeId: 3,
            typeOfOccurrenceId: 4
        })
        const occurrence4 = await Occurrence.create({
            description: "askmjfdjhgkwaerg",
            date: "2003/02/15",
            dog_health_state: "ÓTIMO",
            veterinarianId: 1,
            dogId: 1,
            employeeId: 1,
            typeOfOccurrenceId: 1
        })
        const guardianship1 = await Guardianship.create({
            date: "2021/03/24",
            dogId: 1,
            employeeId: 3,
            tutorId: 2
        })
        const guardianship2 = await Guardianship.create({
            date: "2012/04/21",
            dogId: 1,
            employeeId: 2,
            tutorId: 3
        })
        const guardianship3 = await Guardianship.create({
            date: "2000/12/4",
            dogId: 3,
            employeeId: 2,
            tutorId: 1
        })
        const guardianship4 = await Guardianship.create({
            date: "2022/12/13",
            dogId: 2,
            employeeId: 3,
            tutorId: 4
        })
        const guardianship5 = await Guardianship.create({
            date: "2022/12/13",
            dogId: 2,
            employeeId: 3,
            tutorId: 1
        })
        */
    })();
}

export default sequelize;