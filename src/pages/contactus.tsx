'use client';

import type React from 'react';
import { tw } from 'twind';
import Page from '@/components/page';
import { useState } from 'react';
import DefaultLayout from '@/components/Layout/DefaultLayout';
import Text from '@/components/UI/Text';
import Label from '@/components/UI/Label';
import Button from '@/components/button';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      countryCode: '+1',
      phone: '',
      message: '',
    });
  };

  return (
    <DefaultLayout>
      <div className="bg-[#F9FDFC]">
        <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 `)}>
          <div className={tw(`text-center mb-12`)}>
            <Text as="h2" className={tw(``)}>
              Contact <span style={{ color: '#38b89a' }}>Us</span>
            </Text>
            <Text className={tw(`mt-4`)}>
              Feel free to contact us any time. We will get back to you as soon as we can.
            </Text>
          </div>

          <div className={tw(`flex flex-col md:flex-row gap-8 items-stretch`)}>
            {/* Left side - Image */}
            <div className={tw(`w-full md:w-1/2 flex items-center`)}>
              <div className={tw(`w-full flex items-center`)}>
                <img src="/images/contact-us.svg" alt="Contact Us" className={tw(`w-full h-auto object-contain`)} />
              </div>
            </div>

            {/* Right side - Form */}
            <div className={tw(`w-full md:w-1/2`)}>
              <form onSubmit={handleSubmit} className={tw(`space-y-6`)}>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className={tw(
                      `w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent`,
                    )}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="user@gmail.com"
                    required
                    className={tw(
                      `w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent`,
                    )}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone number</Label>
                  <div className={tw(`flex`)}>
                    <select
                      className={tw(
                        `inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-700 rounded-l-md focus:ring-2 focus:ring-teal-500 focus:outline-none`,
                      )}
                      value={formData.countryCode || '+1'}
                      onChange={(e) => setFormData((prev) => ({ ...prev, countryCode: e.target.value }))}
                    >
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+91">+91</option>
                      <option value="+92">+92</option>
                      <option value="+61">+61</option>
                      <option value="+86">+86</option>
                      <option value="+33">+33</option>
                      <option value="+49">+49</option>
                      <option value="+81">+81</option>
                      <option value="+7">+7</option>
                      <option value="+966">+966</option>
                      <option value="+971">+971</option>
                      <option value="+20">+20</option>
                      <option value="+27">+27</option>
                      <option value="+55">+55</option>
                      <option value="+52">+52</option>
                      <option value="+65">+65</option>
                      <option value="+60">+60</option>
                      <option value="+64">+64</option>
                      <option value="+31">+31</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0000000000"
                      className={tw(
                        `flex-1 px-4 py-2 border border-gray-300 focus:outline-none rounded-r-md focus:ring-2 focus:ring-teal-500 focus:border-transparent`,
                      )}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={tw(`block text-sm font-medium text-gray-700 mb-1`)}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={5}
                    required
                    className={tw(
                      `w-full px-4 py-2 border border-gray-300 focus:outline-none rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent`,
                    )}
                  />
                </div>

                <div className={tw(`flex justify-start`)}>
                  <Button
                    type="submit"
                    // className={tw(
                    //   `bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-8  transition-colors duration-300`,
                    // )}
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ContactUs;
