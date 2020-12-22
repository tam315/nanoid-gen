import { css } from '@emotion/react';
import React from 'react';

type Props = {
  href: string;
};

export const GithubRibbon: React.FC<Props> = ({ href }) => {
  const styles = {
    ribbon: css`
      position: fixed;
      top: 0;
      right: 0;
    `,
  };

  return (
    <a css={styles.ribbon} href={href} target="_blank" rel="noreferrer">
      <img
        loading="lazy"
        width="149"
        height="149"
        src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
        className="attachment-full size-full"
        alt="Fork me on GitHub"
        data-recalc-dims="1"
      />
    </a>
  );
};
