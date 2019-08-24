<template>
  <div class="list-cards">
    <div class="filter-content">
      <h3>Filtre por dominio de E-mail: </h3>
      <div class="filter" v-for="domain in domains" :key="domain.id">
        <label :for="domain.id">{{domain.domain}}</label>
        <input :id="domain.id" type="checkbox" v-model="domain.id" @click= "filter(domain.domain)" checked/><br>
      </div>
    </div>
    <div class="row">
      <div v-for="user in users" v-bind:key= user.id class="column">
        <div v-if="user.selected">
          <CardUser 
            v-bind:name= "user.name"
            v-bind:username= "user.username"
            v-bind:email= "user.email"
            v-bind:phone= "user.phone"
            v-bind:website= "user.website"
            v-bind:address= "user.address"
          ></CardUser>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Page',
  data() {
    return {
      users: null,
      domains: [],
      selected: null
    }
  },
  methods:{
    filter: function (domain) {
      for (let i = 0; i < this.users.length; i++) {
        let aux = this.users[i].email.substring(this.users[i].email.indexOf("@") + 1);
        if (aux === domain) {
          this.users[i].selected = this.users[i].selected == true ? false : true
        }
      }
    }
    
  },
  mounted() {
    axios.get().then(({ data }) => {
      this.users = data
      for (let i = 0; i < this.users.length; i++) {
        this.users[i].selected = true
        let aux = this.users[i].email.substring(this.users[i].email.indexOf("@") + 1);
        if (this.domains.indexOf(aux === -1)) {
          let domain = {'domain': aux, 'id': i+1}
          this.domains.push(domain)
        } 
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.list-cards{
  background-color: #E2E7E9;
  margin-top:20px;
}
.column {
  float: left;
  width: 25%;
  padding: 20px 10px;
}

/* Remove extra left and right margins, due to padding */
.row {margin: 0 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 800px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

.filter-content{
  text-align: left;
  padding: 10px;
  background-color: #ffffff;
}

</style>
