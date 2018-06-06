<template>
<h1>It seems like your search didn't give any meaningful results. Why don't you go back and <router-link class="link" :to="{path: '/'}">search</router-link> again?</h1>
</template>

<style lang="scss" scoped>
h1 {
  padding-top: 50px;
  margin: 0px auto;
  font-size: 36px;
  max-width: 55%;
  text-align: justify;
}
</style>
