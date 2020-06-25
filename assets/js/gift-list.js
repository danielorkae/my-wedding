(() => {
  const list = [
    {
      title: "Geladeira",
      price: 1899,
      code: "XXX-XXX",
      img: "",
    },
  ];

  const createGiftCard = (title, price, code, img) => {
    return `
      <div class="col-md-4">
        <div class="card">
          <img src="${img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              <span class="gift-item__name">
                ${title}
              </span>

              <span class="gift-item__price">
                <span>R$</span>
                <span class="gift-item__value">
                  ${Intl.NumberFormat("pt-br", {
                    minimumFractionDigits: 2,
                  }).format(price)}
                </span>
              </span>
            </h5>
            <a href="https://pag.ae/${code}" class="btn btn-outline-dark btn-block" target="_blank">
              Presentear
            </a>
          </div>
        </div>
      </div>
      `;
  };

  const createGiftList = (container) => {
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

  init();
})();
