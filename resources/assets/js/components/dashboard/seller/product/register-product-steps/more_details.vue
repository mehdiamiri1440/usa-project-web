<style scoped>
    input[type="tel"] {
        box-shadow: none !important;
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

    .submit-button.default-back-button {
        background: #fff;
        color: #777;
        border: 1px solid #777;
        border-radius: 4px;
        cursor: pointer;
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

    .add-button {
        float: left;
        background: #fff;
        border: 1.5px solid;
        color: #00c569;
        border-radius: 3px;
        padding: 2px 15px 1px;
        font-size: 13px;
        transition: 200ms;
    }

    .add-button:hover {

        background: #00c569;
        transition: 200ms;
        color: #fff;

    }


    .wrapper-fields{
        margin-bottom: 10px;
    }

    label .small-label {
        font-size: 12px;
    }

    @media screen and (max-width: 767px) {
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
        <h2 class="title-contents col-xs-12">ثبت جزییات بیشتر</h2>

        <div class="form-contents col-xs-12">
            <div class="wrapper-fields">
                <div class="row" v-for="field in fieldsData">
                    <div class="col-xs-6 pull-right">

                        <div class="input-wrapper">
                            <!-- input type tel because we have some limmitation for processes -->

                            <select
                                    v-model="field.optionId"
                                    :class="{'error' :  $parent.errors.provinceSelected , 'active' : $parent.provinceSelected}"

                            >
                                <option selected disabled>یک مورد را انتخاب کنید</option>

                                <option
                                        v-for="item in defaultFieldsOptions"
                                        v-bind:value="item.id"
                                        v-text="item.name"
                                ></option>
                            </select>
                        </div>
                    </div>

                    <div class="col-xs-6">

                        <div class="text-input-wrapper">
                            <input type="text" placeholder="مقدار" v-model="field.name">
                        </div>

                    </div>
                </div>
            </div>
            <button class="add-button" @click="AddField"><i class="fa fa-plus"></i> افزودن مورد</button>
            <span class="small-description">

 انتخاب آدرس صحیح به بهتر دیده شدن شما در سامانه باسکول کمک می کند

      </span>

            <div class="col-xs-12  margin-15-auto">
                <div class="row">
                    <button
                            class="submit-button disabled pull-left active"

                            @click.prevent="$parent.submitProduct()"
                    >
                        ثبت نهایی
                    </button>

                    <button
                            class="submit-button default-back-button pull-right"
                            @click.prevent="$parent.currentStep--"
                    >
                        <i class="fa fa-arrow-right"></i>

                        مرحله قبل
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<!--
<div class="form-contents">
  <div class="text-input-wrapper">
    <div class="border" v-for="field in fieldsData">
      <input v-model="field.name" placeholder="Enter First Name" />
      <select v-model="field.optionId" id="deptList" @change="manageFieldsOption">
        &lt;!&ndash;                        <option v-for="dept in defaultFieldsOptions"  v-bind:value="dept.id" v-text="dept.name">&ndash;&gt;
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
  &lt;!&ndash; <div class="col-xs-12">
            <div class="text-center">
                 <button class="submit-button active "

                     @click.prevent="$parent.reLoadPage()"
                   >
                 ثبت محصول جدید

           </button>
            </div>
  </div>&ndash;&gt;
</div>
</div>-->


<script>
    export default {
        data: function () {
            return {
                fieldsData: [
                    {
                        name: "",
                        optionId: ""
                    },
                    {
                        name: "",
                        optionId: ""
                    },
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
            arr_diff: function (defaultArray, selectedArray) {
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
            AddField: function () {
                this.fieldsData.push({name: "", optionId: ""});
            },
            manageFieldsOption: function () {
                this.fieldsOptions = this.arr_diff(
                    this.defaultFieldsOptions,
                    this.fieldsData
                );
                console.log(this.fieldsOptions);
            },
            checkSelectData: function (id, index) {
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
        mounted: function () {
            this.manageFieldsOption();
        }
    };
</script>
