<template>
  <div id="compare_card_wrapper">
    <div class="compare_card">
      <div class="compare_card_in">
        <h5 class="card_title">Permata Visa Green <span>Популярная</span></h5>
        <h2>Бесплатно*</h2>
        <p>Базовая карта Permata, откроем бесплатно при выполнении условий.</p>
        <div class="card_img">
          <img src="@/assets/images/compare_cards/card1.png" alt="betonix" />
        </div>
        <div class="order">
          <router-link class="order_link" to="/">Заказать карту</router-link>
        </div>
      </div>
      <div class="compare_card_in">
        <h5 class="card_title">Permata Visa Red</h5>
        <h2>800 тыс. IDR</h2>
        <p>
          Именная карта Permata, отличается повышенными лимитами на операции.
        </p>
        <div class="card_img">
          <img src="@/assets/images/compare_cards/card2.png" alt="betonix" />
        </div>
        <div class="order">
          <router-link class="order_link" to="/">Заказать карту</router-link>
        </div>
      </div>
      <div class="compare_card_in">
        <h5 class="card_title">Maybank Mastercard Maksi</h5>
        <h2>800 тыс. IDR</h2>
        <p>Базовая карта Maybank, выдаётся сразу 2 карты: в USD и в IDR.</p>
        <div class="card_img">
          <img src="@/assets/images/compare_cards/card3.png" alt="betonix" />
        </div>
        <div class="order">
          <router-link class="order_link" to="/">Заказать карту</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#compare_card_wrapper {
  padding-top: 95px;
  .compare_card {
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: end;
    gap: 60px;
    .compare_card_in {
      max-width: 291px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      .card_title {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 120%;
        text-align: center;
        letter-spacing: -0.05em;
        color: #1a191e;
        span {
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 180%;
          text-align: center;
          color: #1cd972;
          background: #e8f2ee;
          border-radius: 4px;
          padding: 4px 6px;
          margin-left: 8px;
        }
      }
      h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 100%;
        text-align: center;
        letter-spacing: -0.03em;
        color: #1a191e;
        margin-top: 25px;
        margin-bottom: 8px;
      }
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 160%;
        text-align: center;
        color: rgba(26, 25, 30, 0.5);
        max-width: 220px;
        text-align: center;
      }
      .card_img {
        margin: 24px 0;
      }
      .order {
        width: 100%;
      }
      .order_link {
        background: #1cd972;
        border-radius: 6px;
        display: block;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 100%;
        color: #ffffff;
        width: 100%;
        padding: 12px 0;
        text-decoration: none;
      }
    }
  }
}

@media (max-width: 1440px) {
  #compare_card_wrapper {
    .compare_card {
      padding: 0 20px;
    }
  }
}
@media (max-width: 1024px) {
  #compare_card_wrapper {
    padding-top: 40px;
    .compare_card {
      flex-wrap: wrap;
      gap: 40px;
      justify-content: center;
    }
  }
}
@media (max-width: 768px) {
  #compare_card_wrapper {
    .compare_card {
      .compare_card_in {
        // border: 1px solid;
        border-radius: 12px;
        padding: 12px;
        max-width: 313px;
        box-shadow: 0 0 5px #e8e8e8;
        .card_title {
          font-size: 18px;
          margin-bottom: 0;
        }
        h2 {
          margin-top: 8px;
          margin-bottom: 8px;
          font-size: 28px;
        }
      }
    }
  }
}
@media (max-width: 664px) {
  #compare_card_wrapper {
    .compare_card {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
