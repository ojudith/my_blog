---
title: What is Vuex
read: 2 MIN READ
date: 2020-11-23T08:21:55.013Z
description: State management library in vuejs
tag: '#vue #vuex'
---
\#Introduction vuex is a [state management library](https://vuex.vuejs.org/guide/state.html#single-state-tree) for [vue](https://vuejs.org/) that makes it less cumbersome to share and distribute data within the vueJs application.

\#Prerequisites Basic knowledge of `Vue`is required

\#What next Without the `vuex`, we can simply distribute data between components using `props`, but as the application gets larger, managing data can be quite an handful.

To solve this problem, we make use of the vuex, here we have a centralized store, and from that store our components can access our state directly.

A typical `store` folder looks like this

```vue
  import Vue from 'vue'
  import Vuex from 'vuex'

  Vue.use(Vuex)

  export const= new 
  Vuex.Store({
   state:{
   },
   getters:{
   },
   mutations:{
   },
   actions:{
   }
})
```

**Store** : This holds out state in our application, and can be accessed using 

```
this.$store
```

**State** : This is the data that will shared in the application. so instead passing it via props. we can simply have it in our store and have our components access them directly.

**Getters**: [According to the Vuex documentation](https://vuex.vuejs.org/guide/getters.html), we think of getters as the computed property for store and it has an helper , which is the `mapGetters Helper` that simply takes out store getters to out component computed property.

**Mutations**: State can only be changed in a vuex store by commiting a mutation. A mutation cannot be called directly. Inorder to do so, you need to use `store.commit`. Instead of committing a mutation in a component methods, we simply  dispatch an action on the mutation.

**Actions** : Action commits a mutation using the `contex.commit` and dispatch the action using `store.dispatch`. We also have the mapAction helpers.

Understanding the basic concept of vuex can help us structure and maintain our code effectively

For further reading , [check out the vuex documentation to read more on the core and advance concepts of vuex](https://vuex.vuejs.org/#what-is-a-state-management-pattern)
