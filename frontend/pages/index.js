import strapi from "@/lib/strapi"

export async function getServerSideProps() {
  const articles = await strapi.find("articles");

  return {
    props: {
      articles,
    },
  };
}

export default function Home({ articles }) {
  if (!articles) return <div>Loading...</div>;
  return (
    <div>
      {articles.data.map((article) => (
        <div key={article.id}>
          <h2>{article.attributes.title}</h2>
          <p>{article.attributes.content}</p>
        </div>
      ))}
    </div>
  );
}
