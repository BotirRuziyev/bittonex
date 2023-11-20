<template>
  <div id="support">
    <div class="support_home">
      <div class="support_home_container">
        <div class="home_text">
          <h3>FAQ</h3>
          <h1>Как мы можем вам помочь?</h1>
        </div>
        <div class="home_img">
          <img class="img_d" src="@/assets/images/support/phone.png" alt="" />
          <img
            class="img_m"
            src="@/assets/images/support/phone_mobile.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <Contact />
    <div class="suppert_container">
      <div class="categorie">
        <div class="categorie_left">
          <h5 class="title">Категории</h5>
          <div class="categoryLink">
            <a class="idLink" href="#exchanges">Обмены</a>
            <a class="idLink" href="#bank_cards">Банковские карты</a>
            <a class="idLink" href="#other">Другое</a>
          </div>
        </div>
        <div class="categorie_right">
          <div
            class="accordion accordion_wr accordion-flush"
            id="accordionFlushExample"
          >
            <h2 class="right_title" id="exchanges">
              <img src="@/assets/images/categorie/card_img.svg" alt="betonix" />
              Обмены
            </h2>
            <div class="accordion-item question_wrapper">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed question_botton"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Как произвести обмен?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Для создания заявки перейдите в раздел “Обмен” в меню сайта и
                  заполните форму. Заявка автоматически отправится нашему
                  менеджеру, который свяжется с вами для уточнения деталей и
                  проведения самой операции. Внимание! Менеджер всегда начинает
                  переписку с вами с дублирования вашей заявки!
                </div>
              </div>
            </div>
            <div class="accordion-item question_wrapper">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed question_botton"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Как я получу свои деньги?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Все представленные валюты можно получить в наличном и
                  безналичном виде. В случае с индонезийскими рупиями доступны
                  безналичные переводы на карты индонезийских банков, выдача
                  через QR-коды в банкоматах и доставка наличных курьером.
                </div>
              </div>
            </div>
            <div class="accordion-item question_wrapper">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed question_botton"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Безопасно ли у вас производить обмен?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Да! Мы работаем легально, наша компания официально
                  зарегистрирована на территории Индонезии и имеет юридический
                  адрес.
                </div>
              </div>
            </div>
            <div class="accordion-item question_wrapper">
              <h2 class="accordion-header" id="flush-heading4">
                <button
                  class="accordion-button collapsed question_botton"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse4"
                  aria-expanded="false"
                  aria-controls="flush-collapse4"
                >
                  Есть ли ограничения по сумме обмена?
                </button>
              </h2>
              <div
                id="flush-collapse4"
                class="accordion-collapse collapse"
                aria-labelledby="flush-heading4"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Как таковых ограничений нет, но обмены на суммы свыше $50 000
                  лучше согласовывать заранее, чтобы мы все подготовили.
                </div>
              </div>
            </div>
            <div class="accordion-item question_wrapper">
              <h2 class="accordion-header" id="flush-heading5">
                <button
                  class="accordion-button collapsed question_botton"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse5"
                  aria-expanded="false"
                  aria-controls="flush-collapse5"
                >
                  Законны ли такие операции?
                </button>
              </h2>
              <div
                id="flush-collapse5"
                class="accordion-collapse collapse"
                aria-labelledby="flush-heading5"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Да, такие операции абсолютно законны и прозрачны.
                </div>
              </div>
            </div>
            <h2 class="right_title" id="bank_cards">
              <img src="@/assets/images/categorie/card_img.svg" alt="betonix" />
              Банковские карты
            </h2>
            <div class="accordion-item question_wrapper">
              <h2 class="accordion-header" id="flush-heading6">
                <button
                  class="accordion-button collapsed question_botton"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse6"
                  aria-expanded="false"
                  aria-controls="flush-collapse6"
                >
                  Как получить банковскую карту?
                </button>
              </h2>
              <div
                id="flush-collapse6"
                class="accordion-collapse collapse"
                aria-labelledby="flush-heading6"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Для получения банковской карты оставьте заявку в разделе
                  “банковские карты” или свяжитесь с нами через контакты,
                  указанные на сайте.
                </div>
              </div>
            </div>
            <div class="accordion-item question_wrapper">
              <h2 class="accordion-header" id="flush-heading7">
                <button
                  class="accordion-button collapsed question_botton"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse7"
                  aria-expanded="true"
                  aria-controls="flush-collapse7"
                >
                  Безопасно ли это?
                </button>
              </h2>
              <div
                id="flush-collapse7"
                class="accordion-collapse collapse"
                aria-labelledby="flush-heading7"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Мы не участвуем в процессе открытия счетов, этим занимается
                  банк. Наша компания оказывает консультационные услуги, а также
                  предоставляет поручителей, без которых не получится открыть
                  банковский счёт иностранцу. Мы сопровождаем вас, чтобы весь
                  процесс был быстрым и простым.
                </div>
              </div>
            </div>
            <div class="accordion-item question_wrapper">
              <h2 class="accordion-header" id="flush-heading8">
                <button
                  class="accordion-button collapsed question_botton"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse8"
                  aria-expanded="true"
                  aria-controls="flush-collapse8"
                >
                  Карты каких банков можно получить?
                </button>
              </h2>
              <div
                id="flush-collapse8"
                class="accordion-collapse collapse"
                aria-labelledby="flush-heading8"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Список карт и банков, в которых их можно получить периодически
                  обновляется. С актуальным перечнем можно ознакомиться в
                  разделе “банковские карты”, либо связавшись с нашим
                  менеджером.
                </div>
              </div>
            </div>
            <div class="accordion-item question_wrapper">
              <h2 class="accordion-header" id="flush-heading9">
                <button
                  class="accordion-button collapsed question_botton"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse9"
                  aria-expanded="true"
                  aria-controls="flush-collapse9"
                >
                  Зачем нужна карта, если есть ваш обменник?
                </button>
              </h2>
              <div
                id="flush-collapse9"
                class="accordion-collapse collapse"
                aria-labelledby="flush-heading9"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Обменник нужен, чтобы получить местную валюту, а карта, чтобы
                  эту валюту было удобно использовать. Плюс, мы предлагаем
                  сниженную ставку на обмены с получением средств на банковские
                  карты, выпущенные через наш сервис.
                </div>
              </div>
            </div>
            <h2 class="right_title" id="other">
              <img src="@/assets/images/categorie/card_img.svg" alt="betonix" />
              Другое
            </h2>
            <div class="accordion-item question_wrapper">
              <h2 class="accordion-header" id="flush-heading10">
                <button
                  class="accordion-button collapsed question_botton"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse10"
                  aria-expanded="true"
                  aria-controls="flush-collapse10"
                >
                  Чем вы отличаетесь от других обменников?
                </button>
              </h2>
              <div
                id="flush-collapse10"
                class="accordion-collapse collapse"
                aria-labelledby="flush-heading10"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  В первую очередь тем, что мы не считаем себя обменником.
                  Bitonex - это целый спектр финансовых услуг. Мы не только
                  производим обмены, но также помогаем открыть банковские счета,
                  оплатить бронирования и местные услуги, консультируем в
                  области релокации капитала и многое другое.
                </div>
              </div>
            </div>
            <div class="accordion-item question_wrapper">
              <h2 class="accordion-header" id="flush-heading11">
                <button
                  class="accordion-button collapsed question_botton"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse11"
                  aria-expanded="true"
                  aria-controls="flush-collapse11"
                >
                  Какие услуги вы ещё предоставляете?
                </button>
              </h2>
              <div
                id="flush-collapse11"
                class="accordion-collapse collapse"
                aria-labelledby="flush-heading11"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Мы работаем не только с теми услугами, что представлены на
                  сайте. Вы можете обратиться к нам с индивидуальным запросом в
                  сфере международных финансов.
                </div>
              </div>
            </div>
            <div class="accordion-item question_wrapper">
              <h2 class="accordion-header" id="flush-heading12">
                <button
                  class="accordion-button collapsed question_botton"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse12"
                  aria-expanded="true"
                  aria-controls="flush-collapse12"
                >
                  В каких странах вы работаете?
                </button>
              </h2>
              <div
                id="flush-collapse12"
                class="accordion-collapse collapse"
                aria-labelledby="flush-heading12"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Bitonex представлен в Индонезии и в РФ, в ближайшее время
                  география будет расширяться. Однако, часть услуг по
                  индивидуальному запросу может быть оказана в большинстве стран
                  Европы, в ОАЭ, Таиланде, Турции и в США.
                </div>
              </div>
            </div>
            <div class="accordion-item question_wrapper">
              <h2 class="accordion-header" id="flush-heading13">
                <button
                  class="accordion-button collapsed question_botton"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse13"
                  aria-expanded="true"
                  aria-controls="flush-collapse13"
                >
                  Вы рассматриваете сотрудничество?
                </button>
              </h2>
              <div
                id="flush-collapse13"
                class="accordion-collapse collapse"
                aria-labelledby="flush-heading13"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Сложно ответить без конкретики, но с коммерческими запросами и
                  предложениями можно обратиться сюда: info@biton.exchange
                </div>
              </div>
            </div>
          </div>
          <div
            class="accordion accordion_wr accordion-flush"
            id="accordionFlushExample"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from "@/components/compare/Contact";
