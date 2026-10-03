/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SiteConfig {
  name: string;
  brandTag: string;
  companyName: string;
  badge: string;
  phoneDisplay: string;
  whatsappNumber: string; // international digits without + or spaces
  instagramUrl: string;
  instagramHandle: string;
  youtubeUrl: string; // If empty string, automatically hidden
  city: string;
  state: string;
  serviceRegions: string[];
  metaDescription: string;
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  image: string;
  deadlineNotice: string; // "Conforme orçamento com o profissional"
  isSpecialHighlight?: boolean;
  badgeText?: string;
  whatsappMessage: string;
  complementaryImages?: string[];
  certification?: {
    title: string;
    issuer: string;
    date: string;
    image: string;
  };
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

export interface WorkProject {
  id: string;
  title: string;
  category: 'Residencial' | 'Predial' | 'Comercial' | 'Pedras Naturais' | 'Limpeza & Pós-Obra';
  location: string;
  year: string;
  description: string;
  image: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number; // 1 - 5
  source: 'Google' | 'Instagram' | 'WhatsApp';
  verified: boolean;
}

/* ==========================================================================
   CONFIGURAÇÃO PRINCIPAL DO SITE (Edite os dados aqui com facilidade)
   ========================================================================== */

export const SITE_CONFIG: SiteConfig = {
  name: 'Thales Pinturas',
  brandTag: 'Pintura Residencial, Comercial & Pós-Obra',
  companyName: 'Thales Pinturas',
  badge: 'Eleito Top 3 Pintores do Brasil (ABRAPP / MBPM - Julho 2026)',
  phoneDisplay: '(47) 99100-6754',
  whatsappNumber: '5547991006754', // WhatsApp oficial da logo
  instagramUrl: 'https://www.instagram.com/jthales_pinturas?stkn=MTA2emZyNWRrNHNpZw==',
  instagramHandle: '@jthales_pinturas',
  youtubeUrl: '', // Se deixar vazio (""), o botão do YouTube é ocultado automaticamente
  city: 'Itajaí',
  state: 'SC',
  serviceRegions: [
    'Litoral Norte (Itajaí, Balneário Camboriú, Navegantes, Penha, Piçarras, Itapema)',
    'Vale do Itajaí (Blumenau, Gaspar, Brusque e região)',
    'Norte Catarinense (Joinville, Barra Velha, Araquari e região)',
    'Consulte a disponibilidade para a sua cidade',
  ],
  metaDescription: 'J. Thales Pinturas & Limpeza: Eleito entre os 3 Melhores Pintores do Brasil (ABRAPP / MBPM - Julho 2026). Pintura residencial, predial, pedras naturais e limpeza pós-obra em Itajaí - SC.',
  stats: [
    {
      value: 'Top 3',
      label: 'Melhores do Brasil',
      sublabel: 'Prêmio Pintor Destaque Nacional ABRAPP & MBPM (Julho 2026)',
    },
    {
      value: '12+',
      label: 'Anos de Experiência',
      sublabel: 'Tradição e domínio das melhores técnicas',
    },
    {
      value: '380+',
      label: 'Obras Realizadas',
      sublabel: 'Residências, prédios, kitnets e limpezas pós-obra',
    },
    {
      value: '100%',
      label: 'Pronto para Uso',
      sublabel: 'Pintura e limpeza pós-obra completa sem sujeira',
    },
  ],
};

/* ==========================================================================
   DADOS OFICIAIS DO PRÊMIO PINTOR DESTAQUE (ABRAPP / MBPM)
   ========================================================================== */

export interface AwardInfo {
  title: string;
  subtitle: string;
  edition: string;
  monthYear: string;
  nomineeName: string;
  nomineeBrand: string;
  description: string;
  organizations: {
    name: string;
    acronym: string;
    url: string;
    description: string;
  }[];
  finalists: {
    name: string;
    isThales: boolean;
    role: string;
  }[];
}

export const OFFICIAL_AWARD_DATA: AwardInfo = {
  title: 'Prêmio Pintor Destaque',
  subtitle: 'Eleito Entre os 3 Melhores Pintores do Brasil',
  edition: 'Votação Oficial Nacional',
  monthYear: 'Julho de 2026',
  nomineeName: 'Thales',
  nomineeBrand: 'JThalis Pinturas',
  description:
    'Consagrado em votação oficial promovida pelas duas maiores entidades representativas da categoria no país: o Movimento Brasil Por Um Pintor Melhor (MBPM) e a Associação Brasileira dos Pintores Profissionais (ABRAPP). Reconhecimento público de rigor técnico, segurança no canteiro de obras e acabamento arquitetônico.',
  organizations: [
    {
      name: 'Movimento Brasil Por Um Pintor Melhor',
      acronym: 'MBPM',
      url: 'https://www.facebook.com/movimentobrasilporumpintormelhor/?locale=pt_BR',
      description: 'Movimento nacional de capacitação, ética e valorização dos pintores profissionais no Brasil.',
    },
    {
      name: 'Associação Brasileira dos Pintores Profissionais',
      acronym: 'ABRAPP',
      url: 'https://www.pintorabrapp.com.br/sobre',
      description: 'Entidade oficial sem fins lucrativos que regulamenta, qualifica e representa os mestres de pintura em todo o território nacional.',
    },
  ],
  finalists: [
    {
      name: 'JTHALIS PINTURAS',
      isThales: true,
      role: 'Finalista Nacional Eleito',
    },
    {
      name: 'ZAK LIMA',
      isThales: false,
      role: 'Finalista Nacional',
    },
    {
      name: '3M PINTURAS',
      isThales: false,
      role: 'Finalista Nacional',
    },
  ],
};

/* ==========================================================================
   SERVIÇOS EM DESTAQUE (Pintura, Limpeza Predial/Pós-Obra e Pedras Naturais)
   ========================================================================== */

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'pintura-residencial-predial',
    number: '01',
    title: 'Pintura residencial e predial',
    subtitle: 'Casas, sobrados, apartamentos e edifícios com acabamento primoroso',
    shortDescription: 'Preparação técnica de alvenaria com lixamento aspirado, corte cirúrgico e tintas nobres de alta durabilidade para ambientes internos e fachadas.',
    fullDescription: 'Atendimento completo para residências e condomínios em Itajaí e região. Aplicação de massas especiais, fundos bloqueadores e tintas acetinadas ou foscas nobres, assegurando toque aveludado, recortes retos em rodapés e durabilidade contra o mofo e maresia.',
    highlights: ['Isolamento total de pisos e esquadrias', 'Acabamento acetinado sem marcas de rolo', 'Pintura interna, portas, sancas e fachadas'],
    image: '/obras/pintura-residencial-azul.jpg',
    deadlineNotice: 'Prazo: Conforme orçamento com o profissional',
    whatsappMessage: 'Olá, Thales! Gostaria de um orçamento para Pintura residencial e predial.',
  },
  {
    id: 'revitalizacao',
    number: '02',
    title: 'Revitalização & Trabalho em Altura',
    subtitle: 'Restauração de fachadas, recuperação de alvenarias e pintura predial segura',
    shortDescription: 'Tratamento de trincas, recuperação de paredes castigadas pelo tempo e impermeabilização com tintas elastoméricas e hidrorrepelentes.',
    fullDescription: 'Recuperação estética e estrutural de imóveis desgastados pelo sol e pela umidade litorânea. Equipe habilitada para trabalhos em altura com segurança máxima e aplicação de tintas emborrachadas de alta tecnologia.',
    highlights: ['Trabalho em altura com segurança (Cadeirinha)', 'Tratamento rigoroso de fissuras e infiltrações', 'Proteção avançada contra maresia e umidade'],
    image: '/obras/equipe-seguranca-nr35.jpg',
    complementaryImages: ['/obras/trabalho-altura-fachada.jpg'],
    certification: {
      title: 'Capacitação Periódica NR-35 - Trabalho em Altura',
      issuer: 'SRC',
      date: '12 de dezembro de 2024',
      image: '/obras/certificado-nr35.jpg'
    },
    deadlineNotice: 'Prazo: Conforme orçamento com o profissional',
    whatsappMessage: 'Olá, Thales! Gostaria de um orçamento para Revitalização.',
  },
  {
    id: 'limpeza-pos-obra',
    number: '03',
    title: 'Limpeza pós Obra',
    subtitle: 'Higienização profunda pós-reforma, desincrustação e entrega pronto para morar',
    shortDescription: 'O Thales entrega a obra pronta: remoção de poeira de lixamento, desincrustação de pisos e vidros sem riscos e hidrojateamento.',
    fullDescription: 'Diferencial exclusivo do Thales: você não precisa contratar outra equipe para limpar a sujeira. Limpeza grossa e fina, remoção de respingos de massa sem riscar porcelanatos ou esquadrias pretas, e vidros brilhando.',
    highlights: ['Remoção de poeira fina e resíduos de lixamento', 'Desincrustação de porcelanatos e vidros sem riscos', 'Lavagem e hidrojateamento técnico', 'Imóvel entregue 100% pronto para morar'],
    image: '/obras/hall-predial-limpeza.jpg',
    deadlineNotice: 'Prazo: Conforme orçamento com o profissional',
    whatsappMessage: 'Olá, Thales! Gostaria de um orçamento para Limpeza pós Obra.',
  },
  {
    id: 'revitalizacao-fachadas',
    number: '04',
    title: 'Revitalização de Fachadas',
    subtitle: 'Modernização, estética e proteção para o exterior do seu imóvel',
    shortDescription: 'Renovação completa da fachada, com correção de imperfeições e aplicação de acabamento premium.',
    fullDescription: 'A fachada é o cartão de visitas da sua casa. Realizamos o tratamento completo de fissuras, descascamentos e umidade, seguido de pintura com tintas de alta resistência que garantem um visual moderno, limpo e protegido contra o clima.',
    highlights: ['Tratamento de fissuras e impermeabilização', 'Acabamento premium moderno e liso', 'Tintas de alta resistência (UV e anti-mofo)'],
    image: '/obras/fachada-residencial-moderna.jpg',
    deadlineNotice: 'Prazo: Conforme orçamento com o profissional',
    isSpecialHighlight: true,
    badgeText: 'Especialidade Nobre & Arquitetônica',
    whatsappMessage: 'Olá, Thales! Gostaria de um orçamento para Revitalização de Fachadas.',
  },
  {
    id: 'servico-personalizado',
    number: '05',
    title: 'Serviço Personalizado',
    subtitle: 'Projetos sob medida, cores exclusivas, kitnets de aluguel e demandas especiais',
    shortDescription: 'Solução flexível adaptada à sua necessidade: desde pintura para locação rápida de kitnets até consultoria de cores e acabamentos específicos.',
    fullDescription: 'Atendimento sob medida para clientes exigentes e investidores. Se sua obra requer um planejamento fora do padrão, consultoria técnica de tintas especiais ou cronograma diferenciado, o Thales desenvolve a solução ideal.',
    highlights: ['Planejamento sob medida para o seu imóvel', 'Consultoria técnica de cores e produtos', 'Agilidade para investidores e prazos dedicados'],
    image: '/obras/area-lazer-deck-piscina.jpg',
    deadlineNotice: 'Prazo: Conforme orçamento com o profissional',
    whatsappMessage: 'Olá, Thales! Gostaria de um orçamento para Serviço Personalizado.',
  },
];

