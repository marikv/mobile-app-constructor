<template>
  <q-page >
    <div  class="q-pa-md row items-start q-gutter-md
     text-center justify-center" style="margin-left: 0;">

      <div style="width: 100%;margin-left: -16px;margin-bottom: 10px;
      text-align: center;font-size: 20px;color: #626262;">Вход</div>

      <input-cmp v-model="email" label="Email" className="input"
                 type="email" prependIcon="email"/>

      <input-cmp v-model="password" label="Пароль" className="input"
                 type="password" prependIcon="vpn_key"/>

      <q-btn size="20px"
              class="input q-px-xl q-py-xs"
              style="background: #FF0080; color: white;"
              label="Вход"
              rounded
             @click="login()"
      />

      <q-item clickable tag="a" to="/auth/register" style="color: #a50053">
        <q-item-section>
          <q-item-label>Регистрация</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable tag="a" to="/auth/forgot" style="color: #a50053">
        <q-item-section>
          <q-item-label>Забыли пароль?</q-item-label>
        </q-item-section>
      </q-item>


    </div>
  </q-page>
</template>


<script>
import inputCmp from '../../components/input';

export default {
  name: 'PageAuthLogin',
  components: {
    inputCmp,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log(this.email);
      console.log(this.password);
      this.$q.loading.show({
        spinnerSize: 60,
        delay: 200, // ms
      });
      setTimeout(() => {
        this.$q.loading.hide();
      }, 4000);
    },
  },
};
</script>

<style scoped>
</style>
