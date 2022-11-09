<template>
  <div class="sample__wrapper">
    <h3 class="sample__title"></h3>

    <ul class="samples__list">
      <li class="samples__item" v-for="sample in data" :key="sample">
        <a :href="`${sample.ref}`" class="samples__link">{{ sample.name }}</a>
      </li>
    </ul>
    <router-link to="/samples" class="back">Назад</router-link>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import samplesData from "./samples-data/samplesData";
import { useRoute } from "vue-router";
export default {
  name: "Sample",
  setup() {
    const route = useRoute();
    let data = ref([]);
    function div() {
      data.value = samplesData[route.params.routing];
    }
    onMounted(div);
    return {
      samplesData,
      data,
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Zametka";
  src: url("../../assets/fonts/Zametka.otf") format("opentype");
}
.sample__wrapper {
  margin: 0 auto;
  max-width: 500px;
}
.samples__list {
  font-family: "Zametka";
  list-style: none;
  padding: 0;
  margin-bottom: 50px;
}
.samples__item {

}
.samples__item:hover{

}
.samples__item:not(:last-child) {
  margin-bottom: 20px;
}
.samples__link {
    background-color: blueviolet;
    color: #42b983;
  display: block;
  padding: 10px;
  text-decoration: none;

}
.samples__link:hover{
    background-color: #42b983;
    color: blueviolet;
}
.back{

  background-color: blueviolet;
  color: #42b983;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 10px;
}
.back:hover{
  background-color: #42b983;
  color: blueviolet;
}


</style>
