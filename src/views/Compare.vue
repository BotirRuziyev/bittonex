<template>
  <div id="compare">
    <Home />
    <compare-cards />
    <List />
    <Contact />
  </div>
</template>

<script>
import Home from "@/components/compare/Home";
import CompareCards from "@/components/compare/CompareCards";
import List from "@/components/compare/List";
import Contact from "@/components/compare/Contact";
export default {
  name: "compare",
  components: {
    Home,
    CompareCards,
    List,
    Contact,
  },
};
</script>
