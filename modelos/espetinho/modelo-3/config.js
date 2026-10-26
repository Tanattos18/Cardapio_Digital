/*
 * Brasa & Prosa — configuração do cardápio
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
  "modelo": "Espetinho 3 · Clássico",
  "layout": "classico",
  "nome": "Brasa & Prosa",
  "chamada": "Boteco de espetinho",
  "slogan": "Um bom espeto e uma boa prosa.",
  "logo": null,
  "capa": "1544025162-d76694265947",
  "tema": {
    "fonteTitulo": "'Alfa Slab One', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "fundo": "#f3ead8",
    "superficie": "#eadcc2",
    "texto": "#2a1a10",
    "suave": "#735c4a",
    "primaria": "#8c2f0d",
    "textoPrimaria": "#ffffff",
    "secundaria": "#c97b28"
  },
  "sobre": "Boteco de esquina com espírito de fundo de quintal. Toda carne é temperada na casa e assada na brasa, devagar, enquanto a prosa rola solta.",
  "diferenciais": [
    "Tempero da casa",
    "Cerveja de garrafa trincando",
    "Ambiente família"
  ],
  "galeria": [
    "1558030006-450675393462",
    "1555939594-58d7cb561ad1",
    "1608270586620-248524c67de9",
    "1470119693884-47d3a1d1f180"
  ],
  "contato": {
    "whatsapp": "5500900000012",
    "telefone": "(00) 90000-0012",
    "email": "contato@brasaprosa.com.br"
  },
  "redes": {
    "instagram": "brasaeprosa",
    "facebook": "brasaeprosa"
  },
  "endereco": {
    "rua": "Rua da Saudade, 18",
    "bairro": "Centro",
    "cidade": "Sua Cidade",
    "uf": "UF",
    "referencia": "Esquina com a Rua 7"
  },
  "horarios": [
    {
      "abre": "17:00",
      "fecha": "23:59"
    },
    null,
    {
      "abre": "17:00",
      "fecha": "23:59"
    },
    {
      "abre": "17:00",
      "fecha": "23:59"
    },
    {
      "abre": "17:00",
      "fecha": "23:59"
    },
    {
      "abre": "17:00",
      "fecha": "23:59"
    },
    {
      "abre": "17:00",
      "fecha": "23:59"
    }
  ],
  "entrega": {
    "taxa": 5,
    "tempo": "35–50 min",
    "pedidoMinimo": 25,
    "area": "Até 5 km"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro",
    "Vale-refeição"
  ],
  "mesas": 16,
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Tábuas",
      "icone": "🪵",
      "desc": "Servidas com mandioca, farofa e vinagrete.",
      "itens": [
        {
          "nome": "Tábua de picanha (500g)",
          "preco": 89.9,
          "img": "1558030006-450675393462",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Tábua mista (600g)",
          "desc": "Carne, frango, linguiça e coração.",
          "preco": 74.9,
          "img": "1495749388945-9d6e4e5b67b1"
        },
        {
          "nome": "Tábua de linguiça artesanal (500g)",
          "preco": 54.9,
          "img": "1624772398061-bbfa87ec6b5a"
        }
      ]
    },
    {
      "nome": "Espetinhos",
      "icone": "🍢",
      "desc": "Assados na brasa na hora. Acompanha farofa.",
      "itens": [
        {
          "nome": "Carne",
          "desc": "Alcatra temperada com sal grosso.",
          "preco": 8,
          "img": "1555939594-58d7cb561ad1",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Frango",
          "preco": 7,
          "img": "1594266063697-304befca9629"
        },
        {
          "nome": "Frango com bacon",
          "preco": 8.5,
          "img": "1603360946369-dc9bb6258143"
        },
        {
          "nome": "Linguiça toscana",
          "preco": 7.5,
          "img": "1591989330748-777649e84466"
        },
        {
          "nome": "Coração de frango",
          "preco": 8,
          "img": "1599487488170-d11ec9c172f0"
        },
        {
          "nome": "Queijo coalho",
          "desc": "Com melaço de cana ou orégano.",
          "preco": 8,
          "img": "1695754146526-5bab379f597a",
          "tags": [
            "Vegetariano"
          ]
        },
        {
          "nome": "Kafta",
          "desc": "Carne moída temperada com hortelã.",
          "preco": 9,
          "img": "1763647818263-62a9256f097c"
        },
        {
          "nome": "Medalhão de frango com bacon",
          "preco": 9.5,
          "img": "1753775290395-09e3cb0b6f70"
        },
        {
          "nome": "Misto",
          "desc": "Carne, frango, linguiça e pimentão.",
          "preco": 9,
          "img": "1529193591184-b1d58069ecdd"
        },
        {
          "nome": "Pão de alho",
          "preco": 7,
          "img": "1598785244280-7a428600d053"
        }
      ]
    },
    {
      "nome": "Jantinhas",
      "icone": "🍛",
      "desc": "Prato completo para matar a fome.",
      "itens": [
        {
          "nome": "Jantinha completa",
          "desc": "1 espeto à escolha, arroz, feijão tropeiro, vinagrete e mandioca.",
          "preco": 24.9,
          "img": "1544025162-d76694265947",
          "tags": [
            "Mais pedido"
          ],
          "adicionais": [
            {
              "nome": "Espeto extra",
              "preco": 8
            },
            {
              "nome": "Ovo frito",
              "preco": 2.5
            },
            {
              "nome": "Porção extra de mandioca",
              "preco": 5
            }
          ]
        },
        {
          "nome": "Jantinha dupla",
          "desc": "2 espetos à escolha com todos os acompanhamentos.",
          "preco": 32.9,
          "img": "1632158930341-46604b637a0f"
        }
      ]
    },
    {
      "nome": "Porções",
      "icone": "🍟",
      "itens": [
        {
          "nome": "Mandioca frita",
          "preco": 22.9,
          "img": "1684893265739-a88b30c33e92"
        },
        {
          "nome": "Batata frita",
          "preco": 24.9,
          "img": "1576107232684-1279f390859f"
        },
        {
          "nome": "Calabresa acebolada",
          "preco": 32.9,
          "img": "1592259695987-4aa79c3c34a6"
        },
        {
          "nome": "Frango a passarinho",
          "preco": 34.9,
          "img": "1608039755401-742074f0548d"
        },
        {
          "nome": "Torresmo",
          "preco": 29.9,
          "img": "1727867168767-c67974f68508"
        }
      ]
    },
    {
      "nome": "Bebidas",
      "icone": "🍺",
      "itens": [
        {
          "nome": "Cerveja 600ml",
          "desc": "Pergunte as marcas disponíveis.",
          "preco": 13.9,
          "img": "1608270586620-248524c67de9"
        },
        {
          "nome": "Cerveja lata 350ml",
          "preco": 6.9,
          "img": "1699107026455-0ed83c781458"
        },
        {
          "nome": "Chopp 300ml",
          "preco": 9.9,
          "img": "1535958636474-b021ee887b13"
        },
        {
          "nome": "Caipirinha",
          "desc": "Limão, morango ou maracujá.",
          "preco": 16.9,
          "img": "1513558161293-cdaf765ed2fd"
        },
        {
          "nome": "Refrigerante lata",
          "preco": 6,
          "img": "1696739696220-8d2e27465662"
        },
        {
          "nome": "Suco natural 400ml",
          "preco": 8.9,
          "img": "1600271886742-f049cd451bba"
        },
        {
          "nome": "Água mineral",
          "preco": 3.5,
          "img": "1616118132534-381148898bb4"
        }
      ]
    }
  ]
};
