<template>
  <div id="app">
    <div class="modal fade" id="deleteUserModal" tabindex="-1" aria-labelledby="deleteUserModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <button type="button" class="btn-close mt-3 ms-3" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="modal-body text-center">
            This will delete your user account.<br>
            Do you want to continue?
          </div>
          <div class="modal-footer mx-auto">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
            <a v-on:click.prevent="deleteUser" type="submit" role="button" class="btn btn-success">Yes</a>
          </div>
          <div id="err" class="text-center mb-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
  export default {
    name: 'DeleteUserModal',
    methods: {
      deleteUser : async function() {
        const token = sessionStorage.getItem('token')
        const requestOptions = {
          method: 'DELETE',
          headers: {
            'Authorization': 'Bearer ' + JSON.parse(token)
          }
        };
        console.log(requestOptions)
        await fetch('http://localhost:3000/api/user', requestOptions)
          .then(() => this.status = 'Delete successful')
          .catch(error => {
          console.error('Error deleting user', error);
          document.getElementById("err").innerHTML = 'Error deleting user';
        }
      );
    }
  }
}
</script>
    
<style lang="scss" scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  border: solid 10px white;
}

#err {
  color: #DC3545;
  font-size: 88%;
}
</style>