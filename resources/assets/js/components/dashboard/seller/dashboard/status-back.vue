<template>
  <div>
    <h2 id="test" v-text="editing"></h2>
    <div v-if="!editing">
      <h1 v-text="question.title"></h1>
      <div v-text="question.body"></div>
      <button id="edit" @click="editing = true">Edit</button>
    </div>
    <div v-else>
      <input type="text" name="title" v-model="form.title" />
      <textarea name="body" v-model="form.body"></textarea>
      <button id="cancel" @click="cancel()">Cancel</button>
      <button id="update" @click="update()">Update</button>
    </div>

    <div v-if="feedback">form is submited</div>
  </div>
</template> 

<script>
// import axios from "axios";
export default {
  props: ["dataQuestion"],
  data() {
    return {
      question: this.dataQuestion,
      form: {
        title: this.dataQuestion.title,
        body: this.dataQuestion.body,
      },
      editing: false,
      feedback: false,
    };
  },
  methods: {
    cancel() {
      this.editing = false;
    },
    update() {
      this.question.title = this.form.title;
      this.question.body = this.form.body;

      axios.post("/question", this.form).then((response) => {
        this.feedback = true;
      });

      this.editing = false;
    },
  },
};
</script>