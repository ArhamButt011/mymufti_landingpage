import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import FeatureCards from '@/components/feature-cards'; 
import TrustedSourceSection from '@/components/Trusted-source-section'; 
import VideoSection from '@/components/video-section';
import AppFeaturesShowcase from "@/components/AppFeatureShowcase"
import PublicReviewSection from "@/components/PublicReview"
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="My Mufti"
        description="My Mufti is an intuitive web application designed to streamline and enhance the management of mufti (Islamic legal scholar) appointments and schedules. This platform caters specifically to Islamic scholars and institutions, offering a range of features that facilitate efficient scheduling, communication, and documentation."
      />
      <Header />
      <main>
        <FeatureCards />
        <TrustedSourceSection />
        <VideoSection />
        <AppFeaturesShowcase />
        <PublicReviewSection />
        {/* Frequently asked questions */}
        <ListSection />
        {/* recenty posted questions */}
        <CasesSection /> 
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