export default {
  components: {
    Contact,
  },
};
</script>

<style lang="scss" scoped>
#support {
  .support_home {
    width: 100%;
    background: #e8f2ee;
    .support_home_container {
      max-width: 1400px;
      padding-top: 70px;
      margin: 0 auto;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding-right: 150px;
      .home_text {
        h3 {
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 120%;
          letter-spacing: -0.03em;
          color: #1a191e;
        }
        h1 {
          font-style: normal;
          font-weight: 500;
          font-size: 74px;
          line-height: 110%;
          letter-spacing: -0.05em;
          color: #1a191e;
          margin-top: 16px;
        }
      }
      .home_img {
        max-width: 300px;
        .img_d {
          width: 100%;
        }
        .img_m {
          display: none;
        }
      }
    }
  }
  .suppert_container {
    margin: 0 auto;
    max-width: 1200px;
    margin-top: 70px;
    .categorie {
      display: flex;
      justify-content: space-between;
      .categorie_right {
        max-width: 792px;
        width: 100%;
        .accordion_wr {
          .question_wrapper {
            .accordion-header {
              .question_botton {
                padding: 24px 0;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 120%;
                letter-spacing: -0.03em;
                color: #1a191e;
                width: 100%;
                background: transparent;
                box-shadow: none;
                &::after {
                  background-image: url("@/assets/images/categorie/plus_in.svg");
                }
                &:not(.collapsed)::after {
                  transform: rotate(45deg) !important;
                }
              }
            }
            .accordion-body {
              font-style: normal;
              font-weight: 500;
              font-size: 16px;
              line-height: 160%;
              color: rgba(26, 25, 30, 0.5);
              padding: 0;
              padding-bottom: 24px;
              padding-right: 8px;
            }
          }
          .right_title {
            font-style: normal;
            font-weight: 600;
            font-size: 28px;
            line-height: 120%;
            letter-spacing: -0.03em;
            color: #1a191e;
            display: flex;
            gap: 16px;
            align-items: center;
            margin-bottom: 64px;
          }
        }
      }
      .categorie_left {
        max-width: 280px;
        background: #f8f8f8;
        border-radius: 10px;
        max-height: 230px;
        padding: 32px;
        .title {
          margin-bottom: 32px;
        }
        .categoryLink {
          display: flex;
          flex-direction: column;
          gap: 16px;
          .idLink {
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 160%;
            color: rgba(26, 25, 30, 0.5);
            text-decoration: none;
          }
        }
      }
    }
  }
  #bank_cards {
    margin-top: 124px;
  }
  #other {
    margin-top: 124px;
  }
}

