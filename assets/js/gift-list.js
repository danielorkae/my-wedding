(() => {
  const list = [
    {
      title: "Microondas",
      price: 599,
      code: "7W9ew9FcJ",
      img: "assets/img/products/microondas.jpg",
    },
    {
      title: "Armário de cozinha",
      price: 479,
      code: "7W9eJ6JG4",
      img: "assets/img/products/armario-de-cozinha.jpg",
    },
    {
      title: "Mesa e cadeiras",
      price: 629,
      code: "7W9eSVDCM",
      img: "assets/img/products/mesa-cadeiras.jpg",
    },
    {
      title: "Tapete para sala",
      price: 189,
      code: "7W9eyGYhK",
      img: "assets/img/products/tapete.jpg",
    },
    {
      title: "Lavadoura de roupas",
      price: 1299,
      code: "7W9eydn4o",
      img: "assets/img/products/lavadoura-de-roupas.jpg",
    },
    {
      title: "Multiprocessador",
      price: 289,
      code: "7W9ez6yEr",
      img: "assets/img/products/multiprocessador.jpg",
    },
    {
      title: "Faqueiro",
      price: 129,
      code: "7W9ex6CB3",
      img: "assets/img/products/faqueiro.jpg",
    },
    {
      title: "Air Fryer",
      price: 449,
      code: "7W9exPxS3",
      img: "assets/img/products/air-fryer.jpg",
    },
  ];

  const createGiftCard = (title, price, code, img) => {
    return `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              <div class="gift-item__name">
                ${title}
              </div>

              <div class="gift-item__price text-nowrap">
                <span>R$</span>
                <span class="gift-item__value">
                  ${Intl.NumberFormat("pt-br", {
                    minimumFractionDigits: 2,
                  }).format(price)}
                </span>
              </div>
            </h5>
            <a href="https://pag.ae/${code}" class="btn btn-outline-light btn-block" target="_blank">
              Presentear
            </a>
          </div>
        </div>
      </div>
      `;
  };

  const createGiftList = (container) => {
    shuffle(list);

    list.forEach((item) => {
      container.append(
        createGiftCard(item.title, item.price, item.code, item.img)
      );
    });
  };

  const init = () => {
    var giftListContainer = $("#gift-list .row");

    createGiftList(giftListContainer);
  };

  const shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  init();
})();
