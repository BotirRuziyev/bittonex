<template>
  <div id="list">
    <div
      class="scroll_buttons d-lg-none d-flex align-items-center justify-content-between"
    >
      <svg
        class="prev"
        width="73"
        height="16"
        viewBox="0 0 73 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.292892 7.29289C-0.0976334 7.68342 -0.0976334 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM73 7L1 7V9L73 9V7Z"
          fill="black"
        />
      </svg>

      Таблица подвижная
      <svg
        class="next"
        width="73"
        height="16"
        viewBox="0 0 73 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M72.7071 8.70711C73.0976 8.31658 73.0976 7.68342 72.7071 7.29289L66.3431 0.928932C65.9526 0.538408 65.3195 0.538408 64.9289 0.928932C64.5384 1.31946 64.5384 1.95262 64.9289 2.34315L70.5858 8L64.9289 13.6569C64.5384 14.0474 64.5384 14.6805 64.9289 15.0711C65.3195 15.4616 65.9526 15.4616 66.3431 15.0711L72.7071 8.70711ZM0 9H72V7H0V9Z"
          fill="black"
        />
      </svg>
    </div>
    <div class="list_container" id="slider">
      <div class="list_in_wr thumbnail">
        <div class="list_in">
          <div class="list_card">
            <div class="card_img">
              <img src="@/assets/images/list/card1.svg" alt="betonix" />
            </div>
            <div class="card_body">
              <h5>Физическая карта</h5>
              <p>Наличие пластиковой карты</p>
            </div>
          </div>
          <div class="list2 list_text">
            <img src="@/assets/images/list/galochka.svg" alt="betonix" />
          </div>
          <div class="list3 list_text">
            <img src="@/assets/images/list/galochka.svg" alt="betonix" />
          </div>
          <div class="list4 list_text">
            <img src="@/assets/images/list/galochka.svg" alt="betonix" />
          </div>
        </div>
        <div class="list_in">
          <div class="list_card">
            <div class="card_img">
              <img src="@/assets/images/list/card2.svg" alt="betonix" />
            </div>
            <div class="card_body">
              <h5>Именная карта</h5>
              <p>Наличие именной карты</p>
            </div>
          </div>
          <div class="list2 list_text">-</div>
          <div class="list3 list_text">
            <img src="@/assets/images/list/galochka.svg" alt="betonix" />
          </div>
          <div class="list4 list_text">2 карты (IDR и USD)</div>
        </div>
        <div class="list_in">
          <div class="list_card">
            <div class="card_img">
              <img src="@/assets/images/list/card3.svg" alt="betonix" />
            </div>
            <div class="card_body">
              <h5>Валюты счёта</h5>
              <p>Доступные валютные счета</p>
            </div>
          </div>
          <div class="list2 list_text">IDR</div>
          <div class="list3 list_text">USD, EUR, CNY</div>
          <div class="list4 list_text">IDR, USD</div>
        </div>
        <div class="list_in">
          <div class="list_card">
            <div class="card_img">
              <img src="@/assets/images/list/card4.svg" alt="betonix" />
            </div>
            <div class="card_body">
              <h5>Валюты оплаты</h5>
              <p>Валюта, в которой происходит оплата</p>
            </div>
          </div>
          <div class="list2 list_text">IDR</div>
          <div class="list3 list_text">IDR</div>
          <div class="list4 list_text">IDR</div>
        </div>
        <div class="list_in">
          <div class="list_card">
            <div class="card_img">
              <img src="@/assets/images/list/card5.svg" alt="betonix" />
            </div>
            <div class="card_body">
              <h5>Лимит трат в день</h5>
              <p>Лимит на онлайн- и оффлайн-покупки</p>
            </div>
          </div>
          <div class="list2 list_text">10.000.000 IDR</div>
          <div class="list3 list_text">20.000.000 IDR</div>
          <div class="list4 list_text">30.000.000 IDR</div>
        </div>
        <div class="list_in">
          <div class="list_card">
            <div class="card_img">
              <img src="@/assets/images/list/card6.svg" alt="betonix" />
            </div>
            <div class="card_body">
              <h5>Лимит снятия наличных в день</h5>
              <p>Дневной лимит на получение наличных</p>
            </div>
          </div>
          <div class="list2 list_text">10.000.000 IDR</div>
          <div class="list3 list_text">10.000.000 IDR</div>
          <div class="list4 list_text">10.000.000 IDR</div>
        </div>
        <div class="list_in">
          <div class="list_card">
            <div class="card_img">
              <img src="@/assets/images/list/card7.svg" alt="betonix" />
            </div>
            <div class="card_body">
              <h5>Снятие и оплата заграницей</h5>
              <p>Использование карты вне Индонезии</p>
            </div>
          </div>
          <div class="list2 list_text">
            <img src="@/assets/images/list/galochka.svg" alt="betonix" />
          </div>
          <div class="list3 list_text">
            <img src="@/assets/images/list/galochka.svg" alt="betonix" />
          </div>
          <div class="list4 list_text">
            <img src="@/assets/images/list/galochka.svg" alt="betonix" />
          </div>
        </div>
        <div class="list_in">
          <div class="list_card">
            <div class="card_img">
              <img src="@/assets/images/list/card8.svg" alt="betonix" />
            </div>
            <div class="card_body">
              <h5>Депозит для открытия</h5>
              <p>Сумма требуемого депозита в банк</p>
            </div>
          </div>
          <div class="list2 list_text">250.000 IDR (100k неснимаемые)</div>
          <div class="list3 list_text">100.000.000 IDR (снимаемые)</div>
          <div class="list4 list_text">1.000.000 IDR + 250 USD (снимаемые)</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    let thumbnail = document.getElementsByClassName("thumbnail");
    let slider = document.querySelector("#slider");
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");

    prev.addEventListener("click", () => {
      slider.scrollLeft -= 360;
      console.log(slider.scrollLeft);
    });

    next.addEventListener("click", () => {
      slider.scrollLeft += 360;
      console.log(slider.scrollLeft);
    });
  },
};
</script>
<style lang="scss" scoped>
#list {
  margin-top: 30px;
  .scroll_buttons {
    max-width: 600px;
    margin: 0 auto;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 180%;
    letter-spacing: -0.03em;
    color: #000000;
    margin-bottom: 22px;
    padding: 0 20px;
  }
  .list_container {
    max-width: 1400px;
    margin: 0 auto;
    .list_in {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e8e8e8;
      padding: 25px 0;
      &:first-child {
        border-top: 1px solid #e8e8e8;
      }
      .list_text {
        text-align: center;
        display: flex;
        justify-content: center;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 160%;
        color: #1a191e;
        max-width: 349px;
        width: 100%;
      }
      .list_card {
        display: flex;
        align-items: center;
        gap: 16px;
        max-width: 353px;
        width: 100%;
        h5 {
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 140%;
          letter-spacing: -0.03em;
          color: #1a191e;
          margin: 0;
        }
        p {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 160%;
          color: rgba(26, 25, 30, 0.5);
          margin: 0;
        }
      }
    }
  }
}

@media (max-width: 1440px) {
  #list {
    .list_container {
      padding: 0 20px;
    }
  }
}
@media (max-width: 960px) {
  #list {
    .list_container {
      padding: 0 20px;
      padding-bottom: 20px;
      overflow: hidden;
      overflow-x: scroll;
      &::-webkit-scrollbar-track {
        height: 5px;
        background-color: transparent;
        padding: 0 30px;
      }

      &::-webkit-scrollbar {
        height: 10px;
        width: 10px;
        background-color: transparent;
        padding: 0 30px;
      }

      &::-webkit-scrollbar-thumb {
        height: 5px;
        border-radius: 8px;
        background-color: #f90;
        background-image: -webkit-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.2) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.2) 50%,
          rgba(255, 255, 255, 0.2) 75%,
          transparent 75%,
          transparent
        );
      }
      .list_in_wr {
        min-width: 927px;
        width: 927px;
        .list_in {
          width: 927px;
          min-width: 927px;
          padding: 15px 0;
        }
      }
    }
  }
}
</style>
