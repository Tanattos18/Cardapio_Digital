/*
 * Casa da Pamonha — configuração do cardápio
 * Edite este arquivo para entregar ao cliente: nome, contatos, redes sociais,
 * endereço, horários, entrega, pagamento e o cardápio com os preços.
 *  - demo: true mostra a barra "Modelo de demonstração". Use false na entrega.
 *  - Imagens: use um caminho ("img/x-tudo.jpg"), uma URL completa ou um ID do Unsplash.
 *  - horarios: um item por dia, começando no DOMINGO. null = fechado.
 *    Se o horário de fechar for menor que o de abrir (ex.: 00:30), vira a madrugada.
 *  - mesas: quantas mesas a casa tem (gera plaquinhas com QR Code por mesa).
 */
window.CARDAPIO = {
  "demo": true,
  "modelo": "Pamonharia 3 · Impacto",
  "layout": "impacto",
  "nome": "Casa da Pamonha",
  "chamada": "Pamonharia e cafeteria",
  "slogan": "Tradição do milho com um toque de novidade.",
  "logo": null,
  "capa": "1470119693884-47d3a1d1f180",
  "tema": {
    "fonteTitulo": "'Oswald', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "escuro": true,
    "fundo": "#12180f",
    "superficie": "#1b2416",
    "texto": "#f6f2e3",
    "suave": "#b5b49c",
    "primaria": "#f2c230",
    "textoPrimaria": "#1a1400",
    "secundaria": "#9ccc65"
  },
  "avaliacao": {
    "nota": 4.9,
    "total": 744
  },
  "promo": {
    "selo": "Novidade",
    "titulo": "Pamonha recheada de costela",
    "texto": "Chegou e já virou a queridinha da casa. Experimente!"
  },
  "sobre": "Unimos a pamonha tradicional com receitas novas e um café especial moído na hora. Ambiente climatizado, Wi-Fi e espaço para as crianças.",
  "diferenciais": [
    "Café especial moído na hora",
    "Ambiente climatizado",
    "Wi-Fi grátis",
    "Encomendas para eventos"
  ],
  "galeria": [
    "1551754655-cd27e38d2076",
    "1509042239860-f550ce710b93",
    "1578985545062-69928b1d9587",
    "1586444248902-2f64eddc13df"
  ],
  "contato": {
    "whatsapp": "5500900000015",
    "telefone": "(00) 90000-0015",
    "email": "contato@casadapamonha.com.br"
  },
  "redes": {
    "instagram": "casadapamonha",
    "facebook": "casadapamonha",
    "youtube": "casadapamonha",
    "ifood": "https://www.ifood.com.br"
  },
  "endereco": {
    "rua": "Rua do Cerrado, 1010",
    "bairro": "Setor Bueno",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    {
      "abre": "08:00",
      "fecha": "22:00"
    },
    {
      "abre": "08:00",
      "fecha": "22:00"
    },
    {
      "abre": "08:00",
      "fecha": "22:00"
    },
    {
      "abre": "08:00",
      "fecha": "22:00"
    },
    {
      "abre": "08:00",
      "fecha": "22:00"
    },
    {
      "abre": "08:00",
      "fecha": "22:00"
    },
    {
      "abre": "08:00",
      "fecha": "22:00"
    }
  ],
  "entrega": {
    "taxa": 5,
    "tempo": "30–45 min",
    "pedidoMinimo": 25,
    "area": "Até 6 km"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro"
  ],
  "mesas": 14,
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Novidades",
      "icone": "✨",
      "itens": [
        {
          "nome": "Pamonha recheada de costela",
          "desc": "Costela bovina desfiada e queijo.",
          "preco": 18,
          "tags": [
            "Novo",
            "Mais pedido"
          ]
        },
        {
          "nome": "Pamonha de pequi",
          "desc": "Para quem ama o sabor do cerrado.",
          "preco": 15
        },
        {
          "nome": "Pamonha doce com goiabada",
          "preco": 13
        }
      ]
    },
    {
      "nome": "Pamonhas",
      "icone": "🌽",
      "desc": "Feitas todo dia com milho verde fresquinho.",
      "itens": [
        {
          "nome": "Pamonha doce",
          "desc": "Milho verde, açúcar e uma pitada de sal.",
          "preco": 10.9,
          "img": "1551754655-cd27e38d2076"
        },
        {
          "nome": "Pamonha de sal com queijo",
          "desc": "Recheada com queijo meia-cura.",
          "preco": 12.9,
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Pamonha de sal com linguiça",
          "desc": "Linguiça de porco caseira.",
          "preco": 13.9
        },
        {
          "nome": "Pamonha à moda",
          "desc": "Queijo, linguiça e pimenta-de-cheiro.",
          "preco": 14.9,
          "tags": [
            "Picante"
          ]
        },
        {
          "nome": "Pamonha doce com queijo",
          "preco": 12.9
        },
        {
          "nome": "Pamonha de frango com catupiry",
          "preco": 14.9
        },
        {
          "nome": "Pamonha frita",
          "desc": "Pamonha de sal dourada na chapa com manteiga.",
          "preco": 13.9,
          "tags": [
            "Novo"
          ]
        }
      ]
    },
    {
      "nome": "Delícias de milho",
      "icone": "🥣",
      "itens": [
        {
          "nome": "Curau",
          "desc": "Copo 300ml, polvilhado com canela.",
          "preco": 9.9
        },
        {
          "nome": "Milho assado na manteiga",
          "desc": "Espiga inteira.",
          "preco": 7.9,
          "img": "1470119693884-47d3a1d1f180"
        },
        {
          "nome": "Mingau de milho verde",
          "desc": "Copo 300ml.",
          "preco": 9.9
        },
        {
          "nome": "Bolo de milho (fatia)",
          "desc": "Cremoso, receita de vó.",
          "preco": 7.9
        },
        {
          "nome": "Cuscuz com manteiga",
          "preco": 8.9
        }
      ]
    },
    {
      "nome": "Salgados",
      "icone": "🧀",
      "itens": [
        {
          "nome": "Pão de queijo",
          "desc": "Porção com 5 unidades.",
          "preco": 8.9,
          "img": "1586444248902-2f64eddc13df"
        },
        {
          "nome": "Empadão",
          "desc": "Frango, linguiça, queijo, ovo e guariroba.",
          "preco": 19.9
        },
        {
          "nome": "Pastel assado",
          "desc": "Carne, frango ou queijo.",
          "preco": 7.9
        }
      ]
    },
    {
      "nome": "Bebidas",
      "icone": "☕",
      "itens": [
        {
          "nome": "Café coado",
          "preco": 4,
          "img": "1509042239860-f550ce710b93"
        },
        {
          "nome": "Café com leite",
          "preco": 5.5,
          "img": "1495474472287-4d71bcdd2085"
        },
        {
          "nome": "Leite gelado",
          "preco": 5,
          "img": "1550583724-b2692b85b150"
        },
        {
          "nome": "Suco natural 400ml",
          "preco": 8.9,
          "img": "1600271886742-f049cd451bba"
        },
        {
          "nome": "Refrigerante lata",
          "preco": 6.9
        }
      ]
    },
    {
      "nome": "Para levar",
      "icone": "🛍️",
      "desc": "Encomendas com 1 dia de antecedência.",
      "itens": [
        {
          "nome": "Dúzia de pamonhas doces",
          "preco": 118.9
        },
        {
          "nome": "Dúzia de pamonhas de sal",
          "desc": "Queijo, linguiça ou à moda (pode misturar).",
          "preco": 142.9
        },
        {
          "nome": "Pamonha congelada",
          "desc": "Pacote com 5 unidades, dura até 3 meses no freezer.",
          "preco": 54.9
        }
      ]
    }
  ]
};
