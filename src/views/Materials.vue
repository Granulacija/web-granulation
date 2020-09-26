<template>
  <div class="modal"  >
    <div class="modal-content">
      <div>
        <span class="modal-x modal-close" @click="$emit('close')">&times;</span>
        <div class="modal-heading">
          <h1 >Materialni list za eksperiment {{ experiment.Experiment_ID }}</h1>
        </div>
        <div class="modal-paragraph">
          <b-table class="white" striped hover :items="items"></b-table>
        </div>
      </div>
      <div class="modal-footer">
        <slot name="modal-footer">
          <b-button class="modal-close" @click="$emit('close')">Ok</b-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Materials",
  props: ['experiment'],
  mounted() {
    window.addEventListener('click', (event) => {
      if(event.target.classList.contains("modal")) {
        this.$emit('close');
      }
    });
  },
  computed: {
    headers: function () {
      let result = []
      let keys = Object.keys(this.experiment);
      console.log("keys", keys);
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] !== 'Experiment_ID' && keys[i] !== 'Sestavina')
          result.push(keys[i]);
      }
      return result
    },
    items: function () {
      let result = [];
      console.log("d", this.experiment.Sestavina)
      for (let i = 0; i < this.experiment.Sestavina.length; i++) {
        let obj = {
          Sestavina: this.experiment.Sestavina[i],
        }
        for (let j = 0; j < this.headers.length; j++) {
          obj[this.headers[j]] = this.experiment[this.headers[j]][i];
        }
        obj['Dejanska količina [g]'] = null;
        result.push(obj);
      }
      return result;
    },
  }
}
</script>

<style scoped>

.modal {
  display: block;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow-y: auto; /* Enable scroll if needed */
  overflow-x: hidden;
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  color: #ffffff;
}

.modal-content {
  /*background-color: #636363;*/
  background-color: rgba(40,40,40,0.8); /* Black w/ opacity */
  margin: 10% auto; /* 15% from the top and centered */
  padding: 20px;
  /*border: 1px solid #888;*/
  width: 80%; /* Could be more or less, depending on screen size */
}


.modal-x{
  color: #ffffff;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.modal-heading{
  color: #ffffff;
  margin-bottom: 3em;
}

.modal-paragraph{
  line-height: 1.5em;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

.white {

  color: #ffffff;
}
</style>