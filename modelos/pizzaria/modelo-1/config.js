/*
 * Forno di Napoli — configuração do cardápio
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
  "modelo": "Pizzaria 1 · Clássico",
  "layout": "classico",
  "nome": "Forno di Napoli",
  "chamada": "Pizzeria napoletana",
  "slogan": "Massa de 48 horas, forno a lenha a 450 °C.",
  "logo": null,
  "capa": "1595854341625-f33ee10dbf94",
  "tema": {
    "fonteTitulo": "'Cormorant Garamond', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "escuro": true,
    "fundo": "#14120f",
    "superficie": "#1d1a16",
    "texto": "#f3ede4",
    "suave": "#b3a998",
    "primaria": "#e4572e",
    "textoPrimaria": "#ffffff",
    "secundaria": "#d4a373"
  },
  "avaliacao": {
    "nota": 4.9,
    "total": 611
  },
  "sobre": "Trouxemos de Nápoles a receita de massa leve, de longa fermentação, e o forno a lenha construído tijolo por tijolo. Ingredientes simples, escolhidos com cuidado.",
  "diferenciais": [
    "Fermentação natural de 48 h",
    "Forno a lenha",
    "Tomate italiano San Marzano",
    "Carta de vinhos"
  ],
  "galeria": [
    "1574071318508-1cdbab80d002",
    "1528137871618-79d2761e3fd5",
    "1437418747212-8d9709afab22",
    "1595854341625-f33ee10dbf94"
  ],
  "contato": {
    "whatsapp": "5500900000004",
    "telefone": "(00) 90000-0004",
    "email": "contato@fornodinapoli.com.br"
  },
  "redes": {
    "instagram": "fornodinapoli",
    "facebook": "fornodinapoli",
    "youtube": "fornodinapoli"
  },
  "endereco": {
    "rua": "Rua Itália, 310",
    "bairro": "Jardins",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    {
      "abre": "18:30",
      "fecha": "23:30"
    },
    null,
    {
      "abre": "18:30",
      "fecha": "23:30"
    },
    {
      "abre": "18:30",
      "fecha": "23:30"
    },
    {
      "abre": "18:30",
      "fecha": "23:30"
    },
    {
      "abre": "18:30",
      "fecha": "23:30"
    },
    {
      "abre": "18:30",
      "fecha": "23:30"
    }
  ],
  "entrega": {
    "taxa": 8,
    "tempo": "40–60 min",
    "pedidoMinimo": 50,
    "area": "Até 6 km"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro",
    "Vale-refeição"
  ],
  "mesas": 20,
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Napoletanas da casa",
      "icone": "🍅",
      "desc": "Massa fina com borda alta e aerada.",
      "itens": [
        {
          "nome": "Margherita DOC",
          "desc": "San Marzano, fior di latte, manjericão e azeite extravirgem.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Individual (30 cm)",
              "preco": 54.9
            },
            {
              "nome": "Grande (40 cm)",
              "preco": 79.9
            }
          ],
          "img": "1574071318508-1cdbab80d002",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Diavola",
          "desc": "Salame picante, mussarela, pimenta calabresa e mel.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Individual (30 cm)",
              "preco": 59.9
            },
            {
              "nome": "Grande (40 cm)",
              "preco": 86.9
            }
          ],
          "img": "1506354666786-959d6d497f1a",
          "tags": [
            "Picante"
          ]
        },
        {
          "nome": "Burrata e pesto",
          "desc": "Burrata inteira, pesto de manjericão e tomate-cereja assado.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Individual (30 cm)",
              "preco": 64.9
            },
            {
              "nome": "Grande (40 cm)",
              "preco": 94.9
            }
          ],
          "img": "1593560708920-61dd98c46a4e",
          "tags": [
            "Novo"
          ]
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
              "preco": 45.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 56.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 71.9
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
              "preco": 48.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 60.9
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
              "preco": 51.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 62.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 78.9
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
              "preco": 53.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 66.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 83.9
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
              "preco": 53.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 66.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 83.9
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
              "preco": 55.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 68.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 85.9
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
              "preco": 56.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 70.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 87.9
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
              "preco": 60.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 74.9
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
          "img": "1528137871618-79d2761e3fd5"
        },
        {
          "nome": "Lombo com cream cheese",
          "desc": "Lombo canadense, cream cheese e cebola roxa.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Média (6 fatias)",
              "preco": 60.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 74.9
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
          ]
        },
        {
          "nome": "Camarão",
          "desc": "Camarão refogado no alho, catupiry e cheiro-verde.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Média (6 fatias)",
              "preco": 74.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 91.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 110.9
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
              "preco": 56.9
            },
            {
              "nome": "Grande (8 fatias)",
              "preco": 70.9
            },
            {
              "nome": "Família (12 fatias)",
              "preco": 87.9
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
              "preco": 39.9
            },
            {
              "nome": "Média (6 fatias)",
              "preco": 51.9
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
              "preco": 37.9
            },
            {
              "nome": "Média (6 fatias)",
              "preco": 48.9
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
              "preco": 38.9
            },
            {
              "nome": "Média (6 fatias)",
              "preco": 49.9
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
          "preco": 16.9
        },
        {
          "nome": "Refrigerante lata 350ml",
          "preco": 6.9
        },
        {
          "nome": "Suco natural 500ml",
          "preco": 12.9,
          "img": "1600271886742-f049cd451bba"
        },
        {
          "nome": "Cerveja long neck",
          "preco": 10.9,
          "img": "1608270586620-248524c67de9"
        },
        {
          "nome": "Vinho tinto (taça)",
          "preco": 22.9,
          "img": "1437418747212-8d9709afab22"
        }
      ]
    }
  ]
};
