import Head from 'next/head'
import { SITE_DATA } from '@/data/config'

export type PropTypes = {
  title?: string
  description?: string
  keywords?: string
  noIndex?: boolean
  ogUrl?: string
}

const PageHead = ({
  title = '',
  description = SITE_DATA.description,
  keywords = '',
  noIndex = true,
  ogUrl = ''
}) => {
  const siteName = SITE_DATA.title
  const path = SITE_DATA.path
  const titleText = title ? `${title} | ${siteName}` : siteName

  return (
    <Head>
      <title>{titleText}</title>
      <meta
        name="robots"
        content={noIndex ? 'noindex,nofollow' : 'index,follow'}
      />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={ogUrl || path} />
      <meta name="twitter:image" content={`${path}images/OG.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl || path} />
      <meta property="og:image" content={`${path}images/OG.jpg`} />
      <meta property="mixi:image" content={`${path}images/OG.jpg`} />
    </Head>
  )
}

export default PageHead
