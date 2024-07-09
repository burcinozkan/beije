// src/pages/index.tsx

import Head from 'next/head';
import Layout from '../components/layout';
import PacketBuilder from '../components/PacketBuilder';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Kendi Paketini Oluştur | beije.</title>
        <meta name="description" content="Beije ürünleri ile kendi özel paketinizi oluşturun." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <PacketBuilder />
      
      </main>
    </Layout>
  );
};

export default Home;
