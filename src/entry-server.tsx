import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import AppServer from './AppServer';
import { LanguageProvider, type Language } from './hooks/useLanguage';
import { getPageSeoByPath, prerenderRoutes } from './lib/pageSeo';
export { SITE_URL } from './lib/siteConfig';
export { renderSeoBlock } from './lib/seo';

export { prerenderRoutes };

export const render = async (url: string, lang: Language = 'ar') => {
  const app = renderToString(
    <LanguageProvider initialLang={lang}>
      <StaticRouter location={url}>
        <AppServer />
      </StaticRouter>
    </LanguageProvider>,
  );

  return {
    app,
    seo: getPageSeoByPath(url, lang),
  };
};
