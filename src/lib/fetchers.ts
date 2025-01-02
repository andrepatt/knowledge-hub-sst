import { getCollection } from "astro:content";

export async function getCategories() {
  const posts = await getCollection("blog");
  const categories = [
    ...new Set(posts.map((post) => post.data.category).flat()),
  ];

  return categories;
}

export async function getPosts() {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return posts;
}

export async function getPostsByCategory(category: string) {
  const posts = (await getCollection("blog"))
    .filter((post) => post.data.category.includes(category))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return posts;
}

export async function getGuides() {
  const guides = (await getCollection("guides"))
    .filter((guide) => guide.data.published)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return guides;
}

export async function getTools() {
  const guides = (await getCollection("tools"))
    .filter((guide) => guide.data.published)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return guides;
}

export async function getAppsCategories() {
  const posts = await getCollection("apps");
  const categories = [
    ...new Set(posts.map((post) => post.data.category).flat()),
  ];

  return categories;
}

export async function getApps() {
  const posts = (await getCollection("apps")).sort((a, b) =>
    a.data.title.localeCompare(b.data.title)
  );

  return posts;
}

export async function getAppsByCategory(category: string) {
  const posts = (await getCollection("apps"))
    .filter((post) => post.data.category.includes(category))
    .sort((a, b) => a.data.title.localeCompare(b.data.title));

  return posts;
}


export async function getCategoriesProject() {
  const posts = await getCollection("projects");
  const categories = [
    ...new Set(posts.map((post) => post.data.category).flat()),
  ];

  return categories;
}

export async function getProjects() {
  const posts = (await getCollection("projects")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return posts;
}

export async function getProjectsByCategory(category: string) {
  const posts = (await getCollection("projects"))
    .filter((post) => post.data.category.includes(category))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return posts;
}