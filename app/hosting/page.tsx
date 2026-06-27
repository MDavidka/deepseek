import type { Metadata } from 'next';
import { HostingPlans } from './hosting-plans';
import { CompareTable } from './compare-table';
import { HostingFAQ } from './hosting-faq';

export const metadata: Metadata = {
  title: 'Hosting Plans',
  description:
    'Compare Nivle hosting plans. From Starter to Enterprise — find the perfect fit for your project with transparent pricing and no hidden fees.',
};

export default function HostingPage() {
  return (
    <>
      <HostingPlans />
      <CompareTable />
      <HostingFAQ />
    </>
  );
}
