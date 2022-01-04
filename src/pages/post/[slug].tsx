/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { GetStaticPaths, GetStaticProps } from 'next';
import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import { getPrismicClient } from '../../services/prismic';
import dateFormatter from '../../utils/dateFormatter';
import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const readTime = 0;

  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <div className={styles.imgContainer}>
        <img src={post.data.banner.url} alt="banner" />
      </div>
      <div className={styles.contentContainer}>
        <h1>{post.data.title}</h1>
        <main>
          <div className={styles.postInfo}>
            <span>
              <FiCalendar size={18} />
              <p>{post.first_publication_date}</p>
            </span>

            <span>
              <FiUser size={18} />
              <p>{post.data.author}</p>
            </span>

            <span>
              <FiClock size={18} />
              <p>4 min</p>
            </span>
          </div>

          {post &&
            post.data.content.map(content => (
              <div key={content.heading} className={styles.content}>
                <h2>{content.heading}</h2>
                <p>{content.body}</p>
              </div>
            ))}
        </main>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.subtitle', 'post.author'],
      pageSize: 10,
    }
  );

  return {
    paths: [
      {
        params: {
          slug: 'building-beautifull-web-application-with-tailwind-css',
        },
      },
    ],
    fallback: true, // true, false ou blocking
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID('post', String(slug), {});

  const post: Post = {
    first_publication_date: dateFormatter(response.first_publication_date),
    data: {
      title: response.data.title,
      banner: {
        url: response.data.banner.url,
      },
      author: response.data.author,
      content: [
        {
          heading: response.data.content[0].heading,
          body: response.data.content[0].body[0].text,
        },
        {
          heading: response.data.content[1].heading,
          body: response.data.content[1].body[0].text,
        },
      ],
    },
  };

  return {
    props: {
      post,
    },
    revalidate: 60 * 30, // 30 minutes
  };
};
