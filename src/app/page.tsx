"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Heart, Car, Home, Phone, Mail, MapPin, CheckCircle, Users, Award, Building2, TrendingUp, Briefcase, DollarSign, PiggyBank, Landmark, Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showStickyButton, setShowStickyButton] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  const [currentVideoUrl, setCurrentVideoUrl] = useState("")

  // Track scroll position for sticky button
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section:first-of-type')
      const contactSection = document.getElementById('contact')
      
      if (heroSection && contactSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        const contactTop = contactSection.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        
        // Show button when past hero and before contact section
        const shouldShow = heroBottom < 0 && contactTop > windowHeight
        setShowStickyButton(shouldShow)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openVideo = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl)
    setVideoOpen(true)
  }

  const testimonials = [
    {
      videoId: "aUAm654ygRw",
      thumbnail: "https://img.youtube.com/vi/aUAm654ygRw/maxresdefault.jpg",
      title: "Client Success Story 1"
    },
    {
      videoId: "WK-jgzVY1UM",
      thumbnail: "https://img.youtube.com/vi/WK-jgzVY1UM/sddefault.jpg",
      title: "Client Success Story 2"
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Thank you for your inquiry! We will contact you soon.")
        setFormData({ name: "", email: "", phone: "", insuranceType: "", message: "" })
      } else {
        alert("Something went wrong. Please try again or contact us directly.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Something went wrong. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const insuranceTypes = [
    {
      icon: Users,
      title: "Individual & Business Insurance",
      description: "Comprehensive insurance solutions for both individuals and businesses, tailored to protect your personal and professional interests.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Life Insurance",
      description: "Secure your family's future with comprehensive life insurance plans that provide financial protection and peace of mind.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Health Insurance",
      description: "Complete medical coverage for you and your family, ensuring quality healthcare without financial burden.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Building2,
      title: "All General Insurance",
      description: "Complete range of general insurance including vehicle, property, fire, theft, and commercial insurance with 24/7 claim support.",
      color: "from-orange-500 to-orange-600"
    }
  ]

  const investmentServices = [
    {
      icon: TrendingUp,
      title: "Mutual Funds",
      description: "Diversified mutual fund investments to help you achieve your long-term financial goals with professional fund management.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Landmark,
      title: "Bonds",
      description: "Secure fixed-income investments through government and corporate bonds for stable returns and portfolio diversification.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: PiggyBank,
      title: "Equities",
      description: "Direct equity investments in stocks and shares to capitalize on market growth and build long-term wealth.",
      color: "from-rose-500 to-rose-600"
    },
    {
      icon: Briefcase,
      title: "Public Deposits",
      description: "Safe and secure public deposit schemes offering guaranteed returns with minimal risk for conservative investors.",
      color: "from-emerald-500 to-emerald-600"
    }
  ]

  const loanServices = [
    {
      icon: Home,
      title: "Housing Loans",
      description: "Flexible home loan solutions with competitive interest rates to help you purchase your dream home.",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: DollarSign,
      title: "Mortgage Loans",
      description: "Secure mortgage loans against property for your financial needs with attractive terms and conditions.",
      color: "from-purple-600 to-pink-600"
    }
  ]

  const features = [
    {
      icon: CheckCircle,
      title: "Trusted Expertise",
      description: "Over 15 years of experience in providing reliable insurance and investment solutions across India."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Dedicated support team available 24/7 to assist you with all your insurance and investment needs."
    },
    {
      icon: Award,
      title: "Best Coverage",
      description: "Comprehensive plans from leading providers at competitive premiums and returns."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, rgba(33, 150, 243, 0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px"
            }}
          />
          {/* Floating animated elements */}
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-20 h-20 rounded-full bg-blue-200 blur-xl"
          />
          <motion.div
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-green-200 blur-xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/20251024_014120_0000-1761250313763.png?width=8000&height=8000&resize=contain"
                alt="SKS Investment Solutions"
                width={200}
                height={200}
                className="mx-auto drop-shadow-2xl"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Your trusted partner for comprehensive insurance, investment, and loan solutions across India. 
              Protecting what matters most with reliable, affordable, and customized financial plans.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg hover:shadow-xl transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started Today
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Shield className="w-8 h-8 text-blue-500 opacity-50" />
        </motion.div>
      </section>

      {/* Insurance Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              Insurance Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Comprehensive insurance coverage for individuals and businesses
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {insuranceTypes.map((insurance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200 group">
                  <CardContent className="p-8">
                    <motion.div
                      initial={{ rotate: -10, opacity: 0 }}
                      whileInView={{ rotate: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${insurance.color} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <insurance.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.h3 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors"
                    >
                      {insurance.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className="text-gray-600 leading-relaxed"
                    >
                      {insurance.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Savings Solutions Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              Investment & Savings Solutions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Build wealth and secure your financial future with our diverse investment options
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-green-200 group">
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ rotate: -10, opacity: 0 }}
                      whileInView={{ rotate: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <motion.h3 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors"
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className="text-gray-600 leading-relaxed text-sm"
                    >
                      {service.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Loans Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              Secured Loans
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Flexible loan solutions to help you achieve your property and financial goals
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {loanServices.map((loan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-200 group">
                  <CardContent className="p-8">
                    <motion.div
                      initial={{ rotate: -10, opacity: 0 }}
                      whileInView={{ rotate: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${loan.color} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <loan.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.h3 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors"
                    >
                      {loan.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className="text-gray-600 leading-relaxed"
                    >
                      {loan.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              Why Choose Us
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Experience excellence in insurance and investment services with SKS Investment Solutions
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                  whileHover={{ rotate: 360 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-green-500 text-white mb-6 shadow-lg"
                >
                  <feature.icon className="w-10 h-10" />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  className="text-2xl font-bold mb-4 text-gray-900"
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  className="text-gray-600 leading-relaxed"
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              Client Success Stories
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Hear from our satisfied clients about their experience with SKS Investment Solutions
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => openVideo(`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1`)}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={testimonial.thumbnail}
                    alt={testimonial.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:bg-white transition-colors duration-300">
                      <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Let us help you find the perfect financial solution
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="shadow-2xl border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="name" className="text-base font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12"
                      />
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="email" className="text-base font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12"
                      />
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="phone" className="text-base font-medium">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-12"
                      />
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="insurance" className="text-base font-medium">Service Type *</Label>
                      <Select
                        value={formData.insuranceType}
                        onValueChange={(value) => setFormData({ ...formData, insuranceType: value })}
                        required
                      >
                        <SelectTrigger id="insurance" className="h-12 w-full flex items-center">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual-business">Individual & Business Insurance</SelectItem>
                          <SelectItem value="life">Life Insurance</SelectItem>
                          <SelectItem value="health">Health Insurance</SelectItem>
                          <SelectItem value="general">General Insurance</SelectItem>
                          <SelectItem value="mutual-fund">Mutual Fund</SelectItem>
                          <SelectItem value="bonds">Bonds</SelectItem>
                          <SelectItem value="equities">Equities</SelectItem>
                          <SelectItem value="deposits">Public Deposits</SelectItem>
                          <SelectItem value="housing-loan">Housing Loan</SelectItem>
                          <SelectItem value="mortgage-loan">Mortgage Loan</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="message" className="text-base font-medium">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-32 resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full text-lg py-6 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid md:grid-cols-3 gap-6 text-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-gray-600 font-medium">+91 74011 22942</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-gray-600 font-medium">info@sksinvesmentsolutions.com</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-gray-600 font-medium">
                No.9, Telegraph Colony,<br />
                Nanganallur, Chennai-600061
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              SKS Investment Solutions
            </h3>
            <p className="text-gray-400">Revealing the Art of Smart Investing</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-t border-gray-800 pt-6 space-y-3"
          >
            <p className="text-gray-400">
              © {new Date().getFullYear()} SKS Investment Solutions. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Developed with ❤️ by{" "}
              <a 
                href="https://rabbitmarketinghouse.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors underline"
              >
                Rabbit Marketing House
              </a>
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Sticky Mobile Button */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: showStickyButton ? 0 : 100,
          opacity: showStickyButton ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg z-50 md:hidden"
      >
        <Button
          size="lg"
          className="w-full text-lg py-6 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Started
        </Button>
      </motion.div>

      {/* Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-black border-0">
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          {currentVideoUrl && (
            <div className="relative w-full aspect-video">
              <iframe
                src={currentVideoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
