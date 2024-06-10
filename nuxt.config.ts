// nuxt.config.ts

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css'
        },
      ],
      script: [
        {
          src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
          integrity: 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj',
          crossorigin: 'anonymous'
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js',
          integrity: 'sha384-pzjw8f+ua7Kw1TIqcoFAG5m6bHgTc8sh4i/c8nT7xzH1QcKQd5rRz4p+cJ2oFQ4r',
          crossorigin: 'anonymous'
        },
        {
          src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
          integrity: 'sha384-B4gt1jrGC7Jh4Ag5k+8mG1TA6dU6tu6ugFm5rGe+VzFlNeF7tSazZt3itGAnFOpS',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
});
