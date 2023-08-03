import Image from 'next/image'
import { Hero, MoreInfo, ContactUs } from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <MoreInfo />
      <ContactUs />
    </main>
  )
}
