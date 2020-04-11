---
title: v-if vs v-show
read: 2 MIN READ
date: 2020-04-11T10:41:45.406Z
description: Conditional rendering in vue
tag: '#vue #JavaScript #beginners #tutorial'
---


`v-if` & `v-show` are part of the in-built directive in [vue](https://vuejs.org/v2/guide/index.html), a **progressive framework** for building user interfaces.


Both directive play a very significant role when it comes to rendering data conditionally in [vue](https://vuejs.org/v2/guide/index.html).  Quite a few people may be able to spot out the difference as result of their experience over time with the directives.

But if paraventure , you happen not to understand this concept, this article got you covered.

**v-if**

With our basic knowledge of `JavaScript`, the `if` condition is not strange , with that being said, the `v-if` is a conditional directive in `vue` that is used to **add** or **remove** content from the [DOM](https://vuejs.org/v2/guide/render-function.html).  The content will only be rendered if the directive’s expression returns a truthy value.

```html
<p v-if ="true">Hello</>
<p v-if ="false">world</>

```
```
Hello
```
**v-show**

This is a conditional directive in `vue` that renders based on the CSS `display` property. 

In other words, it is used to **show** or **hide** content in the `DOM` . what this means is, whenever we want to change content frequently in our application, the `v-show` is very handy, for e.g a navbar toggle to show and hide menu bearing in mind that our content is still very much part of the `DOM`


```html
<p v-show="false">Hello</>
<p v-show ="true">world</>

```
```
world
```

To practice more , visit vue [documentation](https://vuejs.org/v2/guide/conditional.html#Conditional-Groups-with-v-if-on-lt-template-gt)

Code sandbox sample [demo](https://codesandbox.io/embed/github/ojudith/vue-in-action?codemirror=1) 


 
