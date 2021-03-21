<template>
  <div>
    <b-form-input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Buscar Artículos"
      size="md" class="mr-sm-2" 
    />
    
    <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchQuery: '',
        articles: []
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery) {
          this.articles = []
          return
        }
        this.articles = await this.$content('articles')
          .limit(6)
          .search(searchQuery)
          .fetch()
      }
    }
  }
</script>

<style scoped>
ul{
    position: absolute;
    background-color: white;
    padding: 1rem;
    box-shadow: 0 0.25rem 0.25rem rgba(0,0,0,0.25);
    border-radius: 0.5rem;
}

ul > li {
  margin: 0 1rem;
}
</style>