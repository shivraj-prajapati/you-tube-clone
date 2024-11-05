import Button from './Button'

export default function CategoryPills() {
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        <Button varient="dark" className="py-1 px-3 rounded-lg whitespace-nowrap">All</Button>
        <Button className="py-1 px-3 rounded-lg whitespace-nowrap">JavaScript</Button>
        <Button className="py-1 px-3 rounded-lg whitespace-nowrap">TypeScript</Button>
        <Button className="py-1 px-3 rounded-lg whitespace-nowrap">Java</Button>
        <Button className="py-1 px-3 rounded-lg whitespace-nowrap">Python</Button>
        <Button className="py-1 px-3 rounded-lg whitespace-nowrap">Kotlin</Button>
      </div>
    </div>
  )
}
