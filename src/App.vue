<template>
  <div>
    <div class="simple-page">

      <Pair v-for="item in items" :itemname='item'></Pair>

    </div>
  </div>
</template>

<script>
import { getAllItems } from "./utils/helpers";
import Pair from "./Pair";
export default {
  name: "Game",
  components: { Pair },
  data() {
    return {
      items: getAllItems(5),
    };
  },
  methods: {
  }
};
</script>

<style>

</style>
