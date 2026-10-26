/*
 * Smash Club — configuração do cardápio
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
  "modelo": "Hamburgueria 2 · App de delivery",
  "layout": "app",
  "nome": "Smash Club",
  "slogan": "Smash burger crocante na borda e suculento no meio.",
  "logo": null,
  "capa": "1607013251379-e6eecfffe234",
  "tema": {
    "fonteTitulo": "'Poppins', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "fundo": "#ffffff",
    "superficie": "#f6f6f7",
    "texto": "#18181b",
    "suave": "#6b6b74",
    "primaria": "#e11d48",
    "textoPrimaria": "#ffffff",
    "secundaria": "#fbbf24"
  },
  "avaliacao": {
    "nota": 4.8,
    "total": 932
  },
  "promo": {
    "selo": "Combo do dia",
    "titulo": "Smash + batata + refri por R$ 34,90",
    "texto": "Válido de segunda a quinta, só pelo cardápio digital."
  },
  "sobre": "Smash é técnica: bola de carne prensada na chapa bem quente até formar aquela crosta. Fazemos só isso, e fazemos muito bem.",
  "diferenciais": [
    "Chapa a 250 °C",
    "Molho especial da casa",
    "Pedido pronto em 15 minutos"
  ],
  "galeria": [
    "1607013251379-e6eecfffe234",
    "1573080496219-bb080dd4f877",
    "1572490122747-3968b75cc699"
  ],
  "contato": {
    "whatsapp": "5500900000002",
    "telefone": "(00) 90000-0002",
    "email": "contato@smashclub.com.br"
  },
  "redes": {
    "instagram": "smashclub",
    "tiktok": "smashclub",
    "ifood": "https://www.ifood.com.br"
  },
  "endereco": {
    "rua": "Avenida Brasil, 1500",
    "bairro": "Jardim América",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    {
      "abre": "11:00",
      "fecha": "23:00"
    },
    {
      "abre": "11:00",
      "fecha": "23:00"
    },
    {
      "abre": "11:00",
      "fecha": "23:00"
    },
    {
      "abre": "11:00",
      "fecha": "23:00"
    },
    {
      "abre": "11:00",
      "fecha": "23:00"
    },
    {
      "abre": "11:00",
      "fecha": "23:00"
    },
    {
      "abre": "11:00",
      "fecha": "23:00"
    }
  ],
  "entrega": {
    "taxa": 5,
    "tempo": "25–40 min",
    "pedidoMinimo": 25,
    "area": "Bairros da região central"
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
      "nome": "Smash da casa",
      "icone": "🔥",
      "itens": [
        {
          "nome": "Triple Smash",
          "desc": "Três smash de 90g, cheddar triplo, cebola picadinha e picles.",
          "preco": 39.9,
          "img": "1607013251379-e6eecfffe234",
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
          "nome": "Smash Oklahoma",
          "desc": "Smash prensado com cebola fatiada na chapa e queijo americano.",
          "preco": 30.9,
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
          "nome": "Smash Kids + suco",
          "desc": "Smash simples com queijo, batata pequena e suco de 300ml.",
          "preco": 24.9
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
          "preco": 26.9,
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
          "preco": 32.9,
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
          "preco": 30.9,
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
          "preco": 29.9,
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
          "preco": 27.9,
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
          "preco": 28.9,
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
          "preco": 37.9,
          "img": "1594212699903-ec8a3eca50f5"
        },
        {
          "nome": "Combo Casal",
          "desc": "2 burgers à escolha + batata grande + 2 refrigerantes lata.",
          "preco": 75.9,
          "precoAntigo": 84.9,
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
              "preco": 13.9
            },
            {
              "nome": "Média",
              "preco": 18.9
            },
            {
              "nome": "Grande",
              "preco": 25.9
            }
          ],
          "img": "1630384060421-cb20d0e0649d"
        },
        {
          "nome": "Batata cheddar e bacon",
          "desc": "Porção grande coberta com cheddar cremoso e bacon.",
          "preco": 27.9,
          "img": "1541592106381-b31e9677c0e5"
        },
        {
          "nome": "Onion rings",
          "desc": "12 anéis de cebola empanados com molho barbecue.",
          "preco": 21.9
        },
        {
          "nome": "Nuggets",
          "desc": "10 unidades com molho à escolha.",
          "preco": 20.9,
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
          "preco": 5.9
        },
        {
          "nome": "Refrigerante 2L",
          "preco": 13.9
        },
        {
          "nome": "Suco natural 400ml",
          "desc": "Laranja, limão, maracujá ou abacaxi com hortelã.",
          "preco": 8.9,
          "img": "1600271886742-f049cd451bba"
        },
        {
          "nome": "Milkshake",
          "desc": "Chocolate, morango, baunilha ou Ovomaltine.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "400ml",
              "preco": 17.9
            },
            {
              "nome": "700ml",
              "preco": 23.9
            }
          ],
          "img": "1572490122747-3968b75cc699"
        },
        {
          "nome": "Água mineral 500ml",
          "preco": 4
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
          "preco": 15.9,
          "img": "1551024506-0bccd828d307"
        }
      ]
    }
  ]
};
