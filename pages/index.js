import Brands from '@components/Brands/Brands';
import Hero from '@components/Hero';
import { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import { dataCategories, products } from '../data';
import Product from '@components/Product';
export default function Home() {
  return (
    <Layout>
      <Hero dataCategories={dataCategories} />
      <Product products={products} />
    </Layout>
  );
}
