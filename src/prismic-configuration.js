export default {

  accessToken: 'MC5YT1RvVlJJQUFDTUFSMm9z.Hu-_ve-_vT7vv73vv708Su-_vSNMeO-_ve-_ve-_vUAg77-977-977-977-9W--_ve-_ve-_vRZ677-977-977-9SGU',
  apiEndpoint: 'https://cleanstart.cdn.prismic.io/api/v2',

  linkResolver(doc) {
    if (doc.type === 'page') return `/${doc.uid}`;
    if (doc.type === 'post') return `/blog/${doc.uid}`;
    return '/';
  },
};
