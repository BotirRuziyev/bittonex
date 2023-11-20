<template>
  <div id="service">
    <div class="service_text">
      <h1>Один сервис. Много функций.</h1>
      <div class="service_card_wrapper">
        <div class="service_card">
          <div class="card_img">
            <img src="@/assets/images/service/card1.svg" alt="badge" />
          </div>
          <div class="card_body">
            <div class="card_title">Быстрый обмен</div>
            <p>Обменивайте фиат и криптовалюту в несколько кликов.</p>
          </div>
        </div>
        <div class="service_card">
          <div class="card_img">
            <img src="@/assets/images/service/card2.svg" alt="badge" />
          </div>
          <div class="card_body">
            <div class="card_title">Банковские карты</div>
            <p>
              Получите карту местного банка и платите оффлайн или в Интернете.
            </p>
          </div>
        </div>
        <div class="service_card">
          <div class="card_img">
            <img src="@/assets/images/service/card3.svg" alt="badge" />
          </div>
          <div class="card_body">
            <div class="card_title">Абсолютная свобода</div>
            <p>Быстрый обмен средств без привязки к местоположению.</p>
          </div>
        </div>
        <div class="service_card">
          <div class="card_img">
            <img src="@/assets/images/service/card4.svg" alt="badge" />
          </div>
          <div class="card_body">
            <div class="card_title">Прозрачные курсы</div>
            <p>Без скрытых комиссий и доплат. Мы за открытость и честность.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="service_img">
      <img src="@/assets/images/service/phone.png" alt="phone" />
    </div>
  </div>
</template>

<style lang="scss">
#service {
  max-width: 1150px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 200px 20px 0;
  .service_text {
    max-width: 600px;
    h1 {
      font-style: normal;
      font-weight: 400;
      font-size: 74px;
      line-height: 110%;
      letter-spacing: -0.03em;
      color: #1a191e;
    }
    .service_card_wrapper {
      display: grid;
      gap: 32px;
      grid-template-columns: repeat(2, 1fr);
      margin-top: 64px;
      .service_card {
        border: 2px solid #e8e8e8;
        border-radius: 16px;
        padding: 32px;
        .card_title {
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 120%;
          letter-spacing: -0.03em;
          color: #1a191e;
          margin-top: 16px;
        }
        p {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 160%;
          color: #1a191e;
          margin-top: 10px;
        }
      }
    }
  }
  .service_img {
    max-width: 380px;
    img {
      width: 100%;
    }
  }
}

@media (max-width: 992px) {
  #service {
    flex-direction: column;
    .service_text {
      max-width: 100%;
    }
  }
}
@media (max-width: 768px) {
  #service {
    padding-top: 86px;
    .service_text {
      max-width: 100%;
      width: 100%;
      h1 {
        font-weight: 600;
        font-size: 34px;
        line-height: 110%;
        margin-bottom: 40px;
      }
      .service_card_wrapper {
        grid-template-columns: repeat(1, 1fr);
        gap: 24.5px;
        .service_card {
          display: flex;
          padding: 28px 14.5px 25px 11px;
          .card_img {
            padding-right: 14px;
          }
          .card_title {
            margin-top: 0;
            font-size: 16px;
            line-height: 120%;
          }
          p {
            font-size: 12px;
            line-height: 160%;
            margin: 5px 0 0 0;
          }
        }
      }
    }
  }
}

@media (max-width: 576px) {
  #service {
    .service_img {
      max-width: 241.61px;
    }
  }
}
</style>
