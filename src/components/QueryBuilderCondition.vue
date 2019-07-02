<template>
  <div class="contain_querybuilder">
    <div id="builderReport"></div>
    <!--<v-btn class="ml-0" id="btn-get">get Rules</v-btn>-->
  </div>
</template>

<script>
  import 'jQuery-QueryBuilder/src/scss/default.scss';
  // import 'bootstrap/dist/css/bootstrap.min.css'
  // import 'bootstrap/dist/css/bootstrap-theme.min.css'
  export default {
    name: "QueryBuilderCondition",
    data() {
      return {}
    },

    mounted() {
      let jQuery = $; // eslint-disable-line
      let rules_basic = {
        condition: 'AND',
        rules: [{
          id: 'price',
          operator: 'less',
          value: 10.25
        }, {
          condition: 'OR',
          rules: [{
            id: 'category',
            operator: 'equal',
            value: 2
          }, {
            id: 'category',
            operator: 'equal',
            value: 1
          }]
        }]
      };

      jQuery('#builderReport').queryBuilder({ // eslint-disable-line
        plugins: ['bt-tooltip-errors'],

        filters: [{
          id: 'name',
          label: 'Name',
          type: 'string'
        }, {
          id: 'category',
          label: 'Category',
          type: 'integer',
          input: 'select',
          values: {
            1: 'Books',
            2: 'Movies',
            3: 'Music',
            4: 'Tools',
            5: 'Goodies',
            6: 'Clothes'
          },
          operators: ['equal', 'not_equal', 'in', 'not_in', 'is_null', 'is_not_null']
        }, {
          id: 'in_stock',
          label: 'In stock',
          type: 'integer',
          input: 'radio',
          values: {
            1: 'Yes',
            0: 'No'
          },
          operators: ['equal']
        }, {
          id: 'price',
          label: 'Price',
          type: 'double',
          validation: {
            min: 0,
            step: 0.01
          }
        }, {
          id: 'id',
          label: 'Identifier',
          type: 'string',
          placeholder: '____-____-____',
          operators: ['equal', 'not_equal'],
          validation: {
            format: /^.{4}-.{4}-.{4}$/
          }
        }],

        rules: rules_basic
      });

      jQuery('#btn-reset').on('click', function() {
        jQuery('#builderReport').queryBuilder('reset');
      });

      jQuery('#btn-set').on('click', function() {
        jQuery('#builderReport').queryBuilder('setRules', rules_basic);
      });

      jQuery('#btn-get').on('click', function() {
        let result = jQuery('#builderReport').queryBuilder('getRules');

        if (!jQuery.isEmptyObject(result)) {
          console.log(JSON.stringify(result, null, 2)); // eslint-disable-line
        }
      });
    }
  }
</script>

<style>
  .query-builder, .query-builder * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .query-builder {
    font-family: sans-serif;
  }

  .query-builder .hide {
    display: none;
  }

  .query-builder .pull-right {
    float: right !important;
  }

  .query-builder .btn {
    text-transform: none;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }

  .query-builder .btn.focus, .query-builder .btn:focus, .query-builder .btn:hover {
    color: #333;
    text-decoration: none;
  }

  .query-builder .btn.active, .query-builder .btn:active {
    background-image: none;
    outline: 0px none;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.125) inset;
  }

  .query-builder .btn-success {
    color: #FFF;
    background-color: #5CB85C;
    border-color: #4CAE4C;
  }

  .query-builder .btn-primary {
    color: #FFF;
    background-color: #337AB7;
    border-color: #2E6DA4;
  }

  .query-builder .btn-danger {
    color: #FFF;
    background-color: #D9534F;
    border-color: #D43F3A;
  }

  .query-builder .btn-success.active, .query-builder .btn-success.focus,
  .query-builder .btn-success:active, .query-builder .btn-success:focus,
  .query-builder .btn-success:hover {
    color: #FFF;
    background-color: #449D44;
    border-color: #398439;
  }

  .query-builder .btn-primary.active, .query-builder .btn-primary.focus,
  .query-builder .btn-primary:active, .query-builder .btn-primary:focus,
  .query-builder .btn-primary:hover {
    color: #FFF;
    background-color: #286090;
    border-color: #204D74;
  }

  .query-builder .btn-danger.active, .query-builder .btn-danger.focus,
  .query-builder .btn-danger:active, .query-builder .btn-danger:focus,
  .query-builder .btn-danger:hover {
    color: #FFF;
    background-color: #C9302C;
    border-color: #AC2925;
  }

  .query-builder .btn-group {
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }

  .query-builder .btn-group > .btn {
    position: relative;
    float: left;
  }

  .query-builder .btn-group > .btn:first-child {
    margin-left: 0px;
  }

  .query-builder .btn-group > .btn:first-child:not(:last-child) {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .query-builder .btn-group > .btn:last-child:not(:first-child) {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  .query-builder .btn-group .btn + .btn, .query-builder .btn-group .btn + .btn-group,
  .query-builder .btn-group .btn-group + .btn, .query-builder .btn-group .btn-group + .btn-group {
    margin-left: -1px;
  }

  .query-builder .btn-xs, .query-builder .btn-group-xs > .btn {
    padding: 1px 5px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
  }
  .form-control {
    padding: 0px 10px !important;
    border: solid 1px rgba(0,0,0,0.12);
    outline: none !important;
    border-radius: 0px;
  }
  .query-builder .rules-group-container {
    background: none;
    border-color: rgba(0,0,0,0.12);
  }
  .query-builder .rule-value-container {
    padding-left: 10px;
  }
  .btn {
    outline: none !important;
  }
</style>
