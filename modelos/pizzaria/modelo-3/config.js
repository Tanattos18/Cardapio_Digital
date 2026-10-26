/*
 * Bella Massa — configuração do cardápio
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
  "modelo": "Pizzaria 3 · App de delivery",
  "layout": "app",
  "nome": "Bella Massa",
  "slogan": "Pizzas, massas e calzones feitos com carinho.",
  "logo": null,
  "capa": "1528137871618-79d2761e3fd5",
  "tema": {
    "fonteTitulo": "'Poppins', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "fundo": "#ffffff",
    "superficie": "#f5f7f5",
    "texto": "#1c211d",
    "suave": "#66706a",
    "primaria": "#0b7a3e",
    "textoPrimaria": "#ffffff",
    "secundaria": "#e63946"
  },
  "avaliacao": {
    "nota": 4.8,
    "total": 745
  },
  "sobre": "Cantina familiar com receitas da nonna: molho de tomate cozido por horas, massas frescas e pizzas assadas na pedra.",
  "diferenciais": [
    "Massa fresca feita na casa",
    "Molho de tomate artesanal",
    "Ambiente familiar"
  ],
  "galeria": [
    "1528137871618-79d2761e3fd5",
    "1621996346565-e3dbc646d9a9",
    "1604382354936-07c5d9983bd3"
  ],
  "contato": {
    "whatsapp": "5500900000006",
    "telefone": "(00) 90000-0006",
    "email": "contato@bellamassa.com.br"
  },
  "redes": {
    "instagram": "bellamassa",
    "facebook": "bellamassa",
    "ifood": "https://www.ifood.com.br"
  },
  "endereco": {
    "rua": "Rua Garibaldi, 77",
    "bairro": "Bela Vista",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    {
      "abre": "18:00",
      "fecha": "23:00"
    },
    null,
    {
      "abre": "18:00",
      "fecha": "23:00"
    },
    {
      "abre": "18:00",
      "fecha": "23:00"
    },
    {
      "abre": "18:00",
      "fecha": "23:00"
    },
    {
      "abre": "18:00",
      "fecha": "23:00"
    },
    {
      "abre": "18:00",
      "fecha": "23:00"
    }
  ],
  "entrega": {
    "taxa": 6,
    "tempo": "40–55 min",
    "pedidoMinimo": 40,
    "area": "Até 5 km"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro",
    "Vale-refeição"
  ],
  "mesas": 10,
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Massas e calzones",
      "icone": "🍝",
      "itens": [
        {
          "nome": "Penne ao sugo",
          "desc": "Molho de tomate artesanal, manjericão e parmesão.",
          "preco": 32.9,
          "img": "1621996346565-e3dbc646d9a9",
          "tags": [
            "Vegetariano"
          ]
        },
        {
          "nome": "Lasanha à bolonhesa",
          "desc": "Camadas de massa fresca, ragu de carne, presunto e queijo gratinado.",
          "preco": 39.9,
          "img": "1709429790175-b02bb1b19207",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Calzone de calabresa",
          "desc": "Calabresa, mussarela, cebola e catupiry.",
          "preco": 42.9,
          "img": "1753656681797-3234c89d6d4d"
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
              "preco": 39.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 49.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 62.9
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
              "preco": 42.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 52.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 66.9
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
              "preco": 46.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 57.9
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
          "img": "1590947132387-155cc02f3212"
        },
        {
          "nome": "Frango com catupiry",
          "desc": "Frango desfiado temperado e catupiry original.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Média (6 fatias)",
              "preco": 46.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 57.9
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
          "img": "1588315029754-2dd089d39a1a"
        },
        {
          "nome": "Quatro queijos",
          "desc": "Mussarela, provolone, parmesão e gorgonzola.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Média (6 fatias)",
              "preco": 48.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 59.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 74.9
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
              "preco": 49.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 61.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 76.9
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
              "preco": 52.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 64.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 79.9
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
              "preco": 52.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 64.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 79.9
            }
          ],
          "img": "1692737580563-7ba2d896f0f6",
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
              "preco": 64.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 79.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 96.9
            }
          ],
          "img": "1652952561151-97e82f26c336",
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
              "preco": 49.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 61.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 76.9
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
              "preco": 34.9
            },
            {
              "nome": "Média (6 fatias)",
              "preco": 44.9
            }
          ],
          "img": "1716237387665-85caef84051c"
        },
        {
          "nome": "Banana com canela",
          "desc": "Banana, açúcar, canela e leite condensado.",
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
          ],
          "img": "1606149186228-4e5ac94a742e"
        },
        {
          "nome": "Romeu e Julieta",
          "desc": "Mussarela e goiabada cremosa.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Broto (4 fatias)",
              "preco": 33.9
            },
            {
              "nome": "Média (6 fatias)",
              "preco": 43.9
            }
          ],
          "img": "1693399991519-bef70bed19a2"
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
          "preco": 14.9,
          "img": "1771770083584-b4b201c85f6a"
        },
        {
          "nome": "Refrigerante lata 350ml",
          "preco": 6.5,
          "img": "1696739696220-8d2e27465662"
        },
        {
          "nome": "Suco natural 500ml",
          "preco": 10.9,
          "img": "1600271886742-f049cd451bba"
        },
        {
          "nome": "Cerveja long neck",
          "preco": 9.9,
          "img": "1608270586620-248524c67de9"
        },
        {
          "nome": "Vinho tinto (taça)",
          "preco": 19.9,
          "img": "1437418747212-8d9709afab22"
        }
      ]
    }
  ]
};
