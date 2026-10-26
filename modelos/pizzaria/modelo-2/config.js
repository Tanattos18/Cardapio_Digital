/*
 * Pizza Express — configuração do cardápio
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
  "modelo": "Pizzaria 2 · Impacto",
  "layout": "impacto",
  "nome": "Pizza Express",
  "chamada": "Pizzaria e delivery",
  "slogan": "Pizza quentinha na sua porta em até 40 minutos.",
  "logo": null,
  "capa": "1588315029754-2dd089d39a1a",
  "tema": {
    "fonteTitulo": "'Archivo Black', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "fundo": "#fffaf3",
    "superficie": "#ffffff",
    "texto": "#222222",
    "suave": "#6d6760",
    "primaria": "#d62828",
    "textoPrimaria": "#ffffff",
    "secundaria": "#f77f00"
  },
  "avaliacao": {
    "nota": 4.7,
    "total": 2310
  },
  "promo": {
    "selo": "Quarta maluca",
    "titulo": "Toda quarta, 2ª pizza grande com 50% off",
    "texto": "Na compra de qualquer pizza grande tradicional."
  },
  "sobre": "Somos a pizzaria do bairro que entrega rápido sem abrir mão de recheio caprichado. Mais de 10 mil pizzas entregues por ano.",
  "diferenciais": [
    "Entrega em até 40 min",
    "Recheio até a borda",
    "Bordas recheadas"
  ],
  "galeria": [
    "1565299624946-b28f40a0ae38",
    "1588315029754-2dd089d39a1a",
    "1513104890138-7c749659a591",
    "1590947132387-155cc02f3212"
  ],
  "contato": {
    "whatsapp": "5500900000005",
    "telefone": "(00) 90000-0005",
    "email": "contato@pizzaexpress.com.br"
  },
  "redes": {
    "instagram": "pizzaexpress.demo",
    "facebook": "pizzaexpress.demo",
    "tiktok": "pizzaexpress.demo",
    "ifood": "https://www.ifood.com.br"
  },
  "endereco": {
    "rua": "Avenida Central, 2020",
    "bairro": "Centro",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    {
      "abre": "18:00",
      "fecha": "00:00"
    },
    {
      "abre": "18:00",
      "fecha": "00:00"
    },
    {
      "abre": "18:00",
      "fecha": "00:00"
    },
    {
      "abre": "18:00",
      "fecha": "00:00"
    },
    {
      "abre": "18:00",
      "fecha": "00:00"
    },
    {
      "abre": "18:00",
      "fecha": "00:00"
    },
    {
      "abre": "18:00",
      "fecha": "00:00"
    }
  ],
  "entrega": {
    "taxa": 5,
    "tempo": "30–40 min",
    "pedidoMinimo": 35,
    "gratisAcima": 100,
    "area": "Toda a cidade"
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
      "icone": "🔥",
      "desc": "Mais pizza, menos gasto.",
      "itens": [
        {
          "nome": "Combo Família",
          "desc": "2 pizzas grandes tradicionais + refrigerante 2L.",
          "preco": 109.9,
          "precoAntigo": 124.9,
          "img": "1565299624946-b28f40a0ae38",
          "tags": [
            "Promoção"
          ]
        },
        {
          "nome": "Combo Doce",
          "desc": "1 pizza grande tradicional + 1 broto doce + refrigerante 2L.",
          "preco": 84.9,
          "img": "1513104890138-7c749659a591"
        },
        {
          "nome": "Combo Solo",
          "desc": "1 pizza média tradicional + refrigerante lata.",
          "preco": 44.9
        }
      ]
    },
    {
      "nome": "Pizzas tradicionais",
      "icone": "🍕",
      "desc": "Massa de longa fermentação, assada no forno a lenha. Meio a meio? Avise na observação.",
      "itens": [
        {
          "nome": "Mussarela",
          "desc": "Molho de tomate, mussarela, tomate e orégano.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Média (6 fatias)",
              "preco": 37.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 46.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 59.9
            }
          ],
          "adicionais": [
            {
              "nome": "Borda de catupiry",
              "preco": 10
            },
            {
              "nome": "Borda de cheddar",
              "preco": 10
            },
            {
              "nome": "Borda de chocolate",
              "preco": 12
            }
          ],
          "img": "1513104890138-7c749659a591"
        },
        {
          "nome": "Calabresa",
          "desc": "Mussarela, calabresa fatiada e cebola.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Média (6 fatias)",
              "preco": 40.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 49.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 63.9
            }
          ],
          "adicionais": [
            {
              "nome": "Borda de catupiry",
              "preco": 10
            },
            {
              "nome": "Borda de cheddar",
              "preco": 10
            },
            {
              "nome": "Borda de chocolate",
              "preco": 12
            }
          ],
          "img": "1565299624946-b28f40a0ae38",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Margherita",
          "desc": "Mussarela, tomate e manjericão fresco.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Média (6 fatias)",
              "preco": 42.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 51.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 64.9
            }
          ],
          "adicionais": [
            {
              "nome": "Borda de catupiry",
              "preco": 10
            },
            {
              "nome": "Borda de cheddar",
              "preco": 10
            },
            {
              "nome": "Borda de chocolate",
              "preco": 12
            }
          ],
          "img": "1574071318508-1cdbab80d002",
          "tags": [
            "Vegetariano"
          ]
        },
        {
          "nome": "Portuguesa",
          "desc": "Presunto, ovos, cebola, ervilha, azeitona e mussarela.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Média (6 fatias)",
              "preco": 44.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 54.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 68.9
            }
          ],
          "adicionais": [
            {
              "nome": "Borda de catupiry",
              "preco": 10
            },
            {
              "nome": "Borda de cheddar",
              "preco": 10
            },
            {
              "nome": "Borda de chocolate",
              "preco": 12
            }
          ],
          "img": "1590947132387-155cc02f3212"
        },
        {
          "nome": "Frango com catupiry",
          "desc": "Frango desfiado temperado e catupiry original.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Média (6 fatias)",
              "preco": 44.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 54.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 68.9
            }
          ],
          "adicionais": [
            {
              "nome": "Borda de catupiry",
              "preco": 10
            },
            {
              "nome": "Borda de cheddar",
              "preco": 10
            },
            {
              "nome": "Borda de chocolate",
              "preco": 12
            }
          ],
          "img": "1588315029754-2dd089d39a1a"
        },
        {
          "nome": "Quatro queijos",
          "desc": "Mussarela, provolone, parmesão e gorgonzola.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Média (6 fatias)",
              "preco": 45.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 56.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 70.9
            }
          ],
          "adicionais": [
            {
              "nome": "Borda de catupiry",
              "preco": 10
            },
            {
              "nome": "Borda de cheddar",
              "preco": 10
            },
            {
              "nome": "Borda de chocolate",
              "preco": 12
            }
          ],
          "img": "1604382354936-07c5d9983bd3"
        },
        {
          "nome": "Pepperoni",
          "desc": "Mussarela e pepperoni fatiado.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Média (6 fatias)",
              "preco": 46.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 58.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 72.9
            }
          ],
          "adicionais": [
            {
              "nome": "Borda de catupiry",
              "preco": 10
            },
            {
              "nome": "Borda de cheddar",
              "preco": 10
            },
            {
              "nome": "Borda de chocolate",
              "preco": 12
            }
          ],
          "img": "1506354666786-959d6d497f1a"
        }
      ]
    },
    {
      "nome": "Pizzas especiais",
      "icone": "⭐",
      "itens": [
        {
          "nome": "Rúcula com tomate seco",
          "desc": "Mussarela de búfala, rúcula fresca e tomate seco.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Média (6 fatias)",
              "preco": 49.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 61.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 75.9
            }
          ],
          "adicionais": [
            {
              "nome": "Borda de catupiry",
              "preco": 10
            },
            {
              "nome": "Borda de cheddar",
              "preco": 10
            },
            {
              "nome": "Borda de chocolate",
              "preco": 12
            }
          ],
          "img": "1528137871618-79d2761e3fd5"
        },
        {
          "nome": "Lombo com cream cheese",
          "desc": "Lombo canadense, cream cheese e cebola roxa.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Média (6 fatias)",
              "preco": 49.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 61.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 75.9
            }
          ],
          "adicionais": [
            {
              "nome": "Borda de catupiry",
              "preco": 10
            },
            {
              "nome": "Borda de cheddar",
              "preco": 10
            },
            {
              "nome": "Borda de chocolate",
              "preco": 12
            }
          ]
        },
        {
          "nome": "Camarão",
          "desc": "Camarão refogado no alho, catupiry e cheiro-verde.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Média (6 fatias)",
              "preco": 61.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 75.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 91.9
            }
          ],
          "adicionais": [
            {
              "nome": "Borda de catupiry",
              "preco": 10
            },
            {
              "nome": "Borda de cheddar",
              "preco": 10
            },
            {
              "nome": "Borda de chocolate",
              "preco": 12
            }
          ],
          "img": null,
          "tags": [
            "Novo"
          ]
        },
        {
          "nome": "Vegana de legumes",
          "desc": "Abobrinha, berinjela, pimentões, tomate e azeitonas, sem queijo.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Média (6 fatias)",
              "preco": 46.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 58.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 72.9
            }
          ],
          "adicionais": [
            {
              "nome": "Borda de catupiry",
              "preco": 10
            },
            {
              "nome": "Borda de cheddar",
              "preco": 10
            },
            {
              "nome": "Borda de chocolate",
              "preco": 12
            }
          ],
          "img": "1585238342024-78d387f4a707",
          "tags": [
            "Vegano"
          ]
        }
      ]
    },
    {
      "nome": "Pizzas doces",
      "icone": "🍫",
      "itens": [
        {
          "nome": "Chocolate com morango",
          "desc": "Chocolate ao leite e morangos frescos.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Broto (4 fatias)",
              "preco": 32.9
            },
            {
              "nome": "Média (6 fatias)",
              "preco": 42.9
            }
          ]
        },
        {
          "nome": "Banana com canela",
          "desc": "Banana, açúcar, canela e leite condensado.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Broto (4 fatias)",
              "preco": 30.9
            },
            {
              "nome": "Média (6 fatias)",
              "preco": 40.9
            }
          ]
        },
        {
          "nome": "Romeu e Julieta",
          "desc": "Mussarela e goiabada cremosa.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Broto (4 fatias)",
              "preco": 31.9
            },
            {
              "nome": "Média (6 fatias)",
              "preco": 41.9
            }
          ]
        }
      ]
    },
    {
      "nome": "Bebidas",
      "icone": "🥤",
      "itens": [
        {
          "nome": "Refrigerante 2L",
          "desc": "Coca-Cola, Guaraná ou Fanta.",
          "preco": 13.9
        },
        {
          "nome": "Refrigerante lata 350ml",
          "preco": 5.9
        },
        {
          "nome": "Suco natural 500ml",
          "preco": 9.9,
          "img": "1600271886742-f049cd451bba"
        },
        {
          "nome": "Cerveja long neck",
          "preco": 8.9,
          "img": "1608270586620-248524c67de9"
        },
        {
          "nome": "Vinho tinto (taça)",
          "preco": 18.9,
          "img": "1437418747212-8d9709afab22"
        }
      ]
    }
  ]
};
