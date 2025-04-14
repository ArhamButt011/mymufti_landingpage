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
            <span className="text-emerald-500">Privacy</span> Policy
          </Text>
          <Text as="p" className="font-Raleway sm:text-[15px] md:text-[22px] text-[#555]">
            Welcome to My Mufti App. We are committed to protecting your privacy and providing a safe online environment
            for users of our services. This Privacy Policy outline show we collect, use, disclose, and manage your
            personal information when you use our App. By accessing or using the App, you agree to the terms of this
            Privacy Policy. If you do not agree with any aspect of this Privacy Policy, please do not use the App.
          </Text>
        </div>

        <div className="space-y-6 text-left sm:text-justify mt-15">
          {[
            {
              title: '1. Information We Collect:',
              body:
              <>
              <strong>Information You Provide: </strong> When you use our App, you may provide us with personal information, including but not limited to your name, email address, username, and any other information you choose to share when interacting with the App's features. 
              <br />
              <strong>Information We Collect Automatically: </strong> We may collect certain information automatically when you use the App, such as your device type, IP address, browsing activity, and usage patterns.
              </>
            },
            {
              title: '2. How We Use Your Information:',
              body:
              <> 
                <strong>We may use the information we collect for the following purposes:</strong> To provide and maintain the App's functionality. To personalize your experience and improve our services. To communicate with you, respond to your inquiries, and provide customer support. To analyze usage trends and optimize the performance of the App. To comply with legal obligations and enforce our policies.
              </>
            },
            {
              title: '3. Disclosure of Your Information:',
              body:
              <>
                <strong>We may disclose your personal information in the following circumstances:</strong> To our trusted service providers who assist us in operating the App and providing our services. To comply with legal requirements, such as responding to subpoenas or court orders. To protect our rights, property, or safety, and the rights, property, or safety of others.
              </>
              },
            {
              title: '4. User Contributions:',
              body:
                'Our App allows users to ask public questions to scholars, who may reply once as scholars, and users can comment on these interactions. Additionally, users can ask private questions directly to specific scholars. We do not disclose private questions or discussions unless required by law or with your consent.',
            },
            {
              title: '5. Book Appointments:',
              body:
                'Users can book appointments with scholars through our App. We collect and process the necessary information to facilitate these appointments and ensure a smooth scheduling process.',
            },
            {
              title: '6. Security Measures:',
              body:
                'We take reasonable precautions to protect the security of your personal information and implement appropriate technical and organizational measures to safeguard against unauthorized access, disclosure, alteration, or destruction.',
            },
            {
              title: '7. Children\'s Privacy:',
              body:
                'The App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information without your consent, please contact us, and we will take steps to remove such information from our systems.',
            },
            {
              title: '8. Changes to this Privacy Policy:',
              body:
                'We reserve the right to update or modify this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on this page. Your continued use of the App after any changes indicates your acceptance of the updated Privacy Policy.',
            },
            {
              title: '9. Contact Us:',
              body: (
                <>
                  If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at{' '}
                  <a href="mailto:info@gmail.com" className="text-blue-600">
                    info@gmail.com
                  </a>
                  . Thank you for using My Mufti.
                </>
              ),
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