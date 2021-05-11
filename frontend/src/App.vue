<template>
  <div id="app" :class="{'hide-menu': !isMenuVisible}">
    <Header title="Projeto final curso" :hideToggle="false"/>
    <Menu />
    <Content />
    <Footer />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Header from "@/components/template/Header";
import Menu from "@/components/template/Menu";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";
export default {
  name: "App",
  components: { Header, Menu, Content, Footer },
  computed: mapState(['isMenuVisible'])
};
</script>

<style>
* {
  font-family: Lato;
}
body {
  margin: 0px;
}
#app {
  -webkit-font-snoothing: antialiased;
  -moz-osx-font-snoothing: grayscale;

  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas: "header header" "menu content" "menu footer";
}

#app.hide-menu {
   grid-template-areas: "header header" "content content" "footer footer";
}
</style>