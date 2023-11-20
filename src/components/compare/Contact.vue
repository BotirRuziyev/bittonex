<template>
  <div id="contact">
    <div class="contact_container">
      <div class="t_d_cardText">
        <h3 class="title">Остались вопросы?</h3>
        <p class="description">Мы поможем разобраться.</p>
      </div>
      <div class="network">
        <div class="t_img">
          <img src="@/assets/images/contact/telegram.svg" alt="" />
        </div>
        <div class="textLink">
          <router-link class="NetLink" to="/">@bitonex_support</router-link>
          <span>Телеграм поддержки</span>
        </div>
      </div>
      <div class="network">
        <div class="t_img">
          <img src="@/assets/images/contact/gmail.svg" alt="" />
        </div>
        <div class="textLink">
          <router-link class="NetLink" to="/">help@biton.exchange</router-link>
          <span>Email поддержки</span>
        </div>
      </div>
      <div class="chat">
        <router-link class="chatLink" to="/">Онлайн-чат</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#contact {
  margin: 80px 0;
  margin-bottom: 0;
  .contact_container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #1cd972;
    border-radius: 8px;
    padding: 32px;
    .title {
      font-style: normal;
      font-weight: 500;
      font-size: 28px;
      line-height: 120%;
      letter-spacing: -0.03em;
      color: #ffffff;
      margin: 0;
    }
    .description {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 180%;
      color: #ffffff;
      opacity: 0.7;
      margin: 0;
    }
    .network {
      display: flex;
      gap: 16px;
      .NetLink {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 140%;
        letter-spacing: -0.05em;
        color: #ffffff;
        text-decoration: none;
      }
      span {
        display: block;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 160%;
        color: #ffffff;
        opacity: 0.7;
      }
    }
    .chatLink {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 100%;
      letter-spacing: -0.03em;
      color: #ffffff;
      text-decoration: none;
      padding: 16px 24px;
      background: #1a191e;
      border-radius: 6px;
    }
  }
}

@media (max-width: 1440px) {
  #contact {
    padding: 0 20px;
  }
}
@media (max-width: 1080px) {
  #contact {
    .contact_container {
      padding: 20px;
    }
  }
}
@media (max-width: 992px) {
  #contact {
    .contact_container {
      padding: 20px;
      flex-wrap: wrap;
      gap: 24px;
      justify-content: end;
      align-items: center;
    }
  }
}
@media (max-width: 862px) {
  #contact {
    .contact_container {
      padding: 20px;
      flex-wrap: wrap;
      gap: 24px;
      justify-content: center;
      align-items: center;
    }
  }
}

@media (max-width: 576px) {
  #contact {
    margin: 30px 0;
    .contact_container {
      flex-direction: column;
      align-items: center;
      padding-bottom: 34px;
      .t_d_cardText {
        max-width: 300px;
        width: 100%;
      }
      .title {
        font-size: 22px;
      }
      .description {
        font-size: 16px;
      }
      .network {
        max-width: 300px;
        width: 100%;
        .NetLink {
          font-size: 16px;
        }
        span {
          font-size: 13px;
        }
      }
      .chatLink {
        font-size: 16px;
        line-height: 120%;
      }
    }
  }
}
</style>
