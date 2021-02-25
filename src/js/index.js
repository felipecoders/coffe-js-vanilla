class App extends AppBase {
  constructor() {
    super()

    this.banner = new Banner({
      target: 'section#banner',
      images: ['banner-01.jpg', 'banner-02.jpg', 'banner-03.jpg'],
      time: 2,
    })
    this.highlights = new Highlights({
      target: 'section#products',
      time: 5,
      products: [
        {
          id: Date.now(),
          name: 'Product type A',
          image: './images/banner-01.jpg',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
        },
        {
          id: Date.now(),
          name: 'Product type B',
          image: './images/banner-02.jpg',
          description: `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets`,
        },
        {
          id: Date.now(),
          name: 'Product type C',
          image: './images/banner-03.jpg',
          description: `Containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
      ],
    })
    this.companyValues = new CompanyValues({
      target: 'section#information',
      options: [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.',
        'There is no one who loves pain itself, who seeks after it and wants',
      ],
    })

    this.start()
  }

  start() {
    this.banner.start()
    this.highlights.start()
    this.companyValues.start()
  }
}

window.app = new App()
