const type = "Jorge Santana - Creacódigos";
const url = "https://crecodigos.com";
const title = "Mi sitio web personal creado con @nuxt/content";
const description =
  "Mi sitio web personal creado con @nuxt/content";
const mainImage = "https://avatars.githubusercontent.com/u/50615503?s=400&u=d6ef3d6548024516b1ca246386958bf32843607c&v=4";

export default (meta) => {
    return [
      {
        hid: "description",
        name: "description",
        content: (meta && meta.description) || description,
      },
      {
        hid: "og:type",
        property: "og:type",
        content: (meta && meta.type) || type,
      },
      {
        hid: "og:url",
        property: "og:url",
        content: (meta && meta.url) || url,
      },
      {
        hid: "og:title",
        property: "og:title",
        content: (meta && meta.title) || title,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: (meta && meta.description) || description,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: (meta && meta.mainImage) || mainImage,
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: (meta && meta.url) || url,
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: (meta && meta.title) || title,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: (meta && meta.description) || description,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: (meta && meta.mainImage) || mainImage,
      },
    ];
  };