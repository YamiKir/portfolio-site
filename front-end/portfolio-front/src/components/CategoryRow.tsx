import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

type Props = {
  title: string;
  items: {
    name: string;
    slug: string;
    image: string;
  }[];
};

const CategoryRow: React.FC<Props> = ({ title, items }) => {
  return (
    <div id={title} className={styles.row}>
      <h2 className={styles.rowTitle}>{title}</h2>
      <div className={styles.rowItems}>
        {items.map((item) => (
          <Link key={item.name} href={`/${item.slug}`} className={styles.card}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.cardImage}
            />
            <div className={styles.cardLabel}>{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryRow;
