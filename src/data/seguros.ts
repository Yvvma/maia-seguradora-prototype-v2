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
    heroImage: "/photos/para-pessoas/automovel.png",
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
       heroImage: "/photos/para-pessoas/viagem.png",
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
       heroImage: "/photos/para-pessoas/previdencia.png",
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
       heroImage: "/photos/para-pessoas/consorcio.png",
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
    heroImage: "/photos/para-empresas/03.png",
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
    heroImage: "/photos/para-empresas/01.jpg",
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
    heroImage: "/photos/para-empresas/02.jpg",
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
  },
  {
  slug: "seguro-ambiental",
  title: "Seguro Ambiental",
  cta: "Proteção ambiental para sua empresa",
  subtitle: "Coberturas contra riscos ambientais e danos causados a terceiros",
  description: "O Seguro Ambiental protege sua empresa contra responsabilidades decorrentes de danos ao meio ambiente, com indenização e cobertura de limpeza, remediação e outras ações conforme necessidade ambiental.",
  heroImage: "/photos/para-empresas/ambiental.jpg",
  benefits: [
    "Cobertura de danos ambientais",
    "Responsabilidade por poluição acidental",
    "Proteção para contaminação de solo e água",
    "Custos de limpeza e remediação",
    "Assistência jurídica especializada"
  ],
  coverage: [
    {
      title: "RC Ambiental",
      description: "Cobertura de indenizações por danos ambientais a terceiros",
      icon: "leaf"
    },
    {
      title: "Remediação",
      description: "Custos com mitigação e limpeza de áreas afetadas",
      icon: "droplet"
    },
    {
      title: "Custos Jurídicos",
      description: "Assistência legal em processos ambientais",
      icon: "file-text"
    },
    {
      title: "Monitoramento",
      description: "Serviços de vigilância e monitoramento pós-sinistro",
      icon: "eye"
    }
  ],
  category: "empresas"
},
{
  slug: "seguro-condominial",
  title: "Seguro Condominial",
  cta: "Proteja todo o condomínio",
  subtitle: "Cobertura especializada para condomínios residenciais e comerciais",
  description: "O Seguro Condominial oferece proteção completa contra incêndios, danos elétricos, roubo, responsabilidade civil e outras possíveis ocorrências que impactem as áreas comuns e edificações.",
  heroImage: "/photos/para-empresas/condominio.jpg",
  benefits: [
    "Cobertura contra incêndio",
    "Danos elétricos",
    "Roubo e furto",
    "Responsabilidade civil do condomínio",
    "Assistência emergencial"
  ],
  coverage: [
    {
      title: "Incêndio e Explosão",
      description: "Proteção contra danos estruturais por fogo ou explosões",
      icon: "fire"
    },
    {
      title: "Danos Elétricos",
      description: "Cobertura para instalações elétricas e prejuízos associados",
      icon: "zap"
    },
    {
      title: "Roubo de Bens",
      description: "Indenização por furto ou roubo nas áreas comuns",
      icon: "shield"
    },
    {
      title: "Responsabilidade Civil",
      description: "Cobertura de danos causados a terceiros pelo condomínio",
      icon: "users"
    }
  ],
  category: "empresas"
},
{
  slug: "seguro-equipamentos",
  title: "Seguro de Equipamentos",
  cta: "Proteção para máquinas e equipamentos",
  subtitle: "Cobre danos ou perda de equipamentos essenciais",
  description: "O Seguro de Equipamentos garante proteção contra roubo, furto, dano acidental, incêndio ou outros prejuízos materiais que afetem máquinas e equipamentos da sua operação.",
  heroImage: "/photos/para-empresas/industrial.jpg",
  benefits: [
    "Cobertura contra roubo e furto",
    "Proteção contra danos materiais",
    "Assistência técnica especializada",
    "Indenização por perda total",
    "Proteção de equipamentos estratégicos"
  ],
  coverage: [
    {
      title: "Roubo e Furto",
      description: "Indenização em caso de roubo/furto qualificado",
      icon: "shield"
    },
    {
      title: "Danos Acidentais",
      description: "Cobertura para acidentes operacionais e impactos",
      icon: "tool"
    },
    {
      title: "Incêndio",
      description: "Proteção contra fogo e explosões",
      icon: "fire"
    },
    {
      title: "Assistência técnica",
      description: "Suporte especializado para reparos",
      icon: "settings"
    }
  ],
  category: "empresas"
},
{
  slug: "seguro-agricola",
  title: "Seguro de Agrícola",
  cta: "Proteção para sua produção",
  subtitle: "Seguro especializado para safra, plantações e máquinas no campo",
  description: "O Seguro Agrícola garante cobertura contra perdas na produção agrícola, danos climáticos e prejuízos decorrentes de eventos naturais, além de proteger maquinário agrícola.",
  heroImage: "/photos/para-empresas/agricola.jpg",
  benefits: [
    "Proteção contra eventos climáticos",
    "Cobertura de safras",
    "Seguro de máquinas agrícolas",
    "Assistência em perdas",
    "Mitigação de riscos naturais"
  ],
  coverage: [
    {
      title: "Perdas de Safra",
      description: "Cobertura para quedas na produção por eventos naturais",
      icon: "leaf"
    },
    {
      title: "Danos Climáticos",
      description: "Proteção contra chuva excessiva e secas",
      icon: "cloud-rain"
    },
    {
      title: "Equipamentos Agrícolas",
      description: "Cobertura para maquinário no campo",
      icon: "tractor"
    },
    {
      title: "Cobertura de Insumos",
      description: "Protege insumos agrícolas essenciais",
      icon: "package"
    }
  ],
  category: "empresas"
},
{
  slug: "seguro-responsabilidade-civil",
  title: "Responsabilidade Civil",
  cta: "Proteção contra danos a terceiros",
  subtitle: "Segurança jurídica e financeira para sua empresa",
  description: "O Seguro de Responsabilidade Civil garante indenização por danos materiais ou corporais causados involuntariamente a terceiros, protegendo seu patrimônio e negócios.",
  heroImage: "/photos/para-empresas/civil.jpg",
  benefits: [
    "Cobertura por danos materiais a terceiros",
    "Cobertura por danos corporais",
    "Assistência jurídica",
    "Proteção patrimonial",
    "Indenização por prejuízos involuntários"
  ],
  coverage: [
    {
      title: "Danos Corporais a Terceiros",
      description: "Proteção para prejuízos causados involuntariamente",
      icon: "users"
    },
    {
      title: "Danos Materiais",
      description: "Cobertura para prejuízos materiais a terceiros",
      icon: "home"
    },
    {
      title: "Custos Legais",
      description: "Assistência jurídica e processos",
      icon: "file"
    },
    {
      title: "Responsabilidade Civil Geral",
      description: "Proteção ampla de responsabilidade civil",
      icon: "shield"
    }
  ],
  category: "empresas"
},
{
  slug: "home-equity-e-financiamentos",
  title: "Home Equity e Financiamentos",
  cta: "Conquiste seus projetos",
  subtitle: "Line de crédito usando seu imóvel como garantia",
  description: "Soluções de crédito e financiamento, incluindo operações de home equity, permitem usar seu imóvel como garantia para realizar reformas, quitações ou investimentos, com taxas competitivas e prazos flexíveis.",
  heroImage: "/photos/para-empresas/financiamentos.png",
  benefits: [
    "Crédito com garantia imobiliária",
    "Prazos flexíveis",
    "Taxas competitivas",
    "Realize projetos e reformas",
    "Planejamento financeiro"
  ],
  coverage: [
    {
      title: "Home Equity",
      description: "Empréstimo com garantia no imóvel",
      icon: "home"
    },
    {
      title: "Financiamento de Projetos",
      description: "Linha de crédito para reformas e expansão",
      icon: "dollar-sign"
    },
    {
      title: "Taxas Competitivas",
      description: "Condições de juros e prazos atrativos",
      icon: "percent"
    },
    {
      title: "Assessoria Financeira",
      description: "Apoio na contratação e planejamento",
      icon: "briefcase"
    }
  ],
  category: "empresas"
},
{
  slug: "previdencia-seguro-dollar",
  title: "Previdência/Seguro em U$",
  cta: "Proteja seu patrimônio em moeda forte",
  subtitle: "Segurança internacional e proteção cambial",
  description: "Soluções globais de previdência e seguro de vida denominadas em dólar, ideais para diversificação geográfica, proteção contra a volatilidade do real e planejamento sucessório internacional.",
  heroImage: "/photos/para-pessoas/previdencia-em-dolar.jpg",
  benefits: [
    "Proteção em moeda forte (Dólar)",
    "Diversificação patrimonial global",
    "Eficiência na sucessão internacional",
    "Acesso a mercados estáveis",
    "Indenização e resgates no exterior"
  ],
  coverage: [
    {
      title: "Proteção Cambial",
      description: "Patrimônio garantido e atualizado em dólar americano",
      icon: "globe"
    },
    {
      title: "Sucessão Patrimonial",
      description: "Transferência de recursos para herdeiros com agilidade internacional",
      icon: "file-text"
    },
    {
      title: "Resgate Flexível",
      description: "Opções de resgate total ou parcial em contas internacionais",
      icon: "dollar-sign"
    },
    {
      title: "Segurança Jurídica",
      description: "Apólices regidas por mercados financeiros globais de alta estabilidade",
      icon: "shield"
    }
  ],
  category: "pessoal"
}
];

export function getSeguroBySlug(slug: string): SeguroData | undefined {
  return SEGUROS_DATA.find(seguro => seguro.slug === slug);
}

export function getAllSeguros(): SeguroData[] {
  return SEGUROS_DATA;
}
