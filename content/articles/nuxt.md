---
title: Nuxt
description: Learning how to use @nuxt/content to create a blog
img: first-blog-post.jpg
alt: my first blog post
author:
  name: Jorge Santana
  bio: Full Stack Developer & PizzaBurger Maker 🖥️ 🍕 🍔 🎸
  img: https://avatars.githubusercontent.com/u/50615503?s=400&u=d6ef3d6548024516b1ca246386958bf32843607c&v=4
---
# Chuleta Nuxt.js
https://es.nuxtjs.org/

## nuxt.config.js

Usar variables de entorno `.env`
```
npm install @nuxtjs/dotenv
```
En `nuxt.config.js` añadir:
```js
export default {
...
  buildModules: [
    // Simple usage
    '@nuxtjs/dotenv',
    // With options
    //['@nuxtjs/dotenv', { /* module options */ }]
  ],
...
}
```
Generar contenido estático de página dinámica `_id.vue`:
```js
const axios = require('axios');
export default {
  ...
  generate: {
    routes() {
      return axios.post('https://api.url.com/elemento/get').then(res => {
        return res.data.data.map(value => {
          return '/page/' + value.id
        })
      })
    }
  }
   ...
}
```

## Componentes

Definir data reactiva:
```js
<script>
export default {
    data() {
        return {
            titulo: "titulo reactivo",
            descripcion: "descripción reactiva"
        }
      }
    }
</script>
```
Definir Layaout a utilizar:
```js
<script>
export default {
  name: 'Componente',
  layout: 'nombre_del_layout'
}
</script>
```

Importar métodos globales:
```js
<script>
import utilsMethods from '@/helpers/utils.js';

export default {
    methods: {
        ...utilsMethods,
        metodoPropio(){
          console.log("método propio");
        }
    }
</script>
```

Definir elementos del head html:

```js
<script>
export default {
    head() {
        return {
            title: this.titulo,
                meta: [
                    {
                        hid    : 'description',
                        name   : 'description',
                        content: this.descripcion
                    }
                ]
            }
    }
}
</script>
```

Validar parámetros enviados por get _id.vue:

```js
<script>
export default {
    validate ({ params }) {
        return /^\d+$/.test(params.id)
    }
}
</script>
```

#### Props
```js
<script>
export default {
    ...
    props: {
      red: {
        type: String,
        required: true,
        validate: (value) => ['google','twitter','facebook'].includes(value) // Comprueba que exista en el array
      }
    }
    ...
}
</script>
```

### Loading()
https://es.nuxtjs.org/guides/features/loading

Creando componente LoadingBar.vue
```js
<template>
    <div v-if="loading" class="loading-page">
        <div class="loader-eclipse">
            <div class="loader-content"></div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: false
    }),
    methods: {
        start() {
          this.loading = true
        },
        finish() {
          this.loading = false
        }
    }
}
</script>

<style scoped>

    .loading-page {
        position   : fixed;
        top        : 0;
        left       : 0;
        width      : 100%;
        height     : 100%;
        background : rgba(255, 255, 255, 0.8);
        text-align : center;
        font-size  : 30px;
        font-family: sans-serif;
        z-index    : 999999;
    }

</style>
```
Definiendo componente LoadingBar.vue
```js
// nuxt.config.js
...
loading: '~/components/LoadingBar.vue',
...
```

Definiendo acciones para lanzar el loader por defecto según conveniencia con `this.loading()`y `this.loaded()`

```js
// utils.js
export default{
  ...
    // LOADERS
    loading(){
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
        });
    },
    loaded(){
        this.$nextTick(() => {
            this.$nuxt.$loading.finish()
        });
    }
    ...
 }
```
Navegar por las rutas desde nuxt

https://es.nuxtjs.org/docs/2.x/features/nuxt-components/

```js
this.$router.push("/dashboard");
```

```js
<NuxtLink to="/about" no-prefetch>Página About sin prefetching</NuxtLink>
<NuxtLink to="/about" :prefetch="false">Página About sin prefetching | Preacheada</NuxtLink>
```
