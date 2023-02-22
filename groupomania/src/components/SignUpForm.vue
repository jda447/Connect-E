<template>
  <div id="app">
    <form id="login-form" class="col-10 col-sm-6 col-md-5 col-lg-5 mx-auto">
      <h1 class="text-center mt-4 mb-4">Sign-up</h1>
      <div class="form-wrap container">
        <div v-if="!submitted">
          <div class="form-group mb-3">
            <label for="email" class="mb-1 ms-2 fw-bold">Email address</label>
            <input placeholder="Please enter your email address"
              v-model="email" 
              v-bind:class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlurred}"
              v-on:blur="emailBlurred = true">
            <div class="invalid-feedback">A valid email address is required (eg. valid@email.com)</div>
            <div id="err" class="mt-1"></div>
          </div>

          <label for="password" class="mb-1 mt-2 ms-2 fw-bold">Password</label>
          <div class="input-group mb-3">
            <input v-if="showPassword" type="text" class="input"
              v-model="password" 
              v-bind:class="{'form-control':true, 'is-invalid' : !validPassword(password) && passwordBlurred}"
              v-on:blur="passwordBlurred = true"
              placeholder="Please enter your password" />
              
              <input v-else type="password" class="input"
              v-model="password" 
              v-bind:class="{'form-control':true, 'is-invalid' : !validPassword(password) && passwordBlurred}"
              v-on:blur="passwordBlurred = true"
              placeholder="Please enter your password" />
                  
            <span class="input-group-text eyeIcon">
              <btn class="eyeButton" @click.prevent="toggleShow">
                <font-awesome-icon :icon="['falight', 'fa-eye']" />
              </btn>
            </span>
          </div>
          <h6 class="mt-1 ms-2">Must contain 6-20 characters with at least one number, one uppercase & one lowercase letter</h6>
          <div class="invalid-feedback">A valid password is required</div>
          <div class="form-group text-center m-4">
            <a type="submit" v-on:click.prevent="submit" class="btn btn-lg btnSignInSubmit shadow-none">Submit</a>
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
        fetch('http://localhost:3000/api/user/signup', {
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
            throw Error('User email already exists')
          }
        }).then((json) => {
          if(this.emailValid && this.passwordValid){
            sessionStorage.setItem('user', JSON.stringify(json.userId))
            sessionStorage.setItem('token', JSON.stringify(json.token))
            this.$router.push("/editprofile")
            this.submitted = true;
          }
        }).catch((err) => {
          console.error(err)
          document.getElementById("err").innerHTML = 'User email address already exists';
        }
      )
    }
  }
}
</script>
  
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#app {
  color: #0d3b66;
  border: solid 10px white;
  min-height: 100vh;
}

.btnSignInSubmit {
  font-family: Ubuntu, sans-serif;
  background-color: #fd2500;
  color: white;
  text-decoration: none;
  font-weight: bold;
  background: linear-gradient(to right, #fd2500 50%, #0d3b66 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 1s ease;
  border: #0d3b66 1px;
    &:hover {
    background-position: left bottom;
  }
}

h1 {
  font-family: Pacifico;
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