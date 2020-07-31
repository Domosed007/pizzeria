// import Item1 from "public/images/item1.jpg";
// import Item2 from "public/images/item2.jpg";
// import Item3 from "public/images/item3.jpg";
// import Item4 from "public/images/item4.jpg";
// import Item5 from "public/images/salat-ceszar.jpg";
// import Item6 from "public/images/salat-s-krabovumi-palochkami.jpg";
// import Item7 from "public/images/salat-shyba.jpg";
// import Item8 from "public/images/salat-stolichny.jpg";
// import Item9 from "public/images/item9.jpg";
// import Item10 from "public/images/item10.jpg";
// import Item11 from "public/images/сacao.jpg";
// import Item12 from "public/images/item12.jpg";
// import Item13 from "public/images/item13.jpg";
// import Item14 from "public/images/item14.jpg";
// import Item15 from "public/images/sprite.jpg";

const initState = {
  items: [
    {
      id: 1,
      name: "Фирменная",
      category: "pizza",
      price: 60,
      description: "Курица, грибы, сыр, томатный соус",
      img: "https://bufet.ua/wp-content/uploads/2014/04/firmennaya-2.jpg",
    },
    {
      id: 2,
      name: "Курица с грибами",
      category: "pizza",
      price: 50,
      description: "Курица, грибы, томатный соус",
      img: "https://bufet.ua/wp-content/uploads/2014/04/kurica-s-gribami-2.jpg",
    },
    {
      id: 3,
      name: "Мясная",
      category: "pizza",
      price: 70,
      description: "Ветчина, сыр, помидор, чеснок, соус, майонез",
      img: "https://bufet.ua/wp-content/uploads/2014/04/myasnaya-2.jpg",
    },
    {
      id: 4,
      name: "С ветчиной",
      category: "pizza",
      price: 50,
      description: "Ветчина, соус, сыр, майонез",
      img: "https://bufet.ua/wp-content/uploads/2014/04/s-vetchinoj-2.jpg",
    },
    {
      id: 5,
      name: "Цезарь",
      category: "salat",
      price: 35,
      description: "Куриное филе, листья салата, сухарики, майонез, чеснок",
      img: "https://bufet.ua/wp-content/uploads/2020/01/1.jpg",
    },
    {
      id: 6,
      name: "С крабовыми палочками",
      category: "salat",
      price: 30,
      description: "Крабовые палочки, яйца, кукуруза, огурец, майонез",
      img:
        "https://bufet.ua/wp-content/uploads/2014/04/salat-negnost_product1.jpg",
    },
    {
      id: 7,
      name: "Селедка под шубой",
      category: "salat",
      price: 29,
      description: "Селедка, свекла, картошка, майонез",
      img:
        "https://bufet.ua/wp-content/uploads/2014/04/salat-shyba_product.jpg",
    },
    {
      id: 8,
      name: "Столичный",
      category: "salat",
      price: 32,
      description: "Курица, горошек, огурцы, капуста, картошка, майонез",
      img:
        "https://bufet.ua/wp-content/uploads/2014/04/salat-stolichny_product.jpg",
    },
    {
      id: 9,
      name: "Черный кофе",
      category: "drink",
      price: 20,
      description: "",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WPVnJM7MFWVvE_B_RBMUKAEsDh%26pid%3DApi&f=1",
    },
    {
      id: 10,
      name: "Черный чай",
      category: "drink",
      price: 20,
      description: "",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.9WWVXeuft8FJ29CFiYFv2AAAAA%26pid%3DApi&f=1",
    },
    {
      id: 11,
      name: "Какао",
      category: "drink",
      price: 20,
      description: "",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.CcGJ2Tj1g5VzRgiFuvxuUAHaE7%26pid%3DApi&f=1",
    },
    {
      id: 12,
      name: "Кола",
      category: "drink",
      price: 20,
      description: "",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.rWGrQQZHbK5bCeU5fqotpQHaHa%26pid%3DApi&f=1",
    },
    {
      id: 13,
      name: "Фанта",
      category: "drink",
      price: 20,
      description: "",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9iIMv0ImmRr_u-yjWHqtdAAAAA%26pid%3DApi&f=1",
    },
    {
      id: 14,
      name: "Зеленый чай",
      category: "drink",
      price: 20,
      description: "",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.bxgAQZc2wjSGmEDhdAtc0QHaHa%26pid%3DApi&f=1",
    },
    {
      id: 15,
      name: "Спрайт",
      category: "drink",
      price: 20,
      description: "",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.je1w1vDGlWnwya_pDplr4AAAAA%26pid%3DApi&f=1",
    },
  ],
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  return state;
};
export default cartReducer;
