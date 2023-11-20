<template>
  <div id="home" class="home">
    <div class="home_text">
      <h1>Очень простой обмен <span>криптовалюты и фиата</span> на Бали 🇮🇩</h1>
      <p>
        Обменяем ваши средства на местную валюту и наоборот. Выпустим карты
        местных банков. Ничего лишнего.
      </p>
      <div class="g_home_wrapper">
        <div class="g_home">
          <p>
            <img src="@/assets/images/home/galochka.svg" alt="" />Быстрый обмен
          </p>
          <p>
            <img src="@/assets/images/home/galochka.svg" alt="" />Поддержка 24/7
          </p>
          <p>
            <img src="@/assets/images/home/galochka.svg" alt="" />Выгодные курсы
          </p>
          <p>
            <img src="@/assets/images/home/galochka.svg" alt="" />100% безопасно
          </p>
        </div>
      </div>
      <div class="home_link_wrapper">
        <a class="home_link" href="#exchange">Перейти к обмену</a>
        <router-link class="home_link" to="/compare"
          >Выбрать карту <img src="@/assets/images/home/arrov_icon.svg" alt=""
        /></router-link>
      </div>
    </div>
    <div class="home_img">
      <img
        class="d-lg-block d-none"
        src="@/assets/images/home/card.png"
        alt=""
      />
      <img
        class="d-lg-none d-block"
        src="@/assets/images/home/cards_mob.svg"
        alt=""
      />
    </div>
  </div>
</template>
