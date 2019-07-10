const wes = {
    first: 'Wes',
    last: 'Bos',
    links: {
      social: {
        twitter: 'https://twitter.com/wesbos',
        facebook: 'https://facebook.com/wesbos.developer',
      },
      web: {
        blog: 'https://wesbos.com'
      }
    }
  };
// Below is fine, but it can be improved:
//   const twitter = wes.links.social.facebook;

  const {twitter, facebook } = wes.links.social;