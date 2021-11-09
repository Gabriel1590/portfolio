import config from 'data/config';
import { NextSeo } from 'next-seo';

const { url, defaultDescription, defaultTitle } = config;

const SEO = ({ location = url, title = defaultTitle, description = defaultDescription }) => (
  <NextSeo
    title={title}
    description={description}
    additionalMetaTags={[
      {
        name: 'image',
        content: `${url}/assets/thumbnail/thumbnail.png`,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:url',
        content: `${url}${location}`,
      },
      {
        property: 'og:image',
        content: `${url}/assets/thumbnail/thumbnail.png`,
      },
    ]}
  />
);

export default SEO;
