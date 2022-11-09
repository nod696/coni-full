<template>
  <div class="samples__wrapper">
    <h2 class="samples__title">Образцы процессуальных документов</h2>
    <ul class="samples__list">
      <li class="samples__item" v-for="sample in samples" :key="sample">
          <router-link class="samples__link" :to="{name: 'Sample', params: {routing: `${sample.routing}`, name: `${sample.name}`}}">
            <img :src="`${sample.img}`" alt="" class="samples__icon">
            <h3 class="sample__name">{{sample.name}}</h3>
          </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { samples } from "./samples";
export default {
  name: "SampleCompo",
  setup() {
    return {
      samples,
    };
  },
};
</script>

<style scoped>


@font-face {
  font-family: "Arina";
  src: url("../../assets/fonts/Arina.ttf") format("truetype");
}
@font-face {
  font-family: "Zametka";
  src: url("../../assets/fonts/Zametka.otf") format("opentype");
}
.samples__title {
  font-family: "Zametka";
  font-size: 24px;
}
.samples__list {
  font-family: "Zametka";
  font-weight: 300;
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr;
  place-items: center;
}
.samples__item{
  width: 100px;
}
.samples__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  color: #6e0eeb;
}
.samples__icon{
  width: 100px;
  height: 100px;
}

@media(max-width: 600px){
  .samples__icon{
  width: 50px;
  height: 50px;
}
.samples__item{
  width: 60px;
}
.samples__title {
  font-size: 14px;
}
.sample__name{
  font-size: 14px;
}
}
</style>
