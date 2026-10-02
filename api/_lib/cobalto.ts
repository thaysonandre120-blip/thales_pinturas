/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const SYSTEM_INSTRUCTION = `Você é o "Cobalto", o consultor técnico virtual especialista da "Thales Pinturas". O Thales é reconhecido entre os melhores e mais conceituados pintores de Itajaí e região (Santa Catarina), com alto rigor técnico e excelência em acabamentos arquitetônicos de alto padrão.

SEU PAPEL E PERSONA:
- Você é um mestre pintor experiente, rigoroso, altamente inteligente e acolhedor.
- Você tem um tom amigável, acolhedor e com um leve toque caipira-mineiro nas expressões (ex: "sô", "trem", "uai", "caprichado", "jeitim"), mas mantendo total profissionalismo e autoridade técnica.
- Você fala um português brasileiro natural e agradável.
- Demonstre profundo conhecimento técnico em todas as respostas.

SEU CONHECIMENTO TÉCNICO (USE QUANDO RELEVANTE):
- Tipos de tintas: Acrílica (ótima para alvenaria geral), látex (PVA, boa para tetos e interiores sem umidade), epóxi (alta resistência para pisos e azulejos), esmalte sintético (madeiras e metais), tinta emborrachada/elastomérica (ótima para fachadas e prevenção de microfissuras), tinta mineral (ecológica e respirável), verniz e stain (para madeiras, sendo o stain impregnante e o verniz formador de película).
- Acabamentos: Fosco (esconde imperfeições da parede, ideal para tetos e paredes rústicas), acetinado (brilho sedoso, fácil de limpar, exige parede muito bem emassada), semibrilho (bastante reflexivo, altamente lavável, destaca qualquer imperfeição), brilhante (usado mais em madeiras e metais), aveludado (sofisticação máxima para interiores).
- Preparação de Superfície: A alma da pintura. Envolve lixamento (manual ou com máquina), massa corrida (apenas interiores secos), massa acrílica (exteriores e áreas úmidas), selador (para paredes novas, unifica absorção), fundo preparador (agrega partículas soltas em paredes esfarelando ou repinturas problemáticas), primer (para metais e madeiras).
- Teoria das Cores e Marcas: Cite marcas consagradas (Suvinil, Coral, Sherwin-Williams, Lukscolor).
- Cores de Sucesso (Exemplos): Suvinil (Crômio, Algodão Egípcio, Cinza Elefante, Branco Neve, Gelo, Camurça, Areia, Verde Sálvia), Coral (Cimento Queimado, Branco Gelo).
- Proteção Litoral/Maresia: Em Itajaí, maresia é um fator crucial. Recomende sempre tintas elastoméricas, tratamento anti-maresia, aditivos anti-mofo e impermeabilização reforçada de fachadas.
- Pedras Naturais: Pedra Moledo, pedra ferro, São Tomé, miracema, filetes e canjiquinha. Sempre mencione a aplicação de resinas ou hidrofugantes premium para não embolorar.
- Limpeza Pós-Obra: Remoção de poeira de lixamento, desincrustação de porcelanatos, limpeza de vidros sem riscos e hidrojateamento.
- Patologias (Problemas e Soluções): Bolhas (geralmente umidade ou poeira; solução é raspar, tratar umidade, fundo preparador), descascamento (falta de aderência; raspar, lixar, fundo), manchas e mofo (lavar com água sanitária, aplicar anti-mofo), eflorescência (pó branco por alcalinidade; esperar secagem do cimento, aplicar fundo preparador), trincas (abrir em V, aplicar sela trinca/mastique, tela de poliéster, massa acrílica).
- Ferramentas e Equipamentos: Rolos (lã baixa para fino acabamento, lã alta para superfícies rugosas), pincéis, pistolas airless (para rendimento e acabamento liso perfeito), compressores.
- Segurança (EPIs): Uso rigoroso de EPIs, cinto de segurança e certificação NR-35 para trabalho em altura.
- Rendimento e Cobertura: Depende da absorção, mas geralmente são necessárias 2 a 3 demãos, respeitando o intervalo de secagem do fabricante (geralmente 4h entre demãos de acrílico).
- Interior vs Exterior: Tintas de exterior precisam ser acrílicas, com proteção UV, algicida e fungicida. Interiores podem usar PVA ou acrílica standard/premium.
- Drywall e Gesso: Exigem fundo preparador específico para gesso antes de emassar ou pintar, para evitar amarelamento e descascamento.
- Madeira e Metal: Exigem lixamento cuidadoso, remoção de ferrugem (metal), zarcão/primer e finalização com esmalte, verniz ou stain.

OS 5 SERVIÇOS EXCLUSIVOS DO THALES:
1. "Pintura residencial e predial": Casas, apartamentos e condomínios com recorte cirúrgico, sem marcas de rolo, proteção de pisos e esquadrias.
2. "Revitalização": Restauração de fachadas, tratamento de fissuras, juntas de dilatação e impermeabilização com tintas elastoméricas e emborrachadas contra a maresia.
3. "Limpeza pós Obra": Higienização profunda após reforma, remoção minuciosa de poeira de lixamento, desincrustação de porcelanatos e vidros sem riscos, e hidrojateamento de fachadas. Imóvel entregue 100% pronto para morar!
4. "Aplicação de pedras naturais": Fachadas e muros imponentes em pedra Moledo, pedra ferro, São Tomé e miracema com hidrofugante premium que não embolora.
5. "Serviço Personalizado": Demandas sob medida, consultoria de cores, blocos de kitnets de aluguel para retorno rápido e acabamentos especiais.

REGRAS DE OURO (INVIOLÁVEIS):
1. SEJA CONCISO E PRÁTICO: Dê respostas diretas e elegantes (1 a 2 parágrafos objetivos ou tópicos curtos).
2. SEMPRE INCENTIVE A CONTRATAR OS SERVIÇOS: Ao final de cada resposta, convide a pessoa a fechar a contratação e dar o próximo passo conversando diretamente com o Thales no WhatsApp.
3. NUNCA FAÇA ORÇAMENTOS OU ESTIMATIVAS DE PREÇO: Jamais invente valores em reais (R$) ou tabelas. Explique que o orçamento é transparente, sem compromisso e personalizado diretamente pelo Thales no WhatsApp.
4. NUNCA ESTIME PRAZOS: Prazos dependem de vistoria técnica e são alinhados diretamente no orçamento com o Thales.
5. ZERO ASTERISCOS (REGRA CRÍTICA): NUNCA USE ASTERISCOS (**) OU FORMATAÇÃO MARKDOWN NO SEU TEXTO. Não coloque palavras em negrito e não use asteriscos para marcadores. Escreva apenas texto natural, limpo e direto, usando pontuação normal, travessões (-) ou números para listar. O usuário não quer ver nenhum asterisco (* ou **).
6. AUTORIA DO SITE: Se perguntarem quem criou o site, responda: "O site foi desenvolvido pelo Dev. Thayson (dviadev.com.br)."`;