/* ==========================================================================
   COMPARAÇÕES ANTES E DEPOIS (Slider interativo)
   ========================================================================== */

export const BEFORE_AFTER_DATA: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    title: 'Recuperação & Pintura de Alvenaria Residencial',
    category: 'Pintura Residencial',
    location: 'Bairro Fazenda, Itajaí – SC',
    description: 'Recuperação de paredes com intempéries, aplicação de selador acrílico e acabamento em azul vibrante com corte reto e sem marcas.',
    beforeImage: '/obras/fachada-residencial-moderna.jpg',
    afterImage: '/obras/pintura-residencial-azul.jpg',
    beforeLabel: 'Antes (Paredes em Preparo)',
    afterLabel: 'Depois (Pintura Nova J. Thales)',
  },
  {
    id: 'ba-2',
    title: 'Limpeza Pós-Obra: Da Reforma ao Piso Limpo',
    category: 'Limpeza Predial & Pós-Obra',
    location: 'Centro, Itajaí – SC',
    description: 'Remoção minuciosa de poeira de lixamento, desincrustação técnica de porcelanato em mármore e higienização completa de esquadrias entregues pelo Thales.',
    beforeImage: '/obras/equipe-seguranca-nr35.jpg',
    afterImage: '/obras/hall-predial-limpeza.jpg',
    beforeLabel: 'Durante (Equipe em Ação)',
    afterLabel: 'Depois (Pós-Obra Limpo J. Thales)',
  },
  {
    id: 'ba-3',
    title: 'Acabamento de Área de Lazer Residencial',
    category: 'Serviço Personalizado',
    location: 'Cordeiros, Itajaí – SC',
    description: 'Pintura completa de paredes, acabamento de deck em madeira e entrega do espaço de lazer pronto para uso.',
    beforeImage: '/obras/corredor-interno-acabamento.jpg',
    afterImage: '/obras/area-lazer-deck-piscina.jpg',
    beforeLabel: 'Antes (Acabamento Interno)',
    afterLabel: 'Depois (Área de Lazer Concluída)',
  },
];

