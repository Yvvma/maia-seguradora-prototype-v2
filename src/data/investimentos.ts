export interface CoverageItem {
  title: string;
  description: string;
  icon: string;
}

export interface InvestimentoData {
  slug: string;
  title: string;
  subtitle: string;
  cta: string;
  description: string;
  heroImage: string;
  benefits: string[];
  coverage: CoverageItem[];
  category: 'renda-fixa' | 'renda-variavel' | 'fundos';
}

export const INVESTIMENTOS_DATA: InvestimentoData[] = [
  {
    slug: "tesouro-direto",
    title: "Tesouro Direto",
    cta: "Invista com segurança",
    subtitle: "Investimento seguro garantido pelo governo",
    description: "O Tesouro Direto é um programa do Tesouro Nacional para venda de títulos públicos federais a pessoas físicas, de forma 100% online e com segurança.",
    heroImage: "/photos/02.webp",
    benefits: [
      "Segurança do Governo Federal",
      "Investimento a partir de R$ 30",
      "Liquidez diária",
      "Rentabilidade atrativa",
      "Diversas opções de prazos"
    ],
    coverage: [
      {
        title: "Tesouro Selic",
        description: "Ideal para reserva de emergência, acompanha a taxa Selic",
        icon: "trending-up"
      },
      {
        title: "Tesouro Prefixado",
        description: "Rentabilidade definida no momento da compra",
        icon: "dollar-sign"
      },
      {
        title: "Tesouro IPCA+",
        description: "Protege seu dinheiro da inflação",
        icon: "shield"
      }
    ],
    category: 'renda-fixa'
  },
  {
    slug: "cdb-lci-lca",
    title: "CDB, LCI e LCA",
    cta: "Rentabilidade garantida",
    subtitle: "Renda fixa com proteção do FGC",
    description: "Invista em títulos de renda fixa emitidos por bancos com garantia do Fundo Garantidor de Créditos até R$ 250 mil por CPF e instituição.",
    heroImage: "/photos/02.webp",
    benefits: [
      "Proteção do FGC",
      "Rentabilidade previsível",
      "Isenção de IR (LCI/LCA)",
      "Diversas opções de prazo",
      "Baixo risco"
    ],
    coverage: [
      {
        title: "CDB",
        description: "Certificado de Depósito Bancário com rentabilidade atrativa",
        icon: "dollar-sign"
      },
      {
        title: "LCI",
        description: "Letra de Crédito Imobiliário isenta de IR",
        icon: "home"
      },
      {
        title: "LCA",
        description: "Letra de Crédito do Agronegócio isenta de IR",
        icon: "trending-up"
      }
    ],
    category: 'renda-fixa'
  },
  {
    slug: "acoes",
    title: "Ações",
    cta: "Seja sócio das melhores empresas",
    subtitle: "Invista em empresas de capital aberto",
    description: "Compre ações de empresas listadas na bolsa de valores e participe dos lucros através de dividendos e valorização.",
    heroImage: "/photos/02.webp",
    benefits: [
      "Potencial de alta rentabilidade",
      "Receba dividendos",
      "Liquidez diária",
      "Diversificação de carteira",
      "Isenção de IR até R$ 20 mil/mês"
    ],
    coverage: [
      {
        title: "Ações Ordinárias",
        description: "Direito a voto nas assembleias da empresa",
        icon: "users"
      },
      {
        title: "Ações Preferenciais",
        description: "Prioridade no recebimento de dividendos",
        icon: "star"
      },
      {
        title: "Dividendos",
        description: "Receba parte dos lucros da empresa",
        icon: "dollar-sign"
      }
    ],
    category: 'renda-variavel'
  },
  {
    slug: "fundos-imobiliarios",
    title: "Fundos Imobiliários (FIIs)",
    cta: "Renda passiva mensal",
    subtitle: "Invista em imóveis sem sair de casa",
    description: "Fundos Imobiliários permitem investir no mercado imobiliário com valores acessíveis e receber renda mensal de aluguéis.",
    heroImage: "/photos/02.webp",
    benefits: [
      "Renda mensal isenta de IR",
      "Investimento a partir de R$ 100",
      "Liquidez diária",
      "Diversificação imobiliária",
      "Gestão profissional"
    ],
    coverage: [
      {
        title: "FIIs de Tijolo",
        description: "Investem em imóveis físicos como shoppings e escritórios",
        icon: "home"
      },
      {
        title: "FIIs de Papel",
        description: "Investem em títulos do mercado imobiliário",
        icon: "file"
      },
      {
        title: "FIIs Híbridos",
        description: "Combinam investimentos em imóveis e papéis",
        icon: "briefcase"
      }
    ],
    category: 'renda-variavel'
  },
  {
    slug: "fundos-investimento",
    title: "Fundos de Investimento",
    cta: "Gestão profissional",
    subtitle: "Deixe especialistas cuidarem do seu dinheiro",
    description: "Fundos de investimento reúnem recursos de diversos investidores para aplicar em uma carteira diversificada gerida por profissionais.",
    heroImage: "/photos/02.webp",
    benefits: [
      "Gestão profissional",
      "Diversificação automática",
      "Acesso a diversos mercados",
      "Transparência",
      "Liquidez variada"
    ],
    coverage: [
      {
        title: "Fundos de Renda Fixa",
        description: "Investem em títulos de renda fixa",
        icon: "trending-up"
      },
      {
        title: "Fundos Multimercado",
        description: "Diversificam em várias classes de ativos",
        icon: "briefcase"
      },
      {
        title: "Fundos de Ações",
        description: "Investem no mercado de ações",
        icon: "activity"
      }
    ],
    category: 'fundos'
  },
  {
    slug: "previdencia-investimento",
    title: "Previdência Privada",
    cta: "Planeje sua aposentadoria",
    subtitle: "Construa seu futuro com benefícios fiscais",
    description: "Planos de previdência privada VGBL e PGBL para construir patrimônio de longo prazo com vantagens tributárias.",
    heroImage: "/photos/02.webp",
    benefits: [
      "Benefícios fiscais",
      "Sucessão patrimonial facilitada",
      "Portabilidade",
      "Flexibilidade de aportes",
      "Gestão profissional"
    ],
    coverage: [
      {
        title: "VGBL",
        description: "Ideal para quem faz declaração simplificada",
        icon: "user"
      },
      {
        title: "PGBL",
        description: "Dedução de até 12% da renda bruta no IR",
        icon: "dollar-sign"
      },
      {
        title: "Portabilidade",
        description: "Transfira entre planos sem custos",
        icon: "refresh-cw"
      }
    ],
    category: 'fundos'
  }
];

export function getInvestimentoBySlug(slug: string): InvestimentoData | undefined {
  return INVESTIMENTOS_DATA.find(inv => inv.slug === slug);
}

export function getAllInvestimentos(): InvestimentoData[] {
  return INVESTIMENTOS_DATA;
}
