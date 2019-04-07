<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated  class="bg-pink">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Arina-flowers
        </q-toolbar-title>

        <div>+7 (967) 240-14-52</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header @click="leftDrawerOpen = !leftDrawerOpen">
          <q-icon name="arrow_back" />
          Меню
        </q-item-label>
        <q-item clickable tag="a"  to="/shop" exact>
          <q-item-section avatar>
            <q-icon name="shopping_cart" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Заказ букетов/цветов</q-item-label>
            <q-item-label caption> </q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/orders">
          <q-item-section avatar>
            <q-icon name="receipt" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Мои заказы</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="images">
          <q-item-section avatar>
            <q-icon name="local_florist" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Наши работы</q-item-label>
            <q-item-label caption>Фото</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/chat">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Чат с продавцом</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/forum">
          <q-item-section avatar>
            <q-icon name="forum" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Форум</q-item-label>
            <q-item-label caption>где встречаются все покупатели</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/contacts">
          <q-item-section avatar>
            <q-icon name="contact_support" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Контакты</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" to="/auth/login">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Вход/Регистрация</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" to="/logout">
          <q-item-section avatar>
            <q-icon name="power_settings_new" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Выход</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container :style="pageContainerStyle" >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'MyLayout',
  data() {
    return {
      pageContainerStyle: 'background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);',
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  methods: {
    openURL,
  },
};
</script>

<style>
</style>
