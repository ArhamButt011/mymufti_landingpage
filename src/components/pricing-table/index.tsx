import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';

const features = [
  `Laboris nulla`,
  `Lorem pariatur nisi`,
  `Id aute amet pariatur`,
  `Do duis sint aliquip`,
  `Nostrud duis tempor`,
  `Consequat eiusmod`,
  `Reprehenderit`,
  `Adipisicing reprehenderit`,
];

const PricingTable = () => (
  <section className={tw(`bg-teal-600 text-white shadow-inner pt-12 mx-10 rounded-lg`)}>
    <div className={tw(`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24`)}>
      <div className={tw(`flex items-center justify-center text-center lg:flex-row`)}>
        <div className={tw(`lg:flex-1 lg:pr-8 py-8 px-6 md:px-0`)}>
          <h2 className={tw(`text-4xl lg:text-6xl font-bold mb-6`)}>Get Started Now!!</h2>
          <p className={tw(`text-base leading-6 mb-8`)}>
            Download the app and create your account in just 2 easy steps!
          </p>
          {/* <button className={tw(`text-dark font-sans font-medium py-2 px-4 border rounded`)}>
            Get  Started
          </button> */}
          <button
            className={tw(
              `bg-white text-teal-500 border-teal-500 rounded-full font-medium py-2 px-4 hover:bg-teal-500 hover:border-slate-100 hover:text-cyan-50`,
            )}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
