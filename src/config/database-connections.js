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
        const pontuacaoEstruturacaoFrases = await Categoria.create({nome: "Pontuação e Estruturação de Frases", disciplinaId: portugues.id}) 
        
        const porcentagem = await Categoria.create({nome: "Porcentagem", disciplinaId: matematica.id}) 
        const geometriaPlana = await Categoria.create({nome: "Geometria Plana", disciplinaId: matematica.id})
        const matematicaAplicada = await Categoria.create({nome: "Matemática Aplicada", disciplinaId: matematica.id})
        const mediaPonderada = await Categoria.create({nome: "Cálculo de Média Ponderada", disciplinaId: matematica.id})
        const equacao2grau = await Categoria.create({nome: "Equação de Segundo Grau", disciplinaId: matematica.id})
        const combinatoria = await Categoria.create({nome: "Combinatória", disciplinaId: matematica.id})

        const cienciaAmbiental = await Categoria.create({nome: "Ciências Ambientais", disciplinaId: ciencia.id})
        const cienciaBiologica = await Categoria.create({nome: "Ciências Biológicas", disciplinaId: ciencia.id})
        const genetica = await Categoria.create({nome: "Genética", disciplinaId: ciencia.id})

        const historiaIgreja = await Categoria.create({nome: "Historia da Igreja", disciplinaId: historia.id})
        const historiaNavegacao = await Categoria.create({nome: "Historia da Navegação", disciplinaId: historia.id})
        const historiaIluminismo = await Categoria.create({nome: "Historia do Iluminismo", disciplinaId: historia.id})
        const historiaBrasil = await Categoria.create({nome: "Historia do Brasil", disciplinaId: historia.id})
        const messianismo = await Categoria.create({nome: "Messianismo", disciplinaId: historia.id})

        const geografiaAgraria = await Categoria.create({nome: "Geografia Agrária", disciplinaId: geografia.id})
        const geografiaPopulacional = await Categoria.create({nome: "Geografia Populacional", disciplinaId: geografia.id})
        const geografiaCultural = await Categoria.create({nome: "Geografia Cultural", disciplinaId: geografia.id})
        const geografiaEconomica = await Categoria.create({nome: "Geografia Econômica", disciplinaId: geografia.id})
        const geografiaUrbana = await Categoria.create({nome: "Geografia Urbana", disciplinaId: geografia.id})


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
            
            Leia o texto seguinte:

            Em 27 de setembro de 1822, o estudioso francês Jean-François Champollion 
            (1790-1832), então com 32 anos de idade, apresentou perante a Academia de 
            Paris sua descoberta: a decifração dos hieróglifos egípcios. Ele dedicou sua vida a 
            esse trabalho, desde os 12 anos de idade quando viu, pela primeira vez, a Pedra 
            de Roseta trazida do Egito pela expedição de Napoleão Bonaparte, em 1802. 
            Os antigos egípcios utilizavam três escritas diferentes. Champollion demonstrou a 
            relação entre elas: a escrita hieroglífica era mais antiga, a hierática era uma forma 
            mais simples e abreviada do hieróglifo, e o demótico era uma versão posterior e 
            mais simplificado do hierático. 
            Em 1822, Champollion concluía: “a escrita hieroglífica é um sistema complexo, 
            uma escrita figurativa, simbólica e fonética em um mesmo texto, em uma mesma 
            frase e, devo dizer, em uma mesma palavra”. Champollion é considerado o “pai 
            da Egiptologia”.

            Considerando a leitura do texto acima e da crônica E o febrífugo não passa de um antitérmico, afir
            ma-se que o termo “champolions” no texto I tem como sinônimos as seguintes expressões, com 
            exceção de`,
            opcao1: `decodificadores.`,
            opcao2: `tradutores.`,
            opcao3: `decifradores.`,
            opcao4: `leitores.`,
            opcao5: `inventores.`,
            respostaCorreta: 'E',
            disciplinaId: portugues.id,
            provaId: prova952023.id,
            categoriaId: interpretacaoTexto.id,
            ordem: 2
        });

        const questao3 = await Questao.create({
            enunciado: `
            As múltiplas atividades dos falantes no 
            convívio da vida em sociedade favore
            cem a criação de palavras para atender 
            às necessidades culturais, científicas e 
            da comunicação de um modo geral. Cha
            mam-se neologismos as palavras que 
            vêm ao encontro dessas necessidades 
            renovadoras. (...) 
            Os neologismos ou criações novas pene
            tram na língua por diversos caminhos. O 
            primeiro deles é mediante os elementos 
            (palavras, prefixos, sufixos) já existentes 
            no idioma, quer no significado usual, quer 
            por mudança de significado, o que já é 
            um modo de revitalizar o léxico da língua. 
            Entre os processos formais temos a com
            posição e a derivação (prefixal e sufixal). 
            Outra fonte de revitalização lexical são os 
            empréstimos, isto é, palavras e elemen
            tos gramaticais tomados ou traduzidos 
            de outra comunidade linguística (...)”
            
            Baseando-se no texto acima, de Evanildo 
            Bechara, no texto I e nos seus conhecimentos 
            linguísticos, marque a alternativa incorreta.`,

            opcao1: `Drugstore, que significa farmácia, é um empréstimo advindo da língua inglesa;
                    portanto, não é formado por derivação.`,
            opcao2: `O verbo “reolhou” é formado pelo processo de derivação prefixal, utilizando-se, 
                    para tanto, do prefixo latino “re-”`,
            opcao3: `O superlativo “grossíssima” advém do adjetivo “grosso”, sendo formado pelo processo 
                    de composição sufixal. `,
            opcao4: `“Letrinha” é um substantivo formado por derivação sufixal.`,
            opcao5: ` O termo “boticário”, sinônimo de farmacêutico, tem em sua construção morfológica o 
                    sufixo –ário, que indica, nesse caso, agente.`,
            respostaCorreta: 'C',
            disciplinaId: portugues.id,
            categoriaId: interpretacaoTexto.id,
            provaId: prova952023.id,
            ordem: 3
        });

        const questao4 = await Questao.create({
            enunciado: `
            Observe o período seguinte: 
            
            “Parei na primeira farmácia. Aliás, uma grande 
            farmácia, pertencente a uma dessas redes.” 
            
            Das alternativas a seguir, assinale o item em 
            que a conjunção grifada tem o mesmo sentido 
            de  “Aliás”, presente no trecho lido.`,

            opcao1: `Parei na primeira farmácia. Contudo, uma grande farmácia, pertencente a uma dessas redes.`,
            opcao2: `Parei na primeira farmácia. A propósito, uma grande farmácia, pertencente a uma dessas redes.`,
            opcao3: `Parei na primeira farmácia. Não obstante, uma grande farmácia, pertencente a uma dessas redes.`,
            opcao4: `Parei na primeira farmácia. Além disso, uma grande farmácia, pertencente a uma dessas redes.`,
            opcao5: `Parei na primeira farmácia. Apesar disso, uma grande farmácia, pertencente a uma dessas redes.`,
            respostaCorreta: 'B',
            disciplinaId: portugues.id,
            categoriaId: interpretacaoTexto.id,
            provaId: prova952023.id,
            ordem: 4
        });

        const questao5 = await Questao.create({
            enunciado: `
            Observe, em cada alternativa seguinte, retirada 
            do texto I, o uso da vírgula e sua respectiva jus
            tificativa de utilização. Além disso, julgue se o 
            uso é obrigatório ou facultativo em cada caso.

            I) Tem de tudo, de remédios a bolachas, leite 
            em pó, calcinha e sutiãs, refrigerantes. (Justifi
            cativa: separar elementos enumerados – uso 
            facultativo) 
            
            II) Pois o bem jovem que me serviu apanhou a 
            receita, olhou, reolhou e perguntou: (...). (Jus
            tificativa: separar orações coordenadas – uso 
            obrigatório)
            
            III) — Que letrinha, hein? (Justificativa: separar 
            o aposto – uso obrigatório)
            
            IV) Socorro, doutor. Pode me decifrar as receitas 
            de hoje? (Separar o vocativo – uso obrigatório)
            
            V) Hoje, médicos usam computadores. (Justifi
            cativa: separar advérbio – uso facultativo)
            Estão corretos os itens:`,

            opcao1: `I, II e III`,
            opcao2: `I, II e V`,
            opcao3: `II, III e V`,
            opcao4: `II, III e IV`,
            opcao5: `II, IV e V`,
            respostaCorreta: 'E',
            disciplinaId: portugues.id,
            categoriaId: pontuacaoEstruturacaoFrases.id,
            provaId: prova952023.id,
            ordem: 5
        });

        const questao6 = await Questao.create({
            enunciado: `
                Leia o Texto para responder a questão   
                
                O lobo e o cordeiro 
                Num límpido regato um dia
                um cordeiro, sereno, bebia.
                Eis que surge um lobo faminto:
                — Como ousas sujar minha água?
                Diz o lobo com fingida mágoa:
                — Logo vais receber o castigo
                por assim desafiar o perigo.
                — Senhor — o cordeiro responde —,
                não te zangues: não vês que me encontro
                a vinte passos abaixo de ti
                e, portanto, seria impossível
                macular tua água daqui?
                — Tu a sujas — diz o bicho feroz — ;
                além disso, estou informado 
                que falaste de mim ano passado.
                — Como poderia te ter ofendido 
                se não era nascido então,
                e o leite materno inda bebo?
                — Ora, ora, se não foste tu,
                com certeza foi teu irmão.
                — Não o tenho.
                — Então foi alguns dos teus:
                pois que nunca me deixam em paz;
                Tu, teus pastores e cães;
                necessária a vingança se faz.
                E no fundo da floresta
                Com toda tranquilidade
                O lobo devora o cordeiro
                Sem outra formalidade
                
                O texto “O lobo e o cordeiro” é uma fábula, isto 
                é, um gênero literário cujo objetivo é narrar 
                uma história exemplar, de caráter didático e 
                moralista, tendo como personagens animais 
                ou objetos. Na leitura desse tipo de narrativa, 
                é possível aprender valores e atitudes - certos 
                ou errados, bons ou maus – a serem segui
                dos ou repudiados. Ao final da leitura de uma 
                fábula, é possível depreender a moral da histó
                ria, que, no caso de “O lobo e o cordeiro”, pode 
                ser sintetizada por:`,

            opcao1: `A razão do mais forte vai sempre vencer.`,
            opcao2: `Quando não conseguimos cumprir um objetivo, tendemos a culpar os outros.`,
            opcao3: `A aparência nem sempre reflete aquilo que está no nosso espírito.`,
            opcao4: `Não se deve falar com estranhos.`,
            opcao5: `Cuidado ao aceitar favores de quem você não confia.`,
            respostaCorreta: 'A',
            disciplinaId: portugues.id,
            categoriaId: interpretacaoTexto.id,
            provaId: prova952023.id,
            ordem: 6,
        });

        const questao7 = await Questao.create({
            enunciado: `
                Leia o Texto para responder a questão   

                O lobo e o cordeiro 
                Num límpido regato um dia
                um cordeiro, sereno, bebia.
                Eis que surge um lobo faminto:
                — Como ousas sujar minha água?
                Diz o lobo com fingida mágoa:
                — Logo vais receber o castigo
                por assim desafiar o perigo.
                — Senhor — o cordeiro responde —,
                não te zangues: não vês que me encontro
                a vinte passos abaixo de ti
                e, portanto, seria impossível
                macular tua água daqui?
                — Tu a sujas — diz o bicho feroz — ;
                além disso, estou informado 
                que falaste de mim ano passado.
                — Como poderia te ter ofendido 
                se não era nascido então,
                e o leite materno inda bebo?
                — Ora, ora, se não foste tu,
                com certeza foi teu irmão.
                — Não o tenho.
                — Então foi alguns dos teus:
                pois que nunca me deixam em paz;
                Tu, teus pastores e cães;
                necessária a vingança se faz.
                E no fundo da floresta
                Com toda tranquilidade
                O lobo devora o cordeiro
                Sem outra formalidade

                Acerca da linguagem da fábula “O lobo e o cordeiro”, marque a alternativa incorreta.`,

            opcao1: `É possível afirmar que está presente na 
                    fábula a sonoridade, marcada principal
                    mente por rimas, as quais conferem um 
                    tom musical ao texto, configurado em 
                    forma de versos.`,
            opcao2: `No diálogo entre o lobo e cordeiro, aquele 
                    refere-se a este utilizando a segunda pes
                    soa do singular. Isso pode ser evidenciado 
                    pelas marcas linguísticas “tu”, “tuas” e “vais”.`,
            opcao3: `Por se tratar de um gênero voltado ao 
                    público infantil, a linguagem da fábula é 
                    carregada de informalidade, marcada por 
                    gírias e termos do uso cotidiano, tais como 
                    “mácula”.`,
            opcao4: `Está presente na fábula a inversão, também 
                    denominada hipérbato, ou seja, a quebra 
                    da estrutura lógica e padrão do enunciado. 
                    Isso é evidente em: “necessária a vingança 
                    se faz”.`,
            opcao5: `Os travessões utilizados na fábula retratam 
                    a conversa entre os personagens, que se dá 
                    de maneira a haver alternância de turnos 
                    de fala.`,
            respostaCorreta: 'C',
            disciplinaId: portugues.id,
            categoriaId: interpretacaoTexto.id,
            provaId: prova952023.id,
            ordem: 7
        });

        const questao8 = await Questao.create({
            enunciado: `
             O lobo e o cordeiro 

            Num límpido regato um dia
            um cordeiro, sereno, bebia.
            Eis que surge um lobo faminto:
            — Como ousas sujar minha água?
            Diz o lobo com fingida mágoa:
            — Logo vais receber o castigo
            por assim desafiar o perigo.
            — Senhor — o cordeiro responde —,
            não te zangues: não vês que me encontro
            a vinte passos abaixo de ti
            e, portanto, seria impossível
            macular tua água daqui?
            — Tu a sujas — diz o bicho feroz — ;
            além disso, estou informado 
            que falaste de mim ano passado.
            — Como poderia te ter ofendido 
            se não era nascido então,
            e o leite materno inda bebo?
            — Ora, ora, se não foste tu,
            com certeza foi teu irmão.
            — Não o tenho.
            — Então foi alguns dos teus:
            pois que nunca me deixam em paz;
            Tu, teus pastores e cães;
            necessária a vingança se faz.
            E no fundo da floresta
            Com toda tranquilidade
            O lobo devora o cordeiro
            Sem outra formalidade

            Afirma-se que o quadrinho estabelece, 
            no que diz repeito a fábula, 
            uma relação
        `,

            opcao1: `antitética.`,
            opcao2: `intertextual.`,
            opcao3: `sinestésica.`,
            opcao4: `denotativa.`,
            opcao5: `paradoxal.`,
            respostaCorreta: 'B',
            disciplinaId: portugues.id,
            categoriaId: interpretacaoTexto.id,
            provaId: prova952023.id,
            ordem: 8,
            imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova1-89.png"
        });

        const questao9 = await Questao.create({
            enunciado: `
            Acerca do quadrinho, julgue os itens a seguir.
            
            I) Pode-se afirmar que o quadrinho é uma mani
            festação reduzida, ou seja, inferior, de arte lite
            rária, pois a linguagem utilizada é informal e 
            cotidiana.
            
            II) São utilizados variados códigos linguísticos 
            para a confecção do quadrinho, tais como lingua
            gem verbal e não verbal.
            
            III) Além de se dedicarem ao humor, as histó
            rias em quadrinhos, obrigatoriamente, reali
            zam crítica social, como é o exemplo do quadrinho.
            
            IV) Para compreender o quadrinho, é necessário 
            conhecer um dos maiores desastres ambien
            tais do Brasil, ocorrido em Minas Gerais e provo
            cado por uma grande empresa de mineração.
            
            V) O uso de balões e de diálogos entre perso
            nagens são uma marca das histórias em qua
            drinhos, como exemplifica o quadrinho.
            
            Estão incorretos os itens:`,

            opcao1: `I e II`,
            opcao2: `I, II e III`,
            opcao3: `II, III e IV`,
            opcao4: `I e III`,
            opcao5: `III e IV`,
            respostaCorreta: 'D',
            disciplinaId: portugues.id,
            categoriaId: interpretacaoTexto.id,
            ordem: 9,
            provaId: prova952023.id,
            imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova1-89.png"       
        });

        const questao10 = await Questao.create({
            enunciado: `
         O banner trata-se de uma peça publicitária 
        da empresa de hortifrutigranjeiros denomi
        nada Hortifruti. A campanha foi veiculada em 
        diversas mídias digitais e impressas no mês de 
        dezembro do ano de 2022. Acerca do banner, 
        marque a alternativa incorreta`,

            opcao1: `Observa-se que, na peça publicitária da Hor
                    tifruti, são utilizados jogos de palavras que 
                    possibilitam a construção do humor.`,
            opcao2: `Evidencia-se ambiguidade na oração: “Quan
                    tos abacaxis você descascou?”.`,
            opcao3: `Com linguagem leve e descontraída, por 
                    meio da campanha publicitária, a empresa 
                    Hortirfuti objetiva promover seus produtos 
                    e vendê-los aos clientes.`,
            opcao4: `As frases: “RETROSPECTIVA” e “feliz NATU
                    RAL PRA VOCÊ” fazem menção às festas de 
                    fim de ano.`,
            opcao5: `O termo “aqui” no trecho “(...) tem tudo 
                    aqui pra sua festa” refere-se à própria peça 
                    publicitária.`,
            respostaCorreta: 'E',
            disciplinaId: portugues.id,
            categoriaId: interpretacaoTexto.id,
            provaId: prova952023.id,
            ordem: 10,
            imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova1-1011.png"
        });

        const questao11 = await Questao.create({
            enunciado: `
            Observe os itens a seguir, analise-os sintatica
            mente e faça o que se pede.
            
            I)Na interrogação “Quantos abacaxis você 
            descascou?”, o sujeito do verbo descascou é 
            “Quantos abacaxis”, sendo classificado como 
            composto, visto que a expressão está no plural.
            
            II) Pode-se afirmar que o sujeito do verbo 
            “tem” é o mesmo tanto em “Você tem muito 
            o que comemorar. ”, quanto em “E tem tudo 
            aqui pra sua festa.” . 
            
            III) “Feliz NATURAL PRA VOCÊ” é uma frase que 
            não contém verbo, sendo classificada como 
            frase nominal. 
            Está(ão) correto(s) o(s) item(s):
            `,

            opcao1: `I`,
            opcao2: `II`,
            opcao3: `I e II`,
            opcao4: `III`,
            opcao5: `II e III`,
            respostaCorreta: 'D',
            disciplinaId: portugues.id,
            categoriaId: interpretacaoTexto.id,
            provaId: prova952023.id,
            ordem: 11,
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova1-1011.png"
        });

        const questao12 = await Questao.create({
            enunciado: `
             [...] O Instituto Federal do Espírito Santo 
            oferece de cursos técnicos ao doutorado 
            e possui mais de 35 mil alunos. Com 22 
            campi em funcionamento, incluindo o Cen
            tro de Referência em Formação e em Edu
            cação a Distância (Cefor), além de 3 campi 
            em implantação, o Ifes se faz presente 
            em todas as microrregiões capixabas. O 
            Instituto possui ainda 49 polos de educa
            ção a distância no Espírito Santo, o Polo 
            de Inovação e a Cidade da Inovação. [...]
            
             Suponha que em 2020 o Instituto Federal do 
            Espírito Santo possuía 32 mil alunos e que 62% 
            desses estudantes eram de cursos técnicos. Já 
            em 2023, o Ifes possui 35 mil alunos e, nesse 
            total, os cursos técnicos representam o quan
            titativo de 24.850 estudantes.
            Assinale a alternativa abaixo que apresenta, 
            aproximadamente, o percentual de aumento 
            de estudantes que fazem cursos técnicos no 
            Ifes no período de 2020 a 2023:`,

            opcao1: `25%`,
            opcao2: `28%`,
            opcao3: `31%`,
            opcao4: `34%`,
            opcao5: `37%`,
            respostaCorreta: 'A',
            disciplinaId: matematica.id,
            categoriaId: porcentagem.id,
            provaId: prova952023.id,
            ordem: 12
        });

        const questao13 = await Questao.create({
            enunciado: `
             Em uma praça há um canteiro circular (for
            mado por 3 círculos concêntricos de raios 1 m, 
            2,5 m e 4 m, respectivamente) que será desa
            tivado e transformado em um espaço para 
            apresentações culturais. 
            
            Sabendo que as partes escuras da figura 
            serão revestidas com azulejos, assinale a 
            alternativa que apresenta a medida mais 
            aproximada da área que será revestida de 
            azulejos. (Use  π = 3,1).`,

            opcao1: `19,4 m²`,
            opcao2: `33,3 m²`,
            opcao3: `22,6 m²`,
            opcao4: `49,7 m²`,
            opcao5: `69,1 m²`,
            respostaCorreta: 'B',
            disciplinaId: matematica.id,
            categoriaId: geometriaPlana.id,
            provaId: prova952023.id,
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova1-13.png",
            ordem: 13
        });

        const questao14 = await Questao.create({
            enunciado: `
            A densidade é uma propriedade específica da 
            matéria, bastante usada na Química, que deter
            mina a quantidade de massa presente em um 
            determinado volume. Calcula-se a densidade 
            (d) de um corpo de massa (m) e volume (v) por 
            meio do quociente da massa pelo volume.

            d = m/v

            Um estudante de gastronomia fará um expe
            rimento para testar uma receita e, para saber 
            a quantidade de fermento necessária, ele pre
            cisa da massa total dos ingredientes que serão 
            utilizados. Observe a tabela abaixo, que apre
            senta o volume de cada ingrediente que ele 
            utilizará e suas respectivas densidades:
            
            Além dos ingredientes apresentados na tabela 
            acima, a receita ainda terá em sua composição 
            1,5 kg de farinha de trigo e 250 g de farinha de 
            aveia.
            Assinale a alternativa abaixo que apresenta 
            aproximadamente a quantidade de fermento 
            que deverá ser utilizada nessa receita, sabendo 
            que a proporção ideal é de 3,5 gramas de fer
            mento para cada 150 gramas de ingredientes:`,
            opcao1: `18,8 gramas`,
            opcao2: `30,4 gramas`,
            opcao3: `49,2 gramas`,
            opcao4: `65,8 gramas`,
            opcao5: `106,6 gramas`,
            respostaCorreta: 'E',
            disciplinaId: matematica.id,
            categoriaId: matematicaAplicada.id,
            provaId: prova952023.id,
            ordem: 14,
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova1-14.png"
        });

        const questao15 = await Questao.create({
            enunciado: `
            Um estudante precisa obter média de 60 pon
            tos no semestre para obter aprovação em 
            cada disciplina. Na disciplina Matemática, o 
            professor distribuiu as avaliações do semestre 
            da seguinte forma:
            
            Se o estudante deseja ser aprovado nessa dis
            ciplina, qual nota mínima ele precisa obter no 
            2º teste escrito?
            `,
            opcao1: `60 pontos`,
            opcao2: `65 pontos`,
            opcao3: `70 pontos`,
            opcao4: `80 pontos`,
            opcao5: `85 pontos`,
            respostaCorreta: 'D',
            disciplinaId: matematica.id,
            categoriaId: mediaPonderada.id,
            provaId: prova952023.id,
            ordem: 15,
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova1-15.png"
        });

        
        const questao16 = await Questao.create({
            enunciado: `
            Recentemente a ANEEL (Agência Nacional de Energia Elétrica) divulgou que o índice de reajuste 
            de preço da energia elétrica para 70 cidades do Espírito Santo ficará em torno de 4,8%. Diante 
            dos sucessivos aumentos da tarifa de energia elétrica, muitos capixabas têm procurado alterna
            tivas para reduzir o consumo. O Sr. Osvaldo ainda possui na varanda de sua casa duas lâmpadas 
            incandescentes de potência 75 W cada, que normalmente ficam acesas todas as noites, das 18h 
            às 22h, e pretende trocá-las por duas lâmpadas de LED.
            Sabe-se que a energia (E) consumida, em Wh, por um aparelho de potência (P), em W, funcio
            nando por intervalo de tempo (ΔT), em h, pode ser calculada pela fórmula matemática:
            
            E = P . ΔT
            
            Observando a fórmula acima, percebe-se que, fixando-se o tempo de funcionamento (ΔT), a 
            energia consumida é diretamente proporcional à potência da lâmpada. Assim, considerando que 
            o Sr. Osvaldo substitua as lâmpadas incandescentes por outras duas de LED, seguindo as orien
            tações da tabela de equivalência da Abilumi (Associação Brasileira de Fabricantes e Importadores 
            de Produtos de Iluminação), apresentada abaixo, e que as novas lâmpadas ficarão acesas pelo 
            mesmo tempo que as antigas, quantas vezes menor será o consumo de energia das novas lâm
            padas da varanda?`,
            opcao1: `2 vezes menor`,
            opcao2: `5 vezes menor`,
            opcao3: `3 vezes menor`,
            opcao4: `4 vezes menor`,
            opcao5: `10 vezes menor`,
            respostaCorreta: 'B',
            disciplinaId: matematica.id,
            categoriaId: matematicaAplicada.id,
            provaId: prova952023.id,
            ordem: 16,
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova1-16.png"
        });
        const questao17 = await Questao.create({
            enunciado: `
            Durante a pandemia da COVID-19 foram rea
            lizados testes para verificar o número de pes
            soas contaminadas pelo Corona Vírus numa 
            cidade de aproximadamente 50.000 habitan
            tes. Verificou-se que o número de pessoas que 
            contraíram o vírus após x meses do início da 
            pandemia era dado pela seguinte expressão 
            matemática:
            
            Quantas pessoas dessa cidade foram conta
            minadas pelos vírus após os quatro primeiros 
            meses de pandemia?`,
            opcao1: `5.10¹`,
            opcao2: `5.10²`,
            opcao3: `10³`,
            opcao4: `5.10³`,
            opcao5: `10⁴`,
            respostaCorreta: 'B',
            disciplinaId: matematica.id, 
            categoriaId: matematicaAplicada.id,
            provaId: prova952023.id,
            ordem: 17,
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova1-17.png"
        });
        const questao18 = await Questao.create({
            enunciado: `
             Sendo a equação do 2º grau definida por:
             
             –3 x ² + (2 m + 2) x + 5 m – 1 = 0,
            
            determine o valor de m, sabendo que uma das 
            raízes da equação é igual a –1. 
            `,
            opcao1: `-1`,
            opcao2: `-2`,
            opcao3: `3`,
            opcao4: `2`,
            opcao5: `-5`,
            respostaCorreta: 'D',
            disciplinaId: matematica.id,
            categoriaId: equacao2grau.id,
            provaId: prova952023.id,
            ordem: 18
        });
        
        const questao19 = await Questao.create({
            enunciado: `
             A malha quadriculada abaixo representa parte 
            de uma carta náutica. Os quadrados são iguais 
            e a escala utilizada no mapa indica que cada 1 
            cm corresponde a 1000 m. Um navio de carga 
            saindo de A percorreu o trajeto ABCD.
            
            Sabendo que 1 milha náutica equivale a 1.852 
            metros, podemos dizer que neste trajeto, do 
            ponto A até o D, o navio percorreu em milhas 
            náuticas aproximadamente:
            
            (Faça: √2= 1,41 e √5= 2,23)`,
            opcao1: `14`,
            opcao2: `16`,
            opcao3: `29`,
            opcao4: `10`,
            opcao5: `15`,
            respostaCorreta: 'D',
            disciplinaId: matematica.id,
            categoriaId: matematicaAplicada.id,
            provaId: prova952023.id,
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova1-19.png",
            ordem: 19,
        });
        const questao20 = await Questao.create({
            enunciado: `
             O desenho abaixo representa o modelo dos 
            vitrais de uma igreja que precisam ser restau
            rados. Será utilizada uma tinta especial para 
            vidro, que custa R$ 80,00 a lata e cada lata 
            cobre aproximadamente 100 cm2 de área. A 
            área escura da figura é a parte do vitral que 
            precisa ser pintada com a tinta especial. Consi
            derando respectivamente R= 40 cm e r = 10 cm 
            os raios das circunferências maior e menor, e 
            que o triângulo inscrito é equilátero e o hexá
            gono inscrito é regular, o valor que aproxi
            madamente será gasto com a restauração de 
            cada vitral é: 
            
            (Use: π ≅ 3 e √3 ≅ 1,7)
            `,
            opcao1: `R$ 2.244,00`,
            opcao2: `R$ 1.444,00`,
            opcao3: `R$ 3.444,00`,
            opcao4: `R$ 5.244,00`,
            opcao5: `R$ 4.504,00`,
            respostaCorreta: 'A',
            disciplinaId: matematica.id,
            categoriaId: geometriaPlana.id,
            provaId: prova952023.id,
            ordem: 20,
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova1-20.png"
        });
        const questao21 = await Questao.create({
            enunciado: `
            A figura abaixo representa a planta baixa de 
            um escritório. O proprietário da sala pretende 
            colocar um filete de granito para decorar o piso. 
            Esse filete é a parte não pontilhada na figura. 
            Sabendo que os retângulos ABCD e EFGH são 
            congruentes, indique quantos metros de filete 
            serão necessários:

            Considere  √2 ≅ 1,4
            `,
            opcao1: `15,2`,
            opcao2: `17,6`,
            opcao3: `14,6`,
            opcao4: `18,6`,
            opcao5: `20,6`,
            respostaCorreta: 'B',
            disciplinaId: matematica.id,
            categoriaId: geometriaPlana.id,
            provaId: prova952023.id,
            ordem: 21,
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova1-21.png"
        });
        
        const questao22 = await Questao.create({
            enunciado: `
             Valéria vai fazer uma viagem e precisa arrumar 
            sua bagagem, mas esqueceu a senha que abre 
            o cadeado da mala. Ela esqueceu a combina
            ção com três algarismos que escolhera como 
            segredo, mas sabe que atende às condições 
            abaixo: 
            * os números escolhidos variavam de 1 a 6;
            * não havia repetição de números na com
            binação;
            * o primeiro número escolhido era ímpar. 
            Quantas combinações diferentes atendem 
            às condições estabelecidas pela Valéria? 
            `,
            opcao1: `30`,
            opcao2: `120`,
            opcao3: `50`,
            opcao4: `40`,
            opcao5: `60`,
            respostaCorreta: 'E',
            disciplinaId: matematica.id,
            categoriaId: combinatoria.id,
            provaId: prova952023.id,
            ordem: 22
        });
        
        const questao23 = await Questao.create({
            enunciado: `
            O efeito estufa é um fenômeno natural que 
            contribui para manter a temperatura média da 
            superfície da Terra em torno de 15°C. Sem ele, 
            essa temperatura seria de 18°C abaixo de zero. 
            Portanto, o efeito estufa é importante para 
            manter as condições do planeta compatíveis 
            com a vida (Lopes e Audino, 2018, p. 18). Sobre 
            esse fenômeno, marque a alternativa incorreta:
            `,
            opcao1: `Na atmosfera terrestre estão presentes 
                    alguns gases — como gás carbônico, vapor 
                    de água e metano — que atuam, em escala 
                    global, retardando a emissão de calor pelo 
                    planeta. Assim, parte da energia prove
                    niente do Sol fica “aprisionada” na Terra, 
                    fazendo com que a temperatura do planeta 
                    seja superior àquela que seria esperada.`,
            opcao2: ` Assim como ocorre na estufa, a luz do Sol 
                    atravessa a atmosfera e aquece a Terra. 
                    Uma porcentagem do calor refletido não 
                    consegue escapar para o espaço, sendo 
                    retida por certos gases da atmosfera. O 
                    principal gás que retém o calor é o gás car
                    bônico, além do vapor de água. `,
            opcao3: `Entre os prováveis efeitos de um aqueci
                    mento do nosso planeta, dois merecem des
                    taque: as mudanças climáticas regionais e a 
                    diminuição do nível da água dos oceanos.`,
            opcao4: `Quando a concentração de gases de efeito 
                    estufa aumenta, o poder de retenção de calor 
                    pela atmosfera também fica maior, impe
                    dindo que grande parte do calor irradiado 
                    pela superfície terrestre retorne ao espaço. 
                    Esse fato é muito preocupante, pois a inten
                    sificação do efeito estufa tem sido apontada 
                    como o principal fator de aumento da tempe
                    ratura média da atmosfera em todo o mundo, 
                    processo denominado aquecimento global.`,
            opcao5: `Outros fatores que contribuem para o aque
                    cimento global são os desmatamentos e as 
                    queimadas. As plantas retiram gás carbô
                    nico do ar durante a fotossíntese: quando 
                    elas são removidas, mais gás carbônico 
                    permanece na atmosfera. Boa parte do gás 
                    carbônico retirado do ar pelas plantas é 
                    transformada nas substâncias que formam 
                    seu próprio corpo. Quando elas são quei
                    madas, também liberam gás carbônico.`,
            respostaCorreta: 'C',
            disciplinaId: ciencia.id,
            categoriaId: cienciaAmbiental.id,
            provaId: prova952023.id,
            ordem: 23,
        });
        const questao24 = await Questao.create({
            enunciado: `
            “Mudanças climáticas podem causar 
            perda de vegetação em 99% da Caatinga 
            até 2060, alerta estudo da Unicamp.”

             Sobre os biomas brasileiros, marque a alter
            nativa incorreta, com base nas características 
            descritas nas sentenças a seguir: 
            `,
            opcao1: `O clima na região do Cerrado é quente. A 
                    presença de árvores com troncos e galhos 
                    retorcidos é característica das paisagens de 
                    Cerrado. Um dos animais típicos desse bioma 
                    é o lobo-guará. Outros animais típicos desse 
                    ambiente são a ema, a maior ave do Brasil, e 
                    o tamanduá- bandeira.`,
            opcao2: ` Desde o início da colonização do Brasil, a Mata 
                    Atlântica foi o bioma que mais sofreu com a 
                    ocupação humana. A extração do pau-brasil 
                    (usado como fonte de corante vermelho para 
                    tecidos), por exemplo, e o crescimento das 
                    cidades causaram o grande desmatamento 
                    da região. O bioma recebe este nome por se 
                    estender ao longo da costa brasileira.`,
            opcao3: `A Caatinga ocorre principalmente na região 
                    Sul do Brasil e ocupa cerca de 11% do terri
                    tório nacional. Na região a estação seca é 
                    prolongada e a estação chuvosa é curta. A 
                    vegetação da Caatinga é rica em cactos, como 
                    o xiquexique, as palmas, o mandacaru e o 
                    facheiro. Eles apresentam folhas modificadas 
                    em espinhos, característica que reduz muito 
                    a perda de água pela transpiração.`,
            opcao4: `A Amazônia é a maior floresta tropical do 
                    mundo e é o bioma que abriga a maior diver
                    sidade de espécies. A maior parte da exten
                    são da Amazônia encontra-se no território 
                    brasileiro, mas ela se estende por mais oito 
                    países da América do Sul. O clima é quente e 
                    úmido durante todo o ano, com chuvas fre
                    quentes e abundantes. Alguns de seus rios 
                    apresentam plantas que flutuam na água, 
                    como a vitória-régia.`,
            opcao5: `O Pantanal, a maior planície alagável do pla
                    neta, ocorre na Bolívia, no Paraguai e no 
                    Brasil, onde está presente nos estados de 
                    Mato Grosso e Mato Grosso do Sul. Os rios 
                    são habitados por diversas espécies de pei
                    xes, como o dourado, o curimbatá e a pira
                    putanga. A fauna ainda inclui animais como 
                    sucuri, jacarés, onças-pintadas e araras azuis.`,
            respostaCorreta: 'C',
            disciplinaId: ciencia.id,
            categoriaId: cienciaBiologica.id,
            provaId: prova952023.id,
            ordem: 24
        });
        const questao25 = await Questao.create({
            enunciado: `
            Messi sai do banco, estreia na MLS 
            com gol e tira Inter Miami da lanterna
            Lionel Messi estreou na Major League 
            Soccer, o campeonato americano de fute
            bol, com um gol construído em um lance 
            de plasticidade contra o New York Red 
            Bulls. Deixado no banco de reservas pelo 
            técnico Tata Martino no início da partida, 
            o argentino campeão do mundo entrou 
            aos 15 minutos do segundo tempo, 
            quando o Inter Miami já vencia por 1 a 0, 
            para balançar a rede e ajudar a fechar a 
            vitória com 2 a 0 no placar.

             Na notícia esportiva reportada acima, é des
            tacada a atuação do jogador argentino Lionel 
            Messi durante uma partida de futebol, em que 
            o jogador recebeu a bola, driblou os adver
            sários com agilidade e chutou em direção ao 
            gol, contribuindo com a vitória de seu time. 
            As movimentações realizadas pelo habilidoso 
            jogador só foram possíveis graças à incrível 
            interação que ocorre entre os sistemas loco
            motor e nervoso do corpo humano.
            Qual é a relação entre os sistemas muscular e 
            nervoso na situação descrita acima, em que o 
            jogador de futebol Lionel Messi driblou adver
            sários e chutou a bola em direção ao gol?

            `,
            opcao1: `O sistema nervoso detecta os adversários 
                    e instrui o sistema muscular a executar os 
                    movimentos necessários.`,
            opcao2: `O sistema muscular identifica os adversá
                    rios e envia sinais ao sistema nervoso para 
                    planejar os movimentos de driblar e chutar.`,
            opcao3: `O sistema nervoso proporciona força aos 
                    músculos, enquanto o sistema muscular 
                    controla os impulsos nervosos para um 
                    movimento preciso.`,
            opcao4: `O sistema nervoso ativa os músculos para 
                    movimentação, enquanto o sistema mus
                    cular interpreta as informações táteis dos 
                    adversários.`,
            opcao5: `O sistema muscular e o sistema nervoso 
                    atuam de forma independente para reali
                    zar os movimentos de driblar e chutar, sem 
                    interação direta.`,
            respostaCorreta: 'A',
            disciplinaId: ciencia.id,
            categoriaId: cienciaBiologica.id,
            provaId: prova952023.id,
            ordem: 25
        });
        const questao26 = await Questao.create({
            enunciado: `
            Unidades de Conservação são áreas naturais 
            com restrições de uso, regulamentadas e pro
            tegidas por leis. O objetivo principal é conser
            var e valorizar os recursos naturais, como a 
            biodiversidade e as fontes de água (Gewands
            najder e Pacca, 2018, p. 88). Sobre a importân
            cia das Unidades de Conservação para a pre
            servação da biodiversidade e do patrimônio 
            nacional, podemos afirmar que:
            `,
            opcao1: ` As Unidades de Conservação de Uso Sus
                    tentável não podem sofrer nenhum tipo 
                    de exploração econômica, nem consumo, 
                    coleta ou qualquer destruição dos recursos 
                    naturais.`,
            opcao2: `Nas Unidades de Conservação de Prote
                    ção Integral é permitida a exploração eco
                    nômica dos recursos naturais, desde que 
                    realizada de forma planejada e sustentável: 
                    deve ser economicamente viável, social
                    mente justa e manter a biodiversidade do 
                    local e seus recursos renováveis.`,
            opcao3: `O desenvolvimento sustentável tem como 
                    objetivo melhorar a qualidade de vida da 
                    população e de seus descendentes, sem 
                    preservar a biodiversidade e a diversidade 
                    cultural.`,
            opcao4: `Além de beneficiar algumas comunidades 
                    tradicionais, que dependem diretamente 
                    dos recursos naturais, as Unidades de Con
                    servação beneficiam toda a sociedade, uma 
                    vez que os ambientes naturais são impor
                    tantes para o fornecimento de água, o con
                    trole da poluição, a conservação do solo, 
                    entre outros.`,
            opcao5: `A fragmentação de habitat é uma das prin
                    cipais causas da redução de biodiversidade 
                    e, consequentemente, da maior vulnerabi
                    lidade das espécies à extinção, exceto as 
                    espécies endêmicas, que são pouco afeta
                    das com os impactos ambientais, pois já 
                    são adaptadas e resistentes.`,
            respostaCorreta: 'D',
            disciplinaId: ciencia.id,
            categoriaId: cienciaAmbiental.id,
            provaId: prova952023.id,
            ordem: 26
        });
        const questao27 = await Questao.create({
            enunciado: `
             A imagem faz parte de uma campanha 
            realizada pelo Hemocentro do Hospital das Clí
            nicas da Faculdade de Medicina de Marília-SP, 
            que solicita ajuda dos doadores para regula
            rização dos estoques de bolsas de sangue de 
            todos os tipos (A+, A-, B+, B-, AB+, AB-, O+ e O-).

            No mundo atual, a doação de sangue desem
            penha papel crucial para salvar vidas em situ
            ações de emergência, cirurgias e tratamentos 
            médicos complexos. Você já parou para pen
            sar por que nem todos os tipos de sangue 
            podem ser doados indiscriminadamente? A 
            resposta está nos grupos sanguíneos e nas 
            ideias de Mendel sobre hereditariedade. A 
            relação entre genética e doação de sangue nos 
            ajuda a entender a importância de encontrar 
            compatibilidades entre doadores e recepto
            res. Considerando essas informações, analise 
            a hipótese a seguir.

            Em uma emergência médica, um paciente com 
            sangue do tipo AB- necessita de uma transfu
            são. Entre os doadores disponíveis, quais são 
            os tipos sanguíneos que podem ser compatí
            veis com o paciente?
            `,
            opcao1: `A+, B+, O+, AB+`,
            opcao2: `B-, AB+`,
            opcao3: `O-, O+`,
            opcao4: `A+, O`,
            opcao5: `A-, AB-`,
            respostaCorreta: 'E',
            disciplinaId: ciencia.id,
            categoriaId: genetica.id,
            provaId: prova952023.id,
            ordem: 27
        });
        const questao28 = await Questao.create({
            enunciado: `
            As leveduras são fungos unicelulares que 
            se reproduzem assexuadamente por brota
            mento e realizam a fermentação como pro
            cesso metabólico, observado, por exemplo, 
            na produção de pães e bolos. Com relação à 
            fermentação, marque a alternativa incorreta: 
            `,
            opcao1: ` Ao adicionar fermento biológico à massa 
                    do pão, ocorre uma transformação química 
                    chamada fermentação. O fermento bioló
                    gico contém um fungo da espécie Saccha
                    romyces cerevisiae que transforma os açúca
                    res presentes nos ingredientes do pão em 
                    álcool e gás carbônico.`,
            opcao2: `O acúmulo de gás carbônico dentro da 
                    massa de pão faz com que ela cresça.`,
            opcao3: `Ao adicionar fermento biológico à massa 
                    do pão, ocorre uma transformação física 
                    chamada combustão. O fermento biológico 
                    contém um fungo da espécie Saccharomyces 
                    cerevisiae que transforma os açúcares pre
                    sentes nos ingredientes do pão em álcool e 
                    gás carbônico.`,
            opcao4: `Com o cozimento, o fungo do fermento 
                    morre e o álcool evapora por causa do calor. `,
            opcao5: `O açúcar utilizado na receita do pão é que
                    brado em gás carbônico e álcool pelas leve
                    duras presentes no fermento biológico.`,
            respostaCorreta: 'C',
            disciplinaId: ciencia.id,
            categoriaId: cienciaBiologica.id,
            provaId: prova952023.id,
            ordem: 28,
        });
        const questao29 = await Questao.create({
            enunciado: `
             21. Erram, portanto, os pregadores de 
            indulgências que afirmam que a pessoa 
            é absolvida de toda pena e salva pelas 
            indulgências do papa. [...] 
            27.  Pregam doutrina mundana os que 
            dizem que, tão logo tilintar a moeda lan
            çada na caixa, a alma sairá voando [do 
            purgatório para o céu]. [...] 
            36. Qualquer cristão que está verdadeira
            mente contrito tem remissão plena tanto 
            da pena como da culpa, que são suas dívi
            das, mesmo sem uma carta de indulgência.
            
            As 95 teses de Martinho Lutero, publicadas 
            em 1517, contribuíram com o movimento 
            que caracterizou as transformações no cris
            tianismo ocidental a partir do século XVI. Esse 
            movimento é denominado
            `,
            opcao1: `Invenção da prensa de tipos móveis.`,
            opcao2: `Contrarreforma.`,
            opcao3: `Absolutismo.`,
            opcao4: `Reforma Protestante.`,
            opcao5: `Humanismo.`,
            respostaCorreta: 'D',
            disciplinaId: historia.id,
            categoriaId: historiaIgreja.id,
            provaId: prova952023.id,
            ordem: 29
        });
        const questao30 = await Questao.create({
            enunciado: `
            Várias sociedades desenvolveram técnicas de 
            navegação e praticaram o comércio marítimo 
            ao longo do tempo, como os fenícios, na Anti
            guidade, e os vikings, na Idade Média. Contudo, 
            até o século XIV, o domínio dos europeus era 
            restrito ao Mar Mediterrâneo, chamado pelos 
            antigos romanos de Mare nostrum (Nosso Mar), 
            por ser importante ponto de contato entre os 
            continentes africano, europeu e asiático. No 
            f
            inal da Idade Média Portugal foi pioneiro no 
            processo de expansão marítima que caracteri
            zou a Era Moderna. 
            Algumas etapas da expansão marítima portu
            guesa, no século XV, podem ser corretamente 
            descritas, em ordem cronológica, como
            `,
            opcao1: `Conquista de Ceuta; Viagem de Vasco da 
                    Gama às Índias; Superação do Cabo da Boa 
                    Esperança. `,
            opcao2: `Viagem de Pedro Álvares Cabral e chegada 
                    ao Brasil; Conquista de Ceuta; Superação 
                    do Cabo da Boa Esperança. `,
            opcao3: `Superação do Cabo da Boa Esperança; Via
                    gem de Vasco da Gama às Índias; Conquista 
                    de Ceuta.`,
            opcao4: `Viagem de Vasco da Gama às Índias; Con
                    quista de Ceuta; Superação do Cabo da Boa 
                    Esperança.`,
            opcao5: `Conquista de Ceuta; Viagem de Vasco da 
                    Gama às Índias; Viagem de Pedro Álvares 
                    Cabral e chegada ao Brasil. `,
            respostaCorreta: 'E',
            disciplinaId: historia.id,
            categoriaId: historiaNavegacao.id,
            provaId: prova952023.id,
            ordem: 30
        });
        
        const questao31 = await Questao.create({
            enunciado: `
            Iluminismo
            
            Como conceito, foi criado pelo filósofo 
            alemão Immanuel Kant, em 1784, para 
            definir a filosofia dominante na Europa 
            ocidental no século XVIII. A palavra Ilumi
            nismo vem de Esclarecimento (Aufklärung 
            no original alemão), usada para designar 
            a condição para que o homem, a humani
            dade, fosse autônomo. Isso só seria pos
            sível, afirmava o Iluminismo, se cada indi
            víduo pensasse por si próprio, utilizando 
            a razão. [...]
            
            [...] a maioria desses pensadores com
            partilhava algumas ideias em comum: a 
            defesa do pensamento racional, a crítica 
            à autoridade religiosa e ao autoritarismo 
            de qualquer tipo e a oposição ao fana
            tismo.

            No contexto do surgimento do pensamento 
            iluminista as ideias liberais caracterizavam-se, 
            EXCETO:
            `,
            opcao1: `Pela defesa ao livre pensamento e manifes
                    tação de ideias.`,
            opcao2: `Pela limitação ao poder dos governantes a 
                    partir de uma Constituição. `,
            opcao3: `Pelo combate ao protecionismo mercanti
                    lista.`,
            opcao4: `Pela concordância com a teoria do direito 
                    divino dos reis.`,
            opcao5: `Pela manutenção e garantia da propriedade 
                    privada.`,
            respostaCorreta: 'D',
            disciplinaId: historia.id,
            categoriaId: historiaIluminismo.id,
            provaId: prova952023.id,
            ordem: 31
        });

        const questao32 = await Questao.create({
            enunciado: `
            A Princesa Imperial Regente, em nome de 
            Sua Majestade o Imperador, o Senhor D. 
            Pedro II, faz saber a todos os súditos do 
            Império que a Assembléia Geral decretou 
            e ela sancionou a lei seguinte:
            
            Art. 1°: É declarada extincta desde a data 
            desta lei a escravidão no Brazil.
            
            Art. 2°: Revogam-se as disposições em 
            contrário (Dada no Palácio do Rio de 
            Janeiro, em 13 de maio de 1888, 67º da 
            Independência e do Império).

            Em relação ao processo de abolição da escra
            vidão no Brasil, assinale a alternativa INCOR
            RETA:
            `,
            opcao1: `A discussão sobre o fim da escravidão no 
                    Brasil iniciou-se muito antes da assinatura 
                    da Lei Áurea, como pode ser constatado 
                    por meio das leis emancipacionistas, como 
                    as que proibiram o tráfico de africanos ou a 
                    que libertou o ventre das escravizadas.`,
            opcao2: `A campanha abolicionista, movimento 
                    social que lutou contra a escravidão no Bra
                    sil, envolveu pessoas de diversas origens, 
                    merecendo destaque afro-brasileiros como 
                    Luiz Gama, André Rebouças e José do Patro
                    cínio.`,
            opcao3: `A Lei Áurea aboliu oficialmente a escravidão 
                    no Brasil, mas sofre críticas por não prever 
                    em seu texto uma indenização aos ex-es
                    cravizados ou ações de inclusão social.`,
            opcao4: `O movimento abolicionista defendia a 
                    democratização do acesso à terra como 
                    medida complementar à extinção da escra
                    vidão para inserção dos ex-escravizados na 
                    sociedade brasileira.`,
            opcao5: `A abolição da escravidão em 13 de maio de 
                    1888, por decisão da Princesa Isabel, sig
                    nificou o fim da exploração de africanos e 
                    descendentes, que durou mais de trezentos 
                    anos no Brasil.`,
            respostaCorreta: 'E',
            disciplinaId: historia.id,
            categoriaId: historiaBrasil.id,
            provaId: prova952023.id,
            ordem: 32
        });
        const questao33 = await Questao.create({
            enunciado: `
            “A palavra messianismo deriva de mes
            sias, que significa “enviado de Deus”, 
            “salvador”. É um termo ligado às religiões 
            judaica e cristã.
            
            Na história do Brasil, o termo mes
            sianismo é usado para se referir aos 
            movimentos sociais em que milhares de 
            pessoas formaram comunidades sob a 
            influência de um líder político e religioso. 
            De modo geral, essas comunidades acre
            ditavam que seu líder tinha dons para 
            guiar as pessoas, fazer milagres e curas.”
            
             Entre os movimentos de caráter messiânico 
            que ocorreram durante a Primeira República 
            no Brasil podemos citar:
            `,
            opcao1: `Canudos`,
            opcao2: `Revolta da Vacina`,
            opcao3: `Revolta da Chibata`,
            opcao4: `Revolta da Armada`,
            opcao5: `Tenentismo`,
            respostaCorreta: 'A',
            disciplinaId: historia.id,
            categoriaId: messianismo.id,
            provaId: prova952023.id,
            ordem: 33
        });

        const questao34 = await Questao.create({
            enunciado: `
            No dia 2 de julho de 2023, a Bahia celebrou o 
            bicentenário da Independência do Brasil. Entre 
            os diversos nomes e fatos recordados durante 
            as comemorações, destaca-se a participação 
            de Maria Quitéria de Jesus. A baiana, nascida 
            em São José das Itapororocas, vestiu-se com 
            roupas de seu cunhado e adotou o nome de 
            soldado Medeiros para participar das guerras 
            de independência do Brasil. Tendo participado 
            de batalhas importantes e se distinguido por 
            suas habilidades com armas de fogo e monta
            ria, além de sua coragem, Maria Quitéria per
            maneceu no Batalhão dos Periquitos após a 
            revelação de seu gênero aos superiores, rece
            bendo saiotes para seu fardamento.
            `,
            opcao1: `A Independência do Brasil foi consolidada 
                    no dia 7 de setembro graças à diplomacia 
                    de Dom Pedro I e suas boas relações com 
                    as elites brasileiras e portuguesas.`,
            opcao2: `As mulheres só poderiam participar das 
                    lutas da Independência se adotassem uma 
                    identidade masculina.`,
            opcao3: `A fama de Maria Quitéria como soldado atu
                    ante nas guerras pela independência é jus
                    tificada por ser a única personagem femi
                    nina envolvida naquele processo.`,
            opcao4: ` A participação de integrantes das camadas 
                    populares e grupos sociais não privilegia
                    dos nas guerras pela independência contri
                    buiu para sua consolidação no ano de 1823.`,
            opcao5: `A celebração da independência no dia 2 de 
                    julho e a exaltação de personagens locais 
                    demonstra que a Bahia possui uma história 
                    própria da emancipação política, sem rela
                    ção com o restante do Brasil.`,
            respostaCorreta: 'D',
            disciplinaId: historia.id,
            categoriaId: historiaBrasil.id,
            provaId:prova952023.id,
            ordem: 34,
            imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova1-34.png"
        });

        const questao35 = await Questao.create({
            enunciado: `
            O espaço agrário brasileiro mudou profunda
            mente nas últimas décadas. No caso do estado 
            do Espírito Santo, embora tais mudanças 
            tenham ocorrido também, algo permanece 
            inalterado. O estado continua tendo como seu 
            maior destaque na agricultura um produto 
            agrícola que é aqui cultivado desde o século 
            XIX. O texto refere-se ao/à: `,

            opcao1: `trigo`,
            opcao2: `milho`,
            opcao3: `arroz`,
            opcao4: `café`,
            opcao5: `soja`,
            respostaCorreta: 'D',
            disciplinaId: geografia.id,
            categoriaId: geografiaAgraria.id,
            provaId: prova952023.id,
            ordem: 35
        });
        const questao36 = await Questao.create({
            enunciado: `
            A pirâmide etária é um tipo de gráfico que 
            representa os dados sobre a população mas
            culina e feminina por idades. Por isso é tam
            bém denominada pirâmide de idades. O for
            mato de uma pirâmide de idades pode nos 
            revelar alguns aspectos sobre a população de 
            um país. A pirâmide etária brasileira vem pas
            sando, nas últimas décadas, por um estreita
            mento de sua base. Tal fenômeno se deve à:`,

            opcao1: `redução da escolaridade de pessoas com 65 
                    anos ou mais;`,
            opcao2: `diminuição da porcentagem de mulheres na 
                    população, proporcionalmente ao seu total;`,
            opcao3: `emigração de pessoas com idades correla
                    tas à população da base da pirâmide para 
                    outros países;`,
            opcao4: `diminuição da taxa de mortalidade infantil.`,
            opcao5: `popularização de métodos anticoncepcionais, 
                    ao aumento da participação das mulheres 
                    no mercado de trabalho e ao planejamento 
                    familiar.`,
            respostaCorreta: 'E',
            disciplinaId: geografia.id,
            categoriaId: geografiaPopulacional.id,
            provaId: prova952023.id,
            ordem: 36
        });

        const questao37 = await Questao.create({
            enunciado: `
            O espaço geográfico pode ser regionalizado 
            conforme vários critérios. Além de brasileiro 
            e sul-americano, quem nasce no Brasil é lati
            no-americano. A América Latina é uma região 
            do continente americano que se estende 
            do Rio Grande, curso d’água na fronteira do 
            México com os Estados Unidos, até a Patagô
            nia (região natural no extremo sul da América 
            do Sul, compartilhada por Chile e Argentina). 
            Sobre a América Latina, é correto afirmar que:`,

            opcao1: `Entre os vários elementos culturais impos
                    tos pelos colonizadores na região, desta
                    cam-se as línguas, todas neolatinas, ou seja, 
                    derivadas do latim.`,
            opcao2: `Em seu interior não há outras regionaliza
                    ções de menor escala.`,
            opcao3: `Se caracteriza pela predominância do uso 
                    de línguas neolatinas e pela semelhança do 
                    passado histórico de colônia de exploração.`,
            opcao4: `A colonização eliminou completamente as 
                    línguas autóctones, ou seja, aquelas faladas 
                    pelos povos originários de cada parte da 
                    região.`,
            opcao5: `Corresponde à parte mais setentrional do 
                    continente americano. `,
            respostaCorreta: 'C',
            disciplinaId: geografia.id,
            categoriaId: geografiaCultural.id,
            provaId: prova952023.id,
            ordem: 37
        });

        const questao38 = await Questao.create({
            enunciado: `
            Quando comparado à Inglaterra, à França ou 
            aos Estados Unidos, o processo de industriali
            zação do Brasil ocorreu de forma tardia, inten
            sificando-se somente a partir da década de 
            1930. Em relação aos aspectos da industrializa
            ção brasileira, assinale a alternativa CORRETA.`,

            opcao1: `No início, a industrialização do Brasil con
                    centrou-se na Região Norte. Posterior
                    mente, concentrou-se na Região Sudeste.`,
            opcao2: `No Brasil, a industrialização, associada à 
                    modernização no campo e à concentração 
                    de terras, impulsionou a saída de habitan
                    tes do campo para as cidades, fenômeno 
                    conhecido como êxodo rural. `,
            opcao3: `Considerando que o Brasil conta, atual
                    mente, com um significativo parque indus
                    trial, a independência tecnológica marca a 
                    indústria do país. `,
            opcao4: `Apesar do processo de industrialização, o 
                    perfil da economia brasileira não se modi
                    ficou ao longo do século XX, uma vez que 
                    o café continuou sendo o principal produto 
                    da economia nacional.`,
            opcao5: `Em virtude da desconcentração industrial 
                    em curso, a Região Sudeste deixou de ser a 
                    principal área industrial do Brasil.`,
            respostaCorreta: 'B',
            disciplinaId: geografia.id,
            categoriaId: geografiaEconomica.id,
            provaId: prova952023.id,
            ordem: 38
        });

        const questao39 = await Questao.create({
            enunciado: `
            As paisagens urbanas foram formadas pelo 
            trabalho humano, a partir de processos histó
            ricos como a industrialização e a urbanização. 
            Em relação às características das paisagens 
            urbanas, assinale a alternativa CORRETA.`,

            opcao1: `Na maior parte das paisagens urbanas há o 
                    predomínio de atividades do setor primário 
                    de produção, ou seja, agricultura, pecuária 
                    e extrativismo. `,
            opcao2: `Em todas as paisagens urbanas predomi
                    nam atividades industriais. Nesses locais, 
                    destacam-se as fábricas, fazendas e estru
                    turas que variam de acordo com as ativida
                    des econômicas desenvolvidas.`,
            opcao3: `As paisagens urbanas são marcadas pela 
                    presença das agroindústrias, resultantes 
                    da integração das atividades agropecuárias 
                    com a indústria.`,
            opcao4: `Há paisagens urbanas em que predominam 
                    as atividades do setor terciário, ou seja, 
                    comércio e serviços em geral.`,
            opcao5: `Muitas lojas de produtos diversos e o intenso 
                    tráfego de pessoas e mercadorias pelas ruas 
                    e avenidas indicam paisagens urbanas mar
                    cadas pelas atividades extrativas. `,
            respostaCorreta: 'D',
            disciplinaId: geografia.id,
            categoriaId: geografiaUrbana.id,
            provaId: prova952023.id,
            ordem: 39
        });
        
        const questao40 = await Questao.create({
            enunciado: `
            De modo geral, o continente africano se insere 
            no comércio mundial, predominantemente, 
            na condição de exportador de produtos pri
            mários e importador de produtos industria
            lizados. Assinale a alternativa CORRETA que 
            corresponde a uma das causas dessa posição 
            da África na economia global.`,

            opcao1: `A infraestrutura existente na África é mais 
                    utilizada para a circulação de pessoas e 
                    bens dentro do próprio continente do que 
                    para o escoamento de produtos. `,
            opcao2: `O continente africano é carente de energia 
                    elétrica e de infraestrutura de transporte e 
                    comunicação, fatores fundamentais para o 
                    desenvolvimento industrial.`,
            opcao3: `As redes de transportes mais modernas do 
                    continente africano não ligam zonas pro
                    dutoras agrícolas e minerais aos portos de 
                    exportação.`,
            opcao4: `O continente africano apresenta abundân
                    cia de energia elétrica e alto nível de indus
                    trialização, com exceção da África do Sul e 
                    do Egito. `,
            opcao5: `As redes de transportes mais modernas do 
                    continente africano restringem-se a ligar 
                    áreas industriais aos portos de exportação.`,
            respostaCorreta: 'B',
            disciplinaId: geografia.id,
            categoriaId: geografiaEconomica.id,
            provaId: prova952023.id,
            ordem: 40
        });
        //FIM DA PROVA 95/2023

    })();
}

export default sequelize;

