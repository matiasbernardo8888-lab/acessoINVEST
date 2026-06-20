// ═══════════════════════════════════════════════════════════════════
// TRILHA INICIANTE — 5 módulos
// Para editar um texto: procure pelo "titulo" do módulo e altere o
// campo "conteudo" (texto principal), "exemplo", "erroComum" ou "dicaPro".
// Cada pergunta do quiz tem: pergunta, opcoes (4), correta (índice 0-3), explicacao.
// ═══════════════════════════════════════════════════════════════════
const trilhaIniciante = {
    titulo: 'Trilha Iniciante',
    subtitulo: 'Os fundamentos que todo mundo deveria aprender antes de colocar o primeiro real para trabalhar.',
    cor: 'emerald',
    modulos: [
        {
            id: 'ini-1',
            titulo: 'O que é Investimento',
            icone: '💡',
            resumo: 'A diferença entre guardar e investir, e por que isso muda tudo no longo prazo.',
            conteudo: `
                <h4>Guardar dinheiro não é a mesma coisa que investir</h4>
                <p>Quando alguém coloca uma nota de R$ 50 dentro de um cofre ou debaixo do colchão, está <strong>guardando</strong> dinheiro. Quando essa mesma pessoa coloca esse dinheiro em uma aplicação financeira com o objetivo de fazê-lo crescer ao longo do tempo, ela está <strong>investindo</strong>. A diferença parece pequena na prática do dia a dia, mas é gigante no resultado final: dinheiro parado perde valor com o passar dos anos, enquanto dinheiro investido tem a chance de crescer.</p>
                <p>Investir, de forma simples, é abrir mão de consumir uma quantia de dinheiro hoje para ter a expectativa de receber mais no futuro. Esse "mais" pode vir de juros, de valorização de um ativo, da distribuição de lucros de uma empresa ou de uma combinação de tudo isso. Em troca dessa expectativa de ganho, o investidor aceita correr algum nível de risco e abre mão da liquidez imediata daquele dinheiro — ou seja, ele pode não conseguir resgatar o valor instantaneamente sem alguma perda ou espera.</p>

                <h4>Por que as pessoas investem</h4>
                <p>Existem três motivos centrais que levam alguém a investir: proteger o dinheiro da inflação, fazer o patrimônio crescer com o tempo e alcançar objetivos específicos, como comprar um imóvel, montar um negócio ou se aposentar com tranquilidade. Sem investir, o dinheiro parado perde poder de compra ano após ano, porque os preços das coisas sobem (esse fenômeno se chama <strong>inflação</strong> e será detalhado em outro módulo desta trilha).</p>
                <p>Além disso, investir é uma forma de fazer o dinheiro "trabalhar" para o investidor. Em vez de trocar apenas tempo e esforço por renda (como acontece em um emprego), o capital investido também passa a gerar retorno sozinho, de forma passiva, mesmo enquanto a pessoa dorme, trabalha em outra atividade ou está de férias.</p>

                <h4>Risco e retorno: a dupla inseparável</h4>
                <p>Todo investimento carrega algum grau de risco — a possibilidade de o resultado final ser diferente (para melhor ou para pior) do que se esperava. A regra geral do mercado financeiro é que, quanto maior o potencial de retorno de um investimento, maior tende a ser o risco envolvido. Não existe almoço grátis: produtos que prometem retornos muito acima da média do mercado, com baixíssimo risco, costumam ser golpes ou esconder riscos que não estão sendo informados claramente.</p>
                <p>Por isso, antes de investir, é fundamental entender qual é o nível de risco que se está disposto a aceitar e qual é o prazo disponível para deixar o dinheiro investido. Esses dois fatores — tolerância ao risco e horizonte de tempo — vão guiar praticamente todas as decisões de alocação de uma carteira.</p>

                <h4>O valor do tempo no dinheiro</h4>
                <p>Um conceito central em finanças é que R$ 1.000 hoje valem mais do que R$ 1.000 daqui a um ano. Isso acontece porque o dinheiro disponível hoje pode ser investido e gerar retorno ao longo desse período. Esse princípio é chamado de <strong>valor do dinheiro no tempo</strong> e é a base matemática que sustenta praticamente todos os cálculos financeiros, dos juros simples até os modelos mais sofisticados de precificação de ativos.</p>
                <p>É justamente esse princípio que torna o hábito de começar a investir cedo tão poderoso: quanto mais tempo o dinheiro permanece investido, mais tempo ele tem para crescer sobre si mesmo. Esse efeito será aprofundado no próximo módulo, sobre juros compostos.</p>

                <h4>As grandes categorias de investimento</h4>
                <p>De forma bem resumida, os investimentos costumam ser divididos em duas grandes famílias: <strong>renda fixa</strong>, em que as regras de remuneração já são conhecidas (ou pelo menos previsíveis) no momento da aplicação, e <strong>renda variável</strong>, em que o retorno depende do desempenho de um ativo no mercado e pode oscilar bastante. Cada uma dessas famílias tem subdivisões, prazos, riscos e formas de tributação diferentes — e será o assunto do módulo 3 desta trilha.</p>

                <h4>Como começar com responsabilidade</h4>
                <p>Antes de investir o primeiro real, faz sentido organizar a vida financeira: ter controle sobre receitas e despesas, quitar dívidas com juros altos (como o cheque especial ou o rotativo do cartão de crédito) e montar uma reserva de emergência. Investir sem esse alicerce é como construir uma casa sem fundação — o resultado tende a desmoronar no primeiro imprevisto.</p>
                <p>Vale lembrar também que investir envolve estudo contínuo. Ninguém nasce sabendo interpretar um relatório de fundo ou montar uma carteira diversificada. O caminho é começar pelo básico, simular cenários, entender os próprios erros e ir avançando, módulo a módulo, trilha a trilha.</p>
            `,
            termos: [
                { termo: 'Capital', def: 'O montante de dinheiro disponível para ser investido ou utilizado em uma atividade econômica.' },
                { termo: 'Liquidez', def: 'A facilidade e velocidade com que um investimento pode ser convertido em dinheiro disponível sem perda relevante de valor.' },
                { termo: 'Rentabilidade', def: 'O ganho (ou perda) percentual obtido em um investimento durante um determinado período.' },
                { termo: 'Horizonte de investimento', def: 'O período de tempo que o investidor pretende manter o dinheiro aplicado antes de precisar resgatá-lo.' }
            ],
            exemplo: `
                <p><strong>Cenário:</strong> Duas pessoas recebem R$ 5.000 de bônus no trabalho.</p>
                <p>🔸 A primeira pessoa guarda o valor em uma conta corrente que não rende nada. Depois de 5 anos, ela ainda tem R$ 5.000 "na conta" — mas, considerando uma inflação média de 5% ao ano, o poder de compra desse valor caiu para o equivalente a cerca de <strong>R$ 3.918</strong> em termos reais.</p>
                <p>🔸 A segunda pessoa investe o mesmo valor em uma aplicação que rende, em média, 10% ao ano. Depois de 5 anos, ela passa a ter aproximadamente <strong>R$ 8.052</strong>. Mesmo descontando a inflação dos mesmos 5% ao ano, o poder de compra real ficou em torno de <strong>R$ 6.310</strong> — ou seja, ela não só protegeu o dinheiro da inflação como ainda aumentou seu patrimônio real.</p>
            `,
            erroComum: 'Achar que "guardar dinheiro" e "investir dinheiro" são sinônimos. Deixar uma reserva grande parada na poupança ou na conta corrente por anos, sem comparar com outras opções de baixo risco, é um dos erros mais comuns e mais caros entre iniciantes.',
            dicaPro: 'Antes de escolher onde investir, defina primeiro o objetivo (por que estou investindo?), o prazo (quando vou precisar desse dinheiro?) e só depois o produto. Quem escolhe o produto antes de definir o objetivo costuma tomar decisões desalinhadas com sua própria realidade.',
            quiz: [
                {
                    pergunta: 'Qual é a principal diferença entre guardar e investir dinheiro?',
                    opcoes: [
                        'Não existe diferença, são sinônimos',
                        'Guardar é manter o dinheiro parado; investir busca fazê-lo crescer ao longo do tempo, aceitando algum risco',
                        'Guardar é sempre mais seguro e investir é sempre mais arriscado, sem exceções',
                        'Investir só é possível para quem já tem mais de R$ 100 mil'
                    ],
                    correta: 1,
                    explicacao: 'Guardar mantém o valor nominal parado, enquanto investir busca crescimento de capital, aceitando algum grau de risco e abrindo mão de parte da liquidez imediata.'
                },
                {
                    pergunta: 'Por que dinheiro parado tende a perder poder de compra com o tempo?',
                    opcoes: [
                        'Porque o Banco Central confisca parte do valor todo ano',
                        'Por causa da inflação, que faz os preços subirem enquanto o valor nominal do dinheiro permanece o mesmo',
                        'Porque notas de dinheiro se desvalorizam fisicamente',
                        'Isso não é verdade, dinheiro parado nunca perde valor'
                    ],
                    correta: 1,
                    explicacao: 'A inflação eleva os preços de bens e serviços ao longo do tempo; se o valor guardado não acompanha esse movimento, seu poder de compra real diminui.'
                },
                {
                    pergunta: 'O que normalmente acontece com o risco de um investimento quando o potencial de retorno é mais alto?',
                    opcoes: [
                        'O risco tende a diminuir',
                        'Risco e retorno não têm relação nenhuma',
                        'O risco tende a aumentar também',
                        'O risco passa a ser zero, pois o retorno compensa tudo'
                    ],
                    correta: 2,
                    explicacao: 'De forma geral, potenciais de retorno mais altos vêm acompanhados de níveis de risco mais altos. Promessas de retorno alto com risco baixo costumam ser sinal de alerta.'
                },
                {
                    pergunta: 'O que significa o conceito de "valor do dinheiro no tempo"?',
                    opcoes: [
                        'Que o dinheiro físico se deteriora com o tempo',
                        'Que um valor disponível hoje vale mais do que o mesmo valor no futuro, pois pode ser investido e gerar retorno',
                        'Que o valor de uma nota de dinheiro nunca muda',
                        'Que só vale a pena investir depois dos 30 anos'
                    ],
                    correta: 1,
                    explicacao: 'Dinheiro disponível agora pode ser investido e crescer ao longo do tempo, por isso vale mais do que a mesma quantia recebida no futuro.'
                },
                {
                    pergunta: 'O que deve vir antes da escolha de um produto de investimento específico?',
                    opcoes: [
                        'A indicação de um amigo nas redes sociais',
                        'A definição de objetivo, prazo e perfil de risco do investidor',
                        'O valor mínimo de aplicação do produto',
                        'O nome chamativo do fundo ou ativo'
                    ],
                    correta: 1,
                    explicacao: 'Definir objetivo, horizonte de tempo e tolerância ao risco antes de escolher o produto evita decisões desalinhadas com a realidade financeira da pessoa.'
                }
            ]
        },
        {
            id: 'ini-2',
            titulo: 'Juros Simples vs Juros Compostos',
            icone: '📐',
            resumo: 'O conceito matemático mais poderoso (e mais mal compreendido) do mundo dos investimentos.',
            conteudo: `
                <h4>A base de tudo: o que são juros</h4>
                <p>Juros são, em essência, o "preço do dinheiro no tempo". Quando alguém empresta dinheiro (seja para um banco, para o governo ou para uma empresa, ao comprar um título de dívida), espera receber de volta o valor original mais uma remuneração por ter abrido mão daquele capital durante certo período. Essa remuneração é o juro. Existem duas formas principais de calcular como esses juros se acumulam ao longo do tempo: juros simples e juros compostos.</p>

                <h4>Juros simples: o crescimento em linha reta</h4>
                <p>No regime de <strong>juros simples</strong>, os juros incidem sempre sobre o valor original (o capital inicial), e não sobre os juros acumulados anteriormente. Isso significa que o crescimento do dinheiro ao longo do tempo segue uma linha reta: o mesmo valor de juros é somado a cada período. A fórmula básica é: Juros = Capital × Taxa × Tempo.</p>
                <p>Por exemplo, R$ 1.000 aplicados a uma taxa de 10% ao ano em juros simples renderão sempre R$ 100 por ano, todo ano, independentemente de quanto tempo já tenha passado. Depois de 5 anos, o total será R$ 1.500 (R$ 1.000 de capital + 5 × R$ 100 de juros).</p>

                <h4>Juros compostos: o crescimento exponencial</h4>
                <p>Já no regime de <strong>juros compostos</strong>, os juros de cada período passam a incidir não apenas sobre o capital inicial, mas também sobre os juros que já foram acumulados nos períodos anteriores. É o famoso "juros sobre juros". Esse efeito faz com que o crescimento, em vez de seguir uma linha reta, siga uma curva exponencial — lenta no começo, mas cada vez mais acelerada com o passar do tempo.</p>
                <p>A fórmula dos juros compostos é: Montante = Capital × (1 + Taxa) elevado ao Tempo. Usando o mesmo exemplo anterior — R$ 1.000 a 10% ao ano, agora em juros compostos — depois de 5 anos o valor chega a aproximadamente R$ 1.610,51, e não R$ 1.500 como nos juros simples. A diferença pode parecer pequena no curto prazo, mas se torna brutal quando o horizonte de tempo aumenta.</p>

                <h4>Por que essa diferença importa tanto</h4>
                <p>Quase todos os investimentos do mercado financeiro funcionam no regime de juros compostos — CDBs, Tesouro Direto, fundos, e até mesmo dívidas como cartão de crédito e cheque especial (que é exatamente por isso que essas dívidas crescem tão rápido quando não são pagas). Entender esse mecanismo é essencial tanto para fazer o dinheiro investido crescer quanto para evitar que dívidas explodam de tamanho.</p>
                <p>Albert Einstein é frequentemente (embora de forma não totalmente comprovada historicamente) citado como tendo chamado os juros compostos de "a oitava maravilha do mundo", dizendo que quem entende, ganha; quem não entende, paga. Independentemente da origem exata da frase, ela resume bem o poder desse conceito.</p>

                <h4>O papel decisivo do tempo</h4>
                <p>Nos juros compostos, o tempo é uma variável ainda mais importante do que a taxa de juros. Isso acontece porque o efeito "juros sobre juros" precisa de tempo para se acumular e ganhar força. Por isso, começar a investir cedo — mesmo com valores pequenos — tende a gerar resultados muito superiores a começar tarde com valores maiores, simplesmente porque o dinheiro teve mais tempo para compor.</p>
                <p>Esse é o motivo pelo qual planejadores financeiros insistem tanto na importância de começar o quanto antes, mesmo que o valor inicial pareça insignificante. Os primeiros anos de uma aplicação de longo prazo costumam parecer "lentos", mas são justamente eles que constroem a base sobre a qual o crescimento exponencial vai acontecer mais à frente.</p>

                <h4>Aportes regulares potencializam o efeito</h4>
                <p>Quando, além de deixar o capital inicial investido, a pessoa também faz aportes mensais regulares, o efeito dos juros compostos se torna ainda mais poderoso, pois cada novo aporte também começa a gerar juros sobre juros a partir do momento em que entra na aplicação. Esse é o princípio por trás da calculadora de "Aporte Mensal" disponível na seção de Calculadoras Educacionais deste portal — vale a pena simular alguns cenários por lá para visualizar esse efeito na prática.</p>
            `,
            termos: [
                { termo: 'Juros sobre juros', def: 'O efeito pelo qual os rendimentos de um período passam a também gerar rendimento nos períodos seguintes, característica central dos juros compostos.' },
                { termo: 'Taxa de juros', def: 'O percentual cobrado (ou pago) sobre um capital em um determinado período de tempo, geralmente expresso ao mês (a.m.) ou ao ano (a.a.).' },
                { termo: 'Montante', def: 'O valor total acumulado após a aplicação dos juros sobre o capital inicial em um determinado período.' },
                { termo: 'Capitalização', def: 'O processo de incorporar os juros gerados ao capital, passando a render juros sobre esse novo total.' }
            ],
            exemplo: `
                <p><strong>Comparação direta em 20 anos:</strong> R$ 10.000 aplicados a 8% ao ano.</p>
                <p>🔹 Em <strong>juros simples</strong>: R$ 10.000 + (20 × R$ 800) = <strong>R$ 26.000</strong></p>
                <p>🔹 Em <strong>juros compostos</strong>: R$ 10.000 × (1,08)²⁰ ≈ <strong>R$ 46.610</strong></p>
                <p>A diferença entre os dois regimes, nesse exemplo, é de mais de R$ 20.000 — só por conta do efeito acumulativo dos juros sobre juros ao longo do tempo. Quanto mais longo o prazo, maior fica essa diferença.</p>
            `,
            erroComum: 'Subestimar o impacto do tempo e achar que vale mais a pena esperar "ter mais dinheiro" para começar a investir. Na prática, começar cedo com pouco costuma superar começar tarde com muito, justamente por causa do efeito exponencial dos juros compostos.',
            dicaPro: 'Use a calculadora de Juros Compostos deste portal para simular o mesmo valor em prazos diferentes (5, 10, 20 e 30 anos). Visualizar a curva no gráfico ajuda a internalizar, na prática, por que cada ano extra de investimento importa tanto.',
            quiz: [
                {
                    pergunta: 'No regime de juros simples, sobre qual valor os juros são sempre calculados?',
                    opcoes: [
                        'Sobre o capital inicial, sempre o mesmo valor a cada período',
                        'Sobre o montante acumulado até o período anterior',
                        'Sobre a inflação do período',
                        'Sobre o valor de mercado do ativo'
                    ],
                    correta: 0,
                    explicacao: 'Nos juros simples, os juros incidem sempre sobre o capital original, por isso o crescimento ocorre em linha reta.'
                },
                {
                    pergunta: 'O que caracteriza o regime de juros compostos?',
                    opcoes: [
                        'Os juros são pagos apenas uma vez, no fim do contrato',
                        'Os juros incidem apenas sobre o capital inicial',
                        'Os juros de cada período passam a integrar a base de cálculo dos juros seguintes ("juros sobre juros")',
                        'A taxa de juros muda aleatoriamente a cada mês'
                    ],
                    correta: 2,
                    explicacao: 'Juros compostos significam que os rendimentos acumulados também passam a render juros nos períodos seguintes, gerando crescimento exponencial.'
                },
                {
                    pergunta: 'Por que o tempo é uma variável tão importante nos juros compostos?',
                    opcoes: [
                        'Porque a taxa de juros sempre aumenta com o tempo',
                        'Porque o efeito de "juros sobre juros" precisa de tempo para se acumular e ganhar força',
                        'O tempo não influencia em nada o resultado final',
                        'Porque investimentos de curto prazo são sempre proibidos por lei'
                    ],
                    correta: 1,
                    explicacao: 'Quanto mais tempo o dinheiro permanece investido, mais ciclos de "juros sobre juros" ocorrem, acelerando o crescimento exponencial.'
                },
                {
                    pergunta: 'O que acontece quando, além do capital inicial, a pessoa faz aportes mensais regulares em uma aplicação com juros compostos?',
                    opcoes: [
                        'O efeito dos juros compostos é anulado',
                        'Cada novo aporte passa a gerar juros sobre juros a partir do momento em que entra, potencializando o crescimento total',
                        'Os aportes mensais sempre reduzem a rentabilidade',
                        'Não existe diferença em relação a um aporte único'
                    ],
                    correta: 1,
                    explicacao: 'Aportes regulares aumentam o capital sujeito ao efeito composto, fazendo o patrimônio crescer mais rápido do que com um único aporte inicial.'
                },
                {
                    pergunta: 'Em qual outro contexto, além de investimentos, o efeito dos juros compostos costuma aparecer de forma negativa?',
                    opcoes: [
                        'Em compras à vista',
                        'Em dívidas não pagas, como o rotativo do cartão de crédito e o cheque especial, que crescem de forma acelerada',
                        'No salário mensal de um trabalhador CLT',
                        'Em produtos isentos de imposto de renda'
                    ],
                    correta: 1,
                    explicacao: 'Dívidas com juros altos e não pagas também capitalizam de forma composta, o que faz seu valor crescer de forma cada vez mais acelerada com o tempo.'
                }
            ]
        },
        {
            id: 'ini-3',
            titulo: 'Tipos de Renda: Fixa e Variável',
            icone: '⚖️',
            resumo: 'Conheça as duas grandes famílias de investimentos e como elas se comportam de forma diferente.',
            conteudo: `
                <h4>Duas lógicas diferentes de remuneração</h4>
                <p>O mercado financeiro costuma dividir os investimentos em duas grandes categorias: <strong>renda fixa</strong> e <strong>renda variável</strong>. Essa divisão não tem a ver com o quanto o investimento rende em termos absolutos, mas sim com a previsibilidade da regra de remuneração no momento em que o investimento é feito.</p>

                <h4>Renda fixa: regras conhecidas desde o início</h4>
                <p>Na renda fixa, o investidor sabe, desde o momento da aplicação, qual será a lógica usada para calcular o seu retorno — mesmo que o valor final exato ainda dependa de algum indexador (como a Selic ou o CDI). Existem três formas comuns de remuneração na renda fixa: <strong>prefixada</strong> (a taxa é definida no momento da aplicação e não muda, exemplo: "10% ao ano"); <strong>pós-fixada</strong> (a remuneração acompanha um indexador, como "100% do CDI"); e <strong>híbrida</strong> (combina uma taxa fixa com um índice, como "IPCA + 6% ao ano").</p>
                <p>Exemplos comuns de renda fixa incluem o Tesouro Direto (títulos públicos emitidos pelo governo federal), CDBs (Certificados de Depósito Bancário emitidos por bancos), LCIs e LCAs (Letras de Crédito Imobiliário e do Agronegócio, isentas de Imposto de Renda para pessoa física) e debêntures (títulos de dívida emitidos por empresas). De forma geral, a renda fixa costuma ser associada a um risco menor e uma previsibilidade maior — embora isso não signifique ausência total de risco, como será visto no módulo de Gestão de Risco da trilha avançada.</p>

                <h4>Renda variável: o retorno depende do mercado</h4>
                <p>Já na renda variável, o retorno não é conhecido (nem mesmo a lógica de cálculo é totalmente previsível) no momento da aplicação. Ele depende do desempenho de um ativo no mercado, que pode subir ou descer de valor por inúmeros fatores: resultados financeiros de uma empresa, cenário econômico, expectativas dos investidores, eventos políticos, entre outros. Exemplos de renda variável incluem ações, fundos imobiliários (FIIs), ETFs de ações, fundos multimercado e criptoativos.</p>
                <p>Por carregar mais incerteza, a renda variável costuma ser associada a um potencial de retorno mais alto no longo prazo, mas também a uma volatilidade maior no curto prazo — ou seja, o valor investido pode oscilar (para cima ou para baixo) de forma mais intensa em períodos curtos de tempo.</p>

                <h4>Não existe "melhor": existe "adequado"</h4>
                <p>Um erro comum é achar que uma categoria é sempre superior à outra. Na realidade, renda fixa e renda variável cumprem papéis diferentes dentro de uma carteira de investimentos. A renda fixa costuma ser mais indicada para objetivos de curto e médio prazo, para a reserva de emergência e para perfis mais conservadores, justamente pela previsibilidade. Já a renda variável tende a fazer mais sentido para objetivos de longo prazo, em que há tempo suficiente para suportar as oscilações do mercado em busca de um retorno potencialmente maior.</p>
                <p>Na prática, a maioria das carteiras bem estruturadas combina as duas categorias, em proporções que variam conforme o perfil de risco, o prazo e os objetivos de cada investidor — esse é justamente o princípio da diversificação, que será aprofundado no módulo correspondente da trilha intermediária.</p>

                <h4>Liquidez: outro fator que diferencia os produtos</h4>
                <p>Além da previsibilidade do retorno, é importante observar a liquidez de cada produto, ou seja, a velocidade com que ele pode ser convertido em dinheiro disponível. Alguns produtos de renda fixa têm liquidez diária (o resgate cai na conta em poucas horas ou no dia seguinte), enquanto outros têm prazo de carência ou vencimento definido, em que o resgate antecipado pode não ser possível ou pode gerar perda de rentabilidade. Na renda variável, ações e ETFs negociados em bolsa costumam ter liquidez relativamente alta (podem ser vendidos durante o pregão), mas o preço de venda está sujeito às condições de mercado do momento.</p>

                <h4>Tributação: outro ponto de atenção</h4>
                <p>A forma como cada investimento é tributado pelo Imposto de Renda também varia bastante: existem produtos isentos (como LCIs, LCAs e a maioria dos dividendos de ações para pessoa física), produtos com tabela regressiva conforme o tempo de aplicação (como Tesouro Direto e a maioria dos CDBs) e produtos com alíquota fixa (como a maioria das operações em ações e FIIs). Esse tema será aprofundado no módulo de Imposto de Renda para Investimentos, na trilha intermediária.</p>
            `,
            termos: [
                { termo: 'Prefixado', def: 'Modalidade de renda fixa em que a taxa de retorno é definida no momento da aplicação e não muda até o vencimento.' },
                { termo: 'Pós-fixado', def: 'Modalidade de renda fixa em que a remuneração acompanha um indexador, como o CDI, podendo variar ao longo do tempo.' },
                { termo: 'Volatilidade', def: 'A intensidade com que o preço de um ativo oscila para cima ou para baixo em um determinado período.' },
                { termo: 'Vencimento', def: 'A data em que um título de renda fixa encerra seu prazo e o valor investido (mais os rendimentos) é devolvido ao investidor.' }
            ],
            exemplo: `
                <p><strong>Cenário simulado:</strong> R$ 10.000 aplicados por 3 anos.</p>
                <p>🔸 Em um <strong>CDB pós-fixado a 100% do CDI</strong> (renda fixa), supondo um CDI médio de 10% ao ano, o valor final estimado seria de aproximadamente <strong>R$ 13.310</strong>, com baixa oscilação ao longo do caminho.</p>
                <p>🔸 Em uma <strong>carteira de ações</strong> (renda variável), o valor poderia oscilar bastante ano a ano: por exemplo, terminar o ano 1 em R$ 8.500 (queda de 15%), o ano 2 em R$ 11.900 (alta de 40%) e o ano 3 em R$ 15.470 (alta de 30%) — um resultado final melhor, mas com um caminho muito mais instável e imprevisível pelo meio.</p>
            `,
            erroComum: 'Considerar que renda fixa é "sempre segura" e renda variável é "sempre arriscada", sem analisar o produto específico. Existem renda fixa de baixíssimo risco (Tesouro Selic) e renda fixa de alto risco (debêntures de empresas em dificuldade financeira), assim como existem ações de empresas mais estáveis e ações de empresas extremamente especulativas.',
            dicaPro: 'Antes de aplicar em qualquer produto, leia o nome completo e pesquise o que ele significa. "CDB", "LCI", "FII" e "ETF" são categorias amplas — dentro de cada uma existem produtos com riscos e características bem diferentes entre si.',
            quiz: [
                {
                    pergunta: 'O que define se um investimento é classificado como "renda fixa"?',
                    opcoes: [
                        'O fato de nunca perder valor',
                        'A regra de remuneração já ser conhecida (mesmo que atrelada a um indexador) desde o momento da aplicação',
                        'Render sempre acima da inflação',
                        'Ser emitido exclusivamente pelo governo'
                    ],
                    correta: 1,
                    explicacao: 'Renda fixa significa que a lógica de cálculo do retorno é conhecida no momento da aplicação, mesmo que o valor final dependa de um indexador.'
                },
                {
                    pergunta: 'O que caracteriza a renda variável?',
                    opcoes: [
                        'O retorno depende do desempenho do ativo no mercado e não é conhecido previamente',
                        'O retorno é sempre fixo e garantido',
                        'É proibida para pessoas físicas',
                        'Nunca pode gerar prejuízo'
                    ],
                    correta: 0,
                    explicacao: 'Na renda variável, o valor do ativo oscila conforme as condições de mercado, sem uma regra de remuneração previamente definida.'
                },
                {
                    pergunta: 'Por que a renda fixa costuma ser mais indicada para a reserva de emergência?',
                    opcoes: [
                        'Porque sempre rende mais que a renda variável',
                        'Pela previsibilidade e, em muitos produtos, pela alta liquidez, características importantes para dinheiro que pode ser necessário a qualquer momento',
                        'Porque é a única opção isenta de Imposto de Renda',
                        'Porque a renda variável é proibida por lei para reservas'
                    ],
                    correta: 1,
                    explicacao: 'A previsibilidade e, em muitos casos, a liquidez diária tornam a renda fixa mais adequada para recursos que podem precisar ser resgatados rapidamente.'
                },
                {
                    pergunta: 'É correto afirmar que toda renda fixa tem risco zero?',
                    opcoes: [
                        'Sim, renda fixa nunca tem risco',
                        'Não, existem produtos de renda fixa com diferentes níveis de risco, como debêntures de empresas em dificuldade financeira',
                        'Sim, pois o governo garante todos os produtos de renda fixa',
                        'Não tem como saber'
                    ],
                    correta: 1,
                    explicacao: 'O nome "renda fixa" se refere à previsibilidade da regra de remuneração, não à ausência de risco. Existem produtos de renda fixa com risco de crédito relevante.'
                },
                {
                    pergunta: 'O que normalmente combina melhor com objetivos de longo prazo, quando há tempo para suportar oscilações?',
                    opcoes: [
                        'Apenas produtos isentos de Imposto de Renda',
                        'Exclusivamente a poupança',
                        'Uma combinação adequada de renda fixa e renda variável, conforme o perfil do investidor',
                        'Sempre 100% em renda variável, sem exceção'
                    ],
                    correta: 2,
                    explicacao: 'Carteiras bem estruturadas combinam renda fixa e variável em proporções alinhadas ao perfil de risco, prazo e objetivos do investidor.'
                }
            ]
        },
        {
            id: 'ini-4',
            titulo: 'Inflação e Poder de Compra',
            icone: '📉',
            resumo: 'Por que R$ 100 hoje não compram a mesma coisa que R$ 100 vão comprar daqui a 10 anos.',
            conteudo: `
                <h4>O que é inflação</h4>
                <p>Inflação é o aumento generalizado e contínuo dos preços de bens e serviços em uma economia ao longo do tempo. Quando a inflação está alta, o mesmo valor em dinheiro passa a comprar menos coisas do que comprava antes — em outras palavras, o <strong>poder de compra</strong> do dinheiro diminui. É por isso que um cafezinho que custava R$ 2 há alguns anos pode custar R$ 6 ou mais hoje: não é que o café "ficou mais valioso", é que o valor do dinheiro mudou.</p>
                <p>No Brasil, o índice oficial mais utilizado para medir a inflação é o <strong>IPCA</strong> (Índice Nacional de Preços ao Consumidor Amplo), calculado mensalmente pelo IBGE. É esse índice que o Banco Central usa como referência para o chamado "sistema de metas de inflação", definindo a taxa Selic com o objetivo de manter a inflação dentro de um intervalo considerado saudável para a economia.</p>

                <h4>Por que a inflação existe</h4>
                <p>A inflação pode ter diversas causas: aumento da demanda por produtos e serviços (mais gente querendo comprar a mesma quantidade de coisas, pressionando os preços para cima), aumento dos custos de produção (como insumos, energia ou mão de obra mais caros), desvalorização da moeda local frente a moedas estrangeiras (encarecendo produtos importados) e expectativas dos agentes econômicos sobre os preços futuros. Entender as causas da inflação é objeto de estudo da macroeconomia e será retomado, de forma mais aprofundada, no módulo de Cenários Macroeconômicos da trilha avançada.</p>

                <h4>O impacto da inflação sobre quem não investe</h4>
                <p>A inflação é, talvez, o argumento mais direto e concreto para a importância de investir. Dinheiro parado, sem nenhum tipo de rendimento, perde poder de compra de forma silenciosa, mas constante. Uma inflação de apenas 5% ao ano, por exemplo, reduz o poder de compra de um valor parado pela metade em aproximadamente 14 anos.</p>
                <p>Por isso, o primeiro objetivo de qualquer estratégia de investimento — antes mesmo de buscar "ganhar dinheiro" — deveria ser proteger o capital da inflação. Um investimento que rende menos do que a inflação do período está, na prática, fazendo o investidor perder dinheiro em termos reais, mesmo que o valor nominal na conta esteja aumentando.</p>

                <h4>Rentabilidade nominal x rentabilidade real</h4>
                <p>Esse é um dos conceitos mais importantes (e mais negligenciados) por investidores iniciantes: a diferença entre <strong>rentabilidade nominal</strong> (o percentual de ganho "bruto", sem descontar a inflação) e <strong>rentabilidade real</strong> (o ganho efetivo, já descontada a inflação do período). Um investimento que rendeu 10% nominal em um ano com 6% de inflação teve uma rentabilidade real de aproximadamente 3,77% (e não simplesmente 10% - 6% = 4%, pois o cálculo correto envolve uma divisão, não uma subtração simples, dado que ambos os efeitos são compostos).</p>
                <p>Sempre que alguém menciona "quanto meu investimento rendeu", vale perguntar: "isso já está descontando a inflação do período?". Comparar apenas números nominais, sem considerar a inflação, pode dar uma falsa sensação de ganho.</p>

                <h4>Investimentos que buscam proteger contra a inflação</h4>
                <p>Existem produtos financeiros desenhados especificamente para proteger o investidor da inflação, remunerando o capital com base na variação do IPCA mais uma taxa de juros real adicional. O exemplo mais conhecido é o <strong>Tesouro IPCA+</strong>, um título público que garante ao investidor um retorno acima da inflação durante todo o período da aplicação, desde que o título seja mantido até o vencimento. Esse tipo de produto costuma ser especialmente relevante para objetivos de longuíssimo prazo, como aposentadoria, em que a preservação do poder de compra ao longo de décadas é essencial.</p>

                <h4>Inflação não é igual para todo mundo</h4>
                <p>Vale destacar que o IPCA é uma média nacional, calculada a partir de uma cesta de produtos e serviços considerada representativa do consumo das famílias brasileiras. Na prática, a inflação "pessoal" de cada família pode ser diferente da média, dependendo dos hábitos de consumo: quem gasta proporcionalmente mais com saúde, educação ou alimentação, por exemplo, pode sentir uma inflação pessoal mais alta (ou mais baixa) do que o índice oficial divulgado.</p>
            `,
            termos: [
                { termo: 'IPCA', def: 'Índice Nacional de Preços ao Consumidor Amplo, o índice oficial de inflação do Brasil, calculado mensalmente pelo IBGE.' },
                { termo: 'Poder de compra', def: 'A quantidade de bens e serviços que uma determinada quantia de dinheiro consegue adquirir em um momento específico.' },
                { termo: 'Rentabilidade real', def: 'O ganho de um investimento já descontado o efeito da inflação do período, refletindo o ganho efetivo de poder de compra.' },
                { termo: 'Deflação', def: 'O movimento inverso da inflação: uma queda generalizada e persistente dos preços de bens e serviços em uma economia.' }
            ],
            exemplo: `
                <p><strong>Simulação:</strong> R$ 1.000 parados, sem nenhum rendimento, durante 10 anos, com inflação média de 5% ao ano.</p>
                <p>O valor nominal continua sendo R$ 1.000 — a quantidade de notas não muda. Mas o poder de compra desse valor, em termos do que ele compraria 10 anos atrás, cai para aproximadamente <strong>R$ 614</strong>. Ou seja, na prática, a pessoa perdeu cerca de 38,6% do seu poder de compra apenas por deixar o dinheiro parado, sem que nenhuma nota tenha "sumido" fisicamente.</p>
            `,
            erroComum: 'Comemorar a rentabilidade nominal de um investimento sem checar a inflação do mesmo período. Um CDB que rendeu 6% em um ano com inflação de 7% gerou, na prática, uma perda real de poder de compra, mesmo com o saldo em reais tendo aumentado.',
            dicaPro: 'Use a calculadora de Inflação deste portal para visualizar, de forma gráfica, como diferentes taxas de inflação corroem o poder de compra de um valor parado ao longo de diferentes prazos. Isso ajuda a entender, na prática, por que "não fazer nada" com o dinheiro também é uma decisão — e tem um custo.',
            quiz: [
                {
                    pergunta: 'O que é inflação?',
                    opcoes: [
                        'A queda do valor das ações na bolsa',
                        'O aumento generalizado e contínuo dos preços de bens e serviços ao longo do tempo',
                        'Um imposto cobrado sobre investimentos',
                        'A taxa de juros definida pelo Banco Central'
                    ],
                    correta: 1,
                    explicacao: 'Inflação é o aumento médio e persistente dos preços em uma economia, reduzindo o poder de compra da moeda ao longo do tempo.'
                },
                {
                    pergunta: 'Qual é o índice oficial de inflação mais utilizado no Brasil?',
                    opcoes: [
                        'O CDI',
                        'A Taxa Selic',
                        'O IPCA',
                        'O Ibovespa'
                    ],
                    correta: 2,
                    explicacao: 'O IPCA, calculado pelo IBGE, é o índice oficial usado como referência para o sistema de metas de inflação no Brasil.'
                },
                {
                    pergunta: 'Qual é a diferença entre rentabilidade nominal e rentabilidade real?',
                    opcoes: [
                        'Não existe diferença, são a mesma coisa',
                        'A nominal é sempre maior que a real, sem exceção',
                        'A rentabilidade real é a nominal já descontada a inflação do período, refletindo o ganho efetivo de poder de compra',
                        'A real só existe em investimentos isentos de imposto'
                    ],
                    correta: 2,
                    explicacao: 'A rentabilidade real desconta o efeito da inflação, mostrando o ganho efetivo de poder de compra, diferente da rentabilidade nominal "bruta".'
                },
                {
                    pergunta: 'Qual é um exemplo de investimento desenhado para proteger especificamente contra a inflação?',
                    opcoes: [
                        'Dinheiro guardado em espécie',
                        'Tesouro IPCA+',
                        'Conta corrente sem rendimento',
                        'Qualquer ação da bolsa, sem distinção'
                    ],
                    correta: 1,
                    explicacao: 'O Tesouro IPCA+ remunera o investidor com base na variação do IPCA mais uma taxa de juros real, protegendo o poder de compra ao longo do tempo.'
                },
                {
                    pergunta: 'Por que a inflação "pessoal" de uma família pode ser diferente da inflação oficial (IPCA)?',
                    opcoes: [
                        'Porque o IPCA é calculado apenas uma vez por década',
                        'Porque o IPCA reflete uma média de consumo, e hábitos individuais (como gastar mais com saúde ou educação) podem gerar uma inflação pessoal diferente da média',
                        'Porque cada banco tem seu próprio índice de inflação',
                        'Isso nunca acontece, a inflação é sempre igual para todos'
                    ],
                    correta: 1,
                    explicacao: 'O IPCA é uma média baseada em uma cesta representativa de consumo; hábitos individuais podem gerar uma inflação pessoal diferente da média nacional.'
                }
            ]
        },
        {
            id: 'ini-5',
            titulo: 'Perfil de Investidor (Suitability)',
            icone: '🧭',
            resumo: 'Por que o mesmo investimento pode ser ótimo para uma pessoa e péssimo para outra.',
            conteudo: `
                <h4>O que é o perfil de investidor</h4>
                <p>O <strong>perfil de investidor</strong>, também chamado de <strong>suitability</strong> (palavra em inglês que significa "adequação"), é uma classificação que busca identificar o quanto de risco uma pessoa está disposta e é capaz de assumir em seus investimentos, além de entender seus objetivos, prazos e conhecimento sobre o mercado financeiro. No Brasil, corretoras e instituições financeiras reguladas são obrigadas pela CVM (Comissão de Valores Mobiliários) a aplicar esse questionário antes de recomendar produtos de investimento aos clientes — é uma exigência regulatória, não apenas uma boa prática opcional.</p>

                <h4>As três classificações mais comuns</h4>
                <p>Embora cada instituição possa ter sua própria metodologia, a maioria classifica os investidores em três grandes perfis: <strong>conservador</strong>, <strong>moderado</strong> e <strong>arrojado</strong> (também chamado de agressivo). O perfil conservador prioriza a segurança e a previsibilidade acima do potencial de retorno, geralmente concentrando a carteira em renda fixa de baixo risco. O perfil moderado aceita um nível intermediário de risco em busca de um retorno um pouco maior, combinando renda fixa com uma parcela de renda variável. Já o perfil arrojado tem maior tolerância a oscilações e está disposto a aceitar uma parcela maior de risco e volatilidade em busca de retornos potencialmente mais altos no longo prazo.</p>

                <h4>O que influencia o perfil de cada pessoa</h4>
                <p>Diversos fatores influenciam o perfil de investidor de uma pessoa, e nenhum deles, isoladamente, deveria ser o único critério de decisão: a idade (em geral, pessoas mais jovens têm mais tempo para se recuperar de eventuais perdas, o que permite assumir mais risco), a estabilidade da renda (quem tem renda mais previsível pode, em tese, tolerar mais oscilações na carteira de investimentos), o conhecimento sobre o mercado financeiro, os objetivos específicos de cada aplicação e, claro, a tolerância emocional ao risco — ou seja, o quanto a pessoa consegue dormir tranquila vendo o valor de sua carteira oscilar para baixo no curto prazo.</p>

                <h4>Perfil de risco não é fixo para sempre</h4>
                <p>É importante entender que o perfil de investidor não é uma característica permanente e imutável. Ele pode (e deve) ser reavaliado periodicamente, conforme a vida da pessoa muda: uma mudança de emprego, o nascimento de um filho, a aproximação da aposentadoria ou simplesmente o amadurecimento do conhecimento sobre o mercado financeiro podem alterar significativamente o quanto de risco faz sentido assumir em determinado momento.</p>
                <p>Além disso, é perfeitamente possível (e até recomendável) ter objetivos diferentes com perfis de risco diferentes dentro da mesma carteira: o dinheiro reservado para a aposentadoria daqui a 30 anos pode ter um perfil mais arrojado, enquanto o dinheiro reservado para a entrada de um imóvel daqui a 2 anos provavelmente deveria seguir um perfil mais conservador, independentemente do perfil "geral" da pessoa.</p>

                <h4>Os riscos de ignorar o próprio perfil</h4>
                <p>Investir de forma desalinhada com o próprio perfil de risco costuma gerar dois tipos de problema. O primeiro é o investidor conservador que, por ansiedade ou pressão social, acaba colocando uma parcela grande do patrimônio em ativos de alto risco sem entender de verdade o que está fazendo — e entra em pânico ao primeiro sinal de queda, vendendo na pior hora possível. O segundo é o investidor arrojado que, por excesso de cautela ou desconhecimento, mantém todo o patrimônio em produtos extremamente conservadores mesmo tendo um horizonte de tempo longo e capacidade de assumir mais risco — abrindo mão, sem necessidade, de um potencial de crescimento maior no longo prazo.</p>

                <h4>Como o perfil se conecta com o restante da jornada</h4>
                <p>O perfil de investidor é a base sobre a qual praticamente todas as decisões de alocação de carteira deveriam ser construídas. É por isso que ele é o último módulo desta trilha iniciante: depois de entender o que é investir, como funcionam os juros, as diferenças entre renda fixa e variável e o impacto da inflação, o passo seguinte natural é entender qual combinação desses elementos faz sentido para a realidade específica de cada pessoa — tema que será aprofundado nos módulos de Diversificação e Alocação de Ativos, nas próximas trilhas deste portal.</p>
            `,
            termos: [
                { termo: 'Suitability', def: 'Processo (e questionário) usado para identificar o perfil de risco, objetivos e conhecimento de um investidor antes de recomendar produtos financeiros.' },
                { termo: 'Tolerância ao risco', def: 'A capacidade emocional e financeira de uma pessoa de suportar oscilações negativas no valor de seus investimentos sem tomar decisões precipitadas.' },
                { termo: 'CVM', def: 'Comissão de Valores Mobiliários, o órgão regulador do mercado de capitais brasileiro, responsável por fiscalizar e normatizar o setor.' },
                { termo: 'Perfil conservador', def: 'Classificação de investidor que prioriza segurança e previsibilidade, geralmente concentrando a carteira em renda fixa de baixo risco.' }
            ],
            exemplo: `
                <p><strong>Cenário ilustrativo:</strong> Imagine uma queda de 20% no valor de uma carteira em um único mês, por conta de uma turbulência no mercado.</p>
                <p>🔸 Um investidor com <strong>perfil conservador</strong> mal sentiria esse movimento, pois sua carteira é majoritariamente composta por renda fixa de baixa volatilidade.</p>
                <p>🔸 Um investidor com <strong>perfil arrojado</strong>, que entende seu próprio perfil e tem um horizonte de longo prazo, provavelmente entenderia essa queda como parte natural do processo, sem necessidade de vender os ativos no momento de baixa.</p>
                <p>🔸 Já um investidor com <strong>perfil conservador que, por engano, investiu como se fosse arrojado</strong>, tenderia a entrar em pânico, vender no momento de baixa e "realizar o prejuízo" — transformando uma queda temporária (no papel) em uma perda definitiva (na prática).</p>
            `,
            erroComum: 'Preencher o questionário de perfil de investidor "marcando a opção que parece mais inteligente" em vez da que reflete a realidade emocional e financeira da pessoa. Isso invalida todo o propósito da ferramenta, que é justamente alinhar expectativas e produtos à realidade de cada investidor.',
            dicaPro: 'Refaça o seu questionário de perfil de investidor pelo menos uma vez por ano, ou sempre que algo relevante mudar na sua vida financeira (novo emprego, nova dívida, novo objetivo). Um perfil desatualizado pode levar a recomendações de produtos que não fazem mais sentido para o momento atual.',
            quiz: [
                {
                    pergunta: 'O que é o "suitability" no mercado financeiro?',
                    opcoes: [
                        'Um tipo específico de fundo de investimento',
                        'O processo de identificar o perfil de risco, objetivos e conhecimento de um investidor antes de recomendar produtos',
                        'Uma taxa cobrada pelas corretoras',
                        'Um índice da bolsa de valores'
                    ],
                    correta: 1,
                    explicacao: 'Suitability é o processo (exigido pela CVM) de adequar as recomendações de investimento ao perfil real de cada investidor.'
                },
                {
                    pergunta: 'Quais são as três classificações de perfil de investidor mais comumente utilizadas?',
                    opcoes: [
                        'Iniciante, intermediário e avançado',
                        'Conservador, moderado e arrojado',
                        'Rico, médio e pobre',
                        'Jovem, adulto e idoso'
                    ],
                    correta: 1,
                    explicacao: 'As classificações mais comuns são conservador, moderado e arrojado, refletindo diferentes níveis de tolerância e capacidade de assumir risco.'
                },
                {
                    pergunta: 'O perfil de investidor de uma pessoa é permanente e nunca deve ser reavaliado?',
                    opcoes: [
                        'Sim, uma vez definido, nunca muda',
                        'Não, ele pode e deve ser reavaliado conforme a vida da pessoa e seus objetivos mudam ao longo do tempo',
                        'Só muda se a pessoa trocar de corretora',
                        'Só pode ser alterado por um juiz'
                    ],
                    correta: 1,
                    explicacao: 'Mudanças de vida (emprego, família, objetivos) podem alterar significativamente o perfil de risco adequado para cada momento.'
                },
                {
                    pergunta: 'É possível ter objetivos diferentes com perfis de risco diferentes dentro da mesma carteira pessoal?',
                    opcoes: [
                        'Não, todo o patrimônio precisa seguir exatamente o mesmo perfil',
                        'Sim — por exemplo, a reserva de emergência pode ser mais conservadora, enquanto o dinheiro da aposentadoria, com prazo mais longo, pode ser mais arrojado',
                        'Isso é proibido pela CVM',
                        'Só é permitido para investidores institucionais'
                    ],
                    correta: 1,
                    explicacao: 'É comum e recomendável combinar perfis diferentes para objetivos diferentes dentro da mesma carteira pessoal, conforme o prazo e a finalidade de cada parcela do dinheiro.'
                },
                {
                    pergunta: 'Qual é um risco comum de um investidor conservador que, por pressão ou ansiedade, investe como se fosse arrojado?',
                    opcoes: [
                        'Ele sempre ganha mais dinheiro nesse caso',
                        'Ele tende a entrar em pânico durante quedas de mercado e vender no pior momento, transformando uma perda temporária em definitiva',
                        'Não existe nenhum risco nessa situação',
                        'Ele automaticamente se torna um investidor arrojado de verdade'
                    ],
                    correta: 1,
                    explicacao: 'Investir de forma desalinhada com a própria tolerância emocional ao risco aumenta a chance de decisões precipitadas durante momentos de volatilidade.'
                }
            ]
        }
    ]
};
