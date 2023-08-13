<template>
   <div class="modal" v-if="show" @click.stop="closeModal">
    <div class="modal_content" @click.stop>
        <ButtonElement @click="closeModal" class="modal-btn" aria-label="Закрыть модальное окно">x</ButtonElement>
        <h2 id="editUser" class="modal_title">Редактировть пользователя</h2>
        <form class="edit-user_form" action="#" aria-labelledby="editUser">
          
          <div class="modal-inputs">
          <InputElement class="edit-user_input" v-model="user.firstName" />
          <InputElement class="edit-user_input" v-model="user.lastName" />
          </div>
          
          <ButtonElement @click="updateUser(activeUser.id)" class="edit-user_btn" >Сохранить</ButtonElement>
          <ButtonElement @click="closeModal" class="edit-user_btn" >Отменить</ButtonElement>
        </form>
    </div>
   </div>
</template>

<script>
export default {
    name: 'DialogElement',
    props: {
        show: {
            type:  Boolean,
            default: false
        },
        activeUser: {
            type: Object,
            required: true
        },
    },
    data() {
    return {
        user:{
            firstName: '',
            lastName: ''
        }
      }
    },
    methods: {
        closeModal() {
            this.$emit('update:show', false)
            this.user.firstName = '';
            this.user.lastName = '';
        },
        openModal() {
            this.$emit('update:show', true)
        },
        updateUser(userId) {
            const newInfo = {
                firstName: this.user.firstName,
                lastName: this.user.lastName
            }
            this.$emit('updateUser', userId, newInfo)
            this.closeModal()
        }
    }
}
</script>

<style scoped>
.modal {
    top: 0;
    right: 0 ;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 10;
    display: flex;
}

.modal_content {
    position: relative;
    margin: auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    min-width: 500px;
    min-height: 250px;
}
.modal-btn {
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>