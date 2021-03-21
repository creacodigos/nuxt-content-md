<template>
  <div class="author">
    <NuxtLink :to="`/blog/author/${author.name}`">
    <img :src="author.img" />
    <div>
        <h4>Author</h4>
        <p>{{ author.name }}</p>
        <p>{{ author.bio }}</p>
    </div>
    </NuxtLink>
  </div>
</template>

<script>
  export default {
    props: {
      author: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
.author {
    padding: 1rem;
    margin: 1rem auto;
    border-radius: 0.5rem;
    box-shadow: 0.25rem 0.25rem 0.75rem rgba(0,0,0,0.10);
}
.author > a{
  display: flex;
}
img{
  width: 100px;
  margin-right: 1rem;
}
</style>