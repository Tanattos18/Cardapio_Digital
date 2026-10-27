/*
 * Pastelaria Central — configuração do cardápio
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
  "modelo": "Pastelaria 2 · App de delivery",
  "layout": "app",
  "nome": "Pastelaria Central",
  "slogan": "Pastel crocante e caldo de cana geladinho.",
  "logo": null,
  "capa": "../../../assets/img/salgados/pastel-cesta.jpg",
  "tema": {
    "fonteTitulo": "'Poppins', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "fundo": "#ffffff",
    "superficie": "#fff8eb",
    "texto": "#26180a",
    "suave": "#75644f",
    "primaria": "#dc2626",
    "textoPrimaria": "#ffffff",
    "secundaria": "#facc15"
  },
  "avaliacao": {
    "nota": 4.7,
    "total": 880
  },
  "sobre": "Pastelaria e lanchonete no coração do centro, servindo pastel, salgado e lanche rápido desde cedo.",
  "diferenciais": [
    "Aberto desde cedo",
    "Pronto em 10 minutos",
    "Preço justo"
  ],
  "galeria": [
    "../../../assets/img/salgados/pastel-feira.jpg",
    "../../../assets/img/salgados/caldo-de-cana.jpg",
    "../../../assets/img/salgados/coxinha-aberta.jpg"
  ],
  "contato": {
    "whatsapp": "5500900000064",
    "telefone": "(00) 90000-0064",
    "email": "contato@pastelariacentral.com.br"
  },
  "redes": {
    "instagram": "pastelariacentral",
    "facebook": "pastelariacentral",
    "ifood": "https://www.ifood.com.br"
  },
  "endereco": {
    "rua": "Avenida Anhanguera, 4000",
    "bairro": "Centro",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    null,
    {
      "abre": "07:00",
      "fecha": "20:00"
    },
    {
      "abre": "07:00",
      "fecha": "20:00"
    },
    {
      "abre": "07:00",
      "fecha": "20:00"
    },
    {
      "abre": "07:00",
      "fecha": "20:00"
    },
    {
      "abre": "07:00",
      "fecha": "20:00"
    },
    {
      "abre": "07:00",
      "fecha": "20:00"
    }
  ],
  "entrega": {
    "taxa": 4,
    "tempo": "20–35 min",
    "pedidoMinimo": 15,
    "area": "Centro e arredores"
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
      "nome": "Pastéis especiais",
      "icone": "⭐",
      "itens": [
        {
          "nome": "Pastel de camarão",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Tradicional",
              "preco": 15
            },
            {
              "nome": "Gigante",
              "preco": 24
            }
          ],
          "img": "../../../assets/img/salgados/pastel-feira.jpg"
        },
        {
          "nome": "Pastel de bacalhau",
          "opcoesTitulo": "Escolha o tamanho",
          "opcoes": [
            {
              "nome": "Tradicional",
              "preco": 15
            },
            {
              "nome": "Gigante",
              "preco": 24
            }
          ],
          "img": "../../../assets/img/salgados/pastel-feira-2.jpg",
          "tags": [
            "Novo"
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
              "preco": 8.9
            },
            {
              "nome": "Gigante",
              "preco": 14.9
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
              "preco": 8.9
            },
            {
              "nome": "Gigante",
              "preco": 14.9
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
          "nome": "Pizza",
          "desc": "Queijo, presunto, tomate e orégano.",
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
              "preco": 16.9
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
              "preco": 18.9
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
              "preco": 18.9
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
          "preco": 9.9,
          "img": "../../../assets/img/salgados/pastel-doce.jpg"
        },
        {
          "nome": "Banana com canela",
          "preco": 8.9,
          "img": "../../../assets/img/salgados/pastel-doce.jpg"
        },
        {
          "nome": "Romeu e Julieta",
          "desc": "Queijo e goiabada.",
          "preco": 9.9,
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
          "preco": 6.9,
          "img": "../../../assets/img/salgados/coxinha-aberta.jpg"
        },
        {
          "nome": "Kibe",
          "preco": 6.9,
          "img": "1786174044931-d395bf77e58e"
        },
        {
          "nome": "Misto quente",
          "preco": 9.9,
          "img": "1647505794572-0a6d945d664d"
        },
        {
          "nome": "X-burguer",
          "preco": 14.9,
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
              "preco": 5.9
            },
            {
              "nome": "500 ml",
              "preco": 8.9
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
          "preco": 8.9,
          "img": "1600271886742-f049cd451bba"
        },
        {
          "nome": "Refrigerante lata",
          "preco": 5.9,
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
