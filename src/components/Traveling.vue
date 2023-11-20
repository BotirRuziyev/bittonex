<template>
  <div class="traveling" id="traveling">
    <div class="traveling_left">
      <h1 class="traveling_title">Путешествуете вы. Платим мы.</h1>
      <p class="traveling_description">
        Сопроводим вас на всех этапах путешествия.
      </p>
      <div class="traveling_card_wrapper">
        <div class="traveling_card">
          <div class="traveling_card_in">
            <div class="card_img">
              <img src="@/assets/images/traveling/card1.svg" alt="betonix" />
            </div>
            <div class="card_body">
              <h5 class="title">поможем оплатить</h5>
              <p class="description">
                проживание или трансфер в местной валюте
              </p>
            </div>
          </div>
          <span></span>
        </div>
        <div class="traveling_card">
          <div class="traveling_card_in">
            <div class="card_img">
              <img src="@/assets/images/traveling/card2.svg" alt="betonix" />
            </div>
            <div class="card_body">
              <h5 class="title">займёмся выпуском</h5>
              <p class="description">
                местной банковской карты еще до вашего визита в страну
              </p>
            </div>
          </div>
          <span></span>
        </div>
        <div class="traveling_card">
          <div class="traveling_card_in">
            <div class="card_img">
              <img src="@/assets/images/traveling/card3.svg" alt="betonix" />
            </div>
            <div class="card_body">
              <h5 class="title">безопасно выдадим</h5>
              <p class="description">наличную местную валюту по прилету</p>
            </div>
          </div>
          <span></span>
        </div>
        <div class="traveling_card">
          <div class="traveling_card_in">
            <div class="card_img">
              <img src="@/assets/images/traveling/card4.svg" alt="betonix" />
            </div>
            <div class="card_body">
              <h5 class="title">и многое другое</h5>
            </div>
          </div>
          <span></span>
        </div>
      </div>
      <div class="traveling_link">
        <router-link class="traveling_link_in" to="/"
          >Получить консультацию</router-link
        >
      </div>
    </div>
    <div class="traveling_right">
      <img src="@/assets/images/traveling/img_right.png" alt="betonix" />
    </div>
  </div>
</template>
