/*
 * Sabor da Terra — configuração do cardápio
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
  "modelo": "Restaurante 1 · App de delivery",
  "layout": "app",
  "nome": "Sabor da Terra",
  "slogan": "Comida caseira feita na hora, todo dia.",
  "logo": null,
  "capa": "1504674900247-0877df9cc836",
  "tema": {
    "fonteTitulo": "'Nunito', serif",
    "fonteTexto": "'Nunito', system-ui, sans-serif",
    "fundo": "#ffffff",
    "superficie": "#f4f8f5",
    "texto": "#1d2a22",
    "suave": "#5f6f65",
    "primaria": "#2f855a",
    "textoPrimaria": "#ffffff",
    "secundaria": "#f6ad55"
  },
  "avaliacao": {
    "nota": 4.8,
    "total": 1530
  },
  "promo": {
    "selo": "Sábado",
    "titulo": "Feijoada completa",
    "texto": "Todo sábado no almoço, com couve, farofa, laranja e torresmo."
  },
  "sobre": "Restaurante e marmitaria de comida caseira, com tempero de casa e ingredientes comprados toda manhã. Almoço servido no local ou entregue quentinho.",
  "diferenciais": [
    "Cardápio muda todo dia",
    "Marmita em embalagem térmica",
    "Opções fit e vegetarianas"
  ],
  "galeria": [
    "1504674900247-0877df9cc836",
    "1512621776951-a57141f2eefd",
    "1476224203421-9ac39bcb3327"
  ],
  "contato": {
    "whatsapp": "5500900000007",
    "telefone": "(00) 90000-0007",
    "email": "contato@sabordaterra.com.br"
  },
  "redes": {
    "instagram": "sabordaterra",
    "facebook": "sabordaterra",
    "ifood": "https://www.ifood.com.br"
  },
  "endereco": {
    "rua": "Rua do Comércio, 210",
    "bairro": "Centro",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    null,
    {
      "abre": "10:30",
      "fecha": "15:00"
    },
    {
      "abre": "10:30",
      "fecha": "15:00"
    },
    {
      "abre": "10:30",
      "fecha": "15:00"
    },
    {
      "abre": "10:30",
      "fecha": "15:00"
    },
    {
      "abre": "10:30",
      "fecha": "15:00"
    },
    {
      "abre": "11:00",
      "fecha": "15:30"
    }
  ],
  "entrega": {
    "taxa": 3,
    "tempo": "30–45 min",
    "pedidoMinimo": 18.9,
    "area": "Até 4 km"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro",
    "Vale-refeição"
  ],
  "mesas": 15,
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Marmitas",
      "icone": "🍱",
      "desc": "Arroz, feijão, 2 guarnições, salada e a carne do dia.",
      "itens": [
        {
          "nome": "Marmita",
          "desc": "Escolha o tamanho. Avise na observação se não quiser algum item.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Pequena (500g)",
              "preco": 18.9
            },
            {
              "nome": "Média (750g)",
              "preco": 22.9
            },
            {
              "nome": "Grande (1kg)",
              "preco": 26.9
            }
          ],
          "img": "1512621776951-a57141f2eefd",
          "tags": [
            "Mais pedido"
          ],
          "adicionais": [
            {
              "nome": "Ovo frito",
              "preco": 2.5
            },
            {
              "nome": "Carne extra",
              "preco": 8
            },
            {
              "nome": "Farofa",
              "preco": 2
            }
          ]
        },
        {
          "nome": "Feijoada (sábado)",
          "desc": "Serve 1 pessoa bem servida.",
          "preco": 34.9
        },
        {
          "nome": "Galinhada",
          "desc": "Arroz com frango caipira, açafrão e cheiro-verde.",
          "preco": 28.9
        }
      ]
    },
    {
      "nome": "Entradas",
      "icone": "🥗",
      "itens": [
        {
          "nome": "Salada da casa",
          "desc": "Folhas, tomate-cereja, palmito, queijo branco e molho de mostarda e mel.",
          "preco": 22.9,
          "img": "1505253716362-afaea1d3d1af",
          "tags": [
            "Vegetariano"
          ]
        },
        {
          "nome": "Caldinho de feijão",
          "desc": "Com bacon, cebolinha e torradas.",
          "preco": 10.9,
          "img": "1617093727343-374698b1b08d"
        },
        {
          "nome": "Bolinho de bacalhau",
          "desc": "6 unidades com maionese de limão.",
          "preco": 27.9
        }
      ]
    },
    {
      "nome": "Pratos principais",
      "icone": "🍽️",
      "desc": "Todos acompanham arroz branco ou à grega.",
      "itens": [
        {
          "nome": "Filé ao molho madeira",
          "desc": "Medalhão de filé mignon, molho madeira com champignon e batata frita.",
          "preco": 54.9,
          "img": "1600891964092-4316c288032e"
        },
        {
          "nome": "Picanha na chapa (serve 2)",
          "desc": "500g de picanha, farofa, vinagrete, mandioca e arroz.",
          "preco": 101.9,
          "img": "1615937657715-bc7b4b7962c1",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Frango grelhado com legumes",
          "desc": "Filé de frango, legumes salteados e arroz integral.",
          "preco": 35.9,
          "img": "1476224203421-9ac39bcb3327"
        },
        {
          "nome": "Moqueca de peixe (serve 2)",
          "desc": "Peixe branco, leite de coco, dendê, pimentões, arroz e pirão.",
          "preco": 83.9,
          "img": "1559847844-5315695dadae"
        },
        {
          "nome": "Espaguete ao camarão",
          "desc": "Camarões salteados no alho, tomate-cereja e manjericão.",
          "preco": 58.9,
          "img": "1563379926898-05f4575a45d8"
        },
        {
          "nome": "Parmegiana de carne",
          "desc": "Contrafilé empanado, molho de tomate, mussarela gratinada e fritas.",
          "preco": 49.9
        }
      ]
    },
    {
      "nome": "Executivos",
      "icone": "🕛",
      "desc": "De segunda a sexta, no almoço.",
      "itens": [
        {
          "nome": "Prato do dia",
          "desc": "Arroz, feijão, salada, guarnição e a carne do dia.",
          "preco": 20.9
        },
        {
          "nome": "Executivo de frango",
          "desc": "Filé de frango grelhado, arroz, feijão, salada e fritas.",
          "preco": 23.9
        },
        {
          "nome": "Executivo de bife acebolado",
          "desc": "Bife de alcatra acebolado, arroz, feijão, salada e fritas.",
          "preco": 24.9
        }
      ]
    },
    {
      "nome": "Sobremesas",
      "icone": "🍮",
      "itens": [
        {
          "nome": "Pudim de leite",
          "desc": "Receita da casa, com calda de caramelo.",
          "preco": 10.9
        },
        {
          "nome": "Petit gâteau",
          "desc": "Com sorvete de creme.",
          "preco": 18.9,
          "img": "1551024506-0bccd828d307"
        },
        {
          "nome": "Torta do dia (fatia)",
          "preco": 12.9,
          "img": "1565958011703-44f9829ba187"
        }
      ]
    },
    {
      "nome": "Bebidas",
      "icone": "🍹",
      "itens": [
        {
          "nome": "Suco natural 400ml",
          "desc": "Laranja, limão, maracujá, abacaxi ou melancia.",
          "preco": 7.9,
          "img": "1527661591475-527312dd65f5"
        },
        {
          "nome": "Refrigerante lata 350ml",
          "preco": 5.9
        },
        {
          "nome": "Água mineral",
          "preco": 4.5
        },
        {
          "nome": "Caipirinha",
          "desc": "Limão, morango ou maracujá. Cachaça ou vodka.",
          "preco": 16.9,
          "img": "1513558161293-cdaf765ed2fd"
        },
        {
          "nome": "Cerveja 600ml",
          "preco": 12.9,
          "img": "1608270586620-248524c67de9"
        },
        {
          "nome": "Vinho tinto (taça)",
          "preco": 20.9,
          "img": "1437418747212-8d9709afab22"
        }
      ]
    }
  ]
};
