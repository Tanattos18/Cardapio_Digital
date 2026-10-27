/*
 * Salgados da Lu — configuração do cardápio
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
  "modelo": "Salgados para festa 1 · App de delivery",
  "layout": "app",
  "nome": "Salgados da Lu",
  "slogan": "Salgados fresquinhos para a sua festa.",
  "logo": null,
  "capa": "../../../assets/img/salgados/coxinhas-bandeja.jpg",
  "tema": {
    "fonteTitulo": "'Nunito', serif",
    "fonteTexto": "'Nunito', system-ui, sans-serif",
    "fundo": "#ffffff",
    "superficie": "#fff6ee",
    "texto": "#2b1a0e",
    "suave": "#7a6250",
    "primaria": "#ea580c",
    "textoPrimaria": "#ffffff",
    "secundaria": "#facc15"
  },
  "avaliacao": {
    "nota": 4.9,
    "total": 512
  },
  "promo": {
    "selo": "Aniversário",
    "titulo": "Combo 20 pessoas com 2 refrigerantes grátis",
    "texto": "Para encomendas feitas com 3 dias de antecedência."
  },
  "sobre": "Salgados caseiros feitos sob encomenda para aniversários, chás e eventos da empresa. Entregamos fritos e quentinhos ou congelados para você fritar na hora.",
  "diferenciais": [
    "Feitos no dia",
    "Fritos ou congelados",
    "Massa sequinha",
    "Entrega no horário"
  ],
  "galeria": [
    "../../../assets/img/salgados/coxinha-aberta.jpg",
    "../../../assets/img/salgados/esfihas-mini.jpg",
    "1786918517795-c3abeee741c2"
  ],
  "contato": {
    "whatsapp": "5500900000057",
    "telefone": "(00) 90000-0057",
    "email": "contato@salgadosdalu.com.br"
  },
  "redes": {
    "instagram": "salgadosdalu",
    "facebook": "salgadosdalu"
  },
  "endereco": {
    "rua": "Rua dos Ipês, 300",
    "bairro": "Vila Maria",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    null,
    {
      "abre": "08:00",
      "fecha": "20:00"
    },
    {
      "abre": "08:00",
      "fecha": "20:00"
    },
    {
      "abre": "08:00",
      "fecha": "20:00"
    },
    {
      "abre": "08:00",
      "fecha": "20:00"
    },
    {
      "abre": "08:00",
      "fecha": "20:00"
    },
    {
      "abre": "08:00",
      "fecha": "20:00"
    }
  ],
  "entrega": {
    "taxa": 8,
    "tempo": "Na data e horário marcados",
    "pedidoMinimo": 40,
    "area": "Até 10 km"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro"
  ],
  "encomenda": {
    "antecedenciaDias": 1,
    "aviso": "Encomendas com pelo menos 1 dia de antecedência. Para o mesmo dia, chame no WhatsApp."
  },
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Mais pedidos",
      "icone": "⭐",
      "itens": [
        {
          "nome": "Cento misto",
          "desc": "Coxinha, kibe, bolinha de queijo e risole.",
          "preco": 85,
          "img": "1786918517795-c3abeee741c2",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Coxinha com catupiry (cento)",
          "preco": 95,
          "img": "../../../assets/img/salgados/coxinha-aberta.jpg"
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
              "preco": 45
            },
            {
              "nome": "Cento (100 un)",
              "preco": 85
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
              "preco": 45
            },
            {
              "nome": "Cento (100 un)",
              "preco": 85
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
              "preco": 45
            },
            {
              "nome": "Cento (100 un)",
              "preco": 85
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
              "preco": 45
            },
            {
              "nome": "Cento (100 un)",
              "preco": 85
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
              "preco": 40
            },
            {
              "nome": "Cento (100 un)",
              "preco": 75
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
              "preco": 45
            },
            {
              "nome": "Cento (100 un)",
              "preco": 85
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
              "preco": 50
            },
            {
              "nome": "Cento (100 un)",
              "preco": 95
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
              "preco": 60
            },
            {
              "nome": "Cento (100 un)",
              "preco": 110
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
              "preco": 50
            },
            {
              "nome": "Cento (100 un)",
              "preco": 95
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
              "preco": 48
            },
            {
              "nome": "Cento (100 un)",
              "preco": 90
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
          "preco": 45,
          "img": "1585730315692-5252e57d4b40"
        },
        {
          "nome": "Mini cachorro-quente",
          "preco": 35,
          "img": "1613482084286-41f25b486fa2"
        },
        {
          "nome": "Sanduíche natural",
          "desc": "Frango, cenoura e requeijão no pão de forma.",
          "preco": 50,
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
          "preco": 179,
          "precoAntigo": 195,
          "img": "1786918517795-c3abeee741c2",
          "tags": [
            "Promoção"
          ]
        },
        {
          "nome": "Combo 20 pessoas",
          "desc": "200 salgados + 100 docinhos + 2 refrigerantes 2 L.",
          "preco": 349,
          "precoAntigo": 389,
          "img": "1567496295302-b8dbcd2913b6",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Combo 50 pessoas",
          "desc": "500 salgados + 200 docinhos.",
          "preco": 799,
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
          "preco": 7,
          "img": "../../../assets/img/salgados/coxinha-aberta.jpg"
        },
        {
          "nome": "Kibe grande",
          "preco": 7,
          "img": "1786174044931-d395bf77e58e"
        },
        {
          "nome": "Esfiha aberta",
          "desc": "Carne, queijo ou frango.",
          "preco": 6,
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
          "preco": 110,
          "img": "1630953900113-ab915924aab2"
        },
        {
          "nome": "Refrigerante 2 L",
          "preco": 14,
          "img": "1771770083584-b4b201c85f6a"
        },
        {
          "nome": "Suco 1 L",
          "preco": 15,
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
