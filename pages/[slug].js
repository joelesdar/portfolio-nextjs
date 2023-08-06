// import { getFileBySlug, getFiles } from "../lib/mdx";
// import { MDXRemote } from "next-mdx-remote";

// export default function Post ({ source, frontMatter }) {
//   return <MDXRemote {...source} />;
// }

// export async function getStaticProps({ params }) {
//   const { source, frontmatter } = await getFileBySlug("posts", params.slug);

//   return {
//     props: {
//       source,
//       frontmatter: {
//         slug: params.slug,
//         ...frontmatter,
//       },
//     },
//   };
// }

// export async function getStaticPaths() {
//   const posts = await getFiles("posts");
//   const paths = posts.map((post) => ({
//     params: {
//       slug: post.replace(/\.mdx/, ""),
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }
