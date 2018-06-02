<template>
  <div id="main">
    <div class="main--item">
		<h2 class="title">
			Search for a Github user:
		</h2>
    </div>
	<div class="main--item">
		<form v-on:submit.prevent="onSubmit" class="flex-form">
			<input v-model="user" class="flex-form--item" name="user_name"/>
			<button class="flex-form--item" type="submit">Search</button>
			<div class="flex-form--item error-container">
				<span v-if="hasError" class="error-message">No user matched your search.</span>
			</div>
		</form>
	</div>
 </div>
</template>

<script>
import axios from "axios";
const api = "https://api.github.com";
export default {
  name: "app",
  data() {
    return {
      user: "",
      hasError: false
    };
  },
  methods: {
    onSubmit: function() {
      let { user } = this;
      axios
        .get(`${api}/users/${user}`)
        .then(response => {
          console.log(response.data);
          this.hasError = false;
        })
        .catch(error => {
          this.hasError = true;
          this.user = "";
        });
    }
  }
};
</script>

<style lang="scss">
#main {
  width: 35%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  .main--item {
    flex: 1 0 100%;
    width: 100%;
  }
}

.flex-form {
  display: flex;
  direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: space-between;
  .flex-form--item {
    margin: 0 5px;
  }
  .error-container {
    align-self: flex-start;
    flex-basis: 100%;
    margin-top: 5px;
    .error-message {
      color: #ff0033;
    }
  }
  input {
    flex: 1 0 auto;
  }
}
</style> 