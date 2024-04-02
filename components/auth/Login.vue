<template>
  <div class="login">
    <UAlert
      v-if="isError"
      icon="i-heroicons-command-line"
      color="rose"
      variant="solid"
      title="Error!"
      description="Username yoki password xato."
    />
    <UForm :state="user" class="space-y-4 mt-8" @submit="onSubmit">
      <UFormGroup :label="$t('username')" name="text">
        <UInput color="blue" variant="outline" :placeholder="$t('username')" v-model="user.username" required />
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
      user: {},
      isError: false
    }
  },
  methods: {
    async onSubmit() {
      if (this.user.username && this.user.password) {
        try {
          const response = await $fetch('http://178.218.200.199:9090/api/v1/accounts/login/', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.user)
        });
        if(response){
          localStorage.setItem('accessToken', response.access)
          localStorage.setItem('refreshToken', response.refresh)
          location.reload(); 
          this.$router.push(this.localePath('/'));
          this.user = {};
        }       
        this.isError = true 
        } catch (error) {
          this.isError = true
          console.error(error);
        }
      }
    }
  }
}
</script>