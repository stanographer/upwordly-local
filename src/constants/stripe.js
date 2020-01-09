export const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://upword.ly/payment'
    : 'http://localhost:9090/payment';

export const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === 'production'
    ? 'pk_test_uyA36GCHGFygoXQJu3gTPyy9007tRD1C9H'
    : 'pk_test_uyA36GCHGFygoXQJu3gTPyy9007tRD1C9H';
