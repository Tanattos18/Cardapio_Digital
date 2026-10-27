/*
 * Seus dados (quem vende os cardápios). Aparecem na vitrine, na barra
 * "Quero este modelo" e no rodapé de cada cardápio ("Cardápio digital por ...").
 * Nos modelos de demonstração, os pedidos de teste chegam neste WhatsApp.
 * WhatsApp: só números, com 55 + DDD. Ex.: 5562999998888
 */
window.VENDEDOR = {
  nome: 'Joás Santana Nascimento',
  whatsapp: '5562991657619',
  instagram: '',
  cidade: 'Goiânia - GO',
  site: 'https://akyllastudio.github.io/links.html', // link profissional, aparece no rodapé da vitrine

  // Planos mostrados na vitrine. O preço não depende do modelo escolhido: muda o serviço.
  planos: [
    {
      nome: 'Essencial',
      preco: 297,
      resumo: 'Para começar a vender pelo cardápio digital.',
      itens: [
        'Qualquer um dos modelos, com as suas cores e logo',
        'Até 40 produtos com foto e preço',
        'Pedido pelo WhatsApp, horários, mapa e redes sociais',
        'QR Code do cardápio pronto para usar',
        'Publicação com link próprio',
        '1 rodada de ajustes'
      ]
    },
    {
      nome: 'Completo',
      preco: 497,
      destaque: true,
      resumo: 'Para quem tem cardápio grande ou atende em mesas.',
      itens: [
        'Tudo do plano Essencial',
        'Até 120 produtos',
        'Domínio próprio (seunegocio.com.br) no primeiro ano',
        'Plaquinhas de QR Code numeradas por mesa, prontas para imprimir',
        'Ajuste das fotos dos produtos',
        '2 rodadas de ajustes'
      ]
    }
  ],
  manutencao: {
    preco: 49,
    texto: 'Atualização de preços, produtos e promoções sempre que precisar (até 10 alterações por mês) e a página sempre no ar.'
  }
};
