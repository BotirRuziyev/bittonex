<template>
  <div id="home">
    <div class="home_in">
      <div class="home_text">
        <h5>Банковские карты</h5>
        <h1>Идеальная карта для вас</h1>
      </div>
      <div class="home_img">
        <img src="@/assets/images/home2/card_img.png" alt="card" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#home {
  background: #e8f2ee;
  width: 100%;
  .home_in {
    display: flex;
    gap: 85px;
    max-width: 1400px;
    margin: 0 auto;
    padding-top: 100px;
    .home_text {
      max-width: 700px;
      h5 {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 120%;
        letter-spacing: -0.03em;
        color: #1a191e;
        margin-bottom: 20px;
      }
      h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 80px;
        line-height: 110%;
        letter-spacing: -0.03em;
        color: #1a191e;
      }
    }
    .home_img {
      max-width: 513px;
    }
  }
}

@media (max-width: 1440px) {
  #home {
    .home_in {
      padding: 0 20px;
      padding-top: 100px;
    }
    .home_img {
      max-width: 514px;
      img {
        width: 100%;
        min-width: 400px;
      }
    }
  }
}
@media (max-width: 1100px) {
  #home {
    .home_in {
      padding: 0 20px;
      padding-top: 100px;
      .home_text {
        h1 {
          margin-bottom: 0;
          font-size: 55px;
        }
      }
    }
  }
}
@media (max-width: 992px) {
  #home {
    .home_in {
      padding: 0 20px;
      padding-top: 100px;
      .home_text {
        h1 {
          margin-bottom: 0;
          font-size: 55px;
        }
      }
      .home_img {
        max-width: 514px;
        img {
          width: 100%;
          min-width: 350px;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  #home {
    .home_in {
      padding: 0 20px;
      padding-top: 85px;
      flex-direction: column;
      gap: 30px;
      .home_text {
        h1 {
          margin-bottom: 0;
          font-size: 35px;
        }
        h5 {
          font-size: 22px;
        }
      }
      .home_img {
        max-width: 100%;
        img {
          width: 100%;
          min-width: 350px;
          max-width: 514px;
        }
      }
    }
  }
}
@media (max-width: 450px) {
  #home {
    .home_in {
      .home_img {
        max-width: 100%;
        display: flex;
        justify-content: center;
        img {
          width: 100%;
          min-width: 280px;
          max-width: 514px;
        }
      }
    }
  }
}
</style>
