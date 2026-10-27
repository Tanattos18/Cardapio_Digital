/*
 * Sweet Lab — configuração do cardápio
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
  "modelo": "Confeitaria 3 · Impacto",
  "layout": "impacto",
  "nome": "Sweet Lab",
  "chamada": "Confeitaria artesanal",
  "slogan": "Bolos de vitrine para momentos que merecem.",
  "logo": null,
  "capa": "1588195538326-c5b1e9f80a1b",
  "tema": {
    "fonteTitulo": "'Bebas Neue', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "escuro": true,
    "fundo": "#1a100c",
    "superficie": "#251812",
    "texto": "#fbefe8",
    "suave": "#c4ab9c",
    "primaria": "#f4a6c0",
    "textoPrimaria": "#2a0f1a",
    "secundaria": "#e9c46a"
  },
  "avaliacao": {
    "nota": 4.9,
    "total": 688
  },
  "promo": {
    "selo": "Aniversário",
    "titulo": "Topo personalizado grátis",
    "texto": "Em bolos de 2 kg ou mais encomendados pelo cardápio digital."
  },
  "sobre": "Confeitaria artesanal com chocolate belga, frutas frescas e acabamento de vitrine. Cada bolo é montado à mão, sob encomenda.",
  "diferenciais": [
    "Chocolate belga",
    "Bolos decorados",
    "Embalagem para presente",
    "Entrega refrigerada"
  ],
  "galeria": [
    "1568827999250-3f6afff96e66",
    "1673551490812-eaee2e9bf0ef",
    "1586788680434-30d324b2d46f",
    "1687795097254-f019f9d7fd17"
  ],
  "contato": {
    "whatsapp": "5500900000053",
    "telefone": "(00) 90000-0053",
    "email": "contato@sweetlab.com.br"
  },
  "redes": {
    "instagram": "sweetlab",
    "tiktok": "sweetlab",
    "youtube": "sweetlab"
  },
  "endereco": {
    "rua": "Avenida das Flores, 880",
    "bairro": "Setor Marista",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    {
      "abre": "10:00",
      "fecha": "20:00"
    },
    null,
    {
      "abre": "10:00",
      "fecha": "20:00"
    },
    {
      "abre": "10:00",
      "fecha": "20:00"
    },
    {
      "abre": "10:00",
      "fecha": "20:00"
    },
    {
      "abre": "10:00",
      "fecha": "20:00"
    },
    {
      "abre": "10:00",
      "fecha": "20:00"
    }
  ],
  "entrega": {
    "taxa": 10,
    "tempo": "Encomendas: na data marcada",
    "pedidoMinimo": 50,
    "area": "Até 12 km"
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
      "nome": "Assinatura",
      "icone": "🖤",
      "desc": "As criações da casa.",
      "itens": [
        {
          "nome": "Naked cake de frutas vermelhas",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "1 kg (até 10 fatias)",
              "preco": 129
            },
            {
              "nome": "2 kg (até 20 fatias)",
              "preco": 239
            },
            {
              "nome": "3 kg (até 30 fatias)",
              "preco": 339
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
            "Encomenda",
            "Mais pedido"
          ]
        },
        {
          "nome": "Bolo vulcão",
          "desc": "Massa de chocolate com calda quente escorrendo.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "1 kg",
              "preco": 109
            },
            {
              "nome": "2 kg",
              "preco": 199
            }
          ],
          "img": "1673551490812-eaee2e9bf0ef",
          "tags": [
            "Novo"
          ]
        },
        {
          "nome": "Petit gâteau",
          "desc": "Com sorvete de creme.",
          "preco": 24,
          "img": "1673551490812-eaee2e9bf0ef"
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
          "preco": 15.9,
          "img": "1629980173135-9b01683515f5",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Brigadeiro",
          "desc": "Massa de chocolate e brigadeiro cremoso.",
          "preco": 14.9,
          "img": "1629980173150-90bb43d8ac50"
        },
        {
          "nome": "Prestígio",
          "desc": "Massa de chocolate, creme de coco e ganache.",
          "preco": 14.9,
          "img": "1564329298022-58a5dbaa68ed"
        },
        {
          "nome": "Red velvet",
          "desc": "Massa red velvet com creme de cream cheese.",
          "preco": 16.9,
          "img": "1586788680434-30d324b2d46f"
        },
        {
          "nome": "Limão",
          "desc": "Massa branca, mousse de limão e raspas.",
          "preco": 14.9,
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
              "preco": 101.9
            },
            {
              "nome": "2 kg (até 20 fatias)",
              "preco": 193.9
            },
            {
              "nome": "3 kg (até 30 fatias)",
              "preco": 274.9
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
              "preco": 113.9
            },
            {
              "nome": "2 kg (até 20 fatias)",
              "preco": 216.9
            },
            {
              "nome": "3 kg (até 30 fatias)",
              "preco": 308.9
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
              "preco": 101.9
            },
            {
              "nome": "2 kg (até 20 fatias)",
              "preco": 193.9
            },
            {
              "nome": "3 kg (até 30 fatias)",
              "preco": 274.9
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
              "preco": 124.9
            },
            {
              "nome": "2 kg (até 20 fatias)",
              "preco": 228.9
            },
            {
              "nome": "3 kg (até 30 fatias)",
              "preco": 331.9
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
              "preco": 113.9
            },
            {
              "nome": "2 kg (até 20 fatias)",
              "preco": 216.9
            },
            {
              "nome": "3 kg (até 30 fatias)",
              "preco": 308.9
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
              "preco": 74.9
            },
            {
              "nome": "Cento (100 un)",
              "preco": 137.9
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
              "preco": 74.9
            },
            {
              "nome": "Cento (100 un)",
              "preco": 137.9
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
              "preco": 74.9
            },
            {
              "nome": "Cento (100 un)",
              "preco": 137.9
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
              "preco": 108.9
            },
            {
              "nome": "Cento (100 un)",
              "preco": 206.9
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
              "preco": 15.9
            },
            {
              "nome": "Inteira (12 fatias)",
              "preco": 90.9
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
              "preco": 11.9
            },
            {
              "nome": "Inteiro",
              "preco": 62.9
            }
          ],
          "img": "1702728109878-c61a98d80491"
        },
        {
          "nome": "Banoffee (fatia)",
          "desc": "Banana, doce de leite e chantilly.",
          "preco": 17.9,
          "img": "1615560725129-a1fa6edc3b93"
        },
        {
          "nome": "Brownie",
          "desc": "Com castanhas e casquinha crocante.",
          "preco": 9.9,
          "img": "1551024506-0bccd828d307"
        },
        {
          "nome": "Cookie recheado",
          "desc": "Recheado de Nutella.",
          "preco": 9.9,
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
          "preco": 159.9,
          "precoAntigo": 176.9,
          "img": "1672698977671-9eb551549dcb",
          "tags": [
            "Promoção"
          ]
        },
        {
          "nome": "Kit festa 20 pessoas",
          "desc": "Bolo de 2 kg + 100 docinhos tradicionais.",
          "preco": 297.9,
          "precoAntigo": 331.9,
          "img": "1672698977671-9eb551549dcb",
          "tags": [
            "Promoção"
          ]
        },
        {
          "nome": "Kit mesversário",
          "desc": "Mini bolo + 20 docinhos + topo personalizado.",
          "preco": 136.9,
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
          "preco": 6.9,
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
