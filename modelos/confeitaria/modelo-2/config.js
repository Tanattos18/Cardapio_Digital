/*
 * Ateliê da Vó Cida — configuração do cardápio
 * Edite este arquivo para entregar ao cliente: nome, contatos, redes sociais,
 * endereço, horários, entrega, pagamento e o cardápio com os preços.
 *  - demo: true mostra a barra "Modelo de demonstração". Use false na entrega.
 *  - Imagens: use um caminho ("img/bolo.jpg"), uma URL completa ou um ID do Unsplash.
 *  - horarios: um item por dia, começando no DOMINGO. null = fechado.
 *  - encomenda: pede data e horário no pedido (antecedenciaDias = prazo mínimo).
 *  - nutri: informação nutricional curta exibida no produto.
 */
window.CARDAPIO = {
  "demo": true,
  "modelo": "Confeitaria 2 · Clássico",
  "layout": "classico",
  "nome": "Ateliê da Vó Cida",
  "chamada": "Confeitaria caseira",
  "slogan": "Doces de vó, com o carinho de sempre.",
  "logo": null,
  "capa": "1547398847-19d7560a6257",
  "tema": {
    "fonteTitulo": "'Playfair Display', serif",
    "fonteTexto": "'Nunito', system-ui, sans-serif",
    "fundo": "#fbf4ea",
    "superficie": "#f3e6d4",
    "texto": "#3b2316",
    "suave": "#7c6150",
    "primaria": "#a0522d",
    "textoPrimaria": "#ffffff",
    "secundaria": "#d4a373"
  },
  "sobre": "A Vó Cida faz bolo há mais de 40 anos. As receitas são as mesmas do caderno dela: bolo de fubá, pudim de leite condensado e doce de leite mexido no tacho.",
  "diferenciais": [
    "Receitas do caderno da vó",
    "Sem conservantes",
    "Encomendas para festas"
  ],
  "galeria": [
    "1606983340126-99ab4feaa64a",
    "1702728109878-c61a98d80491",
    "../../../assets/img/pamonharia/bolo-milho-inteiro.jpg",
    "1509042239860-f550ce710b93"
  ],
  "contato": {
    "whatsapp": "5500900000052",
    "telefone": "(00) 90000-0052",
    "email": "contato@ateliedavocida.com.br"
  },
  "redes": {
    "instagram": "ateliedavocida",
    "facebook": "ateliedavocida"
  },
  "endereco": {
    "rua": "Rua São Benedito, 45",
    "bairro": "Vila Nova",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    null,
    {
      "abre": "08:00",
      "fecha": "18:00"
    },
    {
      "abre": "08:00",
      "fecha": "18:00"
    },
    {
      "abre": "08:00",
      "fecha": "18:00"
    },
    {
      "abre": "08:00",
      "fecha": "18:00"
    },
    {
      "abre": "08:00",
      "fecha": "18:00"
    },
    {
      "abre": "08:00",
      "fecha": "18:00"
    }
  ],
  "entrega": {
    "taxa": 5,
    "tempo": "Encomendas: na data marcada",
    "area": "Bairro e região"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro"
  ],
  "mesas": 6,
  "encomenda": {
    "antecedenciaDias": 2,
    "aviso": "Bolos inteiros e docinhos são sob encomenda: escolha a data com pelo menos 2 dias de antecedência."
  },
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Receitas da vó",
      "icone": "👵",
      "itens": [
        {
          "nome": "Bolo de fubá com goiabada",
          "opcoesTitulo": "Escolha",
          "opcoes": [
            {
              "nome": "Fatia",
              "preco": 8
            },
            {
              "nome": "Inteiro",
              "preco": 45
            }
          ],
          "img": "../../../assets/img/pamonharia/bolo-milho-inteiro.jpg",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Pudim de leite condensado (inteiro)",
          "preco": 55,
          "img": "1702728109878-c61a98d80491"
        },
        {
          "nome": "Doce de leite caseiro (pote 500 g)",
          "preco": 25,
          "img": "1615560725129-a1fa6edc3b93"
        }
      ]
    },
    {
      "nome": "Bolos de pote",
      "icone": "🍰",
      "desc": "Pronta entrega enquanto durar o estoque do dia.",
      "itens": [
        {
          "nome": "Ninho com morango",
          "desc": "Massa branca, creme de leite Ninho e morangos frescos.",
          "preco": 11.9,
          "img": "1629980173135-9b01683515f5",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Brigadeiro",
          "desc": "Massa de chocolate e brigadeiro cremoso.",
          "preco": 10.9,
          "img": "1629980173150-90bb43d8ac50"
        },
        {
          "nome": "Prestígio",
          "desc": "Massa de chocolate, creme de coco e ganache.",
          "preco": 10.9,
          "img": "1564329298022-58a5dbaa68ed"
        },
        {
          "nome": "Red velvet",
          "desc": "Massa red velvet com creme de cream cheese.",
          "preco": 12.9,
          "img": "1586788680434-30d324b2d46f"
        },
        {
          "nome": "Limão",
          "desc": "Massa branca, mousse de limão e raspas.",
          "preco": 10.9,
          "img": "1586718418497-76bcc1e1dbfb"
        }
      ]
    },
    {
      "nome": "Bolos inteiros",
      "icone": "🎂",
      "desc": "Sob encomenda, com no mínimo 2 dias de antecedência.",
      "itens": [
        {
          "nome": "Chocolate com brigadeiro",
          "desc": "Massa de chocolate, recheio e cobertura de brigadeiro.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "1 kg (até 10 fatias)",
              "preco": 75.9
            },
            {
              "nome": "2 kg (até 20 fatias)",
              "preco": 143.9
            },
            {
              "nome": "3 kg (até 30 fatias)",
              "preco": 202.9
            }
          ],
          "adicionais": [
            {
              "nome": "Topo de bolo personalizado",
              "preco": 25
            },
            {
              "nome": "Escrita no bolo",
              "preco": 10
            },
            {
              "nome": "Vela de número",
              "preco": 6
            }
          ],
          "img": "1588195538326-c5b1e9f80a1b",
          "tags": [
            "Encomenda"
          ]
        },
        {
          "nome": "Ninho com morango",
          "desc": "Massa branca, creme de Ninho e morangos.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "1 kg (até 10 fatias)",
              "preco": 83.9
            },
            {
              "nome": "2 kg (até 20 fatias)",
              "preco": 160.9
            },
            {
              "nome": "3 kg (até 30 fatias)",
              "preco": 228.9
            }
          ],
          "adicionais": [
            {
              "nome": "Topo de bolo personalizado",
              "preco": 25
            },
            {
              "nome": "Escrita no bolo",
              "preco": 10
            },
            {
              "nome": "Vela de número",
              "preco": 6
            }
          ],
          "img": "1557925923-33b27f891f88",
          "tags": [
            "Encomenda",
            "Mais pedido"
          ]
        },
        {
          "nome": "Prestígio",
          "desc": "Massa de chocolate e recheio de coco cremoso.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "1 kg (até 10 fatias)",
              "preco": 75.9
            },
            {
              "nome": "2 kg (até 20 fatias)",
              "preco": 143.9
            },
            {
              "nome": "3 kg (até 30 fatias)",
              "preco": 202.9
            }
          ],
          "adicionais": [
            {
              "nome": "Topo de bolo personalizado",
              "preco": 25
            },
            {
              "nome": "Escrita no bolo",
              "preco": 10
            },
            {
              "nome": "Vela de número",
              "preco": 6
            }
          ],
          "img": "1606983340126-99ab4feaa64a",
          "tags": [
            "Encomenda"
          ]
        },
        {
          "nome": "Red velvet",
          "desc": "Massa red velvet com cream cheese e frutas vermelhas.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "1 kg (até 10 fatias)",
              "preco": 92.9
            },
            {
              "nome": "2 kg (até 20 fatias)",
              "preco": 168.9
            },
            {
              "nome": "3 kg (até 30 fatias)",
              "preco": 245.9
            }
          ],
          "adicionais": [
            {
              "nome": "Topo de bolo personalizado",
              "preco": 25
            },
            {
              "nome": "Escrita no bolo",
              "preco": 10
            },
            {
              "nome": "Vela de número",
              "preco": 6
            }
          ],
          "img": "1568827999250-3f6afff96e66",
          "tags": [
            "Encomenda"
          ]
        },
        {
          "nome": "Floresta negra",
          "desc": "Massa de chocolate, chantilly e cerejas.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "1 kg (até 10 fatias)",
              "preco": 83.9
            },
            {
              "nome": "2 kg (até 20 fatias)",
              "preco": 160.9
            },
            {
              "nome": "3 kg (até 30 fatias)",
              "preco": 228.9
            }
          ],
          "adicionais": [
            {
              "nome": "Topo de bolo personalizado",
              "preco": 25
            },
            {
              "nome": "Escrita no bolo",
              "preco": 10
            },
            {
              "nome": "Vela de número",
              "preco": 6
            }
          ],
          "img": "1607257882338-70f7dd2ae344",
          "tags": [
            "Encomenda"
          ]
        }
      ]
    },
    {
      "nome": "Docinhos",
      "icone": "🍬",
      "desc": "Para festas. Pedido mínimo de meio cento.",
      "itens": [
        {
          "nome": "Brigadeiro tradicional",
          "desc": "Chocolate belga e granulado.",
          "opcoesTitulo": "Quantidade",
          "opcoes": [
            {
              "nome": "Meio cento (50 un)",
              "preco": 54.9
            },
            {
              "nome": "Cento (100 un)",
              "preco": 101.9
            }
          ],
          "img": "1630953900113-ab915924aab2"
        },
        {
          "nome": "Beijinho",
          "desc": "Coco ralado e cravo.",
          "opcoesTitulo": "Quantidade",
          "opcoes": [
            {
              "nome": "Meio cento (50 un)",
              "preco": 54.9
            },
            {
              "nome": "Cento (100 un)",
              "preco": 101.9
            }
          ],
          "img": "1549007994-cb92caebd54b"
        },
        {
          "nome": "Bicho de pé",
          "desc": "Brigadeiro de morango.",
          "opcoesTitulo": "Quantidade",
          "opcoes": [
            {
              "nome": "Meio cento (50 un)",
              "preco": 54.9
            },
            {
              "nome": "Cento (100 un)",
              "preco": 101.9
            }
          ],
          "img": "1702982852429-e0d0b27eb990"
        },
        {
          "nome": "Docinhos gourmet",
          "desc": "Pistache, ninho com Nutella, maracujá e café.",
          "opcoesTitulo": "Quantidade",
          "opcoes": [
            {
              "nome": "Meio cento (50 un)",
              "preco": 80.9
            },
            {
              "nome": "Cento (100 un)",
              "preco": 152.9
            }
          ],
          "img": "1549007994-cb92caebd54b",
          "tags": [
            "Novo"
          ]
        }
      ]
    },
    {
      "nome": "Tortas e sobremesas",
      "icone": "🥧",
      "itens": [
        {
          "nome": "Torta de limão",
          "opcoesTitulo": "Escolha",
          "opcoes": [
            {
              "nome": "Fatia",
              "preco": 11.9
            },
            {
              "nome": "Inteira (12 fatias)",
              "preco": 66.9
            }
          ],
          "img": "1586718418497-76bcc1e1dbfb"
        },
        {
          "nome": "Pudim de leite",
          "opcoesTitulo": "Escolha",
          "opcoes": [
            {
              "nome": "Fatia",
              "preco": 8.9
            },
            {
              "nome": "Inteiro",
              "preco": 46.9
            }
          ],
          "img": "1702728109878-c61a98d80491"
        },
        {
          "nome": "Banoffee (fatia)",
          "desc": "Banana, doce de leite e chantilly.",
          "preco": 13.9,
          "img": "1615560725129-a1fa6edc3b93"
        },
        {
          "nome": "Brownie",
          "desc": "Com castanhas e casquinha crocante.",
          "preco": 7.9,
          "img": "1551024506-0bccd828d307"
        },
        {
          "nome": "Cookie recheado",
          "desc": "Recheado de Nutella.",
          "preco": 7.9,
          "img": "1661417117093-ba2c544c245e"
        }
      ]
    },
    {
      "nome": "Kits festa",
      "icone": "🎉",
      "desc": "Tudo pronto para a sua festa.",
      "itens": [
        {
          "nome": "Kit festa 10 pessoas",
          "desc": "Bolo de 1 kg + 50 docinhos tradicionais.",
          "preco": 117.9,
          "precoAntigo": 130.9,
          "img": "1672698977671-9eb551549dcb",
          "tags": [
            "Promoção"
          ]
        },
        {
          "nome": "Kit festa 20 pessoas",
          "desc": "Bolo de 2 kg + 100 docinhos tradicionais.",
          "preco": 219.9,
          "precoAntigo": 245.9,
          "img": "1672698977671-9eb551549dcb",
          "tags": [
            "Promoção"
          ]
        },
        {
          "nome": "Kit mesversário",
          "desc": "Mini bolo + 20 docinhos + topo personalizado.",
          "preco": 100.9,
          "img": "1614707267537-b85aaf00c4b7"
        }
      ]
    },
    {
      "nome": "Bebidas",
      "icone": "☕",
      "itens": [
        {
          "nome": "Café coado",
          "preco": 5,
          "img": "1509042239860-f550ce710b93"
        },
        {
          "nome": "Refrigerante lata",
          "preco": 4.9,
          "img": "1696739696220-8d2e27465662"
        },
        {
          "nome": "Água mineral",
          "preco": 4,
          "img": "1616118132534-381148898bb4"
        }
      ]
    }
  ],
  "creditosFotos": [
    {
      "autor": "Túllio F",
      "licenca": "CC BY-SA 4.0",
      "link": "https://commons.wikimedia.org/wiki/File:Bolo_de_Fub%C3%A1_(milho)_02.jpg"
    }
  ]
};
