import { Html, Head, Main, NextScript } from 'next/document'
import Layout from '@/components/common/Layout'

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <Layout>
          <Main />
        </Layout>
        <NextScript />
      </body>
    </Html>
  )
}
