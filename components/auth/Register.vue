<template>
  <div class="login">
    <UForm :state="user" class="space-y-4 mt-8" @submit="onSubmit">
      <UFormGroup :label="$t('last_name')" name="text">
        <UInput color="blue" variant="outline" :placeholder="$t('last_name')" v-model="user.last_name" required />
      </UFormGroup>
  
      <UFormGroup :label="$t('first_name')" name="text">
        <UInput color="blue" variant="outline" :placeholder="$t('first_name')" v-model="user.first_name" required />
      </UFormGroup>
  
      <UFormGroup :label="$t('email')" name="email">
        <UInput color="blue" variant="outline" placeholder="example@gmail.com" v-model="user.email" required />
      </UFormGroup>
  
      <UFormGroup :label="$t('password')" name="password">
        <UInput color="blue" variant="outline" :placeholder="$t('password')" v-model="user.password" type="password"
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
    if (this.user.first_name && this.user.last_name && this.user.email && this.user.password) {
      try {
        const response = await $fetch('http://localhost:4000/signup', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.user)
        });
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