'use client';

import type React from 'react';
import { useRef, useEffect, useState } from 'react';
import { tw } from 'twind';
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

  const [imageHeight, setImageHeight] = useState<number | null>(null);
  const [errors, setErrors] = useState<any>({});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      setImageHeight(formRef.current.offsetHeight);
    }
  }, [formData]); // re-run if form content changes

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const validationErrors: any = {};
    if (!formData.name) validationErrors.name = 'Name is required.';
    if (!formData.email) validationErrors.email = 'Email is required.';
    if (!formData.phone) validationErrors.phone = 'Phone number is required.';
    if (!formData.message) validationErrors.message = 'Message is required.';

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      validationErrors.email = 'Email must be a valid Gmail address ending with @gmail.com.';
    }

    const phoneRegex = /^\d{10}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      validationErrors.phone = 'Phone number must be exactly 10 digits.';
    }

    const wordCount = formData.message.trim().split(/\s+/).length;
    if (formData.message && wordCount > 200) {
      validationErrors.message = 'Message cannot exceed 200 words.';
    }

    // If there are validation errors, update the errors state and stop submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If no errors, proceed with form submission
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: `${formData.countryCode} ${formData.phone}`,
      message: formData.message,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert('Thank you for your message. We will get back to you soon!');
        setFormData({
          name: '',
          email: '',
          countryCode: '+1',
          phone: '',
          message: '',
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <DefaultLayout>
      <div className="bg-[#F9FDFC]">
        <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12`)}>
          <div className={tw(`text-center mb-10`)}>
            <Text as="h2">
              <span style={{ color: '#38b89a' }}>Contact</span> Us
            </Text>
            <Text className={tw(`mt-4 max-w-2xl mx-auto`)}>
              Feel free to contact us any time. We will get back to you as soon as we can.
            </Text>
          </div>

          <div className={tw(`flex flex-col md:flex-row gap-y-10 md:gap-x-8 items-start`)}>
            {/* Image Section */}
            <div className={tw(`w-full md:w-1/2`)}>
              <div style={{ height: imageHeight ?? 'auto' }}>
                <img
                  src="/images/contact-us.svg"
                  alt="Contact Us"
                  className={tw(`w-full h-full object-cover rounded-md shadow-sm`)}
                />
              </div>
            </div>

            {/* Form Section */}
            <div className={tw(`w-full md:w-1/2`)}>
              <form ref={formRef} onSubmit={handleSubmit} className={tw(`space-y-5`)}>
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
                      `w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 
                      ${errors.name ? 'border-red-500' : ''}`
                    )}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="User@gmail.com"
                    required
                    className={tw(
                      `w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 
                      ${errors.email ? 'border-red-500' : ''}`
                    )}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone">Phone number</Label>
                  <div className={tw(`flex w-full`)}>
                    <select
                      className={tw(
                        `px-2 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-700 
                        rounded-l-md focus:ring-2 focus:ring-teal-500 focus:outline-none w-20 mx-auto`
                      )}
                      value={formData.countryCode}
                      onChange={(e) => setFormData((prev) => ({ ...prev, countryCode: e.target.value }))}
                    >
                      {["+1", "+44", "+91", "+92", "+61", "+86", "+33", "+49", "+81", "+7", "+966", "+971", "+20", "+27", "+55", "+52", "+65", "+60", "+64", "+31"].map(code => (
                        <option key={code} value={code}>{code}</option>
                      ))}
                    </select>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0000000000"
                      className={tw(
                        `flex-1 px-4 py-2 border border-gray-300 
                        rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-500
                        ${errors.phone ? 'border-red-500' : ''}`
                      )}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={5}
                    required
                    className={tw(
                      `w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 
                      ${errors.message ? 'border-red-500' : ''}`
                    )}
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                <div className={tw(`pt-2`)}>
                  <Button type="submit" className={tw(`py-2 px-10`)}>
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
