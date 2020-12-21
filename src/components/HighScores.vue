<template>
  <section class="highscores">
    <h2>High Scores</h2>
    <table class="table100">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(score, i) in highScores" :key="i">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ score.name }}</td>
          <td>{{ score.score }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  created() {
    this.loadHighScores();
  },

  computed: {
    ...mapGetters(["highScores", "status"]),
  },

  methods: {
    ...mapActions(["fetchHighscores"]),
    async loadHighScores() {
      this.isLoading = true;
      try {
        await this.fetchHighscores();
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 10px;
}
h3 {
  text-align: center;
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.highscores {
  margin-top: 10px;
}

.limiter {
  width: 100%;
  margin: 0 auto;
}

.container-table100 {
  width: 100%;
  min-height: 100vh;
  background: #c850c0;
  background: -webkit-linear-gradient(45deg, #4158d0, #c850c0);
  background: -o-linear-gradient(45deg, #4158d0, #c850c0);
  background: -moz-linear-gradient(45deg, #4158d0, #c850c0);
  background: linear-gradient(45deg, #4158d0, #c850c0);
}

.wrap-table100 {
  width: 1170px;
}

table {
  width: 40rem;
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 5px;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
table * {
  position: relative;
}
table td,
table th {
  padding-left: 8px;
}
table thead tr {
  height: 60px;
  background: #0074b8;
  color: white;
}
table tbody tr {
  height: 50px;
}
table tbody tr:last-child {
  border: 0;
}
table td,
table th {
  text-align: left;
}

.table100-head th {
  font-size: 18px;
  color: #fff;
  line-height: 1.2;
  font-weight: unset;
}

tbody tr:nth-child(even) {
  background-color: #f5f5f5;
}

tbody tr {
  font-size: 15px;
  color: #383838;
  line-height: 1.2;
  font-weight: unset;
}

tbody tr:hover {
  color: #555555;
  background-color: #f5f5f5;
  cursor: pointer;
}

.column1 {
  width: 260px;
  padding-left: 40px;
}

.column2 {
  width: 160px;
}

.column3 {
  width: 245px;
}

.column4 {
  width: 110px;
  text-align: right;
}

.column5 {
  width: 170px;
  text-align: right;
}

.column6 {
  width: 222px;
  text-align: right;
  padding-right: 62px;
}

@media screen and (max-width: 992px) {
  table {
    display: block;
  }
  table > *,
  table tr,
  table td,
  table th {
    display: block;
  }
  table thead {
    display: none;
  }
  table tbody tr {
    height: auto;
    padding: 37px 0;
  }
  table tbody tr td {
    padding-left: 40% !important;
    margin-bottom: 24px;
  }
  table tbody tr td:last-child {
    margin-bottom: 0;
  }
  table tbody tr td:before {
    font-size: 14px;
    color: #999999;
    line-height: 1.2;
    font-weight: unset;
    position: absolute;
    width: 100%;
    left: 30px;
    top: 0;
  }
  table tbody tr td:nth-child(1):before {
    content: "Date";
  }
  table tbody tr td:nth-child(2):before {
    content: "Order ID";
  }
  table tbody tr td:nth-child(3):before {
    content: "Name";
  }

  .column4,
  .column5,
  .column6 {
    text-align: left;
  }

  .column4,
  .column5,
  .column6,
  .column1,
  .column2,
  .column3 {
    width: 100%;
  }

  tbody tr {
    font-size: 14px;
  }
}

@media (max-width: 576px) {
  .container-table100 {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
