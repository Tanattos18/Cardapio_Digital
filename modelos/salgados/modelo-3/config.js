/*
 * Cantinho do Salgado — configuração do cardápio
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
  "modelo": "Salgados para festa 3 · Clássico",
  "layout": "classico",
  "nome": "Cantinho do Salgado",
  "chamada": "Salgaderia",
  "slogan": "Salgado bom é salgado feito na hora.",
  "logo": null,
  "capa": "../../../assets/img/salgados/coxinha.jpg",
  "tema": {
    "fonteTitulo": "'Alfa Slab One', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "fundo": "#fbf3e4",
    "superficie": "#f1e2c8",
    "texto": "#2e1c0f",
    "suave": "#76604c",
    "primaria": "#b42318",
    "textoPrimaria": "#ffffff",
    "secundaria": "#d97706"
  },
  "sobre": "Salgaderia de bairro com salgado grande saindo toda hora no balcão e encomendas de cento para festas.",
  "diferenciais": [
    "Salgado saindo toda hora",
    "Preço de fábrica",
    "Encomendas de cento"
  ],
  "galeria": [
    "../../../assets/img/salgados/coxinhas-bandeja.jpg",
    "1786174044931-d395bf77e58e",
    "../../../assets/img/salgados/esfiha-aberta.jpg",
    "1625833196424-a1be6544e069"
  ],
  "contato": {
    "whatsapp": "5500900000059",
    "telefone": "(00) 90000-0059",
    "email": "contato@cantinhodosalgado.com.br"
  },
  "redes": {
    "instagram": "cantinhodosalgado",
    "facebook": "cantinhodosalgado"
  },
  "endereco": {
    "rua": "Rua 10, 455",
    "bairro": "Centro",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    null,
    {
      "abre": "07:00",
      "fecha": "19:00"
    },
    {
      "abre": "07:00",
      "fecha": "19:00"
    },
    {
      "abre": "07:00",
      "fecha": "19:00"
    },
    {
      "abre": "07:00",
      "fecha": "19:00"
    },
    {
      "abre": "07:00",
      "fecha": "19:00"
    },
    {
      "abre": "07:00",
      "fecha": "19:00"
    }
  ],
  "entrega": {
    "taxa": 5,
    "tempo": "30–45 min ou na data marcada",
    "area": "Bairro e região"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro"
  ],
  "mesas": 8,
  "encomenda": {
    "antecedenciaDias": 1,
    "aviso": "Encomendas com pelo menos 1 dia de antecedência. Para o mesmo dia, chame no WhatsApp."
  },
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "No balcão",
      "icone": "🔥",
      "itens": [
        {
          "nome": "Combo coxinha + refri",
          "desc": "Coxinha grande e refrigerante lata.",
          "preco": 12,
          "img": "../../../assets/img/salgados/coxinha-aberta.jpg",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Pão de queijo (porção com 10)",
          "preco": 12,
          "img": "1586444248902-2f64eddc13df"
        }
      ]
    },
    {
      "nome": "Salgados fritos",
      "icone": "🥟",
      "desc": "Para festa, tamanho coquetel. Entregamos fritos ou congelados.",
      "itens": [
        {
          "nome": "Coxinha de frango",
          "desc": "Massa de batata e frango temperado.",
          "opcoesTitulo": "Quantidade",
          "opcoes": [
            {
              "nome": "Meio cento (50 un)",
              "preco": 40.9
            },
            {
              "nome": "Cento (100 un)",
              "preco": 76.9
            }
          ],
          "img": "../../../assets/img/salgados/coxinhas-bandeja.jpg",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Kibe",
          "desc": "Carne moída com hortelã.",
          "opcoesTitulo": "Quantidade",
          "opcoes": [
            {
              "nome": "Meio cento (50 un)",
              "preco": 40.9
            },
            {
              "nome": "Cento (100 un)",
              "preco": 76.9
            }
          ],
          "img": "1786174044931-d395bf77e58e"
        },
        {
          "nome": "Bolinha de queijo",
          "opcoesTitulo": "Quantidade",
          "opcoes": [
            {
              "nome": "Meio cento (50 un)",
              "preco": 40.9
            },
            {
              "nome": "Cento (100 un)",
              "preco": 76.9
            }
          ],
          "img": "1788600448499-0cc867441746"
        },
        {
          "nome": "Risole de presunto e queijo",
          "opcoesTitulo": "Quantidade",
          "opcoes": [
            {
              "nome": "Meio cento (50 un)",
              "preco": 40.9
            },
            {
              "nome": "Cento (100 un)",
              "preco": 76.9
            }
          ],
          "img": "1714256635057-2a831a5c7e8d"
        },
        {
          "nome": "Enroladinho de salsicha",
          "opcoesTitulo": "Quantidade",
          "opcoes": [
            {
              "nome": "Meio cento (50 un)",
              "preco": 35.9
            },
            {
              "nome": "Cento (100 un)",
              "preco": 67.9
            }
          ],
          "img": "1701341964637-94945a277fe0"
        },
        {
          "nome": "Croquete de carne",
          "opcoesTitulo": "Quantidade",
          "opcoes": [
            {
              "nome": "Meio cento (50 un)",
              "preco": 40.9
            },
            {
              "nome": "Cento (100 un)",
              "preco": 76.9
            }
          ],
          "img": "1714256635057-2a831a5c7e8d"
        }
      ]
    },
    {
      "nome": "Salgados assados",
      "icone": "🥐",
      "itens": [
        {
          "nome": "Esfiha de carne",
          "opcoesTitulo": "Quantidade",
          "opcoes": [
            {
              "nome": "Meio cento (50 un)",
              "preco": 44.9
            },
            {
              "nome": "Cento (100 un)",
              "preco": 85.9
            }
          ],
          "img": "../../../assets/img/salgados/esfihas-mini.jpg"
        },
        {
          "nome": "Empadinha de frango",
          "opcoesTitulo": "Quantidade",
          "opcoes": [
            {
              "nome": "Meio cento (50 un)",
              "preco": 53.9
            },
            {
              "nome": "Cento (100 un)",
              "preco": 98.9
            }
          ],
          "img": "1625833196424-a1be6544e069"
        },
        {
          "nome": "Mini pizza",
          "opcoesTitulo": "Quantidade",
          "opcoes": [
            {
              "nome": "Meio cento (50 un)",
              "preco": 44.9
            },
            {
              "nome": "Cento (100 un)",
              "preco": 85.9
            }
          ],
          "img": "1518310532637-f5225f94f3c3"
        },
        {
          "nome": "Enroladinho assado",
          "opcoesTitulo": "Quantidade",
          "opcoes": [
            {
              "nome": "Meio cento (50 un)",
              "preco": 42.9
            },
            {
              "nome": "Cento (100 un)",
              "preco": 80.9
            }
          ],
          "img": "1701341964637-94945a277fe0"
        }
      ]
    },
    {
      "nome": "Mini lanches",
      "icone": "🍔",
      "desc": "Pacote com 10 unidades.",
      "itens": [
        {
          "nome": "Mini hambúrguer",
          "preco": 40.9,
          "img": "1585730315692-5252e57d4b40"
        },
        {
          "nome": "Mini cachorro-quente",
          "preco": 31.9,
          "img": "1613482084286-41f25b486fa2"
        },
        {
          "nome": "Sanduíche natural",
          "desc": "Frango, cenoura e requeijão no pão de forma.",
          "preco": 44.9,
          "img": "1670710029403-607db8eeec83"
        }
      ]
    },
    {
      "nome": "Combos festa",
      "icone": "🎉",
      "desc": "Salgados variados + docinhos.",
      "itens": [
        {
          "nome": "Combo 10 pessoas",
          "desc": "100 salgados + 50 docinhos.",
          "preco": 160.9,
          "precoAntigo": 175.9,
          "img": "1786918517795-c3abeee741c2",
          "tags": [
            "Promoção"
          ]
        },
        {
          "nome": "Combo 20 pessoas",
          "desc": "200 salgados + 100 docinhos + 2 refrigerantes 2 L.",
          "preco": 313.9,
          "precoAntigo": 349.9,
          "img": "1567496295302-b8dbcd2913b6",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Combo 50 pessoas",
          "desc": "500 salgados + 200 docinhos.",
          "preco": 718.9,
          "img": "1786918517795-c3abeee741c2"
        }
      ]
    },
    {
      "nome": "Para comer agora",
      "icone": "🔥",
      "desc": "Salgado grande, saindo quentinho.",
      "itens": [
        {
          "nome": "Coxinha grande",
          "preco": 5.9,
          "img": "../../../assets/img/salgados/coxinha-aberta.jpg"
        },
        {
          "nome": "Kibe grande",
          "preco": 5.9,
          "img": "1786174044931-d395bf77e58e"
        },
        {
          "nome": "Esfiha aberta",
          "desc": "Carne, queijo ou frango.",
          "preco": 4.9,
          "img": "../../../assets/img/salgados/esfiha-aberta.jpg"
        }
      ]
    },
    {
      "nome": "Docinhos e bebidas",
      "icone": "🍬",
      "itens": [
        {
          "nome": "Brigadeiro (cento)",
          "preco": 98.9,
          "img": "1630953900113-ab915924aab2"
        },
        {
          "nome": "Refrigerante 2 L",
          "preco": 12.9,
          "img": "1771770083584-b4b201c85f6a"
        },
        {
          "nome": "Suco 1 L",
          "preco": 13.9,
          "img": "1600271886742-f049cd451bba"
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
      "autor": "Horacio Cambeiro",
      "licenca": "CC BY-SA 3.0",
      "link": "https://commons.wikimedia.org/wiki/File:Coxinhas_made_in_Puerto_Iguaz%C3%BA,_Misiones,_Argentina.jpg"
    },
    {
      "autor": "“E Sortica (Sortica)”",
      "licenca": "Public domain",
      "link": "https://commons.wikimedia.org/wiki/File:Sfiha_aberta.jpg"
    },
    {
      "autor": "Mauro Cateb",
      "licenca": "CC BY-SA 3.0",
      "link": "https://commons.wikimedia.org/wiki/File:Brazilian_sfiha.jpg"
    }
  ]
};
