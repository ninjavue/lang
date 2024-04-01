<template>
  <div class="login">
    <UForm :state="user" class="space-y-4 mt-8" @submit="onSubmit">
      <UFormGroup :label="$t('email')" name="email">
        <UInput color="blue" variant="outline" placeholder="example@gmail.com" v-model="user.email" required />
      </UFormGroup>
  
      <UFormGroup :label="$t('password')" name="password">
        <UInput color="blue" variant="outline" :placeholder="$t('password')" v-model="user.password" type="password"
          required />
      </UFormGroup>
  
      <p class="flex justify-start align-center mt-10">
        <span>{{$t('register_check')}} </span>
        <UButton color="blue" variant="link" @click="changePage">{{$t('register')}}</UButton>
      </p>
  
  
      <UButton type="submit" color="blue" variant="solid"
        class="w-full text-center flex justify-center align-middle mt-5">
        <span>{{$t('login')}}</span>
      </UButton>
    </UForm>
  </div>
</template>

<script>
export default {
  props: {
    changePage: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    async onSubmit() {
      if (this.user.email && this.user.password) {
        try {
          const users = await $fetch('http://localhost:4000/signup', {
            method: 'GET',
          });
          users.forEach(u => {
            if(u.email === this.user.email && u.password === this.user.password){
              console.log(u)
              this.$router.push(this.localePath('/'));
              this.user = {};
            }
          });
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
}
</script>