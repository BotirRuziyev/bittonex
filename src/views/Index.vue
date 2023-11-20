<template>
  <div class="index">
    <Home />
    <Service />
    <Exchange />
    <Savings />
    <Traveling />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home";
import Service from "@/components/Service";
import Exchange from "@/components/Exchange";
import Savings from "@/components/Savings";
import Traveling from "@/components/Traveling";

export default {
  name: "Index",
  components: {
    Home,
    Service,
    Exchange,
    Savings,
    Traveling,
  },
};
</script>
