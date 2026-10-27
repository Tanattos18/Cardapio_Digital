/*
 * Lanchonete Bom Gosto — configuração do cardápio
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
  "modelo": "Pastelaria 3 · Clássico",
  "layout": "classico",
  "nome": "Lanchonete Bom Gosto",
  "chamada": "Pastelaria e lanchonete",
  "slogan": "Lanche bom, rápido e com preço de bairro.",
  "logo": null,
  "capa": "../../../assets/img/salgados/pastel-feira-2.jpg",
  "tema": {
    "fonteTitulo": "'Playfair Display', serif",
    "fonteTexto": "'Nunito', system-ui, sans-serif",
    "fundo": "#fff9ef",
    "superficie": "#f7ead3",
    "texto": "#33210f",
    "suave": "#7a6650",
    "primaria": "#c2410c",
    "textoPrimaria": "#ffffff",
    "secundaria": "#ca8a04"
  },
  "sobre": "Lanchonete de família com pastel, salgado, lanche na chapa e café coado. O ponto de encontro do bairro desde 2005.",
  "diferenciais": [
    "Ambiente família",
    "Café coado na hora",
    "Lanches na chapa"
  ],
  "galeria": [
    "../../../assets/img/salgados/pastel-feira.jpg",
    "1647505794572-0a6d945d664d",
    "../../../assets/img/salgados/caldo-de-cana.jpg",
    "../../../assets/img/salgados/coxinha.jpg"
  ],
  "contato": {
    "whatsapp": "5500900000065",
    "telefone": "(00) 90000-0065",
    "email": "contato@lanchonetebomgosto.com.br"
  },
  "redes": {
    "instagram": "lanchonetebomgosto",
    "facebook": "lanchonetebomgosto"
  },
  "endereco": {
    "rua": "Rua 5, 120",
    "bairro": "Setor Aeroporto",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    null,
    {
      "abre": "06:30",
      "fecha": "19:00"
    },
    {
      "abre": "06:30",
      "fecha": "19:00"
    },
    {
      "abre": "06:30",
      "fecha": "19:00"
    },
    {
      "abre": "06:30",
      "fecha": "19:00"
    },
    {
      "abre": "06:30",
      "fecha": "19:00"
    },
    {
      "abre": "06:30",
      "fecha": "19:00"
    }
  ],
  "entrega": {
    "taxa": 4,
    "tempo": "25–40 min",
    "area": "Bairro e região"
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
      "nome": "Café da manhã",
      "icone": "☕",
      "itens": [
        {
          "nome": "Pão na chapa com café com leite",
          "preco": 9,
          "img": "1647505794572-0a6d945d664d"
        },
        {
          "nome": "Misto quente com suco",
          "preco": 15,
          "img": "1647505794572-0a6d945d664d",
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
              "preco": 7.9
            },
            {
              "nome": "Gigante",
              "preco": 13.9
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
              "preco": 7.9
            },
            {
              "nome": "Gigante",
              "preco": 13.9
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
              "preco": 8.9
            },
            {
              "nome": "Gigante",
              "preco": 14.9
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
              "preco": 8.9
            },
            {
              "nome": "Gigante",
              "preco": 14.9
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
              "preco": 9.9
            },
            {
              "nome": "Gigante",
              "preco": 15.9
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
              "preco": 10.9
            },
            {
              "nome": "Gigante",
              "preco": 17.9
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
              "preco": 10.9
            },
            {
              "nome": "Gigante",
              "preco": 17.9
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
          "preco": 8.9,
          "img": "../../../assets/img/salgados/pastel-doce.jpg"
        },
        {
          "nome": "Banana com canela",
          "preco": 7.9,
          "img": "../../../assets/img/salgados/pastel-doce.jpg"
        },
        {
          "nome": "Romeu e Julieta",
          "desc": "Queijo e goiabada.",
          "preco": 8.9,
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
          "preco": 5.9,
          "img": "../../../assets/img/salgados/coxinha-aberta.jpg"
        },
        {
          "nome": "Kibe",
          "preco": 5.9,
          "img": "1786174044931-d395bf77e58e"
        },
        {
          "nome": "Misto quente",
          "preco": 8.9,
          "img": "1647505794572-0a6d945d664d"
        },
        {
          "nome": "X-burguer",
          "preco": 13.9,
          "img": "1610970878459-a0e464d7592b"
        },
        {
          "nome": "Cachorro-quente",
          "preco": 10.9,
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
              "preco": 4.9
            },
            {
              "nome": "500 ml",
              "preco": 7.9
            },
            {
              "nome": "700 ml",
              "preco": 10.9
            }
          ],
          "img": "../../../assets/img/salgados/caldo-de-cana.jpg",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Suco natural 400 ml",
          "preco": 7.9,
          "img": "1600271886742-f049cd451bba"
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
      "autor": "Sintegrity",
      "licenca": "CC BY-SA 4.0",
      "link": "https://commons.wikimedia.org/wiki/File:Coxinha_-_iguaria_brasileira_01.jpg"
    },
    {
      "autor": "Tom B",
      "licenca": "Public domain",
      "link": "https://commons.wikimedia.org/wiki/File:Coxinha.jpg"
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
