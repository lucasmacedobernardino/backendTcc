import { Sequelize } from "sequelize";
import { databaseConfigSQLite} from "./database-config.js";

import { Disciplina } from "../models/Disciplina.js";
import { Questao } from "../models/Questao.js";
import { Usuario } from "../models/Usuario.js";
import { UsuarioResposta } from "../models/UsuarioResposta.js"
import { UsuarioRespostaService } from "../services/UsuarioRespostaService.js";
export const sequelize = new Sequelize(databaseConfigSQLite)


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
        //QUESTOES DA PROVA 1-2020
        const questao1 = await Questao.create({enunciado: `
        Texto para as questões 1 a 10

        Dívida com a Terra
        
        “Earth Overshoot Day”, o Dia da Sobrecarga da Terra (algo como “dia em que se 
        ultrapassam os limites da Terra”). A data é determinada a partir da comparação 
        entre nossas demandas pelo que vem da natureza – para atividades como construção, 
        manufatura e absorção do lixo e do gás carbônico que liberamos na atmosfera – e o que 
        a natureza pode realmente repor através das florestas, mananciais, reservas pesqueiras 
        e terras cultiváveis. O cálculo é feito por um centro de estudos americanos, o Global 
        Footprint Network.
        A superexploração de recursos naturais começou em 1970, quando a capacidade total 
        do planeta para aquele ano se esgotou no fim de dezembro. De lá para cá, o Dia da 
        Sobrecarga da Terra tem sido assinalado cada vez mais cedo: em 1997 ocorreu no final de 
        setembro enquanto que, em 2018, se assinalou a 1 de agosto – e previsto para 29 de julho 
        em 2019. Por outras palavras, atualmente, é exercida uma procura 1,75 vezes superior à 
        capacidade de regeneração dos ecossistemas, ou seja, anualmente a humanidade usa os 
        recursos equivalentes de 1,75 planetas Terra. Cada país contribui de maneira diferente 
        para esses dados, dependendo de seu modo de vida.
        Em todo o mundo, os danos causados pela sobrecarga são cada vez mais evidentes: 
        desflorestação, escassez de água doce, erosão do solo, perda de biodiversidade ou 
        acumulação de dióxido de carbono na atmosfera. Por sua vez, esses danos acentuam e 
        dão origem a fenômenos, tais como as alterações climáticas, secas severas, incêndios 
        florestais ou furacões, isso porque os mecanismos naturais do planeta para lidar com toda 
        essa pressão estão sobrecarregados.
        “As economias atuais estão gerindo um esquema de pirâmide financeira com o nosso 
        planeta”, afirma Mathis Wackernagel, CEO e cofundador da Global Footprint Network. 
        “Estamos usando os recursos futuros da Terra para operar nossas economias no presente. 
        Como qualquer esquema de pirâmide, isso funciona por algum tempo. Mas, à medida que 
        as nações, empresas ou famílias se aprofundam cada vez mais em dívidas, acabarão por 
        entrar em colapso.”
        No entanto, é possível inverter essa tendência. Se o Dia da Sobrecarga da Terra fosse 
        adiantado 5 dias todos os anos até 2050, seria possível retornar ao nível em que usávamos 
        os recursos de um só planeta. Para assinalar o Dia da Sobrecarga da Terra, a Global 
        Footprint Network sugere alguns passos e estima o seu impacto na alteração no Dia da 
        Sobrecarga da Terra. Por exemplo: se 50% do consumo de carne fosse substituído por uma 
        dieta vegetariana, a data poderia mover-se 5 dias; uma redução de 50% da componente do
        carbono na Pegada Ecológica moveria a data 93 dias.
        [...]
        “Na Global Footprint Network acreditamos que o uso excessivo dos ecossistemas 
        da Terra constitui um dos maiores desafios que a humanidade enfrenta na atualidade, 
        sendo que as alterações climáticas são uma parte importante desse desafio”, concluiu 
        Wackernagel. “Transformar as nossas economias para responder a esse desafio não 
        é uma tarefa fácil. No entanto, da mesma forma que no passado a humanidade usou 
        criatividade e engenho, poderemos fazê-lo novamente para criar um futuro próspero, 
        livre de combustíveis fósseis e destruição do planeta.”
        
        01. Atente a estas considerações acerca do texto.
        A. Os recursos naturais da Terra sempre foram extraídos, no entanto o excesso começou a ocorrer a partir de 1970.
        B. Uma das soluções para se equilibrar o Dia de Sobrecarga da Terra é padronizar o estilo de 
        vida dos países.
        C. O desmatamento acelerado de florestas e as atividades pesqueiras são os grandes responsáveis 
        pelo desequilíbrio do planeta.
        D. As consequências da superexploração de recursos naturais da Terra atingem principalmente 
        os países com alto padrão de vida de sua população.
        E. O estilo de vida atual bem como a economia são os fatores que determinam a progressividade 
        do Dia de Sobrecarga da Terra.
        Está CORRETO o que se afirma em
        `, opcao1: `A, D e E apenas.`, opcao2: `B, C e E apenas.`, opcao3: `C e D apenas.`, opcao4: `A e E apenas.`, opcao5: `A, B e C apenas.`, respostaCorreta: 'D', disciplinaId:1})
      
        const usuario1 = await Usuario.create({nome:"Lucas Macedo Bernardino", email:"lucasmacedoes@gmail.com", senha:"123"})
      
        const usuario2 = await Usuario.create({nome:"Raphael Macedo Bernardino", email:"faeldojo@gmail.com", senha:"asdasdasdasd"})
      
        const usuario3 = await Usuario.create({nome:"João Macedo Bernardino", email:"joão@gmail.com", senha:"123"})
      
        const usuario4 = await Usuario.create({nome:"Eita Macedo Bernardino", email:"eita@gmail.com", senha:"XASDASsdBX"})
      
        const usuario5 = await Usuario.create({nome:"Samuel Macedo Bernardino", email:"samuel@gmail.com", senha:"zxvbad12"})

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