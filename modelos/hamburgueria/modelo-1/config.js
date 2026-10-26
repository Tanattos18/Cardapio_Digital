/*
 * Brasa Burger — configuração do cardápio
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
  "modelo": "Hamburgueria 1 · Impacto",
  "layout": "impacto",
  "nome": "Brasa Burger",
  "chamada": "Hamburgueria artesanal",
  "slogan": "Burger na brasa, do jeito que tem que ser.",
  "logo": null,
  "capa": "1572802419224-296b0aeee0d9",
  "tema": {
    "fonteTitulo": "'Bebas Neue', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "escuro": true,
    "fundo": "#0f0f10",
    "superficie": "#19191b",
    "texto": "#f5f5f5",
    "suave": "#a8a8ad",
    "primaria": "#ff6b1a",
    "textoPrimaria": "#111111",
    "secundaria": "#ffc23d"
  },
  "avaliacao": {
    "nota": 4.9,
    "total": 1284
  },
  "promo": {
    "selo": "Terça do burger",
    "titulo": "Cheese Bacon em dobro",
    "texto": "Toda terça: compre um Cheese Bacon e ganhe o segundo pela metade do preço."
  },
  "sobre": "Nascemos em 2019 no quintal de casa, com uma churrasqueira e uma ideia: burger artesanal feito na brasa. Hoje, nosso blend é moído diariamente e o pão brioche é feito por uma padaria parceira do bairro.",
  "diferenciais": [
    "Blend bovino moído todo dia",
    "Pão brioche artesanal",
    "Feito na brasa de carvão",
    "Entrega em embalagem térmica"
  ],
  "galeria": [
    "1553979459-d2229ba7433b",
    "1630384060421-cb20d0e0649d",
    "1571091718767-18b5b1457add",
    "1541658016709-82535e94bc69"
  ],
  "contato": {
    "whatsapp": "5500900000001",
    "telefone": "(00) 90000-0001",
    "email": "contato@brasaburger.com.br"
  },
  "redes": {
    "instagram": "brasaburger",
    "facebook": "brasaburger",
    "tiktok": "brasaburger",
    "ifood": "https://www.ifood.com.br"
  },
  "endereco": {
    "rua": "Rua das Palmeiras, 450",
    "bairro": "Centro",
    "cidade": "Sua Cidade",
    "uf": "UF",
    "referencia": "Em frente à praça da matriz"
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
    "taxa": 6,
    "tempo": "35–50 min",
    "pedidoMinimo": 30,
    "gratisAcima": 120,
    "area": "Até 7 km do centro"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro",
    "Vale-refeição"
  ],
  "mesas": 12,
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Da Brasa",
      "icone": "🔥",
      "desc": "As receitas que fizeram nossa fama.",
      "itens": [
        {
          "nome": "Brasa Monster",
          "desc": "Dois blends de 180g, cheddar duplo, bacon, onion rings e barbecue defumado.",
          "preco": 44.9,
          "img": "1572802419224-296b0aeee0d9",
          "tags": [
            "Mais pedido"
          ],
          "adicionais": [
            {
              "nome": "Bacon extra",
              "preco": 5
            },
            {
              "nome": "Cheddar extra",
              "preco": 4
            },
            {
              "nome": "Ovo",
              "preco": 3
            },
            {
              "nome": "Blend extra 150g",
              "preco": 9
            },
            {
              "nome": "Cebola caramelizada",
              "preco": 3
            }
          ]
        },
        {
          "nome": "Brasa Costela",
          "desc": "Blend de costela 180g, queijo coalho grelhado e cebola crispy.",
          "preco": 39.9,
          "img": "1571091718767-18b5b1457add",
          "tags": [
            "Novo"
          ],
          "adicionais": [
            {
              "nome": "Bacon extra",
              "preco": 5
            },
            {
              "nome": "Cheddar extra",
              "preco": 4
            },
            {
              "nome": "Ovo",
              "preco": 3
            },
            {
              "nome": "Blend extra 150g",
              "preco": 9
            },
            {
              "nome": "Cebola caramelizada",
              "preco": 3
            }
          ]
        },
        {
          "nome": "Jalapeño",
          "desc": "Blend 150g, pepper jack, jalapeños e maionese de chipotle.",
          "preco": 36.9,
          "img": "1565299507177-b0ac66763828",
          "tags": [
            "Picante"
          ],
          "adicionais": [
            {
              "nome": "Bacon extra",
              "preco": 5
            },
            {
              "nome": "Cheddar extra",
              "preco": 4
            },
            {
              "nome": "Ovo",
              "preco": 3
            },
            {
              "nome": "Blend extra 150g",
              "preco": 9
            },
            {
              "nome": "Cebola caramelizada",
              "preco": 3
            }
          ]
        }
      ]
    },
    {
      "nome": "Burgers",
      "icone": "🍔",
      "desc": "Pão brioche selado na manteiga e blend bovino artesanal.",
      "itens": [
        {
          "nome": "Clássico",
          "desc": "Blend 150g, queijo prato, alface, tomate e molho da casa.",
          "preco": 28.9,
          "img": "1586190848861-99aa4a171e90",
          "adicionais": [
            {
              "nome": "Bacon extra",
              "preco": 5
            },
            {
              "nome": "Cheddar extra",
              "preco": 4
            },
            {
              "nome": "Ovo",
              "preco": 3
            },
            {
              "nome": "Blend extra 150g",
              "preco": 9
            },
            {
              "nome": "Cebola caramelizada",
              "preco": 3
            }
          ]
        },
        {
          "nome": "Cheese Bacon",
          "desc": "Blend 150g, cheddar, bacon crocante e cebola caramelizada.",
          "preco": 34.9,
          "img": "1553979459-d2229ba7433b",
          "tags": [
            "Mais pedido"
          ],
          "adicionais": [
            {
              "nome": "Bacon extra",
              "preco": 5
            },
            {
              "nome": "Cheddar extra",
              "preco": 4
            },
            {
              "nome": "Ovo",
              "preco": 3
            },
            {
              "nome": "Blend extra 150g",
              "preco": 9
            },
            {
              "nome": "Cebola caramelizada",
              "preco": 3
            }
          ]
        },
        {
          "nome": "Duplo Smash",
          "desc": "Dois smash de 90g, cheddar duplo, picles e molho especial.",
          "preco": 32.9,
          "img": "1607013251379-e6eecfffe234",
          "adicionais": [
            {
              "nome": "Bacon extra",
              "preco": 5
            },
            {
              "nome": "Cheddar extra",
              "preco": 4
            },
            {
              "nome": "Ovo",
              "preco": 3
            },
            {
              "nome": "Blend extra 150g",
              "preco": 9
            },
            {
              "nome": "Cebola caramelizada",
              "preco": 3
            }
          ]
        },
        {
          "nome": "Salada Fit",
          "desc": "Blend 150g, mussarela, rúcula, tomate e maionese verde no pão australiano.",
          "preco": 31.9,
          "img": "1568901346375-23c9450c58cd",
          "adicionais": [
            {
              "nome": "Bacon extra",
              "preco": 5
            },
            {
              "nome": "Cheddar extra",
              "preco": 4
            },
            {
              "nome": "Ovo",
              "preco": 3
            },
            {
              "nome": "Blend extra 150g",
              "preco": 9
            },
            {
              "nome": "Cebola caramelizada",
              "preco": 3
            }
          ]
        },
        {
          "nome": "Chicken Crispy",
          "desc": "Filé de frango empanado, queijo, alface e maionese de alho.",
          "preco": 29.9,
          "img": "1626082927389-6cd097cdc6ec",
          "adicionais": [
            {
              "nome": "Bacon extra",
              "preco": 5
            },
            {
              "nome": "Cheddar extra",
              "preco": 4
            },
            {
              "nome": "Ovo",
              "preco": 3
            },
            {
              "nome": "Blend extra 150g",
              "preco": 9
            },
            {
              "nome": "Cebola caramelizada",
              "preco": 3
            }
          ]
        },
        {
          "nome": "Veggie",
          "desc": "Hambúrguer de grão-de-bico, queijo, tomate e cebola roxa.",
          "preco": 30.9,
          "img": "1550547660-d9450f859349",
          "tags": [
            "Vegetariano"
          ]
        }
      ]
    },
    {
      "nome": "Combos",
      "icone": "🍟",
      "desc": "Acompanham batata e refrigerante lata.",
      "itens": [
        {
          "nome": "Combo Clássico",
          "desc": "Burger Clássico + batata média + refrigerante lata.",
          "preco": 39.9,
          "img": "1594212699903-ec8a3eca50f5"
        },
        {
          "nome": "Combo Casal",
          "desc": "2 burgers à escolha + batata grande + 2 refrigerantes lata.",
          "preco": 79.9,
          "precoAntigo": 89.9,
          "img": "1561758033-d89a9ad46330",
          "tags": [
            "Promoção"
          ]
        }
      ]
    },
    {
      "nome": "Porções",
      "icone": "🥔",
      "itens": [
        {
          "nome": "Batata frita",
          "desc": "Crocante, com sal e alecrim.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Pequena",
              "preco": 14.9
            },
            {
              "nome": "Média",
              "preco": 19.9
            },
            {
              "nome": "Grande",
              "preco": 26.9
            }
          ],
          "img": "1630384060421-cb20d0e0649d"
        },
        {
          "nome": "Batata cheddar e bacon",
          "desc": "Porção grande coberta com cheddar cremoso e bacon.",
          "preco": 29.9,
          "img": "1541592106381-b31e9677c0e5"
        },
        {
          "nome": "Onion rings",
          "desc": "12 anéis de cebola empanados com molho barbecue.",
          "preco": 22.9,
          "img": "1612487439058-0564e17f761b"
        },
        {
          "nome": "Nuggets",
          "desc": "10 unidades com molho à escolha.",
          "preco": 21.9,
          "img": "1626645738196-c2a7c87a8f58"
        }
      ]
    },
    {
      "nome": "Bebidas",
      "icone": "🥤",
      "itens": [
        {
          "nome": "Refrigerante lata 350ml",
          "desc": "Coca-Cola, Guaraná, Fanta ou Sprite.",
          "preco": 6.5,
          "img": "1696739696220-8d2e27465662"
        },
        {
          "nome": "Refrigerante 2L",
          "preco": 14.9,
          "img": "1771770083584-b4b201c85f6a"
        },
        {
          "nome": "Suco natural 400ml",
          "desc": "Laranja, limão, maracujá ou abacaxi com hortelã.",
          "preco": 9.9,
          "img": "1600271886742-f049cd451bba"
        },
        {
          "nome": "Milkshake",
          "desc": "Chocolate, morango, baunilha ou Ovomaltine.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "400ml",
              "preco": 18.9
            },
            {
              "nome": "700ml",
              "preco": 24.9
            }
          ],
          "img": "1572490122747-3968b75cc699"
        },
        {
          "nome": "Água mineral 500ml",
          "preco": 4,
          "img": "1616118132534-381148898bb4"
        }
      ]
    },
    {
      "nome": "Sobremesas",
      "icone": "🍫",
      "itens": [
        {
          "nome": "Brownie com sorvete",
          "desc": "Brownie quentinho, sorvete de creme e calda de chocolate.",
          "preco": 16.9,
          "img": "1551024506-0bccd828d307"
        }
      ]
    }
  ]
};
