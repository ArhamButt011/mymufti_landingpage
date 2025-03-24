import { tw } from 'twind';
import Text from '../UI/Text';

const PricingTable = () => (
  <div className="bg-[#F9FDFC] px-7">
    <section className={tw(`w-full mx-auto max-w-[1230px] bg-[#38B89A] text-white shadow-inner pt-12 rounded-3xl`)}>
      <div className={tw(`relative  px-4 sm:px-6 lg:px-8 mb-24`)}>
        <div className={tw(`flex items-center justify-center text-center lg:flex-row`)}>
          <div className={tw(`lg:flex-1 lg:pr-8 py-8 px-6 md:px-0`)}>
            <Text as="h2" className={tw(`mb-6`)}>
              Get Started Now!!
            </Text>
            <p className={tw(`text-base leading-6 mb-8`)}>
              Start now by downloading the app and create your account on My Mufti with 2 steps
            </p>
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
  </div>
);

export default PricingTable;
