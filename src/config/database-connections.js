import { Sequelize } from "sequelize";
import { databaseConfigSQLite } from "./database-config.js";
import * as fs from 'fs';
import { Disciplina } from "../models/Disciplina.js";
import { Categoria } from "../models/Categoria.js";
import { Conquista } from "../models/Conquista.js";
import { Prova } from "../models/Prova.js";
import { Questao } from "../models/Questao.js";
import { QuestaoErrada } from "../models/QuestaoErrada.js";
import { Usuario } from "../models/Usuario.js";
import { UsuarioResposta } from "../models/UsuarioResposta.js"
import { UsuarioConquista } from "../models/UsuarioConquista.js";
import bcrypt from 'bcrypt';
export const sequelize = new Sequelize(databaseConfigSQLite)


Disciplina.init(sequelize)
Categoria.init(sequelize)
Conquista.init(sequelize)
Prova.init(sequelize)
Questao.init(sequelize)
QuestaoErrada.init(sequelize)
Usuario.init(sequelize)
UsuarioResposta.init(sequelize)
UsuarioConquista.init(sequelize)

Disciplina.associate(sequelize.models);
Categoria.associate(sequelize.models)
Conquista.associate(sequelize.models)
Prova.associate(sequelize.models)
Questao.associate(sequelize.models);
QuestaoErrada.associate(sequelize.models)
Usuario.associate(sequelize.models)
UsuarioConquista.associate(sequelize.models)
UsuarioResposta.associate(sequelize.models)

databaseInserts();  

