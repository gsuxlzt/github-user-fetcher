<template>
    <div>
        <div>
            {{$route.params.repo}}
        </div>
        <hr/>
        <div v-for="content in contents" v-bind:key="content">
            <vue-markdown>{{content}}</vue-markdown>
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