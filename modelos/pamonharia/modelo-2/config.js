/*
 * Pamonha da Roça — configuração do cardápio
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
  "modelo": "Pamonharia 2 · App de delivery",
  "layout": "app",
  "nome": "Pamonha da Roça",
  "slogan": "Pamonha quentinha a qualquer hora do dia.",
  "logo": null,
  "capa": "../../../assets/img/pamonharia/pamonha-feira.jpg",
  "tema": {
    "fonteTitulo": "'Nunito', serif",
    "fonteTexto": "'Nunito', system-ui, sans-serif",
    "fundo": "#ffffff",
    "superficie": "#fbf8ef",
    "texto": "#262012",
    "suave": "#6f6650",
    "primaria": "#3a7d2c",
    "textoPrimaria": "#ffffff",
    "secundaria": "#f2b705"
  },
  "avaliacao": {
    "nota": 4.8,
    "total": 390
  },
  "promo": {
    "selo": "Combo",
    "titulo": "Pamonha + café coado por R$ 13",
    "texto": "O lanche da tarde perfeito, todo dia até as 17h."
  },
  "sobre": "Pamonharia de família, com receita mineira e goiana. Entregamos quentinha em embalagem térmica para você não sair de casa.",
  "diferenciais": [
    "Entrega quentinha",
    "Encomendas por dúzia",
    "Aceita Pix"
  ],
  "galeria": [
    "../../../assets/img/pamonharia/pamonha-cafe.jpg",
    "../../../assets/img/pamonharia/pamonha-feira.jpg"
  ],
  "contato": {
    "whatsapp": "5500900000014",
    "telefone": "(00) 90000-0014",
    "email": "contato@pamonhadaroca.com.br"
  },
  "redes": {
    "instagram": "pamonhadaroca",
    "facebook": "pamonhadaroca",
    "tiktok": "pamonhadaroca"
  },
  "endereco": {
    "rua": "Avenida Goiás, 870",
    "bairro": "Setor Norte",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    {
      "abre": "13:00",
      "fecha": "21:00"
    },
    null,
    {
      "abre": "13:00",
      "fecha": "21:00"
    },
    {
      "abre": "13:00",
      "fecha": "21:00"
    },
    {
      "abre": "13:00",
      "fecha": "21:00"
    },
    {
      "abre": "13:00",
      "fecha": "21:00"
    },
    {
      "abre": "13:00",
      "fecha": "21:00"
    }
  ],
  "entrega": {
    "taxa": 3,
    "tempo": "20–35 min",
    "pedidoMinimo": 15,
    "area": "Bairros vizinhos"
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
      "nome": "Combos",
      "icone": "🎁",
      "itens": [
        {
          "nome": "Combo família",
          "desc": "6 pamonhas à escolha + suco natural 1L.",
          "preco": 72,
          "img": "../../../assets/img/pamonharia/pamonhas-prato.jpg",
          "precoAntigo": 80,
          "tags": [
            "Promoção"
          ]
        },
        {
          "nome": "Combo lanche",
          "desc": "1 pamonha + café coado.",
          "preco": 13,
          "img": "../../../assets/img/pamonharia/pamonha-cafe.jpg"
        },
        {
          "nome": "Combo da tarde",
          "desc": "2 pamonhas + 2 curaus.",
          "preco": 36,
          "img": "1514481538271-cf9f99627ab4"
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
          "img": "../../../assets/img/pamonharia/pamonha-aberta.jpg"
        },
        {
          "nome": "Pamonha de sal com queijo",
          "desc": "Recheada com queijo meia-cura.",
          "preco": 12,
          "img": "../../../assets/img/pamonharia/pamonha-amarrada.jpg",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Pamonha de sal com linguiça",
          "desc": "Linguiça de porco caseira.",
          "preco": 13,
          "img": "../../../assets/img/pamonharia/pamonha-mao.jpg"
        },
        {
          "nome": "Pamonha à moda",
          "desc": "Queijo, linguiça e pimenta-de-cheiro.",
          "preco": 14,
          "img": "../../../assets/img/pamonharia/pamonha-recheio.jpg",
          "tags": [
            "Picante"
          ]
        },
        {
          "nome": "Pamonha doce com queijo",
          "preco": 12,
          "img": "../../../assets/img/pamonharia/pamonhas-prato.jpg"
        },
        {
          "nome": "Pamonha de frango com catupiry",
          "preco": 14,
          "img": "../../../assets/img/pamonharia/pamonha-cafe.jpg"
        },
        {
          "nome": "Pamonha frita",
          "desc": "Pamonha de sal dourada na chapa com manteiga.",
          "preco": 13,
          "img": "1664339031047-970bf639e43f",
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
          "preco": 9,
          "img": "../../../assets/img/pamonharia/curau.jpg"
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
          "preco": 9,
          "img": "../../../assets/img/pamonharia/mingau.jpg"
        },
        {
          "nome": "Bolo de milho (fatia)",
          "desc": "Cremoso, receita de vó.",
          "preco": 7,
          "img": "../../../assets/img/pamonharia/bolo-milho-fatia.jpg"
        },
        {
          "nome": "Cuscuz com manteiga",
          "preco": 8,
          "img": "1582299385140-f316dbbba765"
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
          "preco": 18,
          "img": "../../../assets/img/pamonharia/empadao-goiano.jpg"
        },
        {
          "nome": "Pastel assado",
          "desc": "Carne, frango ou queijo.",
          "preco": 7,
          "img": "1624128082323-beb6b8b508db"
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
          "preco": 6,
          "img": "1696739696220-8d2e27465662"
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
          "preco": 108,
          "img": "../../../assets/img/pamonharia/pamonhas-prato.jpg"
        },
        {
          "nome": "Dúzia de pamonhas de sal",
          "desc": "Queijo, linguiça ou à moda (pode misturar).",
          "preco": 130,
          "img": "../../../assets/img/pamonharia/pamonha-amarrada.jpg"
        },
        {
          "nome": "Pamonha congelada",
          "desc": "Pacote com 5 unidades, dura até 3 meses no freezer.",
          "preco": 50,
          "img": "../../../assets/img/pamonharia/pamonha-feira.jpg"
        }
      ]
    }
  ],
  "creditosFotos": [
    {
      "autor": "Jorge Peixoto",
      "licenca": "CC BY-SA 3.0",
      "link": "https://commons.wikimedia.org/wiki/File:Pamonha_(unwrapped).jpg"
    },
    {
      "autor": "Isalinky",
      "licenca": "CC BY-SA 3.0",
      "link": "https://commons.wikimedia.org/wiki/File:Pamonhas.jpg"
    },
    {
      "autor": "Melsj",
      "licenca": "CC BY-SA 4.0",
      "link": "https://commons.wikimedia.org/wiki/File:Pamonha_1.jpg"
    },
    {
      "autor": "Melsj",
      "licenca": "CC BY-SA 4.0",
      "link": "https://commons.wikimedia.org/wiki/File:Pamonha_2.jpg"
    },
    {
      "autor": "Gleysielle de Aquino",
      "licenca": "CC BY-SA 4.0",
      "link": "https://commons.wikimedia.org/wiki/File:Pamonha,_prato_t%C3%ADpico_da_culin%C3%A1ria_brasileira.jpg"
    },
    {
      "autor": "Mateus S. Figueiredo",
      "licenca": "CC BY-SA 3.0",
      "link": "https://commons.wikimedia.org/wiki/File:Pamonha6.JPG"
    },
    {
      "autor": "MTur Destinos",
      "licenca": "Public domain",
      "link": "https://commons.wikimedia.org/wiki/File:LeandroMoura_FeiraDaLua_Goiania_GO_(39168863510).jpg"
    },
    {
      "autor": "Mateus S. Figueiredo",
      "licenca": "CC BY-SA 3.0",
      "link": "https://commons.wikimedia.org/wiki/File:Pamonha3.JPG"
    },
    {
      "autor": "Giselli Carvalho",
      "licenca": "CC BY 2.0",
      "link": "https://commons.wikimedia.org/wiki/File:Canjica1.jpg"
    },
    {
      "autor": "Leo Rey",
      "licenca": "CC BY 2.0",
      "link": "https://commons.wikimedia.org/wiki/File:Canjica_caipira.jpg"
    },
    {
      "autor": "Alebasi24",
      "licenca": "CC BY-SA 4.0",
      "link": "https://commons.wikimedia.org/wiki/File:Bolo_de_milho_caseiro.jpg"
    },
    {
      "autor": "Túllio F",
      "licenca": "CC BY-SA 4.0",
      "link": "https://commons.wikimedia.org/wiki/File:Bolo_de_Fub%C3%A1_(milho)_02.jpg"
    },
    {
      "autor": "Elis Florentine",
      "licenca": "CC BY 2.0",
      "link": "https://commons.wikimedia.org/wiki/File:Empad%C3%A3o_Goiano..jpg"
    },
    {
      "autor": "Simplus Menegati",
      "licenca": "CC BY-SA 4.0",
      "link": "https://commons.wikimedia.org/wiki/File:Preparando_mingau_de_milho_verde_em_Imba%C3%BA,_Paran%C3%A1.jpg"
    }
  ]
};
