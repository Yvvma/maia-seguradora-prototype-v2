export interface CoverageItem {
  title: string;
  description: string;
  icon: string;
}

export interface SeguroData {
  slug: string;
  title: string;
  subtitle: string;
  cta: string;
  description: string;
  heroImage: string;
  benefits: string[];
  coverage: CoverageItem[];
  category: 'pessoal' | 'empresas';
}

export const SEGUROS_DATA: SeguroData[] = [
  // Para Você
  {
    slug: "seguro-vida",
    title: "Seguro de Vida",
    cta: "Cuide do futuro de quem depende de você",
    subtitle: "Proteção completa para você e sua família",
    description: "O Seguro de Vida oferece proteção financeira para você e seus entes queridos em momentos difíceis, garantindo tranquilidade e segurança para o futuro.",
    heroImage: "/photos/02.webp",
    benefits: [
      "Cobertura por morte natural ou acidental",
      "Indenização para beneficiários",
      "Assistência funeral inclusa",
      "Cobertura para doenças graves",
      "Invalidez permanente"
    ],
    coverage: [
      {
        title: "Morte",
        description: "Indenização aos beneficiários em caso de falecimento do segurado",
        icon: "heart"
      },
      {
        title: "Invalidez",
        description: "Cobertura para invalidez permanente total ou parcial por acidente",
        icon: "user"
      },
      {
        title: "Doenças",
        description: "Proteção para diagnóstico de doenças graves especificadas",
        icon: "activity"
      },
      {
        title: "Diária por Incapacidade",
        description: "Pagamento de diária durante período de incapacidade temporária",
        icon: "calendar"
      },
      {
        title: "Diária por Internação",
        description: "Auxílio financeiro durante período de internação hospitalar",
        icon: "home"
      },
      {
        title: "Seguro Cirurgia",
        description: "Cobertura para despesas com procedimentos cirúrgicos",
        icon: "tool"
      },
      {
        title: "Seguro Funeral",
        description: "Assistência completa para serviços funerários",
        icon: "shield"
      }
    ],
    category: 'pessoal'
  },
  {
    slug: "seguro-automoveis",
    title: "Seguro de Automóveis",
    cta: "Dirija com segurança",
    subtitle: "Segurança e tranquilidade para seu veículo",
    description: "Proteção completa para seu automóvel com coberturas personalizadas, assistência 24h e atendimento ágil em caso de sinistros.",
    heroImage: "/photos/seguros/consorcio/consorcio.png",
    benefits: [
      "Cobertura contra colisão e roubo",
      "Assistência 24 horas",
      "Carro reserva",
      "Proteção de vidros",
      "Cobertura para terceiros"
    ],
    coverage: [
      {
        title: "Colisão",
        description: "Cobertura para danos causados por colisões e acidentes",
        icon: "car"
      },
      {
        title: "Roubo e Furto",
        description: "Proteção total contra roubo e furto do veículo",
        icon: "shield"
      },
      {
        title: "Incêndio",
        description: "Cobertura para danos causados por incêndio",
        icon: "flame"
      },
      {
        title: "Danos a Terceiros",
        description: "Responsabilidade civil por danos materiais e corporais",
        icon: "users"
      },
      {
        title: "Assistência 24h",
        description: "Guincho, chaveiro, troca de pneus e mais",
        icon: "phone"
      }
    ],
    category: 'pessoal'
  },
  {
    slug: "seguro-viagem",
    title: "Seguro Viagem",
    cta: "Viaje tranquilo",
    subtitle: "Viaje com segurança para qualquer destino",
    description: "Assistência completa durante suas viagens nacionais e internacionais, com cobertura médica, bagagem e muito mais.",
    heroImage: "/photos/seguros/internacionais/seguro-internacional.png",
    benefits: [
      "Cobertura médica internacional",
      "Assistência bagagem",
      "Cancelamento de viagem",
      "Atendimento 24h em português",
      "Cobertura para esportes"
    ],
    coverage: [
      {
        title: "Despesas Médicas",
        description: "Cobertura para consultas, exames e internações",
        icon: "heart"
      },
      {
        title: "Extravio de Bagagem",
        description: "Indenização por perda ou atraso de bagagem",
        icon: "briefcase"
      },
      {
        title: "Cancelamento",
        description: "Reembolso em caso de cancelamento de viagem",
        icon: "x"
      },
      {
        title: "Assistência Jurídica",
        description: "Suporte legal durante sua viagem",
        icon: "file"
      },
      {
        title: "Regresso Antecipado",
        description: "Cobertura para retorno emergencial",
        icon: "plane"
      }
    ],
    category: 'pessoal'
  },
  {
    slug: "previdencia-privada",
    title: "Previdência Privada (VGBL e PGBL)",
    cta: "Construa seu futuro",
    subtitle: "Planeje seu futuro com tranquilidade",
    description: "Construa seu patrimônio para a aposentadoria com planos de previdência privada VGBL e PGBL, com benefícios fiscais e rentabilidade.",
    heroImage: "/photos/seguros/previdencia/previdencia-complementar.png",
    benefits: [
      "Benefícios fiscais",
      "Rentabilidade atrativa",
      "Flexibilidade de aportes",
      "Sucessão patrimonial facilitada",
      "Portabilidade entre planos"
    ],
    coverage: [
      {
        title: "VGBL",
        description: "Vida Gerador de Benefício Livre - ideal para não declarantes",
        icon: "trending-up"
      },
      {
        title: "PGBL",
        description: "Plano Gerador de Benefício Livre - com dedução fiscal",
        icon: "dollar-sign"
      },
      {
        title: "Renda Vitalícia",
        description: "Receba renda mensal pelo resto da vida",
        icon: "infinity"
      },
      {
        title: "Renda por Prazo",
        description: "Defina o período de recebimento da renda",
        icon: "calendar"
      },
      {
        title: "Resgate Programado",
        description: "Flexibilidade para resgatar quando precisar",
        icon: "credit-card"
      }
    ],
    category: 'pessoal'
  },
  {
    slug: "consorcios",
    title: "Consórcios Auto, Imóvel e Serviços",
    cta: "Realize seus sonhos",
    subtitle: "Realize seus sonhos de forma planejada",
    description: "Adquira seu bem através de consórcio, uma forma inteligente e econômica de realizar seus objetivos sem comprometer seu orçamento.",
    heroImage: "/photos/seguros/consorcio/consorcio.png",
    benefits: [
      "Sem juros",
      "Parcelas fixas",
      "Possibilidade de lance",
      "Flexibilidade de uso",
      "Economia no longo prazo"
    ],
    coverage: [
      {
        title: "Consórcio de Automóveis",
        description: "Adquira seu veículo novo ou usado",
        icon: "car"
      },
      {
        title: "Consórcio de Imóveis",
        description: "Compre sua casa ou apartamento",
        icon: "home"
      },
      {
        title: "Consórcio de Serviços",
        description: "Financie reformas, viagens e mais",
        icon: "tool"
      },
      {
        title: "Contemplação por Sorteio",
        description: "Participe dos sorteios mensais",
        icon: "gift"
      },
      {
        title: "Contemplação por Lance",
        description: "Ofereça lances para antecipar sua contemplação",
        icon: "zap"
      }
    ],
    category: 'pessoal'
  },
  {
    slug: "seguro-empresarial",
    title: "Seguro Empresarial",
    cta: "Proteja seu negócio",
    subtitle: "Proteção completa para seu negócio",
    description: "Proteja sua empresa contra diversos riscos com coberturas personalizadas para cada tipo de negócio e atividade.",
    heroImage: "/photos/seguros/blindagem/blindagem-patrimonial.png",
    benefits: [
      "Cobertura patrimonial",
      "Responsabilidade civil",
      "Lucros cessantes",
      "Equipamentos e máquinas",
      "Assistência empresarial"
    ],
    coverage: [
      {
        title: "Incêndio e Raio",
        description: "Proteção contra incêndios e descargas elétricas",
        icon: "flame"
      },
      {
        title: "Explosão",
        description: "Cobertura para danos causados por explosões",
        icon: "alert"
      },
      {
        title: "Roubo e Furto",
        description: "Proteção do patrimônio empresarial",
        icon: "shield"
      },
      {
        title: "Danos Elétricos",
        description: "Cobertura para equipamentos e instalações",
        icon: "zap"
      },
      {
        title: "Quebra de Vidros",
        description: "Proteção para vidraças e fachadas",
        icon: "square"
      }
    ],
    category: 'empresas'
  },
  {
    slug: "seguro-caminhoes",
    title: "Seguro de Caminhões",
    cta: "Proteja sua frota",
    subtitle: "Segurança para sua frota de veículos pesados",
    description: "Proteção especializada para caminhões e veículos pesados, com coberturas adequadas às necessidades do transporte de cargas.",
    heroImage: "/photos/seguros/consorcio/consorcio.png",
    benefits: [
      "Cobertura para frota",
      "Assistência 24h especializada",
      "Rastreamento",
      "Guincho pesado",
      "Cobertura de carga"
    ],
    coverage: [
      {
        title: "Colisão e Capotagem",
        description: "Proteção contra acidentes de trânsito",
        icon: "truck"
      },
      {
        title: "Roubo e Furto",
        description: "Segurança para veículos pesados",
        icon: "shield"
      },
      {
        title: "Incêndio",
        description: "Cobertura para danos por fogo",
        icon: "flame"
      },
      {
        title: "Responsabilidade Civil",
        description: "Proteção contra danos a terceiros",
        icon: "users"
      },
      {
        title: "Danos à Carga",
        description: "Cobertura para mercadorias transportadas",
        icon: "package"
      }
    ],
    category: 'empresas'
  },
  {
    slug: "seguro-cargas",
    title: "Seguro de Cargas",
    cta: "Transporte seguro",
    subtitle: "Proteção para suas mercadorias em trânsito",
    description: "Garanta a segurança das suas mercadorias durante o transporte nacional e internacional com coberturas completas.",
    heroImage: "/photos/seguros/internacionais/seguro-internacional.png",
    benefits: [
      "Cobertura porta a porta",
      "Transporte multimodal",
      "Cobertura internacional",
      "Assistência em sinistros",
      "Rastreamento de carga"
    ],
    coverage: [
      {
        title: "Roubo de Carga",
        description: "Proteção contra roubo durante o transporte",
        icon: "shield"
      },
      {
        title: "Avarias",
        description: "Cobertura para danos às mercadorias",
        icon: "package"
      },
      {
        title: "Acidentes",
        description: "Proteção em caso de acidentes de trânsito",
        icon: "alert"
      },
      {
        title: "Incêndio",
        description: "Cobertura para danos por fogo",
        icon: "flame"
      },
      {
        title: "Responsabilidade Civil",
        description: "Proteção contra danos a terceiros",
        icon: "users"
      }
    ],
    category: 'empresas'
  }
];

export function getSeguroBySlug(slug: string): SeguroData | undefined {
  return SEGUROS_DATA.find(seguro => seguro.slug === slug);
}

export function getAllSeguros(): SeguroData[] {
  return SEGUROS_DATA;
}
