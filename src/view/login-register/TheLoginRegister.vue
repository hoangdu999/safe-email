<template>
  <div class="login-register">
    <div class="container" ref="container">
      <div class="form-container sign-up">
          <form>
              <h1>Create Account</h1>
              <div class="social-icons">
                <a href="#" class="icon">
                  <font-awesome-icon :icon="['fab', 'google-plus-g']" />
                </a>
                <a href="#" class="icon">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </a>
                <a href="#" class="icon">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
                <a href="#" class="icon">
                  <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                </a>
              </div>
              <span>or use your email for registeration</span>
              <input type="text" placeholder="Name">
              <input type="email" placeholder="Email">
              <input type="password" placeholder="Password">
              <button>Sign Up</button>
          </form>
      </div>
      <div class="form-container sign-in">
          <form>
              <h1>Sign In</h1>
              <div class="social-icons">
                <a href="#" class="icon">
                  <font-awesome-icon :icon="['fab', 'google-plus-g']" />
                </a>
                <a href="#" class="icon">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </a>
                <a href="#" class="icon">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
                <a href="#" class="icon">
                  <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                </a>
              </div>
              <span>or use your email password</span>
              <input type="email" placeholder="Email">
              <input type="password" placeholder="Password">
              <a href="#">Forget Your Password?</a>
              <button @click="SignIn">Sign In</button>
          </form>
      </div>
      <div class="toggle-container ">
          <div class="toggle">
              <div class="toggle-panel toggle-left">
                  <h1>Welcome Back!</h1>
                  <p>Enter your personal details to use all of site features</p>
                  <button class="hidden-button" id="login" @click="removeEventListener">Sign In</button>
              </div>
              <div class="toggle-panel toggle-right ">
                  <h1>Hello, Friend!</h1>
                  <p>Register with your personal details to use all of site features</p>
                  <button class="hidden-button" id="register" @click="addEventListener">Sign Up</button>
              </div>
          </div>
      </div>
  </div>
  </div>
  
</template>

<script>
export default {
  name: 'TheLoginRegister',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    addEventListener(){
      this.$refs.container.classList.add("active");
    },
    removeEventListener(){
      this.$refs.container.classList.remove("active");
    },
    SignIn(){
      this.$router.push('/all');
    }
  },
  
};
</script>
<style scoped>
@import url(./LoginRegister.css);
</style>