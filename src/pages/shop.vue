<template>
  <div  class="q-pa-md row items-start q-gutter-md justify-center">

    <q-card class="my-card" v-for="item in items" v-bind:key="item.id">
      <q-img :src="item.img">
        <div class="absolute-bottom">
          <div>
            <div class="text-h6">{{item.title}}</div>
            <div class="text-subtitle2">{{item.description}}</div>
          </div>
          <div>
            <q-chip color="deep-orange" text-color="white" icon="local_offer">
              {{item.price}} руб.
            </q-chip>
          </div>
        </div>
      </q-img>

      <q-card-actions align="around">
        <q-btn flat>Подробнее...</q-btn>
        <q-btn flat>
          <q-icon name="shopping_cart" /> В корзину
        </q-btn>
      </q-card-actions>
    </q-card>

  </div>
</template>

<style lang="stylus" scoped>
  .my-card {
    width: 100%;
    max-width: 430px;
  }
</style>

<script>
export default {
  name: 'PageShop',
  data() {
    return {
      items: [
        {
          id: 1,
          img: 'http://arina-flowers.ru/wp-content/uploads/2018/02/3A5A63D4-BD00-40A6-9E2E-C1B2325A78DD-600x600-600x600.jpg',
          title: 'Белла',
          description: 'Даметр, см: 37\n'
          + 'Высота, см: 40',
          price: 5490,
        },
        {
          id: 2,
          img: 'http://arina-flowers.ru/wp-content/uploads/2018/02/FqDRCvWpsl8.jpg',
          title: 'Цветочная композиция',
          description: 'Цветочная композиция из хризонтем.',
          price: 2200,
        },
        {
          id: 3,
          img: 'http://arina-flowers.ru/wp-content/uploads/2018/11/IMG_20180304_190250_499-1.jpg',
          title: 'Очаровашка',
          description: '',
          price: 2200,
        },
        {
          id: 4,
          img: 'http://arina-flowers.ru/wp-content/uploads/2018/02/serdtse-iz-roz-v-korobke-400x400.jpg',
          title: 'Моя Любовь',
          description: 'Сердце из роз Моя Любовь в коробке',
          price: 5300,
        },
        {
          id: 5,
          img: 'http://arina-flowers.ru/wp-content/uploads/2018/03/IMG_20180305_114652_929-1.jpg',
          title: 'Коробочка Восторг',
          description: 'Орхидея,розы,мимоза,хризантема,лизиантус.',
          price: 3800,
        },
        {
          id: 6,
          img: 'http://arina-flowers.ru/wp-content/uploads/2018/02/36F372CB-756D-40BD-B1E5-7A2B6CDCE629-600x600.jpg',
          title: 'СОФИ',
          description: '',
          price: 5800,
        },
      ],
    };
  },
};
</script>
