<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
body {
  background-color: #eee;
  color: #24292f;
  font-family: sans-serif;
  padding: 5px 15px;
}
.link {
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  margin: 0 15px;
  color: #007bff;
  &:focus,
  &:active,
  &:hover {
    text-decoration: underline;
  }
}
</style>

