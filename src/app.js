import * as Sentry from '@sentry/browser';

Sentry.init({ dsn: 'https://38a23f19ebd247bc8c409c36a0052216@sentry.io/5178532' });

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
