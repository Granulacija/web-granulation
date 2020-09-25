<template>
  <b-container>

    <h1 class="main-title">{{ msg }}</h1>
    <div>

    </div>
    <b-card-group>
      <b-card v-for="step in steps" :key="step.name" @click.prevent="navigate(step.routeName)"
          :title="step.name"
          :img-src="'http://localhost:8080/'+step.image"
          img-alt=""
          img-bottom
          tag="article"
          style="max-width: 20rem;"
          class="m-6 image-view"
      >
        <b-card-text>
          {{ step.name }}
        </b-card-text>

      </b-card>
    </b-card-group>

    <h1 class="main-title mt-4">Receptura</h1>


  </b-container>
</template>

<script>
export default {
  name: 'Main',
  methods: {
    navigate (routeName) {
      this.$router.push({ name: routeName})
    }
  },
  data() {
    return {
      steps: [
        {
          name: 'Priprava granularne raztopine',
          routeName: 'Preparation'
        },
        {
          image: 'slojna_granulacija.jpg',
          name: 'Vrtično slojno granuliranje',
          routeName: 'Granulation'
        },
        {
          image: 'homogenizacija.png',
          name: 'Homogenizacija',
          routeName: 'Homogenization'
        },
        {
          name: 'Tabletiranje',
          image: 'tabletiranje.jpg',
          routeName: 'Tableting'
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

.main-title {
  color: green;
  margin-bottom: 1em;
}

#app > div.home > div > div.card-group > article:nth-child(2) > img {
  height: 250px;
}

.image-view {
  background-color: paleturquoise;
}

.image-view:hover {
  background-color: turquoise;
}

</style>