@media (max-width: 1440px) {
  #support {
    .support_home {
      .support_home_container {
        padding: 0 20px;
        padding-top: 70px;
        padding-right: 100px;
        gap: 20px;
      }
    }
    .suppert_container {
      padding: 0 20px;
      .categorie {
        gap: 20px;
      }
    }
  }
}
@media (max-width: 992px) {
  #support {
    .support_home {
      .support_home_container {
        padding-right: 50px;
      }
    }
  }
}
@media (max-width: 900px) {
  #support {
    .support_home {
      .support_home_container {
        flex-direction: column;
        align-items: center;
        width: 100%;
        .home_img {
          float: right;
          max-width: 100%;
          width: 100%;
          .img_d {
            max-width: 300px;
            width: 100%;
            float: right;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  #support {
    .support_home {
      .support_home_container {
        padding-right: 20px;
        gap: 30px;
        .home_img {
          max-width: 300px;

          .img_d {
            width: 100%;
          }
        }
        .home_text {
          h1 {
            font-size: 32px;
            line-height: 35px;
          }
          h3 {
            font-size: 24px;
            line-height: 28px;
          }
        }
      }
    }
    .suppert_container {
      .categorie {
        .categorie_right {
          .right_title {
            font-size: 22px !important;
            margin-bottom: 20px !important;
          }
          .accordion_wr {
            .question_wrapper {
              .accordion-header {
                .question_botton {
                  font-size: 16px;
                  padding: 18px 0;
                }
              }
            }
          }
        }
      }
    }
    #other {
      margin-top: 45px;
    }
    #bank_cards {
      margin-top: 45px;
    }
  }
}
@media (max-width: 576px) {
  #support {
    .suppert_container {
      margin-top: 40px;
      .categorie {
        .categorie_right {
          .right_title {
            font-size: 24px;
          }
          .accordion_wr {
            .question_wrapper {
              .accordion-header {
                .question_botton {
                  font-size: 16px;
                  padding: 18px 0;
                }
              }
            }
          }
        }
        .categorie_left {
          padding: 20px;
        }
      }
    }
    #other {
      margin-top: 35px;
    }
    #bank_cards {
      margin-top: 35px;
    }
  }
}
@media (max-width: 510px) {
  #support {
    .suppert_container {
      margin-top: 40px;
      .categorie {
        flex-direction: column;
        align-items: flex-start;
        .categorie_right {
          .right_title {
            font-size: 22px;
          }
          .accordion_wr {
            .question_wrapper {
              .accordion-header {
                .question_botton {
                  font-size: 14px;
                  padding: 18px 0;
                }
              }
              .accordion-body {
                font-size: 12px;
                line-height: 140%;
              }
            }
          }
        }
        .categorie_left {
          padding: 20px;
        }
      }
    }
  }
}
</style>
