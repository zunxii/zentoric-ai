'use client'

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import Pricing from '@/components/home/Pricing';
import FAQ from '@/components/home/FAQ';
import CTA from '@/components/home/CTA';

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Zentoric - No-Code AI Model Training Platform</title>
        <meta name="description" content="Train and deploy custom AI models without machine learning expertise. Zentoric's no-code platform makes AI accessible to everyone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}