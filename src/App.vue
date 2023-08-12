<template>
  <div class="wrapper">
    <UserInput @create="addUser"/>
    <UsersTable v-if="users.length > 0" @openModal="openModal" @delete="deleteUser" :users="users"/>
      <p v-else>Список пользователей пуст</p>
    <DialogElement :activeUser="activeUser" v-model:show="isModalShown" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import UsersTable from './components/UsersTable.vue';
import UserInput from './components/UserInput.vue';
import { collection, onSnapshot, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from '../src/firebase';

const usersList = ref([])
const usersCollectionRef = collection(db, "users");

export default {
  setup() {
        onMounted(()=> {
          onSnapshot(usersCollectionRef, (querySnapshot) => {
            const fbUsers = [];
            querySnapshot.forEach((doc) => {
              const user ={
                id: doc.id,
                firstName: doc.data().firstName,
                lastName: doc.data().lastName
              }
              fbUsers.push(user)
            });
            usersList.value = fbUsers;
          });

        })
  },
  components: {
    UsersTable,
    UserInput
  },
  data() {
    return {
      users: usersList,
      //  users: [
      //  {id: '1', firstName: 'Иван', lastName: 'Иванов'},
      //  { id: '2', firstName: 'Андрей', lastName: 'Петров'}
      // ],
      isModalShown: false,
      activeUser: null
    }
  },
  methods: {
    addUser(user) {
      addDoc(usersCollectionRef, {
        firstName: user.firstName,
        lastName: user.lastName
      });
    },
    deleteUser(userId){
      deleteDoc(doc(usersCollectionRef, userId));
    },
    openModal(userId) {
      console.log(userId);
      this.activeUser = this.users.find((user) => user.id === userId)
      this.isModalShown = true;
    },
    closeModal() {
      this.isModalShown = false;
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