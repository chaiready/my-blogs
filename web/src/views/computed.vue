<template>
  <div>
    <input :type="type" :value="value" @input="onChange" />
    <span>{{valLen}}/{{maxLen}}</span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    }
  },
  data() {
    return {
      maxLen: 10,
      value: ""
    };
  },
  computed: {
    valLen() {
        console.log(this.value.length)
      return +this.value.length;
    }
  },

  methods: {
    onChange(e) {
      console.log(e.target.value.length, this.maxLen)
      if (e.target.value.length > this.maxLen) {
        e.target.value = this.value.substr(0, this.maxLen);
        console.log(this.value, e.target.value)
        this.value = e.target.value;
      } else {
        this.value = e.target.value;
      }

    }
  }
};
</script>

<style lang="scss" scoped>
</style>