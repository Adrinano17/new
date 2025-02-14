import React from 'react';
import Layout from '../components/Layout';
import JourneyTimeline from '../components/JourneyTimeline';
import ShopSection from '../components/ShopSection';

export default function Home() {
  return (
    <Layout>
      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-tech-secondary p-6 rounded-lg">
          <h1 className="text-3xl font-bold text-tech-primary mb-4">
            My Tech Journey
          </h1>
          <JourneyTimeline />
        </section>
        
        <section className="bg-football-grass p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Shop My Experiences
          </h2>
          <ShopSection />
        </section>
      </div>
    </Layout>
  );
}