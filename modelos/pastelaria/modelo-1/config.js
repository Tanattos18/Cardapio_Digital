/*
 * Pastel do Japa — configuração do cardápio
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
  "modelo": "Pastelaria 1 · Impacto",
  "layout": "impacto",
  "nome": "Pastel do Japa",
  "chamada": "Pastelaria de feira",
  "slogan": "O pastel de feira mais famoso do bairro.",
  "logo": null,
  "capa": "../../../assets/img/salgados/pastel-feira.jpg",
  "tema": {
    "fonteTitulo": "'Archivo Black', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "escuro": true,
    "fundo": "#121212",
    "superficie": "#1c1c1c",
    "texto": "#f5f5f5",
    "suave": "#a8a8a8",
    "primaria": "#facc15",
    "textoPrimaria": "#111111",
    "secundaria": "#22c55e"
  },
  "avaliacao": {
    "nota": 4.9,
    "total": 1650
  },
  "promo": {
    "selo": "Combo",
    "titulo": "Pastel + caldo de cana 500 ml por R$ 16",
    "texto": "Todos os dias, em qualquer pastel tradicional."
  },
  "sobre": "Há 20 anos na feira, agora também com loja e delivery. Massa fininha feita na casa e caldo de cana moído na hora.",
  "diferenciais": [
    "Massa feita na casa",
    "Caldo de cana moído na hora",
    "Recheio generoso"
  ],
  "galeria": [
    "../../../assets/img/salgados/pastel-feira-2.jpg",
    "../../../assets/img/salgados/caldo-de-cana.jpg",
    "../../../assets/img/salgados/pastel-cesta.jpg",
    "../../../assets/img/salgados/pastel-queijo.jpg"
  ],
  "contato": {
    "whatsapp": "5500900000063",
    "telefone": "(00) 90000-0063",
    "email": "contato@pasteldojapa.com.br"
  },
  "redes": {
    "instagram": "pasteldojapa",
    "tiktok": "pasteldojapa",
    "ifood": "https://www.ifood.com.br"
  },
  "endereco": {
    "rua": "Rua da Feira, 33",
    "bairro": "Centro",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    {
      "abre": "09:00",
      "fecha": "21:00"
    },
    null,
    {
      "abre": "09:00",
      "fecha": "21:00"
    },
    {
      "abre": "09:00",
      "fecha": "21:00"
    },
    {
      "abre": "09:00",
      "fecha": "21:00"
    },
    {
      "abre": "09:00",
      "fecha": "21:00"
    },
    {
      "abre": "09:00",
      "fecha": "21:00"
    }
  ],
  "entrega": {
    "taxa": 5,
    "tempo": "25–40 min",
    "pedidoMinimo": 20,
    "area": "Até 6 km"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro"
  ],
  "mesas": 12,
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Combos",
      "icone": "🔥",
      "itens": [
        {
          "nome": "Pastel + caldo de cana",
          "desc": "Pastel tradicional e caldo de cana de 500 ml.",
          "preco": 16,
          "precoAntigo": 18,
          "img": "../../../assets/img/salgados/caldo-de-cana.jpg",
          "tags": [
            "Promoção"
          ]
        },
        {
          "nome": "Combo família",
          "desc": "4 pastéis gigantes + 1 litro de caldo de cana.",
          "preco": 72,
          "img": "../../../assets/img/salgados/pastel-cesta.jpg",
          "tags": [
            "Mais pedido"
          ]
        }
      ]
    },
    {
      "nome": "Pastéis salgados",
      "icone": "🥟",
      "desc": "Massa fininha e crocante, frito na hora.",
      "itens": [
        {
          "nome": "Carne",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Tradicional",
              "preco": 9
            },
            {
              "nome": "Gigante",
              "preco": 16
            }
          ],
          "img": "../../../assets/img/salgados/pastel-feira.jpg",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Queijo",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Tradicional",
              "preco": 9
            },
            {
              "nome": "Gigante",
              "preco": 16
            }
          ],
          "img": "../../../assets/img/salgados/pastel-queijo.jpg"
        },
        {
          "nome": "Frango com catupiry",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Tradicional",
              "preco": 10
            },
            {
              "nome": "Gigante",
              "preco": 17
            }
          ],
          "img": "../../../assets/img/salgados/pastel-feira-2.jpg"
        },
        {
          "nome": "Pizza",
          "desc": "Queijo, presunto, tomate e orégano.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Tradicional",
              "preco": 10
            },
            {
              "nome": "Gigante",
              "preco": 17
            }
          ],
          "img": "../../../assets/img/salgados/pastel-cesta.jpg"
        },
        {
          "nome": "Palmito",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Tradicional",
              "preco": 11
            },
            {
              "nome": "Gigante",
              "preco": 18
            }
          ],
          "img": "../../../assets/img/salgados/pastel-feira-2.jpg"
        },
        {
          "nome": "Carne seca com queijo",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Tradicional",
              "preco": 12
            },
            {
              "nome": "Gigante",
              "preco": 20
            }
          ],
          "img": "../../../assets/img/salgados/pastel-feira.jpg"
        },
        {
          "nome": "Especial",
          "desc": "Carne, queijo, ovo, milho e azeitona.",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Tradicional",
              "preco": 12
            },
            {
              "nome": "Gigante",
              "preco": 20
            }
          ],
          "img": "../../../assets/img/salgados/pastel-cesta.jpg",
          "tags": [
            "Novo"
          ]
        }
      ]
    },
    {
      "nome": "Pastéis doces",
      "icone": "🍫",
      "itens": [
        {
          "nome": "Chocolate",
          "preco": 10,
          "img": "../../../assets/img/salgados/pastel-doce.jpg"
        },
        {
          "nome": "Banana com canela",
          "preco": 9,
          "img": "../../../assets/img/salgados/pastel-doce.jpg"
        },
        {
          "nome": "Romeu e Julieta",
          "desc": "Queijo e goiabada.",
          "preco": 10,
          "img": "../../../assets/img/salgados/pastel-doce.jpg"
        }
      ]
    },
    {
      "nome": "Salgados e lanches",
      "icone": "🌭",
      "itens": [
        {
          "nome": "Coxinha",
          "preco": 7,
          "img": "../../../assets/img/salgados/coxinha-aberta.jpg"
        },
        {
          "nome": "Kibe",
          "preco": 7,
          "img": "1786174044931-d395bf77e58e"
        },
        {
          "nome": "Misto quente",
          "preco": 10,
          "img": "1647505794572-0a6d945d664d"
        },
        {
          "nome": "X-burguer",
          "preco": 16,
          "img": "1610970878459-a0e464d7592b"
        },
        {
          "nome": "Cachorro-quente",
          "preco": 12,
          "img": "1599599810694-b5b37304c041"
        }
      ]
    },
    {
      "nome": "Caldo de cana e bebidas",
      "icone": "🥤",
      "itens": [
        {
          "nome": "Caldo de cana",
          "desc": "Puro ou com limão (avise na observação).",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "300 ml",
              "preco": 6
            },
            {
              "nome": "500 ml",
              "preco": 9
            },
            {
              "nome": "700 ml",
              "preco": 12
            }
          ],
          "img": "../../../assets/img/salgados/caldo-de-cana.jpg",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Suco natural 400 ml",
          "preco": 9,
          "img": "1600271886742-f049cd451bba"
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
  ],
  "creditosFotos": [
    {
      "autor": "Sintegrity",
      "licenca": "CC BY-SA 4.0",
      "link": "https://commons.wikimedia.org/wiki/File:Coxinha_-_iguaria_brasileira_01.jpg"
    },
    {
      "autor": "Avelludo",
      "licenca": "CC BY-SA 4.0",
      "link": "https://commons.wikimedia.org/wiki/File:Pastel_de_Feira_02.jpg"
    },
    {
      "autor": "Avelludo",
      "licenca": "CC BY-SA 4.0",
      "link": "https://commons.wikimedia.org/wiki/File:Pastel_de_Feira_01.jpg"
    },
    {
      "autor": "BuenosAiresPhotographer",
      "licenca": "CC BY-SA 2.0",
      "link": "https://commons.wikimedia.org/wiki/File:Brazilian_pastel.jpg"
    },
    {
      "autor": "Túllio F",
      "licenca": "CC BY-SA 4.0",
      "link": "https://commons.wikimedia.org/wiki/File:Pastel_frito.jpg"
    },
    {
      "autor": "Futbolcochabambarojo",
      "licenca": "CC BY-SA 4.0",
      "link": "https://commons.wikimedia.org/wiki/File:Pastel_Frito.jpg"
    },
    {
      "autor": "Food Trails",
      "licenca": "CC BY-SA 2.0",
      "link": "https://commons.wikimedia.org/wiki/File:Sugarcanejuice.jpg"
    }
  ]
};
