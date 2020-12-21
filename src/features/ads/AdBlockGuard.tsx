import { css } from '@emotion/react';
import { useAdBlockDetector } from 'adblock-detector-hook';
import React, { useCallback, useEffect, useState } from 'react';
import { ModalDialog } from '../components/ModalDialog/ModalDialog';

export const AdBlockGuard: React.FC = () => {
  const { detected } = useAdBlockDetector();
  const [isCautionDialogOpen, setIsCautionDialogOpen] = useState<boolean>(
    false,
  );

  useEffect(() => {
    if (detected) {
      setIsCautionDialogOpen(true);
    }
  }, [detected]);

  const onCloseButtonClicked = useCallback(() => {
    setIsCautionDialogOpen(false);
  }, []);

  const styles = {
    buttonRow: css`
      text-align: right;
    `,
    button: css`
      background: none;
    `,
  };

  return (
    <ModalDialog isOpen={isCautionDialogOpen}>
      <>
        <div>
          <p>We&apos;ve noticed that you are using an ad blocker.</p>
          <p>
            Please <b>disable your ad blocker for this site</b> and help us to
            provide free services.
          </p>
        </div>
        <div css={styles.buttonRow}>
          <button css={styles.button} onClick={onCloseButtonClicked}>
            Close
          </button>
        </div>
      </>
    </ModalDialog>
  );
};
