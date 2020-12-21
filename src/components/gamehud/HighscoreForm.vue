<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !nickName.isValid }">
      <label for="nickname">nickname</label>
      <input
        type="text"
        id="nickname"
        v-model.trim="nickName.val"
        @blur="clearValidity('nickName')"
      />
      <p v-if="!nickName.isValid">Please fill in a nickname.</p>
    </div>
    <base-button>Submit Score</base-button>
  </form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  emits: ["save-data"],
  data() {
    return {
      nickName: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
    };
  },

  computed: {
    ...mapGetters(["timePassed"]),
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.nickName.val === "") {
        this.nickName.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        name: this.nickName.val,
        score: this.timePassed,
      };

      console.log(formData);

      this.$emit("save-data", formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
