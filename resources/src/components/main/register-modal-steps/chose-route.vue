<style scoped>
p,
span {
  line-height: 1.5;
}

.from-wrapper {
  max-width: 510px;
  margin: 44px auto 70px;
  overflow: hidden;
  padding-top: 5px;
}

.title-contents {
  font-weight: 500;
  font-size: 18px;
  color: #555;
  margin-bottom: 16px;
}

.form-contents {
  line-height: 1.618;
}

.form-contents label {
  font-weight: 500;
  color: #777;
  margin: 0 auto 7px;
}

.input-wrapper {
  margin: 0 auto;
  position: relative;
}

.step-action {
  margin-top: 40px;
}
.submit-button {
  background: #e0e0e0;
  color: #fff;
  border: none;
  border-radius: 8px;
  width: 100%;
  font-size: 18px;
  padding: 8px;
  transition: 150ms;
  cursor: default;
  max-width: 147px;
  display: inline-block;
}

.submit-button.back-button {
  background: #fff;
  color: #909090;
  border: 1px solid #bebebe;
  cursor: pointer;
  max-width: 127px;
}

.submit-button.active {
  background: #00c569;
  cursor: pointer;
}
.submit-button.active:hover i {
  right: 3px;
  transition: 150ms;
}

.submit-button i {
  position: relative;
  top: 1px;
  font-size: 14px;
  right: 0;
  transition: 150ms;
}

.submit-button i {
  position: relative;
  top: 1px;
  font-size: 14px;
  right: 0;
  transition: 150ms;
}

.item-button-wrapper button {
  position: relative;
  top: 0;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: 150ms;
  background: #556080;
  border: none;
  border-radius: 12px;
  color: #fff;
  width: 100%;
  text-align: center;
  padding: 20px 0 15px;
}

.item-button-wrapper button:hover {
  top: -5px;
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);
  transition: 150ms;
}

.item-button-wrapper button img {
  width: 50px;
  height: 50px;
  margin: -1px auto 0;
  display: block;
}

.item-button-wrapper button .title {
  display: block;
  margin-top: 10px;
}

.item-button-wrapper button .title {
  font-weight: 500;
  font-size: 23px;
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  margin: 0 auto;
}

@media screen and (max-width: 991px) {
  .col-xs-6.item-button-wrapper {
    padding: 5px;
  }
  .item-button-wrapper button .title {
    font-size: 20px;
  }
}
</style>

