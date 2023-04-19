import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

export const HeaderBadges = () => {
  return (
    <BrowserOnly>
      {() => (
        <div className="header-badges">
          <a className="header-badge" href={`https://github.com/DAOmasons/daomasons-docs/issues/new?title=Docs update request: ${new URL(window.location.href).pathname}&body=Source: ${window.location.href}%0A%0ARequest: (how can we help?)%0A%0ANote:, this issue will be closed with a templated response if it isn't a documentation update request.`}>
            <span className="badge-avatar emoji-avatar">💬</span>
            <span className="badge-label">Give feedback</span>
          </a>
        </div>
      )}
    </BrowserOnly>
  );
}