// components/SectionWrapper.tsx
export default function SectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-6 lg:px-12">
      {children}
    </div>
  );
}
