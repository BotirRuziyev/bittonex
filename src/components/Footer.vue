<template>
  <footer>
    <div class="footer_top">
      <div class="logo d-md-block d-none">
        <router-link to="/"
          ><img src="@/assets/images/footer_logo.svg" alt="bitonex"
        /></router-link>
      </div>
      <div class="footer_link_wrapper">
        <a class="footer_link" href="#contact">Связаться с нами</a>
        <router-link class="footer_link" to="/support">FAQ</router-link>
        <router-link class="footer_link" to="/aml">AML&KYC</router-link>
        <a class="footer_link" href="#service">Правила сервиса</a>
      </div>
    </div>
    <div
      class="footer_bottom d-flex align-items-center justify-content-between"
    >
      <div class="logo d-md-none d-block">
        <router-link to="/"
          ><img src="@/assets/images/footer_logo.svg" alt="bitonex"
        /></router-link>
      </div>
      <div>
        <h2>© PT PMA BITON GROUP SOLUTIONS</h2>
        <p>
          Jl Bypass Ngurah Rai No.888XX, Pemogan, Denpasar Selatan, Bali
          Province
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@media (max-width: 992px) {
  footer {
    margin-top: 40px;
  }
}
</style>
