export default {

  apiEndpoint: 'https://cleanstart.cdn.prismic.io/api/v2',
  
  linkResolver(doc) {
    if (doc.type === 'page') return `/${doc.uid}`;
    if (doc.type === 'post') return `/blog/${doc.uid}`;
    return '/';
  },
};
