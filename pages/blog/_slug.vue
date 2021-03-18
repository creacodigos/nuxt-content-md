<template>
  <article>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <img :src="article.img" :alt="article.alt" />
    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>

    <nuxt-content :document="article" />

    <author :author="article.author" />

    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta";

  export default {
    async asyncData({ $content, params }) {
        const article = await $content('articles', params.slug).fetch()

        const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

        return {
        article,
        prev,
        next
        }
    },
    head() {
      return {
        title: this.article.title,
        meta: [
          {
            hid: "description",
            name: "description",
            content: this.article.description,
          },
          {
            hid: "og:title",
            name: "og:title",
            content: this.article.title,
          },
          {
            hid: "og:description",
            name: "og:description",
            content: this.article.description,
          },
          {
            hid: "og:type",
            property: "og:type",
            content: "article",
          },
          {
            hid: "og:url",
            property: "og:url",
            content: `${this.$config.baseUrl}/blog/${this.$route.params.slug}`,
          },
          {
            hid: "twitter:url",
            name: "twitter:url",
            content: `${this.$config.baseUrl}/blog/${this.$route.params.slug}`,
          },
          {
            hid: "twitter:title",
            name: "twitter:title",
            content: this.article.title,
          },
          {
            hid: "twitter:description",
            name: "twitter:description",
            content: this.article.description,
          },
          {
            hid: "twitter:image",
            name: "twitter:image",
            content: this.article.image,
          },
          {
            hid: "og:image",
            property: "og:image",
            content: this.article.image,
          },
          {
            property: "article:published_time",
            content: this.article.createdAt,
          },
          {
            property: "article:modified_time",
            content: this.article.updatedAt,
          },
          {
            property: "article:tag",
            content: this.article.tags ? this.article.tags.toString() : "",
          },
          { name: "twitter:label1", content: "Written by" },
          { name: "twitter:data1", content: "Jorge Creacódigos" },
          { name: "twitter:label2", content: "Filed under" },
          {
            name: "twitter:data2",
            content: this.article.tags ? this.article.tags.toString() : "",
          },
        ],
        link: [
          {
            hid: "canonical",
            rel: "canonical",
            href: `${this.$config.baseUrl}/blog/${this.$route.params.slug}`,
          },
        ],
      };
    },
    methods: {
        formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
        }
    },
    computed: {
      meta() {
        const metaData = {
          type: "article",
          title: this.article.title,
          description: this.article.description,
          url: `${this.$config.baseUrl}/blog/${this.$route.params.slug}`,
          mainImage: this.article.image,
        };
        return getSiteMeta(metaData);
      }
    }
  }
</script>

<style>
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }

  .icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>