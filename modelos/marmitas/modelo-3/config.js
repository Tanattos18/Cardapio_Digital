/*
 * Power Fit — configuração do cardápio
 * Edite este arquivo para entregar ao cliente: nome, contatos, redes sociais,
 * endereço, horários, entrega, pagamento e o cardápio com os preços.
 *  - demo: true mostra a barra "Modelo de demonstração". Use false na entrega.
 *  - Imagens: use um caminho ("img/bolo.jpg"), uma URL completa ou um ID do Unsplash.
 *  - horarios: um item por dia, começando no DOMINGO. null = fechado.
 *  - encomenda: pede data e horário no pedido (antecedenciaDias = prazo mínimo).
 *  - nutri: informação nutricional curta exibida no produto.
 */
window.CARDAPIO = {
  "demo": true,
  "modelo": "Marmitas fit 3 · Impacto",
  "layout": "impacto",
  "nome": "Power Fit",
  "chamada": "Marmitas para treino",
  "slogan": "Proteína de verdade para quem treina de verdade.",
  "logo": null,
  "capa": "1720402958832-80dcfd7f4850",
  "tema": {
    "fonteTitulo": "'Oswald', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "escuro": true,
    "fundo": "#0b1210",
    "superficie": "#131d19",
    "texto": "#eef5f1",
    "suave": "#9fb3a9",
    "primaria": "#22c55e",
    "textoPrimaria": "#052e16",
    "secundaria": "#facc15"
  },
  "avaliacao": {
    "nota": 4.8,
    "total": 590
  },
  "promo": {
    "selo": "Plano mensal",
    "titulo": "40 marmitas com 20% de desconto",
    "texto": "Entregas toda semana. Fale com a gente no WhatsApp."
  },
  "sobre": "Marmitas pensadas para quem treina: mais proteína, carboidrato na medida e tudo pesado. Atendemos academias e atletas.",
  "diferenciais": [
    "Mais de 35 g de proteína",
    "Tudo pesado e calculado",
    "Parceria com academias"
  ],
  "galeria": [
    "1633030175953-ac5a41b7353c",
    "1609183556292-f208be1a9644",
    "1543352632-5a4b24e4d2a6",
    "1573812914274-226dc19fbe17"
  ],
  "contato": {
    "whatsapp": "5500900000062",
    "telefone": "(00) 90000-0062",
    "email": "contato@powerfit.com.br"
  },
  "redes": {
    "instagram": "powerfit",
    "tiktok": "powerfit",
    "youtube": "powerfit"
  },
  "endereco": {
    "rua": "Avenida 85, 1800",
    "bairro": "Setor Marista",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    null,
    {
      "abre": "07:00",
      "fecha": "21:00"
    },
    {
      "abre": "07:00",
      "fecha": "21:00"
    },
    {
      "abre": "07:00",
      "fecha": "21:00"
    },
    {
      "abre": "07:00",
      "fecha": "21:00"
    },
    {
      "abre": "07:00",
      "fecha": "21:00"
    },
    {
      "abre": "07:00",
      "fecha": "21:00"
    }
  ],
  "entrega": {
    "taxa": 5,
    "tempo": "30–50 min",
    "pedidoMinimo": 40,
    "area": "Até 10 km"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro"
  ],
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Alta proteína",
      "icone": "💪",
      "itens": [
        {
          "nome": "Frango duplo com arroz e feijão",
          "preco": 29.9,
          "nutri": "620 kcal · 55 g de proteína",
          "img": "1720402958832-80dcfd7f4850",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Patinho com batata-doce (400 g)",
          "preco": 31.9,
          "nutri": "640 kcal · 50 g de proteína",
          "img": "1609183556292-f208be1a9644"
        }
      ]
    },
    {
      "nome": "Pratos fit",
      "icone": "🥗",
      "desc": "Marmitas de 350 g, congeladas ou do dia.",
      "itens": [
        {
          "nome": "Frango com batata-doce",
          "desc": "Peito de frango grelhado, batata-doce e brócolis.",
          "preco": 25.9,
          "nutri": "420 kcal · 38 g de proteína",
          "img": "1633030175953-ac5a41b7353c",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Patinho com arroz integral",
          "desc": "Patinho moído, arroz integral, cenoura e vagem.",
          "preco": 27.9,
          "nutri": "480 kcal · 35 g de proteína",
          "img": "1609183556292-f208be1a9644"
        },
        {
          "nome": "Tilápia com purê de abóbora",
          "desc": "Filé de tilápia grelhado, purê de abóbora e legumes.",
          "preco": 30.9,
          "nutri": "390 kcal · 32 g de proteína",
          "img": "1532550907401-a500c9a57435"
        },
        {
          "nome": "Strogonoff fit de frango",
          "desc": "Com creme de ricota, arroz integral e batata rústica.",
          "preco": 26.9,
          "nutri": "450 kcal · 36 g de proteína",
          "img": "1644592219048-5c070fd3c91c"
        },
        {
          "nome": "Escondidinho de mandioquinha",
          "desc": "Carne desfiada coberta com purê de mandioquinha.",
          "preco": 28.9,
          "nutri": "440 kcal · 30 g de proteína",
          "img": "1576670442263-be3584ad3dde"
        }
      ]
    },
    {
      "nome": "Low carb",
      "icone": "🥦",
      "itens": [
        {
          "nome": "Frango ao pesto com abobrinha",
          "desc": "Espaguete de abobrinha, frango e pesto de manjericão.",
          "preco": 27.9,
          "nutri": "330 kcal · 34 g de proteína",
          "img": "1605590955562-be1a5fda4161",
          "tags": [
            "Low carb"
          ]
        },
        {
          "nome": "Carne de panela com legumes",
          "preco": 29.9,
          "nutri": "380 kcal · 36 g de proteína",
          "img": "1664741662725-bd131742b7b7",
          "tags": [
            "Low carb"
          ]
        },
        {
          "nome": "Omelete de forno com salada",
          "preco": 23.9,
          "nutri": "310 kcal · 24 g de proteína",
          "img": "1668283653825-37b80f055b05",
          "tags": [
            "Low carb"
          ]
        }
      ]
    },
    {
      "nome": "Vegetarianos",
      "icone": "🌱",
      "itens": [
        {
          "nome": "Grão-de-bico ao curry",
          "desc": "Com arroz integral e couve.",
          "preco": 24.9,
          "nutri": "410 kcal · 16 g de proteína",
          "img": "1609595781576-1580ff3ee291",
          "tags": [
            "Vegano"
          ]
        },
        {
          "nome": "Lasanha de berinjela",
          "preco": 26.9,
          "nutri": "360 kcal · 18 g de proteína",
          "img": "1586197162535-dec0bbbcd198",
          "tags": [
            "Vegetariano"
          ]
        },
        {
          "nome": "Bowl de quinoa",
          "desc": "Quinoa, legumes assados, grão-de-bico e tahine.",
          "preco": 27.9,
          "nutri": "420 kcal · 15 g de proteína",
          "img": "1520066391310-428f06ebd602",
          "tags": [
            "Vegano"
          ]
        }
      ]
    },
    {
      "nome": "Kits da semana",
      "icone": "📦",
      "desc": "Escolha os pratos na observação. Entrega congelada, dura até 60 dias no freezer.",
      "itens": [
        {
          "nome": "Kit 5 marmitas",
          "preco": 124.9,
          "precoAntigo": 135.9,
          "img": "1667499745120-f9bcef8f584e",
          "tags": [
            "Promoção"
          ]
        },
        {
          "nome": "Kit 10 marmitas",
          "preco": 229.9,
          "precoAntigo": 271.9,
          "img": "1543352632-5a4b24e4d2a6",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Kit 20 marmitas",
          "preco": 428.9,
          "precoAntigo": 543.9,
          "img": "1543352632-5a4b24e4d2a6",
          "tags": [
            "Promoção"
          ]
        }
      ]
    },
    {
      "nome": "Lanches e sobremesas",
      "icone": "🍓",
      "itens": [
        {
          "nome": "Panqueca de banana",
          "desc": "Sem farinha branca, com mel.",
          "preco": 12.9,
          "nutri": "280 kcal",
          "img": "1575853121743-60c24f0a7502"
        },
        {
          "nome": "Wrap de frango",
          "preco": 18.9,
          "nutri": "350 kcal · 28 g de proteína",
          "img": "1626700051175-6818013e1d4f"
        },
        {
          "nome": "Iogurte com granola",
          "preco": 12.9,
          "img": "1593999419634-455e51714dca"
        },
        {
          "nome": "Brownie fit",
          "desc": "Sem açúcar e sem glúten.",
          "preco": 8.9,
          "img": "1551024506-0bccd828d307"
        }
      ]
    },
    {
      "nome": "Bebidas",
      "icone": "🧃",
      "itens": [
        {
          "nome": "Suco detox",
          "desc": "Couve, limão, gengibre e maçã.",
          "preco": 12.9,
          "img": "1610970881699-44a5587cabec"
        },
        {
          "nome": "Água de coco",
          "preco": 7.9,
          "img": "1617611140379-0e0ec17cc45f"
        },
        {
          "nome": "Kombucha",
          "preco": 14.9,
          "img": "1573812914274-226dc19fbe17"
        }
      ]
    }
  ]
};
