<template>
  <div class="justify-center align-middle flex">
    <UCard class="auth-card">
      <h1 class="text-lg">
        <template v-if="isLogin">
          {{$t('login')}}
        </template>
        <template v-else>
          {{$t('register')}}
        </template>
      </h1>
      <p class="mt-7 text-gray-400">
        <template v-if="isLogin">
          {{ $t('login_text') }}
        </template>
        <template v-else>
          {{ $t('register_text') }}
        </template>
      </p>
      <AuthLogin v-if="isLogin" :changePage="changePage"/>
        <AuthRegister v-else :changePage="changePage"/>
  </UCard>
  </div>
</template>

<script>
export default {
    data() {
      return {
        isLogin: true
      }
    },

    methods: {
        changePage(){
          this.isLogin = !this.isLogin
          if(this.isLogin){
            this.$router.push({query: { q: 'login' } });
          }else{
            this.$router.push({query: { q: 'register' } });
          }
        }
    },
    created(){
      if(this.$route.query.q == 'login' || !this.$route.query.q){
        this.isLogin = true
      }else{
        this.isLogin =  false

      }

      
    },
    mounted(){
      document.title = this.$t('auth_title')

      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        this.$router.push(this.localePath('/'));
      }
    }
}
</script>

<style lang="scss">
  @import '@/styles/auth.scss';
</style>