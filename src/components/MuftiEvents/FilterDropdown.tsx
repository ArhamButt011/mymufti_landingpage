import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '@/components/button';
import Text from '@/components/UI/Text';


export default function FilterDropdown() {
  const [selectedFilter, setSelectedFilter] = useState('Others');
  const [isOpen, setIsOpen] = useState(false);
  
  const filters = ['Others', 'General'];
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const selectFilter = (filter: string) => {
    setSelectedFilter(filter);
    setIsOpen(false);
    // Here you would typically also trigger the actual filtering functionality
    // For example: filterQuestions(filter);
  };
  
  return (
    <div className="relative">
    <Button 
      variant="outlined" 
      onClick={toggleDropdown}
      className="font-Poppins text-sm h-7 px-3 flex items-center py-1 border-[#78827F] bg-white text-[#78827F] hover:bg-white hover:text-[#38B89A]"
    >
      <span className="text-[#78827F]">{selectedFilter}</span>
      <ChevronDown className="text-[#38B89A] h-4 w-4 ml-1" />
    </Button>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border text-[#78827F] border-[#38B89A1A] rounded shadow-lg">
          {filters.map((filter) => (
            <div 
              key={filter}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => selectFilter(filter)}
            >
              {filter}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}