import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";
import { useState, useEffect, useRef } from "react";

type CategoryPillProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

const TRANSLATE_AMOUNT = 200;

export default function CategoryPills({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillProps) {
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerWidth = containerRef.current?.clientWidth || 0;
    const contentWidth = containerRef.current?.scrollWidth || 0;

    setIsLeftVisible(translate > 0);
    setIsRightVisible(translate < contentWidth - containerWidth);
  }, [translate, categories.length]); 

  return (
    <div className="overflow-x-hidden relative" ref={containerRef}>
      <div
        className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
        style={{ transform: `translateX(-${translate}px)` }} 
      >
        {categories.map((category) => (
          <Button
            key={category}
            varient={selectedCategory === category ? "dark" : "default"}
            onClick={() => onSelect(category)}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>

      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-[50%] to-transparent w-24 h-full">
          <Button
            varient="ghost"
            size="icons"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate((prev) => Math.max(prev - TRANSLATE_AMOUNT, 0));
            }}
          >
            <ChevronLeft />
          </Button>
        </div>
      )}

      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-[50%] to-transparent w-24 h-full flex justify-end">
          <Button
            varient="ghost"
            size="icons"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate((prev) => prev + TRANSLATE_AMOUNT);
            }}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}
