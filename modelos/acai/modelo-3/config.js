/*
 * Gelato & Açaí — configuração do cardápio
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
  "modelo": "Açaí e sorvete 3 · Clássico",
  "layout": "classico",
  "nome": "Gelato & Açaí",
  "chamada": "Sorveteria artesanal",
  "slogan": "Gelato italiano e açaí cremoso no mesmo lugar.",
  "logo": null,
  "capa": "1560801619-01d71da0f70c",
  "tema": {
    "fonteTitulo": "'Fraunces', serif",
    "fonteTexto": "'Nunito', system-ui, sans-serif",
    "fundo": "#f6fbf8",
    "superficie": "#e9f4ee",
    "texto": "#18322a",
    "suave": "#5c7369",
    "primaria": "#2d6a4f",
    "textoPrimaria": "#ffffff",
    "secundaria": "#f4a261"
  },
  "sobre": "Sorveteria artesanal com gelatos feitos diariamente na casa, com frutas da estação, e açaí cremoso para quem não abre mão.",
  "diferenciais": [
    "Gelato feito na casa",
    "Frutas da estação",
    "Opções sem lactose"
  ],
  "galeria": [
    "1554630981-a73ffb5ed6f8",
    "1497034825429-c343d7c6a68f",
    "1627308594190-a057cd4bfac8",
    "1761281116743-f5112b4c5219"
  ],
  "contato": {
    "whatsapp": "5500900000056",
    "telefone": "(00) 90000-0056",
    "email": "contato@gelatoacai.com.br"
  },
  "redes": {
    "instagram": "gelatoeacai",
    "facebook": "gelatoeacai"
  },
  "endereco": {
    "rua": "Rua das Palmeiras, 78",
    "bairro": "Setor Oeste",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    {
      "abre": "11:00",
      "fecha": "22:00"
    },
    {
      "abre": "11:00",
      "fecha": "22:00"
    },
    {
      "abre": "11:00",
      "fecha": "22:00"
    },
    {
      "abre": "11:00",
      "fecha": "22:00"
    },
    {
      "abre": "11:00",
      "fecha": "22:00"
    },
    {
      "abre": "11:00",
      "fecha": "22:00"
    },
    {
      "abre": "11:00",
      "fecha": "22:00"
    }
  ],
  "entrega": {
    "taxa": 6,
    "tempo": "25–40 min",
    "pedidoMinimo": 25,
    "area": "Até 6 km"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro"
  ],
  "mesas": 10,
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Gelatos artesanais",
      "icone": "🍨",
      "itens": [
        {
          "nome": "Gelato de pistache",
          "opcoesTitulo": "Quantidade",
          "opcoes": [
            {
              "nome": "1 bola",
              "preco": 12
            },
            {
              "nome": "2 bolas",
              "preco": 20
            }
          ],
          "img": "1554630981-a73ffb5ed6f8",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Gelato de chocolate belga",
          "opcoesTitulo": "Quantidade",
          "opcoes": [
            {
              "nome": "1 bola",
              "preco": 11
            },
            {
              "nome": "2 bolas",
              "preco": 18
            }
          ],
          "img": "1562790879-dfde82829db0"
        },
        {
          "nome": "Sorbet de frutas vermelhas",
          "desc": "Sem lactose.",
          "opcoesTitulo": "Quantidade",
          "opcoes": [
            {
              "nome": "1 bola",
              "preco": 10
            },
            {
              "nome": "2 bolas",
              "preco": 17
            }
          ],
          "img": "1677513633949-6148b9c6702b",
          "tags": [
            "Vegano"
          ]
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
              "preco": 14.9
            },
            {
              "nome": "500 ml",
              "preco": 20.9
            },
            {
              "nome": "700 ml",
              "preco": 27.9
            },
            {
              "nome": "1 litro",
              "preco": 34.9
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
              "preco": 16.9
            },
            {
              "nome": "500 ml",
              "preco": 21.9
            },
            {
              "nome": "700 ml",
              "preco": 28.9
            },
            {
              "nome": "1 litro",
              "preco": 36.9
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
              "preco": 17.9
            },
            {
              "nome": "500 ml",
              "preco": 22.9
            },
            {
              "nome": "700 ml",
              "preco": 29.9
            },
            {
              "nome": "1 litro",
              "preco": 38.9
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
          "preco": 25.9,
          "img": "1654923064926-be7e64267a31"
        },
        {
          "nome": "Ninho com morango",
          "desc": "Creme de Ninho, morangos e leite em pó.",
          "preco": 28.9,
          "img": "1627308594190-a057cd4bfac8",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Açaí com Nutella",
          "desc": "Nutella, morango e Ovomaltine.",
          "preco": 31.9,
          "img": "1524904237821-786af6d620ca"
        },
        {
          "nome": "Açaí fit",
          "desc": "Banana, granola sem açúcar e mel.",
          "preco": 27.9,
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
          "preco": 53.9,
          "img": "1787980342670-5efa8eadf225"
        },
        {
          "nome": "Barca G (4 pessoas)",
          "desc": "1,5 litro de açaí com 8 adicionais.",
          "preco": 97.9,
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
              "preco": 8.9
            },
            {
              "nome": "2 bolas",
              "preco": 13.9
            },
            {
              "nome": "3 bolas",
              "preco": 18.9
            }
          ],
          "img": "1761281116743-f5112b4c5219"
        },
        {
          "nome": "Casquinha",
          "preco": 7.9,
          "img": "1497034825429-c343d7c6a68f"
        },
        {
          "nome": "Sundae",
          "desc": "Sorvete de creme, calda e chantilly.",
          "preco": 17.9,
          "img": "1776127095568-6e7d16698f89"
        },
        {
          "nome": "Picolé de fruta",
          "preco": 6.9,
          "img": "1633933037611-f26e54366832"
        },
        {
          "nome": "Milkshake",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "400 ml",
              "preco": 19.9
            },
            {
              "nome": "700 ml",
              "preco": 25.9
            }
          ],
          "img": "1572490122747-3968b75cc699"
        },
        {
          "nome": "Pote de sorvete 2 litros",
          "preco": 49.9,
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
          "preco": 6.9,
          "img": "1696739696220-8d2e27465662"
        },
        {
          "nome": "Suco natural 400 ml",
          "preco": 9.9,
          "img": "1600271886742-f049cd451bba"
        }
      ]
    }
  ]
};
