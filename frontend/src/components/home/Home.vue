<template>
  <div>
    <PageTitle icon="fa fa-home" main="Dashboard" sub="Base de Conhecimento" />
    <div class="stats">
      <Stat
        title="Categorias"
        :value="stat.categories"
        icon="fa fa-folder"
        color="red"
      />
      <Stat
        title="Artigos"
        :value="stat.articles"
        icon="fa fa-file"
        color="green"
      />
      <Stat
        title="Usuarios"
        :value="stat.users"
        icon="fa fa-user"
        color="blue"
      />
    </div>
  </div>
</template>
<script>
import PageTitle from "../template/PageTitle";
import Stat from "./Stat";
import axios from "axios";
import { baseApiUrl } from "@/global";
export default {
  name: "Home",
  components: { PageTitle, Stat },
  data: function () {
    return {
      stat: {},
    };
  },
  methods: {
    getStats() {
      axios.get(`${baseApiUrl}/stats`).then((res) => (this.stat = res.data));
    },
  },
  mounted() {
    this.getStats();
  },
};
</script>
<style>
</style>