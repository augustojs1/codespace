/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { LoadMoreButton } from '../components/LoadMoreButton';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Codespace</title>
      </Head>
      <main className={styles.homeContainer}>
        <article className={styles.post}>
          <h1>How to create a blog using Next.js and Prismic CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            amet quia?
          </p>
          <div className={styles.postInfo}>
            <span>
              <FiCalendar size={18} />
              <p>30 Dez 2021</p>
            </span>

            <span>
              <FiUser size={18} />
              <p>Augusto Souza</p>
            </span>
          </div>
        </article>
        <article className={styles.post}>
          <h1>How to create a blog using Next.js and Prismic CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            amet quia?
          </p>
          <div className={styles.postInfo}>
            <span>
              <FiCalendar size={18} />
              <p>30 Dez 2021</p>
            </span>

            <span>
              <FiUser size={18} />
              <p>Augusto Souza</p>
            </span>
          </div>
        </article>
        <article className={styles.post}>
          <h1>How to create a blog using Next.js and Prismic CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            amet quia?
          </p>
          <div className={styles.postInfo}>
            <span>
              <FiCalendar size={18} />
              <p>30 Dez 2021</p>
            </span>

            <span>
              <FiUser size={18} />
              <p>Augusto Souza</p>
            </span>
          </div>
        </article>
        <LoadMoreButton />
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
