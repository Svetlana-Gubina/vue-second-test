<template>
    <div class="new-user_wrapper">
        <h2 id="newUser">Новый пользователь</h2>
        <form class="new-user_form" action="#" aria-labelledby="newUser" @submit.prevent="sendMessage">
          
          <InputElement placeholder="Имя" class="new-user_input" v-model="user.firstName"/>
          <InputElement placeholder="Фамилия"  class="new-user_input" v-model="user.lastName"/>
          <ButtonElement type="submit" class="new-user_btn" @click="addUser">Добавить</ButtonElement>
        </form>
    </div>
</template>

<script>

export default {
  data() {
    return {
        user:{
            firstName: '',
            lastName: ''
        }
    }
  },
  methods:{
    addUser() {
        this.user.id = Date.now();
        this.$emit('create', this.user);
        this.user = {
            firstName: '',
            lastName: ''
        }
    },
    sendMessage() {
      console.log("Error!")
    }
  }
}
</script>

<style scoped>
.new-user_wrapper {
    display: flex;
    flex-direction: column;
    border: 2px solid #000000;
    padding: 10px;
    width: auto;
    margin-bottom: 35px;
    width: 600px;
    max-width: 100%;
}
h2 {
  color: #000000;
  font-size: 16px;
  line-height: 1.5;
  padding-bottom: 10px;
  width: 100%;
  max-width: 100%;
  border-bottom: 2px solid #01010152;
  margin-bottom: 20px;
}

.new-user_form {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-wrap: nowrap;
}

.new-user_btn {
    margin-left: auto;
}

.new-user_input {
    padding: 10px;
    margin-right: 10px;
    border: 2px solid #01010152;
}
</style>