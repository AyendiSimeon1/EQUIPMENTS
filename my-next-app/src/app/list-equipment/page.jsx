'use client'
import { useState } from 'react'
import { ListingBasicInfo } from '@/components/listing/BasicInfo'
import { ListingDetails } from '@/components/listing/Details'
import { ListingPricing } from '@/components/listing/Pricing'
import { ListingMedia } from '@/components/listing/Media'

export default function ListEquipment() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    basicInfo: {},
    details: {},
    pricing: {},
    media: []
  })

  const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }))
  }

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">List an Equipment</h1>
        <div className="mt-4 flex justify-between">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className={`flex h-2 w-1/4 ${step >= num ? 'bg-yellow-500' : 'bg-gray-200'}`} />
          ))}
        </div>
      </div>

      {step === 1 && (
        <ListingBasicInfo 
          data={formData.basicInfo}
          onUpdate={(data) => updateFormData('basicInfo', data)}
          onNext={nextStep}
        />
      )}
      {step === 2 && (
        <ListingDetails
          data={formData.details}
          onUpdate={(data) => updateFormData('details', data)}
          onNext={nextStep}
          onBack={prevStep}
        />
      )}
      {step === 3 && (
        <ListingPricing
          data={formData.pricing}
          onUpdate={(data) => updateFormData('pricing', data)}
          onNext={nextStep}
          onBack={prevStep}
        />
      )}
      {step === 4 && (
        <ListingMedia
          data={formData.media}
          onUpdate={(data) => updateFormData('media', data)}
          onSubmit={() => console.log('Submit:', formData)}
          onBack={prevStep}
        />
      )}
    </div>
  )
}
