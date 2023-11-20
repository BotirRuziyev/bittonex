<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/images/logo.svg" alt="logo" />
      </router-link>
    </div>
    <ul class="nav_bar" :class="mobmenu ? 'nav_bar_active' : ''">
      <li class="nav_item">
        <a @click="mobmenu = false" class="nav_link" href="#exchange">Обмен</a>
      </li>
      <li class="nav_item">
        <router-link @click="mobmenu = false" class="nav_link" to="/compare"
          >Банковские карты</router-link
        >
      </li>
      <li class="nav_item">
        <a @click="mobmenu = false" class="nav_link" href="#traveling"
          >Путешественникам</a
        >
      </li>
      <li class="nav_item">
        <router-link @click="mobmenu = false" class="nav_link" to="/support"
          >FAQ</router-link
        >
      </li>
      <li class="nav_item">
        <router-link
          @click="mobmenu = false"
          class="nav_link mobile_contact_link"
          to="/"
          >Связаться с нами</router-link
        >
      </li>
    </ul>
    <div class="contact_head">
      <a class="contact_link" href="#contact">Связаться с нами</a>
    </div>
    <div class="burger" @click="mobmenu = !mobmenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobmenu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  max-width: 1400px;
  padding: 24px 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav_bar {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    gap: 36px;
    .nav_item {
      padding: 0;
      margin: 0;
      .nav_link {
        text-decoration: none;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 170%;
        color: #1a191e;
      }
      .mobile_contact_link {
        display: none;
      }
    }
  }
  .contact_head {
    .contact_link {
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 100%;
      color: #ffffff;
      padding: 12px 16px;
      background: #1cd972;
      border-radius: 6px;
      text-decoration: none;
    }
  }
  .burger {
    display: none;
  }
}
@media (max-width: 1440px) {
  header {
    padding: 20px;
    .nav_bar {
      gap: 24px;
    }
  }
}
@media (max-width: 992px) {
  header {
    padding: 0 20px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    .logo {
      width: 100%;
      max-width: 100%;
      position: relative;
      z-index: 1001;
      background: #fff;
      padding: 13px 0;
      img {
        width: 143px;
      }
    }
    .nav_bar {
      gap: 20px;
      position: fixed;
      display: flex;
      z-index: 1000;
      flex-direction: column;
      top: -100%;
      align-items: flex-start;
      background: #fff;
      width: 100%;
      left: 0;
      padding-left: 20px;
      padding-top: 86px;
      height: 100%;
      transition: 0.5s;
      .nav_item {
        .mobile_contact_link {
          display: block;
        }
      }
    }
    .nav_bar_active {
      top: 0;
    }
    .contact_head {
      display: none;
    }
    .burger {
      display: flex;
      flex-direction: column;
      row-gap: 3px;
      position: relative;
      z-index: 1001;
      span {
        background: #1cd972;
        height: 3px;
        width: 20px;
      }
    }
  }
}
</style>
