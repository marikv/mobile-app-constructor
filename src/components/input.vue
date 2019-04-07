<template>
    <q-input :rounded="getRounded"
             :outlined="getOutlined"
             @input="onInput"
             v-model="model"
             :label="getLabel"
             :class="getClassName"
             :type="getType">

      <template v-slot:prepend>
        <q-icon :name="getPrependIcon" />
      </template>

      <template v-slot:append>
        <q-icon name="close" @click="model = ''"
                v-show="model.length > 0" class="cursor-pointer" />
      </template>

    </q-input>
</template>


<script>
export default {
  name: 'componentInput',
  props: {
    className: String,
    type: String,
    label: String,
    outlined: Boolean,
    rounded: Boolean,
    prependIcon: String,
  },
  data() {
    return {
      model: '',
    };
  },
  computed: {
    getClassName() {
      return this.className;
    },
    getType() {
      return this.type ? this.type : 'text';
    },
    getLabel() {
      return this.label ? this.label : '';
    },
    getOutlined() {
      return this.outlined ? this.outlined : true;
    },
    getRounded() {
      return this.rounded ? this.rounded : true;
    },
    getPrependIcon() {
      return this.prependIcon ? this.prependIcon : '';
    },
  },
  methods: {
    onInput() {
      this.$emit('input', this.model);
    },
  },
};
</script>

<style scoped>

</style>
