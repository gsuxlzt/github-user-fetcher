<template>
    <div>
        <h1>
            {{$route.params.repo}}
        </h1>
        <hr/>
        <div class="list" v-if="contents.length" v-for="content in contents" v-bind:key="content">
            <vue-markdown>{{content}}</vue-markdown>
        </div>
        <div class="list--no-readme" v-else>
            <h2>This repository doesn't have a README.</h2>
          </div>
    </div>

</template>

<script>
import axios from "axios";
import VueMarkdown from "vue-markdown";
export default {
  name: "Repo",
  data() {
    return {
      contents: []
    };
  },
  created() {
    const api = "https://api.github.com";

    axios
      .get(
        `${api}/repos/${this.$route.params.user}/${
          this.$route.params.repo
        }/readme`
      )
      .catch(error => {})
      .then(response => {
        this.contents = [
          ...[window.atob(response.data.content.replace("/\\n/g", ""))]
        ];
      });
  },
  components: {
    VueMarkdown
  }
};
</script>

<style lang="scss" scoped>
.list,
.list--no-readme {
  padding: 10px;
}
</style>
