<template>
  <div class="card">
    <p>
      <label for="name"><b>Nome:</b> {{ name }} </label>
    </p>
    <p>
      <label for="username"> <b> Username: </b> {{ username }}</label>
    </p>
    <p>
      <label for="email"> <b> E-mail:</b> {{ email }}</label>
    </p>
    <p>
      <label for="phone"><b>Telefone: </b>{{ phone }} </label>
    </p>
    <p>
      <label for="website"><b>Site:</b> {{ website }}</label>
    </p>
    <p>
      <label for="address"><b>Endereço: </b></label>      
    </p>
    <p>
      Rua: {{ address.street }},
      {{ address.suite }},
      {{ address.city }},
      CEP {{address.zipcode}}
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CardUser',
  props: {
    name: String,
    username: String,
    email: String,
    phone: String,
    website: String,
    address: Object
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  padding: 10px;
  margin: 15px;
  text-align: left
}
@media screen and (max-width: 800px) {
  .card{
    width: 83%;
  }
}
</style>