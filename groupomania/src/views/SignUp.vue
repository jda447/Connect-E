<template>
  <div id="app">
    <router-link to="/" class="btn shadow-none m-3"><font-awesome-icon :icon="['fas', 'arrow-left']" class="arrow" />
    </router-link>
      <form id="comment-form" class="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto">
        <h1 class="text-center mt-4 mb-3">Sign-up</h1>
        <div class="form-wrap container">
          <div v-if="!submitted">
            <div class="form-group">
              <label for="email" class="mb-1">Email address</label>
              <input placeholder="Please enter your email address"
                v-model="email" 
                v-bind:class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlurred}"
                v-on:blur="emailBlurred = true">
              <div class="invalid-feedback">A valid email address is required (eg. valid@email.com)</div>
            </div>
            <div class="form-group mt-3">
              <label for="password" class="mb-1">Password</label>
              <input placeholder="Please choose a valid password"
                v-model="password" 
                v-bind:class="{'form-control':true, 'is-invalid' : !validPassword(password) && passwordBlurred}"
                v-on:blur="passwordBlurred = true">
                <h6>Must contain 6-20 characters with at least one number, one uppercase & one lowercase letter</h6>
              <div class="invalid-feedback">A valid password is required</div>
            </div>           
            <div class="form-group text-center m-4">
              <a type="submit" href="#" v-on:click.stop.prevent="submit" class="btn btn-lg btnSignInSubmit shadow-none">Submit</a>
            </div>    
          </div>
          <div v-else class="alert alert-success mt-5" role="alert">
            <div class="text-center">
              <h5>Thank you</h5>
              <p>Sign-up successful!</p>
              <router-link to="/edit-profile" class="btn btn-success my-2">Enter</router-link>
            </div>
          </div>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      email : "", 
      emailBlurred : false,
      password : "", 
      passwordBlurred : false,
      emailValid : false,
      passwordValid : false,
      submitted : false
    }
  },
  methods : {
    validate : function(){
      this.emailBlurred = true;
      if( this.validEmail(this.email)){
          this.emailValid = true;
      }
      this.passwordBlurred = true;
      if( this.validPassword(this.password)){
        this.passwordValid = true;
      }
    },
    validEmail : function(email) {
      let re = /(.+)@(.+){2,}\.(.+){2,}/;
      return re.test(email);
    },
    validPassword : function(password) {
      let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      return re.test(password);
    },
    submit : function(){                   
      this.validate();     
      if(this.emailValid && this.passwordValid){
        //submit data to server here
        this.submitted = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #0d3b66;
  border: solid 10px white;
  min-height: 100vh;
}

.btnSignInSubmit {
  font-family: Ubuntu, sans-serif;
  background-color: #0d3b66;
  color: white;
  text-decoration: none;
  font-weight: bold;
    &:hover {
    background-color: white;
    color: #f9564f;
    transform: scale(1.6);
    transition: transform 250ms;
    font-family: Pacifico;
  }
}

hr {
  color: #f9564f;
}

h1 {
  font-family: Pacifico;
}

.arrow {
  &:hover {
    background-color: white;
    color: #f9564f;
    transform: scale(1.8);
    transition: transform 250ms;
  }
}
</style>