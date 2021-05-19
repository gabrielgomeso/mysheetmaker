const app = Vue.createApp({
  data() {
    return {
      information: {
        player_name: "",
        character_name: "",

      },
      atributes: {
        strenght: 1,
        agility: 1,
        intelligence: 1,
        resistence: 1,
        hability: 1,
        total: 10,
      },
      status: {
        health_points: 0,
        energy_points: 0,
      },
    }
  },
  methods: {
    addPoint(attribute){
      if(this.atributes["total"] > 0){
        if(this.atributes[attribute] < 5){
          this.atributes[attribute] += 1;
          this.atributes["total"] -= 1;
        } else {
          return
          //mensagem de que atingiu o limite
        }
      } else {
        return
        // mensagem de acabaram os pontos
      }
    },
    removePoint(attribute){
      if(this.atributes[attribute] > 1) {
        this.atributes[attribute] -= 1;
        this.atributes["total"] += 1;
      } else {
        return
        // mensagem de que ta no minimo de pontos
      }
    }
  },
  computed: {
    generateHealthPoints() {
      console.log('Running HP gen')
      this.status["health_points"] = (this.atributes["resistence"] + this.atributes["strenght"]) * 5
      return this.status["health_points"]
    },
    generateEnergyPoints() {
      console.log('Running EN gen')
      this.status["energy_points"] = (this.atributes["resistence"] + this.atributes["agility"]) * 5
      return this.status["energy_points"]
    }
  }
});

app.mount('#app');
