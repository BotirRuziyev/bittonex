<template>
  <section class="savings">
    <div class="main_container">
      <div class="savings_top">
        <h1 class="title_big d-lg-none d-block">Сравнение сервисов</h1>
        <div
          class="scroll_buttons d-lg-none d-flex align-items-center justify-content-between"
        >
          <svg
            class="prev"
            width="73"
            height="16"
            viewBox="0 0 73 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.292892 7.29289C-0.0976334 7.68342 -0.0976334 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM73 7L1 7V9L73 9V7Z"
              fill="black"
            />
          </svg>

          Таблица подвижная
          <svg
            class="next"
            width="73"
            height="16"
            viewBox="0 0 73 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M72.7071 8.70711C73.0976 8.31658 73.0976 7.68342 72.7071 7.29289L66.3431 0.928932C65.9526 0.538408 65.3195 0.538408 64.9289 0.928932C64.5384 1.31946 64.5384 1.95262 64.9289 2.34315L70.5858 8L64.9289 13.6569C64.5384 14.0474 64.5384 14.6805 64.9289 15.0711C65.3195 15.4616 65.9526 15.4616 66.3431 15.0711L72.7071 8.70711ZM0 9H72V7H0V9Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div class="savings_in" id="slider">
        <div class="savings_in_container d-flex thumbnail">
          <div class="savings_in_left">
            <div class="card_img">
              <img src="@/assets/images/savings_card.png" alt="savings_card" />
            </div>
            <div class="savings_in_left_lists">
              <div class="item d-flex" v-for="item of lists" :key="item.id">
                <div class="icon">
                  <img :src="item.src" alt="1" />
                </div>
                <div class="item_body">
                  <h2 class="title">{{ item.title }}</h2>
                  <div class="description">{{ item.description }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="savings_in_right">
            <div class="savings_table d-flex">
              <div
                class="table_item"
                v-for="item of savingsList"
                :key="item.id"
              >
                <div class="table_head">{{ item.table_head }}</div>
                <div class="table_body" v-for="list of item.list" :key="list">
                  {{ list }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          id: 1,
          src: "/images/savings/1.svg",
          title: "Комиссия",
          description: "Потери при использовании сервиса",
        },
        {
          id: 2,
          src: "/images/savings/2.svg",
          title: "Скорость",
          description: "Время получения средств",
        },
        {
          id: 3,
          src: "/images/savings/3.svg",
          title: "Надёжность",
          description: "Безопасность использования сервиса/инструмента",
        },
        {
          id: 4,
          src: "/images/savings/4.svg",
          title: "Сложность",
          description: "Сложность проведения операции",
        },
        {
          id: 5,
          src: "/images/savings/5.svg",
          title: "Безналичные RUB",
          description: "Возможность отправить или получить безналичные рубли",
        },
        {
          id: 6,
          src: "/images/savings/6.svg",
          title: "Безналичные IDR",
          description: "Возможность отправить или получить безналичные рупии",
        },
      ],
      savingsList: [
        {
          id: 1,
          table_head: "bitonex",
          list: [
            "Рыночная",
            "От 10 минут",
            "Высокая",
            "Низкая",
            "Да/Да",
            "Да/Да",
          ],
        },
        {
          id: 2,
          table_head: "SWIFT",
          list: [
            "Очень высокая",
            "От 12 часов",
            "Высокая",
            "Высокая",
            "Да/Нет",
            "Нет/Нет",
          ],
        },
        {
          id: 3,
          table_head: "Местный обменник",
          list: [
            "Завышенная",
            "Необходим визит",
            "Низкая",
            "Средняя",
            "Нет/Нет",
            "He всегда",
          ],
        },
        {
          id: 4,
          table_head: "Другой обменный сервис",
          list: [
            "Рыночная",
            "От 1 часа",
            "50/50",
            "Средняя",
            "He всегда",
            "Нет/Нет",
          ],
        },
      ],
    };
  },

  mounted() {
    let thumbnail = document.getElementsByClassName("thumbnail");
    let slider = document.querySelector("#slider");
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");

    prev.addEventListener("click", () => {
      slider.scrollLeft -= 360;
      console.log(slider.scrollLeft);
    });

    next.addEventListener("click", () => {
      slider.scrollLeft += 360;
      console.log(slider.scrollLeft);
    });
  },
};
</script>
