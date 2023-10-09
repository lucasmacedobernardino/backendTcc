import { Sequelize } from "sequelize";
import { databaseConfigSQLite } from "./database-config.js";
import fs from "fs"
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
    (async () => {
        await sequelize.sync();
        await sequelize.sync({ force: true })
        const disciplina1 = await Disciplina.create({ nome: "Português" });
        const disciplina2 = await Disciplina.create({ nome: "Matemática" });
        const disciplina3 = await Disciplina.create({ nome: "História" });
        const disciplina4 = await Disciplina.create({ nome: "Geografia" });
        const disciplina5 = await Disciplina.create({ nome: "Ciências" });
        //QUESTOES DA PROVA 1-2022
        const imagemBufferQuestao11_12 = fs.readFileSync('src/assets/imagemQuestao11-12.png');
        const questao1 = await Questao.create({
            enunciado: `

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
        
        Atente a estas considerações acerca do texto.

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
        `,
            opcao1: `A, D e E apenas.`,
            opcao2: `B, C e E apenas.`,
            opcao3: `C e D apenas.`,
            opcao4: `A e E apenas.`,
            opcao5: `A, B e C apenas.`,
            respostaCorreta: 'D',
            disciplinaId: 1,
        });

        const questao2 = await Questao.create({
            enunciado: `
        
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
        
        Sobre os recursos gramaticais e/ou linguísticos utilizados na composição do texto, só NÃO
        ESTÁ CORRETO o que se afirma na opção`,

            opcao1: ` No 1º parágrafo foram empregadas as aspas em duas situações, cada qual por uma razão distinta.`,
            opcao2: ` O pronome possessivo “nossas”, empregado na linha 3, inclui o locutor do texto no assunto
        tratado.`,
            opcao3: ` Na linha 12, a vírgula após o advérbio “atualmente” não poderia ser retirada, uma vez que
        provocaria algum tipo de alteração gramatical.`,
            opcao4: `Os parênteses empregados nas linha 1 e 2 poderiam ser suprimidos e, para não haver nenhum
        prejuízo semântico, deveria ser colocada uma vírgula entre os vocábulos “Terra” e “algo”.`,
            opcao5: `As aspas utilizadas nos parágrafos 4 e 6 têm a mesma função, porém por razão distinta das
        empregadas no parágrafo 1.`,
            respostaCorreta: 'C',
            disciplinaId: 1,
        });

        const questao3 = await Questao.create({
            enunciado: `
        
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
        
        Os travessões empregados no 1º parágrafo trazem entre eles um trecho que`,

            opcao1: `explica a comparação mencionada anteriormente no período.`,
            opcao2: `exemplifica os itens que influenciam no cálculo da data do Dia da Sobrecarga da Terra.`,
            opcao3: `apresenta os elementos possíveis retirados da natureza.`,
            opcao4: `indica o que deveria ser feito para resolver definitivamente a superexploração da Terra.`,
            opcao5: `representa a opinião do autor do texto acerca das ações humanas sobre os recursos naturais
            da Terra.`,
            respostaCorreta: 'B',
            disciplinaId: 1,
        });

        const questao4 = await Questao.create({
            enunciado: `
        
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
        
        A declaração dada nas linhas 22 e 23 (“As economias atuais estão gerindo um esquema de
            pirâmide financeira com o nosso planeta”) indica`,

            opcao1: `uma opinião favorável do emissor sobre o assunto.`,
            opcao2: `uma crítica do declarante acerca do assunto.`,
            opcao3: `um posicionamento neutro do entrevistado sobre o assunto.`,
            opcao4: `uma dúvida do emissor acerca do assunto abordado.`,
            opcao5: `um questionamento do declarante sobre o assunto tratado.`,
            respostaCorreta: 'B',
            disciplinaId: 1,
        });

        const questao5 = await Questao.create({
            enunciado: `
        
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
        
        Com relação ao 5º parágrafo, ele traz ideias`,

            opcao1: `de oposição, de condição e de conformidade.`,
            opcao2: `de conformidade, de finalidade e de proporcionalidade.`,
            opcao3: `de contrariedade, de finalidade e de condição.`,
            opcao4: `de causa, de condição e de adversidade.`,
            opcao5: `de adversidade, de causa e de comparação.`,
            respostaCorreta: 'C',
            disciplinaId: 1,
        });

        const questao6 = await Questao.create({
            enunciado: `
        
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
        
        Ao se construírem orações, pode-se optar por redigir verbos na voz ativa ou na voz passiva,
        dependendo da intenção que se pretende. Nos trechos abaixo apresentados, todas as orações
        foram escritas com verbos na voz passiva, EXCETO`,

            opcao1: ` “[...] algo como ‘dia em que se ultrapassam os limites da Terra’ [...]” – l. 1 e 2`,
            opcao2: `“Por outras palavras, atualmente, é exercida uma procura 1,75 vezes superior à capacidade de
            regeneração dos ecossistemas [...]” – l. 12 e 13`,
            opcao3: `“De lá para cá, o Dia da Sobrecarga da Terra tem sido assinalado cada vez mais cedo [...]” – l. 9 e 10`,
            opcao4: `“As economias atuais estão gerindo um esquema de pirâmide financeira com o nosso planeta”
            – l. 22 e 23`,
            opcao5: `“O cálculo é feito por um centro de estudos americanos, o Global Footprint Network.” – l. 6
            e 7`,
            respostaCorreta: 'D',
            disciplinaId: 1,
        });

        const questao7 = await Questao.create({
            enunciado: `
        
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
        
        Considere este trecho:
            “[...] é exercida uma procura 1,75 vezes superior à capacidade de regeneração
            dos ecossistemas [...]”.
        Nele foi empregado o acento grave a fim de indicar corretamente a incidência de uma crase.

        A opção que traz uma sentença em que se deve também empregar o acento grave é`,

            opcao1: `A criação global de gado bovino é responsável por mais de 60% das emissões totais da
            pecuária, que inclui também as criações de suínos e de aves que, segundo a FAO (Organização
            das Nações Unidas para a Alimentação e a Agricultura), são responsáveis por 9% e 8% das
            emissões da pecuária, respectivamente.`,
            opcao2: `Todos os modelos científicos demonstram um padrão consistente: avançamos para além do
            nosso “orçamento” da Terra desde a década de 1970.`,
            opcao3: `Desde que a ONU começou a coletar dados sobre o assunto, em 1961, a capacidade total dos
            ecossistemas naturais brasileiros em se renovar aumentou 5,8%.`,
            opcao4: `“O Catar alcançou seu Dia de Sobrecarga depois de 42 dias, enquanto a Indonésia consumiu
            todos os recursos para o ano inteiro depois de 342”, destaca a WWF, associada a Global Footprint
            Network.`,
            opcao5: `Os dados da Global Footprint Network apontam que a quantidade de emissão de CO2
            compõe
           mais da metade da demanda sobre a natureza.`,
            respostaCorreta: 'D',
            disciplinaId: 1,
        });

        const questao8 = await Questao.create({
            enunciado: `
        
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
        
        “A superexploração de recursos naturais começou em 1970, quando a capacidade total do
        planeta para aquele ano se esgotou no fim de dezembro.” – l. 8 e 9

        Nesse fragmento, é possível encontrar todos os elementos sintáticos abaixo apresentados,
        EXCETO`,

            opcao1: `adjunto adverbial.`,
            opcao2: `sujeito simples.`,
            opcao3: `adjunto adnominal.`,
            opcao4: `complemento nominal.`,
            opcao5: `objeto indireto.`,
            respostaCorreta: 'E',
            disciplinaId: 1,
        });

        const questao9 = await Questao.create({
            enunciado: `
        
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
        
        Abaixo, há trechos transcritos do texto acompanhados de um comentário. Um desses
        comentários está INCORRETO. Identifique-o.`,

            opcao1: `“Por sua vez, esses danos acentuam e dão origem a fenômenos, tais como as alterações
            climáticas, secas severas, incêndios florestais ou furacões, isso porque os mecanismos naturais
            do planeta para lidar com toda essa pressão estão sobrecarregados.” – l. 18 a 21
            Comentário: O pronome “isso” classifica-se como demonstrativo, tendo, no trecho, a função
            coesiva, retomando a ideia de origem dos fenômenos.`,
            opcao2: `“Em todo o mundo, os danos causados pela sobrecarga são cada vez mais evidentes:
            desflorestação, escassez de água doce, erosão do solo [...]” – l. 16 e 17
            Comentário: No trecho, há o emprego do vocábulo “escassez”, considerado uma palavra
            derivada, formada a partir de um sufixo formador de substantivo.`,
            opcao3: ` “Por sua vez, esses danos acentuam e dão origem a fenômenos [...].” l. 18 e 19
            Comentário: Apesar de a conjunção “e” ser coordenativa aditiva, no trecho ela estabelece
            também uma noção de consequência.`,
            opcao4: `“[...] se 50% do consumo de carne fosse substituído por uma dieta vegetariana, a data poderia
            mover-se 5 dias [...]” – l. 32 e 33
            Comentário: O vocábulo que introduz o trecho acima (“se”) tem a noção de condição, sendo
            uma conjunção subordinativa, podendo ser substituída, sem qualquer prejuízo gramatical ou de
            sentido, por “caso”. `,
            opcao5: `“O cálculo é feito por um centro de estudos americanos, o Global Footprint Network.” – l. 6 e 7
            Comentário: “Estudos” pode ser considerada uma palavra homônima, uma vez que ela se
            classifica no trecho como um substantivo, mas também existe um verbo referente a ela: “estudar”.`,
            respostaCorreta: 'E',
            disciplinaId: 1,
        });

        const questao10 = await Questao.create({
            enunciado: `
        
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
        
        “‘Na Global Footprint Network acreditamos que o uso excessivo dos ecossistemas da
        Terra constitui um dos maiores desafios que a humanidade enfrenta na atualidade, sendo que as
        alterações climáticas são uma parte importante desse desafio’, concluiu Wackernagel.”
        No trecho acima foram empregados elementos adverbiais indicadores`,

            opcao1: `de modo e de tempo.`,
            opcao2: `de lugar e de tempo.`,
            opcao3: `apenas de tempo.`,
            opcao4: `apenas de lugar.`,
            opcao5: `de lugar e de modo.`,
            respostaCorreta: 'B',
            disciplinaId: 1,
        });

        const questao11 = await Questao.create({
            enunciado: `
        
            Sobre as considerações acerca do cartaz apresentado, há uma que é INCORRETA.
            Indique-a.`,

            opcao1: `A locução verbal empregada transmite uma noção conotativa em seu verbo auxiliar.`,
            opcao2: `O texto verbal é composto por uma declaração afirmativa e uma oração com denotação
            imperativa.`,
            opcao3: `Há vocábulos empregados no cartaz que estabelecem uma relação imediata com qualquer
            receptor da mensagem, envolvendo-o na situação declarada: “faça” e “sua”.`,
            opcao4: `A parte não-verbal do cartaz estabelece uma relação semântica com a verbal.`,
            opcao5: `Há uma intenção de persuasão do receptor por meio dos serviços oferecidos pela empresa
            anunciante e um conceito ecológico de sustentabilidade.`,
            respostaCorreta: 'A',
            disciplinaId: 1,
            imagem: imagemBufferQuestao11_12
        });

        const questao12 = await Questao.create({
            enunciado: `
        
            “Natureza e concreto podem andar de mãos dadas – Faça sua parte!”
            Sobre os aspectos morfossintáticos do texto, marque o que traz uma consideração em
            DESACORDO.`,

            opcao1: `O conectivo “e” está na função de unir dois termos de função sintática idêntica.`,
            opcao2: `O vocábulo “sua” é um pronome possessivo, referindo-se, nesse contexto, a um interlocutor
            que não se faz presente no cartaz.`,
            opcao3: `A expressão “de mãos dadas” tem, nesse contexto, uma noção adverbial de meio.`,
            opcao4: `“Parte” está na função de objeto direto do verbo que o antecede.`,
            opcao5: `A segunda oração possui um sujeito desinencial.`,
            respostaCorreta: 'C',
            disciplinaId: 1,
            imagem: imagemBufferQuestao11_12
        });

        const questao13 = await Questao.create({
            enunciado: `
            Poesia errante para um planeta enfermo (fragmento)

            [...]

            A neve foi malfeita, não se faz neve
            como em filmes e gravuras.
            E me dói a cabeça, diz alguém
            E a minha também, e o mal estar me invade o corpo.
            Desculpem se vomito à vista de pessoas tão distintas.
            Envenenada morre a flor de outubro
            no canteiro onde o branco
            deixa uma escura marca de gordura.
            Estranha neve:
            espuma, espuma apenas
            que o vento espalha, bolha em baile no ar,
            vinda do Tietê alvoroçado ao abrir de comportas,
            espuma de dodecilbenzeno* irredutível,
            emergindo das águas profanadas do rio bandeirante, hoje rio despejo
            de mil imundícies do progresso.
            Pesadelo? Sinal dos tempos?
            Jeito novo de punir cidades, pois a Bíblia
            esgotou os castigos de água e fogo?
            Entre flocos de espuma detergente
            vão se findar os dias lentamente
            [ 8 ]
            de pecadores e não pecadores,
            se pecado é viver entre rios sem peixe
            e chaminés sem filtro e monstrimultinacionais,
            onde quer que a valia
            valha mais do que a vida?
            Carlos Drummond de Andrade
            Nota: *Dodecilbenzeno é um composto aromático líquido usado para preparar o detergente aniônico dodecil
            benzeno sulfato de sódio. É um derivado petroquímico substituto de gorduras e óleo de coco usados na fabricação
            de sabão.
            
            Como recurso estilístico, o poeta faz o uso sutil da ironia. É o que atesta o verso apresentado
            na opção
            `,

            opcao1: `“ E a minha também, e o mal estar me invade o corpo.”`,
            opcao2: `“Desculpem se vomito à vista de pessoas tão distintas.”`,
            opcao3: `“Pesadelo? Sinal dos tempos?”`,
            opcao4: `“se pecado é viver entre rios sem peixe”`,
            opcao5: `“Envenenada morre a flor de outubro”`,
            respostaCorreta: 'B',
            disciplinaId: 1,
        });

        const questao14 = await Questao.create({
            enunciado: `
            Poesia errante para um planeta enfermo (fragmento)

            [...]

            A neve foi malfeita, não se faz neve
            como em filmes e gravuras.
            E me dói a cabeça, diz alguém
            E a minha também, e o mal estar me invade o corpo.
            Desculpem se vomito à vista de pessoas tão distintas.
            Envenenada morre a flor de outubro
            no canteiro onde o branco
            deixa uma escura marca de gordura.
            Estranha neve:
            espuma, espuma apenas
            que o vento espalha, bolha em baile no ar,
            vinda do Tietê alvoroçado ao abrir de comportas,
            espuma de dodecilbenzeno* irredutível,
            emergindo das águas profanadas do rio bandeirante, hoje rio despejo
            de mil imundícies do progresso.
            Pesadelo? Sinal dos tempos?
            Jeito novo de punir cidades, pois a Bíblia
            esgotou os castigos de água e fogo?
            Entre flocos de espuma detergente
            vão se findar os dias lentamente
            [ 8 ]
            de pecadores e não pecadores,
            se pecado é viver entre rios sem peixe
            e chaminés sem filtro e monstrimultinacionais,
            onde quer que a valia
            valha mais do que a vida?
            Carlos Drummond de Andrade
            Nota: *Dodecilbenzeno é um composto aromático líquido usado para preparar o detergente aniônico dodecil
            benzeno sulfato de sódio. É um derivado petroquímico substituto de gorduras e óleo de coco usados na fabricação
            de sabão.
            
            No geral, o poema de Drummond tem um tom
            `,
            opcao1: `de indignação e de lamento.`,
            opcao2: `de solidão e de decepção.`,
            opcao3: `de desespero, mas também de esperança.`,
            opcao4: `de dúvida e de ira.`,
            opcao5: `de agonia e de solidão.`,
            respostaCorreta: 'A',
            disciplinaId: 1,
        });

        const questao15 = await Questao.create({
            enunciado: `
            Poesia errante para um planeta enfermo (fragmento)

            [...]

            A neve foi malfeita, não se faz neve
            como em filmes e gravuras.
            E me dói a cabeça, diz alguém
            E a minha também, e o mal estar me invade o corpo.
            Desculpem se vomito à vista de pessoas tão distintas.
            Envenenada morre a flor de outubro
            no canteiro onde o branco
            deixa uma escura marca de gordura.
            Estranha neve:
            espuma, espuma apenas
            que o vento espalha, bolha em baile no ar,
            vinda do Tietê alvoroçado ao abrir de comportas,
            espuma de dodecilbenzeno* irredutível,
            emergindo das águas profanadas do rio bandeirante, hoje rio despejo
            de mil imundícies do progresso.
            Pesadelo? Sinal dos tempos?
            Jeito novo de punir cidades, pois a Bíblia
            esgotou os castigos de água e fogo?
            Entre flocos de espuma detergente
            vão se findar os dias lentamente
            [ 8 ]
            de pecadores e não pecadores,
            se pecado é viver entre rios sem peixe
            e chaminés sem filtro e monstrimultinacionais,
            onde quer que a valia
            valha mais do que a vida?
            Carlos Drummond de Andrade
            Nota: *Dodecilbenzeno é um composto aromático líquido usado para preparar o detergente aniônico dodecil
            benzeno sulfato de sódio. É um derivado petroquímico substituto de gorduras e óleo de coco usados na fabricação
            de sabão.
            
            A “neve” mencionada pelo poeta refere-se
            `,
            opcao1: `à fumaça que sai pelas chaminés, que ora tem um tom esbranquiçado.`,
            opcao2: `à “flor de outubro”, que rapidamente se desfaz.`,
            opcao3: `ao vômito despejado pelo eu lírico à frente de outras pessoas.`,
            opcao4: `ao vômito despejado pelo eu lírico à frente de outras pessoas.`,
            opcao5: `às bolhas que flutuam no ar, espalhadas pelo vento.`,
            respostaCorreta: 'D',
            disciplinaId: 1,
        });

        const usuario1 = await Usuario.create({ nome: "Lucas Macedo Bernardino", email: "lucasmacedoes@gmail.com", senha: "123" })

        const usuario2 = await Usuario.create({ nome: "Raphael Macedo Bernardino", email: "faeldojo@gmail.com", senha: "asdasdasdasd" })

        const usuario3 = await Usuario.create({ nome: "João Macedo Bernardino", email: "joão@gmail.com", senha: "123" })

        const usuario4 = await Usuario.create({ nome: "Eita Macedo Bernardino", email: "eita@gmail.com", senha: "XASDASsdBX" })

        const usuario5 = await Usuario.create({ nome: "Samuel Macedo Bernardino", email: "samuel@gmail.com", senha: "zxvbad12" })

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