<template>
  <div id="app">
    <router-link to="/" class="btn btn-secondary btn-outline-light btn-floating m-3"><font-awesome-icon :icon="['fas', 'circle-arrow-left']" />
    </router-link>
    <form class="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto">
      <h1 class="text-center m-5">Sign-in</h1>
      <div>
        <label for="validationServerUsername" class="form-label">Email address</label>
        <div class="input-group has-validation">
          <span class="input-group-text" id="inputGroupPrepend3">@</span>
          <input type="email" class="form-control is-invalid" id="email" placeholder="Enter your e-mail Address" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
          <div class="valid-feedback">
            Looks good!
          </div>
          <div class="invalid-feedback">
            Please enter your email address
          </div>
        </div>
      </div>
      <div>
        <label for="validationServer02" class="form-label">Password</label>
        <input type="password" class="form-control is-invalid" id="password" placeholder="Choose a Password" required>
          <div class="valid-feedback">
            Looks good!
          </div>
          <div class="invalid-feedback">
            Please choose a password
          </div>
        </div>
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>
          <label class="form-check-label" for="invalidCheck3">
            Agree to terms and conditions
          </label>
          <div id="invalidCheck3Feedback" class="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-info m-3" type="submit">Submit</button>
      </div>
    </form>
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