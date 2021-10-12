<template>
  <div>
    <h2 id="test" v-text="editing"></h2>
    <div v-if="!editing">
      <h1 v-text="question.title"></h1>
      <div v-text="question.body"></div>
      <button id="edit" @click="editing = true">Edit</button>
      <!-- <button id="edit" @click="">Edit</button> -->
    </div>
    <div v-else>
      <input type="text" name="title" v-model="question.title" />
      <textarea name="body" v-text="question.body"></textarea>
      <button id="update" @click="editing = false">Update</button>
    </div>
  </div>
</template> 

<script>
export default {
  props: ["question"],
  data() {
    return {
      editing: false,
    };
  },
};
</script>