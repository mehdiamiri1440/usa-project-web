<style scoped>
p {
  line-height: 1.618;
  text-align: center;
}

label {
  margin: 0 auto 9px auto;
}

.submit-button {
  background: #dddddd;
  color: #fff;
  border: none;
  border-radius: 4px;
  display: inline-block;
  font-size: 16px;
  padding: 10px 30px 9px;
  transition: 200ms;
  cursor: default;
  margin: 8px 0;
}

.submit-button.active {
  background: #00c569;
  cursor: pointer;
}

.title-contents {
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 15px;
}

.form-contents {
  margin: 5px auto;
}

.form-contents lable {
  font-size: 12px;
}

.input-wrapper,
.text-input-wrapper {
  margin: 6px auto;

  position: relative;
}

.input-wrapper:after {
  content: "\F107";

  color: #777;

  position: absolute;

  display: inline-block;

  top: 6px;

  font-family: "Font Awesome 5 Free", sans-serif;

  font-weight: 900;

  left: 15px;

  font-size: 20px;

  z-index: 0;
}

input {
  width: 100%;

  border-radius: 4px;

  border: 1px solid;

  padding: 8px 15px;

  color: #bebebe;

  border-color: #bebebe;

  direction: rtl;

  transition: 300ms;

  background: #fff;
}

.input-wrapper i {
  display: inline-block;

  position: absolute;

  left: 15px;

  font-size: 20px;

  color: #bebebe;

  top: 9px;

  transition: 300ms;
}

input:focus,
input:focus + i {
  color: #333;
  border-color: #333;
}

input.active {
  border-color: #00c569;
  color: #333;
}

input.active + i {
  color: #00c569;
}

input.active:focus,
input.active:focus + i,
input.active + i {
  border-color: #00c569;
}

input.error {
  color: #333;
  border-color: #e41c38;
}

input.error + i {
  color: #e41c38;
}

input.error:focus,
input.error:focus + i {
  border-color: #e41c38;
}

select {
  width: 100%;

  border-radius: 4px;

  border: 1px solid;

  padding: 8px 15px;

  position: relative;

  z-index: 1;

  color: #777777;

  direction: rtl;

  transition: 200ms;

  background: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
}

.input-wrapper i {
  display: inline-block;

  position: absolute;

  left: 15px;

  font-size: 20px;

  color: #bebebe;

  top: 9px;

  transition: 200ms;
}

select option {
  color: #333;
}

select:focus {
  color: #333;
}

select.active {
  color: #333;
  color: #00c569;
}

select.active:focus {
  color: #00c569;
}

select.error {
  color: #333;
  color: #e41c38;
}

select.error:focus {
  color: #e41c38;
}

.error-message {
  text-align: center;

  color: #e41c38;

  font-weight: bold;

  height: 15px;

  direction: rtl;

  font-size: 11px;
}

.small-description {
  font-size: 11px;

  font-weight: bold;

  color: #777777;

  line-height: 1.618;
}

.list-item-wrapper {
  background: #f8f8f8;
  box-shadow: 0 5px 10px #c5c5c5;
  border: none;
  margin: 50px auto;
  padding: 4px 0;
}

.list-item-wrapper > p {
  float: right;
  padding: 0;
  padding-top: 12px;
}

.send-message {
  padding: 0;
  text-align: center;
}

.send-message button {
  font-size: 14px;
  padding: 7px 15px;
}

.main-description {
  margin-top: 25px;
}

.red-text {
  color: #e41c38;
}

@media screen and (max-width: 767px) {
  .list-item-wrapper {
    margin: 15px auto;
  }

  .input-wrapper {
    padding: 0 5px;
  }

  select {
    font-size: 12px;
  }

  .input-wrapper::after {
    left: 14px;
  }
}
</style>

<template>
  <div>
    <div class="form-contents">
      <div class="text-input-wrapper">
        <div class="border" v-for="field in fieldsData">
          <input v-model="field.name" placeholder="Enter First Name" />
          <select v-model="field.optionId" id="deptList" @change="manageFieldsOption">
            <!--                        <option v-for="dept in defaultFieldsOptions"  v-bind:value="dept.id" v-text="dept.name">-->
            <option
              v-for="(dept,index) in defaultFieldsOptions"
              v-if="checkSelectData(dept.id, index)"
              v-bind:value="dept.id"
              v-text="dept.name"
            ></option>
          </select>
        </div>

        <button @click="manageFieldsOption">merge</button>
        <button @click="AddField">New Field</button>
      </div>
      <pre>{{ $data || json }}</pre>
      <!-- <div class="col-xs-12">
                <div class="text-center">
                     <button class="submit-button active "

                         @click.prevent="$parent.reLoadPage()"
                       >
                     ثبت محصول جدید

               </button>
                </div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      fieldsData: [
        {
          name: "",
          optionId: ""
        }
      ],
      defaultFieldsOptions: [
        {
          id: "1",
          name: "yek"
        },
        {
          id: "2",
          name: "do"
        },
        {
          id: "3",
          name: "se"
        }
      ],
      fieldsOptions: ""
    };
  },
  methods: {
    arr_diff: function(defaultArray, selectedArray) {
      let diff = [];
      for (let firstIndex = 0; firstIndex < defaultArray.length; firstIndex++) {
        for (
          let secondIndex = 0;
          secondIndex < selectedArray.length;
          secondIndex++
        ) {
          if (
            defaultArray[firstIndex].id != selectedArray[secondIndex].optionId
          ) {
            diff.push(selectedArray[secondIndex].optionId);
          }
        }
      }
      console.log("difff=>>>", diff);
      return diff;
    },
    AddField: function() {
      this.fieldsData.push({ name: "", optionId: "" });
    },
    manageFieldsOption: function() {
      this.fieldsOptions = this.arr_diff(
        this.defaultFieldsOptions,
        this.fieldsData
      );
      console.log(this.fieldsOptions);
    },
    checkSelectData: function(id, index) {
      /*var length = this.fieldsOptions.length;
                for(var i = 0; i < length; i++) {
                    if(this.fieldsOptions[i] != id) return true;
                }

                return false;*/
      /* console.log( this.fieldsOptions );
       */
      console.log(id);
      console.log(index);
      return true;
      /* var flag = false;


                for(var i=0; i < this.fieldsOptions.length ; i++){
                    console.log(this.fieldsOptions[i]);
                    console.log(id);
                    if(this.fieldsOptions[i] == id){
                        flag = true
                        return true
                    }else{
                        flag = false

                    }
                }
                console.log(flag);
                return false*/
    }
  },
  mounted: function() {
    this.manageFieldsOption();
  }
};
</script>
