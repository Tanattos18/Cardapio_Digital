/*
 * Doce Encanto — configuração do cardápio
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
  "modelo": "Confeitaria 1 · App de delivery",
  "layout": "app",
  "nome": "Doce Encanto",
  "slogan": "Bolos e doces feitos com amor para adoçar o seu dia.",
  "logo": null,
  "capa": "1583338917451-face2751d8d5",
  "tema": {
    "fonteTitulo": "'Poppins', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "fundo": "#ffffff",
    "superficie": "#fdf2f6",
    "texto": "#2a1520",
    "suave": "#7a5b68",
    "primaria": "#d63384",
    "textoPrimaria": "#ffffff",
    "secundaria": "#f7b500"
  },
  "avaliacao": {
    "nota": 4.9,
    "total": 421
  },
  "promo": {
    "selo": "Fim de semana",
    "titulo": "Bolo de pote: leve 4, pague 3",
    "texto": "Sábado e domingo, em todos os sabores."
  },
  "sobre": "Confeitaria caseira que começou na cozinha de casa e hoje adoça aniversários, casamentos e o café da tarde de muita gente. Tudo feito com ingredientes de verdade, sem gordura hidrogenada.",
  "diferenciais": [
    "Receitas próprias",
    "Chocolate nobre",
    "Topo personalizado",
    "Entrega com cuidado"
  ],
  "galeria": [
    "1557925923-33b27f891f88",
    "1702982852429-e0d0b27eb990",
    "1629980173135-9b01683515f5"
  ],
  "contato": {
    "whatsapp": "5500900000051",
    "telefone": "(00) 90000-0051",
    "email": "contato@doceencanto.com.br"
  },
  "redes": {
    "instagram": "doceencanto",
    "tiktok": "doceencanto",
    "facebook": "doceencanto"
  },
  "endereco": {
    "rua": "Rua das Rosas, 120",
    "bairro": "Jardim Primavera",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    {
      "abre": "09:00",
      "fecha": "19:00"
    },
    null,
    {
      "abre": "09:00",
      "fecha": "19:00"
    },
    {
      "abre": "09:00",
      "fecha": "19:00"
    },
    {
      "abre": "09:00",
      "fecha": "19:00"
    },
    {
      "abre": "09:00",
      "fecha": "19:00"
    },
    {
      "abre": "09:00",
      "fecha": "19:00"
    }
  ],
  "entrega": {
    "taxa": 7,
    "tempo": "Encomendas: na data marcada",
    "pedidoMinimo": 30,
    "area": "Até 10 km"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro"
  ],
  "encomenda": {
    "antecedenciaDias": 2,
    "aviso": "Bolos inteiros e docinhos são sob encomenda: escolha a data com pelo menos 2 dias de antecedência."
  },
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Lançamentos",
      "icone": "✨",
      "itens": [
        {
          "nome": "Bolo de pote Kinder",
          "desc": "Massa de chocolate, creme de avelã e Kinder Bueno.",
          "preco": 16,
          "img": "1629980173150-90bb43d8ac50",
          "tags": [
            "Novo"
          ]
        },
        {
          "nome": "Cone trufado",
          "desc": "Casquinha de chocolate recheada de brigadeiro de Ninho.",
          "preco": 12,
          "img": "1549007994-cb92caebd54b"
        },
        {
          "nome": "Caixa presente com 12 brigadeiros gourmet",
          "preco": 59,
          "img": "1687795097254-f019f9d7fd17",
          "tags": [
            "Mais pedido"
          ]
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
          "preco": 14,
          "img": "1629980173135-9b01683515f5",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Brigadeiro",
          "desc": "Massa de chocolate e brigadeiro cremoso.",
          "preco": 13,
          "img": "1629980173150-90bb43d8ac50"
        },
        {
          "nome": "Prestígio",
          "desc": "Massa de chocolate, creme de coco e ganache.",
          "preco": 13,
          "img": "1564329298022-58a5dbaa68ed"
        },
        {
          "nome": "Red velvet",
          "desc": "Massa red velvet com creme de cream cheese.",
          "preco": 15,
          "img": "1586788680434-30d324b2d46f"
        },
        {
          "nome": "Limão",
          "desc": "Massa branca, mousse de limão e raspas.",
          "preco": 13,
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
              "preco": 89
            },
            {
              "nome": "2 kg (até 20 fatias)",
              "preco": 169
            },
            {
              "nome": "3 kg (até 30 fatias)",
              "preco": 239
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
              "preco": 99
            },
            {
              "nome": "2 kg (até 20 fatias)",
              "preco": 189
            },
            {
              "nome": "3 kg (até 30 fatias)",
              "preco": 269
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
              "preco": 89
            },
            {
              "nome": "2 kg (até 20 fatias)",
              "preco": 169
            },
            {
              "nome": "3 kg (até 30 fatias)",
              "preco": 239
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
              "preco": 109
            },
            {
              "nome": "2 kg (até 20 fatias)",
              "preco": 199
            },
            {
              "nome": "3 kg (até 30 fatias)",
              "preco": 289
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
              "preco": 99
            },
            {
              "nome": "2 kg (até 20 fatias)",
              "preco": 189
            },
            {
              "nome": "3 kg (até 30 fatias)",
              "preco": 269
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
              "preco": 65
            },
            {
              "nome": "Cento (100 un)",
              "preco": 120
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
              "preco": 65
            },
            {
              "nome": "Cento (100 un)",
              "preco": 120
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
              "preco": 65
            },
            {
              "nome": "Cento (100 un)",
              "preco": 120
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
              "preco": 95
            },
            {
              "nome": "Cento (100 un)",
              "preco": 180
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
              "preco": 14
            },
            {
              "nome": "Inteira (12 fatias)",
              "preco": 79
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
              "preco": 10
            },
            {
              "nome": "Inteiro",
              "preco": 55
            }
          ],
          "img": "1702728109878-c61a98d80491"
        },
        {
          "nome": "Banoffee (fatia)",
          "desc": "Banana, doce de leite e chantilly.",
          "preco": 16,
          "img": "1615560725129-a1fa6edc3b93"
        },
        {
          "nome": "Brownie",
          "desc": "Com castanhas e casquinha crocante.",
          "preco": 9,
          "img": "1551024506-0bccd828d307"
        },
        {
          "nome": "Cookie recheado",
          "desc": "Recheado de Nutella.",
          "preco": 9,
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
          "preco": 139,
          "precoAntigo": 154,
          "img": "1672698977671-9eb551549dcb",
          "tags": [
            "Promoção"
          ]
        },
        {
          "nome": "Kit festa 20 pessoas",
          "desc": "Bolo de 2 kg + 100 docinhos tradicionais.",
          "preco": 259,
          "precoAntigo": 289,
          "img": "1672698977671-9eb551549dcb",
          "tags": [
            "Promoção"
          ]
        },
        {
          "nome": "Kit mesversário",
          "desc": "Mini bolo + 20 docinhos + topo personalizado.",
          "preco": 119,
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
          "preco": 6,
          "img": "1696739696220-8d2e27465662"
        },
        {
          "nome": "Água mineral",
          "preco": 4,
          "img": "1616118132534-381148898bb4"
        }
      ]
    }
  ]
};
