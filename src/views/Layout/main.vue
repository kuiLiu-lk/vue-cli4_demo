<template>
  <div>
    <Header />
    <Container />
    <Footer />
  </div>
</template>
<script>
import Container from "./container";
import Header from "./header";
import Footer from "./footer";
export default {
  components: {
    Container,
    Header,
    Footer
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang='scss' scoped></style>