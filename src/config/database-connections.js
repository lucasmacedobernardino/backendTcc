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
        

        const foneticaFonologia = await Categoria.create({nome: "Fonética e Fonologia", disciplinaId: portugues.id})
        const interpretacaoTexto = await Categoria.create({nome: "Interpretação de Texto e Análise Semântica", disciplinaId: portugues.id})
        const pontuacaoEstruturacaoFrases = await Categoria.create({nome: "Pontuação e Estruturação de Frases", disciplinaId: portugues.id}) 
        const interpretacaoTextoGramatica = await Categoria.create({nome: "Interpretação de Texto e Gramatica", disciplinaId: portugues.id})         
        const interpretacaoTextoFiguraLinguagem = await Categoria.create({ nome: "Interpretação de Texto e Figuras de Linguagem", disciplinaId: portugues.id})
        const analiseSintatica = await Categoria.create({nome: "Análise Sintática", disciplinaId:portugues.id})
        const vozVerbal = await Categoria.create({nome: "Voz Verbal", disciplinaId:portugues.id})
        const coesaoCoerenciaTextual = await Categoria.create({nome: "Coesão e Coerência Textual", disciplinaId:portugues.id})
        const adverbios = await Categoria.create({nome: "Advérbios", disciplinaId:portugues.id})
        const analiseLiteraria = await Categoria.create({nome: "Análise Literária", disciplinaId:portugues.id})
        const predicacaoVerbal = await Categoria.create({nome: "Predicação Verbal", disciplinaId:portugues.id})

        const funcoes = await Categoria.create({nome: "Funções", disciplinaId: matematica.id}) 
        const porcentagem = await Categoria.create({nome: "Porcentagem", disciplinaId: matematica.id}) 
        const geometriaPlana = await Categoria.create({nome: "Geometria Plana", disciplinaId: matematica.id})
        const matematicaAplicada = await Categoria.create({nome: "Matemática Aplicada", disciplinaId: matematica.id})
        const mediaPonderada = await Categoria.create({nome: "Cálculo de Média Ponderada", disciplinaId: matematica.id})
        const equacao2grau = await Categoria.create({nome: "Equação de Segundo Grau", disciplinaId: matematica.id})
        const combinatoria = await Categoria.create({nome: "Combinatória", disciplinaId: matematica.id})
        const mdc = await Categoria.create({nome: "Máximo Divisor Comum", disciplinaId: matematica.id})
        const sistemaEquacoes = await Categoria.create({nome: "Sistema de Equações", disciplinaId: matematica.id})
        const geometriaEspacial = await Categoria.create({nome: "Geometria Espacial", disciplinaId: matematica.id})
        const matematicaFinanceira = await Categoria.create({nome: "Matematica Financeira", disciplinaId: matematica.id})
        const divisaoProporcional = await Categoria.create({nome: "Divisão Proporcional", disciplinaId: matematica.id})
        const analiseGraficoPorcentagem = await Categoria.create({nome: "Análise de Gráficos e Porcentagem", disciplinaId: matematica.id})
        const equacoesExponenciais = await Categoria.create({nome: "Equações Exponenciais", disciplinaId: matematica.id})
        const razaoProporcao = await Categoria.create({nome: "Razão e Proporção", disciplinaId: matematica.id})
        const trigonometria = await Categoria.create({nome: "Trigonometria", disciplinaId: matematica.id})
        const mediaAritmetica = await Categoria.create({nome: "Média Aritmética", disciplinaId: matematica.id})
        const geometriaAnalitica = await Categoria.create({nome: "Geometria Analítica", disciplinaId: matematica.id})
        const matematicaRecreativa = await Categoria.create({nome: "Matemática Recreativa", disciplinaId: matematica.id})
        const conjuntos = await Categoria.create({nome: "Teoria dos Conjuntos", disciplinaId: matematica.id})
        const algebra = await Categoria.create({nome: "Álgebra", disciplinaId: matematica.id})
        const funcoesOtimizacoes = await Categoria.create({nome: "Funções e Otimização", disciplinaId: matematica.id})
        const proporcoes = await Categoria.create({nome: "Proporções", disciplinaId: matematica.id})
        const equacoesLineares = await Categoria.create({nome: "Equações Lineares", disciplinaId: matematica.id})
        const equacao1grau = await Categoria.create({nome: "Equação de Primeiro Grau", disciplinaId: matematica.id})
        const estatistica = await Categoria.create({nome: "Estatística", disciplinaId: matematica.id})
        const mecanica = await Categoria.create({nome: "Mecânica", disciplinaId: matematica.id})
        const pg = await Categoria.create({nome: "Progressão Geométrica", disciplinaId: matematica.id})
        const sequenciasProgressoes = await Categoria.create({nome: "Sequências e Progressões", disciplinaId: matematica.id})
        const teoriaNumeros =  await Categoria.create({nome: "Teoria dos números", disciplinaId: matematica.id})
        const equacoesInequacoes = await Categoria.create({nome: "Equações e Inequações", disciplinaId: matematica.id})
        const jurosSimples = await Categoria.create({nome: "Equações e Inequações", disciplinaId: matematica.id})

        const cienciaAmbiental = await Categoria.create({nome: "Ciências Ambientais", disciplinaId: ciencia.id})
        const cienciaBiologica = await Categoria.create({nome: "Ciências Biológicas", disciplinaId: ciencia.id})
        const genetica = await Categoria.create({nome: "Genética", disciplinaId: ciencia.id})
        const saudeImunologia = await Categoria.create({nome: "Saúde e Imunologia", disciplinaId: ciencia.id})
        const biologia = await Categoria.create({nome: "Biologia", disciplinaId: ciencia.id})
        const saudeEpidemiologia = await Categoria.create({ nome:"Saúde Pública e Epidemiologia", disciplinaId: ciencia.id})
        const citologia = await Categoria.create({ nome:"Citologia", disciplinaId: ciencia.id})
        const quimica = await Categoria.create({ nome:"Química", disciplinaId: ciencia.id})
        const movimentoUniformementeAcelerado = await Categoria.create({nome: "Movimento Uniformemente Acelerado", disciplinaId: ciencia.id})
        const cinematica = await Categoria.create({ nome:"Cinemática", disciplinaId: ciencia.id})
        const termologia = await Categoria.create({ nome:"Termologia", disciplinaId: ciencia.id})
        const tabelaPeriodica = await Categoria.create({ nome:"Tabela Periódica e Propriedades Periódicas", disciplinaId: ciencia.id})
        const meioAmbiente = await Categoria.create({ nome:"Meio Ambiente e Poluição", disciplinaId: ciencia.id}) 
        const fotossintese = await Categoria.create({ nome:"Fotossíntese", disciplinaId: ciencia.id}) 
        const intoleranciaLactose = await Categoria.create({ nome:"Intolerância à Lactose e Digestão", disciplinaId: ciencia.id})  
        const termodinamica = await Categoria.create({ nome:"Termodinâmica", disciplinaId: ciencia.id})  
        const acustica = await Categoria.create({ nome:"Acústica", disciplinaId: ciencia.id})  
        const fisicaModerna = await Categoria.create({ nome:"Física Moderna", disciplinaId: ciencia.id})  
        const quimicaAtomica = await Categoria.create({ nome:"Química Atômica", disciplinaId: ciencia.id})  
        const zoologia = await Categoria.create({ nome:"Zoologia", disciplinaId: ciencia.id})  
        const botanica = await Categoria.create({ nome:"Botânica", disciplinaId: ciencia.id})  
        const parasitologia = await Categoria.create({ nome:"Parasitologia", disciplinaId: ciencia.id})  
        const nutricao = await Categoria.create({ nome:"Nutrição", disciplinaId: ciencia.id})  
        const dinamica = await Categoria.create({ nome:"Dinâmica", disciplinaId: ciencia.id})  
        const estruturaAtomica = await Categoria.create({ nome:"Estrutura Atômica", disciplinaId: ciencia.id})  


        const historiaIgreja = await Categoria.create({nome: "Historia da Igreja", disciplinaId: historia.id})
        const historiaNavegacao = await Categoria.create({nome: "Historia da Navegação", disciplinaId: historia.id})
        const historiaIluminismo = await Categoria.create({nome: "Historia do Iluminismo", disciplinaId: historia.id})
        const historiaBrasil = await Categoria.create({nome: "Historia do Brasil", disciplinaId: historia.id})
        const messianismo = await Categoria.create({nome: "Messianismo", disciplinaId: historia.id})
        const imperialismo = await Categoria.create({nome: "Imperialismo", disciplinaId: historia.id})
        const republicaOligarquias = await Categoria.create({nome: "República das Oligarquias", disciplinaId: historia.id})
        const eraVargas = await Categoria.create({nome: "Era Vargas", disciplinaId: historia.id})
        const guerraFria = await Categoria.create({nome: "Guerra Fria", disciplinaId: historia.id})
        const revolucaoIndustrial = await Categoria.create({nome: "Revolução Industrial", disciplinaId: historia.id})
        const civilizacaoAsteca = await Categoria.create({nome: "Civilização Asteca", disciplinaId: historia.id})
        const historiaContemporanea = await Categoria.create({nome: "História Contemporânea", disciplinaId: historia.id})
        const historiaPolitica = await Categoria.create({nome: "História Política", disciplinaId: historia.id})
        const nazismo = await Categoria.create({nome: "Nazismo", disciplinaId: historia.id})
        const movimentosSociaisBrasil = await Categoria.create({nome: "Movimentos Sociais na História do Brasil", disciplinaId: historia.id})



        const geografiaAgraria = await Categoria.create({nome: "Geografia Agrária", disciplinaId: geografia.id})
        const geografiaPopulacional = await Categoria.create({nome: "Geografia Populacional", disciplinaId: geografia.id})
        const geografiaCultural = await Categoria.create({nome: "Geografia Cultural", disciplinaId: geografia.id})
        const geografiaEconomica = await Categoria.create({nome: "Geografia Econômica", disciplinaId: geografia.id})
        const geografiaUrbana = await Categoria.create({nome: "Geografia Urbana", disciplinaId: geografia.id})
        const paisagensRurais = await Categoria.create({nome: "Paisagens Rurais", disciplinaId: geografia.id})
        const turismo = await Categoria.create({nome: "Turismo", disciplinaId: geografia.id})
        const geopolitica = await Categoria.create({nome: "Geopolítica", disciplinaId: geografia.id})
        const ecologia = await Categoria.create({nome: "Ecologia", disciplinaId: geografia.id})
        const geografiaHumana = await Categoria.create({nome: "Geografia Humana", disciplinaId: geografia.id})
        const geografiaPolitica = await Categoria.create({nome: "Geografia Política", disciplinaId: geografia.id})
        const representacaoEspacial = await Categoria.create({nome: "Representação Espacial", disciplinaId: geografia.id})
        const geografiaFisica = await Categoria.create({nome: "Geografia Física", disciplinaId: geografia.id})
        const climaMeteorologia = await Categoria.create({nome: "Clima e Meteorologia", disciplinaId: geografia.id})
        const demografia = await Categoria.create({nome: "Demografia", disciplinaId: geografia.id})
        const recursosNaturais = await Categoria.create({nome: "Recursos Naturais", disciplinaId: geografia.id})
        const hidrologia = await Categoria.create({nome: "Hidrologia", disciplinaId: geografia.id})
        const cartografia = await Categoria.create({nome: "Cartografia", disciplinaId: geografia.id})
        const globalizacao = await Categoria.create({nome: "Globalização", disciplinaId: geografia.id})
        const piramidesEtarias = await Categoria.create({nome: "Pirâmides Etarias", disciplinaId: geografia.id})

        const prova952023 = await Prova.create({nome: "95/2023"})
        const prova842022 = await Prova.create({nome: "84/2022"})
        const prova602022 = await Prova.create({nome: "60/2022"})
        const prova12020 = await Prova.create({nome: "1/2020"})
        const prova12019 = await Prova.create({nome: "1/2019"})
        const prova12018 = await Prova.create({nome: "1/2018"})
        const prova42017 = await Prova.create({nome: "4/2017"})

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


        const questao1_84 = await Questao.create({
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
                meu Deus, duas vezes num dia, pensa
                mos. Isso é demais. De pouco adiantou, 
                porque mais uma vez as bombas chove
                ram, dessa vez do outro lado da cidade. 
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
                f
                im, eles pararam de disparar e pude vol
                tar de novo para “casa”. Finalmente caí no 
                sono às duas e meia.
                
                [...]

                 O gênero textual diário, comumente, apre
                senta um relato pessoal e possui caracterís
                ticas bem específicas, entre elas o uso de 1ª 
                pessoa. Assinale a alternativa que apresenta 
                essa característica.
                `,
    
                opcao1: `“Um grande incêndio assim não é uma visão 
                        agradável.”`,
                opcao2: `“Os aviões mergulhavam e subiam, o ar 
                        zumbia com o barulho dos motores.”`,
                opcao3: `“Depois de os pratos serem lavados, outro 
                        alarme antiaéreo, tiros de canhão e enxa
                        mes de aviões.”`,
                opcao4: `“Assim que começamos a jantar, soou outro 
                        alarme antiaéreo.”`,
                opcao5: `De acordo com os noticiários ingleses, o 
                        aeroporto Schiphol fora bombardeado.”`,
                respostaCorreta: 'D',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova842022.id,
                ordem: 1
            });

            const questao2_84 = await Questao.create({
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
                meu Deus, duas vezes num dia, pensa
                mos. Isso é demais. De pouco adiantou, 
                porque mais uma vez as bombas chove
                ram, dessa vez do outro lado da cidade. 
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
                f
                im, eles pararam de disparar e pude vol
                tar de novo para “casa”. Finalmente caí no 
                sono às duas e meia.
                
                [...]

                 No período “A comida estava boa, mas perdi o 
                apetite no momento em que ouvi a sirene”, o 
                vocábulo destacado expressa uma relação de 
                oposição entre as orações. Assinale a alterna
                tiva em que a conjunção possui o mesmo sen
                tido, ou seja, é uma conjunção adversativa.
                `,
    
                opcao1: `“A comida estava boa, logo perdi o apetite 
                        no momento em que ouvi a sirene.”`,
                opcao2: `“A comida estava boa, contudo perdi o ape
                        tite no momento em que ouvi a sirene.”`,
                opcao3: `“A comida estava boa, por isso perdi o ape
                        tite no momento em que ouvi a sirene.”`,
                opcao4: `“A comida estava boa, porquanto perdi o 
                        apetite no momento em que ouvi a sirene.”`,
                opcao5: `A comida estava boa, contanto que perdi o 
                        apetite no momento em que ouvi a sirene.”`,
                respostaCorreta: 'B',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova842022.id,
                ordem: 2
            });

        const questao3_84 = await Questao.create({
                enunciado: `
                Analise as afirmativas a seguir e julgue se são 
                Verdadeiras ou Falsas:
                I – Em “ouvimos o toque dizendo que o 
                perigo passara” podemos afirmar que a ora
                ção em destaque tem a função sintática de um 
                objeto direto do período anterior sendo, por
                tanto, uma oração subordinada substantiva 
                objetiva direta.
                
                II – Na oração “Posso garantir que, quando 
                fui para a cama às nove horas, minhas per
                nas ainda tremiam”, o período em destaque 
                exprime a ideia de condição para Anne dormir 
                e, sintaticamente, temos uma oração subor
                dinada adverbial condicional intercalada a 
                uma oração subordinada substantiva objetiva 
                direta.
                
                III – No período “Por fim, eles pararam de 
                disparar e pude voltar de novo para ‘casa’” é 
                possível substituir o termo por fim por contudo 
                sem alterar o sentido da oração que expressa 
                a ideia de conclusão.
                
                IV – Em “Assim que começamos a jantar, 
                soou outro alarme antiaéreo” o uso da vírgula 
                é obrigatório pelo fato de a oração subordi
                nada adverbial estar deslocada, ou seja, inver
                tida em relação à oração principal.
                
                V – Na oração “o bombardeio havia ter
                minado, e voltamos às nossas tarefas”, obser
                vamos que o segundo período é uma oração 
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
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova842022.id,
                ordem: 3
            });

        
            const questao4_84 = await Questao.create({
                enunciado: `
                 A seguir, leia o trecho que faz parte do livro 
                “Valentes”, o qual retrata histórias de pessoas 
                refugiadas no Brasil. Nessa passagem, há um 
                recorte da história de Roquia Atbai, afegã, que 
                veio para o Brasil em 2002 junto com a famí
                lia num pedido de reassentamento, já que na 
                Índia, país em que estavam, enfrentavam difi
                culdades como arranjar emprego e, portanto, 
                para sobrevivência.
                
                ROQUIA ATBAI
                
                “Minissaia, vestido curto, biquíni. Às 
                vezes, o sonho de uma vida melhor pode 
                passar por elementos tão simples quanto 
                esses, mas que representam uma liber
                dade cultural que muitas mulheres não 
                têm. A afegã Roquia Atbai não tinha. Ela 
                vivia numa sociedade dominada pelo 
                machismo estrutural e costumes bas
                tante opressores para as mulheres. Não 
                teve muitas opções de carreira quando 
                quis trabalhar. Também não pôde esco
                lher seu marido – aliás, nem o conhe
                cia quando se casou. Na relação, nunca 
                teve a mesma voz. Jamais poderia usar 
                as peças de roupa citadas acima, que só 
                experimentou depois de pedir refúgio no 
                Brasil, num processo de reassentamento, 
                vinda da Índia, para onde tinha escapado 
                por causa da guerra do Afeganistão. Ela 
                fugiu para proteger a vida de sua família, 
                mas acabou salvando muito mais do que 
                isso: sua independência e felicidade.”

                Após a leitura do texto acima, podemos com
                preender que:
                `,
    
                opcao1: `No Brasil, é possível que as mulheres esco
                        lham suas vestimentas por haver liberdade 
                        cultural, se compararmos com outros paí
                        ses, como o Afeganistão. Por isso, Roquia 
                        Atbai, após pisar em terras brasileiras, pôde, 
                        por exemplo, escolher usar uma saia curta.`,
                opcao2: `O Afeganistão, antes da ocupação do Talibã, 
                        era um país um pouco mais liberal, e as 
                        mulheres, por exemplo, poderiam estudar, 
                        ter uma profissão e escolher o seu marido.`,
                opcao3: `A Índia foi o primeiro destino de Roquia 
                        Atbai para fugir da guerra do Afeganis
                        tão e, naquele lugar, ela conquistou seu 
                        espaço não necessitando ser tão submissa 
                        e podendo utilizar as vestimentas que qui
                        sesse, como um vestido mais curto.`,
                opcao4: `O machismo estrutural não ocorre somente 
                        no Afeganistão, mas em muitos outros 
                        países, inclusive no Brasil. Porém, nos últi
                        mos anos, esse problema vem diminuindo, 
                        prova disso é o fato de as mulheres pode
                        rem usar as vestimentas que bem entende
                        rem sem que haja comentários maldosos 
                        por alguns homens.`,
                opcao5: `Os casamentos arranjados são uma forma 
                        de as famílias afegãs saírem da extrema 
                        pobreza, por isso vendem suas filhas por 
                        um valor considerável para homens bem 
                        mais velhos e, com isso, garantem um 
                        futuro melhor para as meninas que apren
                        dem a conviver e a amar os maridos.`,
                respostaCorreta: 'A',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova842022.id,
                ordem: 4
            });  


            const questao5_84 = await Questao.create({
                enunciado: `
                 A seguir, leia o trecho que faz parte do livro 
                “Valentes”, o qual retrata histórias de pessoas 
                refugiadas no Brasil. Nessa passagem, há um 
                recorte da história de Roquia Atbai, afegã, que 
                veio para o Brasil em 2002 junto com a famí
                lia num pedido de reassentamento, já que na 
                Índia, país em que estavam, enfrentavam difi
                culdades como arranjar emprego e, portanto, 
                para sobrevivência.
                
                ROQUIA ATBAI
                
                “Minissaia, vestido curto, biquíni. Às 
                vezes, o sonho de uma vida melhor pode 
                passar por elementos tão simples quanto 
                esses, mas que representam uma liber
                dade cultural que muitas mulheres não 
                têm. A afegã Roquia Atbai não tinha. Ela 
                vivia numa sociedade dominada pelo 
                machismo estrutural e costumes bas
                tante opressores para as mulheres. Não 
                teve muitas opções de carreira quando 
                quis trabalhar. Também não pôde esco
                lher seu marido – aliás, nem o conhe
                cia quando se casou. Na relação, nunca 
                teve a mesma voz. Jamais poderia usar 
                as peças de roupa citadas acima, que só 
                experimentou depois de pedir refúgio no 
                Brasil, num processo de reassentamento, 
                vinda da Índia, para onde tinha escapado 
                por causa da guerra do Afeganistão. Ela 
                fugiu para proteger a vida de sua família, 
                mas acabou salvando muito mais do que 
                isso: sua independência e felicidade.”

                Na sentença “Minissaia, vestido curto, biquíni”, 
                logo no início do texto, notamos que há uma 
                enumeração de peças do vestuário feminino, 
                as quais são separadas por vírgulas. Marque 
                a alternativa em que essa regra de uso da vír
                gula se aplica, ou seja, a vírgula é utilizada para 
                separar elementos sintáticos em uma enume
                ração.
                `,
    
                opcao1: `“Roquia, que nasceu em 1971, conseguiu 
                        estudar e se formar como professora.” 
                        (CARARO & SOUZA, 2020, p. 90)`,
                opcao2: `“Quando Roquia nasceu, as afegãs tinham 
                        mais direitos do que atualmente, mais de 
                        quarenta anos depois.” (CARARO & SOUZA, 
                        2020, p. 90)`,
                opcao3: `“No conflito, Roquia perdeu dois irmãos, 
                        uma cunhada, um tio e um primo.” (CARARO 
                        & SOUZA, 2020, p. 93)`,
                opcao4: `“A casa, um imóvel confortável de qua
                        tro quartos, foi fechada como se a família 
                        tivesse ido ao mercado.” (CARARO & SOUZA, 
                        2020, p. 93)`,
                opcao5: `“Mas, depois de um ano, Roquia conseguiu 
                        emprego como esteticista e maquiadora, 
                        levando para a região a técnica indiana de 
                        depilação de sobrancelha com linha – era 
                        tão inusitado na época que saiu no jornal 
                        Zero Hora e em uma emissora de TV local.” 
                        (CARARO & SOUZA, 2020, p. 94-95)`,
                respostaCorreta: 'C',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova842022.id,
                ordem: 5
            });


            const questao6_84 = await Questao.create({
                enunciado: `
                A seguir, leia o trecho que faz parte do livro 
                “Valentes”, o qual retrata histórias de pessoas 
                refugiadas no Brasil. Nessa passagem, há um 
                recorte da história de Roquia Atbai, afegã, que 
                veio para o Brasil em 2002 junto com a famí
                lia num pedido de reassentamento, já que na 
                Índia, país em que estavam, enfrentavam difi
                culdades como arranjar emprego e, portanto, 
                para sobrevivência.
                
                ROQUIA ATBAI
                
                “Minissaia, vestido curto, biquíni. Às 
                vezes, o sonho de uma vida melhor pode 
                passar por elementos tão simples quanto 
                esses, mas que representam uma liber
                dade cultural que muitas mulheres não 
                têm. A afegã Roquia Atbai não tinha. Ela 
                vivia numa sociedade dominada pelo 
                machismo estrutural e costumes bas
                tante opressores para as mulheres. Não 
                teve muitas opções de carreira quando 
                quis trabalhar. Também não pôde esco
                lher seu marido – aliás, nem o conhe
                cia quando se casou. Na relação, nunca 
                teve a mesma voz. Jamais poderia usar 
                as peças de roupa citadas acima, que só 
                experimentou depois de pedir refúgio no 
                Brasil, num processo de reassentamento, 
                vinda da Índia, para onde tinha escapado 
                por causa da guerra do Afeganistão. Ela 
                fugiu para proteger a vida de sua família, 
                mas acabou salvando muito mais do que 
                isso: sua independência e felicidade.”

                Na oração “Ela fugiu para proteger a vida de 
                sua família, mas acabou salvando muito mais 
                do que isso: sua independência e felicidade”, o 
                pronome isso está relacionado à
                `,
    
                opcao1: `independência de Roquia.`,
                opcao2: `felicidade da família de Roquia.`,
                opcao3: `fuga da família do Afeganistão.`,
                opcao4: `proteção da vida da família de Roquia.`,
                opcao5: `salvação da família através da fuga para o 
                        Brasil.`,
                respostaCorreta: 'D',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova842022.id,
                ordem: 6
            });


            const questao7_84 = await Questao.create({
                enunciado: `
                Analise a CHARGE e, em seguida, leia o POEMA de Bráulio Bessa para responder a questão
                
                POEMA 
                FOME – BRÁULIO BESSA
                
                Eu procurei entender 
                qual a receita da fome, 
                quais são seus ingredientes, 
                a origem do seu nome. 
                Entender também por que 
                falta tanto o “de comê”, 
                se todo mundo é igual, 
                chega a dar um calafrio 
                saber que o prato vazio 
                é o prato principal.
                
                Do que é que a fome é feita 
                se não tem gosto nem cor 
                não cheira nem fede a nada 
                e o nada é seu sabor. 
                Qual o endereço dela, 
                se ela tá lá na favela 
                ou nas brenhas do sertão?

                É companheira da morte 
                mesmo assim não é mais forte 
                que um pedaço de pão.
                
                Que rainha estranha é essa 
                que só reina na miséria, 
                que entra em milhões de lares 
                sem sorrir, com a cara séria, 
                que provoca dor e medo 
                e sem encostar um dedo 
                causa em nós tantas feridas. 
                A maior ladra do mundo 
                que nesse exato segundo 
                roubou mais algumas vidas.
                
                Continuei sem saber 
                do que é que a fome é feita, 
                mas vi que a desigualdade 
                deixa ela satisfeita. 
                Foi aí que eu percebi: 
                por isso que eu não a vi 
                olhei pro lugar errado 
                ela tá em outro canto 
                entendi que a dor e o pranto 
                eram só seu resultado.
                
                Achei seus ingredientes 
                na origem da receita, 
                no egoísmo do homem, 
                na partilha que é malfeita. 
                E mexendo um caldeirão 
                eu vi a corrupção 
                cozinhando a tal da fome, 
                temperando com vaidade, 
                misturando com maldade 
                pro pobre que lhe consome.
                
                Acrescentou na receita 
                notas superfaturadas, 
                um quilo de desemprego, 
                trinta verbas desviadas, 
                rebolou no caldeirão 
                vinte gramas de inflação 
                e trinta escolas fechadas.
                
                Sendo assim, se a fome é feita 
                de tudo que é do mal, 
                é consertando a origem 
                que a gente muda o final. 
                Fiz uma conta, ligeiro: 
                se juntar todo o dinheiro 
                dessa tal corrupção, 
                mata a fome em todo canto 
                e ainda sobra outro tanto 
                pra saúde e educação.

                 Analise as afirmações a seguir:
                
                I – O tema do poema e da charge é a fome. 
                
                II – A charge de Amarildo dialoga com a música 
                “Esquinas”, de Djavan, ao apresentar fragmen
                tos desta canção nas falas da família que está 
                procurando alimentos na esquina. 
                
                III – O poema de Bráulio Bessa faz uma crí
                tica social sobre a fome e, para isso, utiliza o 
                recurso de denotação, conforme podemos 
                notar nos versos “Achei seus ingredientes/ na 
                origem da receita,/ no egoísmo do homem/ na 
                partilha que é malfeita.” 
                
                IV – Na charge, o fragmento “sabe lá o que é 
                morrer de sede em frente ao mar” possui rela
                ção metafórica com a situação apresentada: 
                dentro do “Restaurante Brazil”, uma família 
                se alimenta com fartura, enquanto do lado de 
                fora, outra família sofre com a fome e procura 
                algo para se saciar no lixo.
                
                V – Embora o poema e a charge apresentem 
                uma denúncia da realidade brasileira, eles não 
                têm a intenção de provocar reflexão no leitor, 
                nem de apresentar uma crítica social. 
                
                VI – Tanto a charge quanto o poema possuem 
                uma linguagem denotativa por terem a função 
                principal de informar o leitor sobre o agrava
                mento da fome no Brasil.
                As afirmativas corretas estão expressas na 
                alternativa:
                `,
    
                opcao1: `I, II, IV e VI.`,
                opcao2: `I, II e IV.`,
                opcao3: `II, III e IV.`,
                opcao4: `III, V e VI.`,
                opcao5: `II, IV e V.`,
                respostaCorreta: 'B',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova842022.id,
                ordem: 7,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova2-78910.png"
            });


            const questao8_84 = await Questao.create({
                enunciado: `
                Analise a CHARGE e, em seguida, leia o POEMA de Bráulio Bessa para responder a questão
                
                POEMA 
                FOME – BRÁULIO BESSA
                
                Eu procurei entender 
                qual a receita da fome, 
                quais são seus ingredientes, 
                a origem do seu nome. 
                Entender também por que 
                falta tanto o “de comê”, 
                se todo mundo é igual, 
                chega a dar um calafrio 
                saber que o prato vazio 
                é o prato principal.
                
                Do que é que a fome é feita 
                se não tem gosto nem cor 
                não cheira nem fede a nada 
                e o nada é seu sabor. 
                Qual o endereço dela, 
                se ela tá lá na favela 
                ou nas brenhas do sertão?

                É companheira da morte 
                mesmo assim não é mais forte 
                que um pedaço de pão.
                
                Que rainha estranha é essa 
                que só reina na miséria, 
                que entra em milhões de lares 
                sem sorrir, com a cara séria, 
                que provoca dor e medo 
                e sem encostar um dedo 
                causa em nós tantas feridas. 
                A maior ladra do mundo 
                que nesse exato segundo 
                roubou mais algumas vidas.
                
                Continuei sem saber 
                do que é que a fome é feita, 
                mas vi que a desigualdade 
                deixa ela satisfeita. 
                Foi aí que eu percebi: 
                por isso que eu não a vi 
                olhei pro lugar errado 
                ela tá em outro canto 
                entendi que a dor e o pranto 
                eram só seu resultado.
                
                Achei seus ingredientes 
                na origem da receita, 
                no egoísmo do homem, 
                na partilha que é malfeita. 
                E mexendo um caldeirão 
                eu vi a corrupção 
                cozinhando a tal da fome, 
                temperando com vaidade, 
                misturando com maldade 
                pro pobre que lhe consome.
                
                Acrescentou na receita 
                notas superfaturadas, 
                um quilo de desemprego, 
                trinta verbas desviadas, 
                rebolou no caldeirão 
                vinte gramas de inflação 
                e trinta escolas fechadas.
                
                Sendo assim, se a fome é feita 
                de tudo que é do mal, 
                é consertando a origem 
                que a gente muda o final. 
                Fiz uma conta, ligeiro: 
                se juntar todo o dinheiro 
                dessa tal corrupção, 
                mata a fome em todo canto 
                e ainda sobra outro tanto 
                pra saúde e educação.

                 Ao ler o poema “Fome”, podemos afirmar que 
                há versos que representam uma variedade lin
                guística que se distancia das normas da gra
                mática normativa. Mais especificamente, há 
                variações socioculturais que estão ligadas, por 
                exemplo, ao nível de escolaridade do falante, 
                bem como a suas condições econômicas e 
                outros fatores vinculados a aspectos sociais 
                e culturais (FERREIRA, 2014). Sabendo disso, 
                assinale a alternativa que apresenta trecho 
                que está mais próximo das regras da gramá
                tica normativa:
                `,
    
                opcao1: `“também por que/ falta tanto o ‘de comê’”,`,
                opcao2: `“Qual o endereço dela,/ se ela tá lá na favela/ 
                        ou nas brenhas do sertão?”`,
                opcao3: `“Continuei sem saber/ do que é que a fome 
                        é feita,/ mas vi que a desigualdade/ deixa 
                        ela satisfeita.”`,
                opcao4: `“por isso que eu não a vi/ olhei pro lugar 
                        errado/ ela tá em outro canto/ entendi que 
                        a dor e o pranto/ eram só seu resultado.”`,
                opcao5: `“Achei seus ingredientes/ na origem da 
                        receita,/ no egoísmo do homem,/ na parti
                        lha que é malfeita.”`,
                respostaCorreta: 'E',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova842022.id,
                ordem: 8,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova2-78910.png"
            });


            const questao9_84 = await Questao.create({
                enunciado: `
                Analise a CHARGE e, em seguida, leia o POEMA de Bráulio Bessa para responder a questão
                
                POEMA 
                FOME – BRÁULIO BESSA
                
                Eu procurei entender 
                qual a receita da fome, 
                quais são seus ingredientes, 
                a origem do seu nome. 
                Entender também por que 
                falta tanto o “de comê”, 
                se todo mundo é igual, 
                chega a dar um calafrio 
                saber que o prato vazio 
                é o prato principal.
                
                Do que é que a fome é feita 
                se não tem gosto nem cor 
                não cheira nem fede a nada 
                e o nada é seu sabor. 
                Qual o endereço dela, 
                se ela tá lá na favela 
                ou nas brenhas do sertão?

                É companheira da morte 
                mesmo assim não é mais forte 
                que um pedaço de pão.
                
                Que rainha estranha é essa 
                que só reina na miséria, 
                que entra em milhões de lares 
                sem sorrir, com a cara séria, 
                que provoca dor e medo 
                e sem encostar um dedo 
                causa em nós tantas feridas. 
                A maior ladra do mundo 
                que nesse exato segundo 
                roubou mais algumas vidas.
                
                Continuei sem saber 
                do que é que a fome é feita, 
                mas vi que a desigualdade 
                deixa ela satisfeita. 
                Foi aí que eu percebi: 
                por isso que eu não a vi 
                olhei pro lugar errado 
                ela tá em outro canto 
                entendi que a dor e o pranto 
                eram só seu resultado.
                
                Achei seus ingredientes 
                na origem da receita, 
                no egoísmo do homem, 
                na partilha que é malfeita. 
                E mexendo um caldeirão 
                eu vi a corrupção 
                cozinhando a tal da fome, 
                temperando com vaidade, 
                misturando com maldade 
                pro pobre que lhe consome.
                
                Acrescentou na receita 
                notas superfaturadas, 
                um quilo de desemprego, 
                trinta verbas desviadas, 
                rebolou no caldeirão 
                vinte gramas de inflação 
                e trinta escolas fechadas.
                
                Sendo assim, se a fome é feita 
                de tudo que é do mal, 
                é consertando a origem 
                que a gente muda o final. 
                Fiz uma conta, ligeiro: 
                se juntar todo o dinheiro 
                dessa tal corrupção, 
                mata a fome em todo canto 
                e ainda sobra outro tanto 
                pra saúde e educação.

                 O eu lírico do poema “Fome” procura enten
                der quais são os ingredientes para a receita da 
                fome que assola uma parte da população bra
                sileira. Assinale a alternativa que cita alguns 
                desses ingredientes:
                `,
    
                opcao1: `O eu lírico afirma que sente um calafrio ao 
                        saber que o prato principal de muitas pes
                        soas é o prato vazio.`,
                opcao2: `A receita da fome é companheira da morte, 
                        mas não é mais forte do que um pedaço de 
                        pão.`,
                opcao3: `Faz parte da receita da fome escolas fecha
                        das, egoísmo do ser humano e a corrupção.`,
                opcao4: `A dor e o pranto são os principais ingredien
                        tes para a receita da fome.`,
                opcao5: `Dentre os ingredientes citados, a miséria 
                        torna a fome a rainha de milhões de lares 
                        brasileiros provocando dor e medo.`,
                respostaCorreta: 'C',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova842022.id,
                ordem: 9,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova2-78910.png"
            });


            const questao10_84 = await Questao.create({
                enunciado: `
                Analise a CHARGE e, em seguida, leia o POEMA de Bráulio Bessa para responder a questão
                
                POEMA 
                FOME – BRÁULIO BESSA
                
                Eu procurei entender 
                qual a receita da fome, 
                quais são seus ingredientes, 
                a origem do seu nome. 
                Entender também por que 
                falta tanto o “de comê”, 
                se todo mundo é igual, 
                chega a dar um calafrio 
                saber que o prato vazio 
                é o prato principal.
                
                Do que é que a fome é feita 
                se não tem gosto nem cor 
                não cheira nem fede a nada 
                e o nada é seu sabor. 
                Qual o endereço dela, 
                se ela tá lá na favela 
                ou nas brenhas do sertão?

                É companheira da morte 
                mesmo assim não é mais forte 
                que um pedaço de pão.
                
                Que rainha estranha é essa 
                que só reina na miséria, 
                que entra em milhões de lares 
                sem sorrir, com a cara séria, 
                que provoca dor e medo 
                e sem encostar um dedo 
                causa em nós tantas feridas. 
                A maior ladra do mundo 
                que nesse exato segundo 
                roubou mais algumas vidas.
                
                Continuei sem saber 
                do que é que a fome é feita, 
                mas vi que a desigualdade 
                deixa ela satisfeita. 
                Foi aí que eu percebi: 
                por isso que eu não a vi 
                olhei pro lugar errado 
                ela tá em outro canto 
                entendi que a dor e o pranto 
                eram só seu resultado.
                
                Achei seus ingredientes 
                na origem da receita, 
                no egoísmo do homem, 
                na partilha que é malfeita. 
                E mexendo um caldeirão 
                eu vi a corrupção 
                cozinhando a tal da fome, 
                temperando com vaidade, 
                misturando com maldade 
                pro pobre que lhe consome.
                
                Acrescentou na receita 
                notas superfaturadas, 
                um quilo de desemprego, 
                trinta verbas desviadas, 
                rebolou no caldeirão 
                vinte gramas de inflação 
                e trinta escolas fechadas.
                
                Sendo assim, se a fome é feita 
                de tudo que é do mal, 
                é consertando a origem 
                que a gente muda o final. 
                Fiz uma conta, ligeiro: 
                se juntar todo o dinheiro 
                dessa tal corrupção, 
                mata a fome em todo canto 
                e ainda sobra outro tanto 
                pra saúde e educação.

                 No poema de Bráulio Bessa há várias metá
                foras, isto é, “o emprego de uma palavra com 
                sentido diferente do seu sentido usual, base
                ado em uma comparação implícita (subenten
                dida) entre características comuns a dois ele
                mentos” (FERREIRA, 2014, p. 68). Analise em 
                quais dos versos há exemplos de metáforas 
                em relação à fome e, em seguida, assinale a 
                alternativa correta. 
                I – “Chega a dar um calafrio/ saber que o prato 
                vazio/ é o prato principal.”
                II – “Que rainha estranha é essa/ que só reina 
                na miséria.”
                III – “Eu procurei entender/ qual a receita da 
                fome,/ quais são seus ingredientes,/ a origem 
                do seu nome.”
                IV – “É companheira da morte/ mesmo assim 
                não é mais forte/ que um pedaço de pão.”
                V – “A maior ladra do mundo/ que nesse exato 
                segundo/ roubou mais algumas vidas.”
                `,
    
                opcao1: `I, II e IV.`,
                opcao2: `II, IV e V.`,
                opcao3: `II, III e V.`,
                opcao4: `I, III e IV.`,
                opcao5: `III, IV e V.`,
                respostaCorreta: 'B',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova842022.id,
                ordem: 10,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova2-78910.png"
            });


            const questao11_84 = await Questao.create({
                enunciado: `
                Após ler e comparar as duas manchetes a 
                seguir, analise as afirmativas abaixo:

                TEXTO I
                ES registra maior percentual da popu
                lação em segurança alimentar
                
                Pode melhorar: verba para redução da 
                extrema pobreza em 2021 equivaleu a 
                22% dos subsídios dados à Suzano

                 TEXTO II
                ES é o 2º Estado com menor percen
                tual de famílias com fome
                
                Parcela é bem menor que a média 
                nacional, de 15,5%. No Estado, 8,2% das 
                pessoas passam fome. Nas casas com 
                crianças menores de 10 anos, 13,9% das 
                famílias não têm o que comer.

                 I – Tanto o texto I quanto o texto II tratam do 
                mesmo assunto que é a posição do estado do 
                Espírito Santo em relação ao mapa da fome no 
                Brasil.

                 II – Embora as duas manchetes tenham sido 
                publicadas no mesmo dia, o texto I afirma que 
                a população capixaba não passa fome pelo fato 
                de ter reduzido a extrema pobreza em 2021, 
                diferentemente da abordagem do texto II. 
                
                III – Podemos perceber que o texto II possui 
                uma linguagem mais clara e objetiva para a 
                população, o que está nítido na manchete 
                por utilizar a expressão “menor percentual de 
                famílias com fome”, em vez do termo “segu
                rança alimentar”, bem como apresenta alguns 
                dados da pesquisa, comparando com a média 
                nacional.
                
                IV – A manchete do texto I possui maior clareza 
                da informação, se comparada com a do texto 
                II, ao deixar evidente que o estado reduziu os 
                índices de extrema pobreza, mas ainda pode 
                melhorar para extinguir de vez a fome no ES. 
                
                V – O texto II deixa claro para o leitor que, ape
                sar da redução da fome no estado, ainda há 
                famílias capixabas passando fome, inclusive 
                naquelas em que há crianças menores de 10 
                anos.
                
                Agora, assinale a alternativa que contém as 
                afirmações verdadeiras sobre as manchetes:
                `,
    
                opcao1: `I, III e V.`,
                opcao2: `I, II  e V.`,
                opcao3: `III, IV e V.`,
                opcao4: `I, II e IV.`,
                opcao5: `II, III e V.`,
                respostaCorreta: 'A',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova842022.id,
                ordem: 11,
            });


            const questao12_84 = await Questao.create({
                enunciado: `
                 A unidade de medida usada no armazena
                mento e transmissão de informações na com
                putação é o Byte, que equivale a 8 bits, sendo 
                este a base do sistema binário. O sistema se 
                baseia nas potências de 2. Assim, de acordo 
                com a tabela a seguir, um pen drive com uma 
                memória de 10 KB, pode armazenar 10 x 1.024 
                Bytes = 10.240 Bytes = 81.920 bits.

                 Se uma rede de internet pode transmitir 2.048 
                Kbps (2.048 kilobits por segundo), qual a velo
                cidade em KBps (kilobytes por segundo) dessa 
                rede?
                `,
    
                opcao1: `512`,
                opcao2: `256`,
                opcao3: `128`,
                opcao4: `32`,
                opcao5: `2`,
                respostaCorreta: 'B',
                disciplinaId: matematica.id,
                categoriaId: matematicaAplicada.id,
                provaId: prova842022.id,
                ordem: 12,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova2-12.png"
            });


            const questao13_84 = await Questao.create({
                enunciado: `
                  Para realização de uma visita técnica com as 3 
                turmas de 2º ano, do Curso Técnico de Mecâ
                nica de um dos campi do Ifes, os professores 
                das disciplinas envolvidas deveriam dividir as 
                turmas em grupos com a mesma quantidade 
                de alunos, de maneira que cada grupo tivesse 
                a maior quantidade possível, respeitando o 
                limite de 10 alunos, previsto pelas normas de 
                segurança da empresa. Sabendo que a quanti
                dade de estudantes de cada turma é de 48, 36 
                e 42, pode-se afirmar que o número de grupos 
                formados é igual a:
                `,
    
                opcao1: `6`,
                opcao2: `12`,
                opcao3: `15`,
                opcao4: `18`,
                opcao5: `21`,
                respostaCorreta: 'E',
                disciplinaId: matematica.id,
                categoriaId: mdc.id,
                provaId: prova842022.id,
                ordem: 13,
            });


            const questao14_84 = await Questao.create({
                enunciado: `
                Supondo que a malha quadriculada a seguir é 
                formada por quadrados de lados iguais a 2 cm, 
                qual a área ocupada pela flor nesta malha?
                `,
                opcao1: `38 cm²`,
                opcao2: `72 cm²`,
                opcao3: `76 cm²`,
                opcao4: `48 cm²`,
                opcao5: `36 cm²`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: geometriaPlana.id,
                provaId: prova842022.id,
                ordem: 14,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova2-14.png"
            });


            const questao15_84 = await Questao.create({
                enunciado: `
                No último interclasse realizado em um dos 
                campi do Ifes, o time de futebol de salão do 1º 
                Ano A, de um dos Cursos Técnicos Integrados 
                ao Ensino Médio, fez uma campanha emblemá
                tica de 10 jogos, somando 26 pontos e tornan
                do-se campeão invicto do torneio nessa moda
                lidade. Sabendo que, no caso de vitória, o time 
                soma 3 pontos; de empate, soma 1 ponto e, de 
                derrota, nenhum ponto, podemos afirmar que 
                o número de empates nessa campanha foi de:
                `,
                opcao1: `8`,
                opcao2: `6`,
                opcao3: `4`,
                opcao4: `2`,
                opcao5: `1`,
                respostaCorreta: 'D',
                disciplinaId: matematica.id,
                categoriaId: sistemaEquacoes.id,
                provaId: prova842022.id,
                ordem: 15,
            });


            const questao16_84 = await Questao.create({
                enunciado: `
                Para se montar a letra E da figura 1 a seguir, 
                que possui dimensões 5 cm de altura, 3 cm 
                de largura e 1 cm de espessura, foram usados 
                alguns blocos cúbicos de lados medindo 1 cm, 
                como o mostrado na figura 2.

                Sabendo que cada bloco da figura 2 tem 1 cm³ 
                de volume, qual o volume total da letra E, em 
                cm³, após sua montagem?
                `,
                opcao1: `10 cm³`,
                opcao2: `11 cm³`,
                opcao3: `12 cm³`,
                opcao4: `13 cm³`,
                opcao5: `14 cm³`,
                respostaCorreta: 'B',
                disciplinaId: matematica.id,
                categoriaId: geometriaEspacial.id,
                provaId: prova842022.id,
                ordem: 16,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova2-16.png"
            });


            const questao17_84 = await Questao.create({
                enunciado: `
                Uma pessoa foi ao shopping para comprar 
                uma TV que estava em promoção. Ao chegar 
                na loja, o vendedor informou que havia duas 
                opções para pagamento dessa mercadoria: à 
                vista, com desconto de 5% sobre o valor anun
                ciado, ou a prazo, 30 dias após a efetivação da 
                compra, com um acréscimo de 10% sobre o 
                valor anunciado. Nessas condições, sabendo 
                que, se optar pela compra a prazo, o consumi
                dor terá que desembolsar o valor de R$ 3.850; 
                se for pagar à vista, deverá desembolsar:
                `,
                opcao1: `R$ 3.500`,
                opcao2: `R$ 3.450`,
                opcao3: `R$ 3.325`,
                opcao4: `R$ 3.250`,
                opcao5: `R$ 3.150`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: matematicaFinanceira.id,
                provaId: prova842022.id,
                ordem: 17,
            });


            const questao18_84 = await Questao.create({
                enunciado: `
                 O Sr. Paulo irá dividir a sua coleção de 4.200 
                moedas entre os seus três filhos, de tal forma 
                que as quantidades entregues a cada filho 
                sejam diretamente proporcionais às médias 
                aritméticas das notas das provas deles na 
                disciplina de Matemática, no ano de 2022. A 
                tabela a seguir mostra as notas dos filhos até 
                agora em Matemática.

                Qual a quantidade de moedas cabe a cada um 
                deles?
                `,
                opcao1: `João = 1.400, Marcelo = 1.200 e Vitor = 1.600.`,
                opcao2: `João = 1.300, Marcelo = 1.100 e Vitor = 1.800.`,
                opcao3: `João = 1.450, Marcelo = 1.200 e Vitor = 1.550.`,
                opcao4: `João = 1.350, Marcelo = 1.250 e Vitor = 1.600.`,
                opcao5: `João = 1.380, Marcelo = 1.240 e Vitor = 1.580.`,
                respostaCorreta: 'A',
                disciplinaId: matematica.id,
                categoriaId: divisaoProporcional.id,
                provaId: prova842022.id,
                ordem: 18,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova2-18.png"
            });


            const questao19_84 = await Questao.create({
                enunciado: `
                A figura a seguir mostra os dados da variação do PIB (Produto Interno Bruto) do Brasil desde 
                2016, medidos trimestralmente, segundo pesquisa feita pelo IBGE (Instituto Brasileiro de Geo
                grafia e Estatística).

                Dessa forma, analisando apenas os dados dos 
                anos de 2020 a 2022, a diferença percentual 
                entre o maior e o menor valor medido nesse 
                período é igual a:
                `,
                opcao1: `7,9%`,
                opcao2: `8,3%`,
                opcao3: `7,7%`,
                opcao4: `-1%`,
                opcao5: `17%`,
                respostaCorreta: 'E',
                disciplinaId: matematica.id,
                categoriaId: analiseGraficoPorcentagem.id,
                provaId: prova842022.id,
                ordem: 19,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova2-18.png"
            });


            const questao20_84 = await Questao.create({
                enunciado: `
                Em um triângulo ABC, o lado AB mede 6 cm, o 
                lado BC mede 9 cm, AB = 3 AM, BC = 3 CN e o 
                segmento MN é paralelo ao lado AC. Sabendo 
                que o incentro é o ponto de encontro das 
                bissetrizes internas desse triângulo e conside
                rando que esse ponto pertence ao segmento 
                MN, podemos afirmar que a medida do seg
                mento MN é, em centímetros, igual a:
                `,
                opcao1: `4`,
                opcao2: `5`,
                opcao3: `7`,
                opcao4: `9`,
                opcao5: `10`,
                respostaCorreta: 'B',
                disciplinaId: matematica.id,
                categoriaId: geometriaPlana.id,
                provaId: prova842022.id,
                ordem: 20,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova2-20.png"
            });


            const questao21_84 = await Questao.create({
                enunciado: `
                O Sr. Paulo comprou um sítio e pretende cercar, 
                com palmeiras imperiais, o quintal em volta da 
                casa e todo o caminho desde a porteira até a 
                casa, representados por linhas pontilhadas na 
                figura a seguir. Ele pretende começar a plan
                tar da porteira, com palmeiras espaçadas de 
                5 metros em 5 metros, ao longo do caminho 
                e em volta do quintal. Na junção do caminho 
                com o quintal, trecho AB, ele deixará livre o 
                espaço para possibilitar a passagem. Sabendo 
                que o caminho tem dimensões de 5 metros 
                por 50 metros e que o quintal tem dimensões 
                de 40 metros por 35 metros, quantas mudas 
                de palmeiras, no mínimo, ele precisará plantar 
                para cobrir todo o perímetro pedido?
                `,
                opcao1: `56`,
                opcao2: `54`,
                opcao3: `50`,
                opcao4: `48`,
                opcao5: `44`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: geometriaPlana.id,
                provaId: prova842022.id,
                ordem: 21,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova2-21.png"
            });


            const questao22_84 = await Questao.create({
                enunciado: `
                 O carro-chefe das vendas de uma lanchonete 
                é o hambúrguer artesanal “Brutão”, que é 
                vendido por R$ 20,00. A esse valor, são ven
                didas 200 unidades em uma noite. Devido ao 
                aumento nos preços dos produtos utilizados 
                em sua fabricação, a lanchonete pretende 
                reajustar o preço do “Brutão” e, para tanto, 
                após realizar uma pesquisa com seus clientes, 
                percebeu que a cada reajuste de R$ 0,40 no 
                valor, a lanchonete deixa de vender 2 hambúr
                gueres. Mantida a proposta de reajuste, qual 
                deverá ser o valor do produto que fará com 
                que a arrecadação com a sua venda seja a 
                maior possível?
                `,
                opcao1: `R$ 30,00`,
                opcao2: `R$ 27,50`,
                opcao3: `R$ 25,00`,
                opcao4: `R$ 23,50`,
                opcao5: `R$ 22,50`,
                respostaCorreta: ' A',
                disciplinaId: matematica.id,
                categoriaId: matematicaFinanceira.id,
                provaId: prova842022.id,
                ordem: 22,
            });


            const questao23_84 = await Questao.create({
                enunciado: `
                 O Reino Plantae apresenta elevada diversidade 
                de plantas, com capacidade de realização da 
                fotossíntese, a partir da absorção do gás car
                bônico da atmosfera, produção de carboidra
                tos e liberação de oxigênio. Com relação à 
                estrutura e composição das células vegetais, 
                marque a alternativa correta:
                `,
                opcao1: `As células vegetais são procariontes, ou seja, 
                        seu material genético não está separado do 
                        citoplasma por uma membrana (carioteca) 
                        e em seus cloroplastos há somente um pig
                        mento chamado glicose.`,
                opcao2: `As células vegetais são eucariontes, ou seja, 
                        seu material genético não está separado do 
                        citoplasma por uma membrana (carioteca) 
                        e sua parede celular é fina e interna à mem
                        brana plasmática.`,
                opcao3: `As células vegetais são eucariontes, ou seja, 
                        seu material genético está separado do 
                        citoplasma por uma membrana (carioteca) 
                        e apresentam cloroplastos, que contêm clo
                        rofila, para realização da fotossíntese.`,
                opcao4: `As células vegetais apresentam vacúolos 
                        que armazenam somente clorofila para 
                        realização da fotossíntese.`,
                opcao5: `As células vegetais, assim como as célu
                        las animais, possuem parede celular, uma 
                        membrana externa à membrana plasmática.`,
                respostaCorreta: 'C',
                disciplinaId: ciencia.id,
                categoriaId: cienciaBiologica.id,
                provaId: prova842022.id,
                ordem: 23,
            });


            const questao24_84 = await Questao.create({
                enunciado: `
                  As formas utilizadas por um país para 
                gerar a sua energia são fatores importan
                tes para a sua sustentabilidade ambiental. 
                No Brasil, a matriz energética apresenta 
                maior contribuição de fontes renováveis 
                de energia em comparação com a matriz 
                energética mundial. Em 2019, as fontes 
                de energia renováveis no Brasil represen
                tavam 46% da matriz energética do país. 
                No mundo, essas fontes renováveis tota
                lizavam 14%. A matriz energética inclui o 
                conjunto de fontes de energia disponíveis 
                para movimentar os carros, preparar a 
                comida no fogão e gerar eletricidade, por 
                exemplo.

                Com base nos conhecimentos sobre fontes 
                renováveis e não renováveis de energia, mar
                que a alternativa correta.
                `,
                opcao1: `A energia solar não pode ser aproveitada no 
                        Brasil pois o clima do país não favorece seu 
                        aproveitamento.`,
                opcao2: `A energia eólica é considerada uma fonte 
                        renovável de energia uma vez que utiliza a 
                        força dos ventos como recurso natural.`,
                opcao3: `Uma das vantagens da geração de energia 
                        pelas hidrelétricas diz respeito ao fato das 
                        mudanças climáticas não interferirem na 
                        sua produção.`,
                opcao4: `As fontes não renováveis de energia, como 
                        os combustíveis fósseis, que também são 
                        utilizadas no Brasil, geram poluição atmos
                        férica comparativamente menor do que a 
                        das fontes renováveis.`,
                opcao5: `Derivados do petróleo, como a gasolina, 
                        são recursos energéticos inesgotáveis e, 
                        portanto, não trazem preocupações na sua 
                        utilização.`,
                respostaCorreta: 'B',
                disciplinaId: ciencia.id,
                categoriaId: cienciaAmbiental.id,
                provaId: prova842022.id,
                ordem: 24,
            });


            const questao25_84 = await Questao.create({
                enunciado: `
                Teve início em agosto deste ano, em todo 
                o Brasil, a Campanha Nacional de Vacina
                ção contra a Poliomielite (paralisia infan
                til) com objetivo de manter a eliminação 
                da doença, que teve seu último registro 
                no país em 1989. Essa doença contagiosa 
                causada por um vírus pode afetar os 
                neurônios provocando, em casos graves, 
                a paralisia muscular, comprometendo o 
                movimento dos membros inferiores. 

                Símbolo de uma das etapas do esquema vaci
                nal da poliomielite: vacina oral (gotinha).
                `,
                opcao1: `A incapacidade de o organismo humano 
                        produzir anticorpos contra microrganismos 
                        justifica a necessidade de se produzir vaci
                        nas e estimular as campanhas.`,
                opcao2: `A vacinação contra a paralisia infantil é 
                        necessária, pois essa doença é uma epide
                        mia no Brasil.`,
                opcao3: `As vacinas são uma das estratégias mais efi
                        cazes de curar doenças como  poliomielite, 
                        sarampo e COVID-19.`,
                opcao4: `O mecanismo de atuação das vacinas ocorre 
                        pelo estímulo da produção de anticorpos, 
                        protegendo o indivíduo e toda a comuni
                        dade, com a redução na propagação do 
                        microrganismo.`,
                opcao5: `Os antibióticos são muito eficazes no 
                        tratamento de doenças virais, como a 
                        poliomielite.`,
                respostaCorreta: 'D',
                disciplinaId: ciencia.id,
                categoriaId: saudeImunologia.id,
                provaId: prova842022.id,
                ordem: 25,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova2-25.png"
            });


            const questao26_84 = await Questao.create({
                enunciado: `
                 Nos organismos multicelulares as células 
                podem se agrupar em tecidos e estes, por sua 
                vez, podem formam órgãos que, se trabalha
                rem em conjunto e de forma coordenada para 
                desempenhar funções específicas, darão ori
                gem ao que denominamos de sistemas, como 
                o respiratório, o circulatório e o nervoso. 
                
                Sobre os tecidos e os sistemas presentes nos 
                seres humanos, assinale a alternativa correta. 
                `,
                opcao1: `A bile é uma substância produzida no 
                        estômago que contribui para a digestão 
                        dos lipídeos.`,
                opcao2: `As células musculares liberam neuro
                        transmissores que são responsáveis por 
                        estimular a contração ou relaxamento 
                        dos músculos.`,
                opcao3: `O olfato é resultado direto da interação de 
                        certas substâncias com as células das fos
                        sas nasais, sem necessidade de envio de 
                        mensagens ao cérebro.`,
                opcao4: `O coração é um órgão dividido em oito 
                        câmaras e que tem a função de impulsionar 
                        o sangue para todo o corpo por meio dos 
                        vasos sanguíneos.`,
                opcao5: `É nos alvéolos pulmonares que ocorre a 
                        passagem do oxigênio para dentro dos 
                        vasos sanguíneos, de modo que esse gás 
                        fique disponível para a respiração celular e 
                        a produção de energia.`,
                respostaCorreta: 'E',
                disciplinaId: ciencia.id,
                categoriaId: biologia.id,
                provaId: prova842022.id,
                ordem: 26,
            });


            const questao27_84 = await Questao.create({
                enunciado: `
                 No dia 22 de setembro de 2022 o Parque 
                Estadual Paulo César Vinha, uma unidade 
                de conservação de proteção integral, 
                localizada no litoral sul do estado do Espí
                rito Santo, pegou fogo atingindo uma das 
                maiores proporções de área destruída, 
                comparada às queimadas sofridas ante
                riormente no mesmo local. Estima-se que 
                600 hectares tenham sido queimados, 
                resultando na perda do patrimônio bioló
                gico de fauna, flora e microbiota de uma 
                área de restinga. 

                Considerando a importância das unidades de 
                conservação para manutenção da biodiversi
                dade, pode-se afirmar que: 
                `,
                opcao1: `A restinga se distribui em regiões mais pro
                        tegidas das porções continentais, por exem
                        plo no estado de Tocantins, contribuindo 
                        para proteção das margens dos rios.`,
                opcao2: `Impactos como as queimadas registra
                        das no Parque Estadual Paulo César Vinha 
                        ameaçam a existência dos seres vivos que 
                        lá habitam, principalmente das espécies 
                        endêmicas.`,
                opcao3: `Embora boa parte da vegetação do Parque 
                        tenha sido queimada, o ciclo hidrológico 
                        não será afetado de nenhuma maneira, 
                        pois plantas rasteiras e de pequeno porte, 
                        típicas da restinga, não fazem evapotrans
                        piração.`,
                opcao4: `Considerando os níveis tróficos componen
                        tes das diversas cadeias alimentares exis
                        tentes na área do parque, apenas os produ
                        tores foram afetados.`,
                opcao5: `Considerando os níveis tróficos componen
                        tes das diversas cadeias alimentares exis
                        tentes na área do parque, nenhum nível 
                        trófico será afetado pelo incêndio.`,
                respostaCorreta: 'B',
                disciplinaId: ciencia.id,
                categoriaId: biologia.id,
                provaId: prova842022.id,
                ordem: 27,
            });


            const questao28_84 = await Questao.create({
                enunciado: `
                 O saneamento básico engloba, entre outros 
                serviços, o tratamento de água, a coleta e 
                tratamento do esgoto e dos resíduos sólidos, 
                dessa forma, promovendo a saúde da popula
                ção, evitando muitas doenças e preservando o 
                ambiente.

                Assinale a alternativa que apresenta apenas 
                doenças cuja via principal de transmissão ao 
                ser humano é por água contaminada.
                `,
                opcao1: `Leptospirose, cólera e amebíase.`,
                opcao2: `Febre amarela, leishmaniose e cólera.`,
                opcao3: `Dengue, febre maculosa e malária.`,
                opcao4: `Febre maculosa, leptospirose e malária.`,
                opcao5: `Sífilis, amebíase e esquistossomose.`,
                respostaCorreta: 'A',
                disciplinaId: ciencia.id,
                categoriaId: saudeEpidemiologia.id,
                provaId: prova842022.id,
                ordem: 28,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova2-28.png"
            });


            const questao29_84 = await Questao.create({
                enunciado: `
                Chamamos de Ilustração ou Iluminismo 
                as ideias que se desenvolveram na Europa 
                nos séculos XVII e XVIII. Tais ideias carac
                terizam-se pela procura de uma explica
                ção racional para os fenômenos naturais 
                e sociais e pela noção de progresso, que 
                marcaria a vida humana. Seus defensores 
                rejeitavam tradições, atacavam determi
                nadas injustiças e posicionavam-se con
                tra a intolerância religiosa e os privilégios 
                típicos da sociedade da época.” (História: 
                Escola e democracia/ Flavio de Campos, 
                Regina Claro, Mirian Dolhnicoff. - 1ª edição - São Paulo: Moderna, 2018. 8º ano. p. 30.).

                Sobre o Iluminismo, assinale a alternativa correta:
                `,
                opcao1: `Por tomarem a razão como base de seu 
                        pensamento, os iluministas rejeitavam a 
                        ideia da existência de Deus.`,
                opcao2: `A defesa da liberdade humana era um dos 
                        principais pontos em comum entre os filó
                        sofos iluministas; por isso defendiam a abo
                        lição do Estado, considerado fonte de injus
                        tiça e opressão.`,
                opcao3: `Para o Barão de Montesquieu, a separação 
                        e a independência entre os poderes do 
                        Estado (executivo, legislativo e judiciário) 
                        era uma garantia para liberdade.`,
                opcao4: `Movimento exclusivamente europeu, o ilu
                        minismo não teve influência em eventos 
                        ocorridos fora da Europa.`,
                opcao5: `O Iluminismo foi um movimento eminente
                        mente intelectual e cultural, portanto seus 
                        pensadores não refletiram sobre outras 
                        dimensões da sociedade, como a economia.`,
                respostaCorreta: 'C',
                disciplinaId: historia.id,
                categoriaId: historiaIluminismo.id,
                provaId: prova842022.id,
                ordem: 29,
            });


            const questao30_84 = await Questao.create({
                enunciado: `
                No processo de comemoração do bicentenário 
                da Independência do Brasil, foi trazido de Por
                tugal o coração preservado de Dom Pedro I, 
                que governou o Brasil de 1822 a 1831. A men
                cionada parte do corpo humano se encontrava 
                no país europeu desde 1834, pois foi onde o 
                referido personagem veio a falecer, após abdi
                car ao trono brasileiro. 
                
                Nesses termos, assinale a alternativa que 
                melhor explica o processo político da abdica
                ção de D. Pedro I:
                `,
                opcao1: `A abdicação de D. Pedro I diz respeito ao 
                        seu desinteresse em continuar imperador 
                        no Brasil, pois cobiçava unicamente o trono 
                        de sua terra natal, pela qual nutria forte 
                        sentimento de saudade, o que explica a 
                        preservação de seu coração naquele lugar.`,
                opcao2: `A perda do território da província da Cis
                        platina em guerra gerou enorme descon
                        tentamento popular, e alimentou a crença 
                        na incapacidade de D. Pedro I de manter o 
                        país unificado, devido ao seu desinteresse 
                        em manter a região vinculada ao império.`,
                opcao3: `O sentimento antilusitano das elites políti
                        cas, desejosas de um governante brasileiro, 
                        cultivado desde a negativa em apoiar o 
                        processo de independência liderado por D. 
                        Pedro I, foi o principal responsável pela sua 
                        abdicação.`,
                opcao4: `Os problemas de saúde do imperador o 
                        levaram a abdicar ao trono em favor do seu 
                        filho, uma vez que passou a ser pressio
                        nado pelo Exército, desejoso de inaugurar 
                        uma ditadura militar no Brasil.`,
                opcao5: `O envolvimento de D. Pedro I na crise suces
                        sória portuguesa ampliou o descontenta
                        mento de importantes setores das elites 
                        políticas e econômicas brasileiras, receosas 
                        de uma possível reunificação com Portugal.`,
                respostaCorreta: 'E',
                disciplinaId: historia.id,
                categoriaId: historiaBrasil.id,
                provaId: prova842022.id,
                ordem: 30,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova2-30.png"
            });


            const questao31_84 = await Questao.create({
                enunciado: `
                “No final do século XIX, os governos dos 
                países industrializados da Europa, do 
                Japão e dos Estados Unidos passaram 
                a disputar o domínio sobre regiões da 
                África e da Ásia, onde viviam bilhões de 
                pessoas. Essa política de dominação ficou 
                conhecida como imperialismo.” (COTRIM, 
                Gilberto; RODRIGUES, Jaime. Historiar, 8º 
                ano: ensino fundamental, anos finais - 3º 
                edição - São Paulo: Saraiva, 2018. p. 214)

                 Sobre o Imperialismo, assinale a alternativa 
                verdadeira:
                `,
                opcao1: `Por responder a interesses econômicos das 
                        potências imperialistas (como o acesso a 
                        matérias primas, investimento de capital 
                        acumulado e exportação de produtos indus
                        trializados), a dominação imperialista deixou 
                        intocadas as culturas africanas e asiáticas.`,
                opcao2: `O imperialismo contribuiu para a redução 
                        das rivalidades entre as potências coloniais.`,
                opcao3: `Ideologicamente, o imperialismo foi susten
                        tado por ideias racistas e de superioridade 
                        cultural das populações brancas, que, por 
                        serem falsas, não tiveram respaldo na ciên
                        cia da época.`,
                opcao4: `O domínio imperialista deixou inalteradas 
                        as formas de produção e de consumo das 
                        economias locais da África e da Ásia.`,
                opcao5: `A dominação imperialista também se deu 
                        pelo deslocamento forçado de populações 
                        africanas e asiáticas, que foram divididas 
                        ou reunidas em territórios com fronteiras 
                        estabelecidas pelos impérios coloniais.`,
                respostaCorreta: 'E',
                disciplinaId: historia.id,
                categoriaId: imperialismo.id,
                provaId: prova842022.id,
                ordem: 31,
            });


            const questao32_84 = await Questao.create({
                enunciado: `
                Considerando os conhecimentos sobre a 
                República das Oligarquias, bem como as infor
                mações presentes na imagem abaixo, marque 
                a alternativa correta.
                `,
                opcao1: `Por meio do voto do cabresto, poderosos 
                        de uma determinada região conseguiam 
                        que candidatos por eles apoiados fossem 
                        votados por eleitores a eles submissos, em 
                        relação conhecida como coronelismo.`,
                opcao2: `A maioria dos eleitores era analfabeta, por
                        tanto, constantemente eles sofriam debo
                        che nos principais veículos de comunicação 
                        do período, tratados como burros por não 
                        terem estudado.`,
                opcao3: `Em regimes políticos oligárquicos, as mulhe
                        res eram representadas com um gorro na 
                        cabeça, para simbolizar a crença na sua 
                        total incapacidade política de participar das 
                        votações.`,
                opcao4: `Os coronéis eram os únicos cidadãos que 
                        poderiam votar, portanto, participar do 
                        jogo político oligárquico, e assim escolher 
                        os representantes da nação.`,
                opcao5: `Trata-se de uma campanha contra a par
                        ticipação dos estrangeiros na vida polí
                        tica brasileira, considerados “burros” pela 
                        imprensa, o que tornava o sistema político 
                        totalmente oligárquico.`,
                respostaCorreta: 'A',
                disciplinaId: historia.id,
                categoriaId: republicaOligarquias.id,
                provaId: prova842022.id,
                ordem: 32,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova2-32.png"
            });


            const questao33_84 = await Questao.create({
                enunciado: `
                “A Revolução de 1930 inaugurou um 
                novo período da história brasileira, com 
                a reorganização do regime republicano. 
                As oligarquias estaduais continuaram 
                participando do governo, mas foram 
                obrigadas a dividi-lo com outros seto
                res, principalmente industriais e gru
                pos urbanos. [...] Vitoriosa a revolução, 
                Getúlio Vargas assumiu a presidência 
                do país e dirigiu o processo de trans
                formação da economia e da sociedade 
                brasileiras.” (História: Escola e demo
                cracia/ Flavio de Campos, Regina Claro, 
                Mirian Dolhnicoff. - 1ª edição - São 
                Paulo: Moderna, 2018. 9º ano. p. 108.)

                Assinale a alternativa verdadeira sobre a Era 
                Vargas, período iniciado com Getúlio Vargas 
                assumindo a presidência da república após a 
                Revolução de 1930.
                `,
                opcao1: `Na Era Vargas (1930 – 1945) configurou-se 
                        uma estratégia que predominaria até a 
                        ditadura militar (1964-1985): a promoção 
                        do desenvolvimento econômico brasileiro 
                        por meio da criação de empresas estatais 
                        financiadas pelo capital estrangeiro.`,
                opcao2: `A prioridade concedida às atividades indus
                        triais na Era Vargas (1930 – 1945) signifi
                        cou o fim do apoio estatal à agricultura de 
                        exportação.`,
                opcao3: `Uma importante mudança ocorrida na Era 
                        Vargas (1930 – 1945) foi a descentralização 
                        do poder político, por meio do aumento da 
                        autonomia desfrutada por grupos domi
                        nantes nos Estados brasileiros.`,
                opcao4: `Derrotados na Revolta Constitucionalista 
                        de 1932, os paulistas não tiveram suas  rei
                        vindicações atendidas por Getúlio Vargas, 
                        como a nomeação de um interventor pau
                        lista para o Estado de São Paulo.`,
                opcao5: `No ano de 1932 foi promulgado no Brasil 
                        um novo código eleitoral que, entre outras 
                        medidas, proibia o voto feminino.`,
                respostaCorreta: 'A',
                disciplinaId: historia.id,
                categoriaId: eraVargas.id,
                provaId: prova842022.id,
                ordem: 33,
            });


            const questao34_84 = await Questao.create({
                enunciado: `
                “Nos tempos da Guerra Fria, o mundo 
                estava dividido em dois modos de vida: 
                o capitalista e o comunista. As tensões 
                entre Estados Unidos e União Sovié
                tica resultaram no medo de uma guerra 
                nuclear. O mundo conheceu o terror atô
                mico. Na cidade de Berlim, um muro divi
                diu não apenas a cidade, mas o mundo.” 
                (História.doc.: ensino fundamental, anos 
                finais. Ronaldo Vainfas [et.al.] – 2.ed.- São 
                Paulo: Saraiva, 2018, p.135.)

                Sobre esse período, podemos afirmar que:
                `,
                opcao1: `Alguns países ficaram divididos por causa 
                        da bipolarização do mundo, caso da Ale
                        manha, da Itália e do Japão. Isso ocorreu 
                        porque uma parcela da população desses 
                        países queria ficar sob influência da União 
                        Soviética e a outra, sob influência dos Esta
                        dos Unidos.`,
                opcao2: `Áreas e setores distantes da geopolítica e 
                        do campo militar, tais como o esporte, con
                        seguiram ficar imunes às disputas ideológi
                        cas entre as duas superpotências mundiais, 
                        pois a Guerra Fria não impediu a realização 
                        de copas do mundo e olimpíadas.`,
                opcao3: `Produziu uma corrida armamentista, levando 
                        ao confronto direto entre as duas principais 
                        superpotências mundiais em episódios como 
                        a Guerra da Coreia e Guerra do Vietnã, o que 
                        levou a Guerra Fria a ser chamada de “3ª 
                        Guerra Mundial”.`,
                opcao4: `A formação da OTAN e do Pacto de Varsó
                        via, dois blocos geoeconômicos, contribuiu 
                        ainda mais para o isolamento do bloco 
                        socialista perante o bloco capitalista, evi
                        tando conflitos de maiores proporções.`,
                opcao5: `Foi marcado por intenso debate político-i
                        deológico, entre os defensores da proprie
                        dade privada e do livre mercado, de um 
                        lado, e os defensores de forte presença do 
                        Estado na vida do cidadão, sob o pretexto 
                        de garantir o igualitarismo social, do outro.`,
                respostaCorreta: 'E',
                disciplinaId: historia.id,
                categoriaId: guerraFria.id,
                provaId: prova842022.id,
                ordem: 34,
            });


            const questao35_84 = await Questao.create({
                enunciado: `
                As paisagens do campo (rurais) apresentam 
                características diferentes das paisagens da 
                cidade (urbanas). Em relação às características 
                das paisagens do campo, assinale a alternativa 
                CORRETA:
                `,
                opcao1: `Predominam atividades econômicas do setor 
                        terciário, ou seja, comércio e serviços.`,
                opcao2: `Há o predomínio de atividades industriais.`,
                opcao3: `São caracterizadas pela verticalização, ou 
                        seja, a construção de edifícios cada vez 
                        mais altos para abrigar a população em 
                        crescimento.`,
                opcao4: `As paisagens rurais agrícolas não são influen
                        ciadas por elementos naturais, como o relevo, 
                        o solo e o clima.`,
                opcao5: `Formam os espaços utilizados pelos seres 
                        humanos para, sobretudo, desenvolver 
                        as atividades econômicas do setor primá
                        rio da economia: agricultura, pecuária e 
                        extrativismo.`,
                respostaCorreta: 'E',
                disciplinaId: geografia.id,
                categoriaId: paisagensRurais.id,
                provaId: prova842022.id,
                ordem: 35,
            });


            const questao36_84 = await Questao.create({
                enunciado: `
                O desenvolvimento do turismo como atividade 
                econômica é uma alternativa à necessidade 
                de criar empregos, reduzir as desigualdades 
                regionais e distribuir melhor a renda em um 
                país. Em 2015, os países mais visitados do 
                mundo eram França, Estados Unidos, Espa
                nha, China e Itália. Assinale a alternativa que 
                corresponde a uma causa de crescimento do 
                turismo:
                `,
                opcao1: `O aumento do poder de compra de algumas 
                        populações, que assim podem destinar 
                        uma parte cada vez maior de suas finanças 
                        a atividades de lazer e de cultura.`,
                opcao2: `Restrições à obtenção de vistos por parte de 
                        países receptores.`,
                opcao3: `A oferta limitada de atrativos turísticos.`,
                opcao4: `Dificuldade de obtenção de documentos de 
                        viagem, como passaporte.`,
                opcao5: `A oferta limitada de infraestrutura turística.`,
                respostaCorreta: 'A',
                disciplinaId: geografia.id,
                categoriaId: turismo.id,
                provaId: prova842022.id,
                ordem: 36,
            });


            const questao37_84 = await Questao.create({
                enunciado: `
                A implementação de um sistema global de 
                localização por satélite, o Beidou, a cons
                trução de uma estação espacial própria e os 
                investimentos no setor energético (destinados 
                a buscar soluções ambientais e a ampliar a 
                capacidade de energia considerada limpa e de 
                ponta) estão entre algumas das iniciativas de 
                um país que pretende ampliar sua influência 
                global. Esse país é:
                `,
                opcao1: `a Índia.`,
                opcao2: `a França.`,
                opcao3: `a Rússia.`,
                opcao4: `a China.`,
                opcao5: `a Austrália.`,
                respostaCorreta: 'D',
                disciplinaId: geografia.id,
                categoriaId: geopolitica.id,
                provaId: prova842022.id,
                ordem: 37,
            });

            const questao38_84 = await Questao.create({
                enunciado: `
                Os manguezais se caracterizam pelo equilíbrio 
                delicado e pela imensa importância ecológica. 
                No estado do Espírito Santo, eles contribuem 
                para dar vida a uma tradição secular, a fabrica
                ção da panela de barro, herança das culturas 
                indígenas tupi-guarani, que tem sido transmi
                tida por várias gerações. Entretanto, há déca
                das o manguezal vem sendo muito ameaçado, 
                quando não destruído. Assinale a alternativa 
                que traz um aspecto do manguezal:
                `,
                opcao1: `É fundamental para a reprodução e sobrevi
                        vência de animais marinhos.`,
                opcao2: `Não é afetado pelos processos de urbaniza
                        ção e especulação imobiliária.`,
                opcao3: `A espécie vegetal predominante é a Arau
                        cária.`,
                opcao4: `É ameaçado pela expansão da sojicultura.`,
                opcao5: `Não enfrenta riscos ambientais.`,
                respostaCorreta: 'A',
                disciplinaId: geografia.id,
                categoriaId: ecologia.id,
                provaId: prova842022.id,
                ordem: 38,
            });


            const questao39_84 = await Questao.create({
                enunciado: `
                A globalização atual é marcada pela intensa 
                integração econômica, política e cultural entre 
                os países. Assinale a alternativa que corres
                ponde a um aspecto corretamente relacio
                nado ao processo de globalização:
                `,
                opcao1: `Com o fim da Guerra Fria, os fluxos de mer
                        cadorias, serviços e capitais tornaram-se 
                        menos intensos com a integração dos paí
                        ses que eram socialistas ao mercado inter
                        nacional.`,
                opcao2: `A partir da segunda metade do século XX, as 
                        grandes empresas industriais, comerciais e 
                        de prestação de serviços começaram a ins
                        talar filiais em vários países.`,
                opcao3: `A globalização não impôs a padronização 
                        de uma série de hábitos de consumo.`,
                opcao4: `O processo de expansão do socialismo levou 
                        à constituição da economia global, impul
                        sionada pelo desenvolvimento tecnológico.`,
                opcao5: `Nas últimas décadas, o fluxo de mercado
                        rias no comércio entre os países reduziu 
                        rapidamente.`,
                respostaCorreta: 'B',
                disciplinaId: geografia.id,
                categoriaId: geografiaHumana.id,
                provaId: prova842022.id,
                ordem: 39,
            });


            const questao40_84 = await Questao.create({
                enunciado: `
                A América Latina apresentou áreas de conflito 
                e de tensões em regiões de fronteira nos sécu
                los XX e XXI. Uma das tensões fronteiriças foi a 
                Guerra das Malvinas, ocorrida entre Argentina 
                e Reino Unido, em 1982. Assinale a alternativa 
                CORRETA sobre o resultado desse conflito:
                `,
                opcao1: `Após a rendição argentina, o domínio das 
                        Ilhas Malvinas foi transferido para o Reino 
                        Unido e o impasse foi resolvido, pois a 
                        Argentina não mantém o desejo de recupe
                        rar esse território.`,
                opcao2: `O Reino Unido vendeu o território das Ilhas 
                        Malvinas para a Argentina, encerrando o 
                        conflito.`,
                opcao3: `A Argentina se rendeu, e as Ilhas Malvinas 
                        continuaram sob o domínio do Reino Unido.`,
                opcao4: `A Argentina obteve posse do arquipélago 
                        das Malvinas, porém o Reino Unido obteve 
                        direitos sobre o petróleo que poderá ser 
                        encontrado nas águas dessa área.`,
                opcao5: `O Reino Unido se rendeu, e as Ilhas Malvi
                        nas passaram ao domínio da Argentina. `,
                respostaCorreta: 'C',
                disciplinaId: geografia.id,
                categoriaId: geografiaPolitica.id,
                provaId: prova842022.id,
                ordem: 40,
            });
            //FIM PROVA 84/2022

            const questao1_60 = await Questao.create({
                enunciado: `
                Leia o texto abaixo e responda a questão:

                A PINTURA “CIVILIZAÇÃO ABANDONADA” GERADA POR IA
                
                Eu estava navegando pelo meu feed do Facebook ontem, quando vi um post do Red
                dit sobre uma pintura chamada Civilização Abandonada – uma recriação da famosa pintura 
                “Mona Lisa” (1503-1506, Leonardo da Vinci) por Inteligência Artificial (IA). É uma coleção 
                de nove pinturas separadas e costuradas para se assemelhar ao trabalho de Leonardo. 
                Meu queixo caiu quando vi a pintura pela primeira vez. Foi assustador, mas super legal 
                ao mesmo tempo. Como isso foi feito? Pegue seu smartphone e vamos ao passo a passo.
                
                Baixe uma imagem da Mona Lisa. Use o Pinterest para obter uma imagem de alta reso
                lução da pintura. Você pode apenas buscar no Google se quiser, não há problema. Sub
                divida a imagem (do quadro de Leonardo da Vinci) em 9 imagens diferentes. Lembre-se 
                de que o resultado final é uma peça montada a partir de nove imagens diversas. A ideia 
                é pedir à IA para interpretar cada peça, e depois você irá combiná-la manualmente. Para 
                gerar com Inteligência Artificial nesta etapa, eu usei o aplicativo Wombo AI.
                
                O passo final é montar essas imagens. Existem muitas ferramentas de software que você 
                pode utilizar para fazer isso. Há Photoshop, Canva, Procreate etc. Você pode até usar o 
                Excel se quiser, desde que tenha uma tela em branco onde você pode soltar todas as 
                imagens e organizá-las corretamente.
                
                Embora eu admita que ver essa façanha na IA me deixe empolgado com a forma como 
                ela revolucionará ainda mais a indústria da arte, também me sinto um pouco triste pelo 
                futuro dos artistas humanos reais. A arte tradicional ainda é melhor do que a arte gerada 
                pela IA? É difícil dizer se uma é melhor do que a outra. Ambas têm suas próprias van
                tagens e desvantagens únicas. Só espero que esse avanço tecnológico complemente o 
                trabalho de artistas reais com suas obras, e não assuma o controle para sugar completa
                mente a alegria de fazer arte tradicional.
                
                Sobre o texto, é CORRETO afirmar que
                `,
                opcao1: `está integralmente centrado em princípios de filosofia estética, que se volta para a 
                        reflexão a respeito da beleza sensível e do fenômeno artístico em sua essência.`,
                opcao2: `tem uma estrutura com três estratégias do enunciador: inicialmente, relato pessoal; 
                        depois, descrição instrucional (com alguns verbos no imperativo, como nas receitas); e 
                        por último, reflexão a respeito do tema.`,
                opcao3: `propõe um questionamento acerca da arte de retratar o ser humano em sua constante 
                        necessidade de recriar valores identitários, conforme demandas do meio em que vive.`,
                opcao4: `corrobora a primazia dos suportes tecnológicos modernos em detrimento da ativi
                        dade artística artesanal (o que é atestado pelas figuras comparativas que o ilustram).`,
                opcao5: `insinua a inegável contribuição da atualização de obras de arte tradicionais por meio 
                        de aplicativos que ressignificam valores estéticos esquecidos ou já inexistentes.`,
                respostaCorreta: 'B',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova602022.id,
                ordem: 1,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova3-1.png"
            });


            const questao2_60 = await Questao.create({
                enunciado: `
                Leia o texto abaixo e responda a questão:

                A PINTURA “CIVILIZAÇÃO ABANDONADA” GERADA POR IA
                
                Eu estava navegando pelo meu feed do Facebook ontem, quando vi um post do Red
                dit sobre uma pintura chamada Civilização Abandonada – uma recriação da famosa pintura 
                “Mona Lisa” (1503-1506, Leonardo da Vinci) por Inteligência Artificial (IA). É uma coleção 
                de nove pinturas separadas e costuradas para se assemelhar ao trabalho de Leonardo. 
                Meu queixo caiu quando vi a pintura pela primeira vez. Foi assustador, mas super legal 
                ao mesmo tempo. Como isso foi feito? Pegue seu smartphone e vamos ao passo a passo.
                
                Baixe uma imagem da Mona Lisa. Use o Pinterest para obter uma imagem de alta reso
                lução da pintura. Você pode apenas buscar no Google se quiser, não há problema. Sub
                divida a imagem (do quadro de Leonardo da Vinci) em 9 imagens diferentes. Lembre-se 
                de que o resultado final é uma peça montada a partir de nove imagens diversas. A ideia 
                é pedir à IA para interpretar cada peça, e depois você irá combiná-la manualmente. Para 
                gerar com Inteligência Artificial nesta etapa, eu usei o aplicativo Wombo AI.
                
                O passo final é montar essas imagens. Existem muitas ferramentas de software que você 
                pode utilizar para fazer isso. Há Photoshop, Canva, Procreate etc. Você pode até usar o 
                Excel se quiser, desde que tenha uma tela em branco onde você pode soltar todas as 
                imagens e organizá-las corretamente.
                
                Embora eu admita que ver essa façanha na IA me deixe empolgado com a forma como 
                ela revolucionará ainda mais a indústria da arte, também me sinto um pouco triste pelo 
                futuro dos artistas humanos reais. A arte tradicional ainda é melhor do que a arte gerada 
                pela IA? É difícil dizer se uma é melhor do que a outra. Ambas têm suas próprias van
                tagens e desvantagens únicas. Só espero que esse avanço tecnológico complemente o 
                trabalho de artistas reais com suas obras, e não assuma o controle para sugar completa
                mente a alegria de fazer arte tradicional.
                
                Analise as seguintes afirmações e assinale verdadeiro (V) ou falso (F):
                
                I – Em “Meu queixo caiu quando vi a pintura...”, o trecho sublinhado é uma expressão 
                popular com manifestação da linguagem em seu sentido conotativo.
                  
                II – O texto privilegia uma linguagem bastante formal por tratar de artefatos das tec
                nologias e soluções computacionais.
                  
                III – A pergunta “Como isso foi feito?”, no final do primeiro parágrafo, tem função tex
                tual única de expressar incredulidade do narrador.
                  
                IV – Há no texto vários exemplos de interlocução/tentativa de interação entre quem 
                escreve e quem lê.
                 
                V – Nos trechos “Subdivida a imagem...” e “Lembre-se de que o resultado final é uma 
                peça montada...”, observa-se um dos aspectos da função conativa da linguagem.
                A sequência que, respectivamente, representa uma análise plausível dos aspectos apon
                tados é:
                `,
                opcao1: `F – V – F – V – F`,
                opcao2: `V – V – F – F – V`,
                opcao3: `F – F – V – V – F`,
                opcao4: `V – F – F – V – V`,
                opcao5: `V – V – V – F – F`,
                respostaCorreta: 'D',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova602022.id,
                ordem: 2,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova3-1.png"
            });


            const questao3_60 = await Questao.create({
                enunciado: `
                Leia o texto abaixo e responda a questão:

                A PINTURA “CIVILIZAÇÃO ABANDONADA” GERADA POR IA
                
                Eu estava navegando pelo meu feed do Facebook ontem, quando vi um post do Red
                dit sobre uma pintura chamada Civilização Abandonada – uma recriação da famosa pintura 
                “Mona Lisa” (1503-1506, Leonardo da Vinci) por Inteligência Artificial (IA). É uma coleção 
                de nove pinturas separadas e costuradas para se assemelhar ao trabalho de Leonardo. 
                Meu queixo caiu quando vi a pintura pela primeira vez. Foi assustador, mas super legal 
                ao mesmo tempo. Como isso foi feito? Pegue seu smartphone e vamos ao passo a passo.
                
                Baixe uma imagem da Mona Lisa. Use o Pinterest para obter uma imagem de alta reso
                lução da pintura. Você pode apenas buscar no Google se quiser, não há problema. Sub
                divida a imagem (do quadro de Leonardo da Vinci) em 9 imagens diferentes. Lembre-se 
                de que o resultado final é uma peça montada a partir de nove imagens diversas. A ideia 
                é pedir à IA para interpretar cada peça, e depois você irá combiná-la manualmente. Para 
                gerar com Inteligência Artificial nesta etapa, eu usei o aplicativo Wombo AI.
                
                O passo final é montar essas imagens. Existem muitas ferramentas de software que você 
                pode utilizar para fazer isso. Há Photoshop, Canva, Procreate etc. Você pode até usar o 
                Excel se quiser, desde que tenha uma tela em branco onde você pode soltar todas as 
                imagens e organizá-las corretamente.
                
                Embora eu admita que ver essa façanha na IA me deixe empolgado com a forma como 
                ela revolucionará ainda mais a indústria da arte, também me sinto um pouco triste pelo 
                futuro dos artistas humanos reais. A arte tradicional ainda é melhor do que a arte gerada 
                pela IA? É difícil dizer se uma é melhor do que a outra. Ambas têm suas próprias van
                tagens e desvantagens únicas. Só espero que esse avanço tecnológico complemente o 
                trabalho de artistas reais com suas obras, e não assuma o controle para sugar completa
                mente a alegria de fazer arte tradicional.
                
                Assinale a opção CORRETA.
                `,
                opcao1: `Se a flexão verbal sublinhada em “Embora eu admita que...” fosse substituída pelos 
                        verbos consentir, assumir e supor, a correta reescrita do trecho seria “Embora eu con
                        sinta, assuma e suponha que...”.`,
                opcao2: `Em “Ambas têm suas próprias vantagens e desvantagens...”, o acento se justifica por
                        que a palavra destacada é um monossílabo tônico.`,
                opcao3: `O sujeito é indeterminado na oração “Baixe uma imagem da Mona Lisa”, assim como 
                        em “Existem muitas ferramentas de software...”.`,
                opcao4: `No trecho “Você pode até usar o Excel se quiser, desde que tenha uma tela...”, a expres
                        são sublinhada pode ser substituída, sem prejuízo do significado, por ainda que.`,
                opcao5: `A classificação morfológica do termo grifado em “...uma imagem de alta resolução...” é 
                        a mesma do termo destacado em “Ela recebeu alta hospitalar ontem”.`,
                respostaCorreta: 'A',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTextoGramatica.id,
                provaId: prova602022.id,
                ordem: 3,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova3-1.png"
            });


            const questao4_60 = await Questao.create({
                enunciado: `
                Observe a sequência, Nela, pode-se dizer que há como recurso, de modo mais evidente,
                `,
                opcao1: `antíteses e paradoxos.`,
                opcao2: `metonímias sobrepostas.`,
                opcao3: `metalinguagem cumulativa.`,
                opcao4: `hipérboles gradativas.`,
                opcao5: `eufemismos contínuos.`,
                respostaCorreta: 'C',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTextoFiguraLinguagem.id,
                provaId: prova602022.id,
                ordem: 4,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova3-4.png"
            });


            const questao5_60 = await Questao.create({
                enunciado: `
                Thor não pega seu martelo tão fácil assim — Cena recorrente nos quadrinhos e nos 
                filmes da Marvel, Thor com seu martelo, o Mjölnir, em mãos, é só coisa da ficção mesmo. 
                Ao contrário do que ficou famoso, para empunhar sua arma, o filho de Odin precisa de 
                um conjunto de luvas chamado Járngreipr. Essas luvas são preponderantes para que ele 
                se proteja dos efeitos de seu incrível martelo. [...] A tríade de posses mais importantes do 
                lendário ser mitológico: as luvas, o Mjölnir, o cinto místico.

                Os trechos destacados desempenham, respectivamente, função sintática de
                `,
                opcao1: `objeto direto e vocativo.`,
                opcao2: `sujeito e predicativo do sujeito.`,
                opcao3: `aposto e aposto.`,
                opcao4: `vocativo e objeto direto.`,
                opcao5: `aposto e adjunto adverbial.`,
                respostaCorreta: 'C',
                disciplinaId: portugues.id,
                categoriaId: analiseSintatica.id,
                provaId: prova602022.id,
                ordem: 5,
            });


            const questao6_60 = await Questao.create({
                enunciado: `
                Considere as seguintes afirmações e assinale verdadeiro (V) ou falso (F):

                1. NÃO HÁ VAGAS
                
                O preço do feijão 
                não cabe no poema. O preço 
                do arroz 
                não cabe no poema. 
                Não cabem no poema o gás 
                a luz o telefone [...] 
                do leite 
                da carne 
                do açúcar 
                do pão 
                [...] não cabe no poema 
                o operário 
                que esmerila seu dia de aço 
                e carvão 
                nas oficinas escuras – porque o poema, senhores, 
                está fechado: 
                “não há vagas” 
                Só cabe no poema 
                o homem sem estômago [...] 
                a fruta sem preço 
                O poema, senhores, 
                não fede 
                nem cheira

                2. TETOS
                O que pode um poema contra todo 
                o mal do mundo? Pouco, nada ou 
                quase nada. Poema não reduz 
                o desemprego, nem manipula os
                
                índices de inflação, tampouco faz 
                reforma agrária ou mata fome das 
                pessoas precisadas. Quem me dera 
                poemas dessem tetos a sem-teto,
                
                distribuíssem renda, paz, vacina, 
                alegria, coragem e justiça. 
                Poemas, com suas palavras, podem
                
                fazer isso que já fizeram: nos 
                pôr a pensar nos males e problemas 
                do mundo. Isso podem os poemas.

                I – Enquanto o texto 1 se volta para uma crítica social nas entrelinhas, o texto 2 se 
                afasta de qualquer discurso acerca de problemas socioculturais e propõe uma concep
                ção de poema apenas como objeto estético.

                                
                II – Os dois poemas procuram refletir sobre as possíveis relações entre texto poético e 
                a chamada “vida real”, ou realidade externa, ao mesmo tempo em que pensam o próprio 
                fazer poético.
                   
                III – No texto 2, o sujeito poético tematiza certa impotência da escrita literária diante 
                dos fatos e das mazelas sociais, todavia concebe o poema também como lugar de pensa
                mento sobre o tempo real e suas questões.
                   
                IV – No poema de Ferreira Gullar, mesmo aquilo que, de fato, “não cabe no poema”,  
                tem lugar entre os versos – espaço do mundo re-apresentado e ficcionalizado pela lin
                guagem. 
                   
                V – Mesmo optando pela forma clássica de soneto, o poema de Wilberth Salgueiro 
                apresenta uma concepção geral bastante contemporânea, seja pela linguagem mais 
                direta e atual, ou não clássica, seja pela dicção quase semelhante à da prosa.
                  
                VI – Somente no texto 1, os verbos no tempo presente enfatizam as desigualdades 
                sociais como tema assíduo no cotidiano brasileiro.
                
                A sequência que corresponde, respectivamente, a uma análise mais coerente dos aspec
                tos apontados está em:
                `,
                opcao1: `F – V – V – V – V – F`,
                opcao2: `F – F – V – V – F – F`,
                opcao3: `V – F – V – F – V – V`,
                opcao4: `F – V – F – F – F – V`,
                opcao5: `V – V – F – V – F – V`,
                respostaCorreta: 'A',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova602022.id,
                ordem: 6,
            });


            const questao7_60 = await Questao.create({
                enunciado: `
                Assinale a alternativa em que o uso da vírgula obedece à escrita formal da língua portu
                guesa.
                `,
                opcao1: `Fundador da Tesla, e da SpaceX além de outros grandes negócios Elon Musk oferece     
                        quase US$ 44 bilhões para ser dono da plataforma Twitter que conta com cerca de 220 
                        milhões de usuários ativos.`,
                opcao2: `Fundador da Tesla e da SpaceX além de outros grandes negócios, Elon Musk oferece 
                        quase US$ 44 bilhões para ser dono da plataforma Twitter que conta com cerca de 220 
                        milhões de usuários ativos.`,
                opcao3: `Fundador da Tesla e da SpaceX, além de outros grandes negócios, Elon Musk, oferece  
                        quase US$ 44 bilhões para ser dono da plataforma Twitter que conta com cerca de 220 
                        milhões de usuários ativos.`,
                opcao4: `Fundador da Tesla, e da SpaceX, além de outros grandes negócios, Elon Musk oferece, 
                        quase US$ 44 bilhões para ser dono da plataforma Twitter, que conta com cerca de 
                        220 milhões de usuários ativos.`,
                opcao5: `Fundador da Tesla e da SpaceX, além de outros grandes negócios, Elon Musk oferece 
                        quase US$ 44 bilhões para ser dono da plataforma Twitter, que conta com cerca de 
                        220 milhões de usuários ativos.`,
                respostaCorreta: 'E',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova602022.id,
                ordem: 7,
            });

            const questao8_60 = await Questao.create({
                enunciado: `
                Observe o anúncio dessa peixaria. 
                Talvez focado na necessidade de 
                vender o peixe a qualquer custo, o 
                autor da placa cometeu um equí
                voco quanto ao uso do pronome 
                “se” na voz passiva sintética.

                 Imagine que você deva reescrever o 
                anúncio de acordo com a norma-pa
                drão da língua portuguesa para tal 
                regra, colocando a palavra “peixe” 
                no plural.

                A forma CORRETA seria:
                `,
                opcao1: `Vende-se peixes.`,
                opcao2: `Se vendem peixes.`,
                opcao3: `Se vende peixes.`,
                opcao4: `Vendem-se peixes.`,
                opcao5: `Vende-se-peixes.`,
                respostaCorreta: 'D',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTextoGramatica.id,
                provaId: prova602022.id,
                ordem: 8,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova3-8.png"
            });


            const questao10_60 = await Questao.create({
                enunciado: `Enunciado:`,
                opcao1: `30`,
                opcao2: `60`,
                opcao3: `82`,
                opcao4: `98`,
                opcao5: `100`,
                respostaCorreta: 'D',
                disciplinaId: matematica.id,
                categoriaId: equacoesExponenciais.id,
                provaId: prova602022.id,
                ordem: 9,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova3-10.png"
            });


            const questao11_60 = await Questao.create({
                enunciado: `
                 O Ifes – Campus Serra implantou uma usina fotovoltaica para captar e transformar a 
                energia solar em energia elétrica e dessa forma, economizar com o gasto nessa energia 
                para poder aplicar em outras áreas do campus. Se o gasto médio do Ifes, antes da ins
                talação, era por volta de R$ 3.200,00 e, após a instalação da usina, foi reduzido em 65%, 
                qual o valor que o Ifes economizou para poder aplicar em outras áreas?
                `,
                opcao1: `R$ 2.660,00`,
                opcao2: `R$ 1.050,00`,
                opcao3: `R$ 2.080,00`,
                opcao4: `R$ 1.120,00`,
                opcao5: `R$ 2.350,00`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: porcentagem.id,
                provaId: prova602022.id,
                ordem: 10,
            });


            const questao12_60 = await Questao.create({
                enunciado: `
                No concurso seletivo do Ifes – Campus Serra para o curso de Internet das Coisas (IOT), 
                houve 300 inscritos entre ampla concorrência (A) e alunos cotistas (B). Sabendo que a 
                razão entre o número de alunos dos grupos A e B, nessa ordem, foi de 8/7, que a razão 
                entre o número de candidatos do sexo masculino e feminino, nessa ordem, no grupo A 
                foi de 9/7 e no grupo B foi de 4/3, determine o número de candidatos do sexo feminino 
                que se inscreveram para o concurso.
                `,
                opcao1: `120`,
                opcao2: `130`,
                opcao3: `140`,
                opcao4: `150`,
                opcao5: `160`,
                respostaCorreta: 'B',
                disciplinaId: matematica.id,
                categoriaId: razaoProporcao.id,
                provaId: prova602022.id,
                ordem: 11,
            });


            const questao13_60 = await Questao.create({
                enunciado: `
                A figura abaixo representa o projeto da quadra poliesportista de uma escola. De acordo 
                com as medidas dadas na figura, e sabendo que as partes circulares (círculo de diâmetro 
                6 m e semicírculos de raio 4 m) serão pintadas de azul; que o retângulo interior, menos 
                as partes circulares, será pintado de verde; e que o espaço entre o retângulo exterior e 
                o retângulo interior será pintado de amarelo, calcule a razão entre as áreas pintadas de 
                amarelo e verde, nessa ordem. (Obs.: As medidas estão fora de escala; utilize a aproxi
                mação π ≅ 3).
                `,
                opcao1: `0,70`,
                opcao2: `0,65`,
                opcao3: `0,60`,
                opcao4: `0,55`,
                opcao5: `0,50`,
                respostaCorreta: 'E',
                disciplinaId: matematica.id,
                categoriaId: geometriaPlana.id,
                provaId: prova602022.id,
                ordem: 12,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova3-13.png"
            });


            const questao14_60 = await Questao.create({
                enunciado: `
                Na figura abaixo, temos duas retas paralelas, r e s, com 4 pontos distintos em r e 3 pon
                tos distintos em s. Se ligarmos 3 pontos, não colineares, dessas retas, podemos formar 
                quantos triângulos, no máximo?
                `,
                opcao1: `24`,
                opcao2: `30`,
                opcao3: `36`,
                opcao4: `18`,
                opcao5: `10`,
                respostaCorreta: 'B',
                disciplinaId: matematica.id,
                categoriaId: combinatoria.id,
                provaId: prova602022.id,
                ordem: 13,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova3-14.png"
            });


            const questao15_60 = await Questao.create({
                enunciado: `
                Paulo mora perto de um rio que possui um pequeno trecho com margens paralelas, con
                forme a figura a seguir. Para calcular a largura desse rio, no trecho descrito, Paulo obser
                vou um ponto C na margem oposta, e marcou um ponto B na margem em que estava, de 
                tal forma que o segmento BC fosse perpendicular às margens do rio. Depois ele andou 
                18 passos para a frente e marcou um ponto A, nessa mesma margem. Com o auxílio de 
                um transferidor, ele conseguiu medir o ângulo BÂC = 27º, e sabendo que cada passo dele 
                mede aproximadamente 80 cm, qual é a largura do rio, em metros? (Dado que: sen 27° = 
                0,45; cos 27° = 0,89 e tg 27° = 0,51)
                `,
                opcao1: `7,3 m`,
                opcao2: `8,4 m`,
                opcao3: `6,6 m`,
                opcao4: `5,8 m`,
                opcao5: `7,8 m`,
                respostaCorreta: 'A',
                disciplinaId: matematica.id,
                categoriaId: trigonometria.id,
                provaId: prova602022.id,
                ordem: 14,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova3-15.png"
            });


            const questao16_60 = await Questao.create({
                enunciado: `
                Um time de futsal, formado por 5 jogadores, tem média de altura de 1,84 m. Como um 
                dos jogadores se machucou, o técnico trocou este jogador, de altura 1,78 m, por um de 
                altura 1,90 m. Após essa mudança, qual a nova média de altura do time?
                `,
                opcao1: `1,780 m`,
                opcao2: `1,846 m`,
                opcao3: `1,938 m`,
                opcao4: `1,864 m`,
                opcao5: `1,738 m`,
                respostaCorreta: 'D',
                disciplinaId: matematica.id,
                categoriaId: mediaAritmetica.id,
                provaId: prova602022.id,
                ordem: 15,
            });


            const questao17_60 = await Questao.create({
                enunciado: `
                A água é um elemento natural essencial à existência e à manutenção da vida. Cerca de 
                três quartos da superfície terrestre são cobertos por água. É o constituinte mais abun
                dante do nosso organismo, sendo o corpo humano composto por cerca de 70% de água. 
                Essa substância está presente em muitas reações químicas em nosso organismo, que só 
                ocorrem em meio aquoso. A perda de 20% de água corpórea pode levar à morte e uma 
                perda de apenas 10% já causa problemas graves.
                Com relação à água e a sua importância, podemos afirmar que
                `,
                opcao1: `os compostos hidrofóbicos são aqueles capazes de serem dissolvidos em água.`,
                opcao2: `à medida que avançamos em idade, a porcentagem de água em nosso corpo aumenta.`,
                opcao3: `a capilaridade da água impede que plantas transportem até as folhas os líquidos que 
                        retiram do solo.`,
                opcao4: `em clima seco a evaporação da água é menos rápida.`,
                opcao5: `a tensão superficial da água é resultado das ligações de hidrogênio.`,
                respostaCorreta: 'E',
                disciplinaId: ciencia.id,
                categoriaId: biologia.id,
                provaId: prova602022.id,
                ordem: 16,
            });


            const questao18_60 = await Questao.create({
                enunciado: `
                Após vários estudos, os alemães Mathias Schleiden (1804-1881) e Theodor Schwann 
                (1810-1882) concluíram, de forma independente, que todos os seres vivos eram formados 
                por células. Nascia aí a base da teoria celular. Sobre as células, são corretas as seguintes 
                afirmativas, EXCETO:
                `,
                opcao1: `O envoltório celular presente em todos os tipos de células é a membrana plasmática.`,
                opcao2: `Todas as células originam-se de outra célula preexistente.`,
                opcao3: `O citoplasma das células eucarióticas corresponde a toda a região situada entre a 
                        membrana plasmática e a carioteca.`,
                opcao4: `O citoplasma da célula eucariótica é muito mais simples do que o da célula 
                        procariótica.`,
                opcao5: `Na estrutura das células procarióticas não se observa a presença de um núcleo.`,
                respostaCorreta: 'D',
                disciplinaId: ciencia.id,
                categoriaId: citologia.id,
                provaId: prova602022.id,
                ordem: 17,
            });


            const questao19_60 = await Questao.create({
                enunciado: `
                O íon A1-, de número atômico 12, é isoeletrônico do íon B1+. B1+ é isótono de 16C, que pos
                sui número de massa igual a 34. Qual é o número de massa de B1+?
                `,
                opcao1: `31`,
                opcao2: `32`,
                opcao3: `33`,
                opcao4: `34`,
                opcao5: `35`,
                respostaCorreta: 'B',
                disciplinaId: ciencia.id,
                categoriaId: quimica.id,
                provaId: prova602022.id,
                ordem: 18
            });


            const questao20_60 = await Questao.create({
                enunciado: `
                Uma pedra é lançada verticalmente para cima a partir do solo e atinge uma altura máxima 
                de 11,25 m. Desconsiderando os efeitos da resistência do ar, determine a velocidade de 
                lançamento da pedra. [Considere a aceleração da gravidade igual a 10 m/s²]
                `,
                opcao1: `36 km/h`,
                opcao2: `45 km/h`,
                opcao3: `54 km/h`,
                opcao4: `60 km/h`,
                opcao5: `72 km/h`,
                respostaCorreta: 'C',
                disciplinaId: ciencia.id,
                categoriaId: movimentoUniformementeAcelerado.id,
                provaId: prova602022.id,
                ordem: 19
            });


            const questao21_60 = await Questao.create({
                enunciado: `
                Leia o fragmento abaixo: 

                “A língua de que usam, toda pela costa, é uma: ainda que em certos vocábulos difere 
                em algumas partes; mas não de maneira que se deixem de entender. (…) Carece de três 
                letras, convém a saber, não se acha nela F, nem L, nem R, coisa digna de espanto, porque 
                assim não têm Fé, nem Lei, nem Rei, e desta maneira vivem desordenadamente.”
                
                O trecho acima reflete como os colonizadores viam as comunidades indígenas brasilei
                ras. Sobre o período das Grandes Navegações, é INCORRETO afirmar:
                `,
                opcao1: `Um dos principais objetivos dos países europeus era de encontrar uma rota alterna
                        tiva para as Índias em busca da fonte das especiarias e dos metais preciosos, princi
                        palmente o ouro.`,
                opcao2: `Os países que se destacaram na expansão marítima foram: Portugal, com a conquista 
                        das ilhas de Açores (Madeira e São Tomé), de entrepostos no litoral africano e depois 
                        do Brasil; Espanha, com a conquista das ilhas da América Central e, posteriormente, 
                        de regiões da América do Sul, onde hoje é México, Peru, Chile e Argentina; e as con
                        quistas italianas, com as cidades comerciais de Gênova e Veneza.`,
                opcao3: `Uma das estratégias de Portugal para chegar às Índias foi o Périplo Africano, que seria 
                        contornar o continente africano. A partir do périplo, os portugueses seguiram a rota 
                        do ouro e criaram feitorias no litoral, efetivando a ocupação de algumas regiões afri
                        canas e estabelecendo as primeiras trocas comerciais.`,
                opcao4: `Os principais fatores para o pioneirismo português durante as Grandes Navegações 
                        foram: Portugal foi o primeiro Estado autônomo e centralizado da Europa, oferecendo 
                        condições do rei investir nas atividades marítimas e comerciais; posicionamento geo
                        gráfico favorável; criação e incentivo da Escola de Sagres; e a experiência comercial 
                        com o mediterrâneo.`,
                opcao5: `Com a Reforma Protestante ocorrendo na Europa, a igreja perdeu grande número de 
                        fiéis. O interesse dessa instituição nas Grandes Navegações era justamente expandir 
                        a fé cristã catequizando os povos recém-descobertos.`,
                respostaCorreta: 'B',
                disciplinaId: historia.id,
                categoriaId: historiaBrasil.id,
                provaId: prova602022.id,
                ordem: 20
            });


            const questao22_60 = await Questao.create({
                enunciado: `
                Analise a charge e as afirmativas a seguir, acerca da Guerra Fria, e assinale verdadeiro (V) 
                ou falso (F):
                
                I – Uma das estratégias utilizadas pelas potências mundiais envolvidas na Guerra Fria 
                para influenciar os outros países foi a manipulação ideológica. Utilizando a mídia como 
                forma de controle por meio de propagandas, dividindo o mundo entre o bloco capitalista 
                e o bloco socialista.
                
                II – A Guerra Fria ocorreu entre as duas Guerras Mundiais. Foi no período entre guer
                ras que a sociedade buscou nos regimes totalitários um amparo diante da destruição 
                causada pelos conflitos da 1ª Guerra Mundial. 
                
                III – A Guerra Fria chegou ao fim em 1991 com a dissolução da União das Repúblicas 
                Socialistas Soviéticas. 
                
                IV – O termo “fria” da Guerra fria foi um estado de conflito entre nações que não envol
                veu uma ação militar direta, mas foi exercida principalmente através de ações econômi
                cas e políticas, propaganda, atos de espionagem ou de guerras por procuração. 
                
                V – No contexto internacional, a Guerra Fria representou a divisão do mundo entre dois 
                blocos, em que as potências utilizavam sua influência para controlar ideologicamente, 
                politicamente e economicamente os outros países. Na década de 1970, o Brasil integrou 
                o bloco socialista e a politica nacional brasileira estava ligada diretamente à URSS.
                A sequência correta é:
                `,
                opcao1: `V,  F,  V,  F,  F.`,
                opcao2: `F,  V,  V,  F,  V.`,
                opcao3: `F,  F,  V,  V,  F.`,
                opcao4: `V,  F,  V,  V,  F.`,
                opcao5: `V,  V,  F,  V,  V.`,
                respostaCorreta: 'D',
                disciplinaId: historia.id,
                categoriaId: guerraFria.id,
                provaId: prova602022.id,
                ordem: 21,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova3-22.png"
            });


            const questao23_60 = await Questao.create({
                enunciado: `
                Leia o texto a seguir para responder à questão: 

                ”A Revolução Industrial tinha colocado o operário à mercê do capitalista. O empregador 
                era dono da fábrica e de todas as máquinas caras que ali se encontravam. O trabalhador 
                já não podia produzir seu próprio alimento e fazer seu próprio trabalho. Já não era o pro
                prietário das ferramentas para produção. Tinha que se tornar um assalariado, na fábrica 
                de outro homem. Se a fábrica era insalubre, mal iluminada, mal ventilada, sem segurança 
                e continha máquinas perigosas, ele tinha de trabalhar lá, assim mesmo. Se houvesse 
                muitas horas de trabalho, e os salários fossem tão baixos que não podia sustentar a si 
                próprio e à sua família, tinha que trabalhar do mesmo jeito. Não havia outra alternativa 
                – ou trabalhar ou passar fome.

                O fato de que o operário não era uma COISA, como carvão ou algodão, mas sim uma pes
                soa, um ser humano, não tinha a menor importância para aqueles que queriam lucros. 
                Operários, máquinas, matéria-prima, eram tudo a mesma coisa para eles. Quanto menos 
                custassem, melhor. Estavam interessados nos lucros.

                Os trabalhadores aguentaram isso o quanto puderam. Depois tentaram reagir. O que 
                podiam fazer?

                Sozinhos, não podiam fazer nada. Organizados em um só grupo podiam exercer pressão 
                sobre os empregadores. Agruparam-se e formaram os sindicatos.”

                Analisando a realidade do trabalhador no contexto da Revolução Industrial na Inglaterra, 
                assinale a alternativa correta:
                `,
                opcao1: `A Revolução Industrial foi o período de grande desenvolvimento tecnológico e trouxe 
                        profundas mudanças nas relações sociais. Teve destaque principalmente nos Estados 
                        Unidos e depois se expandiu para a Europa. `,
                opcao2: `Uma das formas de os operários protestarem contra as más condições de trabalho 
                        era com a quebra das máquinas. Essa prática deu origem ao movimento ludista. O 
                        ludismo ocorreu na Inglaterra durante o século XVIII, os operários viam nas máquinas 
                        a razão de sua condição de miséria.`,
                opcao3: `A organização dos trabalhadores em busca de melhores condições de trabalho, pro
                        piciou o surgimento dos sindicatos. Nessa mesma época, no final do século XVIII, sur
                        giam no Brasil as primeiras associações sindicais.`,
                opcao4: `O fordismo é um sistema de produção desenvolvido pelo operário Henry Ford e sua 
                        principal característica é a produção sob encomenda a fim de diminuir a carga horária 
                        de trabalho nas fábricas.`,
                opcao5: `Os primeiros sindicatos que se desenvolveram na Inglaterra, formaram uma associa
                        ção de trabalhadores em que discutiram melhores condições de trabalho, garantia 
                        de direitos, e que era mediada pelo empregador, dono da fábrica, o qual escutava e 
                        sugeria formas de melhorar as condições de trabalho. `,
                respostaCorreta: 'B',
                disciplinaId: historia.id,
                categoriaId: revolucaoIndustrial.id,
                provaId: prova602022.id,
                ordem: 22,
            });


            const questao24_60 = await Questao.create({
                enunciado: `
                Observe a imagem e analise as afirmativas a seguir:

                 I – O Departamento de Imprensa e Propaganda foi um órgão criado no Brasil em dezem
                bro de 1939, por decreto do presidente Getúlio Vargas. O DIP serviu como instrumento 
                de censura e propaganda do governo durante o Estado Novo.
                
                II – A construção de Brasília foi a concretização de um projeto nacional que existia desde 
                o século XIX, cujo intuito era o de levar a capital do nosso país para o planalto central. 
                Essa obra aconteceu entre 1930 e 1940 e foi viabilizada pelo governo de Getúlio Vargas.
                
                III – A CLT foi criada pelo Decreto-Lei nº 5.452, de 1º de maio de 1943, e sancionada pelo 
                presidente Getúlio Vargas, durante o período do Estado Novo. A consolidação das leis 
                unificou toda a legislação trabalhista então existente no país e inseriu de forma definitiva 
                os direitos trabalhistas na legislação brasileira.
                
                IV – Getúlio Vargas realizou uma aproximação dos trabalhadores e desenvolveu um pro
                jeto político que ficou conhecido como trabalhismo. Nesse projeto, ele detinha contato 
                direto com os trabalhadores e implantava benefícios inéditos para essa classe. Através 
                desse projeto, ele conseguiu apoio de grande parte da população, sendo eleito em 1930, 
                iniciando o período do Estado Novo. 
                
                Estão corretas as afirmativas:
                `,
                opcao1: `Apenas I e II.`,
                opcao2: `Apenas I, II e IV.`,
                opcao3: `Apenas I e III.`,
                opcao4: `Apenas IV.`,
                opcao5: `I, II, III e IV.`,
                respostaCorreta: 'C',
                disciplinaId: historia.id,
                categoriaId: eraVargas.id,
                provaId: prova602022.id,
                ordem: 23,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova3-24.png"
            });


            const questao25_60 = await Questao.create({
                enunciado: `
                Periferia é periferia

                Muita pobreza, estoura violência! 
                Nossa raça está morrendo 
                Não me diga que está tudo bem! 
                Muita pobreza, estoura violência! 
                Nossa raça está morrendo 
                Verdade seja dita!
                
                A música Periferia é periferia, lançada no álbum Sobrevivendo no inferno em 1997, expressa 
                uma triste realidade, que é a relação entre pobreza e violência no Brasil. Considerando 
                a relação expressa na letra e a urbanização nas cidades brasileiras, avalie as afirmativas 
                abaixo.


                 I – Os problemas sociais nas cidades brasileiras são decorrentes de diversos fatores, 
                como ausência de planejamento dos governantes, industrialização, segregação socioes
                pacial, reflexo das desigualdades sociais historicamente encontradas no país, má gestão 
                dos recursos públicos etc.
                
                II – A questão da moradia no Brasil não se restringe à falta de uma casa para as famílias. 
                Ela é muito mais ampla e envolve problemas relacionados com a ausência de sanea
                mento básico, asfaltamento das ruas, iluminação pública e redes de água tratada.
                
                III – A desigualdade social provoca o agravamento dos problemas sociais. Uma distribui
                ção de renda mais igualitária contribuiria para a diminuição dos problemas de saúde, 
                moradia, educação e segurança nos espaços urbanos brasileiros.
                
                Estão corretas as alternativas:
                `,
                opcao1: `Apenas I`,
                opcao2: `Apenas I e II`,
                opcao3: `Apenas II e III`,
                opcao4: `Apenas II`,
                opcao5: `I, II, III`,
                respostaCorreta: 'E',
                disciplinaId: geografia.id,
                categoriaId: geografiaUrbana.id,
                provaId: prova602022.id,
                ordem: 24,
            });

            const questao26_60 = await Questao.create({
                enunciado: `
                Os dados apresentados pelo relatório do IPCC – Painel Intergovernamental sobre Mudan
                ças Climáticas apresenta uma realidade complexa, uma vez que trata do quanto os países 
                deveriam investir e o quanto estão investindo de fato em mudanças setoriais para atingir 
                uma escala ideal de adaptação às mudanças climáticas. A partir dos dados apresentados 
                no relatório e sobre a relação entre as mudanças climáticas e os setores produtivos, mar
                que a opção correta.
                `,
                opcao1: `É notável um aumento, ao longo dos anos, em investimentos globais que visam a uma 
                        adaptabilidade às mudanças climáticas em todos os setores. Os principais fomenta
                        dores para essa afirmação foram as convenções e os acordos climáticos realizados, 
                        sobretudo, a ECO 92, no Brasil.`,
                opcao2: `O setor agrícola é altamente dependente do clima e, consequentemente, das mudan
                        ças climáticas. Antagonicamente, aparece como a área que menos possui investimen
                        tos globais para influenciar maior adaptabilidade às alterações antrópicas ao clima. 
                        No Brasil, parte disso se explica devido ao fato de a maior parte da agricultura de 
                        exportação se encontrar altamente mecanizada, pautada em monocultivo e depen
                        dente de utilização de grande quantidade de químicos fertilizantes e defensivos.`,
                opcao3: `O setor de transporte está na média com relação a adaptabilidade às mudanças climá
                        ticas, por outro lado é o mais poluidor comparado aos demais setores. Grande parte 
                        da explicação ocorre em virtude de ser um setor altamente dependente de combustí
                        veis fósseis. Apesar disso, no Brasil, vem ocorrendo uma transição da maior parte das 
                        frotas de transportes públicos para energia limpa.`,
                opcao4: `Todos os setores necessitam de grande quantidade de investimento para alcançar 
                        patamares aceitáveis de adaptabilidade, entretanto, os setores de eficácia energética, 
                        silvícolas e de uso da terra são os que mais garantiram investimentos para contribuí
                        rem com as adaptações.`,
                opcao5: `Em alguns setores ocorreu uma diminuição de investimento ao longo dos anos, como 
                        os casos dos setores de eletricidade, eficácia energética e agricultura, em virtude, prin
                        cipalmente, da lucratividade dos setores em questão.`,
                respostaCorreta: 'B',
                disciplinaId: geografia.id,
                categoriaId: geopolitica.id,
                provaId: prova602022.id,
                ordem: 25,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova3-26.png"
            });

            const questao27_60 = await Questao.create({
                enunciado: `
                O desenho e o quadrinho acima tratam de temas relacionados a localização. Sobre essa 
                temática, marque a opção correta:
                `,
                opcao1: `O desenho do artista uruguaio Joaquín Torres-García trabalha com uma representa
                        ção idêntica da América Latina. Ao contrário da forma como representada na tirinha 
                        da Mafalda.`,
                opcao2: `Ambas as representações — desenho e quadrinho — tratam da mesma temática, 
                        inclusive análise geográfica idêntica.`,
                opcao3: `O desenho de Joaquín questiona a forma de representação e aponta para as decisões 
                        políticas relacionadas à cartografia, enquanto o quadrinho fomenta um debate acerca 
                        da orientação cartográfica.`,
                opcao4: `A cartografia fica em segundo plano em ambas as representações, visto que há um 
                        destaque para o campo artístico.`,
                opcao5: `A noção eurocêntrica é a dominante nas representações mundiais e não há qualquer 
                        outra forma possível e correta de expressar o mundo cartograficamente.`,
                respostaCorreta: 'C',
                disciplinaId: geografia.id,
                categoriaId: representacaoEspacial.id,
                provaId: prova602022.id,
                ordem: 26,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova3-27.png"
            });


            const questao28_60 = await Questao.create({
                enunciado: `
                O pico da Bandeira é o ponto mais alto dos estados do Espírito Santo e de Minas Gerais, e 
                também de toda a Região Sudeste do Brasil. É também o terceiro ponto mais alto do país, 
                com 2891,32 metros de altitude. Identifique a opção que corresponde à microrregião do 
                estado do Espírito Santo onde está localizado o pico da Bandeira.
                `,
                opcao1: `Metropolitana`,
                opcao2: `Sudoeste Serrana`,
                opcao3: `Centro-Oeste`,
                opcao4: `Litoral Sul`,
                opcao5: `Caparaó`,
                respostaCorreta: 'E',
                disciplinaId: geografia.id,
                categoriaId: geografiaFisica.id,
                provaId: prova602022.id,
                ordem: 27,
            });

            //FIM DA PROVA 60/2022

            const questao1_12020 = await Questao.create({
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
                
                A. Os recursos naturais da Terra sempre foram extraídos, no entanto o excesso começou a 
                ocorrer a partir de 1970.
                
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
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova12020.id,
                ordem: 1,
            });


            const questao2_12020 = await Questao.create({
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
                ESTÁ CORRETO o que se afirma na opção
                `,
                opcao1: `No 1º parágrafo foram empregadas as aspas em duas situações, cada qual por uma razão distinta.`,
                opcao2: `O pronome possessivo “nossas”, empregado na linha 3, inclui o locutor do texto no assunto 
                        tratado.`,
                opcao3: `Na linha 12, a vírgula após o advérbio “atualmente” não poderia ser retirada, uma vez que 
                        provocaria algum tipo de alteração gramatical.`,
                opcao4: `Os parênteses empregados nas linha 1 e 2 poderiam ser suprimidos e, para não haver nenhum 
                        prejuízo semântico, deveria ser colocada uma vírgula entre os vocábulos “Terra” e “algo”.`,
                opcao5: `As aspas utilizadas nos parágrafos 4 e 6 têm a mesma função, porém por razão distinta das 
                        empregadas no parágrafo 1.`,
                respostaCorreta: 'C',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTextoGramatica.id,
                provaId: prova12020.id,
                ordem: 2,
            });


            const questao3_12020 = await Questao.create({
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

                Os travessões empregados no 1º parágrafo trazem entre eles um trecho que
                `,
                opcao1: `explica a comparação mencionada anteriormente no período.`,
                opcao2: `exemplifica os itens que influenciam no cálculo da data do Dia da Sobrecarga da Terra.`,
                opcao3: `apresenta os elementos possíveis retirados da natureza.`,
                opcao4: `indica o que deveria ser feito para resolver definitivamente a superexploração da Terra.`,
                opcao5: `representa a opinião do autor do texto acerca das ações humanas sobre os recursos naturais 
                        da Terra.`,
                respostaCorreta: 'B',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTextoGramatica.id,
                provaId: prova12020.id,
                ordem: 3,
            });


            const questao4_12020 = await Questao.create({
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

                A declaração (“As economias atuais estão gerindo um esquema de 
                pirâmide financeira com o nosso planeta”) indica`,
                opcao1: `uma opinião favorável do emissor sobre o assunto.`,
                opcao2: `uma crítica do declarante acerca do assunto.`,
                opcao3: `um posicionamento neutro do entrevistado sobre o assunto.`,
                opcao4: `uma dúvida do emissor acerca do assunto abordado.`,
                opcao5: `um questionamento do declarante sobre o assunto tratado.`,
                respostaCorreta: 'B',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova12020.id,
                ordem: 4,
            });


            const questao5_12020 = await Questao.create({
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
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova12020.id,
                ordem: 5,
            });


            const questao6_12020 = await Questao.create({
                enunciado: `
                Ao se construírem orações, pode-se optar por redigir verbos na voz ativa ou na voz passiva, 
                dependendo da intenção que se pretende. Nos trechos abaixo apresentados, todas as orações 
                foram escritas com verbos na voz passiva, EXCETO`,
                opcao1: `“[...] algo como ‘dia em que se ultrapassam os limites da Terra’ [...]”`,
                opcao2: `“Por outras palavras, atualmente, é exercida uma procura 1,75 vezes superior à capacidade de 
                        regeneração dos ecossistemas [...]”`,
                opcao3: `“De lá para cá, o Dia da Sobrecarga da Terra tem sido assinalado cada vez mais cedo [...]”`,
                opcao4: `“As economias atuais estão gerindo um esquema de pirâmide financeira com o nosso planeta”`,
                opcao5: `“O cálculo é feito por um centro de estudos americanos, o Global Footprint Network.”`,
                respostaCorreta: 'D',
                disciplinaId: portugues.id,
                categoriaId: vozVerbal.id,
                provaId: prova12020.id,
                ordem: 6,
            });


            const questao7_12020 = await Questao.create({
                enunciado: `
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
                opcao5: `Os dados da Global Footprint Network apontam que a quantidade de emissão de CO2 compõe 
                        mais da metade da demanda sobre a natureza`,
                respostaCorreta: 'D',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTextoGramatica.id,
                provaId: prova12020.id,
                ordem: 7,
            });

            
            const questao8_12020 = await Questao.create({
                enunciado: `
                “A superexploração de recursos naturais começou em 1970, quando a capacidade total do 
                planeta para aquele ano se esgotou no fim de dezembro.”
                
                Nesse fragmento, é possível encontrar todos os elementos sintáticos abaixo apresentados, 
                EXCETO`,
                opcao1: `adjunto adverbial.`,
                opcao2: `sujeito simples.`,
                opcao3: `adjunto adnominal.`,
                opcao4: `complemento nominal.`,
                opcao5: `objeto indireto.`,
                respostaCorreta: 'E',
                disciplinaId: portugues.id,
                categoriaId: analiseSintatica.id,
                provaId: prova12020.id,
                ordem: 8,
            });


            const questao9_12020 = await Questao.create({
                enunciado: `
                Abaixo, há trechos transcritos do texto acompanhados de um comentário. Um desses 
                comentários está INCORRETO. Identifique-o.`,
                opcao1: `“Por sua vez, esses danos acentuam e dão origem a fenômenos, tais como as alterações 
                        climáticas, secas severas, incêndios florestais ou furacões, isso porque os mecanismos naturais 
                        do planeta para lidar com toda essa pressão estão sobrecarregados.”
                        
                        Comentário: O pronome “isso” classifica-se como demonstrativo, tendo, no trecho, a função 
                        coesiva, retomando a ideia de origem dos fenômenos.
                        `,
                opcao2: `“Em todo o mundo, os danos causados pela sobrecarga são cada vez mais evidentes: 
                        desflorestação, escassez de água doce, erosão do solo [...]”
                        
                        Comentário: No trecho, há o emprego do vocábulo “escassez”, considerado uma palavra 
                        derivada, formada a partir de um sufixo formador de substantivo.
                        `,
                opcao3: `“Por sua vez, esses danos acentuam e dão origem a fenômenos [...].”
                        
                        Comentário: Apesar de a conjunção “e” ser coordenativa aditiva, no trecho ela estabelece 
                        também uma noção de consequência.
                `,
                opcao4: `“[...] se 50% do consumo de carne fosse substituído por uma dieta vegetariana, a data poderia 
                        mover-se 5 dias [...]”
                        
                        Comentário: O vocábulo que introduz o trecho acima (“se”) tem a noção de condição, sendo 
                        uma conjunção subordinativa, podendo ser substituída, sem qualquer prejuízo gramatical ou de 
                        sentido, por “caso”.
                        `,
                opcao5: `“O cálculo é feito por um centro de estudos americanos, o Global Footprint Network.”
                
                        Comentário: “Estudos” pode ser considerada uma palavra homônima, uma vez que ela se 
                        classifica no trecho como um substantivo, mas também existe um verbo referente a ela: “estudar”.
                `,
                respostaCorreta: 'E',
                disciplinaId: portugues.id,
                categoriaId: coesaoCoerenciaTextual.id,
                provaId: prova12020.id,
                ordem: 9,
            });


            const questao10_12020 = await Questao.create({
                enunciado: `
                “Na Global Footprint Network acreditamos que o uso excessivo dos ecossistemas da 
                Terra constitui um dos maiores desafios que a humanidade enfrenta na atualidade, sendo que as 
                alterações climáticas são uma parte importante desse desafio, concluiu Wackernagel.”
                
                No trecho acima foram empregados elementos adverbiais indicadores
                `,
                opcao1: `de modo e de tempo.`,
                opcao2: `de lugar e de tempo.`,
                opcao3: `apenas de tempo.`,
                opcao4: `apenas de lugar.`,
                opcao5: `de lugar e de modo`,
                respostaCorreta: 'B',
                disciplinaId: portugues.id,
                categoriaId: adverbios.id,
                provaId: prova12020.id,
                ordem: 10,
            });


            const questao11_12020 = await Questao.create({
                enunciado: `
                Sobre as considerações acerca do cartaz apresentado, há uma que é INCORRETA. 
                Indique-a.`,
                opcao1: `A locução verbal empregada transmite uma noção conotativa em seu verbo auxiliar.`,
                opcao2: `O texto verbal é composto por uma declaração afirmativa e uma oração com denotação 
                        imperativa.`,
                opcao3: `Há vocábulos empregados no cartaz que estabelecem uma relação imediata com qualquer 
                        receptor da mensagem, envolvendo-o na situação declarada: “faça” e “sua”.`,
                opcao4: `A parte não-verbal do cartaz estabelece uma relação semântica com a verbal`,
                opcao5: `Há uma intenção de persuasão do receptor por meio dos serviços oferecidos pela empresa 
                        anunciante e um conceito ecológico de sustentabilidade. `,
                respostaCorreta: 'A',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova12020.id,
                ordem: 11,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova4-11.png"
            });


            const questao12_12020 = await Questao.create({
                enunciado: `
                “Natureza e concreto podem andar de mãos dadas – Faça sua parte!”
                
                Sobre os aspectos morfossintáticos do texto, marque o que traz uma consideração em 
                DESACORDO.
                `,
                opcao1: `O conectivo “e” está na função de unir dois termos de função sintática idêntica.`,
                opcao2: `O vocábulo “sua” é um pronome possessivo, referindo-se, nesse contexto, a um interlocutor 
                        que não se faz presente no cartaz.`,
                opcao3: `A expressão “de mãos dadas” tem, nesse contexto, uma noção adverbial de meio.`,
                opcao4: `“Parte” está na função de objeto direto do verbo que o antecede`,
                opcao5: `A segunda oração possui um sujeito desinencial.`,
                respostaCorreta: 'C',
                disciplinaId: portugues.id,
                categoriaId: analiseSintatica.id,
                provaId: prova12020.id,
                ordem: 12,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova4-11.png"
            });


            const questao13_12020 = await Questao.create({
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
                opcao1: `“E a minha também, e o mal estar me invade o corpo.”`,
                opcao2: `“Desculpem se vomito à vista de pessoas tão distintas.”`,
                opcao3: `“Pesadelo? Sinal dos tempos?”`,
                opcao4: `“se pecado é viver entre rios sem peixe”`,
                opcao5: `“Envenenada morre a flor de outubro”`,
                respostaCorreta: 'B',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova12020.id,
                ordem: 13,
            });


            const questao14_12020 = await Questao.create({
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
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova12020.id,
                ordem: 14,
            });


            const questao15_12020 = await Questao.create({
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
                opcao4: `à espuma que certos detritos formam sob as águas do rio Tietê.`,
                opcao5: `às bolhas que flutuam no ar, espalhadas pelo vento.`,
                respostaCorreta: 'D',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova12020.id,
                ordem: 15,
            });


            const questao16_12020 = await Questao.create({
                enunciado: `
                A figura mostra o deslocamento de um avião que decolou na cidade A com destino a cidade 
                E, fazendo escala na cidade C. As distâncias entre as cidades A e C e C e E são, ambas, iguais a 
                500km e, ambos os trechos, são retilíneos. Ao decolar da cidade A, o avião seguiu na direção de 
                20° à direita em relação ao norte (que está representado pelo segmento AB). Ao decolar da cidade 
                C o avião seguiu na direção de 34° à esquerda em relação ao norte (desta vez representado pelo 
                segmento CD). Se o avião tivesse decolado na cidade A em direção a cidade E sem fazer escala 
                na cidade C, descrevendo o caminho representado pelo segmento de reta tracejado AE, qual seria 
                o ângulo x desse caminho em relação ao norte?`,
                opcao1: `5°`,
                opcao2: `6°`,
                opcao3: `7°`,
                opcao4: `8°`,
                opcao5: `9°`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: geometriaAnalitica.id,
                provaId: prova12020.id,
                ordem: 16,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova4-16.png"
            });


            const questao18_12020 = await Questao.create({
                enunciado: `
                Seja O o centro da circunferência circunscrita ao triângulo acutângulo ABC e seja D o pé 
                da perpendicular baixada de A sobre BC. Sabendo que o ângulo OÂC = 37°, determine a medida 
                do ângulo DÂB.`,
                opcao1: `23°`,
                opcao2: `33°`,
                opcao3: `37°`,
                opcao4: `47°`,
                opcao5: `53°`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: trigonometria.id,
                provaId: prova12020.id,
                ordem: 17,
            });

            const questao19_12020 = await Questao.create({
                enunciado: `
                Considere as funções 𝑓(x) = x² - 5x + 6 e g(x) = -f(x). Determine a área do quadrilátero
                ABCD, sabendo que A e C são os zeros da função f, B é ponto de mínimo de f e D é ponto de
                máximo de g.`,
                opcao1: `1/4`,
                opcao2: `1/2`,
                opcao3: `3/4`,
                opcao4: `1`,
                opcao5: `2`,
                respostaCorreta: 'A',
                disciplinaId: matematica.id,
                categoriaId: geometriaAnalitica.id,
                provaId: prova12020.id,
                ordem: 18,
            });


            const questao20_12020 = await Questao.create({
                enunciado: `
                A figura abaixo apresenta o esquema de uma roda gigante. Esta roda gigante tem 60 metros de 
                diâmetro externo e seu centro (ponto C) está localizado a 35 metros do chão. A estrutura que 
                faz a sustentação, representada pelo segmento CI, é perpendicular ao solo. A roda gigante gira 
                no sentido anti-horário a uma velocidade constante e faz uma volta completa, sem parar, em 
                exatamente seis minutos. Uma pessoa embarca e inicia a sua volta na roda gigante no ponto de 
                embarque D. 
                
                Fixando o plano cartesiano com o eixo-x paralelo ao solo e a origem coincindindo com 
                o ponto C, em qual quadrante estará essa pessoa após cinco minutos do início da sua volta, 
                considerando que a roda não parou após o seu embarque?`,
                opcao1: `Primeiro`,
                opcao2: `Segundo`,
                opcao3: `Terceiro`,
                opcao4: `Quarto`,
                opcao5: `Sobre o eixo-x`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: trigonometria.id,
                provaId: prova12020.id,
                ordem: 19,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova4-20.png"
            });


            const questao21_12020 = await Questao.create({
                enunciado: `
                A figura abaixo apresenta o esquema de uma roda gigante. Esta roda gigante tem 60 metros de 
                diâmetro externo e seu centro (ponto C) está localizado a 35 metros do chão. A estrutura que 
                faz a sustentação, representada pelo segmento CI, é perpendicular ao solo. A roda gigante gira 
                no sentido anti-horário a uma velocidade constante e faz uma volta completa, sem parar, em 
                exatamente seis minutos. Uma pessoa embarca e inicia a sua volta na roda gigante no ponto de 
                embarque D. 
                
                A que altura em relação ao solo, estará essa pessoa após cinco minutos do início da sua 
                volta, considerando que a roda não parou após o seu embarque?`,
                opcao1: `10 m`,
                opcao2: `15 m`,
                opcao3: `20 m`,
                opcao4: `25 m`,
                opcao5: `30 m`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: trigonometria.id,
                provaId: prova12020.id,
                ordem: 20,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova4-20.png"
            });


            const questao22_12020 = await Questao.create({
                enunciado: `
                A figura abaixo apresenta o esquema de uma roda gigante. Esta roda gigante tem 60 metros de 
                diâmetro externo e seu centro (ponto C) está localizado a 35 metros do chão. A estrutura que 
                faz a sustentação, representada pelo segmento CI, é perpendicular ao solo. A roda gigante gira 
                no sentido anti-horário a uma velocidade constante e faz uma volta completa, sem parar, em 
                exatamente seis minutos. Uma pessoa embarca e inicia a sua volta na roda gigante no ponto de 
                embarque D. 
                
                Quantos metros percorreu essa pessoa após cinco minutos do início da sua volta, 
                considerando que a roda não parou após o seu embarque?`,
                opcao1: `10π m`,
                opcao2: `50π/3 m`,
                opcao3: `50π m`,
                opcao4: `175π/3 m`,
                opcao5: `60π m`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: trigonometria.id,
                provaId: prova12020.id,
                ordem: 21,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova4-20.png"
            });


            const questao23_12020 = await Questao.create({
                enunciado: `
                Em um quadrado mágico n x n (n linhas e n colunas), a soma dos números de cada linha, 
                coluna ou diagonal deve ser sempre a mesma. A figura abaixo apresenta um quadrado mágico 
                3x3 com alguns números já conhecidos. Qual é o valor de x + y + z?`,
                opcao1: `58`,
                opcao2: `62`,
                opcao3: `66`,
                opcao4: `68`,
                opcao5: `72`,
                respostaCorreta: 'D',
                disciplinaId: matematica.id,
                categoriaId: matematicaRecreativa.id,
                provaId: prova12020.id,
                ordem: 22,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova4-23.png"
            });


            const questao24_12020 = await Questao.create({
                enunciado: `
                A figura abaixo ilustra dois triângulos ABC e CDE. Sabendo que os ângulos 𝐴B𝐶,𝐵𝐶̂𝐷 e 𝐶𝐸𝐷 
                são retos, os pontos A, E e C são colineares, 𝐴𝐵 = 8 e BC = 15, determine o valor da razão entre
                os segmentos DE e DC.`,
                opcao1: `1`,
                opcao2: `13/15`,
                opcao3: `15/17`,
                opcao4: `17/25`,
                opcao5: `19/13`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: geometriaAnalitica.id,
                provaId: prova12020.id,
                ordem: 23,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova4-24.png"
            });


            const questao25_12020 = await Questao.create({
                enunciado: `
                Dado o conjunto A={0,1,2,3,4,5,6,7,8,9,10}, considere uma função de A em ℕ∗ tal que 
                f(a + b) = f(a)f(b) e f(1) = 1. O conjunto imagem de f possui quantos elementos?`,
                opcao1: `1`,
                opcao2: `2`,
                opcao3: `5`,
                opcao4: `9`,
                opcao5: `10`,
                respostaCorreta: 'A',
                disciplinaId: matematica.id,
                categoriaId: conjuntos.id,
                provaId: prova12020.id,
                ordem: 24,
            });

            const questao27_12020 = await Questao.create({
                enunciado: `
                O produto entre dois números é 391 e a soma de seus quadrados é 818. Determine o valor 
                da diferença entre os quadrados desses números, sabendo que um é 6 unidades maior do que o 
                outro.`,
                opcao1: `96`,
                opcao2: `182`,
                opcao3: `240`,
                opcao4: `380`,
                opcao5: `396`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: algebra.id,
                provaId: prova12020.id,
                ordem: 25,
            });


            const questao29_12020 = await Questao.create({
                enunciado: `
                Um tênis que custava R$ 160,00 em outubro, teve um aumento de 5% em seu preço para o 
                mês de novembro. O salário de Celso também teve um aumento de 5% em novembro, de modo 
                que o tênis, em novembro, passou a custar 8% do salário de Celso. Qual era o salário de Celso 
                em outubro?`,
                opcao1: `R$ 1600,00`,
                opcao2: `R$ 1980,00`,
                opcao3: `R$ 2000,00`,
                opcao4: `R$ 2100,00`,
                opcao5: `R$ 2178,00`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: porcentagem.id,
                provaId: prova12020.id,
                ordem: 26,
            });


            const questao30_12020 = await Questao.create({
                enunciado: `
                Em uma festa, o valor da entrada era R$ 1000,00. Porém, os organizadores devolverão, 
                no fim da festa, para cada um que comprou entrada, 10 reais vezes a quantidade de entradas 
                vendidas para a festa. Dessa forma, se forem vendidos, por exemplo, 5 entradas, cada comprador 
                pagará R$ 1000,00 e receberá de volta R$ 50,00 no fim da festa. Qual a arrecadação máxima 
                possível para essa festa, assumindo que a quantidade máxima de entradas disponível é 90?`,
                opcao1: `R$ 9.000,00`,
                opcao2: `R$ 12.000,00`,
                opcao3: `R$ 15.000,00`,
                opcao4: `R$ 25.000,00`,
                opcao5: `R$ 40.000,00`,
                respostaCorreta: 'D',
                disciplinaId: matematica.id,
                categoriaId: funcoesOtimizacoes.id,
                provaId: prova12020.id,
                ordem: 27,
            });


            const questao31_12020 = await Questao.create({
                enunciado: `
                Durante a transmissão de uma corrida de fórmula 1, são indicados pontos de máxima e 
                mínima velocidades por meio de um velocímetro mostrado na tela da TV. Se o percurso do 
                autódromo for de 4,550 Km e o tempo médio por volta de 1 min e 5 s. Determine a velocidade 
                escalar média por volta e a duração aproximada da corrida para completar 71 voltas.`,
                opcao1: `250 Km/h; 1h:17 min`,
                opcao2: `252 Km/h; 1h:17 min`,
                opcao3: `252 Km/h; 1h:21 min`,
                opcao4: `253 Km/h; 1h:21 min`,
                opcao5: `253 Km/h; 1h:25 min`,
                respostaCorreta: 'B',
                disciplinaId: ciencia.id,
                categoriaId: cinematica.id,
                provaId: prova12020.id,
                ordem: 28,
            });


            const questao32_12020 = await Questao.create({
                enunciado: `
                Um carro está trafegando por uma rodovia retilínea com a velocidade de 72 Km/h. Ao 
                observar um “quebra-molas” adiante, o motorista aciona os freios, percorrendo uma certa 
                distância no intervalo de 5 segundos, reduzindo sua velocidade para 36 Km/h. Supondo que a 
                aceleração é constante durante o período de frenagem, determine seu módulo:`,
                opcao1: `0 m/s²`,
                opcao2: `1 m/s²`,
                opcao3: `2 m/s²`,
                opcao4: `4 m/s²`,
                opcao5: `5 m/s²`,
                respostaCorreta: 'C',
                disciplinaId: ciencia.id,
                categoriaId: cinematica.id,
                provaId: prova12020.id,
                ordem: 29,
            });


            const questao33_12020 = await Questao.create({
                enunciado: `
                Nas regiões onde o inverno é mais rigoroso, é comum às pessoas ficarem perto de lareiras  
                para se aquecerem. Esse tipo de aquecimento ocorre por:`,
                opcao1: `Irradiação térmica.`,
                opcao2: `Condução térmica.`,
                opcao3: `Convecção.`,
                opcao4: `Condutibilidade.`,
                opcao5: `Dilatação térmica.`,
                respostaCorreta: 'A',
                disciplinaId: ciencia.id,
                categoriaId: termologia.id,
                provaId: prova12020.id,
                ordem: 30,
            });


            const questao35_12020 = await Questao.create({
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
                opcao2: `O carbonato de cálcio (CaCO3) é um sal composto por elementos dos grupos: metais alcalinos 
                        terrosos, calcogênios e halogênios.`,
                opcao3: `Os metais alcalinos reagem facilmente com a água gerando gás hidrogênio e base, além de 
                        liberar energia.`,
                opcao4: `Os ametais apresentam algumas propriedades opostas às dos metais, como por exemplo, a 
                        condutividade elétrica.`,
                opcao5: `Os gases nobres dificilmente se combinam com outros elementos devido à estabilidade gerada 
                        pelo número de elétrons contidos na camada de valência desses elementos.`,
                respostaCorreta: 'B',
                disciplinaId: ciencia.id,
                categoriaId: tabelaPeriodica.id,
                provaId: prova12020.id,
                ordem: 31,
            });


            const questao37_12020 = await Questao.create({
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
                disciplinaId: ciencia.id,
                categoriaId: meioAmbiente.id,
                provaId: prova12020.id,
                ordem: 32,
            });


            const questao38_12020 = await Questao.create({
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
                apresentada acima.`,
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
                disciplinaId: ciencia.id,
                categoriaId: fotossintese.id,
                provaId: prova12020.id,
                ordem: 33,
            });


            const questao39_12020 = await Questao.create({
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

                Considerando o tema abordado no texto, pode-se afirmar que a alternativa CORRETA é:
                `,
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
                disciplinaId: ciencia.id,
                categoriaId: intoleranciaLactose.id,
                provaId: prova12020.id,
                ordem: 34,
            });


            const questao40_12020 = await Questao.create({
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
                opcao2: `É uma doença contagiosa, com sintomas de coriza, catarro e pintas vermelhas na pele, causada 
                        por vírus que atacam adultos e crianças.`,
                opcao3: `É uma doença transmitida por contato físico entre pessoas contaminadas, sendo causada por 
                        fungos. Pode ser prevenida por meio de vacina.`,
                opcao4: `É uma doença transmitida por bactérias que causam erupções na pele, produção de coriza e 
                        catarro. Pode ser prevenida pelo isolamento do paciente doente.`,
                opcao5: `É uma doença viral sem prevenção ou tratamento, cujos sintomas são o catarro e as erupções 
                        na pele.`,
                respostaCorreta: 'B',
                disciplinaId: ciencia.id,
                categoriaId: saudeEpidemiologia.id,
                provaId: prova12020.id,
                ordem: 35,
            });


            const questao41_12020 = await Questao.create({
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
                
                O Códice Florentino é uma preciosa fonte de informações sobre os modos de vida dos 
                astecas, importante civilização nativa do continente americano. A respeito da civilização asteca, 
                é CORRETO afirmar que
                `,
                opcao1: `o império asteca (Tawantinsuyu em quíchua) foi um Estado criado pela civilização mexica, 
                        resultado de uma sucessão de civilizações andinas e que se tornou o maior império da América 
                        pré-colombiana. A administração política e o centro de forças armadas do império ficavam 
                        localizados em Cusco (em quíchua, “Umbigo do Mundo”), no atual Peru.`,
                opcao2: `os povos astecas incluíam diferentes grupos étnicos do México central, particularmente 
                        aqueles grupos que falavam a língua náuatle e dominaram grandes partes da Mesoamérica, entre 
                        os séculos XIV e XVI. A cultura asteca era organizada em cidades-Estado (altepetl), algumas 
                        das quais se juntaram para formar alianças, confederações políticas ou impérios.`,
                opcao3: `considerada a civilização-mãe de todas as culturas mesoamericanas que lhe são posteriores, a 
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
                disciplinaId: historia.id,
                categoriaId: civilizacaoAsteca.id,
                provaId: prova12020.id,
                ordem: 36,
            });


            const questao43_12020 = await Questao.create({
                enunciado: `
                Durante o período colonial brasileiro, nossas riquezas foram exploradas ao extremo. 
                Destacaram-se como economia principal o cultivo da cana-de-açúcar e a mineração, porém 
                haviam atividades periféricas que também movimentaram a economia colonial, tais como a 
                pecuária, o plantio de tabaco, algodão e cacau, a extração das drogas do sertão e do pau-brasil, 
                entre outras. Sobre a produção econômica do Brasil colônia, assinale a alternativa INCORRETA.
                `,
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
                disciplinaId: historia.id,
                categoriaId: historiaBrasil.id,
                provaId: prova12020.id,
                ordem: 37,
            });


            const questao44_12020 = await Questao.create({
                enunciado: `
                Observe a imagem abaixo.

                A imagem se refere à memória dos episódios ocorridos em 11 de setembro de 2001 nos 
                Estados Unidos da América. A respeito desses eventos e de suas consequências para a política 
                internacional da primeira década do século XXI, assinale a alternativa CORRETA.
                `,
                opcao1: `Os atentados terroristas do 11 de setembro serviram para que os EUA justificassem a invasão 
                        ao Irã, dando início à Guerra do Golfo e à Guerra do Afeganistão, na primeira década do século 
                        XXI.`,
                opcao2: `Os ataques às Torres Gêmeas e ao Pentágono, em 2001, motivaram a deflagração da operação 
                        Condor, com uma maior intervenção dos EUA na política interna de países latino-americanos.`,
                opcao3: `O 11 de setembro marcou o fim da Guerra Fria e o início da política de boa vizinhança (Good 
                        Neighbor Policy) dos EUA com os países do Oriente Médio.`,
                opcao4: `Os atentados em 2001 serviram para que os EUA justificassem a sua “guerra ao terror” (War 
                        on terror), dando início às Guerras do Afeganistão e do Iraque, iniciadas em 2001 e em 2003, 
                        respectivamente.`,
                opcao5: `Os meses posteriores ao 11 de setembro foram marcados pela realização da Conferência de 
                        Ialta, pela criação da ONU e pela assinatura da Declaração Universal dos Direitos Humanos, em 
                        dezembro de 2001.`,
                respostaCorreta: 'D',
                disciplinaId: historia.id,
                categoriaId: historiaContemporanea.id,
                provaId: prova12020.id,
                ordem: 38,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova4-44.png"
            });


            const questao45_12020 = await Questao.create({
                enunciado: `
                Leia o fragmento do texto a seguir para responder a questão
                
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
                (Lei n°. 6.683/1979). Sobre o contexto histórico de aplicação dessa Lei, podemos afirmar que
                `,
                opcao1: `a exemplo de países como a Argentina, os agentes de Estado envolvidos em torturas, sequestros 
                        e prisões políticas no Brasil foram devidamente condenados por seus crimes contra os direitos 
                        humanos.`,
                opcao2: `várias organizações e entidades da sociedade civil brasileira passaram a se mobilizar de modo 
                        mais incisivo na luta pela anistia durante o período de governo do presidente Ernesto Geisel.`,
                opcao3: `as mulheres tiveram papel fundamental na luta pela anistia no Brasil, embora não estivessem 
                        envolvidas em nenhum movimento organizado. No entanto, esse protagonismo feminino não é 
                        apresentado na maioria dos livros didáticos, reforçando a falta de espaço dado às mulheres na  
                        História.`,
                opcao4: `Os militares defenderam o projeto de uma lei de anistia ampla, geral e irrestrita, como forma 
                        de punir os atos de exceção cometidos pelos seus pares durante o período ditatorial brasileiro.`,
                opcao5: `A Lei de Anistia, sancionada pelo general Figueiredo, perdoava a todos, exceto os torturadores, 
                        e permitia a volta ao país de milhares de exilados políticos.`,
                respostaCorreta: 'B',
                disciplinaId: historia.id,
                categoriaId: historiaBrasil.id,
                provaId: prova12020.id,
                ordem: 39,
            });


            const questao49_12020 = await Questao.create({
                enunciado: `
                Leia o excerto a seguir e responda à questão.

                “[…] Ela não é uma estrada: é o maior conjunto de obras da história [...]. Foi anunciada a ‘One 
                Belt One Road’ (“um cinturão, uma rota”, em inglês). Ela inclui uma quantidade astronômica de 
                dinheiro: nada menos do que US$ 5 trilhões. Isso é três vezes o PIB do Brasil, e quase 40 vezes 
                o valor atualizado do Plano Marshall, que os EUA criaram para reconstruir a Europa após a 2a 
                Guerra Mundial”.

                Essa nova proposta de logística comercial promete sacudir os eixos do comércio mundial 
                e, consequentemente, o balanço geopolítico do planeta. A  referida proposta diz respeito ao(à/a)
                `,
                opcao1: `reconfiguração da Otan, incrementada a partir da adesão de países norte-africanos, banhados 
                        pelo Atlântico.`,
                opcao2: `crescimento da Parceria Transpacífica, que passará a agregar os países do continente africano.`,
                opcao3: `Nova Rota da Seda, uma trilionária série de investimentos, sobretudo nas áreas de transporte 
                        e infraestrutura, conectando Europa, Oriente Médio, Ásia e África à China.`,
                opcao4: `retomada da criação da Alca – a Área de Livre Comércio das Américas.`,
                opcao5: `ratificação da ampliação da União Europeia, envolvendo todos os países dos Balcãs e do 
                        Cáucaso.`,
                respostaCorreta: 'C',
                disciplinaId: geografia.id,
                categoriaId: geopolitica.id,
                provaId: prova12020.id,
                ordem: 40,
            });


            const questao50_12020 = await Questao.create({
                enunciado: `
                O espaço agropecuário brasileiro tem reassumido um papel de destaque na economia 
                nacional. Frente ao processo de desindustrialização atravessado pelo país, a agropecuária 
                tem se destacado na geração de riqueza e contribuído para o superávit da balança comercial. 
                Entretanto, o setor não é isento de controvérsias. Entre as características e problemáticas do 
                espaço agropecuário brasileiro, é INCORRETO afirmar que
                `,
                opcao1: `embora sejamos um dos maiores produtores de alimentos do mundo, ainda nos martiriza o 
                        fantasma da fome e da subnutrição.`,
                opcao2: ` o aumento da produção agropecuária e a geração de riqueza dele decorrente têm consequências 
                        socioambientais que não podem ser desprezadas.`,
                opcao3: `o modelo de atividades agropecuárias que produz a maior parte dos insumos básicos 
                        diversificados de alimentação é conhecido como agricultura familiar.`,
                opcao4: `há a persistência de conflitos no campo, muitos deles motivados pelas disputas da posse de 
                        terras.`,
                opcao5: `a necessidade de democratização do acesso à terra por meio da reforma agrária tem sido uma 
                        grande prioridade de todos os governos após o final do período de governo militar.`,
                respostaCorreta: 'E',
                disciplinaId: geografia.id,
                categoriaId: geografiaAgraria.id,
                provaId: prova12020.id,
                ordem: 40,
            });

            //TERMINEI 1/2020

            const questao1_12019 = await Questao.create({
                enunciado: `
                Leia os textos para responder a questão:
                
                TEXTO 1                
                
                JOVEM: CONSUMIDOR OU CIDADÃO?
                
                  É justamente pela imagem do novo, do futuro dada pela juventude, que o cenário da 
                sociedade brasileira hoje é composto, principalmente, de jovens.
                  Como analisa Maria Rita Kehl em seu texto intitulado “Adultescência” (1998), ao 
                contrário dos anos 1930, quando Nelson Rodrigues em uma crônica descreveu que “os 
                moços não tinham função, nem destino. A época não suportava a mocidade”, no Brasil 
                de hoje somos todos jovens: pessoas de 40 anos, a partir dos anos 1990, têm a aparência 
                e a vitalidade que tinham pessoas de 25 três gerações atrás.
                  A grande questão da supervalorização da juventude é que, muito mais do que um 
                sinal de que realmente os jovens vêm ganhando espaços e direitos em nossa sociedade, 
                a escolha pela juventude é fruto do consumo. “Ser jovem virou slogan, virou clichê 
                publicitário, virou imperativo categórico – condição para se pertencer a uma certa elite 
                atualizada e vitoriosa. Ao mesmo tempo, a ‘juventude’ se revelava um poderosíssimo 
                exército de consumidores, livres dos freios morais e religiosos que regulavam a relação 
                do corpo com os prazeres”, escreve Kehl.
                  Dessa forma, segundo a autora, quanto mais tempo uma pessoa for considerada jovem, 
                melhor. Melhor para a indústria, para a publicidade. Ser jovem na contemporaneidade é 
                ser consumidor e não um cidadão, um sujeito de direitos.
                
                Texto 2

                  Jovens têm sido moldados por adultos de forma que se tornem receptores passivos 
                do mercado, dos programas sociais e das políticas públicas voltadas a eles, uma vez que 
                representam mais claramente, como analisado por Bourdieu (1978), uma disputa de poder 
                social entre o passado e o futuro.
                  Adam Fletcher, educador americano e fundador do Projeto Freechild, uma das 
                principais organizações voltadas para práticas de engajamento e participação juvenil, 
                defende a ideia de que é preciso parar de entender os jovens como incapazes de realizar 
                suas próprias escolhas e de praticar o que ele chama de “adultismo”, que é tratar o jovem 
                pela visão do adulto.
                   Para quebrar o paradigma de colocar o jovem como alvo de políticas públicas pensadas 
                por adultos, com o objetivo de serem apenas consumidores de produtos ou de ações 
                feitas por políticas públicas ou por organizações sociais, Adam Fletcher alerta para uma 
                mudança do modo como a sociedade atua: “A sociedade precisa parar de fazer as coisas 
                para os jovens e fazê-las com os jovens”.

                Pode-se inferir que o texto 2`,
                opcao1: `confronta as abordagens feitas no texto 1.`,
                opcao2: `ratifica as ideias expostas no texto 1.`,
                opcao3: `critica os fatos levantados no texto 1.`,
                opcao4: `contradiz as afirmações declaradas do texto 1.`,
                opcao5: `oferece sugestões para as problemáticas apontadas no texto 1.`,
                respostaCorreta: 'B',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova12019.id,
                ordem: 1,
            });

            const questao2_12019 = await Questao.create({
                enunciado: `
                Leia os textos para responder a questão:
                
                TEXTO 1                
                
                JOVEM: CONSUMIDOR OU CIDADÃO?
                
                  É justamente pela imagem do novo, do futuro dada pela juventude, que o cenário da 
                sociedade brasileira hoje é composto, principalmente, de jovens.
                  Como analisa Maria Rita Kehl em seu texto intitulado “Adultescência” (1998), ao 
                contrário dos anos 1930, quando Nelson Rodrigues em uma crônica descreveu que “os 
                moços não tinham função, nem destino. A época não suportava a mocidade”, no Brasil 
                de hoje somos todos jovens: pessoas de 40 anos, a partir dos anos 1990, têm a aparência 
                e a vitalidade que tinham pessoas de 25 três gerações atrás.
                  A grande questão da supervalorização da juventude é que, muito mais do que um 
                sinal de que realmente os jovens vêm ganhando espaços e direitos em nossa sociedade, 
                a escolha pela juventude é fruto do consumo. “Ser jovem virou slogan, virou clichê 
                publicitário, virou imperativo categórico – condição para se pertencer a uma certa elite 
                atualizada e vitoriosa. Ao mesmo tempo, a ‘juventude’ se revelava um poderosíssimo 
                exército de consumidores, livres dos freios morais e religiosos que regulavam a relação 
                do corpo com os prazeres”, escreve Kehl.
                  Dessa forma, segundo a autora, quanto mais tempo uma pessoa for considerada jovem, 
                melhor. Melhor para a indústria, para a publicidade. Ser jovem na contemporaneidade é 
                ser consumidor e não um cidadão, um sujeito de direitos.
                
                Texto 2

                  Jovens têm sido moldados por adultos de forma que se tornem receptores passivos 
                do mercado, dos programas sociais e das políticas públicas voltadas a eles, uma vez que 
                representam mais claramente, como analisado por Bourdieu (1978), uma disputa de poder 
                social entre o passado e o futuro.
                  Adam Fletcher, educador americano e fundador do Projeto Freechild, uma das 
                principais organizações voltadas para práticas de engajamento e participação juvenil, 
                defende a ideia de que é preciso parar de entender os jovens como incapazes de realizar 
                suas próprias escolhas e de praticar o que ele chama de “adultismo”, que é tratar o jovem 
                pela visão do adulto.
                   Para quebrar o paradigma de colocar o jovem como alvo de políticas públicas pensadas 
                por adultos, com o objetivo de serem apenas consumidores de produtos ou de ações 
                feitas por políticas públicas ou por organizações sociais, Adam Fletcher alerta para uma 
                mudança do modo como a sociedade atua: “A sociedade precisa parar de fazer as coisas 
                para os jovens e fazê-las com os jovens”.

                No texto 1, linha 6, os dois-pontos empregados estão na função de`,
                opcao1: `iniciar uma justificativa para o pensamento da sociedade sobre os jovens na década de 30.`,
                opcao2: `trazer uma exemplificação concreta sobre as ideias contrárias da sociedade sobre a juventude.`,
                opcao3: `apontar um ponto de vista pessoal do autor sobre a juventude dos tempos atuais.`,
                opcao4: `explicar a afirmação imediatamente anterior feita pelo autor do texto.`,
                opcao5: `mostrar, por meio de dados numéricos, que a população jovem da atualidade é maior que no 
                        passado.`,
                respostaCorreta: 'D',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova12019.id,
                ordem: 2,
            });

            const questao3_12019 = await Questao.create({
                enunciado: `
                Leia os textos para responder a questão:
                
                TEXTO 1                
                
                JOVEM: CONSUMIDOR OU CIDADÃO?
                
                  É justamente pela imagem do novo, do futuro dada pela juventude, que o cenário da 
                sociedade brasileira hoje é composto, principalmente, de jovens.
                  Como analisa Maria Rita Kehl em seu texto intitulado “Adultescência” (1998), ao 
                contrário dos anos 1930, quando Nelson Rodrigues em uma crônica descreveu que “os 
                moços não tinham função, nem destino. A época não suportava a mocidade”, no Brasil 
                de hoje somos todos jovens: pessoas de 40 anos, a partir dos anos 1990, têm a aparência 
                e a vitalidade que tinham pessoas de 25 três gerações atrás.
                  A grande questão da supervalorização da juventude é que, muito mais do que um 
                sinal de que realmente os jovens vêm ganhando espaços e direitos em nossa sociedade, 
                a escolha pela juventude é fruto do consumo. “Ser jovem virou slogan, virou clichê 
                publicitário, virou imperativo categórico – condição para se pertencer a uma certa elite 
                atualizada e vitoriosa. Ao mesmo tempo, a ‘juventude’ se revelava um poderosíssimo 
                exército de consumidores, livres dos freios morais e religiosos que regulavam a relação 
                do corpo com os prazeres”, escreve Kehl.
                  Dessa forma, segundo a autora, quanto mais tempo uma pessoa for considerada jovem, 
                melhor. Melhor para a indústria, para a publicidade. Ser jovem na contemporaneidade é 
                ser consumidor e não um cidadão, um sujeito de direitos.
                
                Texto 2

                  Jovens têm sido moldados por adultos de forma que se tornem receptores passivos 
                do mercado, dos programas sociais e das políticas públicas voltadas a eles, uma vez que 
                representam mais claramente, como analisado por Bourdieu (1978), uma disputa de poder 
                social entre o passado e o futuro.
                  Adam Fletcher, educador americano e fundador do Projeto Freechild, uma das 
                principais organizações voltadas para práticas de engajamento e participação juvenil, 
                defende a ideia de que é preciso parar de entender os jovens como incapazes de realizar 
                suas próprias escolhas e de praticar o que ele chama de “adultismo”, que é tratar o jovem 
                pela visão do adulto.
                   Para quebrar o paradigma de colocar o jovem como alvo de políticas públicas pensadas 
                por adultos, com o objetivo de serem apenas consumidores de produtos ou de ações 
                feitas por políticas públicas ou por organizações sociais, Adam Fletcher alerta para uma 
                mudança do modo como a sociedade atua: “A sociedade precisa parar de fazer as coisas 
                para os jovens e fazê-las com os jovens”.

                O título do texto 1 traz um questionamento: “Jovem: consumidor ou cidadão?”. O 
                desenvolvimento do texto traz como resposta a seguinte tese:`,
                opcao1: `iniciar uma justificativa para o pensamento da sociedade sobre os jovens na década de 30.apesar de haver um apelo comercial muito grande direcionado aos jovens, estes não deixam 
                        de exercer seu livre-arbítrio, equilibrando a noção de consumidor e de cidadão.`,
                opcao2: `os jovens são consumidores contundentes, mas tal característica não os impede de serem 
                        cidadãos conscientes de seus atos e deveres, sendo assim, são tão cidadãos como consumidores.`,
                opcao3: `o apelo à juventude constante do ser leva os jovens a estarem sempre atualizados com a 
                        sociedade que os cerca, o que os faz sempre cidadãos do mundo em que vivem.`,
                opcao4: `os jovens da atualidade são os protagonistas de suas histórias e de certa forma determinam o 
                        comportamento da sociedade, levando as mídias a estarem sempre ofertando inovações a esse 
                        público, tornando-os assim tão consumidores quanto cidadãos.`,
                opcao5: `a máquina industrial e a midiática fazem com que as pessoas se sintam cada vez mais jovens 
                        por um tempo mais longo, tornando-as muito mais consumidoras que cidadãs.`,
                respostaCorreta: 'E',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova12019.id,
                ordem: 3,
            });

            const questao4_12019 = await Questao.create({
                enunciado: `
                Leia os textos para responder a questão:
                
                TEXTO 1                
                
                JOVEM: CONSUMIDOR OU CIDADÃO?
                
                  É justamente pela imagem do novo, do futuro dada pela juventude, que o cenário da 
                sociedade brasileira hoje é composto, principalmente, de jovens.
                  Como analisa Maria Rita Kehl em seu texto intitulado “Adultescência” (1998), ao 
                contrário dos anos 1930, quando Nelson Rodrigues em uma crônica descreveu que “os 
                moços não tinham função, nem destino. A época não suportava a mocidade”, no Brasil 
                de hoje somos todos jovens: pessoas de 40 anos, a partir dos anos 1990, têm a aparência 
                e a vitalidade que tinham pessoas de 25 três gerações atrás.
                  A grande questão da supervalorização da juventude é que, muito mais do que um 
                sinal de que realmente os jovens vêm ganhando espaços e direitos em nossa sociedade, 
                a escolha pela juventude é fruto do consumo. “Ser jovem virou slogan, virou clichê 
                publicitário, virou imperativo categórico – condição para se pertencer a uma certa elite 
                atualizada e vitoriosa. Ao mesmo tempo, a ‘juventude’ se revelava um poderosíssimo 
                exército de consumidores, livres dos freios morais e religiosos que regulavam a relação 
                do corpo com os prazeres”, escreve Kehl.
                  Dessa forma, segundo a autora, quanto mais tempo uma pessoa for considerada jovem, 
                melhor. Melhor para a indústria, para a publicidade. Ser jovem na contemporaneidade é 
                ser consumidor e não um cidadão, um sujeito de direitos.
                
                Texto 2

                  Jovens têm sido moldados por adultos de forma que se tornem receptores passivos 
                do mercado, dos programas sociais e das políticas públicas voltadas a eles, uma vez que 
                representam mais claramente, como analisado por Bourdieu (1978), uma disputa de poder 
                social entre o passado e o futuro.
                  Adam Fletcher, educador americano e fundador do Projeto Freechild, uma das 
                principais organizações voltadas para práticas de engajamento e participação juvenil, 
                defende a ideia de que é preciso parar de entender os jovens como incapazes de realizar 
                suas próprias escolhas e de praticar o que ele chama de “adultismo”, que é tratar o jovem 
                pela visão do adulto.
                   Para quebrar o paradigma de colocar o jovem como alvo de políticas públicas pensadas 
                por adultos, com o objetivo de serem apenas consumidores de produtos ou de ações 
                feitas por políticas públicas ou por organizações sociais, Adam Fletcher alerta para uma 
                mudança do modo como a sociedade atua: “A sociedade precisa parar de fazer as coisas 
                para os jovens e fazê-las com os jovens”.

                Considere este trecho inicial do texto 1, linhas 01 e 02:
                
                “[...] o cenário da sociedade brasileira hoje é composto, principalmente, de jovens.”

                Nele há o emprego da palavra “composto”. Assinale, dentre as orações apresentadas a seguir, 
                a que faz uso idêntico desse vocábulo, mantendo, assim, suas funções morfológica e sintática:
                `,
                opcao1: `A experiência é um troféu composto por todas as armas que nos feriram.`,
                opcao2: `Um composto químico é uma substância formada por vários elementos.`,
                opcao3: `O período simples é composto apenas por uma oração e formado pelo sentido de apenas uma 
                        ação verbal.`,
                opcao4: `Apresentei meu projeto de pesquisa para uma banca composta por cinco membros.`,
                opcao5: `Há substantivo que é classificado como composto, cuja grafia exige o uso de hífen.`,
                respostaCorreta: 'C',
                disciplinaId: portugues.id,
                categoriaId: analiseSintatica.id,
                provaId: prova12019.id,
                ordem: 4,
            });

            const questao5_12019 = await Questao.create({
                enunciado: `
                Leia os textos para responder a questão:
                
                TEXTO 1                
                
                JOVEM: CONSUMIDOR OU CIDADÃO?
                
                  É justamente pela imagem do novo, do futuro dada pela juventude, que o cenário da 
                sociedade brasileira hoje é composto, principalmente, de jovens.
                  Como analisa Maria Rita Kehl em seu texto intitulado “Adultescência” (1998), ao 
                contrário dos anos 1930, quando Nelson Rodrigues em uma crônica descreveu que “os 
                moços não tinham função, nem destino. A época não suportava a mocidade”, no Brasil 
                de hoje somos todos jovens: pessoas de 40 anos, a partir dos anos 1990, têm a aparência 
                e a vitalidade que tinham pessoas de 25 três gerações atrás.
                  A grande questão da supervalorização da juventude é que, muito mais do que um 
                sinal de que realmente os jovens vêm ganhando espaços e direitos em nossa sociedade, 
                a escolha pela juventude é fruto do consumo. “Ser jovem virou slogan, virou clichê 
                publicitário, virou imperativo categórico – condição para se pertencer a uma certa elite 
                atualizada e vitoriosa. Ao mesmo tempo, a ‘juventude’ se revelava um poderosíssimo 
                exército de consumidores, livres dos freios morais e religiosos que regulavam a relação 
                do corpo com os prazeres”, escreve Kehl.
                  Dessa forma, segundo a autora, quanto mais tempo uma pessoa for considerada jovem, 
                melhor. Melhor para a indústria, para a publicidade. Ser jovem na contemporaneidade é 
                ser consumidor e não um cidadão, um sujeito de direitos.
                
                Texto 2

                  Jovens têm sido moldados por adultos de forma que se tornem receptores passivos 
                do mercado, dos programas sociais e das políticas públicas voltadas a eles, uma vez que 
                representam mais claramente, como analisado por Bourdieu (1978), uma disputa de poder 
                social entre o passado e o futuro.
                  Adam Fletcher, educador americano e fundador do Projeto Freechild, uma das 
                principais organizações voltadas para práticas de engajamento e participação juvenil, 
                defende a ideia de que é preciso parar de entender os jovens como incapazes de realizar 
                suas próprias escolhas e de praticar o que ele chama de “adultismo”, que é tratar o jovem 
                pela visão do adulto.
                   Para quebrar o paradigma de colocar o jovem como alvo de políticas públicas pensadas 
                por adultos, com o objetivo de serem apenas consumidores de produtos ou de ações 
                feitas por políticas públicas ou por organizações sociais, Adam Fletcher alerta para uma 
                mudança do modo como a sociedade atua: “A sociedade precisa parar de fazer as coisas 
                para os jovens e fazê-las com os jovens”.

                Ainda sobre o trecho da questão anterior:
                
                “[...] o cenário da sociedade brasileira hoje é composto, principalmente, de jovens.”

                Dos aspectos gramaticais abaixo expostos, assinale a opção que traz uma consideração 
                INCORRETA.
                `,
                opcao1: `Tem-se um sujeito simples, cujo núcleo é o substantivo “cenário”.`,
                opcao2: `Há um advérbio na oração, cuja sintaxe é de adjunto adverbial, expressando sentido de tempo.`,
                opcao3: `No termo “de jovens”, trocando a preposição utilizada pela preposição “por”, não haverá 
                        qualquer prejuízo sintático ou semântico.`,
                opcao4: `No sujeito, isolando-se o seu núcleo, o que se tem são termos na função de adjuntos adnominais.`,
                opcao5: `“Jovens” é um substantivo na função de complemento nominal, o que justifica vir precedido 
                        de preposição.`,
                respostaCorreta: 'E',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTextoGramatica.id,
                provaId: prova12019.id,
                ordem: 5,
            });

            const questao6_12019 = await Questao.create({
                enunciado: `
                Leia os textos para responder a questão:
                
                TEXTO 1                
                
                JOVEM: CONSUMIDOR OU CIDADÃO?
                
                  É justamente pela imagem do novo, do futuro dada pela juventude, que o cenário da 
                sociedade brasileira hoje é composto, principalmente, de jovens.
                  Como analisa Maria Rita Kehl em seu texto intitulado “Adultescência” (1998), ao 
                contrário dos anos 1930, quando Nelson Rodrigues em uma crônica descreveu que “os 
                moços não tinham função, nem destino. A época não suportava a mocidade”, no Brasil 
                de hoje somos todos jovens: pessoas de 40 anos, a partir dos anos 1990, têm a aparência 
                e a vitalidade que tinham pessoas de 25 três gerações atrás.
                  A grande questão da supervalorização da juventude é que, muito mais do que um 
                sinal de que realmente os jovens vêm ganhando espaços e direitos em nossa sociedade, 
                a escolha pela juventude é fruto do consumo. “Ser jovem virou slogan, virou clichê 
                publicitário, virou imperativo categórico – condição para se pertencer a uma certa elite 
                atualizada e vitoriosa. Ao mesmo tempo, a ‘juventude’ se revelava um poderosíssimo 
                exército de consumidores, livres dos freios morais e religiosos que regulavam a relação 
                do corpo com os prazeres”, escreve Kehl.
                  Dessa forma, segundo a autora, quanto mais tempo uma pessoa for considerada jovem, 
                melhor. Melhor para a indústria, para a publicidade. Ser jovem na contemporaneidade é 
                ser consumidor e não um cidadão, um sujeito de direitos.
                
                Texto 2

                  Jovens têm sido moldados por adultos de forma que se tornem receptores passivos 
                do mercado, dos programas sociais e das políticas públicas voltadas a eles, uma vez que 
                representam mais claramente, como analisado por Bourdieu (1978), uma disputa de poder 
                social entre o passado e o futuro.
                  Adam Fletcher, educador americano e fundador do Projeto Freechild, uma das 
                principais organizações voltadas para práticas de engajamento e participação juvenil, 
                defende a ideia de que é preciso parar de entender os jovens como incapazes de realizar 
                suas próprias escolhas e de praticar o que ele chama de “adultismo”, que é tratar o jovem 
                pela visão do adulto.
                   Para quebrar o paradigma de colocar o jovem como alvo de políticas públicas pensadas 
                por adultos, com o objetivo de serem apenas consumidores de produtos ou de ações 
                feitas por políticas públicas ou por organizações sociais, Adam Fletcher alerta para uma 
                mudança do modo como a sociedade atua: “A sociedade precisa parar de fazer as coisas 
                para os jovens e fazê-las com os jovens”.

                Sobre a locução conjuntiva uma vez que, presente no trecho “uma vez que representam 
                mais claramente, como analisado por Bourdieu (1978), uma disputa de poder social entre o 
                passado e o futuro.”, no texto 2, linha 02, pode-se dizer que introduz uma
                `,
                opcao1: `conclusão.`,
                opcao2: `causa.`,
                opcao3: `concessão.`,
                opcao4: `comparação.`,
                opcao5: `conformidade.`,
                respostaCorreta: 'B',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTextoGramatica.id,
                provaId: prova12019.id,
                ordem: 6,
            });

            const questao7_12019 = await Questao.create({
                enunciado: `
                Leia os textos para responder a questão:
                
                TEXTO 1                
                
                JOVEM: CONSUMIDOR OU CIDADÃO?
                
                  É justamente pela imagem do novo, do futuro dada pela juventude, que o cenário da 
                sociedade brasileira hoje é composto, principalmente, de jovens.
                  Como analisa Maria Rita Kehl em seu texto intitulado “Adultescência” (1998), ao 
                contrário dos anos 1930, quando Nelson Rodrigues em uma crônica descreveu que “os 
                moços não tinham função, nem destino. A época não suportava a mocidade”, no Brasil 
                de hoje somos todos jovens: pessoas de 40 anos, a partir dos anos 1990, têm a aparência 
                e a vitalidade que tinham pessoas de 25 três gerações atrás.
                  A grande questão da supervalorização da juventude é que, muito mais do que um 
                sinal de que realmente os jovens vêm ganhando espaços e direitos em nossa sociedade, 
                a escolha pela juventude é fruto do consumo. “Ser jovem virou slogan, virou clichê 
                publicitário, virou imperativo categórico – condição para se pertencer a uma certa elite 
                atualizada e vitoriosa. Ao mesmo tempo, a ‘juventude’ se revelava um poderosíssimo 
                exército de consumidores, livres dos freios morais e religiosos que regulavam a relação 
                do corpo com os prazeres”, escreve Kehl.
                  Dessa forma, segundo a autora, quanto mais tempo uma pessoa for considerada jovem, 
                melhor. Melhor para a indústria, para a publicidade. Ser jovem na contemporaneidade é 
                ser consumidor e não um cidadão, um sujeito de direitos.
                
                Texto 2

                  Jovens têm sido moldados por adultos de forma que se tornem receptores passivos 
                do mercado, dos programas sociais e das políticas públicas voltadas a eles, uma vez que 
                representam mais claramente, como analisado por Bourdieu (1978), uma disputa de poder 
                social entre o passado e o futuro.
                  Adam Fletcher, educador americano e fundador do Projeto Freechild, uma das 
                principais organizações voltadas para práticas de engajamento e participação juvenil, 
                defende a ideia de que é preciso parar de entender os jovens como incapazes de realizar 
                suas próprias escolhas e de praticar o que ele chama de “adultismo”, que é tratar o jovem 
                pela visão do adulto.
                   Para quebrar o paradigma de colocar o jovem como alvo de políticas públicas pensadas 
                por adultos, com o objetivo de serem apenas consumidores de produtos ou de ações 
                feitas por políticas públicas ou por organizações sociais, Adam Fletcher alerta para uma 
                mudança do modo como a sociedade atua: “A sociedade precisa parar de fazer as coisas 
                para os jovens e fazê-las com os jovens”.

                O texto 2 se inicia com o seguinte trecho: “Jovens têm sido moldados por adultos [...]”. Essa 
                oração se encontra com verbo na voz passiva. Reescrevendo esse fragmento na voz ativa, haverá 
                a seguinte forma verbal:
                `,
                opcao1: `têm moldado.`,
                opcao2: `são moldados.`,
                opcao3: `tem moldado.`,
                opcao4: `é moldado.`,
                opcao5: `moldam.`,
                respostaCorreta: 'A',
                disciplinaId: portugues.id,
                categoriaId: vozVerbal.id,
                provaId: prova12019.id,
                ordem: 7,
            });

            const questao8_12019 = await Questao.create({
                enunciado: `
                Leia o texto para responder a questão:
                
                FONTE DOS DESEJOS
                Na Fontana Di Trevi, jogou uma moeda por cima do ombro esquerdo, esticando com vírgulas, 
                em tom de deboche, um pedido – mantra. “Que eu fique eternamente jovem, que meu peso nunca 
                aumente, que meus seios jamais caiam.” Amanheceu manequim.                
                
                Constatam-se no miniconto “Fonte dos desejos” características específicas de uma narração, 
                EXCETO:
                `,
                opcao1: `presença de um narrador-observador.`,
                opcao2: `identificação de um lugar onde ocorre a ação.`,
                opcao3: `inferência de uma personagem feminina.`,
                opcao4: `desenvolvimento de um enredo.`,
                opcao5: `percepção de um clímax: “esticando com vírgulas, em tom de deboche”.`,
                respostaCorreta: 'E',
                disciplinaId: portugues.id,
                categoriaId: analiseLiteraria.id,
                provaId: prova12019.id,
                ordem: 8,
            });

            const questao9_12019 = await Questao.create({
                enunciado: `
                Leia o texto para responder a questão:
                
                FONTE DOS DESEJOS
                Na Fontana Di Trevi, jogou uma moeda por cima do ombro esquerdo, esticando com vírgulas, 
                em tom de deboche, um pedido – mantra. “Que eu fique eternamente jovem, que meu peso nunca 
                aumente, que meus seios jamais caiam.” Amanheceu manequim.                
                
                O termo pedido, presente no primeiro período do texto, tem a função sintática de
                `,
                opcao1: `sujeito.`,
                opcao2: `predicativo do sujeito.`,
                opcao3: `objeto direto.`,
                opcao4: `objeto indireto.`,
                opcao5: `núcleo do adjunto adnominal.`,
                respostaCorreta: 'C',
                disciplinaId: portugues.id,
                categoriaId: analiseSintatica.id,
                provaId: prova12019.id,
                ordem: 9,
            });

            const questao10_12019 = await Questao.create({
                enunciado: `
                Leia o texto para responder a questão:
                
                FONTE DOS DESEJOS
                Na Fontana Di Trevi, jogou uma moeda por cima do ombro esquerdo, esticando com vírgulas, 
                em tom de deboche, um pedido – mantra. “Que eu fique eternamente jovem, que meu peso nunca 
                aumente, que meus seios jamais caiam.” Amanheceu manequim.

                Leia atentamente as afirmativas que seguem.
                
                I leitor do texto não precisa fazer muitas correlações para produzir sentido, mas o final 
                da história permite uma interpretação mais cuidadosa, quando o autor finaliza o texto: 
                “Amanheceu manequim”.

                II  O texto exige do leitor o seu conhecimento prévio a respeito da busca constante pela beleza 
                ou sobre o monumento histórico-cultural Fontana Di Trevi, local em que existe a tradição 
                de atirar uma moeda para a fonte para a realização de um desejo.

                III Nota-se que o autor realiza uma crítica ao comportamento pela busca constante pela beleza, 
                pois a única maneira de atingir o desejo da personagem é ela tornar-se uma manequim.

                IV Fica evidente, na análise do vocábulo “manequim”, tanto o resultado do pedido feito pela 
                mulher quanto o uso dinâmico do termo para posicionar o leitor quanto à opinião crítica do 
                autor.

                Estão CORRETAS:`,
                opcao1: `I, II, III e IV.`,
                opcao2: `II, III e IV somente.`,
                opcao3: `I, III e IV somente.`,
                opcao4: `I, II e III somente.`,
                opcao5: `II e III somente.`,
                respostaCorreta: 'C',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova12019.id,
                ordem: 10,
            })

            const questao11_12019 = await Questao.create({
                enunciado: `
                Leia o texto para responder a questão:
                
                FONTE DOS DESEJOS
                Na Fontana Di Trevi, jogou uma moeda por cima do ombro esquerdo, esticando com vírgulas, 
                em tom de deboche, um pedido – mantra. “Que eu fique eternamente jovem, que meu peso nunca 
                aumente, que meus seios jamais caiam.” Amanheceu manequim.

                Indique a alternativa que apresenta a justificativa para o uso da vírgula na frase: “Que eu 
                fique eternamente jovem, que meu peso nunca aumente, que meus seios jamais caiam”.`,
                opcao1: `Separar o aposto`,
                opcao2: `Isolar o vocativo.`,
                opcao3: `Isolar as expressões que indicam circunstâncias variadas como tempo, lugar, modo, companhia, 
                        entre outras (adjuntos adverbiais invertidos ou intercalados na oração).`,
                opcao4: `Isolar os termos explicativos, os quais servem para retificar, continuar ou concluir o que se 
                        está dizendo.`,
                opcao5: `Separar os termos coordenados - uma lista, por exemplo.`,
                respostaCorreta: 'E',
                disciplinaId: portugues.id,
                categoriaId: pontuacaoEstruturacaoFrases.id,
                provaId: prova12019.id,
                ordem: 11,
            });

            const questao12_12019 = await Questao.create({
                enunciado: `
                Leia o texto para responder a questão:
                
                FONTE DOS DESEJOS
                Na Fontana Di Trevi, jogou uma moeda por cima do ombro esquerdo, esticando com vírgulas, 
                em tom de deboche, um pedido – mantra. “Que eu fique eternamente jovem, que meu peso nunca 
                aumente, que meus seios jamais caiam.” Amanheceu manequim.
                
                Na oração “Amanheceu manequim.”, o termo destacado está na função`,
                opcao1: `substantiva.`,
                opcao2: `adjetiva.`,
                opcao3: `adverbial.`,
                opcao4: `verbal.`,
                opcao5: `pronominal.`,
                respostaCorreta: 'C',
                disciplinaId: portugues.id,
                categoriaId: predicacaoVerbal.id,
                provaId: prova12019.id,
                ordem: 12,
                
            });
            

            const questao13_12019 = await Questao.create({
                enunciado: `
                O texto abaixo traz sobre a realidade uma abordagem`,
                opcao1: `idealizada, porém sonhadora.`,
                opcao2: `pessimista, porém inovadora sob certos aspectos.`,
                opcao3: `inovadora, porém um tanto trágica.`,
                opcao4: `ultrapassada, porém com criticidade.`,
                opcao5: `crítica, porém com um certo conformismo.`,
                respostaCorreta: 'E',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova12019.id,
                ordem: 13,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova5-13.png" 
            });

            const questao14_12019 = await Questao.create({
                enunciado: `
                Leia os textos para responder a pergunta:
                
                TEXTO 1                
                
                JOVEM: CONSUMIDOR OU CIDADÃO?
                
                  É justamente pela imagem do novo, do futuro dada pela juventude, que o cenário da 
                sociedade brasileira hoje é composto, principalmente, de jovens.
                  Como analisa Maria Rita Kehl em seu texto intitulado “Adultescência” (1998), ao 
                contrário dos anos 1930, quando Nelson Rodrigues em uma crônica descreveu que “os 
                moços não tinham função, nem destino. A época não suportava a mocidade”, no Brasil 
                de hoje somos todos jovens: pessoas de 40 anos, a partir dos anos 1990, têm a aparência 
                e a vitalidade que tinham pessoas de 25 três gerações atrás.
                  A grande questão da supervalorização da juventude é que, muito mais do que um 
                sinal de que realmente os jovens vêm ganhando espaços e direitos em nossa sociedade, 
                a escolha pela juventude é fruto do consumo. “Ser jovem virou slogan, virou clichê 
                publicitário, virou imperativo categórico – condição para se pertencer a uma certa elite 
                atualizada e vitoriosa. Ao mesmo tempo, a ‘juventude’ se revelava um poderosíssimo 
                exército de consumidores, livres dos freios morais e religiosos que regulavam a relação 
                do corpo com os prazeres”, escreve Kehl.
                  Dessa forma, segundo a autora, quanto mais tempo uma pessoa for considerada jovem, 
                melhor. Melhor para a indústria, para a publicidade. Ser jovem na contemporaneidade é 
                ser consumidor e não um cidadão, um sujeito de direitos.
                
                Texto 2

                  Jovens têm sido moldados por adultos de forma que se tornem receptores passivos 
                do mercado, dos programas sociais e das políticas públicas voltadas a eles, uma vez que 
                representam mais claramente, como analisado por Bourdieu (1978), uma disputa de poder 
                social entre o passado e o futuro.
                  Adam Fletcher, educador americano e fundador do Projeto Freechild, uma das 
                principais organizações voltadas para práticas de engajamento e participação juvenil, 
                defende a ideia de que é preciso parar de entender os jovens como incapazes de realizar 
                suas próprias escolhas e de praticar o que ele chama de “adultismo”, que é tratar o jovem 
                pela visão do adulto.
                   Para quebrar o paradigma de colocar o jovem como alvo de políticas públicas pensadas 
                por adultos, com o objetivo de serem apenas consumidores de produtos ou de ações 
                feitas por políticas públicas ou por organizações sociais, Adam Fletcher alerta para uma 
                mudança do modo como a sociedade atua: “A sociedade precisa parar de fazer as coisas 
                para os jovens e fazê-las com os jovens”.
                
                A tirinha da Mafalda estabelece um paralelo com os textos 1 e 2, apesar de ter uma outra 
                estrutura textual. Percebe-se essa ligação estreita por meio deste fragmento:`,
                opcao1: `“É justamente pela imagem do novo, do futuro dada pela juventude, que o cenário da sociedade 
                        brasileira hoje é composto, principalmente, de jovens.” (Texto 1 – linhas 1 e 2)`,
                opcao2: `“[...] no Brasil de hoje somos todos jovens [...]” (Texto 1 – linha 5 e 6)`,
                opcao3: `“Jovens têm sido moldados por adultos de forma que se tornem receptores passivos do mercado 
                        [...]” (Texto 2 – linhas 1 e 2)`,
                opcao4: `“[...] é preciso parar de entender os jovens como incapazes de realizar suas próprias escolhas 
                        [...]” (Texto 2 – linhas 7 e 8)`,
                opcao5: `“[...] o que ele chama de ‘adultismo’, que é tratar o jovem pela visão do adulto.” (Texto 2 – 
                        linha 8)`,
                respostaCorreta: 'C',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova12019.id,
                ordem: 14,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova5-13.png"
                
            });

            const questao15_12019 = await Questao.create({
                enunciado: `
                Sobre os aspectos gramaticais do texto e os recursos nele utilizados, todas as considerações 
                abaixo estão corretas, EXCETO:`,
                opcao1: `Há no texto verbal da tirinha duas orações interrogativas diretas, ambas iniciadas pelo mesmo 
                        pronome interrogativo.`,
                opcao2: `Ocorreu uma derivação imprópria com a palavra “malditos”, uma vez que ela está sendo 
                        empregada fora de sua classe gramatical original – a de adjetivo. No contexto da tirinha, está na 
                        função de substantivo.`,
                opcao3: `No 4º quadro, o vocábulo “que”, analisado morfologicamente, está na função de pronome 
                        relativo.`,
                opcao4: `As palavras “clac” e “clic” funcionam como onomatopeias, representando verbalmente as 
                        ações de ligar e desligar a tevê.`,
                opcao5: `A palavra “malditos”, no 4º quadro, retoma o pronome “eles” empregado no 1º quadro.`,
                respostaCorreta: 'C',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTextoGramatica.id,
                provaId: prova12019.id,
                ordem: 15,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova5-13.png" 
            });

            const questao16_12019 = await Questao.create({
                enunciado: `
                Na figura abaixo, SRKM, MKHF, KJIH, RUJK, FHGE, CFEO e DCOA são quadrados
                e  𝐴𝑈= 26 cm. Dos valores abaixo, assinale o que mais se aproxima da área do polígono
                ADFSUIHGO, em cm².`,
                opcao1: `127,75`,
                opcao2: `165,90`,
                opcao3: `189,28`,
                opcao4: `215,32`,
                opcao5: `319,48`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: geometriaPlana.id,
                provaId: prova12019.id,
                ordem: 16,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova5-16.png" 
            });

            const questao17_12019 = await Questao.create({
                enunciado: `
                Se a e b são números reais tais que (a - b)² = 8 e ab = 6, então o valor da soma a + b é:`,
                opcao1: `4√2`,
                opcao2: `5√3`,
                opcao3: `9`,
                opcao4: `6√5`,
                opcao5: `√26`,
                respostaCorreta: 'A',
                disciplinaId: matematica.id,
                categoriaId: geometriaPlana.id,
                provaId: prova12019.id,
                ordem: 17,
            });

            const questao18_12019 = await Questao.create({
                enunciado: `
                Das alternativas abaixo, assinale a que representa uma raiz da equação a + bx + cx² = 0, 
                sabendo que a, b e c são números reais positivos e distintos.`,
                opcao1: `b + √b² - 4ac / 2a`,
                opcao2: `-b - √b² - 4ac / 2a`,
                opcao3: `a`,
                opcao4: `-c - √a² - 4bc / 2b`,
                opcao5: `-b - √b² - 4ac / 2c`,
                respostaCorreta: 'E',
                disciplinaId: matematica.id,
                categoriaId: equacao2grau.id,
                provaId: prova12019.id,
                ordem: 18,
            });

            const questao19_12019 = await Questao.create({
                enunciado: `
                Para fazer um bolo, é comum, na constituição da massa do tipo A, utilizar-se manteiga, trigo 
                e açúcar na seguinte proporção: 1 parte de manteiga, 4 partes de trigo e 2 partes de açúcar. Com o 
                objetivo de comemorar o aniversário da cidade de Vitória, a prefeitura encomendou 168 Kg dessa 
                massa. Quantos quilogramas de trigo foram necessários para fazer essa massa?`,
                opcao1: `24`,
                opcao2: `42`,
                opcao3: `48`,
                opcao4: `84`,
                opcao5: `96`,
                respostaCorreta: 'E',
                disciplinaId: matematica.id,
                categoriaId: proporcoes.id,
                provaId: prova12019.id,
                ordem: 19,
            });

            const questao20_12019 = await Questao.create({
                enunciado: `
                A seguir, tem-se cinco afirmações sobre conjuntos numéricos.
                
                I A subtração de um número natural por outro número natural é sempre um número natural.

                II A soma de dois números inteiros é sempre um número inteiro.

                III A divisão de um número racional por outro número racional não nulo é sempre um número 
                racional.

                IV A soma de dois números irracionais é sempre um número irracional.

                V A soma de um número racional com um número irracional é sempre um número irracional.

                Analisando as sentenças acima, o número de afirmações VERDADEIRAS é:
                `,
                opcao1: `1`,
                opcao2: `2`,
                opcao3: `3`,
                opcao4: `4`,
                opcao5: `5`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: conjuntos.id,
                provaId: prova12019.id,
                ordem: 20,
            });

            const questao21_12019 = await Questao.create({
                enunciado: `
                Leia as afirmações a seguir. 
                
                I O perímetro P de um quadrado de lado L é diretamente proporcional a L.

                II A área A de um quadrado de lado L é diretamente proporcional a L.

                III A área de um retângulo de base 10 cm é diretamente proporcional à sua altura.

                IV A altura de um retângulo de área 100 cm² é inversamente proporcional à sua base.

                V O comprimento de uma circunferência é inversamente proporcional à medida do seu raio.

                VI A área de um círculo é diretamente proporcional ao quadrado do seu raio.

                Analisando as sentenças acima, o número de afirmações FALSAS é: 
                `,
                opcao1: `2`,
                opcao2: `3`,
                opcao3: `4`,
                opcao4: `5`,
                opcao5: `6`,
                respostaCorreta: 'A',
                disciplinaId: matematica.id,
                categoriaId: geometriaPlana.id,
                provaId: prova12019.id,
                ordem: 21,
            });

            const questao22_12019 = await Questao.create({
                enunciado: `
                A diagonal PN do retângulo TPON na fi gura abaixo é perpendicular à TR. Sabendo que
                ON = 6√2 e PN = 4√5, o segmento NR mede`,
                opcao1: `8√3/2`,
                opcao2: `4√(30√31)`,
                opcao3: `√(96/15√15)`,
                opcao4: `2√5/5`,
                opcao5: `4√3`,
                respostaCorreta: 'D',
                disciplinaId: matematica.id,
                categoriaId: geometriaPlana.id,
                provaId: prova12019.id,
                ordem: 22,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova5-22.png"
            });

            const questao23_12019 = await Questao.create({
                enunciado: `
                Quantos números inteiros existem entre dois números reais positivos, tais que um é 3 unidades 
                maior do que o dobro do outro e o produto entre esses dois nú meros é 10?`,
                opcao1: `0`,
                opcao2: `1`,
                opcao3: `5`,
                opcao4: `8`,
                opcao5: `12`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: conjuntos.id,
                provaId: prova12019.id,
                ordem: 23,
            });
            const questao24_12019 = await Questao.create({
                enunciado: `
                    Carlos e Emanuel trabalham em uma loja especializada em um determinado produto. O 
                    salário de cada um é composto por um valor fi xo mais uma comissão por vendas desse produto. 
                    Carlos recebe R$ 1.200,00 reais de salário fi xo mais “a” reais por unidade vendida, enquanto 
                    Emanuel recebe R$ 1.800,00 de salário fi xo mais “b” reais por unidade vendida. Se cada um vender  
                    60 unidades no mês, seus salários serão iguais. Se cada um vender 120 unidades, o salário de 
                    Carlos será 11/10 do salário de Emanuel. Qual será o salário de Carlos se ele vender 20 unidades 
                    no mês?`,
                opcao1: `R$ 2.100,00`,
                opcao2: `R$ 2.500,00`,
                opcao3: `R$ 3.200,00`,
                opcao4: `R$ 4.250,00`,
                opcao5: `R$ 5.030,00`,
                respostaCorreta: 'A',
                disciplinaId: matematica.id,
                categoriaId: equacoesLineares.id,  
                provaId: prova12019.id,
                ordem: 24,
            });
            

            const questao25_12019 = await Questao.create({
                enunciado: `
                Os alunos de uma turma fi zeram uma “vaquinha” para juntar 800 reais, custo de uma 
                excursão. Todos contribuíram igualmente. Na última hora, quatro alunos desistiram e receberam 
                seu dinheiro de volta. Com isso, a parte dos que irão viajar sofreu um aumento de dez reais. 
                Quantos alunos tem a turma?`,
                opcao1: `16`,
                opcao2: `18`,
                opcao3: `20`,
                opcao4: `22`,
                opcao5: `24`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: equacao1grau.id,
                provaId: prova12019.id,
                ordem: 25,
            });

            const questao26_12019 = await Questao.create({
                enunciado: `
                Uma  cooperativa de artesanato confecciona dois tipos de produtos, A e B, ao custo de R$8,00 
                e R$12,00 por unidade, respectivamente. Essa cooperativa vendeu no último mês 330 unidades dos 
                produtos A e B com preços 75% e 125%, respectivamente, acima de seu valor de custo, e obteve R$ 
                6.570,00 com essa venda. Determine a quantidade do produto A que foi vendida.`,
                opcao1: `150`,
                opcao2: `160`,
                opcao3: `170`,
                opcao4: `180`,
                opcao5: `190`,
                respostaCorreta: 'D',
                disciplinaId: matematica.id,
                categoriaId: equacoesLineares.id,
                provaId: prova12019.id,
                ordem: 26,
            });

            const questao27_12019 = await Questao.create({
                enunciado: `
                As inscrições para um congresso de Matemática que ocorrerá no próximo fi nal de semana 
                foram realizadas em três etapas distintas entre os meses de agosto e outubro. A tabela abaixo 
                apresenta o valor de inscrição e o número de inscritos pagantes em cada uma das três etapas
                
                Além desses, 8% dos inscritos ficaram isentos da taxa de inscrição. Quantos são os inscritos que 
                não pagaram a inscrição (isentos) ou que pagaram um valor abaixo da média dos valores pagos 
                pelos inscritos nas três etapas?
                .`,
                opcao1: `140`,
                opcao2: `190`,
                opcao3: `250`,
                opcao4: `270`,
                opcao5: `300`,
                respostaCorreta: 'E',
                disciplinaId: matematica.id,
                categoriaId: estatistica.id,
                provaId: prova12019.id,
                ordem: 27,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova5-27.png"
            });

            const questao28_12019 = await Questao.create({
                enunciado: `
                As três semicircunferências da fi gura abaixo tangenciam a circunferência de centro F
                e raio r. Sabe-se que C, D e A são os centros das três semicircunferências. Se AE = AB = R,
                então a medida de r é igual a:
                .`,
                opcao1: `R/3`,
                opcao2: `R/2`,
                opcao3: `R√2/3`,
                opcao4: `R√3/3`,
                opcao5: `R√6/3`,
                respostaCorreta: 'A',
                disciplinaId: matematica.id,
                categoriaId: trigonometria.id,
                provaId: prova12019.id,
                ordem: 28,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova5-28.png"
            });

            const questao29_12019 = await Questao.create({
                enunciado: `
                As diagonais IJ e HK do trapézio HIKJ intersectam o segmento LM nos pontos A e
                B. Sabe-se que L e M são os pontos médios de HJ e KI, respectivamente. Sejam p1 e p2 os
                perímetros dos trapézios HIML e LMKJ, respectivamente. Sabendo que JK = 20 e AB = 3/5 JK,
                o valor de d = p1 - p2 é igual a:`,
                opcao1: `16`,
                opcao2: `26`,
                opcao3: `28`,
                opcao4: `32`,
                opcao5: `44`,
                respostaCorreta: 'B',
                disciplinaId: matematica.id,
                categoriaId: geometriaPlana.id,
                provaId: prova12019.id,
                ordem: 29,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova5-29.png"
            });

            const questao30_12019 = await Questao.create({
                enunciado: `
                A circunferência de centro A abaixo contém os pontos B, E, G, H e F. Além disso, sabe-se
                que as cordas GH e EF são perpendiculares ao segmento AB, o ponto D é ponto médio de AB,
                AC = 5√3𝑚𝑚 e AB = 10𝑚𝑚. A área sombreada é:`,
                opcao1: `25𝜋 𝑚𝑚²`,
                opcao2: `10𝜋 𝑚𝑚²`,
                opcao3: `75𝜋/4 𝑚𝑚²`,
                opcao4: `20𝜋 𝑚𝑚²`,
                opcao5: `50𝜋/3 𝑚𝑚²`,
                respostaCorreta: 'E',
                disciplinaId: matematica.id,
                categoriaId: trigonometria.id,
                provaId: prova12019.id,
                ordem:30,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova5-30.png"
            });

            const questao31_12019 = await Questao.create({
                enunciado: `
                Em uma transmissão pela TV de uma etapa da Fórmula Indy, nos Estados Unidos, o locutor 
                mostra as condições da pista de corrida e indica que ela está a uma temperatura de 104° F. Aqui 
                no Brasil, qual seria o valor dessa temperatura em graus Celsius?`,
                opcao1: `-25 °C`,
                opcao2: `30 °C`,
                opcao3: `35 °C`,
                opcao4: `40 °C`,
                opcao5: `45 °C`,
                respostaCorreta: 'D',
                disciplinaId: ciencia.id,
                categoriaId: termodinamica.id,
                provaId: prova12019.id,
                ordem:31,
            });

            const questao32_12019 = await Questao.create({
                enunciado: `
                Uma forma de se saber qual a distância entre você e uma tempestade é medir o intervalo 
                de tempo entre o relâmpago e o som da trovoada. Considerando a velocidade do som no ar de 
                340 m/s e o intervalo de tempo igual a 4,5 s, em que distância da tempestade em km você se 
                encontra?`,
                opcao1: `0,153`,
                opcao2: `1,53`,
                opcao3: `7,55`,
                opcao4: `15,3`,
                opcao5: `75,5`,
                respostaCorreta: 'B',
                disciplinaId: ciencia.id,
                categoriaId: acustica.id,
                provaId: prova12019.id,
                ordem:32,
            });

            const questao33_12019 = await Questao.create({
                enunciado: `
                Nas locomotivas modernas, além do velocímetro para indicar a velocidade, existe um outro 
                instrumento que mostra a aceleração, principalmente em trechos da linha em descidas, onde 
                a ação da gravidade atua no sentido de acelerar a locomotiva. Se a locomotiva estiver com 
                uma velocidade de 55 km/h e o instrumento indicar uma aceleração de (5 km/h)/min, qual a 
                velocidade da locomotiva após 5 min?`,
                opcao1: `25 km/h`,
                opcao2: `60 km/h`,
                opcao3: `65 km/h`,
                opcao4: `75 km/h`,
                opcao5: `80 km/h`,
                respostaCorreta: 'E',
                disciplinaId: ciencia.id,
                categoriaId: cinematica.id,
                provaId: prova12019.id,
                ordem:33,
            });

            const questao34_12019 = await Questao.create({
                enunciado: `
                Na cidade do Rio de Janeiro, que se encontra no nível do mar, um alimento cozinha mais 
                rápido que em La Paz, capital da Bolívia, que se encontra a cerca de 3.600 metros de altitude. 
                Assinale a alternativa que corresponde a explicação CORRETA para esse fato.`,
                opcao1: `Quanto menor a altitude, menor será a pressão e, consequentemente, maior será a temperatura 
                        de ebulição.`,
                opcao2: `Quanto maior a altitude, maior será a pressão e, consequentemente, menor será a temperatura 
                        de ebulição.`,
                opcao3: `Quanto maior a altitude, menor será a pressão e, consequentemente, menor será a temperatura 
                        de ebulição.`,
                opcao4: `Quanto menor a altitude, menor será a pressão e, consequentemente, menor será a temperatura 
                        de ebulição.`,
                opcao5: `Quanto maior a altitude, maior será a pressão e, consequentemente, maior será a temperatura 
                        de ebulição.`,
                respostaCorreta: 'C',
                disciplinaId: ciencia.id,
                categoriaId: termodinamica.id,
                provaId: prova12019.id,
                ordem:34,
            });

            const questao35_12019 = await Questao.create({
                enunciado: `
                A respeito dos modelos atômicos, analise as sentenças abaixo. 
                
                I Segundo o modelo atômico de Dalton, os átomos seriam como pequenas esferas divisíveis. 

                II No modelo proposto por Rutherford-Bohr, os elétrons estão dispostos ao redor do núcleo do 
                átomo, núcleo esse onde estão concentradas as partículas negativas. 

                III O átomo, segundo Thomson, seria formado por elétrons mergulhados em uma esfera de 
                carga positiva.

                IV Dalton também concluiu que toda a matéria é formada pela associação de átomos e que os 
                átomos são todos iguais.

                Estão ERRADAS as sentenças:
                `,
                opcao1: `I, IV e III`,
                opcao2: `I, II e III`,
                opcao3: `II, III e IV`,
                opcao4: `I, II e IV`,
                opcao5: `I, II, III e IV`,
                respostaCorreta: 'D',
                disciplinaId: ciencia.id,
                categoriaId: fisicaModerna.id,
                provaId: prova12019.id,
                ordem:35,
            });

            const questao36_12019 = await Questao.create({
                enunciado: `
                Um átomo de número atômico 16 precisa receber quantos elétrons para adquirir a estrutura 
                estável de um gás nobre?
                `,
                opcao1: `6`,
                opcao2: `8`,
                opcao3: `4`,
                opcao4: `2`,
                opcao5: `0`,
                respostaCorreta: 'D',
                disciplinaId: ciencia.id,
                categoriaId: quimicaAtomica.id,
                provaId: prova12019.id,
                ordem:36,
            });

            const questao37_12019 = await Questao.create({
                enunciado: `
                Os poríferos são imóveis, vivem no fundo do mar e, geralmente se alimentam de bactérias 
                e outros microrganismos que entram no fluxo de água dentro de seu corpo. No entanto, algumas 
                espécies capturam e se alimentam de pequenos animais — e isso sem se mover. O biólogo marinho 
                Lonny Lundsten, do Instituto de Pesquisa e Aquário Monterey Bay, nos Estados Unidos, explica 
                como esses estranhos animais conseguem fazer suas refeições mesmo imóveis: “As esponjas 
                carnívoras têm uma estrutura em seu esqueleto que possui espinhos microscópicos, chamados 
                de espículas”, diz. “Essas espículas têm formato de gancho e capturam presas para a esponja se 
                alimentar sem que ela precise se mover para ir atrás da comida”.

                As esponjas carnívoras diferem das demais espécies do filo devido ao hábito alimentar. Nas 
                carnívoras, as espículas passam a ser responsáveis pela obtenção do alimento. Assinale a 
                alternativa que apresenta o hábito alimentar e a célula responsável pela captura de alimento 
                comum nos poríferos.
                `,
                opcao1: `Filtrador Cnidócito`,
                opcao2: `Fagocitário Amebócito`,
                opcao3: `Hematófago Cnidócito`,
                opcao4: `Filtrador Coanócito`,
                opcao5: `Hematófago Espermatozoide`,
                respostaCorreta: 'D',
                disciplinaId: ciencia.id,
                categoriaId: zoologia.id,
                provaId: prova12019.id,
                ordem:37,
            });

            const questao38_12019 = await Questao.create({
                enunciado: `
                Cerca de 80% das espécies de plantas dotadas de flores dependem da polinização animal, 
                sendo as abelhas os principais agentes polinizadores, seguidas de besouros, borboletas, mariposas, 
                beija-flores e morcegos, que são atraídos ora por substâncias açucaradas produzidas pelas flores 
                (néctar), ora pela cores, ora pelo odor muito forte que exalam. Isso permite a produção de frutos 
                e sementes. Muitos animais, bem como o vento e a água, são eficientes na dispersão de sementes, 
                podendo garantir o sucesso reprodutivo dessas plantas.

                Sobre esse assunto e os organismos descritos, é CORRETO afirmar que
                `,
                opcao1: `araucárias possuem sementes comestíveis (pinhão), apreciadas por algumas aves como o 
                        garimpeiro, que ao transportá-las, podem deixá-las cair e promover a sua polinização.`,
                opcao2: `quando ocorre a polinização, mudanças começam a surgir na flor da planta, iniciando a 
                        formação do fruto em gimnospermas.`,
                opcao3: `como polinizadores, besouros são atraídos pela beleza das cores das sementes, enquanto beija
                        flores tem preferência pelo néctar.`,
                opcao4: `morcegos são considerados animais com hábitos noturnos, sendo atraídos por frutos com 
                        cores fortes.`,
                opcao5: `certas espécies de plantas, como as ervilhas, possuem flores nas quais os insetos não conseguem 
                        penetrar. Dessa forma, nelas poderá ocorrer o que chamamos de autopolinização.`,
                respostaCorreta: 'E',
                disciplinaId: ciencia.id,
                categoriaId: botanica.id,
                provaId: prova12019.id,
                ordem:38,
            });

            const questao39_12019 = await Questao.create({
                enunciado: `
                Analise a tirinha abaixo que apresenta uma brincadeira com o som da palavra malária e os 
                cumprimentos de saudação em inglês correspondentes a “meu senhor” e “minha senhora”. No 
                primeiro quadro, uma pessoa cumprimenta, em inglês, um senhor, “M’lord”; no segundo, uma 
                senhora, “M’lady” e, no último, um mosquito, “M’laria”.

                Sobre a malária, assinale a alternativa CORRETA.
                `,
                opcao1: `A malária é uma doença causada pelo vírus da dengue e transmitida pelo mosquito Aedes 
                        aegypty com grande ocorrência no Norte do Brasil.`,
                opcao2: `O mosquito representa o vetor do Ascaris lumbricoides, verme de corpo cilíndrico, causador 
                        da malária.`,
                opcao3: `Humanos adquirem a malária ao serem picados pela fêmea do mosquito do gênero Anopheles 
                        infectada por protozoários parasitas do gênero Plasmodium.`,
                opcao4: `Apenas os mosquitos contaminados com a bactéria Escherichia coli transmitem a malária 
                        para plantas e para humanos. `,
                opcao5: `O vetor da malária é o verme achatado Taenia saginata, transmitido pelo agente etiológico 
                        Aedes aegypty.`,
                respostaCorreta: 'C',
                disciplinaId: ciencia.id,
                categoriaId: parasitologia.id,
                provaId: prova12019.id,
                ordem:39,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova5-39.png"
            });

            const questao40_12019 = await Questao.create({
                enunciado: `
                “Segundo o Ministério da Saúde, uma em cada três crianças pode ser considerada obesa 
                no Brasil. Há uma década, o número de adultos obesos também tem aumentado ano a ano. Hoje, 
                mais da metade dos brasileiros está obesa e 18% está acima do peso. Ao mesmo tempo, um 
                estudo feito por uma escola de negócios da Espanha revelou que o Brasil está entre os quatro 
                países que mais consomem fast food no mundo, só perdendo para os Estados Unidos, Japão e 
                China. Não é coincidência que os Estados Unidos também sejam os primeiros em obesidade. De 
                acordo com o estudo, em 2014, esse mercado movimentou 53 bilhões de reais por aqui e ainda 
                há uma previsão de crescimento de 30% até 2019.”

                Marque a afirmativa INCORRETA:
                `,
                opcao1: `Uma dieta baseada em proteínas de leite e seus derivados leva um adulto a ingerir muita 
                        gordura.`,
                opcao2: `O hábito de comer fast food apresenta um perigo à saúde, pois permite a ingestão de uma 
                        quantidade excessiva de gorduras saturadas.`,
                opcao3: `Carnes com maior percentual de gordura contêm níveis elevados de calorias, gorduras 
                        saturadas e colesterol.`,
                opcao4: `Em sua maioria, os produtos vendidos nas redes de fast food contêm altas quantidades de 
                        gordura, sódio, aditivos químicos, açúcares e alto valor calórico.`,
                opcao5: `Pessoas que não comem carnes vermelhas, mas se alimentam de ovos, peixes e leite podem ter 
                        todos os aminoácidos necessários, não correndo o risco de ingerir gorduras em excesso.`,
                respostaCorreta: 'E',
                disciplinaId: ciencia.id,
                categoriaId: nutricao.id,
                provaId: prova12019.id,
                ordem:40,
            });

            const questao41_12019 = await Questao.create({
                enunciado: `
                No Brasil atual, a população indígena compreende 890 mil habitantes, cerca de 250 povos 
                diferentes, falando mais de 150 idiomas. Entretanto, houve um decréscimo populacional, visto 
                que no século XVI, vários estudos indicam que existiam de 2 a 4 milhões de índios no Brasil 
                colonial, que pertenciam a mais de mil povos e falavam mais de mil línguas distintas.

                Os fatores que levaram à diminuição da população indígena no Brasil colônia devem-se: 
                `,
                opcao1: `aos sistemas de mita e de encomienda adaptados pelos portugueses para extração de ouro e prata.`,
                opcao2: `aos deslocamentos forçados (descimentos), aos trabalhos exaustivos, às doenças como gripe, 
                        sarampo e varíola, às guerras entre índios e portugueses.`,
                opcao3: `à aliança entre os índios e os franceses para conter a dominação irlandesa.`,
                opcao4: `o sistema de repartimiento herdado dos incas.`,
                opcao5: `à política de escambo realizada entre índios e portugueses.`,
                respostaCorreta: 'B',
                disciplinaId: historia.id,
                categoriaId: historiaBrasil.id,
                provaId: prova12019.id,
                ordem:41,
            });

            const questao42_12019 = await Questao.create({
                enunciado: `
                A Constituição Cidadã, promulgada em 5 de outubro de 1988, tornou-se o símbolo do 
                processo de redemocratização do Brasil, após 21 anos de regime militar. A Assembleia Nacional 
                Constituinte, convocada em 1985 pelo presidente Sarney, teve a participação de 559 parlamentares 
                e grande mobilização da sociedade.

                Assinale a alternativa que contém os princípios da Constituição de 1988:
                `,
                opcao1: `Voto restrito aos homens, alfabetizados e maiores de 18 anos.`,
                opcao2: `Voto censitário para os homens apenas.`,
                opcao3: `Licença maternidade de 120 dias, divisão dos três poderes, eleições diretas para  cargos 
                        executivos e eletivos.`,
                opcao4: `Criação do Fundo de Garantia por Tempo de Serviço (FGTS), supressão dos direitos 
                        trabalhistas.`,
                opcao5: `Criação do Plano Real, controle da inflação e aumento dos impostos.`,
                respostaCorreta: 'C',
                disciplinaId: historia.id,
                categoriaId: historiaPolitica.id,
                provaId: prova12019.id,
                ordem:42,
            });

            const questao43_12019 = await Questao.create({
                enunciado: `
                “O tema do mal, em Arendt, não tem como pano de fundo a malignidade, a perversão ou o 
                pecado humano. O pano de fundo do exame da questão, em Arendt, é o processo de naturalização 
                da sociedade e de artificialização da natureza ocorrido com a massificação, a industrialização e a 
                tecnificação das decisões e das organizações humanas na contemporaneidade. O mal é abordado, 
                desse modo, na perspectiva ético-política e não na visão moral ou religiosa.”

                As características do nazismo são:`,
                opcao1: `o pluripartidarismo, a liberdade de expressão e de opinião, a democracia.`,
                opcao2: `a supressão dos direitos humanos, a militarização, o controle da mídia, a censura e a repressão.`,
                opcao3: `a democracia, a eugenia, o antissemitismo.`,
                opcao4: `a xenofobia, o racismo, a liberdade de expressão.`,
                opcao5: `o cerceamento dos direitos humanos, a liberdade religiosa e de voto.`,
                respostaCorreta: 'B',
                disciplinaId: historia.id,
                categoriaId: nazismo.id,
                provaId: prova12019.id,
                ordem:43,
            });

            const questao44_12019 = await Questao.create({
                enunciado: `
                A Revolta dos Malês foi um movimento que ocorreu na cidade de Salvador (província da 
                Bahia) em 1835. Entre os participantes dessa revolta estavam os negros islâmicos que exerciam 
                atividades de ganho e que sofriam discriminação por serem negros e seguidores do islamismo. 
                Em função dessas condições, também encontravam dificuldades para ascender socialmente.

                Sobre essa revolta, é CORRETO afirmar que:`,
                opcao1: `Os Malês lutavam pelo direito à liberdade do culto islâmico e pela República.`,
                opcao2: `A Revolta dos Malês inseria-se no período colonial, na mesma época das Conjurações Mineira 
                        e Baiana.`,
                opcao3: `Os Malês eram negros libertos que professavam o catolicismo desde a África.`,
                opcao4: `Essa revolta ocorreu no período do Segundo Reinado.`,
                opcao5: `A Revolta dos Malês foi consequência da Guerra do Paraguai, pois os negros não foram 
                        libertos após a participação nesse conflito.`,
                respostaCorreta: 'A',
                disciplinaId: historia.id,
                categoriaId: movimentosSociaisBrasil.id,
                provaId: prova12019.id,
                ordem:44,
            });

            const questao46_12019 = await Questao.create({
                enunciado: `
                Leia os fragmentos de texto a seguir:
                
                Os meninos que têm entre 11 e 16 anos e o treinador de futebol deles entraram na 
                rede de cavernas há 12 dias. Eles acabaram ficando presos quando uma tempestade 
                inundou grande parte do local e bloqueou a saída principal [...].

                Uma forte chuva atingiu o Norte da Tailândia neste sábado (7), piorando as condições 
                na caverna onde as equipes de resgate travam uma “guerra contra água e tempo” 
                para salvar 12 garotos presos e seu técnico de futebol, com um resgate possível 
                dentro de dias [...].

                Os dois fragmentos de reportagens relatam o drama vivido por 12 garotos que ficaram presos nas 
                cavernas da Tailândia, em ocasião das chuvas que ocorreram na região no mês de julho de 2018.

                Sobre as chuvas de Monções, assinale a opção CORRETA.
                `,
                opcao1: `Foram as Monções de Verão que inundaram as cavernas, pois esse é o período chuvoso.`,
                opcao2: `Foram as Monções de Inverno que inundaram as cavernas, pois o inverno é o período chuvoso.`,
                opcao3: `Na Tailândia não ocorrem chuvas de Monções e foi uma chuva frontal que causou  a inundação.`,
                opcao4: `Nas monções Tailandesas chove muito o ano todo e as cavernas ficam sempre inundadas.`,
                opcao5: `As monções ocorrem em todos países da Zona Intertropical, causando inundações sempre.`,
                respostaCorreta: 'A',
                disciplinaId: geografia.id,
                categoriaId: climaMeteorologia.id,
                provaId: prova12019.id,
                ordem:45,
            });

            const questao47_12019 = await Questao.create({
                enunciado: `
                A história contemporânea é marcada por diversos conflitos de ordem política, econômica, 
                territorial, étnica, dentre outras. Sobre a geopolítica atual, assinale a opção CORRETA.`,
                opcao1: `O principal conflito vivido no século XXI é a rivalidade entre Estados Unidos e Rússia, que 
                        continuam a disputar áreas para expansão do Capitalismo e do Socialismo.`,
                opcao2: `Após o fim do Apartheid, o continente africano se tornou o mais estável do planeta, já que o 
                        grande estopim para muitos conflitos era a segregação étnica.`,
                opcao3: `Os grupos ETA (Pátria Basca e Liberdade) e o IRA (Exército Republicano Irlandês) aumentaram 
                        suas ações terroristas na Europa nos últimos anos.`,
                opcao4: `A Caxemira e a Chechênia, após décadas de conflitos, conseguiram a independência. Hoje a 
                        Caxemira pertence ao Paquistão e a Chechênia é o mais novo país do mundo.`,
                opcao5: `Com a eleição do presidente Trump e a transferência da embaixada dos Estados Unidos para 
                        Jerusalém, as possibilidades de criação de um Estado Palestino ficaram mais difíceis.`,
                respostaCorreta: 'E',
                disciplinaId: geografia.id,
                categoriaId: geopolitica.id,
                provaId: prova12019.id,
                ordem:46,
            });

            const questao48_12019 = await Questao.create({
                enunciado: `
                Leia o fragmento de texto a seguir:
                
                População brasileira passa de 207,7 milhões em 2017

                No ano passado, o levantamento anual do Instituto Brasileiro de Geografia e 
                Estatística (IBGE) ainda indicava uma população de 206,08 milhões.

                Pesquisa do IBGE indica que o Brasil tem 207,7 milhões de habitantes e uma taxa 
                de crescimento populacional de 0,77% entre 2016 e 2017, um pouco menor do que a 
                de 2015/2016 (0,80%). Os dados foram publicados nesta quarta-feira (30), no Diário 
                Oficial da União.

                A taxa de crescimento populacional (0,77%), entretanto, vem desacelerando nos 
                últimos anos em razão, principalmente, da queda na taxa de fecundidade. A projeção 
                demográfica prevê que daqui a 26 anos (entre 2042 e 2043), a população vai atingir 
                seu limite máximo (228,4 milhões) e passará a decrescer nos anos seguintes.

                Sobre o tema, assinale a opção CORRETA.
                `,
                opcao1: `O crescimento populacional brasileiro é acompanhado pelo grande crescimento da população 
                        jovem. Já o número de idosos está diminuindo.`,
                opcao2: `A queda de fecundidade ocorre principalmente nas classes de menor poder aquisitivo da 
                        população. Já as classes mais ricas aumentaram a fecundidade.`,
                opcao3: `O aumento da população rural nas últimas duas décadas é o maior responsável pela redução 
                        da taxa de natalidade e mortalidade em todas as regiões do Brasil.`,
                opcao4: `A queda da fecundidade ocorreu somente entre os mais ricos, já a população mais pobre 
                        continua com as taxas de fecundidade das décadas de 60 e 70 do século XX.`,
                opcao5: `O decréscimo da população brasileira será acompanhado pelo aumento de idosos, aumento 
                        dos gastos com previdência e diminuição da população jovem.`,
                respostaCorreta: 'E',
                disciplinaId: geografia.id,
                categoriaId: demografia.id,
                provaId: prova12019.id,
                ordem:47,
            });

            const questao49_12019 = await Questao.create({
                enunciado: `
                Os recursos naturais classificados como renováveis são aqueles que podem ser produzidos 
                ou recuperados pela própria natureza ou pela ação humana após um período de tempo não muito 
                longo. Já os não renováveis são aqueles que o ser humano não consegue reproduzir e que a 
                natureza leva milhões de anos até completar seu processo de formação.

                Assinale a opção que contém uma fonte de energia renovável e uma não renovável, respectivamente. 
                `,
                opcao1: `Hidrelétrica e solar.`,
                opcao2: `Petróleo e carvão mineral.`,
                opcao3: `Gás natural e solar.`,
                opcao4: `Carvão mineral e hidrelétrica.`,
                opcao5: `Solar e petróleo.`,
                respostaCorreta: 'E',
                disciplinaId: geografia.id,
                categoriaId: hidrologia.id,
                provaId: prova12019.id,
                ordem:48,
            });

            const questao50_12019 = await Questao.create({
                enunciado: `
                Leia o fragmento do texto a seguir:

                Uma rede hidrográfica é o conjunto formado pelo rio principal e todos os seus 
                afluentes e subafluentes. Brasil possui uma das mais extensas e diversificadas redes 
                fluviais do mundo, dividida em 12 regiões hidrográficas: Bacia Amazônica, Bacia 
                Tocantins Araguaia, Bacia do Paraguai, Bacia Atlântico Nordeste Ocidental, Bacia 
                Atlântico Nordeste Oriental, Bacia do Paraná, Bacia do Parnaíba, Bacia do São 
                Francisco, Bacia do Atlântico Leste, Bacia do Atlântico Sudeste, Bacia do Atlântico 
                Sul e Bacia do Uruguai.
                
                Sobre as principais bacias hidrográficas brasileiras, assinale a opção CORRETA.
                `,
                opcao1: `A Bacia do Paraná é pouco navegável por estar localizada no Planalto Central brasileiro, 
                        sendo totalmente brasileira.`,
                opcao2: `Na Bacia do São Francisco, aconteceu o crime ambiental de Mariana, cuja  empresa responsável 
                        pertence a Samarco Mineração.`,
                opcao3: `A Bacia do Tocantins Araguaia, onde ocorreu o crime ambiental de Mariana é formada por 
                        rios temporários que, no período de cheias, deságua no Rio Amazonas.`,
                opcao4: `As Bacias do São Francisco e Platina sofrem com a retirada da mata ciliar e consequente 
                        assoreamento, mas, apesar disso, apresentam grande potencial hidrelétrico.`,
                opcao5: `A Bacia Amazônica é totalmente brasileira, nela não existem hidrelétricas, pois o impacto 
                        ambiental e a distância dos centros consumidores inviabilizaram construções.`,
                respostaCorreta: 'E',
                disciplinaId: geografia.id,
                categoriaId: recursosNaturais.id,
                provaId: prova12019.id,
                ordem:49,
            });

            const questao1_12018 = await Questao.create({
                enunciado: `
                O texto 1 é um fragmento da obra Retratos da Leitura no Brasil 4, organizado por Zoara 
                Failla. Você deve fazer a leitura para responder a questão

                Texto 1

                Por que os brasileiros não leem?

                A falta de tempo é o principal motivo alegado por não leitores (32%), leitores (43%) e não 
                estudantes (50%) – que gostariam de ter lido mais (3/4 dos leitores). Entre os não leitores, a 
                falta de gosto pela leitura é mencionada por 28%. 

                Mas a principal barreira para a promoção da leitura e a formação leitora está identificada 
                nas respostas de não leitores. Somente 33% deles respondem que não encontram nenhuma 
                dificuldade para ler. A cada edição da pesquisa aumenta o número dos que afirmam ter alguma 
                dificuldade para ler. Quando comparamos com os resultados das edições anteriores, surge uma 
                preocupação que coloca em suspenso a avaliação positiva sobre os indicadores de leitura: em 
                2007, 48% dos não leitores disseram não ter dificuldades, e, em 2011, 43%. Estamos piorando? 
                Mais brasileiros dizem, em 2015, que não leem porque têm alguma dificuldade para ler. Entre 
                eles, 17% indicam algum problema físico (o que muitas vezes é argumento para não confessar 
                que não sabe ler). Apesar dessa dificuldade ter sido mais citada nesta edição, os demais (60%) 
                indicam dificuldade de compreensão ou habilidade leitora.

                O tempo livre dos brasileiros – O que concorre com a leitura

                Os brasileiros – leitores e não leitores – continuam preferindo ver TV, conforme informaram 
                na edição anterior (73% em 2015 e 85%, em 2011), mas essa preferência está cedendo lugar 
                para o uso da internet (47%) e para outras atividades no computador ou no telefone celular: 
                redes sociais (35%) e WhatsApp (43%), especialmente na faixa de 14 a 29 anos.

                Essas atividades concorrem com a leitura do livro e de outros materiais, que receberam 
                somente 24% das citações. 

                Outro resultado que reflete o uso da internet: escrever teve um incremento importante 
                em citações, passando de 18% para 40%. Esse uso da escrita certamente está associado à 
                comunicação (escrita) nas redes sociais.

                Na comparação sobre o uso do tempo livre por leitores e não leitores, uma revelação importante: 
                leitores têm um repertório mais diversificado de atividades culturais e sociais. Ocupam 
                seu tempo livre de maneira mais frequente e variada que não leitores, inclusive praticando 
                exercícios físicos ou encontrando amigos, o que evidencia, também, maior disposição para 
                vivenciar e ocupar o próprio tempo com uma maior diversificação de atividades sociais e 
                culturais. Essa mobilização e esse protagonismo revelam o poder da leitura.

                Essa disposição e essa ampliação do repertório de atividades de diferentes naturezas entre si 
                também estão associadas à escolaridade e ao perfil de renda.
                
                A maior escolaridade do indivíduo indica uma maior diversidade de materiais lidos e a 
                relação que ele estabelece com a leitura. Pessoas com maior nível de escolaridade tendem a 
                ter maior habilidade leitora, o que lhes permite desenvolver outras relações com a leitura para 
                além do seu uso instrumental.

                A respeito das informações veiculadas pelo texto 01, é correto afirmar que`,
                opcao1: `o texto estabelece comparação entre dados de duas pesquisas.`,
                opcao2: `o significado de cada categoria de entrevistados é explicado.`,
                opcao3: `mais anos passados na escola potencializam o hábito de ler.`,
                opcao4: `não se sabem quais são algumas das dificuldades para ler.`,
                opcao5: `a relação entre internet e escrever é mal avaliada.`,
                respostaCorreta: 'C',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova12018.id,
                ordem:1,
            });

            const questao2_12018 = await Questao.create({
                enunciado: `
                O texto 1 é um fragmento da obra Retratos da Leitura no Brasil 4, organizado por Zoara 
                Failla. Você deve fazer a leitura para responder a questão

                Texto 1

                Por que os brasileiros não leem?

                A falta de tempo é o principal motivo alegado por não leitores (32%), leitores (43%) e não 
                estudantes (50%) – que gostariam de ter lido mais (3/4 dos leitores). Entre os não leitores, a 
                falta de gosto pela leitura é mencionada por 28%. 

                Mas a principal barreira para a promoção da leitura e a formação leitora está identificada 
                nas respostas de não leitores. Somente 33% deles respondem que não encontram nenhuma 
                dificuldade para ler. A cada edição da pesquisa aumenta o número dos que afirmam ter alguma 
                dificuldade para ler. Quando comparamos com os resultados das edições anteriores, surge uma 
                preocupação que coloca em suspenso a avaliação positiva sobre os indicadores de leitura: em 
                2007, 48% dos não leitores disseram não ter dificuldades, e, em 2011, 43%. Estamos piorando? 
                Mais brasileiros dizem, em 2015, que não leem porque têm alguma dificuldade para ler. Entre 
                eles, 17% indicam algum problema físico (o que muitas vezes é argumento para não confessar 
                que não sabe ler). Apesar dessa dificuldade ter sido mais citada nesta edição, os demais (60%) 
                indicam dificuldade de compreensão ou habilidade leitora.

                O tempo livre dos brasileiros – O que concorre com a leitura

                Os brasileiros – leitores e não leitores – continuam preferindo ver TV, conforme informaram 
                na edição anterior (73% em 2015 e 85%, em 2011), mas essa preferência está cedendo lugar 
                para o uso da internet (47%) e para outras atividades no computador ou no telefone celular: 
                redes sociais (35%) e WhatsApp (43%), especialmente na faixa de 14 a 29 anos.

                Essas atividades concorrem com a leitura do livro e de outros materiais, que receberam 
                somente 24% das citações. 

                Outro resultado que reflete o uso da internet: escrever teve um incremento importante 
                em citações, passando de 18% para 40%. Esse uso da escrita certamente está associado à 
                comunicação (escrita) nas redes sociais.

                Na comparação sobre o uso do tempo livre por leitores e não leitores, uma revelação importante: 
                leitores têm um repertório mais diversificado de atividades culturais e sociais. Ocupam 
                seu tempo livre de maneira mais frequente e variada que não leitores, inclusive praticando 
                exercícios físicos ou encontrando amigos, o que evidencia, também, maior disposição para 
                vivenciar e ocupar o próprio tempo com uma maior diversificação de atividades sociais e 
                culturais. Essa mobilização e esse protagonismo revelam o poder da leitura.

                Essa disposição e essa ampliação do repertório de atividades de diferentes naturezas entre si 
                também estão associadas à escolaridade e ao perfil de renda.
                
                A maior escolaridade do indivíduo indica uma maior diversidade de materiais lidos e a 
                relação que ele estabelece com a leitura. Pessoas com maior nível de escolaridade tendem a 
                ter maior habilidade leitora, o que lhes permite desenvolver outras relações com a leitura para 
                além do seu uso instrumental.

                Qual das perguntas a seguir NÃO é respondida pelo texto?`,
                opcao1: `O que os leitores costumam fazer em seu tempo livre?`,
                opcao2: `Os entrevistados podem não ser sinceros em suas respostas?`,
                opcao3: `Qual é a razão primordial para os brasileiros não lerem muito?`,
                opcao4: `Como o perfil de renda interfere nos hábitos de leitura do brasileiro?`,
                opcao5: `Que ocupações na internet são preferidas por alguns dos entrevistados?`,
                respostaCorreta: 'D',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova12018.id,
                ordem:2,
            });

            const questao3_12018 = await Questao.create({
                enunciado: `
                O texto 1 é um fragmento da obra Retratos da Leitura no Brasil 4, organizado por Zoara 
                Failla. Você deve fazer a leitura para responder a questão

                Texto 1

                Por que os brasileiros não leem?

                A falta de tempo é o principal motivo alegado por não leitores (32%), leitores (43%) e não 
                estudantes (50%) – que gostariam de ter lido mais (3/4 dos leitores). Entre os não leitores, a 
                falta de gosto pela leitura é mencionada por 28%. 

                Mas a principal barreira para a promoção da leitura e a formação leitora está identificada 
                nas respostas de não leitores. Somente 33% deles respondem que não encontram nenhuma 
                dificuldade para ler. A cada edição da pesquisa aumenta o número dos que afirmam ter alguma 
                dificuldade para ler. Quando comparamos com os resultados das edições anteriores, surge uma 
                preocupação que coloca em suspenso a avaliação positiva sobre os indicadores de leitura: em 
                2007, 48% dos não leitores disseram não ter dificuldades, e, em 2011, 43%. Estamos piorando? 
                Mais brasileiros dizem, em 2015, que não leem porque têm alguma dificuldade para ler. Entre 
                eles, 17% indicam algum problema físico (o que muitas vezes é argumento para não confessar 
                que não sabe ler). Apesar dessa dificuldade ter sido mais citada nesta edição, os demais (60%) 
                indicam dificuldade de compreensão ou habilidade leitora.

                O tempo livre dos brasileiros – O que concorre com a leitura

                Os brasileiros – leitores e não leitores – continuam preferindo ver TV, conforme informaram 
                na edição anterior (73% em 2015 e 85%, em 2011), mas essa preferência está cedendo lugar 
                para o uso da internet (47%) e para outras atividades no computador ou no telefone celular: 
                redes sociais (35%) e WhatsApp (43%), especialmente na faixa de 14 a 29 anos.

                Essas atividades concorrem com a leitura do livro e de outros materiais, que receberam 
                somente 24% das citações. 

                Outro resultado que reflete o uso da internet: escrever teve um incremento importante 
                em citações, passando de 18% para 40%. Esse uso da escrita certamente está associado à 
                comunicação (escrita) nas redes sociais.

                Na comparação sobre o uso do tempo livre por leitores e não leitores, uma revelação importante: 
                leitores têm um repertório mais diversificado de atividades culturais e sociais. Ocupam 
                seu tempo livre de maneira mais frequente e variada que não leitores, inclusive praticando 
                exercícios físicos ou encontrando amigos, o que evidencia, também, maior disposição para 
                vivenciar e ocupar o próprio tempo com uma maior diversificação de atividades sociais e 
                culturais. Essa mobilização e esse protagonismo revelam o poder da leitura.

                Essa disposição e essa ampliação do repertório de atividades de diferentes naturezas entre si 
                também estão associadas à escolaridade e ao perfil de renda.
                
                A maior escolaridade do indivíduo indica uma maior diversidade de materiais lidos e a 
                relação que ele estabelece com a leitura. Pessoas com maior nível de escolaridade tendem a 
                ter maior habilidade leitora, o que lhes permite desenvolver outras relações com a leitura para 
                além do seu uso instrumental.

                Indique o único dos recursos que foi utilizado no texto para a exposição das informações.`,
                opcao1: `Referência a pesquisador da área de leitura.`,
                opcao2: `Comparação do Brasil com outros países.`,
                opcao3: `Citação com fala dos entrevistados.`,
                opcao4: `Menção a uma teoria científica.`,
                opcao5: `Elementos estatísticos.`,
                respostaCorreta: 'E',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova12018.id,
                ordem:3,
            });

            const questao4_12018 = await Questao.create({
                enunciado: `
                O texto 1 é um fragmento da obra Retratos da Leitura no Brasil 4, organizado por Zoara 
                Failla. Você deve fazer a leitura para responder a questão

                Texto 1

                Por que os brasileiros não leem?

                A falta de tempo é o principal motivo alegado por não leitores (32%), leitores (43%) e não 
                estudantes (50%) – que gostariam de ter lido mais (3/4 dos leitores). Entre os não leitores, a 
                falta de gosto pela leitura é mencionada por 28%. 

                Mas a principal barreira para a promoção da leitura e a formação leitora está identificada 
                nas respostas de não leitores. Somente 33% deles respondem que não encontram nenhuma 
                dificuldade para ler. A cada edição da pesquisa aumenta o número dos que afirmam ter alguma 
                dificuldade para ler. Quando comparamos com os resultados das edições anteriores, surge uma 
                preocupação que coloca em suspenso a avaliação positiva sobre os indicadores de leitura: em 
                2007, 48% dos não leitores disseram não ter dificuldades, e, em 2011, 43%. Estamos piorando? 
                Mais brasileiros dizem, em 2015, que não leem porque têm alguma dificuldade para ler. Entre 
                eles, 17% indicam algum problema físico (o que muitas vezes é argumento para não confessar 
                que não sabe ler). Apesar dessa dificuldade ter sido mais citada nesta edição, os demais (60%) 
                indicam dificuldade de compreensão ou habilidade leitora.

                O tempo livre dos brasileiros – O que concorre com a leitura

                Os brasileiros – leitores e não leitores – continuam preferindo ver TV, conforme informaram 
                na edição anterior (73% em 2015 e 85%, em 2011), mas essa preferência está cedendo lugar 
                para o uso da internet (47%) e para outras atividades no computador ou no telefone celular: 
                redes sociais (35%) e WhatsApp (43%), especialmente na faixa de 14 a 29 anos.

                Essas atividades concorrem com a leitura do livro e de outros materiais, que receberam 
                somente 24% das citações. 

                Outro resultado que reflete o uso da internet: escrever teve um incremento importante 
                em citações, passando de 18% para 40%. Esse uso da escrita certamente está associado à 
                comunicação (escrita) nas redes sociais.

                Na comparação sobre o uso do tempo livre por leitores e não leitores, uma revelação importante: 
                leitores têm um repertório mais diversificado de atividades culturais e sociais. Ocupam 
                seu tempo livre de maneira mais frequente e variada que não leitores, inclusive praticando 
                exercícios físicos ou encontrando amigos, o que evidencia, também, maior disposição para 
                vivenciar e ocupar o próprio tempo com uma maior diversificação de atividades sociais e 
                culturais. Essa mobilização e esse protagonismo revelam o poder da leitura.

                Essa disposição e essa ampliação do repertório de atividades de diferentes naturezas entre si 
                também estão associadas à escolaridade e ao perfil de renda.
                
                A maior escolaridade do indivíduo indica uma maior diversidade de materiais lidos e a 
                relação que ele estabelece com a leitura. Pessoas com maior nível de escolaridade tendem a 
                ter maior habilidade leitora, o que lhes permite desenvolver outras relações com a leitura para 
                além do seu uso instrumental.

                A forma destacada em “Por que os brasileiros não leem?” (linha 01) completa corretamente 
                o espaço na opção:`,
                opcao1: `Ainda não se sabe ao certo ____________________ os brasileiros leem pouco.`,
                opcao2: `Sabemos que os brasileiros leem pouco; o que se quer saber é ____________________`,
                opcao3: `As bibliotecas recebem pouca verba ____________________ faltam políticas adequadas.`,
                opcao4: `Pesquisas revelam e explicam alguns ____________________ de os brasileiros lerem pouco.`,
                opcao5: `Os brasileiros de diferentes regiões leem pouco ____________________ não são estimulados.`,
                respostaCorreta: 'A',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTextoGramatica.id,
                provaId: prova12018.id,
                ordem:4,
            });

            const questao5_12018 = await Questao.create({
                enunciado: `
                O texto 1 é um fragmento da obra Retratos da Leitura no Brasil 4, organizado por Zoara 
                Failla. Você deve fazer a leitura para responder a questão

                Texto 1

                Por que os brasileiros não leem?

                A falta de tempo é o principal motivo alegado por não leitores (32%), leitores (43%) e não 
                estudantes (50%) – que gostariam de ter lido mais (3/4 dos leitores). Entre os não leitores, a 
                falta de gosto pela leitura é mencionada por 28%. 

                Mas a principal barreira para a promoção da leitura e a formação leitora está identificada 
                nas respostas de não leitores. Somente 33% deles respondem que não encontram nenhuma 
                dificuldade para ler. A cada edição da pesquisa aumenta o número dos que afirmam ter alguma 
                dificuldade para ler. Quando comparamos com os resultados das edições anteriores, surge uma 
                preocupação que coloca em suspenso a avaliação positiva sobre os indicadores de leitura: em 
                2007, 48% dos não leitores disseram não ter dificuldades, e, em 2011, 43%. Estamos piorando? 
                Mais brasileiros dizem, em 2015, que não leem porque têm alguma dificuldade para ler. Entre 
                eles, 17% indicam algum problema físico (o que muitas vezes é argumento para não confessar 
                que não sabe ler). Apesar dessa dificuldade ter sido mais citada nesta edição, os demais (60%) 
                indicam dificuldade de compreensão ou habilidade leitora.

                O tempo livre dos brasileiros – O que concorre com a leitura

                Os brasileiros – leitores e não leitores – continuam preferindo ver TV, conforme informaram 
                na edição anterior (73% em 2015 e 85%, em 2011), mas essa preferência está cedendo lugar 
                para o uso da internet (47%) e para outras atividades no computador ou no telefone celular: 
                redes sociais (35%) e WhatsApp (43%), especialmente na faixa de 14 a 29 anos.

                Essas atividades concorrem com a leitura do livro e de outros materiais, que receberam 
                somente 24% das citações. 

                Outro resultado que reflete o uso da internet: escrever teve um incremento importante 
                em citações, passando de 18% para 40%. Esse uso da escrita certamente está associado à 
                comunicação (escrita) nas redes sociais.

                Na comparação sobre o uso do tempo livre por leitores e não leitores, uma revelação importante: 
                leitores têm um repertório mais diversificado de atividades culturais e sociais. Ocupam 
                seu tempo livre de maneira mais frequente e variada que não leitores, inclusive praticando 
                exercícios físicos ou encontrando amigos, o que evidencia, também, maior disposição para 
                vivenciar e ocupar o próprio tempo com uma maior diversificação de atividades sociais e 
                culturais. Essa mobilização e esse protagonismo revelam o poder da leitura.

                Essa disposição e essa ampliação do repertório de atividades de diferentes naturezas entre si 
                também estão associadas à escolaridade e ao perfil de renda.
                
                A maior escolaridade do indivíduo indica uma maior diversidade de materiais lidos e a 
                relação que ele estabelece com a leitura. Pessoas com maior nível de escolaridade tendem a 
                ter maior habilidade leitora, o que lhes permite desenvolver outras relações com a leitura para 
                além do seu uso instrumental.

                A reescrita do trecho “Apesar dessa dificuldade ter sido mais citada nesta edição, os demais 
                (60%) indicam dificuldade de compreensão ou habilidade leitora.” (linhas 13 e 14) mantém o 
                sentido original do texto em:`,
                opcao1: `Ao passo que essa dificuldade foi mais citada nesta edição, os demais (60%) indicam dificuldade 
                        de compreensão ou habilidade leitora.`,
                opcao2: `Embora essa dificuldade tenha sido mais citada nesta edição, os demais (60%) indicam 
                        dificuldade de compreensão ou habilidade leitora.`,
                opcao3: `Como essa dificuldade foi mais citada nesta edição, os demais (60%) indicam dificuldade de 
                        compreensão ou habilidade leitora.`,
                opcao4: `Desde que essa dificuldade passou a ser mais citada nesta edição, os demais (60%) indicam 
                        dificuldade de compreensão ou habilidade leitora.`,
                opcao5: `Para que essa dificuldade tenha sido mais citada nesta edição, os demais (60%) indicam 
                        dificuldade de compreensão ou habilidade leitora.`,
                respostaCorreta: 'B',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTextoGramatica.id,
                provaId: prova12018.id,
                ordem:5,
            });

            const questao6_12018 = await Questao.create({
                enunciado: `
                O texto 1 é um fragmento da obra Retratos da Leitura no Brasil 4, organizado por Zoara 
                Failla. Você deve fazer a leitura para responder a questão

                Texto 1

                Por que os brasileiros não leem?

                A falta de tempo é o principal motivo alegado por não leitores (32%), leitores (43%) e não 
                estudantes (50%) – que gostariam de ter lido mais (3/4 dos leitores). Entre os não leitores, a 
                falta de gosto pela leitura é mencionada por 28%. 

                Mas a principal barreira para a promoção da leitura e a formação leitora está identificada 
                nas respostas de não leitores. Somente 33% deles respondem que não encontram nenhuma 
                dificuldade para ler. A cada edição da pesquisa aumenta o número dos que afirmam ter alguma 
                dificuldade para ler. Quando comparamos com os resultados das edições anteriores, surge uma 
                preocupação que coloca em suspenso a avaliação positiva sobre os indicadores de leitura: em 
                2007, 48% dos não leitores disseram não ter dificuldades, e, em 2011, 43%. Estamos piorando? 
                Mais brasileiros dizem, em 2015, que não leem porque têm alguma dificuldade para ler. Entre 
                eles, 17% indicam algum problema físico (o que muitas vezes é argumento para não confessar 
                que não sabe ler). Apesar dessa dificuldade ter sido mais citada nesta edição, os demais (60%) 
                indicam dificuldade de compreensão ou habilidade leitora.

                O tempo livre dos brasileiros – O que concorre com a leitura

                Os brasileiros – leitores e não leitores – continuam preferindo ver TV, conforme informaram 
                na edição anterior (73% em 2015 e 85%, em 2011), mas essa preferência está cedendo lugar 
                para o uso da internet (47%) e para outras atividades no computador ou no telefone celular: 
                redes sociais (35%) e WhatsApp (43%), especialmente na faixa de 14 a 29 anos.

                Essas atividades concorrem com a leitura do livro e de outros materiais, que receberam 
                somente 24% das citações. 

                Outro resultado que reflete o uso da internet: escrever teve um incremento importante 
                em citações, passando de 18% para 40%. Esse uso da escrita certamente está associado à 
                comunicação (escrita) nas redes sociais.

                Na comparação sobre o uso do tempo livre por leitores e não leitores, uma revelação importante: 
                leitores têm um repertório mais diversificado de atividades culturais e sociais. Ocupam 
                seu tempo livre de maneira mais frequente e variada que não leitores, inclusive praticando 
                exercícios físicos ou encontrando amigos, o que evidencia, também, maior disposição para 
                vivenciar e ocupar o próprio tempo com uma maior diversificação de atividades sociais e 
                culturais. Essa mobilização e esse protagonismo revelam o poder da leitura.

                Essa disposição e essa ampliação do repertório de atividades de diferentes naturezas entre si 
                também estão associadas à escolaridade e ao perfil de renda.
                
                A maior escolaridade do indivíduo indica uma maior diversidade de materiais lidos e a 
                relação que ele estabelece com a leitura. Pessoas com maior nível de escolaridade tendem a 
                ter maior habilidade leitora, o que lhes permite desenvolver outras relações com a leitura para 
                além do seu uso instrumental.

                Marque a alternativa em que a referência entre os elementos do texto está corretamente 
                indicada.`,
                opcao1: `seu tempo livre (linha 27) se refere a não leitores (linha 25).`,
                opcao2: `essa preferência (linha 17) se refere a o uso da internet (linha 18).`,
                opcao3: `essa disposição (linha 31) se refere a esse protagonismo (linha 30).`,
                opcao4: `lhes (linha 35) se refere a pessoas com maior nível de escolaridade (linha 34).`,
                opcao5: `essas atividades (linha 20) se refere a leitura do livro e de outros materiais (linha 20).`,
                respostaCorreta: 'D',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova12018.id,
                ordem:6,
            });

            const questao7_12018 = await Questao.create({
                enunciado: `
                O texto 1 é um fragmento da obra Retratos da Leitura no Brasil 4, organizado por Zoara 
                Failla. Você deve fazer a leitura para responder a questão

                Texto 1

                Por que os brasileiros não leem?

                A falta de tempo é o principal motivo alegado por não leitores (32%), leitores (43%) e não 
                estudantes (50%) – que gostariam de ter lido mais (3/4 dos leitores). Entre os não leitores, a 
                falta de gosto pela leitura é mencionada por 28%. 

                Mas a principal barreira para a promoção da leitura e a formação leitora está identificada 
                nas respostas de não leitores. Somente 33% deles respondem que não encontram nenhuma 
                dificuldade para ler. A cada edição da pesquisa aumenta o número dos que afirmam ter alguma 
                dificuldade para ler. Quando comparamos com os resultados das edições anteriores, surge uma 
                preocupação que coloca em suspenso a avaliação positiva sobre os indicadores de leitura: em 
                2007, 48% dos não leitores disseram não ter dificuldades, e, em 2011, 43%. Estamos piorando? 
                Mais brasileiros dizem, em 2015, que não leem porque têm alguma dificuldade para ler. Entre 
                eles, 17% indicam algum problema físico (o que muitas vezes é argumento para não confessar 
                que não sabe ler). Apesar dessa dificuldade ter sido mais citada nesta edição, os demais (60%) 
                indicam dificuldade de compreensão ou habilidade leitora.

                O tempo livre dos brasileiros – O que concorre com a leitura

                Os brasileiros – leitores e não leitores – continuam preferindo ver TV, conforme informaram 
                na edição anterior (73% em 2015 e 85%, em 2011), mas essa preferência está cedendo lugar 
                para o uso da internet (47%) e para outras atividades no computador ou no telefone celular: 
                redes sociais (35%) e WhatsApp (43%), especialmente na faixa de 14 a 29 anos.

                Essas atividades concorrem com a leitura do livro e de outros materiais, que receberam 
                somente 24% das citações. 

                Outro resultado que reflete o uso da internet: escrever teve um incremento importante 
                em citações, passando de 18% para 40%. Esse uso da escrita certamente está associado à 
                comunicação (escrita) nas redes sociais.

                Na comparação sobre o uso do tempo livre por leitores e não leitores, uma revelação importante: 
                leitores têm um repertório mais diversificado de atividades culturais e sociais. Ocupam 
                seu tempo livre de maneira mais frequente e variada que não leitores, inclusive praticando 
                exercícios físicos ou encontrando amigos, o que evidencia, também, maior disposição para 
                vivenciar e ocupar o próprio tempo com uma maior diversificação de atividades sociais e 
                culturais. Essa mobilização e esse protagonismo revelam o poder da leitura.

                Essa disposição e essa ampliação do repertório de atividades de diferentes naturezas entre si 
                também estão associadas à escolaridade e ao perfil de renda.
                
                A maior escolaridade do indivíduo indica uma maior diversidade de materiais lidos e a 
                relação que ele estabelece com a leitura. Pessoas com maior nível de escolaridade tendem a 
                ter maior habilidade leitora, o que lhes permite desenvolver outras relações com a leitura para 
                além do seu uso instrumental.

                Os travessões empregados em “Os brasileiros – leitores e não leitores – continuam preferindo 
                ver TV [...]”, linha 16, só podem ser substituídos nesse trecho por`,
                opcao1: `pontos.`,
                opcao2: `chaves.`,
                opcao3: `vírgulas.`,
                opcao4: `reticências.`,
                opcao5: `dois-pontos.`,
                respostaCorreta: 'C',
                disciplinaId: portugues.id,
                categoriaId: pontuacaoEstruturacaoFrases.id,
                provaId: prova12018.id,
                ordem:7,
            });

            const questao8_12018 = await Questao.create({
                enunciado: `
                O texto 1 é um fragmento da obra Retratos da Leitura no Brasil 4, organizado por Zoara 
                Failla. Você deve fazer a leitura para responder a questão

                Texto 1

                Por que os brasileiros não leem?

                A falta de tempo é o principal motivo alegado por não leitores (32%), leitores (43%) e não 
                estudantes (50%) – que gostariam de ter lido mais (3/4 dos leitores). Entre os não leitores, a 
                falta de gosto pela leitura é mencionada por 28%. 

                Mas a principal barreira para a promoção da leitura e a formação leitora está identificada 
                nas respostas de não leitores. Somente 33% deles respondem que não encontram nenhuma 
                dificuldade para ler. A cada edição da pesquisa aumenta o número dos que afirmam ter alguma 
                dificuldade para ler. Quando comparamos com os resultados das edições anteriores, surge uma 
                preocupação que coloca em suspenso a avaliação positiva sobre os indicadores de leitura: em 
                2007, 48% dos não leitores disseram não ter dificuldades, e, em 2011, 43%. Estamos piorando? 
                Mais brasileiros dizem, em 2015, que não leem porque têm alguma dificuldade para ler. Entre 
                eles, 17% indicam algum problema físico (o que muitas vezes é argumento para não confessar 
                que não sabe ler). Apesar dessa dificuldade ter sido mais citada nesta edição, os demais (60%) 
                indicam dificuldade de compreensão ou habilidade leitora.

                O tempo livre dos brasileiros – O que concorre com a leitura

                Os brasileiros – leitores e não leitores – continuam preferindo ver TV, conforme informaram 
                na edição anterior (73% em 2015 e 85%, em 2011), mas essa preferência está cedendo lugar 
                para o uso da internet (47%) e para outras atividades no computador ou no telefone celular: 
                redes sociais (35%) e WhatsApp (43%), especialmente na faixa de 14 a 29 anos.

                Essas atividades concorrem com a leitura do livro e de outros materiais, que receberam 
                somente 24% das citações. 

                Outro resultado que reflete o uso da internet: escrever teve um incremento importante 
                em citações, passando de 18% para 40%. Esse uso da escrita certamente está associado à 
                comunicação (escrita) nas redes sociais.

                Na comparação sobre o uso do tempo livre por leitores e não leitores, uma revelação importante: 
                leitores têm um repertório mais diversificado de atividades culturais e sociais. Ocupam 
                seu tempo livre de maneira mais frequente e variada que não leitores, inclusive praticando 
                exercícios físicos ou encontrando amigos, o que evidencia, também, maior disposição para 
                vivenciar e ocupar o próprio tempo com uma maior diversificação de atividades sociais e 
                culturais. Essa mobilização e esse protagonismo revelam o poder da leitura.

                Essa disposição e essa ampliação do repertório de atividades de diferentes naturezas entre si 
                também estão associadas à escolaridade e ao perfil de renda.
                
                A maior escolaridade do indivíduo indica uma maior diversidade de materiais lidos e a 
                relação que ele estabelece com a leitura. Pessoas com maior nível de escolaridade tendem a 
                ter maior habilidade leitora, o que lhes permite desenvolver outras relações com a leitura para 
                além do seu uso instrumental.

                “Os brasileiros – leitores e não leitores – continuam preferindo 
                ver TV [...]”, linha 16.
                
                aponte entre as alternativas aquela em que 
                a reescrita segue as regras de concordância verbal da norma-padrão do português.
                `,
                opcao1: `Continuam preferindo ver TV o brasileiro.`,
                opcao2: `Preferem ver TV os brasileiros, leitores e não leitores.`,
                opcao3: `Continua preferindo ver TV os leitores e não leitores.`,
                opcao4: `O brasileiro – leitores e não leitores – preferem ver TV.`,
                opcao5: `Os leitores e não leitores, como todo brasileiro, prefere ver TV.`,
                respostaCorreta: 'B',
                disciplinaId: portugues.id,
                categoriaId: pontuacaoEstruturacaoFrases.id,
                provaId: prova12018.id,
                ordem:8,
            });

            const questao9_12018 = await Questao.create({
                enunciado: `
                O texto 1 é um fragmento da obra Retratos da Leitura no Brasil 4, organizado por Zoara 
                Failla. Você deve fazer a leitura para responder a questão

                Texto 1

                Por que os brasileiros não leem?

                A falta de tempo é o principal motivo alegado por não leitores (32%), leitores (43%) e não 
                estudantes (50%) – que gostariam de ter lido mais (3/4 dos leitores). Entre os não leitores, a 
                falta de gosto pela leitura é mencionada por 28%. 

                Mas a principal barreira para a promoção da leitura e a formação leitora está identificada 
                nas respostas de não leitores. Somente 33% deles respondem que não encontram nenhuma 
                dificuldade para ler. A cada edição da pesquisa aumenta o número dos que afirmam ter alguma 
                dificuldade para ler. Quando comparamos com os resultados das edições anteriores, surge uma 
                preocupação que coloca em suspenso a avaliação positiva sobre os indicadores de leitura: em 
                2007, 48% dos não leitores disseram não ter dificuldades, e, em 2011, 43%. Estamos piorando? 
                Mais brasileiros dizem, em 2015, que não leem porque têm alguma dificuldade para ler. Entre 
                eles, 17% indicam algum problema físico (o que muitas vezes é argumento para não confessar 
                que não sabe ler). Apesar dessa dificuldade ter sido mais citada nesta edição, os demais (60%) 
                indicam dificuldade de compreensão ou habilidade leitora.

                O tempo livre dos brasileiros – O que concorre com a leitura

                Os brasileiros – leitores e não leitores – continuam preferindo ver TV, conforme informaram 
                na edição anterior (73% em 2015 e 85%, em 2011), mas essa preferência está cedendo lugar 
                para o uso da internet (47%) e para outras atividades no computador ou no telefone celular: 
                redes sociais (35%) e WhatsApp (43%), especialmente na faixa de 14 a 29 anos.

                Essas atividades concorrem com a leitura do livro e de outros materiais, que receberam 
                somente 24% das citações. 

                Outro resultado que reflete o uso da internet: escrever teve um incremento importante 
                em citações, passando de 18% para 40%. Esse uso da escrita certamente está associado à 
                comunicação (escrita) nas redes sociais.

                Na comparação sobre o uso do tempo livre por leitores e não leitores, uma revelação importante: 
                leitores têm um repertório mais diversificado de atividades culturais e sociais. Ocupam 
                seu tempo livre de maneira mais frequente e variada que não leitores, inclusive praticando 
                exercícios físicos ou encontrando amigos, o que evidencia, também, maior disposição para 
                vivenciar e ocupar o próprio tempo com uma maior diversificação de atividades sociais e 
                culturais. Essa mobilização e esse protagonismo revelam o poder da leitura.

                Essa disposição e essa ampliação do repertório de atividades de diferentes naturezas entre si 
                também estão associadas à escolaridade e ao perfil de renda.
                
                A maior escolaridade do indivíduo indica uma maior diversidade de materiais lidos e a 
                relação que ele estabelece com a leitura. Pessoas com maior nível de escolaridade tendem a 
                ter maior habilidade leitora, o que lhes permite desenvolver outras relações com a leitura para 
                além do seu uso instrumental.

                A ideia introduzida pelo emprego de quando em “Quando comparamos com os resultados 
                das edições anteriores, surge uma preocupação que coloca em suspenso a avaliação positiva 
                sobre os indicadores de leitura [...]”, linhas 08 e 09, é a de
                `,
                opcao1: `tempo.`,
                opcao2: `oposição.`,
                opcao3: `proporção.`,
                opcao4: `conclusão.`,
                opcao5: `inalidade.`,
                respostaCorreta: 'A',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova12018.id,
                ordem:9,
            });

            const questao10_12018 = await Questao.create({
                enunciado: `
                O texto 1 é um fragmento da obra Retratos da Leitura no Brasil 4, organizado por Zoara 
                Failla. Você deve fazer a leitura para responder a questão

                Texto 1

                Por que os brasileiros não leem?

                A falta de tempo é o principal motivo alegado por não leitores (32%), leitores (43%) e não 
                estudantes (50%) – que gostariam de ter lido mais (3/4 dos leitores). Entre os não leitores, a 
                falta de gosto pela leitura é mencionada por 28%. 

                Mas a principal barreira para a promoção da leitura e a formação leitora está identificada 
                nas respostas de não leitores. Somente 33% deles respondem que não encontram nenhuma 
                dificuldade para ler. A cada edição da pesquisa aumenta o número dos que afirmam ter alguma 
                dificuldade para ler. Quando comparamos com os resultados das edições anteriores, surge uma 
                preocupação que coloca em suspenso a avaliação positiva sobre os indicadores de leitura: em 
                2007, 48% dos não leitores disseram não ter dificuldades, e, em 2011, 43%. Estamos piorando? 
                Mais brasileiros dizem, em 2015, que não leem porque têm alguma dificuldade para ler. Entre 
                eles, 17% indicam algum problema físico (o que muitas vezes é argumento para não confessar 
                que não sabe ler). Apesar dessa dificuldade ter sido mais citada nesta edição, os demais (60%) 
                indicam dificuldade de compreensão ou habilidade leitora.

                O tempo livre dos brasileiros – O que concorre com a leitura

                Os brasileiros – leitores e não leitores – continuam preferindo ver TV, conforme informaram 
                na edição anterior (73% em 2015 e 85%, em 2011), mas essa preferência está cedendo lugar 
                para o uso da internet (47%) e para outras atividades no computador ou no telefone celular: 
                redes sociais (35%) e WhatsApp (43%), especialmente na faixa de 14 a 29 anos.

                Essas atividades concorrem com a leitura do livro e de outros materiais, que receberam 
                somente 24% das citações. 

                Outro resultado que reflete o uso da internet: escrever teve um incremento importante 
                em citações, passando de 18% para 40%. Esse uso da escrita certamente está associado à 
                comunicação (escrita) nas redes sociais.

                Na comparação sobre o uso do tempo livre por leitores e não leitores, uma revelação importante: 
                leitores têm um repertório mais diversificado de atividades culturais e sociais. Ocupam 
                seu tempo livre de maneira mais frequente e variada que não leitores, inclusive praticando 
                exercícios físicos ou encontrando amigos, o que evidencia, também, maior disposição para 
                vivenciar e ocupar o próprio tempo com uma maior diversificação de atividades sociais e 
                culturais. Essa mobilização e esse protagonismo revelam o poder da leitura.

                Essa disposição e essa ampliação do repertório de atividades de diferentes naturezas entre si 
                também estão associadas à escolaridade e ao perfil de renda.
                
                A maior escolaridade do indivíduo indica uma maior diversidade de materiais lidos e a 
                relação que ele estabelece com a leitura. Pessoas com maior nível de escolaridade tendem a 
                ter maior habilidade leitora, o que lhes permite desenvolver outras relações com a leitura para 
                além do seu uso instrumental.

                Considere o fragmento “Mais brasileiros dizem, em 2015, que não leem porque têm alguma 
                dificuldade para ler.” (linha 11). Quais dos verbos abaixo seguem, respectivamente, o mesmo 
                padrão de flexão dos destacados no trecho?
                `,
                opcao1: `vir e dar.`,
                opcao2: `crer e ver.`,
                opcao3: `ver e vir.`,
                opcao4: `ser e vir.`,
                opcao5: `crer e ser.`,
                respostaCorreta: 'A',
                disciplinaId: portugues.id,
                categoriaId: analiseSintatica.id,
                provaId: prova12018.id,
                ordem:10,
            });

            const questao11_12018 = await Questao.create({
                enunciado: `
                O texto 1 é um fragmento da obra Retratos da Leitura no Brasil 4, organizado por Zoara 
                Failla. Você deve fazer a leitura para responder a questão

                Texto 1

                Por que os brasileiros não leem?

                A falta de tempo é o principal motivo alegado por não leitores (32%), leitores (43%) e não 
                estudantes (50%) – que gostariam de ter lido mais (3/4 dos leitores). Entre os não leitores, a 
                falta de gosto pela leitura é mencionada por 28%. 

                Mas a principal barreira para a promoção da leitura e a formação leitora está identificada 
                nas respostas de não leitores. Somente 33% deles respondem que não encontram nenhuma 
                dificuldade para ler. A cada edição da pesquisa aumenta o número dos que afirmam ter alguma 
                dificuldade para ler. Quando comparamos com os resultados das edições anteriores, surge uma 
                preocupação que coloca em suspenso a avaliação positiva sobre os indicadores de leitura: em 
                2007, 48% dos não leitores disseram não ter dificuldades, e, em 2011, 43%. Estamos piorando? 
                Mais brasileiros dizem, em 2015, que não leem porque têm alguma dificuldade para ler. Entre 
                eles, 17% indicam algum problema físico (o que muitas vezes é argumento para não confessar 
                que não sabe ler). Apesar dessa dificuldade ter sido mais citada nesta edição, os demais (60%) 
                indicam dificuldade de compreensão ou habilidade leitora.

                O tempo livre dos brasileiros – O que concorre com a leitura

                Os brasileiros – leitores e não leitores – continuam preferindo ver TV, conforme informaram 
                na edição anterior (73% em 2015 e 85%, em 2011), mas essa preferência está cedendo lugar 
                para o uso da internet (47%) e para outras atividades no computador ou no telefone celular: 
                redes sociais (35%) e WhatsApp (43%), especialmente na faixa de 14 a 29 anos.

                Essas atividades concorrem com a leitura do livro e de outros materiais, que receberam 
                somente 24% das citações. 

                Outro resultado que reflete o uso da internet: escrever teve um incremento importante 
                em citações, passando de 18% para 40%. Esse uso da escrita certamente está associado à 
                comunicação (escrita) nas redes sociais.

                Na comparação sobre o uso do tempo livre por leitores e não leitores, uma revelação importante: 
                leitores têm um repertório mais diversificado de atividades culturais e sociais. Ocupam 
                seu tempo livre de maneira mais frequente e variada que não leitores, inclusive praticando 
                exercícios físicos ou encontrando amigos, o que evidencia, também, maior disposição para 
                vivenciar e ocupar o próprio tempo com uma maior diversificação de atividades sociais e 
                culturais. Essa mobilização e esse protagonismo revelam o poder da leitura.

                Essa disposição e essa ampliação do repertório de atividades de diferentes naturezas entre si 
                também estão associadas à escolaridade e ao perfil de renda.
                
                A maior escolaridade do indivíduo indica uma maior diversidade de materiais lidos e a 
                relação que ele estabelece com a leitura. Pessoas com maior nível de escolaridade tendem a 
                ter maior habilidade leitora, o que lhes permite desenvolver outras relações com a leitura para 
                além do seu uso instrumental.

                Marque o item que apresenta palavras com a sílaba tônica na mesma posição.
                `,
                opcao1: `nível (linha 34) e físicos (linha 28)`,
                opcao2: `confessar (linha 12) e perfil (linha 33)`,
                opcao3: `receberam (linha 20) e sociais (linha 29)`,
                opcao4: `incremento (linha 22) e relações (linha 35)`,
                opcao5: `disseram (linha 10) e compreensão (linha 14)`,
                respostaCorreta: 'B',
                disciplinaId: portugues.id,
                categoriaId: foneticaFonologia.id,
                provaId: prova12018.id,
                ordem:11,
            });

            const questao12_12018 = await Questao.create({
                enunciado: `
                O texto 1 é um fragmento da obra Retratos da Leitura no Brasil 4, organizado por Zoara 
                Failla. Você deve fazer a leitura para responder a questão

                Texto 1

                Por que os brasileiros não leem?

                A falta de tempo é o principal motivo alegado por não leitores (32%), leitores (43%) e não 
                estudantes (50%) – que gostariam de ter lido mais (3/4 dos leitores). Entre os não leitores, a 
                falta de gosto pela leitura é mencionada por 28%. 

                Mas a principal barreira para a promoção da leitura e a formação leitora está identificada 
                nas respostas de não leitores. Somente 33% deles respondem que não encontram nenhuma 
                dificuldade para ler. A cada edição da pesquisa aumenta o número dos que afirmam ter alguma 
                dificuldade para ler. Quando comparamos com os resultados das edições anteriores, surge uma 
                preocupação que coloca em suspenso a avaliação positiva sobre os indicadores de leitura: em 
                2007, 48% dos não leitores disseram não ter dificuldades, e, em 2011, 43%. Estamos piorando? 
                Mais brasileiros dizem, em 2015, que não leem porque têm alguma dificuldade para ler. Entre 
                eles, 17% indicam algum problema físico (o que muitas vezes é argumento para não confessar 
                que não sabe ler). Apesar dessa dificuldade ter sido mais citada nesta edição, os demais (60%) 
                indicam dificuldade de compreensão ou habilidade leitora.

                O tempo livre dos brasileiros – O que concorre com a leitura

                Os brasileiros – leitores e não leitores – continuam preferindo ver TV, conforme informaram 
                na edição anterior (73% em 2015 e 85%, em 2011), mas essa preferência está cedendo lugar 
                para o uso da internet (47%) e para outras atividades no computador ou no telefone celular: 
                redes sociais (35%) e WhatsApp (43%), especialmente na faixa de 14 a 29 anos.

                Essas atividades concorrem com a leitura do livro e de outros materiais, que receberam 
                somente 24% das citações. 

                Outro resultado que reflete o uso da internet: escrever teve um incremento importante 
                em citações, passando de 18% para 40%. Esse uso da escrita certamente está associado à 
                comunicação (escrita) nas redes sociais.

                Na comparação sobre o uso do tempo livre por leitores e não leitores, uma revelação importante: 
                leitores têm um repertório mais diversificado de atividades culturais e sociais. Ocupam 
                seu tempo livre de maneira mais frequente e variada que não leitores, inclusive praticando 
                exercícios físicos ou encontrando amigos, o que evidencia, também, maior disposição para 
                vivenciar e ocupar o próprio tempo com uma maior diversificação de atividades sociais e 
                culturais. Essa mobilização e esse protagonismo revelam o poder da leitura.

                Essa disposição e essa ampliação do repertório de atividades de diferentes naturezas entre si 
                também estão associadas à escolaridade e ao perfil de renda.
                
                A maior escolaridade do indivíduo indica uma maior diversidade de materiais lidos e a 
                relação que ele estabelece com a leitura. Pessoas com maior nível de escolaridade tendem a 
                ter maior habilidade leitora, o que lhes permite desenvolver outras relações com a leitura para 
                além do seu uso instrumental.

                Indique a parte do texto em que há advérbio alterando o significado de um adjetivo.
                `,
                opcao1: `“[...] uma preocupação que coloca em suspenso [...]” (linhas 08 e 09)`,
                opcao2: `“[...] maior disposição para vivenciar [...]” (linhas 28 e 29)`,
                opcao3: `“[...] de maneira mais frequente [...]” (linha 27)`,
                opcao4: `“[...] gostariam de ter lido mais [...]” (linha 03)`,
                opcao5: `“[...] algum problema físico [...]” (linha 12)`,
                respostaCorreta: 'C',
                disciplinaId: portugues.id,
                categoriaId: adverbios.id,
                provaId: prova12018.id,
                ordem:12,
            });

            const questao14_12018 = await Questao.create({
                enunciado: `
                Sobre “Leitura alimenta”, na peça publicitária, é INCORRETO afirmar que
                `,
                opcao1: `o uso de alimenta é figurado.`,
                opcao2: `a leitura pode substituir a alimentação.`,
                opcao3: `a leitura funciona como nutriente para quem lê.`,
                opcao4: `o elemento visual central tem a ver com alimentação.`,
                opcao5: `o elemento visual no canto superior direito está relacionado ao verbo em questão.`,
                respostaCorreta: 'B',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTextoFiguraLinguagem.id,
                provaId: prova12018.id,
                ordem:13,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova6-14.png"
            });

            const questao15_12018 = await Questao.create({
                enunciado: `
                Indique a alternativa que analisa INCORRETAMENTE a passagem da peça publicitária 
                “Tem gente que não tem tempo para ler. E tem gente que não tem livro”. 
                `,
                opcao1: `Para ler indica a finalidade do uso do tempo.`,
                opcao2: `A função do que é retomar o termo anterior, gente.`,
                opcao3: `A conjunção e pode ser substituída por mas, mantendo-se o sentido original.`,
                opcao4: `O uso de tem em tem gente está de acordo com a norma-padrão do português.`,
                opcao5: `Os complementos de tem tempo e tem livro são abstrato e concreto, respectivamente.`,
                respostaCorreta: 'D',
                disciplinaId: portugues.id,
                categoriaId: analiseSintatica.id,
                provaId: prova12018.id,
                ordem:14,
            });

            const questao16_12018 = await Questao.create({
                enunciado: `
                As polias e correias formam a base de equipamentos de transmissão de energia mecânica. A 
                sua principal função é transferir movimento e força de um lado a outro da máquina, configurando 
                um sistema de transferência de força e movimento altamente confiável. Motores de automóveis, 
                máquinas de tração, esteiras e linhas de produção são alguns tipos de maquinário que precisam 
                do uso constante dessas peças. A figura abaixo representa um sistema composto por discos A 
                e B representando polias de diâmetros 8 e 2 cm, respectivamente, unidas por correias que se 
                movimentam sem deslizar. Quando o disco A dá uma volta completa no sentido horário, o disco 
                B gira:
                `,
                opcao1: `4 voltas no sentido horário`,
                opcao2: `2 voltas no sentido horário `,
                opcao3: `6 voltas no sentido anti-horário `,
                opcao4: `4 voltas no sentido anti-horário `,
                opcao5: `2 voltas no sentido horário`,
                respostaCorreta: 'A',
                disciplinaId: matematica.id,
                categoriaId: mecanica.id,
                provaId: prova12018.id,
                ordem:15,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova6-16.png"
            });

            const questao17_12018 = await Questao.create({
                enunciado: `
                A mitose é um processo de divisão celular, no qual a partir de uma célula formada, originam
                se duas células com a mesma composição genética. Este processo de divisão celular é comum 
                a todos os seres vivos, dos animais e plantas multicelulares até os organismos unicelulares, nos 
                quais, muitas vezes, este é o principal ou, até mesmo, o único processo de reprodução. Considere 
                que cada processo de mitose dura uma hora. Se um grupo de uma única célula se torna um grupo 
                de X células em 100 horas, sendo que cada nova célula inicia a mitose imediatamente após o 
                término do processo que a originou, em quantas horas um grupo de duas células se tornará um 
                grupo de X células nas mesmas condições descritas?
                `,
                opcao1: `101`,
                opcao2: `99`,
                opcao3: `50 `,
                opcao4: `100`,
                opcao5: `98`,
                respostaCorreta: 'B',
                disciplinaId: matematica.id,
                categoriaId: pg.id,
                provaId: prova12018.id,
                ordem:16,
            });

            const questao18_12018 = await Questao.create({
                enunciado: `
                Ao traçar a reta r, paralela ao eixo das abscissas passando por um ponto do plano cartesiano, 
                intersecta-se o gráfico da função real f(x) = x² - 6x + 11 nos pontos A e B, como mostra a 
                figura. Sabe-se que o segmento AB tem comprimento 4. Assim, a distância de AB ao eixo das 
                abscissas é:
                `,
                opcao1: `6`,
                opcao2: `4`,
                opcao3: `5 `,
                opcao4: `7`,
                opcao5: `8`,
                respostaCorreta: 'A',
                disciplinaId: matematica.id,
                categoriaId: geometriaAnalitica.id,
                provaId: prova12018.id,
                ordem:17,
            });

            const questao19_12018 = await Questao.create({
                enunciado: `
                Um aplicativo, recém lançado para todas as plataformas de celular, está fazendo um grande 
                sucesso dentre os adolescentes neste último mês. O jogo funciona de acordo com as seguintes 
                regras:
                
                – No início de uma série de partidas, a máquina atribui ao jogador Q pontos.
                – Em cada uma das partidas, em caso de vitória ou derrota, o jogador ganha ou perde a metade 
                dos pontos que tem no início desta partida, respectivamente.
                
                Se uma pessoa jogar uma série de quatro partidas, nas quais ela perde duas vezes e ganha duas 
                vezes, quantos pontos terá ao final?
                `,
                opcao1: `Q pontos`,
                opcao2: `1/16 Q pontos`,
                opcao3: `81/16 Q pontos `,
                opcao4: `9/16 Q pontos`,
                opcao5: `3/16 Q pontos`,
                respostaCorreta: 'D',
                disciplinaId: matematica.id,
                categoriaId: porcentagem.id,
                provaId: prova12018.id,
                ordem:18,
            });

            const questao20_12018 = await Questao.create({
                enunciado: `
                A figura a seguir ilustra uma sequência de bifurcações do centro de uma grande metrópole 
                do nosso país. Sabe-se que todas as vias representadas na imagem são de mão única. Desejando 
                fazer um estudo do percentual de veículos que trafegam diariamente neste trecho, a prefeitura 
                coletou os seguintes dados: 

                – dos veículos que passam por A, 55% viram à esquerda;
                – dos veículos que passam por B, 25% viram à esquerda; 
                – daqueles que trafegam por C, 60% dobram à esquerda;

                De posse destes dados, a prefeitura constatou que o percentual dos veículos que, passando por 
                A, entram em E é:
                `,
                opcao1: `68,25%`,
                opcao2: `40,75%`,
                opcao3: `31,75%`,
                opcao4: `59,25%`,
                opcao5: `50%`,
                respostaCorreta: 'A',
                disciplinaId: matematica.id,
                categoriaId: estatistica.id,
                provaId: prova12018.id,
                ordem:19,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova6-20.png"
            });

            const questao21_12018 = await Questao.create({
                enunciado: `
                Uma pessoa brinca de arrumar palitos fazendo uma sequência de quadrados como na figura 
                abaixo. Sabendo que ele construiu n quadrados de acordo com o padrão apresentado na imagem, 
                pode-se afirmar que ele utilizou um número de palitos igual a:
                `,
                opcao1: `4n`,
                opcao2: `4n + 2`,
                opcao3: `3n + 1`,
                opcao4: `3n + 2`,
                opcao5: `n/4`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: sequenciasProgressoes.id,
                provaId: prova12018.id,
                ordem:20,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova6-21.png"
            });

            const questao22_12018 = await Questao.create({
                enunciado: `
                Considerando n ∈ N, sendo N = {0, 1, 2, 3, ...} – o conjunto dos números naturais – qual 
                das regras de associação abaixo define uma função de N em N, isto é, uma função tendo como
                domínio e contradomínio o conjunto dos números naturais?
                `,
                opcao1: `n é associado ao seu antecessor.`,
                opcao2: `n é associado a sua terça parte.`,
                opcao3: `n é associado a m tal que m é divisor de n.`,
                opcao4: `n é associado ao resto de sua divisão por 5`,
                opcao5: `n é associado a p tal que p é primo e p < n.`,
                respostaCorreta: 'D',
                disciplinaId: matematica.id,
                categoriaId: conjuntos.id,
                provaId: prova12018.id,
                ordem:21,
            });
            
            const questao23_12018 = await Questao.create({
                enunciado: `
                De acordo com a expressão e as afirmações, responda a questão:

                 I – se um número inteiro divide 144 então divide m e n.
                
                 II – o máximo divisor comum entre m e n é 288.
                
                 III – o mínimo múltiplo comum entre m e n é 213 . 38 . 54.
                
                IV – o número n é maior do que o número m.
                
                V – o resto da divisão de m por n é zero.

                Destas, podemos afirmar que:
                `,
                opcao1: `todas as afirmações são verdadeiras.`,
                opcao2: `apenas as afirmações I, III e IV são verdadeiras.`,
                opcao3: `apenas a afirmação III é falsa.`,
                opcao4: `apenas as afirmações I e II são verdadeiras.`,
                opcao5: `apenas as afirmações I, II e III são verdadeiras.`,
                respostaCorreta: 'D',
                disciplinaId: matematica.id,
                categoriaId: teoriaNumeros.id,
                provaId: prova12018.id,
                ordem:22,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova6-23.png"
            });
            
            const questao24_12018 = await Questao.create({
                enunciado: `
                 Considere ABC um triângulo equilátero com lado de medida a metros. Ao traçar os segmentos 
                EF, ED e DF, sendo D, E e F os pontos médios dos lados AB, BC e CA, respectivamente, obtêm
                se o triângulo DEF, como mostra a figura. Abaixo, tem-se cinco afirmações a respeito desta 
                construção.

                 I – O triângulo DEF é equilátero.
                
                 II – O comprimento, em metro, do lado DE do triângulo DEF é a terça parte do comprimento 
                de um lado de ABC.
                
                 III – A área, em metro quadrado, do triângulo DEF, é igual à metade da área, em metro quadrado, 
                do triângulo ABC.
                
                IV – Os triângulos ADF e DBE têm a mesma área.
                
                V – A área do triângulo DEF, em função de a, em metro quadrado, é igual a a√3/16

                Destas, podemos afirmar que:
                `,
                opcao1: `todas as afirmações são verdadeiras.`,
                opcao2: `apenas a afirmação I é verdadeira.`,
                opcao3: `apenas as afirmações I e II são falsas.`,
                opcao4: `apenas as afirmaçôes I e IV são verdadeiras`,
                opcao5: `apenas as afirmações I, IV e V são verdadeiras.`,
                respostaCorreta: 'D',
                disciplinaId: matematica.id,
                categoriaId: geometriaPlana.id,
                provaId: prova12018.id,
                ordem:23,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova6-24.png"
            });

            const questao25_12018 = await Questao.create({
                enunciado: `
                Dois amigos, Cacá e Juju, compraram um pacote fechado com várias unidades de balas. 
                Cacá retirou do pacote 4/7 destas balas. Do total que restou no pacote, Juju retirou 8/9 e ainda 
                sobraram exatamente seis balas no pacote. Quantas balas haviam no pacote fechado?
                `,
                opcao1: `50 balas`,
                opcao2: `80 balas`,
                opcao3: `126 balas`,
                opcao4: `172 balas`,
                opcao5: `178 balas`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: proporcoes.id,
                provaId: prova12018.id,
                ordem:24,
            });

            const questao26_12018 = await Questao.create({
                enunciado: `
                Uma função f : R → R dada por f(x) = x² – 3x – 4. Qual a distância, no plano cartesiano, do 
                ponto sobre o gráfico de f de abcissa 0 (zero) para o ponto de abcissa 4?
                `,
                opcao1: `1`,
                opcao2: `3v5`,
                opcao3: `√41`,
                opcao4: `7`,
                opcao5: `4√2`,
                respostaCorreta: 'E',
                disciplinaId: matematica.id,
                categoriaId: funcoesOtimizacoes.id,
                provaId: prova12018.id,
                ordem:25,
            });

            const questao27_12018 = await Questao.create({
                enunciado: `
                Uma função f : R → R dada por f(x) = x² – 3x – 4. Qual a distância, no plano cartesiano, do 
                ponto sobre o gráfico de f de abcissa 0 (zero) para o ponto de abcissa 4?
                `,
                opcao1: `28 cm`,
                opcao2: `21 + 4√17 cm`,
                opcao3: `7 + 6√31 cm`,
                opcao4: `8,5 + 7√17 cm`,
                opcao5: `40 cm`,
                respostaCorreta: 'E',
                disciplinaId: matematica.id,
                categoriaId: geometriaAnalitica.id,
                provaId: prova12018.id,
                ordem:26,
            });

            const questao28_12018 = await Questao.create({
                enunciado: `
                Quantos números inteiros existem entre x e y, sendo
                (4-x/3x-2) -1 = 5/4-6x e √2(y - √35) -3 = -y?
                `,
                opcao1: `2`,
                opcao2: `3`,
                opcao3: `6`,
                opcao4: `9`,
                opcao5: `12`,
                respostaCorreta: 'A',
                disciplinaId: matematica.id,
                categoriaId: equacoesInequacoes.id,
                provaId: prova12018.id,
                ordem:27,
            });

            const questao29_12018 = await Questao.create({
                enunciado: `
                O gráfico de setores abaixo apresenta os dados de uma entrevista realizada com 480 pessoas 
                sobre a preferência de curso técnico. As medidas dos ângulos centrais respectivos aos setores 
                estão destacadas na figura. Qual a quantidade de entrevistados prefere o curso de Técnico em 
                Mecânica, sendo que cada pessoa optou por apenas um curso?
                `,
                opcao1: `88 entrevistados`,
                opcao2: `96 entrevistados`,
                opcao3: `112 entrevistados`,
                opcao4: `136 entrevistados`,
                opcao5: `140 entrevistados`,
                respostaCorreta: 'B',
                disciplinaId: matematica.id,
                categoriaId: estatistica.id,
                provaId: prova12018.id,
                ordem:28,
            });

            const questao32_12018 = await Questao.create({
                enunciado: `
                Um automóvel de massa 1000 kg, movendo-se em linha reta com velocidade 20 m/s, é 
                desacelerado uniformemente e para após percorrer 50 m. Qual o valor da força de atrito entre a 
                pista e os pneus durante a desaceleração (Considere g=10m/s2)?
                `,
                opcao1: `1.000 N`,
                opcao2: `2.000 N`,
                opcao3: `4.000 N`,
                opcao4: `12.000 N`,
                opcao5: `10.000 N`,
                respostaCorreta: 'C',
                disciplinaId: ciencia.id,
                categoriaId: mecanica.id,
                provaId: prova12018.id,
                ordem:29,
            });

            const questao33_12018 = await Questao.create({
                enunciado: `
                A respeito dos fenômenos térmicos, analise as afirmações a seguir.

                 I – Um carro fechado estacionado na rua exposto à radiação solar tem sua temperatura aumentada 
                ao absorver a energia radiante. A energia que atinge o teto do carro penetra nele através do 
                fenômeno de irradiação térmica.
                
                II – Calor é a transferência de energia térmica entre corpos com temperaturas diferentes. 
                
                III – O conceito de calor está relacionado com a sensação térmica, ou seja, um dia em que a 
                temperatura ambiente está em torno de 40º C, há um alto índice de calor.
                
                IV – Condução, Convecção e Irradiação Térmicas são formas de propagação do calor.
                
                V – As paredes internas de uma garrafa térmica são espelhadas com o objetivo de reduzir as 
                trocas de calor por condução.
                
                Assinale a opção que apresenta todas as afirmativas corretas:
                `,
                opcao1: `II`,
                opcao2: `II e IV`,
                opcao3: `II, III e IV`,
                opcao4: `II, III, IV e V`,
                opcao5: `I, II, III, IV e V`,
                respostaCorreta: 'B',
                disciplinaId: ciencia.id,
                categoriaId: termodinamica.id,
                provaId: prova12018.id,
                ordem:30,
            });

            const questao34_12018 = await Questao.create({
                enunciado: `
                A respeito dos elementos químicos e sua classificação periódica, analise as sentenças abaixo.
                
                I – Os elementos de transição são os elementos da série dos lantanídios e actinídios e se localizam 
                na parte de baixo da tabela, enquanto os elementos de transição interna são os elementos do 
                grupo 3 ao 12, que se localizam no meio da tabela.
                
                II – Os átomos de um mesmo período apresentam o mesmo número de camadas eletrônicas. Os 
                elementos nas famílias, ou grupos, possuem propriedades semelhantes.
                
                III – Os metais do grupo 1 são os metais alcalinos. Os metais alcalinos são os que reagem mais 
                facilmente com a água, produzindo gás hidrogênio e base, com liberação de energia.
                
                IV – Os não metais, ou ametais, têm a propriedade de serem bons condutores de eletricidade, 
                não são tão maleáveis quanto os metais e possuem baixos pontos de fusão comparados aos dos 
                metais.
                
                V – Os elementos do grupo 18 são chamados de gases nobres e todos eles têm 8 elétrons na 
                última camada.
                
                Estão CORRETAS as sentenças:
                `,
                opcao1: `II e III;`,
                opcao2: `I, II e V;`,
                opcao3: `I, III e V;`,
                opcao4: `II, III e IV;`,
                opcao5: `I e II.`,
                respostaCorreta: 'A',
                disciplinaId: ciencia.id,
                categoriaId: tabelaPeriodica.id,
                provaId: prova12018.id,
                ordem:31,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova6-34.png"
            });

            const questao35_12018 = await Questao.create({
                enunciado: `
                Assinale a alternativa que contenha apenas espécies com mesmo número de elétrons.
                `,
                opcao1: `Cl-, S, Cu²+`,
                opcao2: `Ca²+, Cu²+, Fe²+`,
                opcao3: `F-, Al³+, Ne`,
                opcao4: `Na+, Li+, H+`,
                opcao5: `Cl-, Br-, I-`,
                respostaCorreta: 'C',
                disciplinaId: ciencia.id,
                categoriaId: tabelaPeriodica.id,
                provaId: prova12018.id,
                ordem:32,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova6-34.png"
            });

            const questao37_12018 = await Questao.create({
                enunciado: `
                A lesma-do-mar Elysia chlorotica se parece com uma folha por causa da intensa cor verde 
                e do formato característico. Ao investigar como esse molusco consegue viver por até nove meses 
                “alimentando-se” só de luz solar, cientistas descobriram que as características comuns entre 
                a lesma e as plantas não se limitam à aparência folhosa: seu DNA contém um gene da alga 
                Vaucheria litorea que permite que o animal faça fotossíntese. Já se sabia que a lesma era capaz 
                de “roubar” dessas algas — de quem se alimenta — uma organela presente em suas células 
                responsável pela fotossíntese. Essa organela vai parar dentro das células digestivas do molusco 
                e continua fazendo fotossíntese, processo que gera carboidratos e lipídios que nutrem a lesma.

                A organela referida no texto é:
                `,
                opcao1: `uma mitocôndria, organela com pigmentação verde devido à presença da clorofila.`,
                opcao2: `um lisossomo, organela que armazena diversos pigmentos, incluindo a clorofila.`,
                opcao3: `um ribossomo, organela que produz a clorofila.`,
                opcao4: `um cloroplasto, organela que originalmente é encontrada em vegetais e algas.`,
                opcao5: `um núcleo, organela que apresenta material genético.`,
                respostaCorreta: 'D',
                disciplinaId: ciencia.id,
                categoriaId: botanica.id,
                provaId: prova12018.id,
                ordem:33,
            });

            const questao38_12018 = await Questao.create({
                enunciado: `
                Vários Estados brasileiros têm registrado surtos de caxumba especialmente entre 
                adolescentes e adultos jovens na faixa etária que vai dos 15 aos 30 anos. Segundo Renato Lopes, 
                chefe da Divisão de Vigilância de Doenças Transmissíveis da Sesa do Paraná, a caxumba passou 
                a acometer uma população que ou não recebeu a vacina ou recebeu uma dose apenas. Quem 
                tem de 1 a 29 anos deve receber duas doses da vacina tríplice viral, contra sarampo, caxumba e 
                rubéola. A partir dos 30 anos até os 49, é necessária apenas uma dose. Grávidas não podem ser 
                imunizadas.

                Sobre caxumba e vacinação como medida preventiva, assinale a alternativa correta:
                `,
                opcao1: `Quando a pessoa é diagnosticada com caxumba, o melhor tratamento é feito com a 
                        administração de antibióticos.`,
                opcao2: `A administração correta da tríplice viral é uma medida eficiente para evitar sarampo, mas não 
                        é eficaz contra caxumba e rubéola.`,
                opcao3: `Os principais sintomas da caxumba são lesões avermelhadas na pele e coceira pelo corpo.`,
                opcao4: `A tríplice viral deve ser evitada por gestantes por ser uma vacina feita com microrganismos 
                        atenuados.`,
                opcao5: `A caxumba é transmitida pelo mosquito Aedes aegypti e, portanto, uma medida eficiente para 
                        evitar o surto da doença é o combate ao mosquito.`,
                respostaCorreta: 'D',
                disciplinaId: ciencia.id,
                categoriaId: saudeEpidemiologia.id,
                provaId: prova12018.id,
                ordem:34,
            });

            const questao39_12018 = await Questao.create({
                enunciado: `
                Observe a tirinha abaixo.

                Mandioca, aipim ou macaxeira são nomes populares para a planta Manihot esculenta descrita 
                para a ciência por Crantz, em 1766. Sobre as plantas, marque a alternativa correta.
                `,
                opcao1: `O nome científico das plantas deve ser escrito em inglês pois, atualmente, esta é a língua 
                        universal utilizada pela comunidade científica.`,
                opcao2: `A parte da mandioca mais utilizada para a alimentação humana é um tipo de caule, semelhante 
                        ao tubérculo da batata.`,
                opcao3: `As folhas da mandioca são os órgãos da planta responsáveis pela fotossíntese.`,
                opcao4: `Os nomes populares da Manihot esculenta representam várias espécies de planta, embora 
                        apresentem o mesmo nome científico.`,
                opcao5: `As raízes tuberosas da mandioca atuam como órgãos especiais de reserva de proteínas para 
                        a planta.`,
                respostaCorreta: 'C',
                disciplinaId: ciencia.id,
                categoriaId: botanica.id,
                provaId: prova12018.id,
                ordem:35,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova6-39.png"
            });

            const questao40_12018 = await Questao.create({
                enunciado: `
                A leishmaniose é uma doença não contagiosa causada pelo parasita pertencente ao gênero 
                Leishmania e transmitida pelo mosquito-palha Lutzomyia longipalpis. O principal reservatório 
                do parasita é o cachorro e, por isso, inúmeros cães são sacrificados no Brasil. Em 2017, Ibatiba, 
                município do sul do Estado do Espírito Santo, decretou situação de emergência em razão de 
                surto da doença infecciosa após a confirmação de diversos casos em uma pequena comunidade 
                e também devido à indicação de infestação do mosquito vetor na cidade. 

                Com base no texto acima, analise as proposições abaixo e marque a alternativa correta. 
                `,
                opcao1: `Entre as possíveis soluções para controlar o surto da leishmaniose estão o sacrifício de cães 
                        portadores da doença e uso de carros fumacê, inseticidas e repelentes para matar ou evitar a 
                        proliferação do mosquito vetor.`,
                opcao2: `A doença pode ser prevenida evitando alimentos cozidos e com práticas de higiene básicas, 
                        incluindo lavar as mãos antes de comer e depois de ir ao banheiro. `,
                opcao3: `O parasita Leishmania pertence ao filo Platyhelminthes caracterizado principalmente pelo 
                        corpo achatado dorsoventralmente.`,
                opcao4: `O mosquito-palha infectado com Leishmania transmite o parasita a humanos e cachorros 
                        através das suas fezes.`,
                opcao5: `Apenas os machos do mosquito-palha são capazes de transmitir a leishmaniose devido a seu 
                        hábito hematófago.`,
                respostaCorreta: 'A',
                disciplinaId: ciencia.id,
                categoriaId: parasitologia.id,
                provaId: prova12018.id,
                ordem:36,
            });

            const questao41_12018 = await Questao.create({
                enunciado: `
                Leia o seguinte fragmento de texto:

                O “ministério da Revolução” - como foi chamado por Lindolfo Collor, o primeiro 
                titular da pasta - surgiu para concretizar o projeto do novo regime de interferir 
                sistematicamente no conflito entre capital e trabalho. Até então, no Brasil, as questões 
                relativas ao mundo do trabalho eram tratadas pelo Ministério da Agricultura, sendo 
                na realidade praticamente ignoradas pelo governo.

                Podemos relacioná-lo
                `,
                opcao1: `ao Ministério da Guerra do Brasil, criado em 1815, proporcionando aos brasileiros maior 
                        autonomia com relação a Portugal, estabelecendo as bases das Forças Armadas que golpearam 
                        a Monarquia em 1889;`,
                opcao2: `à criação do Ministério do Trabalho, Indústria e Comércio, em 26 de novembro de 1930 por 
                        Getúlio Vargas, como parte de sua reforma trabalhista que também instituiria outras medidas de 
                        proteção ao trabalhador;`,
                opcao3: `ao Ministerio da Reforma Agrária ou do Desenvolvimento Agrário (MDA), criado em 1999 
                        para a distribuição de terras, o que provocou um retorno sistemático ao campo e a consequente 
                        diminuição da violência urbana;`,
                opcao4: `à reforma realizada por Castello Branco em 1966, que concebeu o FGTS como opção à 
                        estabilidade de emprego, com o objetivo de facilitar a demissão de trabalhadores e financiar a 
                        construção de imóveis no país;`,
                opcao5: `à Reforma Politica de 2016, que teve no financiamento de campanha um dos seus pontos mais 
                        polêmicos, pois o financiamento de campanha permite aos detentores de capital o comando do 
                        processo politico nacional.`,
                respostaCorreta: 'B',
                disciplinaId: historia.id,
                categoriaId: historiaBrasil.id,
                provaId: prova12018.id,
                ordem:37,
            });

            const questao42_12018 = await Questao.create({
                enunciado: `
                Na história da humanidade, vários são os símbolos que nos remetem a movimentos históricos 
                ligados à política. Neste caso, a imagem abaixo resulta da busca, pelos regimes totalitários 
                dos anos 1920, 1930 e 1940 do século XX, de uma tradição romana antiga, que defendia a 
                união de todos e a via de pensamento único – naquele 
                caso, o esplendor da cidade de Roma – a direção a ser 
                seguida. Em nossa contemporaneidade, este símbolo 
                volta a se manifestar no discurso nacionalista de alguns 
                grupos políticos, inclusive no Brasil. Observe a imagem 
                e indique qual o discurso histórico-político que dela se 
                apropria:
                `,
                opcao1: `nazismo;`,
                opcao2: `arianismo;`,
                opcao3: `anarquia;`,
                opcao4: `fascismo;`,
                opcao5: `integralismo.`,
                respostaCorreta: 'D',
                disciplinaId: historia.id,
                categoriaId: historiaPolitica.id,
                provaId: prova12018.id,
                ordem:38,
            });

            const questao43_12018 = await Questao.create({
                enunciado: `
                Leia o excerto de texto abaixo 

                Rio de Janeiro, 15 de novembro de 1889.

                Eu quisera poder dar a esta data a denominação seguinte: 15 de Novembro, primeiro 
                ano de República; mas não posso infelizmente fazê-lo. O que se fez é um degrau, 
                talvez nem tanto, para o advento da grande era.

                Em todo o caso, o que está feito, pode ser muito, se os homens que vão tomar a 
                responsabilidade do poder tiverem juízo, patriotismo e sincero amor à liberdade.

                Como trabalho de saneamento, a obra é edificante. Por ora, a cor do Governo é 
                puramente militar, e deverá ser assim. O fato foi deles, deles só, porque a colaboração 
                do elemento civil foi quase nula.

                O povo assistiu àquilo bestializado, atônito, surpreso, sem conhecer o que significava.

                Muitos acreditaram seriamente estar vendo uma parada.

                Era um fenômeno digno de ver-se.

                O entusiasmo veio depois, veio mesmo lentamente, quebrando o enleio dos espíritos.

                Pude ver a sangue-frio tudo aquilo.

                Sobre a Proclamação da República no Brasil, é correto afirmar que:
                `,
                opcao1: `O apoio popular foi decisivo para que o poder imperial fosse extirpado da política brasileira, 
                        tanto que nessa época as greves portuárias já alavancavam o Brasil rumo a um novo regime.`,
                opcao2: `As forças militares mostraram sua deliberação em compor o quadro político brasileiro, 
                        determinando os dois primeiros presidentes do país: Deodoro da Fonseca e Floriano Peixoto.`,
                opcao3: `O ideário republicano brasileiro baseou-se na filosofia positivista e fascista, pois assim que 
                        proclamada, a República direcionou-se ao totalitarismo.`,
                opcao4: `O Império já dava sinais de fraqueza desde a abdicação de D. Pedro I, em 1831, e por isso, 
                        havia o desejo de se implementar um novo regime, menos democrático e mais centralizador.`,
                opcao5: `O centralismo monárquico jamais enfraqueceu-se diante das críticas a ele direcionadas por 
                        intelectuais, políticos e artistas, o que nos leva à conclusão de que a monarquia terminou por 
                        opção dos próprios monarquistas.`,
                respostaCorreta: 'B',
                disciplinaId: historia.id,
                categoriaId: historiaBrasil.id,
                provaId: prova12018.id,
                ordem:39,
            });

            const questao47_12018 = await Questao.create({
                enunciado: `
                Observe o cartograma abaixo.
                `,
                opcao1: `O morador da localidade B possui as horas adiantadas com relação ao morador da localidade F.`,
                opcao2: `Na localidade A as médias térmicas são mais elevadas do que na localidade G.`,
                opcao3: `Os moradores das localidades H e I estão na mesma longitude, porém em latitudes diferentes.`,
                opcao4: `Os locais A e C estão na mesma latitude, porém em longitudes diferentes.`,
                opcao5: `O local D está na zona Intertropical, já o H está na Zona Temperada do Norte.`,
                respostaCorreta: 'D',
                disciplinaId: geografia.id,
                categoriaId: cartografia.id,
                provaId: prova12018.id,
                ordem:40,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova6-47.png"
            });

            const questao48_12018 = await Questao.create({
                enunciado: `
                Observe as charges abaixo.

                Sobre o processo de globalização, assinale a afirmativa correta.
                `,
                opcao1: `A globalização gerou aumento do consumo e produção de riqueza em todos os países, nas 
                        diferentes classes sociais.`,
                opcao2: `As transnacionais de países emergentes superaram as tradicionais empresas das nações 
                        centrais em todos os ramos industriais.`,
                opcao3: `Pessoas de diferentes países tiveram o mesmo acesso às tecnologias de vanguarda e, hoje, 
                        desfrutam dos benefícios da inclusão tecnológica.`,
                opcao4: `O processo de globalização não acarretou uma distribuição homogênea das riquezas produzidas 
                        nos diferentes países do globo.`,
                opcao5: `O processo de globalização fortaleceu os sindicatos, aumentou o consumo e, consequentemente, 
                        o número de postos de trabalhos nos países pobres.`,
                respostaCorreta: 'D',
                disciplinaId: geografia.id,
                categoriaId: globalizacao.id,
                provaId: prova12018.id,
                ordem:41,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova6-48.png"
            });

            const questao49_12018 = await Questao.create({
                enunciado: `
                Leia o fragmento e texto a seguir.

                BRICS – Brasil, Rússia, Índia, China e África do Sul

                O que faz o BRICS?
                
                Desde a sua criação, o BRICS tem expandido suas atividades em duas principais vertentes: (i) 
                a coordenação em reuniões e organismos internacionais; e (ii) a construção de uma agenda de 
                cooperação multissetorial entre seus membros…

                Entre as vertentes mais promissoras do BRICS, destaca-se a área econômico-financeira, tendo 
                sido assinados dois instrumentos de especial relevo na VI Cúpula do BRICS (Fortaleza, julho 
                de 2014): os acordos constitutivos do Novo Banco de Desenvolvimento (NBD) – voltado para 
                o financiamento de projetos de infraestrutura e desenvolvimento sustentável em economias 
                emergentes e países em desenvolvimento –, e do Arranjo Contingente de Reservas (ACR) – 
                destinado a prover apoio mútuo aos membros do BRICS em cenários de flutuações no balanço 
                de pagamentos.

                Sobre o BRICS, assinale a opção correta.
                `,
                opcao1: `O Brasil é a maior economia, possui a menor desigualdade social e é o maior exportador de 
                        alimentos do grupo.`,
                opcao2: `O BRICS é uma união política, liderado pela China, que não possui interesse em assuntos 
                        econômicos.`,
                opcao3: `O BRICS é formado por países emergentes, com grande potencial econômico e grandes 
                        populações absolutas.`,
                opcao4: `Todos os membros possuem economias liberais, similaridades culturais, e baixas densidades 
                        demográficas.`,
                opcao5: `O maior limitador para o crescimento econômico do BRICS é o fraco mercado consumidor e 
                        o elevado custo na produção industrial.`,
                respostaCorreta: 'C',
                disciplinaId: geografia.id,
                categoriaId: geopolitica.id,
                provaId: prova12018.id,
                ordem:42,
            });

            const questao50_12018 = await Questao.create({
                enunciado: `
                Com base na análise das pirâmides etárias, assinale a opção correta
                `,
                opcao1: `Em 2050, a maior parte da população brasileira será jovem.`,
                opcao2: `Em 2050, o Brasil será um país desenvolvido.`,
                opcao3: `EM 1980, predominava a população idosa.`,
                opcao4: `Em 2010, a maior parte da população era adulta.`,
                opcao5: `Em 1980, a natalidade era menor que em 2010.`,
                respostaCorreta: 'C',
                disciplinaId: geografia.id,
                categoriaId: piramidesEtarias.id,
                provaId: prova12018.id,
                ordem:43,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova6-50.png"
            });

            const questao1_42017 = await Questao.create({
                enunciado: `
                Leia o texto para responder a questão

                TEXTO 01
                Não leia essa notícia ao volante 
                  Campanha contra uso de celular ao volante faz sucesso nos EUA 
                Um emoji gigantesco foi construído a partir de peças de um carro destruído e está exposto no 
                centro de Miami, nos Estados Unidos

                Um uso bastante criativo dos emojis (aqueles ícones do computador e do celular que 
                expressam sentimentos, climas, etc.) foi espalhado pelo centro de Miami, nos Estados 
                Unidos. Para alertar sobre os perigos de dirigir teclando ao celular, a agência de publicidade 
                Alma criou uma enorme peça feita de materiais restantes de um carro batido. [...] A campanha 
                se chama "The Last Emoji" ("O último emoji"), e chama bastante a atenção. Além da peça, a 
                ação convida os passantes a compatilharem fotos da imagem em redes sociais com a legenda 
                "Don’t text and drive" (Não digite e dirija) e a hashtag #SprintDriveSafe.

                O comando que antecede o título do texto 01 
                `,
                opcao1: `indica a origem estrangeira da notícia.`,
                opcao2: `desestimula a sua leitura.`,
                opcao3: `restringe a ocasião de ler.`,
                opcao4: `apresenta argumento.`,
                opcao5: `aponta justificativa.`,
                respostaCorreta: 'C',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova42017.id,
                ordem:1,
            });

            const questao2_42017 = await Questao.create({
                enunciado: `
                Leia o texto para responder a questão

                TEXTO 01
                Não leia essa notícia ao volante 
                  Campanha contra uso de celular ao volante faz sucesso nos EUA 
                Um emoji gigantesco foi construído a partir de peças de um carro destruído e está exposto no 
                centro de Miami, nos Estados Unidos

                Um uso bastante criativo dos emojis (aqueles ícones do computador e do celular que 
                expressam sentimentos, climas, etc.) foi espalhado pelo centro de Miami, nos Estados 
                Unidos. Para alertar sobre os perigos de dirigir teclando ao celular, a agência de publicidade 
                Alma criou uma enorme peça feita de materiais restantes de um carro batido. [...] A campanha 
                se chama "The Last Emoji" ("O último emoji"), e chama bastante a atenção. Além da peça, a 
                ação convida os passantes a compatilharem fotos da imagem em redes sociais com a legenda 
                "Don’t text and drive" (Não digite e dirija) e a hashtag #SprintDriveSafe.

                Sobre o emprego de palavras em língua inglesa no texto 01, é correto afirmar que elas
                `,
                opcao1: `não se justificam.`,
                opcao2: `estão contextualizadas.`,
                opcao3: `restringe a ocasião de ler.`,
                opcao4: `prejudicam a compreensão do texto.`,
                opcao5: `não contribuem para a coerência do texto.`,
                respostaCorreta: 'B',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova42017.id,
                ordem:2,
            });

            const questao3_42017 = await Questao.create({
                enunciado: `
                Leia o texto para responder a questão

                TEXTO 01
                Não leia essa notícia ao volante 
                  Campanha contra uso de celular ao volante faz sucesso nos EUA 
                Um emoji gigantesco foi construído a partir de peças de um carro destruído e está exposto no 
                centro de Miami, nos Estados Unidos

                Um uso bastante criativo dos emojis (aqueles ícones do computador e do celular que 
                expressam sentimentos, climas, etc.) foi espalhado pelo centro de Miami, nos Estados 
                Unidos. Para alertar sobre os perigos de dirigir teclando ao celular, a agência de publicidade 
                Alma criou uma enorme peça feita de materiais restantes de um carro batido. [...] A campanha 
                se chama "The Last Emoji" ("O último emoji"), e chama bastante a atenção. Além da peça, a 
                ação convida os passantes a compatilharem fotos da imagem em redes sociais com a legenda 
                "Don’t text and drive" (Não digite e dirija) e a hashtag #SprintDriveSafe.

                A explicação sobre o que são emojis aparece entre parênteses (linhas 01 e 02). Nesse sentido, 
                também seria correto, em lugar dos parênteses, empregar 
                `,
                opcao1: `dois-pontos.`,
                opcao2: `reticências.`,
                opcao3: `apóstrofos.`,
                opcao4: `vírgulas. `,
                opcao5: `aspas. `,
                respostaCorreta: 'D',
                disciplinaId: portugues.id,
                categoriaId: pontuacaoEstruturacaoFrases.id,
                provaId: prova42017.id,
                ordem:3,
            });

            const questao4_42017 = await Questao.create({
                enunciado: `
                Leia o texto para responder a questão

                TEXTO 02
                Vivo critica uso excessivo de celular em nova campanha 
                  Operadora promove discussão sobre conexão consciente  
                [...] Uma nova campanha, que convida os brasileiros à discussão sobre o assunto, foi criada 
                por nada menos que uma marca com um negócio ligado diretamente a celulares: a Vivo. A 
                iniciativa #UsarBemPegaBem chama atenção para atitudes que se tornaram naturais na era 
                digital, como digitar e dirigir ao mesmo tempo, ler conteúdos no celular sem olhar por onde 
                passa e checar as redes sociais o tempo todo sem dar atenção a quem está ao lado. [...] 

                O texto 02 mostra uma iniciativa que não é comum: uma empresa do ramo das 
                telecomunicações criticar o uso excessivo de celulares. Assim sendo, indique a alternativa que 
                contém estruturas linguísticas do texto que confirmam essa quebra de expectativa.
                `,
                opcao1: `uma nova campanha (linha 01) `,
                opcao2: `nada menos que (linha 02) `,
                opcao3: `a iniciativa (linhas 02 e 03) `,
                opcao4: `na era digital (linhas 03 e 04) `,
                opcao5: `sem dar atenção (linha 05) `,
                respostaCorreta: 'B',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova42017.id,
                ordem:4,
            });

            const questao5_42017 = await Questao.create({
                enunciado: `
                Leia o texto para responder a questão

                TEXTO 02
                Vivo critica uso excessivo de celular em nova campanha 
                  Operadora promove discussão sobre conexão consciente  
                [...] Uma nova campanha, que convida os brasileiros à discussão sobre o assunto, foi criada 
                por nada menos que uma marca com um negócio ligado diretamente a celulares: a Vivo. A 
                iniciativa #UsarBemPegaBem chama atenção para atitudes que se tornaram naturais na era 
                digital, como digitar e dirigir ao mesmo tempo, ler conteúdos no celular sem olhar por onde 
                passa e checar as redes sociais o tempo todo sem dar atenção a quem está ao lado. [...] 

                Em #UsarBemPegaBem, linha 03, pegar bem é empregado em sentido conotativo/figurado. 
                Em qual das ocorrências a seguir, pegar bem tem o mesmo sentido em que aparece no texto?
                `,
                opcao1: `A sua reação não pegou bem durante o almoço.  `,
                opcao2: `As mudas de banana pegaram bem com a chuva. `,
                opcao3: `Dizem que eles pegaram bem no pé do novo aluno.`,
                opcao4: `A bola pegou bem na cabeça do técnico durante o jogo.`,
                opcao5: `Juliano ficou com várias garotas na festa ontem. Pegou bem!`,
                respostaCorreta: 'A',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova42017.id,
                ordem:5,
            });

            const questao6_42017 = await Questao.create({
                enunciado: `
                Leia o texto para responder a questão

                TEXTO 03
                Restaurante dá desconto de 50% para cliente que desligar o celular
                  Empresário de Jerusalém diz que a tecnologia dos smartphones ameaça a culinária e lança 
                        proposta de veto do aparelho na hora das refeições  
                O dono de um restaurante em uma aldeia árabe fora de Jerusalém chamou a atenção ao 
                anunciar que está em uma missão para salvar a cultura culinária. Ele lançou uma promoção: 
                desligue o seu celular e ganhe um desconto de 50% nos preços das refeições. Jawdat Ibrahim 
                diz que os smartphones estão acabando com a experiência de saborear um jantar. Ele espera 
                que o desconto trará de volta uma época mais inocente, quando se podia ir a um restaurante 
                em busca do prazer de uma boa conversa, acompanhada de uma boa comida, sem 
                interrupções provocadas por telefonemas, mensagens de texto e conversas paralelas nas 
                mesas ao redor. 

                Indique a alternativa em que o trecho “Ele espera que o desconto trará de volta uma época 
                mais inocente [...]”, linhas 04 e 05, está adequadamente reescrito. 
                `,
                opcao1: `Ele esperava que o desconto trazia de volta uma época mais inocente.`,
                opcao2: `Ele esperaria que o desconto traga de volta uma época mais inocente.`,
                opcao3: `Ele esperou que o desconto trazia de volta uma época mais inocente.`,
                opcao4: `Ele esperará que o desconto trará de volta uma época mais inocente.`,
                opcao5: `Ele espera que o desconto traga de volta uma época mais inocente.`,
                respostaCorreta: 'E',
                disciplinaId: portugues.id,
                categoriaId: pontuacaoEstruturacaoFrases.id,
                provaId: prova42017.id,
                ordem:6,
            });

            const questao7_42017 = await Questao.create({
                enunciado: `
                Leia o texto para responder a questão

                TEXTO 03
                Restaurante dá desconto de 50% para cliente que desligar o celular
                  Empresário de Jerusalém diz que a tecnologia dos smartphones ameaça a culinária e lança 
                        proposta de veto do aparelho na hora das refeições  
                O dono de um restaurante em uma aldeia árabe fora de Jerusalém chamou a atenção ao 
                anunciar que está em uma missão para salvar a cultura culinária. Ele lançou uma promoção: 
                desligue o seu celular e ganhe um desconto de 50% nos preços das refeições. Jawdat Ibrahim 
                diz que os smartphones estão acabando com a experiência de saborear um jantar. Ele espera 
                que o desconto trará de volta uma época mais inocente, quando se podia ir a um restaurante 
                em busca do prazer de uma boa conversa, acompanhada de uma boa comida, sem 
                interrupções provocadas por telefonemas, mensagens de texto e conversas paralelas nas 
                mesas ao redor. 

                Em “Ele espera que o desconto trará de volta uma época mais inocente, quando se podia ir a 
                um restaurante em busca do prazer de uma boa conversa [...]”, linhas 04, 05 e 06, a forma quando 
                pode ser corretamente substituída por`,
                opcao1: `em que.`,
                opcao2: `a que.`,
                opcao3: `onde.`,
                opcao4: `aonde.`,
                opcao5: `de que.`,
                respostaCorreta: 'A',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTextoGramatica.id,
                provaId: prova42017.id,
                ordem:7,
            });

            const questao8_42017 = await Questao.create({
                enunciado: `
                Leia o texto para responder a questão

                TEXTO 04
                
                Campanha contra uso de celular ao volante é lançada na Câmara 

                A campanha “Pare de Dirigir Teclando”, uma ação que envolve clubes de motociclistas do 
                Distrito Federal entre outras entidades, foi lançada na Câmara dos Deputados, durante 
                reunião da Frente Parlamentar em Defesa dos Motociclistas. A ideia é fazer um alerta para a 
                redução de acidentes de trânsito no país provocados pela distração. 

                Na ocasião, foi homenageado o servidor público Antonio Eduardo da Silva Mendes, 52 anos, 
                que morreu no dia 22 de abril, depois de ser atingido por um veículo no Setor Sudeste, em 
                Brasília. Pessoas que estavam presentes no local do acidente afirmaram que o motorista 
                responsável pelo acidente dirigia enquanto digitava no celular. [...] 

                No trecho “Pessoas que estavam presentes no local do acidente afirmaram que o motorista 
                responsável pelo acidente dirigia enquanto digitava no celular.”, linhas 07 e 08, a relação 
                estabelecida pelo emprego de enquanto é de`,
                opcao1: `condição.`,
                opcao2: `oposição.`,
                opcao3: `alternância.`,
                opcao4: `conformidade.`,
                opcao5: `simultaneidade.`,
                respostaCorreta: 'E',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova42017.id,
                ordem:8,
            });

            const questao9_42017 = await Questao.create({
                enunciado: `
                Leia o texto para responder a questão

                TEXTO 04
                
                Campanha contra uso de celular ao volante é lançada na Câmara 

                A campanha “Pare de Dirigir Teclando”, uma ação que envolve clubes de motociclistas do 
                Distrito Federal entre outras entidades, foi lançada na Câmara dos Deputados, durante 
                reunião da Frente Parlamentar em Defesa dos Motociclistas. A ideia é fazer um alerta para a 
                redução de acidentes de trânsito no país provocados pela distração. 

                Na ocasião, foi homenageado o servidor público Antonio Eduardo da Silva Mendes, 52 anos, 
                que morreu no dia 22 de abril, depois de ser atingido por um veículo no Setor Sudeste, em 
                Brasília. Pessoas que estavam presentes no local do acidente afirmaram que o motorista 
                responsável pelo acidente dirigia enquanto digitava no celular. [...] 

                O fragmento “[...] que estavam presentes no local do acidente [...]”, linha 07, é introduzido por 
                _____________________ e estabelece ___________________. Marque a opção que completa 
                corretamente os espaços.`,
                opcao1: `conjunção integrante / retomada.`,
                opcao2: `pronome relativo / explicação.`,
                opcao3: `preposição / explicação.`,
                opcao4: `pronome relativo / restrição.`,
                opcao5: `conjunção integrante / especificação.`,
                respostaCorreta: 'D',
                disciplinaId: portugues.id,
                categoriaId: analiseSintatica.id,
                provaId: prova42017.id,
                ordem:9,
            });

            const questao10_42017 = await Questao.create({
                enunciado: `
                Leia o texto para responder a questão

                TEXTO 04
                
                Campanha contra uso de celular ao volante é lançada na Câmara 

                A campanha “Pare de Dirigir Teclando”, uma ação que envolve clubes de motociclistas do 
                Distrito Federal entre outras entidades, foi lançada na Câmara dos Deputados, durante 
                reunião da Frente Parlamentar em Defesa dos Motociclistas. A ideia é fazer um alerta para a 
                redução de acidentes de trânsito no país provocados pela distração. 

                Na ocasião, foi homenageado o servidor público Antonio Eduardo da Silva Mendes, 52 anos, 
                que morreu no dia 22 de abril, depois de ser atingido por um veículo no Setor Sudeste, em 
                Brasília. Pessoas que estavam presentes no local do acidente afirmaram que o motorista 
                responsável pelo acidente dirigia enquanto digitava no celular. [...] 

                Assinale a única opção que NÃO contém passagem do texto que expressa noção de tempo.`,
                opcao1: `“[...] durante reunião da Frente Parlamentar em Defesa dos Motociclistas.”, linhas 02 e 03.`,
                opcao2: `“[...] depois de ser atingido por um veículo [...]”, linha 06.`,
                opcao3: `“[...] foi lançada na Câmara dos Deputados [...]”, linha 02.`,
                opcao4: `“[...] enquanto digitava no celular.”, linha 08.`,
                opcao5: `“[...] no dia 22 de abril [...]”, linha 06.`,
                respostaCorreta: 'C',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova42017.id,
                ordem:10,
            });

            const questao11_42017 = await Questao.create({
                enunciado: `
                A leitura dos textos 01, 02, 03 e 04 possibilita o entendimento de que`,
                opcao1: `o setor público não é o único que se preocupa com o uso exacerbado de telefones celulares.`,
                opcao2: `o governo brasileiro plagiou a iniciativa americana.`,
                opcao3: `as motivações para a diminuição do uso de celulares são as mesmas.`,
                opcao4: `os resultados alcançados pelas campanhas americana e brasileira são similares.`,
                opcao5: `o cidadão comum está indiferente com relação ao uso de celulares em espaços públicos.`,
                respostaCorreta: 'A',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova42017.id,
                ordem:11,
            });

            const questao12_42017 = await Questao.create({
                enunciado: `
                Texto 05
                
                A leitura da tirinha O poço dos desejos permite concluir que
                `,
                opcao1: `a personagem está fatigada de tanto se esforçar para transformar o mundo.`,
                opcao2: `a resposta imediata ao pedido feito não atende à expectativa da personagem.`,
                opcao3: `as redes sociais não podem contribuir em nada para a transformação do mundo.`,
                opcao4: `a moeda lançada simboliza um mundo que valoriza demasiadamente o dinheiro.`,
                opcao5: `a exposição de insatisfação não leva necessariamente a intervenções para modificar o mundo.`,
                respostaCorreta: 'E',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova42017.id,
                ordem:12,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova7-12.png"
            });

            const questao13_42017 = await Questao.create({
                enunciado: `
                Texto 05
                
                Marque a opção em que o referente de lo, em mudá-lo, esteja corretamente indicado.
                `,
                opcao1: `o poço dos desejos`,
                opcao2: `poder criticar`,
                opcao3: `o mundo`,
                opcao4: `um desejo`,
                opcao5: `esforço algum`,
                respostaCorreta: 'C',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova42017.id,
                ordem:13,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova7-12.png"
            });

            const questao14_42017 = await Questao.create({
                enunciado: `
                Texto 05
                
                As palavras poço, no título da tirinha, e esforço, no segundo quadrinho, têm respectivamente o 
                plural poços e esforços com mudança do som da vogal da sílaba tônica. Sendo assim, qual das 
                palavras sublinhadas não apresenta a mesma característica quando pluralizada?
                `,
                opcao1: `O porto do centro histórico foi restaurado.`,
                opcao2: `Foi encontrado morto o animal desaparecido.`,
                opcao3: `O quadro que você pendurou está completamente torto.`,
                opcao4: `Estão em busca de novo rosto para uma campanha publicitária.`,
                opcao5: `Para encontrar gasolina barata, você precisa pesquisar em mais de um posto.`,
                respostaCorreta: 'D',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova42017.id,
                ordem:14,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova7-12.png"
            });

            const questao15_42017 = await Questao.create({
                enunciado: `
                Texto 05
                
                Em esforço algum, existe a ideia de nulidade, conferida pelo emprego de algum depois do 
                substantivo. Para expressar essa mesma nulidade, poderia ser anteposta ao substantivo a palavra
                `,
                opcao1: `qualquer ou nenhum.`,
                opcao2: `nenhum ou pouco.`,
                opcao3: `qualquer ou certo. `,
                opcao4: `certo ou nenhum.`,
                opcao5: `pouco ou qualquer.`,
                respostaCorreta: 'A',
                disciplinaId: portugues.id,
                categoriaId: interpretacaoTexto.id,
                provaId: prova42017.id,
                ordem:15,
                imagem:"https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova7-12.png"
            });

            const questao16_42017 = await Questao.create({
                enunciado: `
                Considere as seguintes afirmações sobre os números reais positivos x e y, 
                
                A Se x > 5 e y < 3, então x³ - 10y > 95. 
                B Se x² < 1 e y² > 2, então x² - y < 0. 
                C Se x² < 1 e y² > 2, então x² - y² > 0. 

                Assim, destas, podemos afirmar que:     
                `,
                opcao1: `apenas A é verdadeira.`,
                opcao2: `apenas A e B são verdadeiras.`,
                opcao3: `apenas B e C são verdadeiras.`,
                opcao4: `apenas A e C são verdadeiras.`,
                opcao5: `as sentenças A, B e C são verdadeiras.`,
                respostaCorreta: 'B',
                disciplinaId: matematica.id,
                categoriaId: equacoesInequacoes.id,
                provaId: prova42017.id,
                ordem:16,
            });

            const questao17_42017 = await Questao.create({
                enunciado: `
                A figura abaixo representa uma secção do eixo das abscissas onde os pontos A,B,C,D,E,F,G,H,I 
                e J são igualmente espaçados. Sabendo que a abscissa dos pontos A e J são respectivamente 19 e 
                63, determine a abscissa do ponto G.     
                `,
                opcao1: `479/9`,
                opcao2: `52`,
                opcao3: `115/2`,
                opcao4: `145/3`,
                opcao5: `50`,
                respostaCorreta: 'D',
                disciplinaId: matematica.id,
                categoriaId: geometriaAnalitica.id,
                provaId: prova42017.id,
                ordem:17,
            });

            const questao18_42017 = await Questao.create({
                enunciado: `
                Seja f a função real definida por f (x)=ax² + bx + c, 
                cujo gráfico é dado a seguir, sendo a,b,c ∈ R. O valor 
                de a + b + c, sabendo que as coordenadas dos pontos 
                A,B e D são (-2,0), (1,0) e (-1/2, - 9/2), é:    
                `,
                opcao1: `6`,
                opcao2: `-6`,
                opcao3: `4`,
                opcao4: `0`,
                opcao5: `-4`,
                respostaCorreta: 'D',
                disciplinaId: matematica.id,
                categoriaId: funcoes.id,
                provaId: prova42017.id,
                ordem:18,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova7-18.png"
            });

            const questao19_42017 = await Questao.create({
                enunciado: `
                De uma sacola contendo bolas vermelhas e pretas, retiram-se 8 vermelhas, ficando a relação de 
                1 vermelha para 3 pretas. Em seguida, retiram-se 20 pretas, restando, na sacola, bolas na razão de 
                3 vermelhas para 4 pretas. Assim podemos afirmar que o número total de bolas vermelhas e 
                pretas que havia incialmente na sacola é   
                `,
                opcao1: `64`,
                opcao2: `82`,
                opcao3: `56`,
                opcao4: `44`,
                opcao5: `82`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: combinatoria.id,
                provaId: prova42017.id,
                ordem:19,
            });

            const questao27_42017 = await Questao.create({
                enunciado: `
                Um boleto bancário, ou simplesmente boleto, é um documento largamente utilizado 
                no Brasil como instrumento de pagamento de um produto ou serviço prestado. Através do boleto, seu 
                emissor pode receber do pagador o valor referente àquele pagamento. As principais informações 
                referentes ao valor do boleto são o vencimento, o valor do documento, a multa e os juros por atraso. 

                Se o pagamento deste boleto for feito no dia 03 de dezembro de 2016, qual dos valores abaixo mais se 
                aproxima do valor a ser pago por este? 
                Considere os juros do boleto como juros simples sobre o valor do documento, sem a multa, lembre-se 
                que os juros começam a ser cobrados a partir do dia seguinte ao vencimento e que outubro são 
                considerados todos os 31 dias. Note que este boleto tem vencimento no dia 18 de outubro de 2016.   
                `,
                opcao1: `R$ 91,80`,
                opcao2: `R$ 102,15`,
                opcao3: `R$ 108,25`,
                opcao4: `R$ 112,50`,
                opcao5: `R$ 120,80`,
                respostaCorreta: 'B',
                disciplinaId: matematica.id,
                categoriaId: jurosSimples.id,
                provaId: prova42017.id,
                ordem:20,
            });

            const questao29_42017 = await Questao.create({
                enunciado: `
                Dois ciclistas, digamos ciclista A e ciclista B, partem de bicicleta, em direção a um restaurante 
                distante 144 km do ponto do qual partiram. O ciclista A percorre 2 km a mais por hora do que o 
                ciclista B e chega ao destino 1 h antes do que o ciclista B. Supondo que mantiveram a velocidade 
                constante durante todo o percurso o produto das velocidades (em km/h) destes dois ciclistas é:   
                `,
                opcao1: `168`,
                opcao2: `224`,
                opcao3: `288`,
                opcao4: `320`,
                opcao5: `400`,
                respostaCorreta: 'C',
                disciplinaId: matematica.id,
                categoriaId: matematicaAplicada.id,
                provaId: prova42017.id,
                ordem:21,
            });

            const questao31_42017 = await Questao.create({
                enunciado: `
                Tempo de Reação
                
                O intervalo de tempo entre o reconhecimento de uma situação perigosa e a ação de resposta a esta 
                situação é chamado de tempo de reação, e depende da condição física e do estado emocional do 
                indivíduo.  
                O tempo médio de reação de uma pessoa jovem em bom estado de saúde é de aproximadamente 0,75 
                segundos. Este é praticamente o tempo que o cérebro necessita para processar as informações que está 
                recebendo e definir uma ação.  
                
                Um motorista jovem e em bom estado de saúde, dirige um veículo num trecho retilíneo de uma rodovia 
                com velocidade escalar constante de 108,0 km/h. Subitamente ele avista uma árvore caída obstruindo a 
                rodovia. Considerando o tempo de reação do motorista, descrito no texto acima, que distância o veículo 
                percorre do instante em que o motorista avista a árvore até acionar os freios?`,
                opcao1: `216,0 m`,
                opcao2: `108,0 m`,
                opcao3: `81,0 m`,
                opcao4: `30,0 m`,
                opcao5: `22,5 m`,
                respostaCorreta: 'E',
                disciplinaId: ciencia.id,
                categoriaId: cinematica.id,
                provaId: prova42017.id,
                ordem:22,
            });

            const questao32_42017 = await Questao.create({
                enunciado: `
                Um garoto de massa 30 kg encontra-se sobre uma balança, dentro de um elevador, Sabendo que a balança, 
                graduada em newtons, indicava o valor de 360 N, qual opção pode 
                indicar a classificação do movimento do elevador. (g = 10 m/s²)`,
                opcao1: `o elevador está descendo em movimento uniforme.`,
                opcao2: `o elevador está descendo em movimento acelerado.`,
                opcao3: `o elevador está subindo em movimento uniforme.`,
                opcao4: `o elevador está subindo em movimento acelerado.`,
                opcao5: `o elevador está subindo em movimento retardado.`,
                respostaCorreta: 'D',
                disciplinaId: ciencia.id,
                categoriaId: dinamica.id,
                provaId: prova42017.id,
                ordem:23,
            });

            const questao35_42017 = await Questao.create({
                enunciado: `
                Um estudante coletou uma amostra de água do mar para realizar uma análise. Na amostra 
                coletada estavam presentes, além da água do mar, também areia e óleo.  
                Assinale a alternativa que descreve corretamente o comportamento esperado para a amostra 
                coletada: `,
                opcao1: `Após deixar a amostra em repouso, observou-se que a mesma apresentava duas fases: uma 
                        constituída de areia, e outra, composta por água do mar e óleo.`,
                opcao2: `Após deixar a amostra em repouso, observou-se que a mesma apresentava duas fases: uma 
                        constituída de água, e outra, composta por areia e óleo.`,
                opcao3: `Após deixar a amostra em repouso, observou-se que a mesma apresentava três fases: uma 
                        constituída de areia, outra de óleo e a terceira por água.`,
                opcao4: `Após deixar a amostra em repouso, observou-se que a mesma apresentava duas fases: uma 
                        líquida e outra sólida.`,
                opcao5: `Após deixar a amostra em repouso, observou-se que a mesma apresentava duas fases, 
                        constituídas por duas misturas: uma homogênea, líquida, e outra heterogênea, sólida.`,
                respostaCorreta: 'C',
                disciplinaId: ciencia.id,
                categoriaId: quimica.id,
                provaId: prova42017.id,
                ordem:24,
            });

            const questao36_42017 = await Questao.create({
                enunciado: `
                “Em vários locais, em períodos de chuva, é comum a ocorrência de raios que, ao atingir árvores 
                ou instalações, podem dar início a incêndios. Esses incêndios podem atingir grandes proporções se 
                ocorrerem em locais com grande quantidade de material inflamável”. 
                Os eventos acima podem ser correlacionados com as seguintes classes de fenômenos: `,
                opcao1: `Físicos, como a liquefação da água e a queima de material inflamável.`,
                opcao2: `Físicos, como a ocorrência de raios, e químicos, como a queima de material inflamável.`,
                opcao3: `Químicos, como a liquefação da água e físicos, como a queima de material inflamável.`,
                opcao4: `Físicos, como a ocorrência de raios, e químicos, como a liquefação da água.`,
                opcao5: `Químicos, como a liquefação da água e a queima de material inflamável.`,
                respostaCorreta: 'B',
                disciplinaId: ciencia.id,
                categoriaId: quimica.id,
                provaId: prova42017.id,
                ordem:25,
            });

            const questao37_42017 = await Questao.create({
                enunciado: `
                Na tarde de 5 de novembro de 2015, ocorreu o rompimento da barragem de Fundão, a 35 km 
                do centro de Mariana, em Minas Gerais – um dos maiores desastres ambientais do mundo. A análise 
                da lama encontrou níveis elevados de metais pesados, como arsênio, chumbo e mercúrio, em 
                quantidades superiores às aceitáveis. Abaixo são apresentados os dados para dois destes elementos 
                químicos.
                
                A partir dos dados apresentados, podemos verificar a existência de:
                `,
                opcao1: `Dois isóbaros e dois pares de isótonos`,
                opcao2: `Dois isóbaros e dois isótonos`,
                opcao3: `Dois isótopos e quatro isótonos`,
                opcao4: `Quatro isóbaros e quatro isótonos`,
                opcao5: `Dois isóbaros e dois isótopos`,
                respostaCorreta: 'A',
                disciplinaId: ciencia.id,
                categoriaId: estruturaAtomica.id,
                provaId: prova42017.id,
                ordem:26,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova7-37.png"
            });

            const questao38_42017 = await Questao.create({
                enunciado: `
                Observe as ilustrações.

                Sobre esses animais foram feitas as seguintes afirmativas:

                I – Piolhos e carrapatos são exemplos de aracnídeos, juntamente com aranhas e pulgas. 
                
                II – Sanguessugas possuem o corpo segmentado, formando anéis, característica que compartilham 
                com outros anelídeos, como minhocas, lagartas e lacraias. 
                
                III – Piolho, sanguessuga e carrapato são parasitas que se instalam na superfície externa do corpo de 
                seus hospedeiros. 
                
                IV – Predadores e parasitas podem ser classificados como consumidores em cadeias e teias 
                alimentares.  

                Assinale a alternativa correta:  
                `,
                opcao1: `Todas as afirmativas são corretas.`,
                opcao2: `Somente as afirmativas I e III são corretas.`,
                opcao3: `Somente as afirmativas II e IV são corretas.`,
                opcao4: `Somente as afirmativas I e II são corretas.`,
                opcao5: `Somente as afirmativas III e IV são corretas.`,
                respostaCorreta: 'E',
                disciplinaId: ciencia.id,
                categoriaId: zoologia.id,
                provaId: prova42017.id,
                ordem:27,
                imagem: "https://imagenstcclucas.s3.us-east-2.amazonaws.com/assets/prova7-38.png"
            });

            const questao39_42017 = await Questao.create({
                enunciado: `
                Leia o texto a seguir que trata do mau funcionamento do Sistema Urinário humano: 
                
                “Pessoas que têm a função renal comprometida devem se submeter a processos de filtragem do 
                sangue em máquinas especiais. O tratamento chama-se hemodiálise: o sangue entra em um 
                equipamento que permite a passagem de algumas substâncias para um líquido, que é descartado. 
                Uma vez filtrado, o sangue e reintroduzido no organismo.”

                Sobre esse Sistema pode-se afirmar que:
                `,
                opcao1: `Todas as afirmativas são corretas.`,
                opcao2: `Somente as afirmativas I e III são corretas.`,
                opcao3: `Somente as afirmativas II e IV são corretas.`,
                opcao4: `Somente as afirmativas I e II são corretas.`,
                opcao5: `Somente as afirmativas III e IV são corretas.`,
                respostaCorreta: 'E',
                disciplinaId: ciencia.id,
                categoriaId: biologia.id,
                provaId: prova42017.id,
                ordem:28,
            });

            const questao41_42017 = await Questao.create({
                enunciado: `
                O processo de formação das monarquias centralizadas no final da Idade Média ocorreu em
                grande parte pela aproximação entre monarcas e burguesia, na busca de superação dos entraves
                políticos e econômicos derivados das estruturas feudais. VICENTINO, Cláudio e DORIGO,
                Gianpaolo. História geral e do Brasil. vols. 2 e 3. São Paulo: Scipione, 2010.
                
                Entre os teóricos do absolutismo, isto é, entre aqueles que buscavam justificar o poder absoluto dos
                reis, destaca-se Jacques Bossuet (1627-1704). Para esse pensador
                `,
                opcao1: `política e moral são questões separáveis, o que justifica o emprego da força e da violência para
                        obtenção dos objetivos do rei.`,
                opcao2: `o homem é lobo do homem e, portanto, o homem precisa abrir mãos de todos os seus direitos em
                        favor do soberano, cuja responsabilidade é garantir segurança.`,
                opcao3: `o poder real deveria ser dividido em três: executivo, legislativo e judiciário que, dessa forma,
                        teria uma limitação legal.`,
                opcao4: `o pode real seria fortalecido por uma Constituição, que lhe daria amplos poderes sobre os súditos,
                        inclusive, para o uso da violência.`,
                opcao5: `existe total proximidade entre o poder real e o poder de divino, isto é, o rei é um representante de
                        Deus na Terra.`,
                respostaCorreta: 'E',
                disciplinaId: historia.id,
                categoriaId: historiaBrasil.id,
                provaId: prova42017.id,
                ordem:29,
            });

            const questao42_42017 = await Questao.create({
                enunciado: `
                As práticas imperialistas intensificaram-se na segunda metade do século XIX, o que levou à
                partilha dos continentes africano e asiático. Entre as necessidades do imperialismo do século XIX,
                podemos destacar
                `,
                opcao1: `a busca de matérias primas, de mercado consumidor e de áreas para investimentos de capitais.`,
                opcao2: `somente a busca de matérias primas e de mercado consumidor para seus produtos.`,
                opcao3: `a busca de matérias primas e o recrutamento de soldados para lutarem na Primeira Guerra.`,
                opcao4: `a busca por colônias e o recrutamento de soldados para lutarem na Primeira Guerra.`,
                opcao5: `a busca de especiarias, de mercado consumidor e de novas rotas comerciais com as Índias.`,
                respostaCorreta: 'A',
                disciplinaId: historia.id,
                categoriaId: historiaContemporanea.id,
                provaId: prova42017.id,
                ordem:30,
            });
        })();
        
}

export default sequelize;

