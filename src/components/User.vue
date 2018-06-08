<template>
    <div v-if="!isLoading">
      <div class="user">
        <h1>{{$route.params.user}}'s Projects</h1>
        <hr/>
      </div>
      <div class="list--no-repo" v-if="!projects.length">
        <h2>This user has no repositories to be displayed.</h2>
      </div>
      <div class="list" v-else v-for="project in projects" v-bind:key="project.id">
        <router-link class="link" :to="{path: `/${$route.params.user}/${project.name}`}">{{project.name}}</router-link>
      </div>
    </div>
    <div v-else>
      Loading...
      </div>
</template>

<script>
import axios from "axios";

export default {
  name: "user",
  data() {
    return {
      user: this.$route.params.user,
      projects: [],
      isLoading: true
    };
  },
  created() {
    const api = "https://api.github.com";
    this.isLoading = true;
    axios
      .get(`${api}/users/${this.user}/repos`)
      .catch(error => {
        this.$router.push({ name: "error" });
      })
      .then(response => {
        this.projects = response.data.map(repo => ({
          id: repo.id,
          name: repo.name
        }));
        this.isLoading = false;
      });
  }
};
</script>

<style lang="scss">
.user {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #eee;
}
.list,
.list--no-repo {
  padding: 10px;
}
</style>
