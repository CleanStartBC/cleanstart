import React from 'react';
import {Helmet} from 'react-helmet';
import { RichText } from 'prismic-reactjs';

export default document =>
  <Helmet>
    <title>{RichText.asText(document.meta_title) || 'CleanStart'}</title>
    {document.meta_description ? <meta name="description" content={RichText.asText(document.meta_description)} /> : <meta name="description" content='CleanStart - Professional Junk and Rubbish Removal Services' /> }
  </Helmet>
