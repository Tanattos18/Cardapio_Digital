/*
 * Zé Burguer — configuração do cardápio
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
  "modelo": "Hamburgueria 3 · Clássico",
  "layout": "classico",
  "nome": "Zé Burguer",
  "chamada": "Lanchonete desde 1998",
  "slogan": "O X-Tudo mais famoso do bairro.",
  "logo": null,
  "capa": "1594212699903-ec8a3eca50f5",
  "tema": {
    "fonteTitulo": "'Playfair Display', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "fundo": "#f6efe4",
    "superficie": "#efe5d5",
    "texto": "#2b1d14",
    "suave": "#7a6656",
    "primaria": "#b4451f",
    "textoPrimaria": "#ffffff",
    "secundaria": "#d99b2b"
  },
  "sobre": "O Seu Zé começou com um carrinho de lanche na porta da escola. 25 anos depois, a receita do X-Tudo continua a mesma e a fila também.",
  "diferenciais": [
    "Receita de família",
    "Preço justo",
    "Lanche bem servido"
  ],
  "galeria": [
    "1586190848861-99aa4a171e90",
    "1599599810694-b5b37304c041",
    "1573080496219-bb080dd4f877",
    "1561758033-d89a9ad46330"
  ],
  "contato": {
    "whatsapp": "5500900000003",
    "telefone": "(00) 90000-0003",
    "email": "contato@zeburguer.com.br"
  },
  "redes": {
    "instagram": "zeburguer",
    "facebook": "zeburguer"
  },
  "endereco": {
    "rua": "Rua São José, 98",
    "bairro": "Vila Nova",
    "cidade": "Sua Cidade",
    "uf": "UF",
    "referencia": "Ao lado do mercado"
  },
  "horarios": [
    {
      "abre": "17:30",
      "fecha": "23:00"
    },
    null,
    {
      "abre": "17:30",
      "fecha": "23:00"
    },
    {
      "abre": "17:30",
      "fecha": "23:00"
    },
    {
      "abre": "17:30",
      "fecha": "23:00"
    },
    {
      "abre": "17:30",
      "fecha": "23:00"
    },
    {
      "abre": "17:30",
      "fecha": "23:00"
    }
  ],
  "entrega": {
    "taxa": 4,
    "tempo": "30–45 min",
    "area": "Bairro e arredores"
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
      "nome": "Lanches do Zé",
      "icone": "🥪",
      "desc": "No pão de hambúrguer tradicional.",
      "itens": [
        {
          "nome": "X-Tudo do Zé",
          "desc": "Hambúrguer, presunto, queijo, ovo, bacon, salsicha, milho, alface, tomate e batata palha.",
          "preco": 32.9,
          "img": "1559067933-0293effe6133",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "X-Salada",
          "desc": "Hambúrguer, queijo, alface, tomate e maionese.",
          "preco": 19.9,
          "img": "1757834787931-ddd70f3379a5"
        },
        {
          "nome": "X-Egg Bacon",
          "desc": "Hambúrguer, queijo, ovo e bacon.",
          "preco": 24.9,
          "img": "1601894087104-0c18bc34dbd6"
        },
        {
          "nome": "Cachorro-quente prensado",
          "desc": "Duas salsichas, molho, purê, milho, queijo e batata palha.",
          "preco": 15.9,
          "img": "1599599810694-b5b37304c041"
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
          "preco": 24.9,
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
          "preco": 29.9,
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
          "preco": 27.9,
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
          "preco": 26.9,
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
          "preco": 24.9,
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
          "preco": 25.9,
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
          "preco": 33.9,
          "img": "1594212699903-ec8a3eca50f5"
        },
        {
          "nome": "Combo Casal",
          "desc": "2 burgers à escolha + batata grande + 2 refrigerantes lata.",
          "preco": 67.9,
          "precoAntigo": 75.9,
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
              "preco": 12.9
            },
            {
              "nome": "Média",
              "preco": 16.9
            },
            {
              "nome": "Grande",
              "preco": 22.9
            }
          ],
          "img": "1630384060421-cb20d0e0649d"
        },
        {
          "nome": "Batata cheddar e bacon",
          "desc": "Porção grande coberta com cheddar cremoso e bacon.",
          "preco": 24.9,
          "img": "1541592106381-b31e9677c0e5"
        },
        {
          "nome": "Onion rings",
          "desc": "12 anéis de cebola empanados com molho barbecue.",
          "preco": 18.9,
          "img": "1612487439058-0564e17f761b"
        },
        {
          "nome": "Nuggets",
          "desc": "10 unidades com molho à escolha.",
          "preco": 18.9,
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
          "preco": 5.9,
          "img": "1696739696220-8d2e27465662"
        },
        {
          "nome": "Refrigerante 2L",
          "preco": 12.9,
          "img": "1771770083584-b4b201c85f6a"
        },
        {
          "nome": "Suco natural 400ml",
          "desc": "Laranja, limão, maracujá ou abacaxi com hortelã.",
          "preco": 7.9,
          "img": "1600271886742-f049cd451bba"
        },
        {
          "nome": "Milkshake",
          "desc": "Chocolate, morango, baunilha ou Ovomaltine.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "400ml",
              "preco": 15.9
            },
            {
              "nome": "700ml",
              "preco": 20.9
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
          "preco": 13.9,
          "img": "1551024506-0bccd828d307"
        }
      ]
    }
  ]
};
