/*
 * Milho de Ouro — configuração do cardápio
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
  "modelo": "Pamonharia 1 · Clássico",
  "layout": "classico",
  "nome": "Milho de Ouro",
  "chamada": "Pamonharia artesanal",
  "slogan": "Pamonha fresquinha, do jeitinho da roça.",
  "logo": null,
  "capa": "1551754655-cd27e38d2076",
  "tema": {
    "fonteTitulo": "'Fraunces', serif",
    "fonteTexto": "'Nunito', system-ui, sans-serif",
    "fundo": "#fff8e7",
    "superficie": "#fbefd0",
    "texto": "#3a2a0a",
    "suave": "#7d6a45",
    "primaria": "#2f6b2f",
    "textoPrimaria": "#ffffff",
    "secundaria": "#e8a900"
  },
  "avaliacao": {
    "nota": 4.9,
    "total": 512
  },
  "sobre": "Ralamos o milho todo dia de manhã cedo e fazemos as pamonhas na palha, uma a uma, como a vó ensinou. Do campo para a sua mesa, sem conservantes.",
  "diferenciais": [
    "Milho colhido no dia",
    "Feita na palha, uma a uma",
    "Sem conservantes",
    "Encomendas para festas"
  ],
  "galeria": [
    "1551754655-cd27e38d2076",
    "1470119693884-47d3a1d1f180",
    "1509042239860-f550ce710b93",
    "1586444248902-2f64eddc13df"
  ],
  "contato": {
    "whatsapp": "5500900000013",
    "telefone": "(00) 90000-0013",
    "email": "contato@milhodeouro.com.br"
  },
  "redes": {
    "instagram": "milhodeouro",
    "facebook": "milhodeouro"
  },
  "endereco": {
    "rua": "Rua dos Milharais, 60",
    "bairro": "Centro",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
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
    },
    {
      "abre": "07:00",
      "fecha": "21:00"
    }
  ],
  "entrega": {
    "taxa": 4,
    "tempo": "25–40 min",
    "pedidoMinimo": 20,
    "area": "Até 5 km"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro"
  ],
  "mesas": 12,
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Da fazenda",
      "icone": "🌾",
      "itens": [
        {
          "nome": "Pamonha de forno",
          "desc": "Assada na assadeira, com queijo derretido por cima.",
          "preco": 15,
          "tags": [
            "Novo"
          ]
        },
        {
          "nome": "Bolo de milho cremoso (inteiro)",
          "desc": "Forma redonda, serve 10 pessoas.",
          "preco": 38
        },
        {
          "nome": "Curau com canela (500ml)",
          "preco": 14
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
          "preco": 10,
          "img": "1551754655-cd27e38d2076"
        },
        {
          "nome": "Pamonha de sal com queijo",
          "desc": "Recheada com queijo meia-cura.",
          "preco": 12,
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Pamonha de sal com linguiça",
          "desc": "Linguiça de porco caseira.",
          "preco": 13
        },
        {
          "nome": "Pamonha à moda",
          "desc": "Queijo, linguiça e pimenta-de-cheiro.",
          "preco": 14,
          "tags": [
            "Picante"
          ]
        },
        {
          "nome": "Pamonha doce com queijo",
          "preco": 12
        },
        {
          "nome": "Pamonha de frango com catupiry",
          "preco": 14
        },
        {
          "nome": "Pamonha frita",
          "desc": "Pamonha de sal dourada na chapa com manteiga.",
          "preco": 13,
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
          "preco": 9
        },
        {
          "nome": "Milho assado na manteiga",
          "desc": "Espiga inteira.",
          "preco": 7,
          "img": "1470119693884-47d3a1d1f180"
        },
        {
          "nome": "Mingau de milho verde",
          "desc": "Copo 300ml.",
          "preco": 9
        },
        {
          "nome": "Bolo de milho (fatia)",
          "desc": "Cremoso, receita de vó.",
          "preco": 7
        },
        {
          "nome": "Cuscuz com manteiga",
          "preco": 8
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
          "preco": 8,
          "img": "1586444248902-2f64eddc13df"
        },
        {
          "nome": "Empadão",
          "desc": "Frango, linguiça, queijo, ovo e guariroba.",
          "preco": 18
        },
        {
          "nome": "Pastel assado",
          "desc": "Carne, frango ou queijo.",
          "preco": 7
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
          "preco": 8,
          "img": "1600271886742-f049cd451bba"
        },
        {
          "nome": "Refrigerante lata",
          "preco": 6
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
          "preco": 108
        },
        {
          "nome": "Dúzia de pamonhas de sal",
          "desc": "Queijo, linguiça ou à moda (pode misturar).",
          "preco": 130
        },
        {
          "nome": "Pamonha congelada",
          "desc": "Pacote com 5 unidades, dura até 3 meses no freezer.",
          "preco": 50
        }
      ]
    }
  ]
};
