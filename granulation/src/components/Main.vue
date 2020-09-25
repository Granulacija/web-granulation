<template>
  <b-container>
    <h1>{{ msg }}</h1>
      <b-card v-for="step in steps" :key="step.name" class="mt-4 hover-pointer">
        {{ step.name }}
      </b-card>

  </b-container>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      steps: [
        {
          name: 'Priprava granularne raztopine',
          route: ''
        },
        {
          name: 'Vrtično slojno granuliranje',
          route: ''
        },
        {
          name: 'Homegenizacija',
          route: ''
        },
        {
          name: 'Tabletiranje',
          route: ''
        }
      ]
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hover-pointer {
  background-color: ghostwhite;
  /*cursor: grab;*/
}
.hover-pointer:hover {
  background-color: navajowhite;
  /*cursor: grab;*/
}
</style>