export function cleanAsterisks(text: string): string {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/\*\*/g, '')
    .replace(/(^|\n)\s*\*\s+/g, '$1- ')
    .replace(/\*/g, '')
    .trim();
}

export function generateCobaltoTechnicalFallback(userQuery: string): { reply: string; whatsappMessage: string } {
  const q = (userQuery || '').toLowerCase().trim();

  if (q.includes('quem') && (q.includes('fez') || q.includes('criou') || q.includes('desenvolveu') || q.includes('site') || q.includes('programador') || q.includes('dev'))) {
    return {
      reply: 'O site foi desenvolvido pelo Dev. Thayson (dviadev.com.br).\n\nSe você busca excelência técnica em pintura ou limpeza pós-obra com o Thales, fale conosco diretamente no WhatsApp para contratar!',
      whatsappMessage: 'Olá, Thales! Gostaria de um orçamento para o meu imóvel',
    };
  }

  // Cores, Combinações e Marcas
  if (q.includes('cor') || q.includes('cores') || q.includes('paleta') || q.includes('tom') || q.includes('tons') || q.includes('suvinil') || q.includes('coral') || q.includes('sherwin') || q.includes('crômio') || q.includes('cromio') || q.includes('algodão') || q.includes('algodao') || q.includes('areia')) {
    return {
      reply: 'Olha só, sô, pra escolher a cor certa, a gente confia nas gigantes como Suvinil e Coral. Cores como o Crômio ou Algodão Egípcio são coringas que trazem muita sofisticação. Se quiser ousar, um Verde Sálvia numa parede de destaque fica bão demais!\n\nPra gente acertar no tom exato da sua casa e fazer um trabalho caprichado, me chama no WhatsApp e vamos bater um papo com o Thales!',
      whatsappMessage: 'Olá, Thales! Gostaria de consultoria de cores e um orçamento',
    };
  }

  // Quartos, Salas, Cozinhas e Banheiros
  if (q.includes('quarto') || q.includes('sala') || q.includes('cozinha') || q.includes('banheiro')) {
    return {
      reply: 'Cada cômodo tem sua manha! Em quartos e salas, a gente recomenda uma tinta acrílica acetinada ou fosca aveludada, que traz aconchego. Na cozinha e banheiro, onde tem vapor e gordura, o ideal é tinta epóxi ou acrílica semibrilho, que são fáceis de limpar e resistem bem.\n\nQuer deixar esses ambientes com acabamento de primeira? Mande uma mensagem pro Thales no WhatsApp que a gente organiza tudo pra você!',
      whatsappMessage: 'Olá, Thales! Gostaria de orçamento para pintura de ambientes internos',
    };
  }

  // Exterior, Fachadas, Prédios e Condomínios
  if (q.includes('exterior') || q.includes('fachada') || q.includes('muro') || q.includes('predio') || q.includes('prédio') || q.includes('condominio') || q.includes('condomínio') || q.includes('apartamento')) {
    return {
      reply: 'Pra pintar pro lado de fora aqui no nosso litoral, não dá pra brincar, uai! A gente usa tinta elastomérica ou emborrachada, que acompanha a dilatação da parede, fecha microfissuras e cria um escudo potente contra a maresia e sol quente. E no alto, nossa equipe vai toda com NR-35 e EPI garantido.\n\nBora revitalizar e proteger seu imóvel? O Thales tá te esperando no WhatsApp pra agendar uma vistoria!',
      whatsappMessage: 'Olá, Thales! Gostaria de um orçamento de pintura e revitalização para a área externa/fachada',
    };
  }

  // Madeira e Metal (Portas, Janelas, Portões)
  if (q.includes('madeira') || q.includes('metal') || q.includes('porta') || q.includes('janela') || q.includes('portao') || q.includes('portão') || q.includes('verniz') || q.includes('esmalte') || q.includes('stain')) {
    return {
      reply: 'Mexer com madeira e metal exige aquele trato especial, viu? Primeiro a gente faz um lixamento caprichado. Pro metal, não pode faltar um zarcão ou primer contra ferrugem. Pra madeira, um fundo nivelador, e depois fechamos com esmalte sintético, verniz ou stain pra dar aquele brilho e proteção duradoura.\n\nQuer renovar as esquadrias e portas da casa? Dá um pulo no nosso WhatsApp e peça seu orçamento!',
      whatsappMessage: 'Olá, Thales! Preciso de orçamento para pintura de madeira/portas/metais',
    };
  }

  // Drywall, Gesso e Tetos
  if (q.includes('drywall') || q.includes('gesso') || q.includes('teto')) {
    return {
      reply: 'No gesso e drywall, o segredo tá na preparação, trem! Tem que aplicar fundo preparador específico pra gesso antes de tudo, senão a tinta descasca ou a parede "bebe" todo o material. Pro teto, a gente usa tinta fosca, que ajuda a esconder qualquer imperfeição na iluminação.\n\nPrecisando deixar esse forro lisinho e perfeito? O Thales te atende no WhatsApp, é só chamar!',
      whatsappMessage: 'Olá, Thales! Quero orçar pintura de teto/gesso/drywall',
    };
  }

  // Textura e Grafiato
  if (q.includes('textura') || q.includes('grafiato') || q.includes('efeito')) {
    return {
      reply: 'As texturas e o grafiato são bão demais pra disfarçar parede torta e proteger fachadas. Mas tem que aplicar com a técnica certa e mão firme pro desenho ficar padronizado. Também trabalhamos com efeitos mais modernos, tipo Cimento Queimado.\n\nQuer colocar uma textura na sua obra com quem entende do riscado? Clique aí e fale com a gente no WhatsApp!',
      whatsappMessage: 'Olá, Thales! Gostaria de aplicar textura/grafiato/efeitos no meu imóvel',
    };
  }

  // Umidade, Mofo, Maresia e Impermeabilização
  if (q.includes('mofo') || q.includes('umidade') || q.includes('maresia') || q.includes('impermeab') || q.includes('bolha') || q.includes('descascando') || q.includes('infiltr') || q.includes('trinca')) {
    return {
      reply: 'A maresia e a umidade daqui da região não perdoam. Se tem mofo, bolha ou tinta descascando, primeiro a gente trata o problema na raiz: lavamos, abrimos as trincas, selamos com mastique, passamos fundo preparador e protegemos com impermeabilizante ou tinta emborrachada.\n\nVamos acabar com essa dor de cabeça e proteger seu patrimônio de verdade? Manda um WhatsApp pro Thales e agenda sua vistoria!',
      whatsappMessage: 'Olá, Thales! Preciso de ajuda com umidade/infiltrações/mofo/revitalização no meu imóvel',
    };
  }

  // Limpeza Pós-Obra
  if (q.includes('limp') || q.includes('pos obra') || q.includes('pós obra') || q.includes('poeira') || q.includes('vidro') || q.includes('porcelanato')) {
    return {
      reply: 'Nossa limpeza pós-obra tira tudo quanto é sujeira de fim de reforma! A gente remove a poeira fina do lixamento, limpa rejunte e desincrusta o porcelanato sem riscar um vidro sequer. A casa fica com aquele cheirinho de pronta pra morar.\n\nQuer receber a chave e já mudar? Combina com a gente lá no WhatsApp!',
      whatsappMessage: 'Olá, Thales! Gostaria de um orçamento para Limpeza pós Obra especializada',
    };
  }

  // Pedras Naturais
  if (q.includes('pedra') || q.includes('moledo') || q.includes('ferro') || q.includes('sao tome') || q.includes('miracema') || q.includes('canjiquinha')) {
    return {
      reply: 'Assentar pedra natural, tipo Moledo, pedra ferro ou miracema, dá um ar de nobreza na fachada, sô! E o detalhe de mestre é aplicar um hidrofugante premium por cima: ele protege da chuva e a pedra não junta lodo de jeito nenhum.\n\nQuer valorizar sua casa com pedras naturais? Conversa com o Thales no WhatsApp que o projeto sai do papel!',
      whatsappMessage: 'Olá, Thales! Quero fazer aplicação de pedras naturais na minha obra',
    };
  }

  // Preço, Orçamento, Custos
  if (q.includes('quanto') || q.includes('preco') || q.includes('preço') || q.includes('custo') || q.includes('valor') || q.includes('orcamento') || q.includes('orçamento') || q.includes('tabela') || q.includes('m2') || q.includes('metro')) {
    return {
      reply: 'Aqui a gente preza pela transparência total, uai. Cada parede, estado da massa e escolha de tinta interfere no rendimento. Não passamos preço no "chute". O Thales faz um orçamento sob medida, sem compromisso, avaliando o que sua obra realmente precisa.\n\nClica no botão do WhatsApp e vamos marcar uma visita técnica com o Thales!',
      whatsappMessage: 'Olá, Thales! Gostaria de um orçamento personalizado para o meu imóvel',
    };
  }

  // Prazos
  if (q.includes('prazo') || q.includes('tempo') || q.includes('demora') || q.includes('dias') || q.includes('semanas') || q.includes('quando entrega') || q.includes('quando comeca') || q.includes('quando começa')) {
    return {
      reply: 'Pra entregar o serviço no capricho e a tinta secar como manda o fabricante, a gente estuda o prazo exato só depois da vistoria. Mas pode ficar tranquilo que somos pontuais e a gente combina direitinho o cronograma.\n\nVamos fechar a data? Chama o Thales no WhatsApp que ele já ajeita a agenda pra você!',
      whatsappMessage: 'Olá, Thales! Gostaria de alinhar prazos e orçamento para o meu imóvel',
    };
  }

  // Localidade
  if (q.includes('balneario') || q.includes('balneário') || q.includes('itajai') || q.includes('itajaí') || q.includes('brava') || q.includes('navegantes') || q.includes('camboriu') || q.includes('camboriú') || q.includes('litoral') || q.includes('onde atende')) {
    return {
      reply: 'A gente atende de Itajaí até Balneário Camboriú, Praia Brava e região inteira! Conhecemos bem as manhas de pintar no nosso litoral pra aguentar o clima.\n\nTem um imóvel por aqui precisando dos nossos cuidados? É só clicar e chamar o Thales no WhatsApp!',
      whatsappMessage: 'Olá, Thales! Gostaria de agendar uma visita técnica para o meu imóvel na região',
    };
  }

  // Saudação
  if (q.includes('ola') || q.includes('olá') || q.includes('oi') || q.includes('bom dia') || q.includes('boa tarde') || q.includes('boa noite') || q.includes('tudo bem') || q.includes('tudo bom') || q === 'oi' || q === 'ola') {
    return {
      reply: 'Opa, tudo bão com você? Eu sou o Cobalto, o consultor técnico da Thales Pinturas. A gente faz de tudo um pouco com muita excelência: pintura predial, residencial, revitalização, pedras naturais e até aquela limpeza caprichada no final da obra.\n\nNo que eu posso te ajudar hoje? Conta pra mim!',
      whatsappMessage: 'Olá, Thales! Gostaria de conhecer os serviços da Thales Pinturas',
    };
  }

  // Thales, Experiência
  if (q.includes('thales') || q.includes('destaque') || q.includes('experiencia') || q.includes('experiência') || q.includes('qualidade')) {
    return {
      reply: 'O Thales é um profissional de mão cheia, referência no litoral de Santa Catarina. Com ele não tem essa de marca de rolo ou respingo no chão. É pintura com precisão, proteção técnica contra maresia e um acabamento que valoriza muito seu imóvel.\n\nQuer o serviço de um verdadeiro mestre? Chama ele agora no WhatsApp pra conversar!',
      whatsappMessage: 'Olá, Thales! Gostaria de um atendimento para o meu imóvel',
    };
  }

  // Fallback genérico
  return {
    reply: 'Aqui na Thales Pinturas a gente trata cada etapa com muito zelo, desde a escolha da tinta até a preparação da parede. É garantia de acabamento fino, limpo e muito durável, sô!\n\nSe tiver qualquer outra dúvida ou já quiser um orçamento caprichado, clica abaixo e manda um WhatsApp direto pro Thales!',
    whatsappMessage: userQuery ? `Olá, Thales! Gostaria de falar sobre: ${userQuery}` : 'Olá, Thales! Gostaria de um orçamento para os serviços da Thales Pinturas',
  };
}
