import { css } from '@emotion/react';
import React from 'react';

type Props = {
  href: string;
  size?: number;
};

export const GithubRibbon: React.FC<Props> = ({ href, size = 149 }) => {
  const styles = {
    ribbon: css`
      position: fixed;
      top: 0;
      right: 0;
      z-index: 1;
    `,
    img: css`
      width: ${size}px;
    `,
  };

  return (
    <a css={styles.ribbon} href={href} target="_blank" rel="noreferrer">
      <img
        css={styles.img}
        loading="lazy"
        src={
          `https://github.blog/wp-content/uploads/2008/12/` +
          `forkme_right_darkblue_121621.png?resize=${size * 2}%2C${size * 2}`
        }
        className="attachment-full size-full"
        alt="Fork me on GitHub"
        data-recalc-dims="1"
      />
    </a>
  );
};
