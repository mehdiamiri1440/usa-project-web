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

    .text-red{
        color: #e51c38;
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

        padding-top: 2px;
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

    .wrapper-fields > .row{
        position:relative;
    }

    label .small-label {
        font-size: 12px;
    }

    .hide-option{
        display: none;
    }

    .remove-button{

        background: none;
        border: none;
        color: #e51c38;
        border-radius: 3px;
        position: absolute;
        top: 13px;
        padding: 5px 8px 2px;
        right: -14px;
    }


    @media screen and (max-width: 767px) {
        .remove-button{
            right: 0;
        }
        .select-wrapper{
            padding: 0 30px 0 0;
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
        <h2 class="title-contents col-xs-12">ثبت جزییات بیشتر</h2>

        <div class="form-contents col-xs-12">
            <div class="col-xs-6 pull-right ">
                <p class="small-description ">
                    <span class="text-red">مثال :</span> بسته بندی
                </p>
            </div>
            <div class="col-xs-6  ">
                <p class="small-description ">
                    <span class="text-red">مثال :</span> کارتن مادر ۸ کیلویی
                </p>
            </div>
        </div>

        <div class="form-contents col-xs-12">

            <div class="wrapper-fields">
                <div class="row" v-for="(i,index) in itemsCount" :key="i" v-if="isValidRow(index)">
                    <div class="col-xs-6 pull-right select-wrapper">
    
                        <div class="input-wrapper">
                            <!-- input type tel because we have some limmitation for processes -->

                            <select
                                v-on:change="setItem($event)"
                                :class="{'error' :  fieldsData[index].errorMsg , 'active' : fieldsData[index].errorMsg}"
                            >
                                <option selected disabled>یک مورد را انتخاب کنید</option>

                                <option
                                    v-for="(item,id) in defaultFieldsOptions"
                                    :key="id"
                                    v-bind:value="item.name + '-' + index"
                                    v-text="item.name"
                                    :class="{'hide-option': item.alreadySelected}"
                                ></option>
                            </select>
                        </div>
                    </div>

                    <div class="col-xs-6">
                        <div class='text-input-wrapper'>
                            <input
                                type="text"
                                placeholder="توضیح دهید..." v-model="fieldsData[index].itemValue"
                                :class="{'error' :  fieldsData[index].errorMsg , 'active' : fieldsData[index].errorMsg}"
                                
                            />
                            <p class="error-message">
                                <span v-if="fieldsData[index].errorMsg" v-text="fieldsData[index].errorMsg"></span>
                            </p>
                        </div>
                    </div>
                    <button class="remove-button" @click="deleteRow(fieldsData[index].itemKey,index)"><i class="fa fa-trash"></i></button>

                </div>
            </div>
            <button class="add-button" @click="AddField"><i class="fa fa-plus"></i> افزودن مورد</button>

            <div class="col-xs-12  margin-15-auto">
                <div class="row">
                    <button
                            class="submit-button disabled pull-left active"

                            @click.prevent="submitProduct()"
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


<script>
    export default {
        data: function () {
            return {
                fieldsData: [
                    {
                        itemKey:'',
                        itemValue:'',
                        errorMsg:'',
                    },
                    {
                        itemKey:'',
                        itemValue:'',
                        errorMsg:'',
                    },
                    {
                        itemKey:'',
                        itemValue:'',
                        errorMsg:'',
                    }
                ],
                defaultFieldsOptions: [
                    {
                        id: 1,
                        name: "بسته بندی",
                        description:'نوع بسته بندی و وزن ارایه شده توسط فروشنده برای این محصول',
                        itemValue:'',
                        alreadySelected:false,
                        selectedIndex:null,
                    },
                    {
                        id: 2,
                        name: "کیفیت",
                        description:'میزان مرغوبیت و کیفیت ظاهری محصول ارایه شده',
                        itemValue:'',
                        alreadySelected:false,
                        selectedIndex:null,
                    },
                    {
                        id: 3,
                        name: "رنگ",
                        description:'رنگ ظاهری این محصول',
                        itemValue:'',
                        alreadySelected:false,
                        selectedIndex:null,
                    },
                    {
                        id: 4,
                        name: "وزن",
                        description:'sdf sdfsadf',
                        itemValue:'',
                        alreadySelected:false,
                        selectedIndex:null,
                    },
                    {
                        id: 5,
                        name: "اندازه یا ابعاد",
                        description:'اندازه یا ابعاد محصول',
                        itemValue:'',
                        alreadySelected:false,
                        selectedIndex:null,
                    },
                    {
                        id: 6,
                        name: "گواهی کیفی،سلامت",
                        description:'تاییدیه های کیفی، بهداشتی و سلامت کالا موجود برای این محصول',
                        itemValue:'',
                        alreadySelected:false,
                        selectedIndex:null,
                    },
                    {
                        id: 7,
                        name: "تازگی",
                        description:'میزان تازه بودن و زمان تولید این محصول',
                        itemValue:'',
                        alreadySelected:false,
                        selectedIndex:null,
                    },
                    {
                        id: 8,
                        name: "نوع فروش",
                        description:'شرایط پرداخت پول در معامله طبق نظر فروشنده برای فروش این محصول',
                        itemValue:'',
                        alreadySelected:false,
                        selectedIndex:null,
                    },
                    {
                        id: 9,
                        name: "روش نگهداری یا ماندگاری",
                        description:'میزان ماندگاری و شرایط نگهداری این محصول',
                        itemValue:'',
                        alreadySelected:false,
                        selectedIndex:null,
                    },
                    {
                        id: 10,
                        name: "مزیا نسبت به محصولات مشابه",
                        description:'مزایا (مزیت این محصول نسبت به سایر محصولات مشابه)',
                        itemValue:'',
                        alreadySelected:false,
                        selectedIndex:null,
                    },

                ],
                selectedItems:[],
                fieldsOptions: "",
                itemsCount:3,
                itemValue:"",
                deletedRows:[],
            };
        },
        methods: {
            AddField: function () {
                let cnt = this.defaultFieldsOptions.length + this.deletedRows.length;

                if(this.fieldsData.length < cnt){
                    this.fieldsData.push({itemKey: '', itemValue: '',errorMsg:''});
                    this.itemsCount++;
                }
            },
            setItem:function(e){
                e.preventDefault();
                var itemKey = $(e.target).val();
                
                let itemKeyArray = itemKey.split('-');

                itemKey = itemKeyArray[0];
                let selectedIndex = itemKeyArray[1];
                
                this.fieldsData[selectedIndex].itemKey = itemKey;

                this.removeItemKeyFromList(itemKey,selectedIndex);
                
            },
            removeItemKeyFromList:function(itemKey,selectedIndex){   
                let selectedItem = this.defaultFieldsOptions.filter(function(el) { return el.name == itemKey})[0];
                
                let index = this.defaultFieldsOptions.findIndex((item) => itemKey === item.name);
                let tempIndex = this.defaultFieldsOptions.findIndex((item) => selectedIndex === item.selectedIndex);
                
                if(tempIndex !== -1){
                    (this.defaultFieldsOptions[tempIndex]).alreadySelected = false;
                    (this.defaultFieldsOptions[tempIndex]).selectedIndex = null;
                }

                if(selectedItem.alreadySelected == false){
                    (this.defaultFieldsOptions[index]).alreadySelected = true;
                    (this.defaultFieldsOptions[index]).selectedIndex = selectedIndex;
                }
            },
            appendFieldsDataToDescription:function(){
                return new Promise((resolve,reject) => {
                    let cnt = this.fieldsData.length;

                    let description = '<hr/>';

                    for(let i = 0 ; i < cnt ; i++){
                        if(this.fieldsData[i].itemValue){
                            let itemDescription = this.getItemDescription(this.fieldsData[i].itemKey);
                            itemDescription = itemDescription + ' : ' + this.fieldsData[i].itemValue + "<hr/>";
                            this.$parent.product.description = this.$parent.product.description.replace(itemDescription,""); //remove when text is duplicated
                            description = description + itemDescription ;
                        }
                    }
                    description = description + 'برای اطلاع از قیمت روز ' + this.$parent.product.product_name + ' و خرید مستقیم پیام ارسال کنید.' +  "<hr/>";
                    description = description + 'مقدار موجودی آماده فروش برای این محصول : ' + this.$parent.product.stock +  ' کیلوگرم' +  "<hr/>";
                    description = description + 'حداقل مقدار فروش این محصول توسط فروشنده در یک معامله : ' + this.$parent.product.min_sale_amount + ' کیلوگرم' +  "<hr/>";

                    this.$parent.product.description =  this.$parent.product.description + "\n\n" + description;

                    resolve(true);
                });
            },
            getItemDescription(itemKey){
                let index = this.defaultFieldsOptions.findIndex((item) => itemKey === item.name);

                return  (this.defaultFieldsOptions[index]).description;
            },
            submitProduct:function(){
                var self = this;
                this.validateItemValues();
                
                if(this.isItemValuesAreValidatedInputs() === true){
                    this.appendFieldsDataToDescription().then((result) => {
                        self.$parent.submitProduct();
                    });
                }
            },
            isItemValuesAreValidatedInputs:function(){
                let cnt = this.fieldsData.length;

                for(let i = 0; i < cnt; i++){
                    if(this.fieldsData[i].errorMsg){
                        return false;
                    }
                }

                return true;
            },
            itemValueValidator: function (itemValue) {
                let msg = '';

                if (!this.$parent.validateRegx(itemValue, /^(?!.*[(@#!%$&*)])[s\u{0600}-\u{06FF}\u{060C}\u{061B}\u{061F}\u{0640}\u{066A}\u{066B}\u{066C}\u{0E}_.-،:()A-Za-z0-9 ]+$/u)) {
                    msg = 'متن فرمت مناسبی ندارد';
                    return msg;
                }

                return true;
            },
            validateItemValues:function(){
                let cnt = this.fieldsData.length;
                for(let i = 0; i < cnt; i++){
                    this.fieldsData[i].errorMsg = '';

                    if(this.fieldsData[i].itemValue){
                        let result = this.itemValueValidator(this.fieldsData[i].itemValue);
                        if(result !== true){
                            this.fieldsData[i].errorMsg = result;
                        }
                    }
                    else if(this.fieldsData[i].itemKey){
                        this.fieldsData[i].errorMsg = 'این فیلد نمی تواند خالی باشد';
                    }
                }
            },
            deleteRow:function(itemKey,rowId){
                if(itemKey !== ''){
                    let i = this.fieldsData.findIndex((item) => itemKey === item.itemKey);
                    let selectedItem = this.defaultFieldsOptions.filter(function(el) { return el.name == itemKey})[0];
                    
                    let myIndex = this.defaultFieldsOptions.findIndex((item) => itemKey === item.name);

                    if(selectedItem.alreadySelected === true){
                        this.defaultFieldsOptions[myIndex].alreadySelected = false;
                        this.defaultFieldsOptions[myIndex].selectedIndex = null;
                    }
                    
                    //back to default
                    this.fieldsData[i].itemKey = '';
                    this.fieldsData[i].itemValue = '';
                    this.fieldsData[i].errorMsg = '';

                    this.deletedRows.push(rowId);
                }
            },
            isValidRow(index){
                if(this.deletedRows.findIndex((item) => item == index) === -1) return true;
                else return false;
            }
        },
        mounted: function () {
            //this.manageFieldsOption();
        },
        watch:{
            fieldsData:{
                handler:function(value,oldValue){
                    //
                },
                deep:true
            }
        }
    };
</script>
