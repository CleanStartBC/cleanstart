import React from 'react';
import {Helmet} from 'react-helmet';
import { RichText } from 'prismic-reactjs';

export default document =>
  <Helmet>
    <title>{RichText.asText(document.meta_title) || 'CleanStart'}</title>
    {document.meta_description ? <meta name="description" content={RichText.asText(document.meta_description)} /> : <meta name="description" content='CleanStart - Professional Junk and Rubbish Removal Services' /> }

    {document.og_image && <meta property="og:image" content={document.og_image.url} />}
    {document.og_title && <meta property="og:title" content={RichText.asText(document.og_title)} />}
    {document.og_description && <meta property="og:description" content={RichText.asText(document.og_description)} />}



  </Helmet>