<template>
  <div class="text-rtl from-wrapper">
    <div class="form-contents col-xs-12">
      <div class="row">
        <div class="col-xs-6 item-button-wrapper pull-right">
          <button @click.prevent="nextStep(1)">
            <div class="icon-wrapper">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                width="25.054"
                height="35"
                viewBox="0 0 25.054 35"
              >
                <path
                  id="Path_7"
                  data-name="Path 7"
                  d="M22.579,17.947l-5.452-1.578a1.455,1.455,0,0,1-.283-.117.476.476,0,0,0-.229-.15,1.482,1.482,0,0,1-.554-1.151V13.433A5.259,5.259,0,0,0,17.826,9.5V5.371a5.271,5.271,0,1,0-10.542,0V9.5a5.258,5.258,0,0,0,1.71,3.882V14.95a1.483,1.483,0,0,1-1.065,1.417L2.474,17.947A3.444,3.444,0,0,0,0,21.24v6.534a.482.482,0,1,0,.964,0V21.24a2.475,2.475,0,0,1,1.779-2.366l2.025-.585a.474.474,0,0,0,.038.045L7.4,20.926a1.975,1.975,0,0,0,2.548.213l.91-.648a1.736,1.736,0,0,0,.643,1.033L9.461,31.352A.752.752,0,0,0,9.642,32l2.039,2.71.044.051a1.172,1.172,0,0,0,1.656,0l.024-.024,2.063-2.74a.756.756,0,0,0,.176-.651l-2.033-9.82a1.736,1.736,0,0,0,.642-1.032l.91.648a1.974,1.974,0,0,0,2.548-.213L20.337,18.3l1.974.572a2.475,2.475,0,0,1,1.779,2.366v6.534a.482.482,0,1,0,.964,0V21.24A3.444,3.444,0,0,0,22.579,17.947ZM14.325,1.459c-.013-.012-.029-.023-.043-.034l.053.024ZM8.25,9.505V6.953q.266.025.533.025A5.632,5.632,0,0,0,12.76,5.339l1.446-1.446a2.191,2.191,0,0,1,1.137.666,3.408,3.408,0,0,0,1.52.881V9.5a4.307,4.307,0,1,1-8.614,0Zm4.307,5.271A5.238,5.238,0,0,0,15.1,14.12v.832a2.44,2.44,0,0,0,.588,1.582l-2.72,1.932a1.674,1.674,0,0,0-.829,0L9.388,16.508a2.44,2.44,0,0,0,.569-1.558v-.868a5.237,5.237,0,0,0,2.6.692ZM9.383,20.353a1.012,1.012,0,0,1-1.308-.11l-2.26-2.259L8.2,17.294a2.411,2.411,0,0,0,.408-.161l2.642,1.88c-.011.013-.022.023-.032.036Zm5.3,11.089-2,2.655a.206.206,0,0,1-.256,0l-2-2.655,1.979-9.559c.049,0,.1.008.148.008a.958.958,0,0,0,.148-.008Zm2.352-11.2a1.012,1.012,0,0,1-1.307.109l-1.832-1.3c-.01-.013-.021-.023-.032-.036l2.619-1.864a2.41,2.41,0,0,0,.377.145l2.427.7Z"
                  transform="translate(0 -0.1)"
                  fill="#313a43"
                />
                <path
                  id="Path_8"
                  data-name="Path 8"
                  d="M199.789,230.69a.469.469,0,0,0-.469.469v5.374a.469.469,0,0,0,.938,0v-5.374A.469.469,0,0,0,199.789,230.69Z"
                  transform="translate(-180.08 -208.317)"
                  fill="#313a43"
                />
                <path
                  id="Path_9"
                  data-name="Path 9"
                  d="M51.539,230.69a.469.469,0,0,0-.469.469v5.374a.469.469,0,0,0,.938,0v-5.374A.469.469,0,0,0,51.539,230.69Z"
                  transform="translate(-46.14 -208.317)"
                  fill="#313a43"
                />
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M102.622,98.852a3.045,3.045,0,0,0,2.813-1.935.469.469,0,1,0-.874-.34,2.082,2.082,0,0,1-3.887,0,.469.469,0,1,0-.874.34A3.045,3.045,0,0,0,102.622,98.852Z"
                  transform="translate(-90.068 -86.984)"
                  fill="#313a43"
                />
              </svg>
            </div>

            <span class="title"> خریدار هستم </span>
          </button>
        </div>

        <div class="col-xs-6 item-button-wrapper pull-right">
          <button @click.prevent="nextStep(0)">
            <div class="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25.05"
                height="30.893"
                viewBox="0 0 25.05 30.893"
              >
                <g id="Layer_1" data-name="Layer 1" transform="translate(0 0)">
                  <path
                    id="Path_11"
                    data-name="Path 11"
                    d="M22.575,19.873l-5.451-1.578a1.483,1.483,0,0,1-1.065-1.417V15.538a.482.482,0,0,0-.028-.154,5.258,5.258,0,0,0,1.79-3.953V9.075h3.9V7.726h-3.9V5.37a5.27,5.27,0,1,0-10.54,0V7.726H3.307v1.35H7.282v2.355A5.258,5.258,0,0,0,9.03,15.347a.482.482,0,0,0-.04.193v1.339A1.483,1.483,0,0,1,7.93,18.3L2.474,19.873A3.444,3.444,0,0,0,0,23.165V29.7a.482.482,0,0,0,.964,0V23.165A2.475,2.475,0,0,1,2.743,20.8l1.94-.559V30.27a.723.723,0,0,0,1.446,0V20.127a.719.719,0,0,0-.062-.289L7.918,19.3v2.217a2.3,2.3,0,0,0,2.33,2.257h4.531a2.3,2.3,0,0,0,2.33-2.257V19.293L19,19.84a.722.722,0,0,0-.023.178V30.27a.723.723,0,0,0,1.446,0V20.253l1.887.546a2.475,2.475,0,0,1,1.779,2.366V29.7a.482.482,0,1,0,.964,0V23.165A3.444,3.444,0,0,0,22.575,19.873ZM8.246,5.37a4.306,4.306,0,1,1,8.612,0V7.726H8.246Zm0,6.061V9.075h8.612v2.355a4.306,4.306,0,1,1-8.612,0Zm6.533,11.376H10.248a1.332,1.332,0,0,1-1.366-1.293v-2.62a2.453,2.453,0,0,0,1.072-2.018v-.868a5.254,5.254,0,0,0,5.14.031v.832a2.453,2.453,0,0,0,1.05,2v2.637a1.332,1.332,0,0,1-1.365,1.3Z"
                    transform="translate(0 -0.1)"
                    fill="#313a43"
                  />
                  <path
                    id="Path_12"
                    data-name="Path 12"
                    d="M102.181,118.824a3,3,0,0,0,2.772-1.906.462.462,0,1,0-.861-.335,2.051,2.051,0,0,1-3.83,0,.462.462,0,1,0-.861.335A3,3,0,0,0,102.181,118.824Z"
                    transform="translate(-89.668 -105.044)"
                    fill="#313a43"
                  />
                </g>
              </svg>
            </div>

            <span class="title"> خودم فروشنده هستم </span>
          </button>
        </div>
      </div>
      <div class="row"></div>
      <div class="step-action text-right">
        <button
          class="submit-button back-button"
          @click.prevent="$parent.currentStep--"
        >
          <i class="fa fa-arrow-right"></i>
          مرحله قبل
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nextStep(activity_type) {
      this.$parent.activity_type = activity_type;
      this.$parent.goToStep(5);
    },
  },
};
</script>
