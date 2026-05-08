import { HeroSection } from '@/components/sections/HeroSection'
import { QuizSection } from '@/components/sections/QuizSection'
import { CalculatorSection } from '@/components/sections/CalculatorSection'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { BookingTeaser } from '@/components/sections/BookingTeaser'
import { ReviewsSlider } from '@/components/sections/ReviewsSlider'
import { InstagramStrip } from '@/components/sections/InstagramStrip'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <QuizSection />
      <CalculatorSection />
      <ReviewsSlider />
      <BookingTeaser />
      <InstagramStrip />
    </>
  )
}
