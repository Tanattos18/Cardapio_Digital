/*
 * Point do Espetinho — configuração do cardápio
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
  "modelo": "Espetinho 2 · App de delivery",
  "layout": "app",
  "nome": "Point do Espetinho",
  "slogan": "Espetinho, jantinha e porção a preço de amigo.",
  "logo": null,
  "capa": "1529193591184-b1d58069ecdd",
  "tema": {
    "fonteTitulo": "'Poppins', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "fundo": "#ffffff",
    "superficie": "#f7f5f3",
    "texto": "#1f1a17",
    "suave": "#6e655f",
    "primaria": "#d00000",
    "textoPrimaria": "#ffffff",
    "secundaria": "#ffba08"
  },
  "avaliacao": {
    "nota": 4.7,
    "total": 688
  },
  "sobre": "O ponto de encontro do bairro para comer bem e pagar pouco. Jantinha completa, espetos variados e aquela cervejinha gelada.",
  "diferenciais": [
    "Jantinha completa",
    "Preço justo",
    "Delivery rápido"
  ],
  "galeria": [
    "1529193591184-b1d58069ecdd",
    "1544025162-d76694265947",
    "1608039755401-742074f0548d"
  ],
  "contato": {
    "whatsapp": "5500900000011",
    "telefone": "(00) 90000-0011",
    "email": "contato@pointdoespetinho.com.br"
  },
  "redes": {
    "instagram": "pointdoespetinho",
    "facebook": "pointdoespetinho",
    "ifood": "https://www.ifood.com.br"
  },
  "endereco": {
    "rua": "Rua Goiás, 345",
    "bairro": "Vila Operária",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    {
      "abre": "18:00",
      "fecha": "23:30"
    },
    null,
    {
      "abre": "18:00",
      "fecha": "23:30"
    },
    {
      "abre": "18:00",
      "fecha": "23:30"
    },
    {
      "abre": "18:00",
      "fecha": "23:30"
    },
    {
      "abre": "18:00",
      "fecha": "23:30"
    },
    {
      "abre": "18:00",
      "fecha": "23:30"
    }
  ],
  "entrega": {
    "taxa": 4,
    "tempo": "30–40 min",
    "pedidoMinimo": 20,
    "area": "Bairro e região"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro",
    "Vale-refeição"
  ],
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Combos",
      "icone": "🍢",
      "desc": "Para dividir com a galera.",
      "itens": [
        {
          "nome": "Combo 10 espetos",
          "desc": "10 espetos variados + farofa + vinagrete + mandioca.",
          "preco": 79.9,
          "precoAntigo": 89.9,
          "img": "1529193591184-b1d58069ecdd",
          "tags": [
            "Promoção"
          ]
        },
        {
          "nome": "Combo casal",
          "desc": "2 jantinhas completas + 2 refrigerantes lata.",
          "preco": 54.9,
          "img": "1632158930347-c096e5504ac7"
        },
        {
          "nome": "Kit churrasco para levar",
          "desc": "20 espetos crus temperados, prontos para assar.",
          "preco": 129.9,
          "img": "1495749388945-9d6e4e5b67b1"
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
          "preco": 7.9,
          "img": "1555939594-58d7cb561ad1",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Frango",
          "preco": 6.9,
          "img": "1594266063697-304befca9629"
        },
        {
          "nome": "Frango com bacon",
          "preco": 7.9,
          "img": "1603360946369-dc9bb6258143"
        },
        {
          "nome": "Linguiça toscana",
          "preco": 6.9,
          "img": "1591989330748-777649e84466"
        },
        {
          "nome": "Coração de frango",
          "preco": 7.9,
          "img": "1599487488170-d11ec9c172f0"
        },
        {
          "nome": "Queijo coalho",
          "desc": "Com melaço de cana ou orégano.",
          "preco": 7.9,
          "img": "1695754146526-5bab379f597a",
          "tags": [
            "Vegetariano"
          ]
        },
        {
          "nome": "Kafta",
          "desc": "Carne moída temperada com hortelã.",
          "preco": 8.9,
          "img": "1763647818263-62a9256f097c"
        },
        {
          "nome": "Medalhão de frango com bacon",
          "preco": 8.9,
          "img": "1753775290395-09e3cb0b6f70"
        },
        {
          "nome": "Misto",
          "desc": "Carne, frango, linguiça e pimentão.",
          "preco": 8.9,
          "img": "1529193591184-b1d58069ecdd"
        },
        {
          "nome": "Pão de alho",
          "preco": 6.9,
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
          "preco": 23.9,
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
          "preco": 30.9,
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
          "preco": 21.9,
          "img": "1684893265739-a88b30c33e92"
        },
        {
          "nome": "Batata frita",
          "preco": 23.9,
          "img": "1576107232684-1279f390859f"
        },
        {
          "nome": "Calabresa acebolada",
          "preco": 30.9,
          "img": "1592259695987-4aa79c3c34a6"
        },
        {
          "nome": "Frango a passarinho",
          "preco": 32.9,
          "img": "1608039755401-742074f0548d"
        },
        {
          "nome": "Torresmo",
          "preco": 27.9,
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
          "preco": 12.9,
          "img": "1608270586620-248524c67de9"
        },
        {
          "nome": "Cerveja lata 350ml",
          "preco": 6.9,
          "img": "1699107026455-0ed83c781458"
        },
        {
          "nome": "Chopp 300ml",
          "preco": 8.9,
          "img": "1535958636474-b021ee887b13"
        },
        {
          "nome": "Caipirinha",
          "desc": "Limão, morango ou maracujá.",
          "preco": 15.9,
          "img": "1513558161293-cdaf765ed2fd"
        },
        {
          "nome": "Refrigerante lata",
          "preco": 5.9,
          "img": "1696739696220-8d2e27465662"
        },
        {
          "nome": "Suco natural 400ml",
          "preco": 7.9,
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
