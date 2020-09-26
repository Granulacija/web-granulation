<template>
  <b-container>

    <h1 class="main-title mt-4">{{ msg }}</h1>
    <div>

    </div>
    <b-card-group>
      <b-card v-for="step in steps" :key="step.name" @click.prevent="navigate(step.routeName)"
          :title="step.name"
          :img-src="'http://localhost:8080/'+step.image"
          img-alt=""
          img-bottom
          tag="article"
          style="max-width: 20rem; border-radius: 25px;"
          class="m-4 image-view"

      >
        <b-card-text>
          {{ step.name }}
        </b-card-text>

      </b-card>
    </b-card-group>

    <h1 class="main-title mt-4"></h1>
    <b-card-group>
      <b-col>

      </b-col>
      <b-col> <b-card v-for="step in [goods[0]]" :key="step.name" @click.prevent="navigate(step.routeName)"
                      :title="step.name"
                      img-alt=""
                      img-bottom
                      tag="article"
                      style="max-width: 20rem; border-radius: 25px;"
                      class="m-6 image-view-side"
      >
        <b-card-text>
          {{ step.name }}
        </b-card-text>

      </b-card></b-col>
      <b-col>

      </b-col>

      <b-col><b-card v-for="step in [goods[1]]" :key="step.name" @click.prevent="navigate(step.routeName)"
                     :title="step.name"
                     img-alt=""
                     img-bottom
                     tag="article"
                     style="max-width: 20rem; border-radius: 25px;"
                     class="m-6 image-view-side"
      >
        <b-card-text>
          {{ step.name }}
        </b-card-text>

      </b-card></b-col>
      <b-col>

      </b-col>
    </b-card-group>


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
          image: 'steel-bowl.png',
          name: 'Priprava granularne raztopine',
          routeName: 'Priprava'
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
      ],
      goods: [
        {
          name: 'Zaloga surovin',
          routeName: 'Preparation'
        },
        {
          name: 'Sestava',
          routeName: 'MaterialList'
        },
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
  background-color: rgba(175,238,238, 0.6);
  padding-bottom: 0.5em;
  /*border-color: black;*/

}
.image-view-side {
  background-color: rgba(175,238,255, 0.6);
  width: 600px;
}

.image-view-side:hover {
  background-color: rgba(64, 224, 208, 0.7);

}
.image-view:hover {
  background-color: rgba(64, 224, 208, 0.7);
}

#app > div > div > div > article > img {
  padding-bottom: 2em;
}
/*#app > div > div > div:nth-child(3) > article:nth-child(3) > img {*/
/*  width: 100%;*/
/*  padding: 10px*/
/*}*/

</style>