function databaseInserts() {
    (async () => {
        await sequelize.sync({ force: true })
        const portugues = await Disciplina.create({ nome: "Português" });
        const matematica = await Disciplina.create({ nome: "Matemática" });
        const historia = await Disciplina.create({ nome: "História" });
        const geografia = await Disciplina.create({ nome: "Geografia" });
        const ciencia = await Disciplina.create({ nome: "Ciências" });
        
        const interpretacaoTexto = await Categoria.create({nome: "Interpretação de Texto e Análise Semântica", disciplinaId: portugues.id})
  
        const prova952023 = await Prova.create({nome: "95/2023"})


        const crown = "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/crown.png"
        const emerald = "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/emerald.png"
        const diamond = "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/diamond.png"





        const questao1 = await Questao.create({
            enunciado: `

         Leia o Texto para responder a questão. 
        
                E o febrífugo não passa de um antitérmico 

        O dentista me passou a receita de remédio para ajudar a cicatrizar melhor uma pequena 
        cirurgia. Parei na primeira farmácia. Aliás, uma grande farmácia, pertencente a uma des
        sas redes. Farmácia se tornou supermercado. A gente entra, recebe cestinha, procura os 
        remédios nas gôndolas. E importamos o costume norte-americano de drugstore. Tem de 
        tudo, de remédios a bolachas, leite em pó, calcinha e sutiãs, refrigerantes. Aguardem: 
        cachorro-quente! 
        Pois o bem jovem que me serviu apanhou a receita, olhou, reolhou e perguntou: 
        — O que está escrito aqui? 
        — O nome do remédio. 
        — Sei, mas qual é o remédio? 
        — Você é quem tem de saber. 
        — Mas como vou saber, se não entendo a letra? 
        — Acho que deve ser... Periogard... Isto? Existe um remédio com esse nome? 
        — Vou ver. 
        Ele foi. Olhou o que foi possível no P. E voltou. 
        — Não temos. 
        — Acabou ou está em falta? 
        — Está em falta. 
        Deixei por isso mesmo continuei. Parei na próxima. Também o jovem olhou, reolhou, cochi
        chou com outro que deu uma vista na receita. 
        — Não temos. 
        — Que remédio mesmo é?
        — É esse que está escrito aí. 
        — Sei. Mas não entendo letra de médico. 
        — Nem eu. Por que não escreveu à máquina? 
        Continuei mais um pouco, mas desisti. E fui para casa, pensando naqueles tempos em que 
        o farmacêutico lia qualquer letra. E os médicos pareciam fazer de propósito aqueles gar
        ranchos, para colocar à prova o pobre boticário. Que, por sua vez, não dava o braço a tor
        cer. Olhava, e sabia o medicamento. Pode ser que muita gente tenha tomado aquilo que o 
        farmacêutico entendeu e que nem sempre correspondia ao prescrito. Mas, era batata, não 
        falhava. Em Araraquara, de vez em quando, a professora apanhava a prova de um aluno:
        
        — Que letrinha, hein? Vai ser médico? O que pensa? Que o professor é farmacêutico?
        
        Eram duas castas bem estabelecidas. Os médicos com as letras ruins e os farmacêuticos que 
        decifravam tudo, champolions dedicados. Muitas vezes imaginei que houvesse um conluio, 
        principalmente quando se deixava a receita para aviar. Na calada da noite, o farmacêutico 
        batendo à porta do médico e pedindo: “Socorro, doutor. Pode me decifrar as receitas de 
        hoje?”. E lá ficavam os dois, labutando. 
        
        Hoje, médicos usam computadores. E as farmácias têm tantos, mas tantos remédios, que é 
        impossível se guardar o nome de todos. Há pilhas de listas, grossíssimas. Ou o povo anda 
        muito doente ou o melhor negócio do mundo é montar um laboratório e em seguida uma 
        farmácia.

        Leia o trecho a seguir e, em seguida, faça o que se pede
         
        “A leitura é uma atividade na qual se leva em conta as experiências 
        e os conhecimentos do leitor; a leitura de um texto exige do leitor 
        bem mais que o conhecimento do código linguístico (...).”

        Considerando que o sentido do texto é construído na relação entre texto e sujeito, julgue os itens 
        abaixo como verdadeiros ou falsos em relação à crônica E o febrífugo não passa de um antitérmico. 
        
        I) O modelo de farmácia popularmente difundido no Brasil, atualmente, é embasado no padrão 
        americano, havendo uma diversidade de produtos disponíveis, para além dos medicamentos. 
        II) No trecho “E os médicos pareciam fazer de propósito aqueles garranchos, para colocar à prova 
        o pobre boticário.”, pode-se afirmar que o adjetivo “pobre” refere-se à condição econômica do 
        farmacêutico. 
        III) Na frase “Mas, era batata, não falhava.”, é possível compreender que o termo “batata” trata-se, 
        literalmente, do tubérculo, evidenciando o uso de linguagem puramente denotativa. 
        IV) É perceptível, no período a seguir, “Que letrinha, hein? Vai ser médico? O que pensa? Que o 
        professor é farmacêutico?”, que a professora está avaliando negativamente a letra do estudante. 
        V) Entende-se que “castas” significa grupos, classes, na oração: “Eram duas castas bem estabele
        cidas. Os médicos com as letras ruins e os farmacêuticos que decifravam tudo (...)”. 
        São verdadeiros os itens:
        `,
            opcao1: `I, II e III`,
            opcao2: `I, III e IV`,
            opcao3: `I, II e IV`,
            opcao4: `I, IV e V`,
            opcao5: `I, II e V`,
            respostaCorreta: 'D',
            disciplinaId: portugues.id,
            categoriaId: interpretacaoTexto.id,
            provaId: prova952023.id,
            ordem: 1
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
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/imagemQuestao11-12.png"
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
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/imagemQuestao11-12.png"
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

        
        const questao16 = await Questao.create({
            enunciado: `
            A figura mostra o deslocamento de um avião que decolou na cidade A com destino a cidade 
            E, fazendo escala na cidade C. As distâncias entre as cidades A e C e C e E são, ambas, iguais a 
            500km e, ambos os trechos, são retilíneos. Ao decolar da cidade A, o avião seguiu na direção de 
            20° à direita em relação ao norte (que está representado pelo segmento AB). Ao decolar da cidade 
            C o avião seguiu na direção de 34° à esquerda em relação ao norte (desta vez representado pelo 
            segmento CD). Se o avião tivesse decolado na cidade A em direção a cidade E sem fazer escala 
            na cidade C, descrevendo o caminho representado pelo segmento de reta tracejado AE, qual seria 
            o ângulo x desse caminho em relação ao norte?
            `,
            opcao1: `à fumaça que sai pelas chaminés, que ora tem um tom esbranquiçado.`,
            opcao2: `à “flor de outubro”, que rapidamente se desfaz.`,
            opcao3: `ao vômito despejado pelo eu lírico à frente de outras pessoas.`,
            opcao4: `ao vômito despejado pelo eu lírico à frente de outras pessoas.`,
            opcao5: `às bolhas que flutuam no ar, espalhadas pelo vento.`,
            respostaCorreta: 'C',
            disciplinaId: 2,
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/imagemQuestao16.png"
        });
        //QUESTÃO 18 DA PROVA 01-2020
        const questao17 = await Questao.create({
            enunciado: `
            Seja O o centro da circunferência circunscrita ao triângulo acutângulo ABC e seja D o pé 
            da perpendicular baixada de A sobre BC. Sabendo que o ângulo O C = 37°, determine a medida 
            do ângulo D B.
            `,
            opcao1: ` 23°`,
            opcao2: ` 33°`,
            opcao3: `37°`,
            opcao4: `47°`,
            opcao5: `53°`,
            respostaCorreta: 'C',
            disciplinaId: 2, 
        });
        const questao18 = await Questao.create({
            enunciado: `
            Considere as funções f(x)=x² - 5x + 6 e g(x)= -f(x). Determine a área do quadrilátero .
            ABCD, sabendo que A e C são os zeros da função f, B é ponto de mínimo de f e D é ponto de
            máximo de g.
            `,
            opcao1: `1/4`,
            opcao2: `1/2`,
            opcao3: `3/4`,
            opcao4: `1`,
            opcao5: `2`,
            respostaCorreta: 'A',
            disciplinaId: 2, 
        });
        
        const questao19 = await Questao.create({
            enunciado: `
            A figura abaixo apresenta o esquema de uma roda gigante. Esta roda gigante tem 60 metros de 
            diâmetro externo e seu centro (ponto C) está localizado a 35 metros do chão. A estrutura que 
            faz a sustentação, representada pelo segmento CI, é perpendicular ao solo. A roda gigante gira 
            no sentido anti-horário a uma velocidade constante e faz uma volta completa, sem parar, em 
            exatamente seis minutos. Uma pessoa embarca e inicia a sua volta na roda gigante no ponto de 
            embarque D.

            Fixando o plano cartesiano com o eixo-x paralelo ao solo e a origem coincindindo com 
            o ponto C, em qual quadrante estará essa pessoa após cinco minutos do início da sua volta, 
            considerando que a roda não parou após o seu embarque?
            `,
            opcao1: `Primeiro`,
            opcao2: `Segundo`,
            opcao3: `Terceiro`,
            opcao4: `Quarto`,
            opcao5: `Sobre o eixo-x`,
            respostaCorreta: 'C',
            disciplinaId: 2,
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/imagemQuestao20.png"
        });
        const questao20 = await Questao.create({
            enunciado: `
            A figura abaixo apresenta o esquema de uma roda gigante. Esta roda gigante tem 60 metros de 
            diâmetro externo e seu centro (ponto C) está localizado a 35 metros do chão. A estrutura que 
            faz a sustentação, representada pelo segmento CI, é perpendicular ao solo. A roda gigante gira 
            no sentido anti-horário a uma velocidade constante e faz uma volta completa, sem parar, em 
            exatamente seis minutos. Uma pessoa embarca e inicia a sua volta na roda gigante no ponto de 
            embarque D.

            A que altura em relação ao solo, estará essa pessoa após cinco minutos do início da sua 
            volta, considerando que a roda não parou após o seu embarque?
            `,
            opcao1: `10m`,
            opcao2: `15m`,
            opcao3: `20m`,
            opcao4: `25m`,
            opcao5: `30m`,
            respostaCorreta: 'C',
            disciplinaId: 2,
        });
        const questao21 = await Questao.create({
            enunciado: `
            A figura abaixo apresenta o esquema de uma roda gigante. Esta roda gigante tem 60 metros de 
            diâmetro externo e seu centro (ponto C) está localizado a 35 metros do chão. A estrutura que 
            faz a sustentação, representada pelo segmento CI, é perpendicular ao solo. A roda gigante gira 
            no sentido anti-horário a uma velocidade constante e faz uma volta completa, sem parar, em 
            exatamente seis minutos. Uma pessoa embarca e inicia a sua volta na roda gigante no ponto de 
            embarque D.

            Quantos metros percorreu essa pessoa após cinco minutos do início da sua volta, 
            considerando que a roda não parou após o seu embarque?
            `,
            opcao1: `10π m`,
            opcao2: `50π/3 m`,
            opcao3: `50π m`,
            opcao4: `175π/3 m`,
            opcao5: `60π m`,
            respostaCorreta: 'C',
            disciplinaId: 2,
        });
        
        const questao22 = await Questao.create({
            enunciado: `
            Em um quadrado mágico n x n (n linhas e n colunas), a soma dos números de cada linha, 
            coluna ou diagonal deve ser sempre a mesma. A figura abaixo apresenta um quadrado mágico 
            3x3 com alguns números já conhecidos. Qual é o valor de x + y + z?
            `,
            opcao1: `58`,
            opcao2: `62`,
            opcao3: `66`,
            opcao4: `68`,
            opcao5: `72`,
            respostaCorreta: 'D',
            disciplinaId: 2,
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/imagemQuestao22.png"
        });
        
        const questao23 = await Questao.create({
            enunciado: `
            A figura abaixo ilustra dois triângulos ABC e CDE. Sabendo que os ângulos AB^C, BC^D e CE^F
            são retos, os pontos A, E e C são colineares, 𝐴𝐵 = 8 e 𝐵𝐶 = 15, determine o valor da razão entre 
            os segmentos DE e DC.
            `,
            opcao1: `1`,
            opcao2: `13/15`,
            opcao3: `15/17`,
            opcao4: `17/25`,
            opcao5: `19/13`,
            respostaCorreta: 'C',
            disciplinaId: 2,
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/imagemQuestao23.png"
        });
        const questao24 = await Questao.create({
            enunciado: `
            Dado o conjunto A={0,1,2,3,4,5,6,7,8,9,10}, considere uma função de A em ℕ∗ tal que
            f(a + b) = f(a)f(b) e f(1) = 1. O conjunto imagem de f possui quantos elementos?
            `,
            opcao1: `1`,
            opcao2: `2`,
            opcao3: `5`,
            opcao4: `9`,
            opcao5: `10`,
            respostaCorreta: 'A',
            disciplinaId: 2
        });
        const questao25 = await Questao.create({
            enunciado: `
            O produto entre dois números é 391 e a soma de seus quadrados é 818. Determine o valor 
            da diferença entre os quadrados desses números, sabendo que um é 6 unidades maior do que o 
            outro.
            `,
            opcao1: `96`,
            opcao2: `182`,
            opcao3: `240`,
            opcao4: `380`,
            opcao5: `396`,
            respostaCorreta: 'C',
            disciplinaId: 2
        });
        const questao26 = await Questao.create({
            enunciado: `
            Um tênis que custava R$ 160,00 em outubro, teve um aumento de 5% em seu preço para o 
            mês de novembro. O salário de Celso também teve um aumento de 5% em novembro, de modo 
            que o tênis, em novembro, passou a custar 8% do salário de Celso. Qual era o salário de Celso 
            em outubro?
            `,
            opcao1: `R$ 1600,00`,
            opcao2: `R$ 1980,00`,
            opcao3: `R$ 2000,00`,
            opcao4: `R$ 2100,00`,
            opcao5: `R$ 2178,00`,
            respostaCorreta: 'C',
            disciplinaId: 2
        });
        const questao27 = await Questao.create({
            enunciado: `
            Em uma festa, o valor da entrada era R$ 1000,00. Porém, os organizadores devolverão, 
            no fim da festa, para cada um que comprou entrada, 10 reais vezes a quantidade de entradas 
            vendidas para a festa. Dessa forma, se forem vendidos, por exemplo, 5 entradas, cada comprador 
            pagará R$ 1000,00 e receberá de volta R$ 50,00 no fim da festa. Qual a arrecadação máxima 
            possível para essa festa, assumindo que a quantidade máxima de entradas disponível é 90?
            `,
            opcao1: `R$ 9.000,00`,
            opcao2: `R$ 12.000,00`,
            opcao3: `R$ 15.000,00`,
            opcao4: `R$ 25.000,00`,
            opcao5: `R$ 40.000,00`,
            respostaCorreta: 'D',
            disciplinaId: 2
        });
        const questao28 = await Questao.create({
            enunciado: `
            Durante a transmissão de uma corrida de fórmula 1, são indicados pontos de máxima e 
            mínima velocidades por meio de um velocímetro mostrado na tela da TV. Se o percurso do 
            autódromo for de 4,550 Km e o tempo médio por volta de 1 min e 5 s. Determine a velocidade 
            escalar média por volta e a duração aproximada da corrida para completar 71 voltas.
            `,
            opcao1: `250 Km/h; 1h:17 min`,
            opcao2: `252 Km/h; 1h:17 min`,
            opcao3: `252 Km/h; 1h:21 min`,
            opcao4: `253 Km/h; 1h:21 min`,
            opcao5: `253 Km/h; 1h:25 min`,
            respostaCorreta: 'B',
            disciplinaId: 5
        });
        const questao29 = await Questao.create({
            enunciado: `
            Um carro está trafegando por uma rodovia retilínea com a velocidade de 72 Km/h. Ao 
            observar um “quebra-molas” adiante, o motorista aciona os freios, percorrendo uma certa 
            distância no intervalo de 5 segundos, reduzindo sua velocidade para 36 Km/h. Supondo que a 
            aceleração é constante durante o período de frenagem, determine seu módulo:
            `,
            opcao1: `0 m/s²`,
            opcao2: `1 m/s²`,
            opcao3: `2 m/s²`,
            opcao4: `4 m/s²`,
            opcao5: `5 m/s²`,
            respostaCorreta: 'C',
            disciplinaId: 5
        });
        const questao30 = await Questao.create({
            enunciado: `
            Nas regiões onde o inverno é mais rigoroso, é comum às pessoas ficarem perto de lareiras 
            para se aquecerem. Esse tipo de aquecimento ocorre por:
            `,
            opcao1: `Irradiação térmica.`,
            opcao2: `Condução térmica.`,
            opcao3: `Convecção.`,
            opcao4: `Condutibilidade.`,
            opcao5: `Dilatação térmica.`,
            respostaCorreta: 'A',
            disciplinaId: 5
        });
        
        const questao31 = await Questao.create({
            enunciado: `
            O gráfico abaixo representa a variação da temperatura de ebulição dos líquidos I e II em 
            função do tempo. Para os dois líquidos, o tempo de ebulição, representado no eixo x, variou entre 
            1 e 10 minutos. Para o líquido I (linha contínua), a temperatura de ebulição, representada no 
            eixo y, permaneceu constante em 72 graus Celsius, enquanto para o líquido II (linha tracejada), 
            variou entre 76 e 85 graus Celsius.

            Sobre o gráfico acima, temos as seguintes afirmações:
            I - Representa um fenômeno químico para os dois líquidos.

            II - Sabendo que o resultado representado no gráfico foi obtido a uma pressão de 1 atm, se 
            a pressão atmosférica fosse de 0,5 atm, teríamos, como consequência, um aumento da 
            temperatura de ebulição dos líquidos.

            III - A reta obtida para o líquido I representa a sua evaporação, uma vez que a temperatura 
            permaneceu constante por aproximadamente 9 minutos, tempo necessário para todo líquido 
            se transformar em vapor.

            IV - A variação da temperatura de ebulição do líquido II indica que ele é composto por duas ou 
            mais substâncias.

            De acordo com as afirmações acima, assinale a opção CORRETA.
            `,
            opcao1: `as afirmativas II e IV são verdadeiras.`,
            opcao2: `as afirmativas III e IV são verdadeiras.`,
            opcao3: `as afirmativas I, II e III são verdadeiras.`,
            opcao4: `apenas a afirmativa I é verdadeira.`,
            opcao5: `apenas a afirmativa IV é verdadeira.`,
            respostaCorreta: 'E',
            disciplinaId: 5,
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/imagemQuestao31.png"
        });

        const questao32 = await Questao.create({
            enunciado: `
            Analise as sentenças e marque a alternativa ERRADA.
            Considere essas informações, quando necessário:
            - o elemento Cálcio está situado no grupo 2 da tabela periódica;
            - o elemento Carbono está situado no grupo 14 da tabela periódica;
            - o elemento oxigênio está situado no grupo 16 da tabela periódica.
            `,
            opcao1: `Os elementos químicos estão organizados na tabela periódica conforme a lei periódica dos 
            elementos, segundo a qual, algumas propriedades físicas e químicas dos elementos variam, de 
            forma periódica, de acordo com seu número atômico.`,
            opcao2: `O carbonato de cálcio (CaCO3) é um sal composto por elementos dos grupos: metais alcalinos terrosos, calcogênios e halogênios.`,
            opcao3: `Convecção.`,
            opcao4: `Condutibilidade.`,
            opcao5: `Dilatação térmica.`,
            respostaCorreta: 'A',
            disciplinaId: 5
        });
        const questao33 = await Questao.create({
            enunciado: `
            Leia abaixo um trecho extraído da reportagem intitulada “Garimpos ilegais se alastram nas 
            proximidades da BR-163”, publicada em 7 de outubro de 2019, no sítio eletrônico do Greenpeace 
            Brasil (Fonte: https://www.greenpeace.org/brasil).
            
            “Ao longo das últimas duas décadas, diversas Unidades de Conservação 
            (UCs) foram criadas nas florestas do Pará com o objetivo de conter o avanço 
            do desmatamento da Amazônia. Mas o garimpo ilegal tem se espalhado pela 
            região com grande velocidade, ameaçando ainda mais a maior floresta tropical 
            do mundo. Em sobrevoo realizado no fim de setembro, confirmamos que o 
            garimpo vem rompendo os limites legais e se alastrando para o interior das 
            áreas protegidas que compõem o mosaico da BR-163, importante rodovia que 
            liga o Pará ao Mato Grosso.
            Análise feita pelo Greenpeace Brasil a partir de dados do Instituto Nacional 
            de Pesquisas Espaciais (Inpe) mostra que, de agosto de 2018 a agosto de 2019, 
            a área garimpada na região foi de quase 50 km², equivalente a cerca de 7 mil 
            campos de futebol [...].”
            Considerando as informações contidas nesse trecho e as potenciais ameaças do garimpo ilegal 
            aos ecossistemas na Amazônia, é INCORRETO afirmar que
            
            `,
            opcao1: `a atividade de garimpo ilegal representa uma importante causa de destruição de florestas na 
            Amazônia.`,
            opcao2: `a atividade de garimpo ilegal causa a poluição de rios, pois o mercúrio utilizado para separar 
            pequenas partículas de ouro dos sedimentos dragados dos leitos dos rios é tóxico para os seres 
            vivos.`,
            opcao3: `o mercúrio utilizado nos garimpos ilegais se acumula ao longo da cadeia alimentar.`,
            opcao4: `pessoas que se alimentam de peixes pescados em rios contaminados pelo mercúrio utilizado 
            nos garimpos podem apresentar sintomas de intoxicação por esse poluente.`,
            opcao5: `pessoas podem beber a água de rios contaminados por mercúrio sem riscos para saúde, desde 
            que seja fervida antes do consumo.`,
            respostaCorreta: 'E',
            disciplinaId: 5
        });

        const questao34 = await Questao.create({
            enunciado: `
            A batata (Solanum tuberosum L.) é um dos principais alimentos consumidos no mundo e seu 
            valor nutricional está relacionado, principalmente, à alta concentração de amido nos tubérculos. 
            Entretanto, estudos têm indicado que a produtividade da cultura da batata poderá ser afetada 
            pelo aumento das temperaturas médias no planeta, pois as taxas de fotossíntese e de formação 
            de tubérculos nessa espécie são maiores quando as temperaturas são amenas, entre 16 e 24°C.
            Isso parece um contrassenso, pois em um cenário de aquecimento global causado pelo aumento 
            da concentração de gás carbônico (CO2) na atmosfera, poderiam ser esperados incrementos de 
            produtividade nas plantas.

            Considerando as características da fotossíntese e os possíveis cenários ambientais ocasionados 
            pelo aquecimento global, marque a opção que complementa CORRETAMENTE a discussão 
            apresentada acima.
            `,
            opcao1: `O CO2 é um gás essencial para a fotossíntese, pois, ao reagir com a água na presença de luz, 
            gera carboidratos úteis às plantas. Contudo, maiores concentrações desse gás na atmosfera não 
            têm efeitos positivos sobre a fotossíntese quando temperaturas muito altas dificultam a ação de 
            enzimas e promovem o fechamento dos estômatos.`,
            opcao2: `O CO2 é um gás essencial para a fotossíntese, pois, ao reagir com o oxigênio na presença de 
           luz, gera carboidratos úteis às plantas. Contudo, maiores concentrações desse gás na atmosfera 
           não têm efeitos positivos sobre a fotossíntese quando temperaturas muito altas dificultam a ação 
           de enzimas e promovem a abertura dos estômatos.`,
            opcao3: `O CO2 é um gás essencial para a fotossíntese, pois, ao reagir com o oxigênio na ausência de 
           luz, gera carboidratos úteis às plantas. Contudo, maiores concentrações desse gás na atmosfera 
           não têm efeitos positivos sobre a fotossíntese quando temperaturas muito altas dificultam a ação 
           de enzimas e promovem a abertura dos estômatos.`,
            opcao4: `O CO2 é um gás essencial para a fotossíntese, pois, ao reagir com a água na ausência de luz, 
            gera carboidratos úteis às plantas. Contudo, maiores concentrações desse gás na atmosfera não 
            têm efeitos positivos sobre a fotossíntese quando temperaturas muito altas favorecem a ação de 
            enzimas e promovem o fechamento dos estômatos.`,
            opcao5: `O CO2 é um gás essencial para a fotossíntese, pois, ao reagir com a clorofila na presença de 
           luz, gera carboidratos úteis às plantas. Contudo, maiores concentrações desse gás na atmosfera 
           não têm efeitos positivos sobre a fotossíntese quando temperaturas muito altas favorecem a ação 
           de enzimas e promovem a abertura dos estômatos.`,
            respostaCorreta: 'A',
            disciplinaId: 5
        });

        const questao35 = await Questao.create({
            enunciado: `
            Leia abaixo um trecho extraído de reportagem intitulada “Intolerância à lactose atinge 
            até 75% da população”, publicada em 30 de agosto de 2018, no sítio eletrônico da Folha Vitória 
            (Fonte: https://www.folhavitoria.com.br/saude/noticia)
            
            “Cerca de 60% a 75% da população é atingida pelo mal da intolerância à 
            lactose. A intolerância ocorre quando o organismo tem a incapacidade parcial ou 
            completa de digerir o açúcar existente no leite e seus derivados. Alguns sintomas 
            como náuseas, vômitos, dor abdominal, gases ou diarreia, observados logo após 
            a ingestão de leite ou outros derivados lácteos, podem indicar uma provável 
            intolerância à lactose. É importante ressaltar que intolerância é diferente de 
            alergia. A alergia ao leite é caracterizada por uma reação imunológica à proteína 
            do leite, que se manifesta após sua ingestão. Já a intolerância é um distúrbio 
            digestivo. Há uma busca constante por tratamentos alternativos que possam 
            ajudar a pessoa intolerante à lactose a ter uma vida mais saudável. Nesse sentido, 
            a prática ortomolecular tem se destacado com excelentes resultados. O tratamento 
            ortomolecular busca corrigir maus hábitos, limpar o corpo dos excessos contidos 
            nele, além de adicionar vitaminas, minerais e hormônios, quando necessário.
            Segundo o Dr. J. Bussade, nutrólogo e um dos precursores da prática 
            ortomolecular na América Latina, a primeira atitude a se tomar é retirar 
            totalmente o leite da alimentação. Ele recomenda ainda o uso de leites vegetais, 
            produzidos a partir de inhame, castanhas ou amêndoas. O especialista ainda 
            indica a ingestão de vitamina D e de farinha de vitamina D3, além de tomar 
            sol, em horários saudáveis. Segundo Bussade, esse tratamento alternativo, 
            entre outras recomendações, pode fazer com que as pessoas com intolerância à 
            lactose tenham uma vida normal. Nos últimos cinco anos, a venda de alimentos 
            funcionais, sem glúten e lactose, cresceram 98%. Essa característica é cada 
            vez mais comum em biscoitos, pães, barrinhas de cereais e bolos variados. O 
            mercado está em franca expansão e, atualmente, este tipo de produto já pode 
            ser encontrado em padarias, supermercados e lojas de produtos naturais […].”
            Considerando o tema abordado no texto, pode-se afirmar que a alternativa CORRETA é:`,

            opcao1: `A intolerância à lactose é causada por um mau funcionamento do pâncreas.`,
            opcao2: `A intolerância à lactose é causada pelo excesso de carboidratos que o indivíduo ingere ao 
            longo da vida.`,
            opcao3: `A intolerância à lactose é causada quando o organismo não produz, ou produz em quantidade 
            insuficiente, uma enzima digestiva que quebra e decompõe a lactose.`,
            opcao4: `A intolerância à lactose é causada quando o organismo não produz, ou produz em quantidade 
            insuficiente, um lipídio chamado lactase, que quebra e decompõe a lactose.`,
            opcao5: `A intolerância à lactose é causada quando o organismo não produz, ou produz em quantidade 
            insuficiente, vitaminas que promovem a quebra e a decomposição da lactose.`,
            respostaCorreta: 'C',
            disciplinaId: 5
        });
        const questao36 = await Questao.create({
            enunciado: `
            Leia o poema abaixo, de autoria do poeta português José Joaquim Cesário Verde.
            
            Nós
            Foi quando em dois verões, seguidamente, a Febre
            E a Cólera também andaram na cidade,
            Que esta população, com um terror de lebre,
            Fugiu da capital como da tempestade.
            Ora, meu pai, depois das nossas vidas salvas
            (Até então nós só tivéramos sarampo).
            Tanto nos viu crescer entre uns montões de malvas
            Que ele ganhou por isso um grande amor ao campo!
            Se acaso o conta, ainda a fronte se lhe enruga:
            O que se ouvia sempre era o dobrar dos sinos;
            Mesmo no nosso prédio, os outros inquilinos
            Morreram todos. Nós salvámo-nos na fuga.
            Na parte mercantil, foco da epidemia,
            Um pânico! Nem um navio entrava a barra,
            A alfândega parou, nenhuma loja abria,
            E os turbulentos cais cessaram a algazarra.
            Pela manhã, em vez dos trens dos baptizados,
            Rodavam sem cessar as seges dos enterros.
            Que triste a sucessão dos armazéns fechados!
            Como um domingo inglês na city, que desterros!
            Sem canalização, em muitos burgos ermos
            Secavam dejecções cobertas de mosqueiros.
            E os médicos, ao pé dos padres e coveiros,
            Os últimos fiéis, tremiam dos enfermos!
            Uma iluminação a azeite de purgueira,
            De noite amarelava os prédios macilentos.
            Barricas de alcatrão ardiam; de maneira
            Que tinham tons de inferno outros armamentos.
            Porém, lá fora, à solta, exageradamente
            Enquanto acontecia essa calamidade,
            Toda a vegetação, pletórica, potente,
            Ganhava imenso com a enorme mortandade!
            
            O poema retrata a ocorrência de diferentes doenças que afetam os seres humanos desde os 
            séculos passados. A respeito do sarampo, marque a alternativa CORRETA.`,

            opcao1: `É uma doença sem cura causada por bactérias e caracterizada pelo aparecimento de erupções 
            na pele e febre alta.`,
            opcao2: ` É uma doença contagiosa, com sintomas de coriza, catarro e pintas vermelhas na pele, causada 
            por vírus que atacam adultos e crianças.`,
            opcao3: `É uma doença transmitida por contato físico entre pessoas contaminadas, sendo causada por 
            fungos. Pode ser prevenida por meio de vacina.`,
            opcao4: `É uma doença transmitida por bactérias que causam erupções na pele, produção de coriza e 
            catarro. Pode ser prevenida pelo isolamento do paciente doente.`,
            opcao5: `É uma doença viral sem prevenção ou tratamento, cujos sintomas são o catarro e as erupções 
            na pele.`,
            respostaCorreta: 'B',
            disciplinaId: 5
        });

        const questao37 = await Questao.create({
            enunciado: `
            Leia o poema abaixo, de autoria do poeta português José Joaquim Cesário Verde.
            
            Nós
            Foi quando em dois verões, seguidamente, a Febre
            E a Cólera também andaram na cidade,
            Que esta população, com um terror de lebre,
            Fugiu da capital como da tempestade.
            Ora, meu pai, depois das nossas vidas salvas
            (Até então nós só tivéramos sarampo).
            Tanto nos viu crescer entre uns montões de malvas
            Que ele ganhou por isso um grande amor ao campo!
            Se acaso o conta, ainda a fronte se lhe enruga:
            O que se ouvia sempre era o dobrar dos sinos;
            Mesmo no nosso prédio, os outros inquilinos
            Morreram todos. Nós salvámo-nos na fuga.
            Na parte mercantil, foco da epidemia,
            Um pânico! Nem um navio entrava a barra,
            A alfândega parou, nenhuma loja abria,
            E os turbulentos cais cessaram a algazarra.
            Pela manhã, em vez dos trens dos baptizados,
            Rodavam sem cessar as seges dos enterros.
            Que triste a sucessão dos armazéns fechados!
            Como um domingo inglês na city, que desterros!
            Sem canalização, em muitos burgos ermos
            Secavam dejecções cobertas de mosqueiros.
            E os médicos, ao pé dos padres e coveiros,
            Os últimos fiéis, tremiam dos enfermos!
            Uma iluminação a azeite de purgueira,
            De noite amarelava os prédios macilentos.
            Barricas de alcatrão ardiam; de maneira
            Que tinham tons de inferno outros armamentos.
            Porém, lá fora, à solta, exageradamente
            Enquanto acontecia essa calamidade,
            Toda a vegetação, pletórica, potente,
            Ganhava imenso com a enorme mortandade!
            
            O poema retrata a ocorrência de diferentes doenças que afetam os seres humanos desde os 
            séculos passados. A respeito do sarampo, marque a alternativa CORRETA.`,

            opcao1: `É uma doença sem cura causada por bactérias e caracterizada pelo aparecimento de erupções 
            na pele e febre alta.`,
            opcao2: ` É uma doença contagiosa, com sintomas de coriza, catarro e pintas vermelhas na pele, causada 
            por vírus que atacam adultos e crianças.`,
            opcao3: `É uma doença transmitida por contato físico entre pessoas contaminadas, sendo causada por 
            fungos. Pode ser prevenida por meio de vacina.`,
            opcao4: `É uma doença transmitida por bactérias que causam erupções na pele, produção de coriza e 
            catarro. Pode ser prevenida pelo isolamento do paciente doente.`,
            opcao5: `É uma doença viral sem prevenção ou tratamento, cujos sintomas são o catarro e as erupções 
            na pele.`,
            respostaCorreta: 'B',
            disciplinaId: 5
        });

        const questao38 = await Questao.create({
            enunciado: `
            Leia o excerto a seguir.
            “Capítulo I: Em que se diz como apareceram, como se viram os sinais, os presságios de 
            desgraça, antes que os espanhóis viessem aqui a este país, antes que aqui fossem conhecidos 
            pelos habitantes
            Dez anos antes da vinda dos espanhóis, um presságio de desgraça apareceu pela primeira vez 
            no céu, como uma chama de fogo, como uma lâmina de fogo, como uma aurora. Parecia chover 
            em pequeninas gotas, como que a perfurar o céu; alargou-se na base e estreitou-se no vértice. 
            Bem no meio do céu, bem no centro do céu chegou, até o mais profundo do coração do céu. 
            Desse modo era vista, lá no oriente se mostrava, brotava bem no meio da noite, parecia fazer o 
            dia, fazia o dia, e mais tarde o Sol nascente se apagava. Ela se mostrou durante um ano inteiro. 
            Começou a se mostrar em um ano Doze-Casa. Quando se mostravam as gentes soltavam gritos, 
            davam tapas nos lábios, sobressaltavam-se, abandonavam o trabalho.”
            Códice Florentino In: TODOROV, Tzvetan; BAUDOT, Georges (Org.). Relatos astecas da conquista. Tradução de Luiz 
            Antonio Oliveira de Araújo, UNESP; 1ª edição, 2019, pp. 69-71.
            
            O Códice Florentino é uma preciosa fonte de informações sobre os modos de vida dos 
            astecas, importante civilização nativa do continente americano. A respeito da civilização asteca, 
            é CORRETO afirmar que`,

            opcao1: `o império asteca (Tawantinsuyu em quíchua) foi um Estado criado pela civilização mexica, 
            resultado de uma sucessão de civilizações andinas e que se tornou o maior império da América 
            pré-colombiana. A administração política e o centro de forças armadas do império ficavam 
            localizados em Cusco (em quíchua, “Umbigo do Mundo”), no atual Peru.`,
            opcao2: `os povos astecas incluíam diferentes grupos étnicos do México central, particularmente 
            aqueles grupos que falavam a língua náuatle e dominaram grandes partes da Mesoamérica, entre 
            os séculos XIV e XVI. A cultura asteca era organizada em cidades-Estado (altepetl), algumas 
            das quais se juntaram para formar alianças, confederações políticas ou impérios.`,
            opcao3: ` considerada a civilização-mãe de todas as culturas mesoamericanas que lhe são posteriores, a 
            civilização asteca floresceu na região amazônica aproximadamente entre 1500 e 400 a.C. Além 
            da cerâmica, são principalmente os monumentos em pedra, como as cabeças colossais, a imagem 
            de marca da cultura asteca.`,
            opcao4: `os astecas desenvolveram-se na região da Mesoamérica, localizada na América Central 
            em regiões que correspondem, atualmente, a México, Guatemala, El Salvador e Honduras. 
            Politicamente, organizavam-se em cidades-Estado, o que significa que eles nunca chegaram a 
            formar um império ou uma estrutura administrativa centralizada.`,
            opcao5: `Os astecas ficaram conhecidos por possuírem conhecimentos muito avançados em áreas como 
            Astronomia e Matemática. No campo religioso, os astecas eram monoteístas, ou seja, acreditavam 
            em um único deus e tinham o sacrifício humano como uma prática ritualística muito importante.`,
            respostaCorreta: 'B',
            disciplinaId: 3
        });

        const questao39 = await Questao.create({
            enunciado: `
            Durante o período colonial brasileiro, nossas riquezas foram exploradas ao extremo. 
            Destacaram-se como economia principal o cultivo da cana-de-açúcar e a mineração, porém 
            haviam atividades periféricas que também movimentaram a economia colonial, tais como a 
            pecuária, o plantio de tabaco, algodão e cacau, a extração das drogas do sertão e do pau-brasil, 
            entre outras. Sobre a produção econômica do Brasil colônia, assinale a alternativa INCORRETA.`,

            opcao1: `A Carta Régia, que proibiu a criação de gado nas zonas litorâneas da colônia, contribuiu para 
            que a pecuária, com maior destaque no Nordeste e no Sul do Brasil, tivesse papel primordial na 
            interiorização do território colonial português.`,
            opcao2: `A mineração teve seu auge no Brasil durante o século XVIII, tendo a região das Minas Gerais 
            como seu maior foco de extração. No entanto, grande parte do ouro retirado do Brasil foi parar 
            nos cofres ingleses, devido às dívidas que Portugal tinha com a Inglaterra.`,
            opcao3: `A cana-de-açúcar era a principal fonte econômica que a colônia gerava para a metrópole 
            portuguesa e, após a expulsão dos holandeses do Nordeste brasileiro, a produção açucareira aumentou 
            consideravelmente, devido à infraestrutura e aos inúmeros engenhos deixados pelos flamengos.`,
            opcao4: `As drogas do sertão eram extraídas pelos índios a serviço dos jesuítas, na região Amazônica. 
            Tal atividade foi importante para a expansão da colonização portuguesa a oeste do Tratado de 
            Tordesilhas.`,
            opcao5: `A extração do pau-brasil no litoral brasileiro foi a primeira fonte de renda que Portugal explorou 
            no Brasil. No entanto, essa extração não se restringiu ao período pré-colonial, estendendo-se 
            também pelo período colonial.`,
            respostaCorreta: 'C',
            disciplinaId: 3
        });
        
        const questao40 = await Questao.create({
            enunciado: `
            A imagem se refere à memória dos episódios ocorridos em 11 de setembro de 2001 nos 
            Estados Unidos da América. A respeito desses eventos e de suas consequências para a política 
            internacional da primeira década do século XXI, assinale a alternativa CORRETA.`,

            opcao1: `Os atentados terroristas do 11 de setembro serviram para que os EUA justificassem a invasão 
            ao Irã, dando início à Guerra do Golfo e à Guerra do Afeganistão, na primeira década do século 
            XXI.`,
            opcao2: `Os ataques às Torres Gêmeas e ao Pentágono, em 2001, motivaram a deflagração da operação 
            Condor, com uma maior intervenção dos EUA na política interna de países latino-americanos.`,
            opcao3: `O 11 de setembro marcou o fim da Guerra Fria e o início da política de boa vizinhança (Good 
                Neighbor Policy) dos EUA com os países do Oriente Médio.`,
            opcao4: `Os atentados em 2001 serviram para que os EUA justificassem a sua “guerra ao terror” (War on terror),
            dando início às Guerras do Afeganistão e do Iraque, iniciadas em 2001 e em 2003,
            respectivamente.`,
            opcao5: `Os meses posteriores ao 11 de setembro foram marcados pela realização da Conferência de 
            Ialta, pela criação da ONU e pela assinatura da Declaração Universal dos Direitos Humanos, em 
            dezembro de 2001.`,
            respostaCorreta: 'D',
            disciplinaId: 3,
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/imagemQuestao40.png"
        });
        const questao41 = await Questao.create({
            enunciado: `
            Leia o fragmento do texto a seguir:
            
            “[...] A partir da criação de comitês de Anistia no exterior, os grupos de exilados, sob a influência 
            de diversos grupos e organizações internacionais, incorporaram as demandas pelos direitos 
            humanos em seus discursos. A essa ampliação da pauta denominamos de paradigma da ‘Anistia 
            como conquista dos direitos humanos’. Nesse sentido, essa mudança de paradigma radicalizou 
            o escopo das demandas e permitiu que, entre outros temas, fossem incorporados na agenda dos 
            movimentos, por exemplo, denúncias contra o aparato repressivo, o fim das torturas e mortes e, 
            principalmente, a condenação de crimes cometidos pelos agentes do Estado. As mobilizações no 
            Brasil ganharam maior visibilidade a partir dos atos estudantis de 1977. Esse foi um momento que 
            a radicalização do discurso pelos direitos humanos foi adotada pelos movimentos estudantis. [...] 
            A luta pela redemocratização envolveu um amplo leque de indivíduos e entidades, destacamos 
            entre essas personagens, as militantes do MFPA (Movimento Feminino pela Anistia), os exilados, 
            as entidades estudantis e, finalmente, a partir de 1978, os ativistas do CBA (Comitê Brasileiro 
            pela Anistia), como líderes das manifestações em defesa da Anistia. [...] As atividades pela 
            Anistia foram mobilizações nas quais as mulheres brasileiras assumiram papel protagonista. 
            Desde o início, nos núcleos do MFPA, estiveram na linha de frente das mobilizações pela Anistia. 
            [...] A democracia brasileira, 40 anos depois da Lei da Anistia, ainda carece de bases sólidas. As 
            instituições que deveriam zelar pelo Estado Democrático de Direito convivem em permanente 
            conflito com seus limites.”
            
            Em agosto de 2019, completaram-se 40 anos da promulgação da Lei de Anistia no Brasil 
            (Lei n°. 6.683/1979). Sobre o contexto histórico de aplicação dessa Lei, podemos afirmar que`,

            opcao1: `a exemplo de países como a Argentina, os agentes de Estado envolvidos em torturas, sequestros 
            e prisões políticas no Brasil foram devidamente condenados por seus crimes contra os direitos 
            humanos.`,
            opcao2: ` várias organizações e entidades da sociedade civil brasileira passaram a se mobilizar de modo 
            mais incisivo na luta pela anistia durante o período de governo do presidente Ernesto Geisel.`,
            opcao3: ` as mulheres tiveram papel fundamental na luta pela anistia no Brasil, embora não estivessem 
            envolvidas em nenhum movimento organizado. No entanto, esse protagonismo feminino não é 
            apresentado na maioria dos livros didáticos, reforçando a falta de espaço dado às mulheres na 
            História.`,
            opcao4: `Os militares defenderam o projeto de uma lei de anistia ampla, geral e irrestrita, como forma 
            de punir os atos de exceção cometidos pelos seus pares durante o período ditatorial brasileiro.`,
            opcao5: `A Lei de Anistia, sancionada pelo general Figueiredo, perdoava a todos, exceto os torturadores, 
            e permitia a volta ao país de milhares de exilados políticos.`,
            respostaCorreta: 'B',
            disciplinaId: 3
        });

        const questao42 = await Questao.create({
            enunciado: `
            Leia o excerto a seguir e responda à questão.
            “[…] Ela não é uma estrada: é o maior conjunto de obras da história [...]. Foi anunciada a ‘One 
            Belt One Road’ (“um cinturão, uma rota”, em inglês). Ela inclui uma quantidade astronômica de 
            dinheiro: nada menos do que US$ 5 trilhões. Isso é três vezes o PIB do Brasil, e quase 40 vezes 
            o valor atualizado do Plano Marshall, que os EUA criaram para reconstruir a Europa após a 2a 
            Guerra Mundial”.

            Essa nova proposta de logística comercial promete sacudir os eixos do comércio mundial 
            e, consequentemente, o balanço geopolítico do planeta. A referida proposta diz respeito ao(à/a)`,

            opcao1: `reconfiguração da Otan, incrementada a partir da adesão de países norte-africanos, banhados 
            pelo Atlântico.`,
            opcao2: `crescimento da Parceria Transpacífica, que passará a agregar os países do continente africano.`,
            opcao3: `Nova Rota da Seda, uma trilionária série de investimentos, sobretudo nas áreas de transporte 
            e infraestrutura, conectando Europa, Oriente Médio, Ásia e África à China.`,
            opcao4: `retomada da criação da Alca – a Área de Livre Comércio das Américas.`,
            opcao5: `ratificação da ampliação da União Europeia, envolvendo todos os países dos Balcãs e do 
            Cáucaso.`,
            respostaCorreta: 'C',
            disciplinaId: 3
        });
        const questao43 = await Questao.create({
            enunciado: `
            O espaço agropecuário brasileiro tem reassumido um papel de destaque na economia 
            nacional. Frente ao processo de desindustrialização atravessado pelo país, a agropecuária 
            tem se destacado na geração de riqueza e contribuído para o superávit da balança comercial. 
            Entretanto, o setor não é isento de controvérsias. Entre as características e problemáticas do 
            espaço agropecuário brasileiro, é INCORRETO afirmar que`,

            opcao1: `embora sejamos um dos maiores produtores de alimentos do mundo, ainda nos martiriza o 
            fantasma da fome e da subnutrição.`,
            opcao2: `o aumento da produção agropecuária e a geração de riqueza dele decorrente têm consequências 
            socioambientais que não podem ser desprezadas.`,
            opcao3: `o modelo de atividades agropecuárias que produz a maior parte dos insumos básicos 
            diversificados de alimentação é conhecido como agricultura familiar.`,
            opcao4: `há a persistência de conflitos no campo, muitos deles motivados pelas disputas da posse de 
            terras.`,
            opcao5: `a necessidade de democratização do acesso à terra por meio da reforma agrária tem sido uma 
            grande prioridade de todos os governos após o final do período de governo militar.
            `,
            respostaCorreta: 'E',
            disciplinaId: 3
        });
        const questao44 = await Questao.create({
            enunciado: `
            O texto a seguir é um trecho da obra “O diário 
            de Anne Frank”, escrito por uma menina judia 
            que relata os sentimentos vividos por ela e pela 
            família que lutam para sobreviver ao Holocausto 
            e, para isso, ficam escondidos por anos em um 
            sótão de uma casa na cidade de Amsterdã.
            O DIÁRIO DE ANNE FRANK
            [...]
            Um grande incêndio assim não é uma 
            visão agradável, mas felizmente, para 
            nós, o bombardeio havia terminado, e 
            voltamos às nossas tarefas. Assim que 
            começamos a jantar, soou outro alarme 
            antiaéreo. A comida estava boa, mas 
            perdi o apetite no momento em que ouvi 
            a sirene. No entanto, nada aconteceu, e 45 
            minutos depois ouvimos o toque dizendo 
            que o perigo passara. Depois de os pratos 
            serem lavados, outro alarme antiaéreo, 
            tiros de canhão e enxames de aviões. Ah, 
            meu Deus, duas vezes num dia, pensamos. Isso é demais. De pouco adiantou, 
            porque mais uma vez as bombas choveram, dessa vez do outro lado da cidade. 
            De acordo com os noticiários ingleses, o 
            aeroporto Schiphol fora bombardeado. 
            Os aviões mergulhavam e subiam, o ar 
            zumbia com o barulho dos motores. Foi 
            muito assustador, e o tempo todo eu 
            ficava pensando: “Lá vem ela, é essa.”
            Posso garantir que, quando fui para a 
            cama às nove horas, minhas pernas ainda 
            tremiam. Quando bateu a meia-noite, 
            acordei de novo: mais aviões! [...] Fiquei 
            na cama do papai até as duas horas. Mas 
            os aviões continuavam chegando. Por 
            fim, eles pararam de disparar e pude voltar de novo para “casa”. Finalmente caí no 
            sono às duas e meia.
            [...]

            FRANK, Anne. O diário de Anne Frank: edição 
            integral. Tradução de Ivanir Alves Calado. 42.ed. 
            Rio de Janeiro: Record, 2014, p. 124-125.

            O gênero textual diário, comumente, apresenta um relato pessoal e 
            possui características bem específicas, entre elas o uso de 1ª 
            pessoa. Assinale a alternativa que apresenta essa característica.
            `,
            opcao1: `“Um grande incêndio assim não é uma visão agradável.”`,
            opcao2: `“Os aviões mergulhavam e subiam, o ar zumbia com o barulho dos motores.”`,
            opcao3: `“Depois de os pratos serem lavados, outro alarme antiaéreo, tiros de canhão e enxames de aviões.`,
            opcao4: `“Assim que começamos a jantar, soou outro alarme antiaéreo.”`,
            opcao5: `“De acordo com os noticiários ingleses, o aeroporto Schiphol fora bombardeado.”`,
            respostaCorreta: 'D',
            disciplinaId: 1,
        });
        const questao45 = await Questao.create({
            enunciado: `
            O texto a seguir é um trecho da obra “O diário 
            de Anne Frank”, escrito por uma menina judia 
            que relata os sentimentos vividos por ela e pela 
            família que lutam para sobreviver ao Holocausto 
            e, para isso, ficam escondidos por anos em um 
            sótão de uma casa na cidade de Amsterdã.
            O DIÁRIO DE ANNE FRANK
            [...]
            Um grande incêndio assim não é uma 
            visão agradável, mas felizmente, para 
            nós, o bombardeio havia terminado, e 
            voltamos às nossas tarefas. Assim que 
            começamos a jantar, soou outro alarme 
            antiaéreo. A comida estava boa, mas 
            perdi o apetite no momento em que ouvi 
            a sirene. No entanto, nada aconteceu, e 45 
            minutos depois ouvimos o toque dizendo 
            que o perigo passara. Depois de os pratos 
            serem lavados, outro alarme antiaéreo, 
            tiros de canhão e enxames de aviões. Ah, 
            meu Deus, duas vezes num dia, pensamos. Isso é demais. De pouco adiantou, 
            porque mais uma vez as bombas choveram, dessa vez do outro lado da cidade. 
            De acordo com os noticiários ingleses, o 
            aeroporto Schiphol fora bombardeado. 
            Os aviões mergulhavam e subiam, o ar 
            zumbia com o barulho dos motores. Foi 
            muito assustador, e o tempo todo eu 
            ficava pensando: “Lá vem ela, é essa.”
            Posso garantir que, quando fui para a 
            cama às nove horas, minhas pernas ainda 
            tremiam. Quando bateu a meia-noite, 
            acordei de novo: mais aviões! [...] Fiquei 
            na cama do papai até as duas horas. Mas 
            os aviões continuavam chegando. Por 
            fim, eles pararam de disparar e pude voltar de novo para “casa”. Finalmente caí no 
            sono às duas e meia.
            [...]

            FRANK, Anne. O diário de Anne Frank: edição 
            integral. Tradução de Ivanir Alves Calado. 42.ed. 
            Rio de Janeiro: Record, 2014, p. 124-125.

            No período “A comida estava boa, mas perdi o 
            apetite no momento em que ouvi a sirene”, o 
            vocábulo destacado expressa uma relação de 
            oposição entre as orações. Assinale a alternativa em que a conjunção 
            possui o mesmo sentido, ou seja, é uma conjunção adversativa.
            `,
            opcao1: `“A comida estava boa, logo perdi o apetite no momento em que ouvi a sirene”`,
            opcao2: `“A comida estava boa, contudo perdi o apetite no momento em que ouvi a sirene”`,
            opcao3: `“A comida estava boa, por isso perdi o apetite no momento em que ouvi a sirene”`,
            opcao4: `“A comida estava boa, porquanto perdi o apetite no momento em que ouvi a sirene”`,
            opcao5: `“A comida estava boa, contanto que perdi o apetite no momento em que ouvi a sirene”`,
            respostaCorreta: 'B',
            disciplinaId: 1,
        });

        const questao46 = await Questao.create({
            enunciado: `
            O texto a seguir é um trecho da obra “O diário 
            de Anne Frank”, escrito por uma menina judia 
            que relata os sentimentos vividos por ela e pela 
            família que lutam para sobreviver ao Holocausto 
            e, para isso, ficam escondidos por anos em um 
            sótão de uma casa na cidade de Amsterdã.
            O DIÁRIO DE ANNE FRANK
            [...]
            Um grande incêndio assim não é uma 
            visão agradável, mas felizmente, para 
            nós, o bombardeio havia terminado, e 
            voltamos às nossas tarefas. Assim que 
            começamos a jantar, soou outro alarme 
            antiaéreo. A comida estava boa, mas 
            perdi o apetite no momento em que ouvi 
            a sirene. No entanto, nada aconteceu, e 45 
            minutos depois ouvimos o toque dizendo 
            que o perigo passara. Depois de os pratos 
            serem lavados, outro alarme antiaéreo, 
            tiros de canhão e enxames de aviões. Ah, 
            meu Deus, duas vezes num dia, pensamos. Isso é demais. De pouco adiantou, 
            porque mais uma vez as bombas choveram, dessa vez do outro lado da cidade. 
            De acordo com os noticiários ingleses, o 
            aeroporto Schiphol fora bombardeado. 
            Os aviões mergulhavam e subiam, o ar 
            zumbia com o barulho dos motores. Foi 
            muito assustador, e o tempo todo eu 
            ficava pensando: “Lá vem ela, é essa.”
            Posso garantir que, quando fui para a 
            cama às nove horas, minhas pernas ainda 
            tremiam. Quando bateu a meia-noite, 
            acordei de novo: mais aviões! [...] Fiquei 
            na cama do papai até as duas horas. Mas 
            os aviões continuavam chegando. Por 
            fim, eles pararam de disparar e pude voltar de novo para “casa”. Finalmente caí no 
            sono às duas e meia.
            [...]

            FRANK, Anne. O diário de Anne Frank: edição 
            integral. Tradução de Ivanir Alves Calado. 42.ed. 
            Rio de Janeiro: Record, 2014, p. 124-125.

            Analise as afirmativas a seguir e julgue se são 
            Verdadeiras ou Falsas:
            I – Em “ouvimos o toque dizendo que o 
            perigo passara” podemos afirmar que a oração em destaque tem a função sintática de um 
            objeto direto do período anterior sendo, portanto, uma oração subordinada substantiva 
            objetiva direta.
            II – Na oração “Posso garantir que, quando 
            fui para a cama às nove horas, minhas pernas ainda tremiam”, o período em destaque 
            exprime a ideia de condição para Anne dormir 
            e, sintaticamente, temos uma oração subordinada adverbial condicional intercalada a 
            uma oração subordinada substantiva objetiva 
            direta.
            III – No período “Por fim, eles pararam de 
            disparar e pude voltar de novo para ‘casa’” é 
            possível substituir o termo por fim por contudo
            sem alterar o sentido da oração que expressa 
            a ideia de conclusão.
            IV – Em “Assim que começamos a jantar, 
            soou outro alarme antiaéreo” o uso da vírgula 
            é obrigatório pelo fato de a oração subordinada adverbial estar deslocada, ou seja, invertida em relação à oração principal.
            V – Na oração “o bombardeio havia terminado, e voltamos às nossas tarefas”, observamos que o segundo período é uma oração 
            coordenada que exprime a ideia de oposição 
            em relação à primeira e o uso da vírgula é 
            opcional por se tratar de orações coordenadas 
            com sujeitos diferentes.
            Após a análise das afirmativas acima, assinale 
            a alternativa que possui a sequência correta:
            `,
            opcao1: `V-V-F-V-F`,
            opcao2: `F-V-F-F-V`,
            opcao3: `V-F-V-V-F`,
            opcao4: `V-F-F-V-V`,
            opcao5: `V-F-F-V-F`,
            respostaCorreta: 'E',
            disciplinaId: 1,
        });

        const questao47 = await Questao.create({
            enunciado: `
            A seguir, leia o trecho que faz parte do livro 
            “Valentes”, o qual retrata histórias de pessoas 
            refugiadas no Brasil. Nessa passagem, há um 
            recorte da história de Roquia Atbai, afegã, que 
            veio para o Brasil em 2002 junto com a família num pedido de reassentamento, já que na 
            Índia, país em que estavam, enfrentavam dificuldades como arranjar emprego e, portanto, 
            para sobrevivência.
            ROQUIA ATBAI
            “Minissaia, vestido curto, biquíni. Às 
            vezes, o sonho de uma vida melhor pode 
            passar por elementos tão simples quanto 
            esses, mas que representam uma liberdade cultural que muitas mulheres não 
            têm. A afegã Roquia Atbai não tinha. Ela 
            vivia numa sociedade dominada pelo 
            machismo estrutural e costumes bastante opressores para as mulheres. Não 
            teve muitas opções de carreira quando 
            quis trabalhar. Também não pôde escolher seu marido – aliás, nem o conhecia quando se casou. Na relação, nunca 
            teve a mesma voz. Jamais poderia usar 
            as peças de roupa citadas acima, que só 
            experimentou depois de pedir refúgio no 
            Brasil, num processo de reassentamento, 
            vinda da Índia, para onde tinha escapado 
            por causa da guerra do Afeganistão. Ela 
            fugiu para proteger a vida de sua família, 
            mas acabou salvando muito mais do que 
            isso: sua independência e felicidade.”
            
            CARARO, Aryane; SOUZA, Duda Porto de. 
            Valentes: Histórias de pessoas refugiadas 
            no Brasil. 1.ed. São Paulo: Seguinte, 2020. 
            Ilustrações de Rafaela Vilela. P. 90.

            Após a leitura do texto acima, podemos compreender que:
            `,
            opcao1: `No Brasil, é possível que as mulheres escolham suas vestimentas por haver liberdade 
            cultural, se compararmos com outros países, como o Afeganistão. Por isso, Roquia 
            Atbai, após pisar em terras brasileiras, pôde, 
            por exemplo, escolher usar uma saia curta.`,
            opcao2: `O Afeganistão, antes da ocupação do Talibã, 
            era um país um pouco mais liberal, e as 
            mulheres, por exemplo, poderiam estudar, 
            ter uma profissão e escolher o seu marido.`,
            opcao3: `A Índia foi o primeiro destino de Roquia 
            Atbai para fugir da guerra do Afeganistão e, naquele lugar, ela conquistou seu 
            espaço não necessitando ser tão submissa 
            e podendo utilizar as vestimentas que quisesse, como um vestido mais curto.`,
            opcao4: `O machismo estrutural não ocorre somente 
            no Afeganistão, mas em muitos outros 
            países, inclusive no Brasil. Porém, nos últimos anos, esse problema vem diminuindo, 
            prova disso é o fato de as mulheres poderem usar as vestimentas que bem entenderem sem que haja comentários maldosos 
            por alguns homens.`,
            opcao5: `Os casamentos arranjados são uma forma 
            de as famílias afegãs saírem da extrema 
            pobreza, por isso vendem suas filhas por 
            um valor considerável para homens bem 
            mais velhos e, com isso, garantem um 
            futuro melhor para as meninas que aprendem a conviver e a amar os maridos.`,
            respostaCorreta: 'A',
            disciplinaId: 1,
        });

        const questao48 = await Questao.create({
            enunciado: `
            A seguir, leia o trecho que faz parte do livro 
            “Valentes”, o qual retrata histórias de pessoas 
            refugiadas no Brasil. Nessa passagem, há um 
            recorte da história de Roquia Atbai, afegã, que 
            veio para o Brasil em 2002 junto com a família num pedido de reassentamento, já que na 
            Índia, país em que estavam, enfrentavam dificuldades como arranjar emprego e, portanto, 
            para sobrevivência.
            ROQUIA ATBAI
            “Minissaia, vestido curto, biquíni. Às 
            vezes, o sonho de uma vida melhor pode 
            passar por elementos tão simples quanto 
            esses, mas que representam uma liberdade cultural que muitas mulheres não 
            têm. A afegã Roquia Atbai não tinha. Ela 
            vivia numa sociedade dominada pelo 
            machismo estrutural e costumes bastante opressores para as mulheres. Não 
            teve muitas opções de carreira quando 
            quis trabalhar. Também não pôde escolher seu marido – aliás, nem o conhecia quando se casou. Na relação, nunca 
            teve a mesma voz. Jamais poderia usar 
            as peças de roupa citadas acima, que só 
            experimentou depois de pedir refúgio no 
            Brasil, num processo de reassentamento, 
            vinda da Índia, para onde tinha escapado 
            por causa da guerra do Afeganistão. Ela 
            fugiu para proteger a vida de sua família, 
            mas acabou salvando muito mais do que 
            isso: sua independência e felicidade.”
            
            CARARO, Aryane; SOUZA, Duda Porto de. 
            Valentes: Histórias de pessoas refugiadas 
            no Brasil. 1.ed. São Paulo: Seguinte, 2020. 
            Ilustrações de Rafaela Vilela. P. 90.

            Na sentença “Minissaia, vestido curto, biquíni”, 
            logo no início do texto, notamos que há uma 
            enumeração de peças do vestuário feminino, 
            as quais são separadas por vírgulas. Marque 
            a alternativa em que essa regra de uso da vírgula se aplica, ou seja, a vírgula é utilizada para 
            separar elementos sintáticos em uma enumeração.
            `,
            opcao1: `Roquia, que nasceu em 1971, conseguiu 
            estudar e se formar como professora.” 
            (CARARO & SOUZA, 2020, p. 90)`,
            opcao2: `Quando Roquia nasceu, as afegãs tinham 
            mais direitos do que atualmente, mais de 
            quarenta anos depois.” (CARARO & SOUZA, 
            2020, p. 90)`,
            opcao3: `No conflito, Roquia perdeu dois irmãos, 
            uma cunhada, um tio e um primo.” (CARARO 
            & SOUZA, 2020, p. 93)`,
            opcao4: `A casa, um imóvel confortável de quatro quartos, foi fechada como se a família 
            tivesse ido ao mercado.” (CARARO & SOUZA, 
            2020, p. 93)`,
            opcao5: `Mas, depois de um ano, Roquia conseguiu 
            emprego como esteticista e maquiadora, 
            levando para a região a técnica indiana de 
            depilação de sobrancelha com linha – era 
            tão inusitado na época que saiu no jornal 
            Zero Hora e em uma emissora de TV local.” 
            (CARARO & SOUZA, 2020, p. 94-95)`,
            respostaCorreta: 'C',
            disciplinaId: 1,
        });
        const questao49 = await Questao.create({
            enunciado: `
            A unidade de medida usada no armazenamento e transmissão de informações na computação é o Byte, que equivale a 8 bits, sendo 
            este a base do sistema binário. O sistema se 
            baseia nas potências de 2. Assim, de acordo 
            com a tabela a seguir, um pen drive com uma 
            memória de 10 KB, pode armazenar 10 x 1.024 
            Bytes = 10.240 Bytes = 81.920 bits.

            Se uma rede de internet pode transmitir 2.048 
            Kbps (2.048 kilobits por segundo), qual a velocidade em KBps (kilobytes por segundo) dessa 
            rede?
            `,
            opcao1: `512`,
            opcao2: `256`,
            opcao3: `128`,
            opcao4: `32`,
            opcao5: `2`,
            respostaCorreta: 'B',
            disciplinaId: 2, 
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/imagemQuestao49.png"
        });

        const questao50 = await Questao.create({
            enunciado: `
            As paisagens do campo (rurais) apresentam 
            características diferentes das paisagens da 
            cidade (urbanas). Em relação às características 
            das paisagens do campo, assinale a alternativa 
            CORRETA:
            `,
            opcao1: `Predominam atividades econômicas do setor terciário, ou seja, comércio e serviços.`,
            opcao2: `Há o predomínio de atividades industriais.`,
            opcao3: `São caracterizadas pela verticalização, ou 
            seja, a construção de edifícios cada vez 
            mais altos para abrigar a população em 
            crescimento.
            `,
            opcao4: `As paisagens rurais agrícolas não são influenciadas por elementos naturais, como o relevo, 
            o solo e o clima.`,
            opcao5: `Formam os espaços utilizados pelos seres 
            humanos para, sobretudo, desenvolver 
            as atividades econômicas do setor primário da economia: agricultura, pecuária e 
            extrativismo.`,
            respostaCorreta: 'E',
            disciplinaId: 4, 
        });
        const questao51 = await Questao.create({
            enunciado: `
            O desenvolvimento do turismo como atividade 
            econômica é uma alternativa à necessidade 
            de criar empregos, reduzir as desigualdades 
            regionais e distribuir melhor a renda em um 
            país. Em 2015, os países mais visitados do 
            mundo eram França, Estados Unidos, Espanha, China e Itália. Assinale a alternativa que 
            corresponde a uma causa de crescimento do 
            turismo:`,
            opcao1: `O aumento do poder de compra de algumas 
            populações, que assim podem destinar 
            uma parte cada vez maior de suas finanças 
            a atividades de lazer e de cultura.`,
            opcao2: `Restrições à obtenção de vistos por parte de países receptores.`,
            opcao3: `A oferta limitada de atrativos turísticos.`,
            opcao4: `Dificuldade de obtenção de documentos de viagem, como passaporte.`,
            opcao5: `A oferta limitada de infraestrutura turística.`,
            respostaCorreta: 'A',
            disciplinaId: 4, 
        });
        const questao52 = await Questao.create({
            enunciado: `A implementação de um sistema global de 
            localização por satélite, o Beidou, a construção de uma estação espacial própria e os 
            investimentos no setor energético (destinados 
            a buscar soluções ambientais e a ampliar a 
            capacidade de energia considerada limpa e de 
            ponta) estão entre algumas das iniciativas de 
            um país que pretende ampliar sua influência 
            global. Esse país é:`,
            opcao1: `a Índia.`,
            opcao2: `a França.`,
            opcao3: `a Rússia.`,
            opcao4: `a China.`,
            opcao5: ` a Austrália.`,
            respostaCorreta: 'D',
            disciplinaId: 4, 
        });
        const questao53 = await Questao.create({
            enunciado: `Os manguezais se caracterizam pelo equilíbrio 
            delicado e pela imensa importância ecológica. 
            No estado do Espírito Santo, eles contribuem 
            para dar vida a uma tradição secular, a fabricação da panela de barro, herança das culturas 
            indígenas tupi-guarani, que tem sido transmitida por várias gerações. Entretanto, há décadas o manguezal vem sendo muito ameaçado, 
            quando não destruído. Assinale a alternativa 
            que traz um aspecto do manguezal:`,
            opcao1: `É fundamental para a reprodução e sobrevivência de animais marinhos`,
            opcao2: `Não é afetado pelos processos de urbanização e especulação imobiliária.`,
            opcao3: `A espécie vegetal predominante é a Araucária.`,
            opcao4: `É ameaçado pela expansão da sojicultura.`,
            opcao5: `Não enfrenta riscos ambientais.`,
            respostaCorreta: 'A',
            disciplinaId: 4, 
        });
        const questao54 = await Questao.create({
            enunciado: `A globalização atual é marcada pela intensa 
            integração econômica, política e cultural entre 
            os países. Assinale a alternativa que corresponde a um aspecto corretamente relacionado ao processo de globalização:`,
            opcao1: `Com o fim da Guerra Fria, os fluxos de mercadorias, serviços e capitais tornaram-se 
            menos intensos com a integração dos países que eram socialistas ao mercado internacional.`,
            opcao2: `A partir da segunda metade do século XX, as 
            grandes empresas industriais, comerciais e de prestação de serviços começaram a instalar filiais em vários países. `,
            opcao3: `A globalização não impôs a padronização 
            de uma série de hábitos de consumo.`,
            opcao4: `O processo de expansão do socialismo levou 
            à constituição da economia global, impulsionada pelo desenvolvimento tecnológico.`,
            opcao5: `Nas últimas décadas, o fluxo de mercadorias no comércio entre os países reduziu rapidamente.`,
            respostaCorreta: 'B',
            disciplinaId: 4, 
        });
        const questao55 = await Questao.create({
            enunciado: `A América Latina apresentou áreas de conflito 
            e de tensões em regiões de fronteira nos séculos XX e XXI. Uma das tensões fronteiriças foi a 
            Guerra das Malvinas, ocorrida entre Argentina 
            e Reino Unido, em 1982. Assinale a alternativa 
            CORRETA sobre o resultado desse conflito:`,
            opcao1: `Após a rendição argentina, o domínio das 
            Ilhas Malvinas foi transferido para o Reino 
            Unido e o impasse foi resolvido, pois a 
            Argentina não mantém o desejo de recuperar esse território.`,
            opcao2: `O Reino Unido vendeu o território das Ilhas 
            Malvinas para a Argentina, encerrando o 
            conflito.`,
            opcao3: `A Argentina se rendeu, e as Ilhas Malvinas 
            continuaram sob o domínio do Reino Unido.`,
            opcao4: `A Argentina obteve posse do arquipélago 
            das Malvinas, porém o Reino Unido obteve 
            direitos sobre o petróleo que poderá ser 
            encontrado nas águas dessa área.`,
            opcao5: `O Reino Unido se rendeu, e as Ilhas Malvinas passaram ao domínio da Argentina`,
            respostaCorreta: 'C',
            disciplinaId: 4, 
        });
        //PROVA 60-2022
        //Conqustas
        
        const conquista1 = await Conquista.create({imagem: crown, nome: "Coroa"})
        const conquista2 = await Conquista.create({imagem: emerald, nome: "Esmeralda"})
        const conquista3 = await Conquista.create({imagem: diamond, nome: "Diamante"})
        //Usuários
        const hashedSenha1 = await bcrypt.hash("Ab123!@#", 10);
        const usuario1 = await Usuario.create({ nome: "Lucas Macedo Bernardino", email: "lucasmacedoes@gmail.com", senha: hashedSenha1})

        const usuarioConquistaCrown1 = await UsuarioConquista.create({usuarioId: usuario1.dataValues.id, conquistaId: conquista1.dataValues.id})
        const usuarioConquistaEmerald1 = await UsuarioConquista.create({usuarioId: usuario1.dataValues.id, conquistaId: conquista2.dataValues.id})
        const usuarioConquistaDiamond1 = await UsuarioConquista.create({usuarioId: usuario1.dataValues.id, conquistaId: conquista3.dataValues.id})

        const hashedSenha2 = await bcrypt.hash("asdasdasdasd", 10);
        const usuario2 = await Usuario.create({ nome: "Raphael Macedo Bernardino", email: "faeldojo@gmail.com", senha: hashedSenha2})
 
        const usuarioConquistaCrown2 = await UsuarioConquista.create({usuarioId: usuario2.dataValues.id, conquistaId: conquista1.dataValues.id})
        const usuarioConquistaEmerald2 = await UsuarioConquista.create({usuarioId: usuario2.dataValues.id, conquistaId: conquista2.dataValues.id})
        const usuarioConquistaDiamond2 = await UsuarioConquista.create({usuarioId: usuario2.dataValues.id, conquistaId: conquista3.dataValues.id})
 
        const hashedSenha3 = await bcrypt.hash("123", 10);
        const usuario3 = await Usuario.create({ nome: "João Macedo Bernardino", email: "joão@gmail.com", senha: "123" })

        const usuarioConquistaCrown3 = await UsuarioConquista.create({usuarioId: usuario3.dataValues.id, conquistaId: conquista1.dataValues.id})
        const usuarioConquistaEmerald3 = await UsuarioConquista.create({usuarioId: usuario3.dataValues.id, conquistaId: conquista2.dataValues.id})
        const usuarioConquistaDiamond3 = await UsuarioConquista.create({usuarioId: usuario3.dataValues.id, conquistaId: conquista3.dataValues.id})

        const hashedSenha4 = await bcrypt.hash("XASDASsdBX", 10);
        const usuario4 = await Usuario.create({ nome: "Eita Macedo Bernardino", email: "eita@gmail.com", senha: "XASDASsdBX" })
 
        const usuarioConquistaCrown4 = await UsuarioConquista.create({usuarioId: usuario4.dataValues.id, conquistaId: conquista1.dataValues.id})
        const usuarioConquistaEmerald4 = await UsuarioConquista.create({usuarioId: usuario4.dataValues.id, conquistaId: conquista2.dataValues.id})
        const usuarioConquistaDiamond4 = await UsuarioConquista.create({usuarioId: usuario4.dataValues.id, conquistaId: conquista3.dataValues.id})
 
        const hashedSenha5 = await bcrypt.hash("zxvbad12", 10);
        const usuario5 = await Usuario.create({ nome: "Samuel Macedo Bernardino", email: "samuel@gmail.com", senha: "zxvbad12" })
        
        const usuarioConquistaCrown5 = await UsuarioConquista.create({usuarioId: usuario5.dataValues.id, conquistaId: conquista1.dataValues.id})
        const usuarioConquistaEmerald5 = await UsuarioConquista.create({usuarioId: usuario5.dataValues.id, conquistaId: conquista2.dataValues.id})
        const usuarioConquistaDiamond5 = await UsuarioConquista.create({usuarioId: usuario5.dataValues.id, conquistaId: conquista3.dataValues.id})

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