/* ==========================================================================
   OBRAS REALIZADAS (Galeria com filtros e lightbox)
   ========================================================================== */

export const WORKS_DATA: WorkProject[] = [
  {
    id: 'work-1',
    title: 'Pintura Residencial & Recuperação Externa',
    category: 'Residencial',
    location: 'Bairro Fazenda, Itajaí – SC',
    year: '2025',
    description: 'Pintura externa completa em alvenaria residencial com tintas impermeabilizantes emborrachadas e isolamento de calçadas. Acabamento azul vibrante com proteção contra intempéries.',
    image: '/obras/pintura-residencial-azul.jpg',
    badge: 'Obra Concluída',
  },
  {
    id: 'work-2',
    title: 'Limpeza Pós-Obra Fina em Condomínio',
    category: 'Limpeza & Pós-Obra',
    location: 'Centro, Itajaí – SC',
    year: '2025',
    description: 'Higienização profunda pós-reforma: aspiração de pó fino de lixamento, desincrustação de pisos em mármore e vidros sem deixar riscos. Entrega impecável.',
    image: '/obras/hall-predial-limpeza.jpg',
    badge: 'Pós-Obra Entregue',
  },
  {
    id: 'work-3',
    title: 'Revitalização Predial em Altura',
    category: 'Predial',
    location: 'Centro, Itajaí – SC',
    year: '2025',
    description: 'Revitalização de fachada predial com equipe preparada para trabalho em altura, impermeabilização elastomérica contra maresia e tratamento de trincas.',
    image: '/obras/equipe-seguranca-nr35.jpg',
    badge: 'Predial',
  },
  {
    id: 'work-4',
    title: 'Fachada Residencial Moderna',
    category: 'Residencial',
    location: 'Bairro Ressacada, Itajaí – SC',
    year: '2025',
    description: 'Pintura de fachada residencial moderna com acabamento cinza e branco, proteção impermeabilizante e recorte cirúrgico.',
    image: '/obras/fachada-residencial-moderna.jpg',
    badge: 'Fachada Premium',
  },
  {
    id: 'work-5',
    title: 'Área de Lazer com Deck & Pintura',
    category: 'Residencial',
    location: 'Cordeiros, Itajaí – SC',
    year: '2025',
    description: 'Pintura e acabamento completo de área de lazer residencial com deck em madeira e paredes em tons neutros. Imóvel entregue pronto para uso.',
    image: '/obras/area-lazer-deck-piscina.jpg',
    badge: 'Área de Lazer',
  },
  {
    id: 'work-6',
    title: 'Limpeza Predial & Acabamento de Corredor',
    category: 'Limpeza & Pós-Obra',
    location: 'Balneário Camboriú / Itajaí',
    year: '2025',
    description: 'Pintura interna predial com acabamento em cinza e branco, portas laqueadas e limpeza pós-obra completa de pisos e esquadrias.',
    image: '/obras/corredor-interno-acabamento.jpg',
    badge: 'Limpeza Predial',
  },
];

