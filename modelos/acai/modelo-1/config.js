/*
 * Açaí da Praça — configuração do cardápio
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
  "modelo": "Açaí e sorvete 1 · App de delivery",
  "layout": "app",
  "nome": "Açaí da Praça",
  "slogan": "Monte o seu açaí do seu jeito.",
  "logo": null,
  "capa": "1627308594190-a057cd4bfac8",
  "tema": {
    "fonteTitulo": "'Baloo 2', serif",
    "fonteTexto": "'Nunito', system-ui, sans-serif",
    "fundo": "#ffffff",
    "superficie": "#f6f0fb",
    "texto": "#1f1029",
    "suave": "#6b5a78",
    "primaria": "#6b21a8",
    "textoPrimaria": "#ffffff",
    "secundaria": "#a3e635"
  },
  "avaliacao": {
    "nota": 4.8,
    "total": 1320
  },
  "promo": {
    "selo": "Terça do açaí",
    "titulo": "Açaí de 500 ml por R$ 15",
    "texto": "Toda terça, com 3 adicionais à escolha."
  },
  "sobre": "Açaí batido na hora, com mais de 20 adicionais para você montar do seu jeito. Ambiente família, na praça do bairro.",
  "diferenciais": [
    "Açaí batido na hora",
    "+20 adicionais",
    "Espaço kids"
  ],
  "galeria": [
    "1654923064926-be7e64267a31",
    "1524904237821-786af6d620ca",
    "1610441009633-b6ca9c6d4be2"
  ],
  "contato": {
    "whatsapp": "5500900000054",
    "telefone": "(00) 90000-0054",
    "email": "contato@acaidapraca.com.br"
  },
  "redes": {
    "instagram": "acaidapraca",
    "tiktok": "acaidapraca",
    "ifood": "https://www.ifood.com.br"
  },
  "endereco": {
    "rua": "Praça Central, 15",
    "bairro": "Centro",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    {
      "abre": "13:00",
      "fecha": "23:00"
    },
    {
      "abre": "13:00",
      "fecha": "23:00"
    },
    {
      "abre": "13:00",
      "fecha": "23:00"
    },
    {
      "abre": "13:00",
      "fecha": "23:00"
    },
    {
      "abre": "13:00",
      "fecha": "23:00"
    },
    {
      "abre": "13:00",
      "fecha": "23:00"
    },
    {
      "abre": "13:00",
      "fecha": "23:00"
    }
  ],
  "entrega": {
    "taxa": 4,
    "tempo": "20–35 min",
    "pedidoMinimo": 15,
    "area": "Até 5 km"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro"
  ],
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Promoções",
      "icone": "🔥",
      "itens": [
        {
          "nome": "Açaí em dobro",
          "desc": "2 copos de 500 ml com 3 adicionais cada.",
          "preco": 34,
          "precoAntigo": 38,
          "img": "1654923064926-be7e64267a31",
          "tags": [
            "Promoção"
          ]
        },
        {
          "nome": "Açaí kids 300 ml",
          "desc": "Com confete, leite em pó e granulado.",
          "preco": 15,
          "img": "1610441009633-b6ca9c6d4be2"
        }
      ]
    },
    {
      "nome": "Monte seu açaí",
      "icone": "🍇",
      "desc": "Escolha o tamanho e os adicionais do seu jeito.",
      "itens": [
        {
          "nome": "Açaí tradicional",
          "desc": "Açaí batido na hora, cremoso.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "300 ml",
              "preco": 14
            },
            {
              "nome": "500 ml",
              "preco": 19
            },
            {
              "nome": "700 ml",
              "preco": 25
            },
            {
              "nome": "1 litro",
              "preco": 32
            }
          ],
          "adicionais": [
            {
              "nome": "Leite em pó",
              "preco": 2
            },
            {
              "nome": "Leite condensado",
              "preco": 2
            },
            {
              "nome": "Granola",
              "preco": 2
            },
            {
              "nome": "Paçoca",
              "preco": 2
            },
            {
              "nome": "Banana",
              "preco": 2
            },
            {
              "nome": "Morango",
              "preco": 3
            },
            {
              "nome": "Kiwi",
              "preco": 3
            },
            {
              "nome": "Ovomaltine",
              "preco": 3
            },
            {
              "nome": "Confete",
              "preco": 2
            },
            {
              "nome": "Creme de Ninho",
              "preco": 4
            },
            {
              "nome": "Nutella",
              "preco": 5
            }
          ],
          "img": "1524904237821-786af6d620ca",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Cupuaçu",
          "desc": "Creme de cupuaçu batido na hora.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "300 ml",
              "preco": 15
            },
            {
              "nome": "500 ml",
              "preco": 20
            },
            {
              "nome": "700 ml",
              "preco": 26
            },
            {
              "nome": "1 litro",
              "preco": 34
            }
          ],
          "adicionais": [
            {
              "nome": "Leite em pó",
              "preco": 2
            },
            {
              "nome": "Leite condensado",
              "preco": 2
            },
            {
              "nome": "Granola",
              "preco": 2
            },
            {
              "nome": "Paçoca",
              "preco": 2
            },
            {
              "nome": "Banana",
              "preco": 2
            },
            {
              "nome": "Morango",
              "preco": 3
            },
            {
              "nome": "Kiwi",
              "preco": 3
            },
            {
              "nome": "Ovomaltine",
              "preco": 3
            },
            {
              "nome": "Confete",
              "preco": 2
            },
            {
              "nome": "Creme de Ninho",
              "preco": 4
            },
            {
              "nome": "Nutella",
              "preco": 5
            }
          ],
          "img": "1787980342670-5efa8eadf225"
        },
        {
          "nome": "Açaí zero açúcar",
          "desc": "Sem adição de açúcar.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "300 ml",
              "preco": 16
            },
            {
              "nome": "500 ml",
              "preco": 21
            },
            {
              "nome": "700 ml",
              "preco": 27
            },
            {
              "nome": "1 litro",
              "preco": 35
            }
          ],
          "adicionais": [
            {
              "nome": "Leite em pó",
              "preco": 2
            },
            {
              "nome": "Leite condensado",
              "preco": 2
            },
            {
              "nome": "Granola",
              "preco": 2
            },
            {
              "nome": "Paçoca",
              "preco": 2
            },
            {
              "nome": "Banana",
              "preco": 2
            },
            {
              "nome": "Morango",
              "preco": 3
            },
            {
              "nome": "Kiwi",
              "preco": 3
            },
            {
              "nome": "Ovomaltine",
              "preco": 3
            },
            {
              "nome": "Confete",
              "preco": 2
            },
            {
              "nome": "Creme de Ninho",
              "preco": 4
            },
            {
              "nome": "Nutella",
              "preco": 5
            }
          ],
          "img": "1610441009633-b6ca9c6d4be2",
          "tags": [
            "Fit"
          ]
        }
      ]
    },
    {
      "nome": "Copos montados",
      "icone": "🥤",
      "desc": "Nossas combinações prontas, copo de 500 ml.",
      "itens": [
        {
          "nome": "Açaí tropical",
          "desc": "Banana, morango, granola e leite condensado.",
          "preco": 24,
          "img": "1654923064926-be7e64267a31"
        },
        {
          "nome": "Ninho com morango",
          "desc": "Creme de Ninho, morangos e leite em pó.",
          "preco": 26,
          "img": "1627308594190-a057cd4bfac8",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Açaí com Nutella",
          "desc": "Nutella, morango e Ovomaltine.",
          "preco": 29,
          "img": "1524904237821-786af6d620ca"
        },
        {
          "nome": "Açaí fit",
          "desc": "Banana, granola sem açúcar e mel.",
          "preco": 25,
          "img": "1610441009633-b6ca9c6d4be2",
          "tags": [
            "Fit"
          ]
        }
      ]
    },
    {
      "nome": "Barcas",
      "icone": "🛶",
      "desc": "Para dividir.",
      "itens": [
        {
          "nome": "Barca P (2 pessoas)",
          "desc": "700 ml de açaí com 5 adicionais.",
          "preco": 49,
          "img": "1787980342670-5efa8eadf225"
        },
        {
          "nome": "Barca G (4 pessoas)",
          "desc": "1,5 litro de açaí com 8 adicionais.",
          "preco": 89,
          "img": "1627308594190-a057cd4bfac8"
        }
      ]
    },
    {
      "nome": "Sorvetes",
      "icone": "🍦",
      "itens": [
        {
          "nome": "Sorvete de massa",
          "desc": "Escolha os sabores na observação.",
          "opcoesTitulo": "Quantidade",
          "opcoes": [
            {
              "nome": "1 bola",
              "preco": 8
            },
            {
              "nome": "2 bolas",
              "preco": 13
            },
            {
              "nome": "3 bolas",
              "preco": 17
            }
          ],
          "img": "1761281116743-f5112b4c5219"
        },
        {
          "nome": "Casquinha",
          "preco": 7,
          "img": "1497034825429-c343d7c6a68f"
        },
        {
          "nome": "Sundae",
          "desc": "Sorvete de creme, calda e chantilly.",
          "preco": 16,
          "img": "1776127095568-6e7d16698f89"
        },
        {
          "nome": "Picolé de fruta",
          "preco": 6,
          "img": "1633933037611-f26e54366832"
        },
        {
          "nome": "Milkshake",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "400 ml",
              "preco": 18
            },
            {
              "nome": "700 ml",
              "preco": 24
            }
          ],
          "img": "1572490122747-3968b75cc699"
        },
        {
          "nome": "Pote de sorvete 2 litros",
          "preco": 45,
          "img": "1570197788417-0e82375c9371"
        }
      ]
    },
    {
      "nome": "Bebidas",
      "icone": "🥤",
      "itens": [
        {
          "nome": "Água mineral",
          "preco": 4,
          "img": "1616118132534-381148898bb4"
        },
        {
          "nome": "Refrigerante lata",
          "preco": 6,
          "img": "1696739696220-8d2e27465662"
        },
        {
          "nome": "Suco natural 400 ml",
          "preco": 9,
          "img": "1600271886742-f049cd451bba"
        }
      ]
    }
  ]
};
