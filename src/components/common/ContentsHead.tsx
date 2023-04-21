import Head from 'next/head'

type ContentsHeadType = {
  title?: string
  description?: string
  url?: string
}

const ContentsHead = ({
  title = '',
  description = 'フロントエンドエンジニアによるアウトプットブログ。JavaScript、React、Next.jsなどの記事を提供します。',
  url
}: ContentsHeadType) => {
  return (
    <Head>
      <title>{title}HIROBLOG</title>

      <meta name="description" content={description} />

      <meta name="keywords" content="サンプル, ウェブサイト, キーワード" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${url}/sample-page`} />
      <meta property="og:image" content={`${url}/og.jpg`} />
      <meta property="og:site_name" content="サンプルウェブサイト" />
      <meta property="og:locale" content="ja_JP" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}sample-image.jpg`} />

      <link rel="icon" href={`${url}/favicon.ico`} />
    </Head>
  )
}

export default ContentsHead
