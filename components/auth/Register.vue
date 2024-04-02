<template>
  <div class="login">
    <UForm :state="user" class="space-y-4 mt-8" @submit="onSubmit">
      <UFormGroup :label="$t('username')" name="text">
        <UInput color="blue" variant="outline" :placeholder="$t('username')" v-model="user.username" required />
      </UFormGroup>
  
      <UFormGroup :label="$t('email')" name="email">
        <UInput color="blue" variant="outline" placeholder="example@gmail.com" v-model="user.email" required />
      </UFormGroup>
  
      <UFormGroup :label="$t('password')" name="password">
        <UInput color="blue" variant="outline" :placeholder="$t('password')" v-model="user.password1" type="password"
          required />
      </UFormGroup>

       <UFormGroup :label="$t('c_password')" name="password">
        <UInput color="blue" variant="outline" :placeholder="$t('c_password')" v-model="user.password2" type="password"
          required />
      </UFormGroup>
  
      <p class="flex justify-start align-center mt-10">
        <span>{{$t('login_check')}} </span>
        <UButton color="blue" variant="link" @click="changePage">{{$t('login')}}</UButton>
      </p>
  
  
      <UButton type="submit" color="blue" variant="solid"
        class="w-full text-center flex justify-center align-middle mt-5">
        <span>{{$t('register')}}</span>
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
    if (this.user.username && this.user.password1 && this.user.email && this.user.password2) {
      try {
        const response = await $fetch('http://127.0.0.1:8000/api/v1/accounts/signup/', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.user)
        });
        console.log(response)
        this.$router.push({ query: { q: 'login' } });
        this.changePage();
        this.user = {};
      } catch (error) {
        console.error(error);
      }
    }
  }
}

}
  </script>