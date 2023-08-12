<template>
  <div class="table_wrapper">
    <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" v-bind:key="user.id">
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>
            <ButtonElement class="table_btn" @click="openModal(user.id)">Редактировть</ButtonElement>
            <ButtonElement class="table_btn" @click="deleteUser(user.id)">Удалить</ButtonElement>
          </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>

export default {
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteUser(userId) {
      this.$emit('delete', userId);
    },
    openModal(userId) {
      this.$emit('openModal',userId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  color: #000000;
  width: 800px;
  max-width: 100%;
}
table,
td, th {
  border: 1px solid #000;
  border-collapse: collapse;
}

td, th {
  vertical-align: middle;
  text-align: center;
  padding: 10px 20px;
}

.table_btn:first-of-type {
  margin-right: 10px;
}

@media (min-width: 1024px) {
 
}
</style>
