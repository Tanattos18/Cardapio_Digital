/*
 * Point do Açaí — configuração do cardápio
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
  "modelo": "Açaí e sorvete 2 · Impacto",
  "layout": "impacto",
  "nome": "Point do Açaí",
  "chamada": "Açaiteria",
  "slogan": "O açaí mais turbinado da cidade.",
  "logo": null,
  "capa": "1787980342670-5efa8eadf225",
  "tema": {
    "fonteTitulo": "'Oswald', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "escuro": true,
    "fundo": "#120a1c",
    "superficie": "#1d1129",
    "texto": "#f4eefb",
    "suave": "#b4a5c4",
    "primaria": "#c084fc",
    "textoPrimaria": "#1a0026",
    "secundaria": "#a3e635"
  },
  "avaliacao": {
    "nota": 4.9,
    "total": 2104
  },
  "promo": {
    "selo": "Happy hour",
    "titulo": "Das 15h às 17h: adicionais em dobro",
    "texto": "Em qualquer copo a partir de 500 ml."
  },
  "sobre": "Açaiteria com açaí puro do Pará, batido na hora, e copos turbinados que viraram moda no Instagram.",
  "diferenciais": [
    "Açaí puro do Pará",
    "Copos turbinados",
    "Wi-Fi e ar-condicionado"
  ],
  "galeria": [
    "1627308594190-a057cd4bfac8",
    "1524904237821-786af6d620ca",
    "1633933037611-f26e54366832",
    "1572490122747-3968b75cc699"
  ],
  "contato": {
    "whatsapp": "5500900000055",
    "telefone": "(00) 90000-0055",
    "email": "contato@pointdoacai.com.br"
  },
  "redes": {
    "instagram": "pointdoacai",
    "tiktok": "pointdoacai",
    "facebook": "pointdoacai",
    "ifood": "https://www.ifood.com.br"
  },
  "endereco": {
    "rua": "Avenida T-9, 2200",
    "bairro": "Jardim América",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    {
      "abre": "12:00",
      "fecha": "00:00"
    },
    {
      "abre": "12:00",
      "fecha": "00:00"
    },
    {
      "abre": "12:00",
      "fecha": "00:00"
    },
    {
      "abre": "12:00",
      "fecha": "00:00"
    },
    {
      "abre": "12:00",
      "fecha": "00:00"
    },
    {
      "abre": "12:00",
      "fecha": "00:00"
    },
    {
      "abre": "12:00",
      "fecha": "00:00"
    }
  ],
  "entrega": {
    "taxa": 5,
    "tempo": "25–40 min",
    "pedidoMinimo": 20,
    "area": "Até 7 km"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro"
  ],
  "mesas": 15,
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Turbinados",
      "icone": "💥",
      "desc": "Os copos que bombam no Instagram.",
      "itens": [
        {
          "nome": "Açaí Monster 1 litro",
          "desc": "Com 6 adicionais e cobertura de Nutella.",
          "preco": 45,
          "img": "1787980342670-5efa8eadf225",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Açaí Ovomaltine",
          "desc": "700 ml com creme de Ovomaltine e Ovomaltine crocante.",
          "preco": 32,
          "img": "1524904237821-786af6d620ca"
        },
        {
          "nome": "Bowl tropical",
          "desc": "Açaí, manga, kiwi, morango e granola.",
          "preco": 28,
          "img": "1654923064926-be7e64267a31",
          "tags": [
            "Fit"
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
              "preco": 19.9
            },
            {
              "nome": "700 ml",
              "preco": 25.9
            },
            {
              "nome": "1 litro",
              "preco": 33.9
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
              "preco": 15.9
            },
            {
              "nome": "500 ml",
              "preco": 20.9
            },
            {
              "nome": "700 ml",
              "preco": 26.9
            },
            {
              "nome": "1 litro",
              "preco": 35.9
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
              "preco": 16.9
            },
            {
              "nome": "500 ml",
              "preco": 21.9
            },
            {
              "nome": "700 ml",
              "preco": 27.9
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
          "preco": 24.9,
          "img": "1654923064926-be7e64267a31"
        },
        {
          "nome": "Ninho com morango",
          "desc": "Creme de Ninho, morangos e leite em pó.",
          "preco": 26.9,
          "img": "1627308594190-a057cd4bfac8",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Açaí com Nutella",
          "desc": "Nutella, morango e Ovomaltine.",
          "preco": 29.9,
          "img": "1524904237821-786af6d620ca"
        },
        {
          "nome": "Açaí fit",
          "desc": "Banana, granola sem açúcar e mel.",
          "preco": 25.9,
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
          "preco": 50.9,
          "img": "1787980342670-5efa8eadf225"
        },
        {
          "nome": "Barca G (4 pessoas)",
          "desc": "1,5 litro de açaí com 8 adicionais.",
          "preco": 92.9,
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
              "preco": 7.9
            },
            {
              "nome": "2 bolas",
              "preco": 13.9
            },
            {
              "nome": "3 bolas",
              "preco": 17.9
            }
          ],
          "img": "1761281116743-f5112b4c5219"
        },
        {
          "nome": "Casquinha",
          "preco": 6.9,
          "img": "1497034825429-c343d7c6a68f"
        },
        {
          "nome": "Sundae",
          "desc": "Sorvete de creme, calda e chantilly.",
          "preco": 16.9,
          "img": "1776127095568-6e7d16698f89"
        },
        {
          "nome": "Picolé de fruta",
          "preco": 5.9,
          "img": "1633933037611-f26e54366832"
        },
        {
          "nome": "Milkshake",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "400 ml",
              "preco": 18.9
            },
            {
              "nome": "700 ml",
              "preco": 24.9
            }
          ],
          "img": "1572490122747-3968b75cc699"
        },
        {
          "nome": "Pote de sorvete 2 litros",
          "preco": 46.9,
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
          "preco": 5.9,
          "img": "1696739696220-8d2e27465662"
        },
        {
          "nome": "Suco natural 400 ml",
          "preco": 8.9,
          "img": "1600271886742-f049cd451bba"
        }
      ]
    }
  ]
};
