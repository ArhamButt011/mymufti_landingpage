"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Button from '../button';
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"
import Label  from "@/components/UI/Label"
import Text from '@/components/UI/Text'


interface AskQuestionProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { category: string; question: string }) => void
}

export function AskQuestion({ isOpen, onClose, onSubmit }: AskQuestionProps) {
  const [category, setCategory] = useState("others")
  const [question, setQuestion] = useState("")

  if (!isOpen) return null

  const handleSubmit = () => {
    onSubmit({ category, question })
    setCategory("others")
    setQuestion("")
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg md:w-[450px]">
        <div className="mb-6 flex items-center justify-between">
          <Text as="h3" className="text-center">Ask A Question</Text>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mb-4">
          <Text as="p" className="mb-2 text-bold text-sm font-medium text-gray-700">Question Category</Text>
          <RadioGroup value={category} onValueChange={setCategory} className="flex gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="others" id="others" />
              <Label htmlFor="others" className="cursor-pointer">
                Others
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="general" id="general" />
              <Label htmlFor="general" className="cursor-pointer">
                General
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="mb-6">
          <Text as="p" className="mb-2 text-bold text-sm font-medium text-gray-700">Question</Text>
          <textarea
            placeholder="Write your question in detail..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="min-h-[120px] resize-none w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <Button onClick={handleSubmit} className="w-full py-3">
          Submit
        </Button>
      </div>
    </div>
  )
}
