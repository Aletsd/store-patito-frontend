<template>
  <div class="container mt-5">
      <div class="row d-flex justify-content-center">
          <div class="col-md-6">
              <div class="card px-5 py-5" id="form1">
                <h1>Registro de Usuario</h1><br>
                  <div class="form-data" v-if="!submitted">
                      <div class="forms-inputs mb-4"> <span>Email or username</span> <input autocomplete="off" type="text" v-model="email" v-bind:class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlured}" v-on:blur="emailBlured = true">
                          <div class="invalid-feedback">A valid email is required!</div>
                      </div>
                      <div class="forms-inputs mb-4"> <span>Password</span> <input autocomplete="off" type="password" v-model="password" v-bind:class="{'form-control':true, 'is-invalid' : !validPassword(password) && passwordBlured}" v-on:blur="passwordBlured = true">
                          <div class="invalid-feedback">Password must be 8 character!</div>
                      </div>
                      <div class="forms-inputs mb-4">                        
                          <router-link to="/register">Registrate</router-link>
                      </div>
                      <div class="mb-3"> <button v-on:click.stop.prevent="submit" class="btn btn-dark w-100">Login</button> </div>
                  </div>
                  <div class="success-data" v-else>
                      <div class="text-center d-flex flex-column"> <i class='bx bxs-badge-check'></i> <span class="text-center fs-1">You have been logged in <br> Successfully</span> </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </template>
  
  
  <script>
    export default {
      data() {
        return {
          email: '',
          password: '',
          emailBlured: false,
          passwordBlured: false,
          submitted: false,
        };
      },
      methods: {
  
        validate : function(){
          this.emailBlured = true;
          this.passwordBlured = true;
          if( this.validEmail(this.email) && this.validPassword(this.password)){
            this.valid = true;
          }
        },
  
        validEmail : function(email) {
  
          var re = /(.+)@(.+){2,}\.(.+){2,}/;
          if(re.test(email.toLowerCase())){
            return true;
          }
  
        },
  
        validPassword : function(password) {
          if (password.length > 7) {
            return true;
          }
        },
  
        submit : function(){
          this.validate();
          if(this.valid){
            this.submitted = true;
            const data = {
                "username": this.email,
                "password": this.password
            };

            const url = '127.0.0.1:9090/api/users/register';

            const options = {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(data) 
            };

            try {
              const response =  fetch(url, options);
              if (response.ok) {
                this.user =  response.json();
                this.loginError = '';
              } else {
                this.user = null;
                this.loginError = 'Invalid username or password';
              }
            } catch (error) {
              console.error('Error fetching data:', error);
              this.loginError = 'An error occurred during login';
            }
          }
        }
      }
    };
  </script>
  
  <style>
    body{background: #000}
    .card{border: none;height: 400px}
    .forms-inputs{position: relative}
    .forms-inputs span{position: absolute;top:-18px;left: 10px;background-color: #fff;padding: 5px 10px;font-size: 15px}
    .forms-inputs input{height: 50px;border: 2px solid #eee}
    .forms-inputs input:focus{box-shadow: none;outline: none;border: 2px solid #000}.btn{height: 50px}
    .success-data{display: flex;flex-direction: column}
    .bxs-badge-check{font-size: 90px}
  </style>