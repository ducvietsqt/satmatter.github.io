<template>
  <v-card flat>
    <v-card-text>
      <p class="title">{{title}}</p>
      <v-card-actions class="pl-0">
        <!--<v-subheader>select all</v-subheader>-->
        <!--<v-subheader>clear all</v-subheader>-->
        <v-btn depressed class="text-capitalize ml-0" color="primary" dense>select all</v-btn>
        <v-btn depressed class="text-capitalize" color="primary" dense>clear all</v-btn>
      </v-card-actions>
    </v-card-text>
    <v-card-text class="py-0">
      <v-divider class="my-0"></v-divider>
    </v-card-text>
    <v-card-text>
      <v-treeview
        v-model="tree"
        :load-children="fetch"
        :items="items"
        activatable
        active-class="grey lighten-4 indigo--text"
        selected-color="indigo"
        open-on-click
        selectable
        open-all
        expand-icon=""
        on-icon="check_box"
        off-icon="check_box_outline_blank"
        indeterminate-icon="check_box_outline_blank"
        ref="treeScheme">
        <template v-slot:append="{ item, open }">
          <v-icon class="pa-0 ml-2" v-if="item.children && !item.type || item.type === 'root'" @click="clickIcon">
            {{open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}
          </v-icon>
        </template>
        <template v-slot:label="{ item, open, leaf }">
          <div class="lab_icon">
            <span>
              {{item.name}}
              <strong>{{leaf}}</strong>
              <!--{{open}}-->
            </span>
            <!--<v-icon class="pa-0 ml-2" v-if="item.children && !item.type" @click="clickIcon">keyboard_arrow_down</v-icon>-->
          </div>
        </template>
      </v-treeview>
    </v-card-text>
  </v-card>
</template>

<script>
  // import {listCategoryScheme} from './schemeCategoryList'

  export default {
    name: "TreeSchemeByCategory",
    metaInfo: {
      title: "Category"
    },
    props: {
      title: {
        type: String,
        required: true
      },
      list: {
        type: Array,
        required: true
      }
    },
    data: () => ({
      breweries: [],
      isLoading: false,
      tree: [],
      types: []
    }),

    computed: {
      items() {
        const children = this.types.map(type => ({
          id: type,
          name: this.getName(type),
          children: this.getChildren(type)
        }));
        // console.log('XXX',children);
        // return children;
        /*return [
          {children}
        ]*/
        return [{
          id: 0,
          name: 'All',
          type: 'root',
          children
        }]
      },
      selections() {
        const selections = [];
        for (const leaf of this.tree) {
          const brewery = this.breweries.find(brewery => brewery.id === leaf);
          if (!brewery) continue;
          selections.push(brewery)
        }

        return selections
      },
      shouldShowTree() {
        return this.breweries.length > 0 && !this.isLoading
      }
    },

    watch: {
      breweries(val) {
        this.types = val.reduce((acc, cur) => {
          const type = cur.brewery_type;
          if (!acc.includes(type)) acc.push(type);
          return acc
        }, []).sort()
      }
    },

    methods: {
      async fetch() {
        if (this.breweries.length) return;
        return new Promise((resolve) => {
          this.breweries = this.list;
          resolve(this.list);
        });
      },
      getChildren(type) {
        const breweries = [];

        for (const brewery of this.breweries) {
          if (brewery.brewery_type !== type) continue;
          breweries.push({
            ...brewery,
            name: this.getName(brewery.name)
          })
        }

        return breweries.sort((a, b) => {
          return a.name > b.name ? 1 : -1
        })
      },
      getName(name) {
        return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
      },
      getTree() {
        console.log(this.$refs.treeScheme); // eslint-disable-line
        console.log(this.tree); // eslint-disable-line
      },
      clickIcon() {
        console.log(1); // eslint-disable-line
      }
    }
  }
</script>

<style scoped>
  .lab_icon {
    display: flex;
    align-items: center;
  }
</style>
