<template>
  <div class="wrapper">
    <UserInput @create="addUser"/>
    <UsersTable v-if="users.length > 0" @openModal="openModal" @delete="deleteUser" :users="users"/>
      <p v-else>Список пользователей пуст</p>
    <DialogElement v-model:show="isModalShown">
      <h2 id="editUser" class="modal_title">Редактировть пользователя</h2>
        <form class="edit-user_form" action="#" aria-labelledby="editUser">
          
          <div class="modal-inputs">
          <InputElement placeholder="Имя"  class="edit-user_input" />
          <InputElement placeholder="Фамилия"  class="edit-user_input" />
          </div>
          
          <ButtonElement class="edit-user_btn" >Сохранить</ButtonElement>
          <ButtonElement class="edit-user_btn" >Отменить</ButtonElement>
        </form>
    </DialogElement>  
  </div>
</template>

<script>
import UsersTable from './components/UsersTable.vue';
import UserInput from './components/UserInput.vue';

export default {
  components: {
    UsersTable,
    UserInput
  },
  data() {
    return {
      users: [
      {id: '1', firstName: 'Иван', lastName: 'Иванов'},
      { id: '2', firstName: 'Андрей', lastName: 'Петров'}
      ],
      isModalShown: false
    }
  },
  methods: {
    addUser(user) {
      this.users.push(user)
    },
    deleteUser(userId){
      this.users = this.users.filter((user) => user.id !== userId)
    },
    openModal() {
      this.isModalShown = true;
    }
  }
}
</script>

<style>
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.wrapper {
  outline: 2px dashed steelblue;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.modal_title {
  color: #000000;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}
.edit-user_form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-inputs {
  margin-bottom: 20px;
}
.edit-user_input:first-of-type {
  margin-right: 10px;
}
.edit-user_btn:first-of-type {
  margin-bottom: 20px;
}
</style>