'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Button from '../button';
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group';
import Label from '@/components/UI/Label';
import Text from '@/components/UI/Text';

interface AskQuestionProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { category: string; question: string }) => void;
}

export function AskQuestion({ isOpen, onClose, onSubmit }: AskQuestionProps) {
  const [category, setCategory] = useState('others');
  const [question, setQuestion] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit({ category, question });
    setCategory('others');
    setQuestion('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 font-poppins">
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-lg md:w-[450px]">
        {/* Top Header */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-center w-full">Ask A Question</h3>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-black text-white"
          >
            <X size={16} />
          </button>
        </div>

        {/* Category Selection */}
        <div className="mb-4">
          <p className="mb-2 text-sm font-semibold">Question Category</p>
          <RadioGroup value={category} onValueChange={setCategory} className="flex gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="others"
                id="others"
                className="w-4 h-4 border-2 border-[#38B89A] rounded-full data-[state=checked]:bg-[#38B89A]"
              />
              <Label htmlFor="others" className="text-sm cursor-pointer font-medium">
                Others
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="general"
                id="general"
                className="w-4 h-4 border-2 border-[#38B89A] rounded-full data-[state=checked]:bg-[#38B89A]"
              />
              <Label htmlFor="general" className="text-sm cursor-pointer font-medium">
                General
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Question Textarea */}
        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold">Question</p>
          <textarea
            placeholder="Write what you want to ask?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="min-h-[120px] resize-none w-full border border-gray-300 rounded-xl p-4 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#38B89A]"
          />
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          className="w-full bg-[#38B89A] text-white py-3 rounded-lg hover:bg-[#2fae8e] transition"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
