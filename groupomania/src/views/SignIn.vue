<template>
  <div id="app">
    <router-link to="/" class="btn btn-secondary btn-outline-light btn-floating m-3"><font-awesome-icon :icon="['fas', 'circle-arrow-left']" />
    </router-link>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div  class="text-center">
            <h1>Sign-in</h1>
            <form>
            <div class="form-group col-8 col-lg-4 m-5 mx-auto">
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your e-mail Address" required>
            </div>
            <div class="form-group col-8 col-lg-4 m-5 mx-auto">
                <input type="password" class="form-control" id="password" placeholder="Choose a Password" required>
            </div>
            <button type="submit" class="submitSignIn btn btn-info">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
  background-image: linear-gradient(to bottom right, #5bc0de, white, white, white);
}

.submitSignIn {
  &:hover {
    transform: scale(1.2);
    transition: transform 500ms;
    border: solid 2px #CCC;
	}
}

.btn-secondary {
  border-radius: 50%;
  &:hover {
    transform: scale(1.2);
    transition: transform 500ms;
    border: solid 2px #CCC;
	}
}
</style>