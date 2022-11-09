<template>
  <nav class="navigation">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link to="/courts">Суды г.Екатеринбург</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/coni/">Главная</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/samples">Образцы документов</router-link>
      </li>
      <li class="nav__item">
        <router-link to="/loads">Нагрузка судов</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
@font-face {
  font-family: "Zametka";
  src: url("../../assets/fonts/Zametka.otf") format("opentype");
}
ul {
  font-family: "Zametka";
  font-weight: 700;
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.logo {
  width: 150px;
  height: 150px;
}
a {
  text-decoration: none;
  color: #6e0eeb;
}

@media(max-width: 600px){
  li{
    font-size: 10px;
  }
}
</style>
