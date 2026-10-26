/*
 * Espeto de Ouro — configuração do cardápio
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
  "modelo": "Espetinho 1 · Impacto",
  "layout": "impacto",
  "nome": "Espeto de Ouro",
  "chamada": "Espetaria & bar",
  "slogan": "Espetinho na brasa e cerveja trincando.",
  "logo": null,
  "capa": "1555939594-58d7cb561ad1",
  "tema": {
    "fonteTitulo": "'Bebas Neue', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "escuro": true,
    "fundo": "#120b08",
    "superficie": "#1e1410",
    "texto": "#fbefe6",
    "suave": "#bca99b",
    "primaria": "#e85d04",
    "textoPrimaria": "#ffffff",
    "secundaria": "#ffba08"
  },
  "avaliacao": {
    "nota": 4.8,
    "total": 1102
  },
  "promo": {
    "selo": "Quinta do chopp",
    "titulo": "Chopp 300ml a R$ 6,90",
    "texto": "Toda quinta, a noite toda."
  },
  "sobre": "Espetaria raiz com churrasqueira à vista, mesas na calçada e o melhor tropeiro da cidade. Carne selecionada e brasa de carvão.",
  "diferenciais": [
    "Churrasqueira à vista",
    "Carne selecionada",
    "Música ao vivo aos sábados",
    "Espaço kids"
  ],
  "galeria": [
    "1603360946369-dc9bb6258143",
    "1529193591184-b1d58069ecdd",
    "1535958636474-b021ee887b13",
    "1558030006-450675393462"
  ],
  "contato": {
    "whatsapp": "5500900000010",
    "telefone": "(00) 90000-0010",
    "email": "contato@espetodeouro.com.br"
  },
  "redes": {
    "instagram": "espetodeouro",
    "facebook": "espetodeouro",
    "tiktok": "espetodeouro"
  },
  "endereco": {
    "rua": "Rua dos Girassóis, 1200",
    "bairro": "Setor Oeste",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    {
      "abre": "17:00",
      "fecha": "00:30"
    },
    null,
    null,
    {
      "abre": "17:00",
      "fecha": "00:30"
    },
    {
      "abre": "17:00",
      "fecha": "00:30"
    },
    {
      "abre": "17:00",
      "fecha": "00:30"
    },
    {
      "abre": "17:00",
      "fecha": "00:30"
    }
  ],
  "entrega": {
    "taxa": 5,
    "tempo": "30–45 min",
    "pedidoMinimo": 30,
    "area": "Até 6 km"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro",
    "Vale-refeição"
  ],
  "mesas": 30,
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Especiais da casa",
      "icone": "🔥",
      "itens": [
        {
          "nome": "Espeto de picanha",
          "desc": "Picanha em cubos com sal grosso.",
          "preco": 16.9,
          "img": "1558030006-450675393462",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Espeto de cupim",
          "desc": "Cupim assado lentamente, desmanchando.",
          "preco": 14.9
        },
        {
          "nome": "Espeto de camarão",
          "desc": "Camarão temperado no alho e limão.",
          "preco": 18.9,
          "tags": [
            "Novo"
          ]
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
          "preco": 8.9,
          "img": "1555939594-58d7cb561ad1",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Frango",
          "preco": 7.9
        },
        {
          "nome": "Frango com bacon",
          "preco": 8.9,
          "img": "1603360946369-dc9bb6258143"
        },
        {
          "nome": "Linguiça toscana",
          "preco": 7.9
        },
        {
          "nome": "Coração de frango",
          "preco": 8.9
        },
        {
          "nome": "Queijo coalho",
          "desc": "Com melaço de cana ou orégano.",
          "preco": 8.9,
          "tags": [
            "Vegetariano"
          ]
        },
        {
          "nome": "Kafta",
          "desc": "Carne moída temperada com hortelã.",
          "preco": 9.9
        },
        {
          "nome": "Medalhão de frango com bacon",
          "preco": 9.9
        },
        {
          "nome": "Misto",
          "desc": "Carne, frango, linguiça e pimentão.",
          "preco": 9.9,
          "img": "1529193591184-b1d58069ecdd"
        },
        {
          "nome": "Pão de alho",
          "preco": 7.9
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
          "preco": 26.9,
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
          "preco": 35.9
        }
      ]
    },
    {
      "nome": "Porções",
      "icone": "🍟",
      "itens": [
        {
          "nome": "Mandioca frita",
          "preco": 24.9
        },
        {
          "nome": "Batata frita",
          "preco": 26.9,
          "img": "1576107232684-1279f390859f"
        },
        {
          "nome": "Calabresa acebolada",
          "preco": 35.9
        },
        {
          "nome": "Frango a passarinho",
          "preco": 37.9,
          "img": "1608039755401-742074f0548d"
        },
        {
          "nome": "Torresmo",
          "preco": 32.9
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
          "preco": 14.9,
          "img": "1608270586620-248524c67de9"
        },
        {
          "nome": "Cerveja lata 350ml",
          "preco": 7.9
        },
        {
          "nome": "Chopp 300ml",
          "preco": 10.9,
          "img": "1535958636474-b021ee887b13"
        },
        {
          "nome": "Caipirinha",
          "desc": "Limão, morango ou maracujá.",
          "preco": 18.9,
          "img": "1513558161293-cdaf765ed2fd"
        },
        {
          "nome": "Refrigerante lata",
          "preco": 6.9
        },
        {
          "nome": "Suco natural 400ml",
          "preco": 9.9
        },
        {
          "nome": "Água mineral",
          "preco": 3.5
        }
      ]
    }
  ]
};
