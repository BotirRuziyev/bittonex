<template>
  <section class="exchange" id="exchange">
    <div class="main_container">
      <h1 class="title text-center">Заявка на обмен</h1>
      <form class="currency_converter" action="" @submit.prevent>
        <div class="currency_converter_in">
          <div class="sending_receiving">
            <div class="form_control d-flex align-items-end give_away">
              <label for="sending" class="d-block"
                ><span>Отдаёте</span>
                <input
                  v-maska
                  data-maska="9 99#.##"
                  data-maska-tokens="9:[0-9]:repeated"
                  data-maska-reversed
                  id="sending"
                  placeholder="1 000.00"
                />
              </label>
              <div
                class="currency_logo position-relative"
                :class="curreny ? 'curreny_active' : ''"
              >
                <span
                  class="currency_btn currency_btnone"
                  @click="(curreny = !curreny), (curreny2 = false)"
                >
                  <span> USDT (TRC20)</span>
                  <img
                    height="20"
                    style="margin-left: 5px"
                    src="@/assets/images/arrow_down.png"
                    alt=""
                  />
                </span>
                <div class="currency_menu position-absolute">
                  <option
                    class="currency_option"
                    @click="curreny_val('USDT')"
                    value="USDT"
                  >
                    USDT
                  </option>
                  <option
                    class="currency_option"
                    @click="curreny_val('BTC')"
                    value="BTC"
                  >
                    BTC
                  </option>
                  <option
                    class="currency_option"
                    @click="curreny_val('ETH')"
                    value="ETH"
                  >
                    ETH
                  </option>
                  <option
                    class="currency_option"
                    @click="curreny_val('USDC')"
                    value="USDC"
                  >
                    USDC
                  </option>
                </div>
              </div>
            </div>
            <div class="form_control d-flex align-items-end receive">
              <label for="receiving" class="d-block"
                ><span>Отдаёте</span>
                <input
                  v-maska
                  data-maska="9 99#.##"
                  data-maska-tokens="9:[0-9]:repeated"
                  data-maska-reversed
                  id="receiving"
                  placeholder="1 000.00"
                />
              </label>
              <div
                class="currency_logo position-relative"
                :class="curreny2 ? 'curreny_active' : ''"
              >
                <span
                  class="currency_btn currency_btntwo"
                  @click="(curreny2 = !curreny2), (curreny = false)"
                >
                  <span> IDR Cash</span>
                  <img
                    height="20"
                    style="margin-left: 5px"
                    src="@/assets/images/arrow_down.png"
                    alt=""
                  />
                </span>
                <div class="currency_menu position-absolute">
                  <option
                    class="currency_option"
                    @click="curreny_val2('RUB')"
                    value="RUB"
                  >
                    RUB
                  </option>
                  <option
                    class="currency_option"
                    @click="curreny_val2('USD')"
                    value="USD"
                  >
                    USD
                  </option>
                  <option
                    class="currency_option"
                    @click="curreny_val2('IDR')"
                    value="IDR"
                  >
                    IDR
                  </option>
                </div>
              </div>
            </div>
          </div>
          <div class="data_entry">
            <div class="form_control">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0623 14.5168C13.7317 14.5168 15.8957 12.3528 15.8957 9.68343C15.8957 7.01405 13.7317 4.8501 11.0623 4.8501C8.39295 4.8501 6.22899 7.01405 6.22899 9.68343C6.22899 12.3528 8.39295 14.5168 11.0623 14.5168Z"
                  fill="black"
                  fill-opacity="0.3"
                />
                <path
                  d="M1.87899 27.0832V24.6666C1.87899 19.6027 5.99844 15.9666 11.0623 15.9666C16.1262 15.9666 20.2457 19.6027 20.2457 24.6666V27.0832H1.87899Z"
                  fill="black"
                  fill-opacity="0.3"
                />
                <path
                  d="M21.2123 10.1667C23.3478 10.1667 25.079 8.43552 25.079 6.30002C25.079 4.16452 23.3478 2.43335 21.2123 2.43335C19.0768 2.43335 17.3457 4.16452 17.3457 6.30002C17.3457 8.43552 19.0768 10.1667 21.2123 10.1667Z"
                  fill="black"
                  fill-opacity="0.3"
                />
                <path
                  d="M21.2123 11.6167C18.4559 11.6167 16.0885 13.0048 15.0339 15.2315C17.3751 16.1078 19.2872 17.7376 20.4516 19.8334H27.979V17.9C27.979 14.1629 24.9495 11.6167 21.2123 11.6167Z"
                  fill="black"
                  fill-opacity="0.3"
                />
              </svg>
              <input required type="text" placeholder="Имя и Фамилия" />
            </div>
            <div class="form_control">
              <svg
                width="29"
                height="32"
                viewBox="0 0 29 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 16.6469L2.41666 9.96533V25.3C2.41666 26.1561 3.06626 26.85 3.86666 26.85H25.1333C25.9337 26.85 26.5833 26.1561 26.5833 25.3V9.96533L14.5 16.6469Z"
                  fill="black"
                  fill-opacity="0.3"
                />
                <path
                  d="M14.5 14.3199L26.5833 7.63887V7.21675C26.5833 6.36063 25.9337 5.66675 25.1333 5.66675H3.86666C3.06626 5.66675 2.41666 6.36063 2.41666 7.21675V7.63887L14.5 14.3199Z"
                  fill="black"
                  fill-opacity="0.3"
                />
              </svg>
              <input required type="email" placeholder="Email" />
            </div>
            <div class="form_control">
              <svg
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 15C0 23.0081 6.49187 29.5 14.5 29.5C22.5081 29.5 29 23.0081 29 15C29 6.99187 22.5081 0.5 14.5 0.5C6.49187 0.5 0 6.99187 0 15ZM11.8417 21.6458L12.0884 17.9497L12.0882 17.9495L18.8119 11.8819C19.107 11.62 18.7474 11.4923 18.3557 11.7298L10.0577 16.9649L6.47345 15.8462C5.69941 15.6092 5.69385 15.0773 6.64724 14.6949L20.6144 9.30927C21.2523 9.01966 21.868 9.46249 21.6245 10.4388L19.2458 21.6477C19.0798 22.4442 18.5985 22.6347 17.9317 22.2668L14.3083 19.5898L12.5667 21.2833C12.5612 21.2887 12.5557 21.294 12.5503 21.2993C12.3555 21.4889 12.1943 21.6458 11.8417 21.6458Z"
                  fill="black"
                  fill-opacity="0.3"
                />
              </svg>
              <input required type="text" placeholder="Telegram" />
            </div>
            <div class="form_control">
              <svg
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5667 21.2833C12.5667 18.7941 13.6779 16.5684 15.4261 15.0618C14.3831 14.7133 13.2603 14.5166 12.0834 14.5166C6.74445 14.5166 2.41669 18.361 2.41669 23.6999V26.5999H14.5247C13.3057 25.1664 12.5667 23.3123 12.5667 21.2833Z"
                  fill="black"
                  fill-opacity="0.3"
                />
                <path
                  d="M12.0833 13.0667C15.0196 13.0667 17.4 10.6863 17.4 7.75002C17.4 4.8137 15.0196 2.43335 12.0833 2.43335C9.14702 2.43335 6.76666 4.8137 6.76666 7.75002C6.76666 10.6863 9.14702 13.0667 12.0833 13.0667Z"
                  fill="black"
                  fill-opacity="0.3"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.4261 21C14.4261 24.3137 17.1124 27 20.4261 27C23.7398 27 26.4261 24.3137 26.4261 21C26.4261 17.6863 23.7398 15 20.4261 15C17.1124 15 14.4261 17.6863 14.4261 21ZM19.3261 23.75L19.4282 22.2206L19.4281 22.2205L22.2103 19.7098C22.3324 19.6014 22.1837 19.5485 22.0216 19.6468L18.5879 21.8131L17.1048 21.3502C16.7845 21.2521 16.7822 21.032 17.1767 20.8738L22.9562 18.6452C23.2201 18.5254 23.4749 18.7086 23.3741 19.1126L22.3899 23.7508C22.3212 24.0804 22.122 24.1592 21.8461 24.007L20.3468 22.8992L19.6261 23.6C19.6238 23.6022 19.6216 23.6044 19.6193 23.6066C19.5387 23.6851 19.472 23.75 19.3261 23.75Z"
                  fill="black"
                  fill-opacity="0.3"
                />
              </svg>
              <input required type="tel" placeholder="Ник телеграм" />
            </div>
          </div>
          <div
            class="checkboxs_container d-flex align-items-center justify-content-between"
          >
            <div class="checked_form_control d-flex align-items-center">
              <input required type="checkbox" id="consent" />
              <label for="consent">Я согласен с правилами сервиса</label>
            </div>
            <div class="checked_form_control d-flex align-items-center">
              <input required type="checkbox" id="aml" />
              <label for="aml">Я согласен с политикой AML</label>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button class="send">Отправить заявку</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { vMaska } from "maska";
export default {
  directives: { maska: vMaska },
  data() {
    return {
      curreny: false,
      curreny2: false,
    };
  },

  methods: {
    curreny_val(val) {
      this.curreny = false;
      const curreny_val = document.querySelector(".currency_btnone span");
      curreny_val.innerHTML = val;
    },
    curreny_val2(val) {
      this.curreny2 = false;
      const curreny_val = document.querySelector(".currency_btntwo span");
      curreny_val.innerHTML = val;
    },
  },
};
</script>
