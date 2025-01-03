import Image from "next/image";
import { EquipmentGrid } from '@/components/Homepage/EquipmentGrid'
import { FilterBar } from '@/components/Homepage/Filterbar'
import { Hero } from '@/components/Homepage/Hero'
import { Header } from '@/components/Homepage/Header'
import  Footer  from '@/components/Homepage/Footer'
export default function Home() {
  return (
    
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <FilterBar />
        <EquipmentGrid />
      </div>
      <Footer />
    </div>
  );
}
