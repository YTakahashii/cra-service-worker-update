import React, { useState } from 'react';

export const SWUpdateDialog: React.FC<{ registration: ServiceWorkerRegistration }> = ({ registration }) => {
  const [show, setShow] = useState(!!registration.waiting);
  const style: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'green',
  };
  const handleUpdate = () => {
    registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
    setShow(false);
    window.location.reload();
  };

  return show ? (
    <div style={style}>
      <span>新しいバージョンがリリースされました。🎉</span>
      <button onClick={handleUpdate}>アップデート</button>
    </div>
  ) : (
    <></>
  );
};
