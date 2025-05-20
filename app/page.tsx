'use client'

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Zentoric - No-Code AI Model Training Platform</title>
        <meta name="description" content="Train and deploy custom AI models without machine learning expertise. Zentoric's no-code platform makes AI accessible to everyone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}