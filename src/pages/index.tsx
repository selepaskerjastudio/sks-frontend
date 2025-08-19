"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowRightIcon, Phone } from "lucide-react";
import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";
import LiquidChrome from "@/components/LiquidChrome";
import AnimatedContent from "@/components/AnimatedContent";
import AnimatedPartners from "@/components/AnimatedPartners";
import ScrollAnimated from "@/components/ScrollAnimated";


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menus = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ]

  const customServices = [
    {
      title: "Crowdfunding Platforms",
      description: "Custom-built donation and fundraising platforms designed to maximize reach, simplify transactions, and inspire more contributions.",
      icon: "/icon-1.svg"
    },
    {
      title: "CRM Systems & SaaS",
      description: "Scalable and user-friendly CRM & SaaS solutions that streamline your workflow, improve customer relationships, and drive measurable growth.",
      icon: "/icon-1.svg"
    },
    {
      title: "Learning Management",
      description: "Intuitive LMS platforms that make online learning seamless, engaging, and effective for both educators and learners.",
      icon: "/icon-1.svg"
    },
    {
      title: "Qurban & Umrah Savings",
      description: "Specialized savings and management systems to help communities plan, track, and fulfill their Qurban or Umrah goals with ease.",
      icon: "/icon-1.svg"
    },  
    {
      title: "Internal Systems",
      description: "Tailored internal management tools that automate processes, enhance team productivity, and keep operations running smoothly.",
      icon: "/icon-1.svg"
    },
    {
      title: "RFM Analysis",
      description: "Advanced RFM analytics that segment your customers, predict behavior, and optimize campaigns for better ROI.",
      icon: "/icon-1.svg"
    },
  ]
  

  const services = [
    {
      title: "Strategic Planning",
    },
    {
      title: "Technical Architecture",
    },
    {
      title: "System Integration",
    },{
      title: "Performance Optimization",
    },
  ]

  const clients = [
    {
      name: "Amalsholeh.com",
      image: "/amalsholeh.png",
      description: "A dedicated crowdfunding and donation platform, fully developed and customized by our team to support impactful causes."
    },
    {
      name: "Ruang Kehidupan",
      image: "/ruangkehidupan.png",
      description: "A comprehensive learning management system designed and built to deliver seamless online education experiences."
    },
    {
      name: "Sekolah Keajaiban",
      image: "/sekolahkeajaiban.png",
      description: "A versatile learning management platform built to support diverse training, coaching, and educational programs."
    },
    {
      name: "And 10+ More",
      image: "/saf.png",
      description: "Over a decade of experience serving 10+ other clients across various industries and digital platforms."
    },
  ]
  
  

  const teams = [
    {
      role: "CEO",
      name: "Onnay Okheng",
      image: "/rian.png",
      motto: "The only way to do great work is to love what you do."
    },
    {
      role: "Direktur Utama",
      name: "Ariona Rian",
      image: "/rian.png",
      motto: "The only way to do great work is to love what you do."
    },
    {
      role: "Direktur Operasional",
      name: "Adhi Prasetya",
      image: "/rian.png",
      motto: "The only way to do great work is to love what you do."
    },
    {
      role: "Dewan Komisaris",
      name: "Nisa Rahmawati",
      image: "/nisa.png",
      motto: "The only way to do great work is to love what you do."
    },
    {
      role: "Finance",
      name: "Sheila Aulia",
      image: "/nisa.png",
      motto: "The only way to do great work is to love what you do."
    },
    {
      role: "Product Manager",
      name: "Riki Rahardi",
      image: "/rian.png",
      motto: "The only way to do great work is to love what you do."
    },
    {
      role: "Full Stack Developer",
      name: "Bias",
      image: "/nisa.png",
      motto: "The only way to do great work is to love what you do."
    },
    {
      role: "Frontend Developer",
      name: "Romi",
      image: "/nisa.png",
      motto: "The only way to do great work is to love what you do."
    },
  ]

  const partners = [
    {
      id: 1,
      name: "Ruang Kehidupan",
      image: "/partner-rk.png",
      bg: "bg-muted"
    },
    {
      id: 2,
      name: "Sekolah Keajaiban",
      image: "/partner-sk.png",
      bg: "bg-[#645eab]"
    },
    
    {
      id: 3,
      name: "Saf Original",
      image: "/partner-saf.png",
      bg: "bg-[#BD9E72]"
    },
    {
      id: 4,
      name: "Sidaq",
      image: "/partner-sidaq.png",
      bg: "bg-green-500"
    },
    {
      id: 5,
      name: "Amalsholeh",
      image: "/partner-amalsholeh.png",
      bg: "bg-orange-500"
    },
  ]


  return (
   <>
    <main className="relative">
      <div className="absolute top-0 -z-10 w-[62%] opacity-[0.15]">
        <img className="dark:hidden max-w-full" src="/shape-1.webp" alt="image" />
        <img className="hidden dark:block max-w-full" src="/shape-1-light.webp" alt="image" />
      </div>
      {/* header */}
      <header className={`sticky top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled ? 'bg-white/50 shadow-md backdrop-blur' : ''
      }`}>
        <div className="mx-auto px-10">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={true}
                duration={1}
                ease="bounce.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0}
                delay={0}
              >
                <Link href="/">
                  <Image
                    src="/logo.svg"
                    alt="Site Logo"
                    width={120}
                    height={40}
                  />
                </Link>
              </AnimatedContent>
            </div>

            {/* Desktop Nav */}
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={true}
              duration={1}
              ease="bounce.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0}
              delay={0}
            >
              <NavigationMenu>
                <NavigationMenuList >
                  {menus.map((menu, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink 
                        href={menu.href}
                        className="cursor-pointer hover:text-primary transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.querySelector(menu.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        {menu.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </AnimatedContent>

            {/* Theme Toggle & Get in Touch Button */}
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={false}
              duration={1}
              ease="bounce.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0}
              delay={0}
            >
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <div className="hidden xl:block">
                  <Link
                    href="/contact"
                    className={buttonVariants({ variant: "default", size: "lg" })}
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </header>
      {/* hero */}
      <section id="home">
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-20 z-10">
          <div className="flex gap-4 justify-between">
            <div className="">
              <div className="flex items-center flex-1 relative">
                <AnimatedPartners items={partners} />
              </div>
              <ScrollAnimated 
                className="mt-3 text-sm"
                animationClass="animate-in slide-in-from-top-8 fade-in duration-500"
              >
                <span className="underline font-semibold">Digital Solutions</span> for Clients & Organizations
              </ScrollAnimated>
            </div>
            <div className="pl-36 flex flex-wrap gap-2 items-center">
              <BlurText
                text="Innovative"
                delay={100}
                animateBy="words"
                direction="top"
                className="scroll-m-20 text-6xl font-extrabold tracking-tight text-balance"
                animationFrom={{ filter: 'blur(10px)', opacity: 0, y: -50 }}
                animationTo={[
                  { filter: 'blur(5px)', opacity: 0.5, y: 5 },
                  { filter: 'blur(0px)', opacity: 1, y: 0 }
                ]}
                onAnimationComplete={() => {}}
              />
              <SplitText
                  text="Digital Solutions"
                  className="scroll-m-20 text-6xl font-extrabold tracking-tight text-balance flex items-center text-secondary"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                />
                <BlurText
                text="to Empower and Transform Businesses and Organizations"
                delay={100}
                animateBy="words"
                direction="top"
                className="scroll-m-20 text-6xl font-extrabold tracking-tight text-balance"
                animationFrom={{ filter: 'blur(10px)', opacity: 0, y: -50 }}
                animationTo={[
                  { filter: 'blur(5px)', opacity: 0.5, y: 5 },
                  { filter: 'blur(0px)', opacity: 1, y: 0 }
                ]}
                onAnimationComplete={() => {}}
              />
            </div>
          </div>
        </div>
        <div className="px-10">
          <div className="grid grid-cols-12 gap-10">
            <div className="bg-muted dark:bg-secondary/70 rounded-2xl p-12 col-span-4 dark:text-black">
              <h2 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-balance pacifico-regular leading-14">Selepas <br/>Kerja Studio</h2>
              <p className="text-xl font-semibold mt-2 mb-10">Transforming Ideas into Reality Through Cutting-Edge IT Solutions</p>
              <Link href="/" className={buttonVariants({ variant: "default", size: "lg" })}>
                Get in Touch
              </Link>
            </div>
            <div className="col-span-8">
              <div className="bg-muted rounded-2xl overflow-hidden h-[22rem] relative">
                
                <img src="/hero.png" alt="image" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-5">
              <h2 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-balance">Transforming ideas into impact with tailored digital solutions</h2>
            </div>
            <div className="col-span-7 pl-20">
              <p className="leading-7 [&:not(:first-child)]:mt-6">SKS delivers innovative digital products and expert IT consulting services to enhance efficiency and drive digital transformation, empowering businesses, institutions, and social organizations to achieve lasting success through adaptive technology.</p>
              <p className="leading-7 [&:not(:first-child)]:mt-6 mb-8">SKS delivers innovative digital products and expert IT consulting services to enhance efficiency and drive digital transformation, empowering businesses, institutions, and social organizations to achieve lasting success through adaptive technology.</p>

              <Link href="/" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Get in Touch
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* why choose us */}
      <section id="why-choose-us" className="py-20">
        {/* <div className="absolute left-0 bottom-0 h-[16rem] w-[16rem] bg-secondary rounded-full blur-[10rem]"></div> */}
        <div className="max-w-5xl mx-auto px-4">
          {/* Secure & Reliable */}
          <div className="flex justify-between gap-4 mb-6">
            <div className="max-w-[33%]">
              <div className="mb-6">
                <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Secure & Reliable</h3>
              <p className="text-muted-foreground leading-7">
                Enterprise-grade security for your digital systems with 99.9% uptime guarantee
              </p>
            </div>
            {/* Lightning Fast */}
            <div className="w-[33%]">
              <div className="mb-6">
                <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground leading-7">
                Optimized performance that scales with your business and grows with your needs
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-4">
            {/* Precision Built */}
            <div className="w-[33%]">
              <div className="mb-6">
                <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Precision Built</h3>
              <p className="text-muted-foreground leading-7">
                Tailored solutions that hit your exact requirements with meticulous attention to detail
              </p>
            </div>
            {/* Team Collaboration */}
            <div className="w-[33%]">
              <div className="mb-6">
                <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Team Collaboration</h3>
              <p className="text-muted-foreground leading-7">
                Built for teams that want to achieve more together with seamless integration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* products */}
      <section id="services" className="py-10">
        <div className="mx-auto px-10">
          <div className="bg-muted rounded-2xl p-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8">
                  <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance mb-16">
                    Custom System Development. Tailored software solutions built from the ground up to meet your specific business requirements
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-20">

                <div className="col-span-4">
                  {
                      customServices.slice(0, 3).map((service, index) => (
                        <div className="border-t py-8 flex items-center gap-8" key={index}>
                          <div>
                            <Image src={service.icon} alt={service.title} width={120} height={120} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            <p className="text-muted-foreground leading-7">{service.description}</p>
                          </div>
                        </div>
                      ))
                    }
                </div>
                <div className="col-span-4 flex flex-col justify-center">
                  <div className="bg-gray-200 min-h-[20rem] rounded-2xl overflow-hidden"></div>
                </div>
                <div className="col-span-4">
                  {
                    customServices.slice(3, 6).map((service, index) => (
                      <div className="border-t py-8 flex items-center gap-8" key={index}>
                        <div>
                          <Image src={service.icon} alt={service.title} width={120} height={120} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                          <p className="text-muted-foreground leading-7">{service.description}</p>
                        </div>
                      </div>
                    ))
                  }
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* it consultation */}
      <section id="it-consultation" className="py-10">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance mb-16 w-1/2 leading-12">
            Strategic IT Consultation & Digital Transformation Expertise
          </h2>
          <div className="space-y-10">
            {
              services.map((service, index) => (
                <div className="flex gap-10 group" key={index}>
                  <div className="text-3xl">0{index + 1}</div>
                  <div>
                    <h3 className="text-7xl font-bold mb-2 group-hover:text-secondary transition-all duration-300">{service.title}</h3>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      {/* happy clients */}
      <section id="services" className="py-10">
        <div className="mx-auto px-10">
          <div className="bg-primary rounded-2xl p-20 text-white relative z-10">
            <div className="absolute top-0 -z-10 w-[100%] opacity-[0.15] left-0">
              <img className="max-w-full" src="/shape-1-light.webp" alt="image" />
            </div>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-12 gap-4 mb-16">
                <div className="col-span-5">
                  <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance mb-2">Happy Our Clients</h2>
                  <p className="leading-7 text-xl font-semibold">
                    These amazing companies trusted us with their digital dreams - and we delivered! 
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {
                  clients.map((client, index) => (
                    <div className="py-8" key={index}>
                      {
                        index === 3
                        ? (
                          <div className="flex h-[72px]">
                            <div className="bg-secondary w-[2rem] h-[2rem] rounded-full"></div>
                            <span className="text-xl font-bold -ml-7"><span className="text-primary">Mo</span>re Clients</span>
                          </div>
                        )
                        : (
                          <div>
                            <Image src={client.image} alt={client.name} width={150} height={72} className="mb-8" />
                          </div>
                        )
                      }
                      <div>
                        <h3 className="text-lg font-bold mb-8">{client.name}</h3>
                        <p className="text-white leading-7 opacity-70 text-sm">{client.description}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our team */}
      <section id="it-consultation" className="py-10">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance mb-16 w-[80%] leading-12">
            The brilliant minds behind every successful project, combining expertise with passion to deliver exceptional results
          </h2>
          <div className="grid grid-cols-12 gap-4">
          {
            teams.map((team, index) => (
              <div className="col-span-3" key={index}>
                <div className="rounded-2xl overflow-hidden relative">
                    <Image src={team.image} alt={team.name} width={150} height={150} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 p-4 left-0 right-0">
                      <div className="w-full bg-primary/90 dark:bg-muted p-4 rounded-2xl text-white">
                        <h3 className="text-lg font-bold">{team.name}</h3>
                        <span className="text-sm text-secondary font-semibold mb-4 block">{team.role}</span>
                        <p className="text-sm italic text-white opacity-70">{team.motto}</p>
                      </div>
                    </div>
                  </div>
              </div>
              ))
            }
          </div>
        </div>
      </section>
      {/* contact us */}
      <section id="services" className="py-10">
        <div className="mx-auto px-10">
          <div className="bg-primary dark:bg-muted rounded-2xl p-20 text-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center w-[80%] mx-auto mb-20">
                <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance mb-8 leading-12">
                Let’s Turn Ideas Into Impact
                </h2>
                <p className="leading-7 text-xl font-semibold mb-9">At Selepas Kerja Studio, we believe great work starts with a simple conversation. We’re more than just developers — we’re your creative allies, ready to transform your vision into something that leaves a mark. Whether you have a fully-formed plan or just the spark of an idea, we’ll work with you to shape, design, and build it into reality. Drop us a message today, and let’s start creating something worth talking about.</p>
                <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                  Contact Us Now
                  <Phone className="w-4 h-4" />
                </Link>
              </div>
              <div className="border-t border-white/20 pt-10">
                <p className="text-center text-sm">Copyright © 2025 SKS. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
   </>
  );
}