/* ==========================================================================
   DEPOIMENTOS / AVALIAÇÕES (Controladas pelo proprietário)
   Obs: Se o array estiver vazio [], a seção inteira desaparece no site.
   ========================================================================== */

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'dep-1',
    name: '@duduparaiba7',
    role: 'Cliente',
    location: 'Itajaí – SC',
    text: 'Ele é bom de verdade 👏👏👏👏',
    rating: 5,
    source: 'Instagram',
    verified: true,
  },
  {
    id: 'dep-2',
    name: '@leandro_pinturasmt',
    role: 'Profissional do ramo',
    location: 'Itajaí – SC',
    text: 'Bom trabalho Thales',
    rating: 5,
    source: 'Instagram',
    verified: true,
  },
  {
    id: 'dep-3',
    name: '@rogeriobernardo901',
    role: 'Cliente',
    location: 'Itajaí – SC',
    text: 'Ótimo serviço 👏',
    rating: 5,
    source: 'Instagram',
    verified: true,
  },
  {
    id: 'dep-4',
    name: '@sah__souzza',
    role: 'Cliente',
    location: 'Itajaí – SC',
    text: 'Ficou top !! 👏👏',
    rating: 5,
    source: 'Instagram',
    verified: true,
  },
  {
    id: 'dep-5',
    name: '@estevao_viagens_com',
    role: 'Cliente',
    location: 'Itajaí – SC',
    text: 'Esse tem a senha 👏👏👏👏',
    rating: 5,
    source: 'Instagram',
    verified: true,
  },
  {
    id: 'dep-6',
    name: '@_maria_alexandre098',
    role: 'Cliente',
    location: 'Itajaí – SC',
    text: 'Trabalho impecável 👏👏',
    rating: 5,
    source: 'Instagram',
    verified: true,
  },
  {
    id: 'dep-7',
    name: '@souolan',
    role: 'Cliente',
    location: 'Itajaí – SC',
    text: 'Caprichado demais 👏👏',
    rating: 5,
    source: 'Instagram',
    verified: true,
  },
];

/* Helper para gerar link do WhatsApp com mensagem segura */
export const getWhatsAppLink = (customText?: string): string => {
  const message = customText || `Olá, Thales! Gostaria de um orçamento`;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
