import DefaultLayout from '@/components/Layout/DefaultLayout';
import Text from '@/components/UI/Text';

export default function TermsAndConditions() {
  return (
    <DefaultLayout>
      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        <div className="flex flex-col items-center text-center mb-8">
          <Text
            as="h1"
            className="font-Raleway font-bold text-[24px] sm:text-[36px] md:text-[52px] leading-tight mb-4"
          >
            <span className="text-emerald-500">Terms</span> and Conditions
          </Text>
          <Text
            as="p"
            className="font-Raleway sm:text-[15px] md:text-[22px] text-[#555]"
          >
            Welcome to the My Multi App! Before you start using our services, please take a moment to read and
            understand the following terms and conditions. By accessing the app, you agree to be bound by these terms.
            If you do not agree with any part of these terms, please do not use the app.
          </Text>
        </div>

        <div className="space-y-6 text-left sm:text-justify mt-15">
          {[
            {
              title: '1. User Eligibility:',
              body: 'You must be at least 16 years old to use the App. By using the app, you represent and warrant that you are of legal age in your jurisdiction to form a binding legal agreement.',
            },
            {
              title: '2. Account Registration:',
              body: 'To use the My Multi App, you may be required to create an account. You are responsible for providing accurate and complete information during the registration process. You are also responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
            },
            {
              title: '3. Appointments:',
              body: 'The My Multi App allows users to schedule appointments with Scholars. The availability of appointments is subject to the availability of the Scholar that you need to discuss with scholars yourself through their link we show to connect. We are not responsible for issues, events, and facilitates convenient appointments through our platform.',
            },
            {
              title: '4. Events:',
              body: 'Our platform offers direct access to esteemed Scholars for private consultations, fosters open dialogue through public discussions between you, updated on Islamic events, and facilitates convenient appointments.',
            },
            {
              title: '5. Public Questions:',
              body: 'Connect with experts, ask questions, and expand your knowledge effortlessly. Engage with the community, share opinions, and track the expiration of discussions effortlessly.',
            },
            {
              title: '6. User Conduct:',
              body: 'You agree to use the My Multi App in accordance with all applicable laws and regulations. You will not use the app to engage in any unlawful or prohibited activities.',
            },
          ].map((item, index) => (
            <div key={index}>
              <Text
                as="h3"
                className="font-Raleway font-semibold text-[#3A3A3A] text-[16px] sm:text-[20px] md:text-[22px] mb-2"
              >
                {item.title}
              </Text>
              <Text className="font-Raleway font-normal text-[14px] sm:text-[16px] md:text-[18px] text-[#4A4A4A]">
                {item.body}
              </Text>
            </div>
          ))}
        </div>
      </main>
    </DefaultLayout>
  );
}
