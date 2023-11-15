<template>
  <main class="app">
    <form id="login-form" class="col-10 col-sm-6 col-md-5 col-lg-5 mx-auto">
      <h1 class="text-center mt-4 mb-4">Log in</h1>
        <div class="form-wrap container">
          <div v-if="!submitted">
            <div class="form-group mb-3">
              <label for="email" class="mb-1 ms-2 fw-bold">
                Email
              </label>
              <input placeholder="Please enter your email address"
                v-model="email" 
                v-bind:class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlurred}"
                @blur="emailBlurred = true"
                name="emailInput"
                id="email">
                <div class="invalid-feedback">
                  A valid email address is required (eg. valid@email.com)
                </div>
              <div id="err" class="mt-1"></div>
            </div>
            <label for="password" class="mb-1 mt-2 ms-2 fw-bold">
              Password
            </label>
            <div class="input-group mb-3">
              <input v-if="showPassword" type="text" class="input"
                v-model="password" 
                v-bind:class="{'form-control':true, 'is-invalid' : !validPassword(password) && passwordBlurred}"
                @blur="passwordBlurred = true"
                placeholder="Please enter your password"
                name="passwordInput"
                id="password" />
              <input v-else type="password" class="input"
                v-model="password" 
                v-bind:class="{'form-control':true, 'is-invalid' : !validPassword(password) && passwordBlurred}"
                @blur="passwordBlurred = true"
                placeholder="Please enter your password"
                name="passwordInput"
                id="password" /> 
              <span class="input-group-text eyeIcon p-0">
                <button @click.prevent="toggleShow"
                  class="btn eyeButton"
                  title="View password">
                  <font-awesome-icon :icon="['falight', 'fa-eye']" />
                </button>
              </span>
            </div>
          <span>Must contain 6-20 characters with at least one number, one uppercase & one lowercase letter</span>
          <div class="invalid-feedback">A valid password is required</div>
          <div class="form-group text-center m-4">
            <button @click.prevent="submit"
              class="btn btn-lg btnLogInSubmit shadow-none"
              type="submit"
              title="Submit"
              tabIndex="0">
              Submit
          </button>
          </div>    
        </div>
      </div>
    </form>
  </main>
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
      submitted : false,
      showPassword: false
    }
  },
  mounted: function() {
    this.clearStorage()
  },
  computed: {
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    }
  },
  methods : {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },

    clearStorage: function() {
    sessionStorage.clear()
    },

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
        fetch('http://localhost:3000/api/user/login', {
          method: 'POST',
          body: new FormData() && JSON.stringify({
            email: this.email,
            password: this.password
          }),
          headers: {
            'Content-type': 'application/json',
          }
        }).then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw Error(response)
          }
        }).then((json) => {
          if(this.emailValid && this.passwordValid){
            sessionStorage.setItem('user', JSON.stringify(json.userId))
            sessionStorage.setItem('token', JSON.stringify(json.token))
            this.$router.push("/messages")
            this.submitted = true;
          }
        }).catch((err) => {
          console.error(err)
          document.getElementById("err").innerHTML = 'Email and/or password is incorrect';
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
.app {
	color: #0d3b66;
	border: solid 10px white;
	min-height: 100vh;
}
.btnLogInSubmit {
  font-family: Ubuntu, sans-serif;
  color: white;
  background-color: #0d3b66;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid #0d3b66;
    &:hover {
    color: #0d3b66;
    background-color: white;
    border: 2px solid #0d3b66;
  }
}
.btnLogInSubmit:focus {
  background-color: #fafafa;
  color: #0d3b66;
  border: 2px solid #0d3b66;
}

h1 {
  font-family: Pacifico;
  font-weight: bold;
}
.eyeButton {
  color: #0d3b66;
  &:hover {
    color: green;
  }
}
.eyeIcon {
  background-color: #f5f5f5
}

#err {
  color: #DC3545;
  font-size: 88%;
}
</style>