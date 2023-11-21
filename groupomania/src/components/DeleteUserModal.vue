<template>
  <div class="app">
    <div class="modal fade"
      id="deleteUserModal"
      tabindex="-1"
      aria-labelledby="deleteUserModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <button type="button"
              class="btn-close mt-3 ms-3"
              data-bs-dismiss="modal"
              aria-label="Close">
            </button>
            <div class="modal-body text-center">
              This will delete your user account.<br>
              Do you want to continue?
            </div>
            <div class="modal-footer mx-auto">
              <button type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal">
                  No
              </button>
              <a @click.prevent="deleteUser"
                type="submit"
                role="button"
                class="btn btn-success"
                data-bs-dismiss="modal">
                  Yes
              </a>
            </div>
          <div class="err text-center mb-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
  export default {
    name: 'DeleteUserModal',
    methods: {
      deleteUser : function() {
        const token = sessionStorage.getItem('token')
        const userId = sessionStorage.getItem('user')
        fetch('http://localhost:3000/api/user', {
          method: 'DELETE',
          body: JSON.parse(userId),
          headers: {
            'Authorization': 'Bearer ' + JSON.parse(token)
          }
        }).then(response => {
          if (!response.ok) {
            const error = (response.status)
            return Promise.reject(error);
          }
          this.$router.push("/")
        }).catch(error => {
          this.errorMessage = error;
          console.error('Unauthorized access', error);
          document.getElementByClass("err").innerHTML = 'Unauthorized access';
        }
      )
    }
  }
}
</script>
    
<style lang="scss" scoped>
.app {
  font-family: Helvetica, Arial, sans-serif;
  border: solid 10px white;
}
.err {
  color: #DC3545;
  font-size: 88%;
}
</style>