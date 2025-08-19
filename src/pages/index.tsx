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
import AnimatedPartners from "@/components/AnimatedPartners";
import ScrollAnimated from "@/components/ScrollAnimated";
import { menus, customServices, services, clients, teams, partners, whyChooseUs } from "@/lib/data";

import dynamic from "next/dynamic";

const Robot = dynamic(() => import("@/components/robot"), {
  ssr: false,
});

const Logo = dynamic(() => import("@/components/logo"), {
  ssr: false,
});


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "why-choose-us", "products", "services", "clients", "team", "contact"];
      const scrollPosition = window.scrollY + 200; // Increased offset for better detection
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };


  return (
   <>
    <main className="relative">
      <div className="absolute top-0 -z-10 w-full lg:w-[62%] opacity-[0.15]">
        <img className="dark:hidden max-w-full" src="/shape-1.webp" alt="image" />
        <img className="hidden dark:block max-w-full" src="/shape-1-light.webp" alt="image" />
      </div>
      {/* header */}
      <header className={`sticky top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-black/80 shadow-md backdrop-blur' : 'bg-white/90 dark:bg-black/90'
      }`}>
        <div className="mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Logo />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:block">
              <ScrollAnimated
                animationClass="animate-in slide-in-from-right-8 fade-in duration-500"
              >
                <NavigationMenu>
                  <NavigationMenuList >
                    {menus.map((menu, index) => (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink 
                          href={menu.href}
                          className={`cursor-pointer hover:text-primary transition-colors !bg-transparent ${
                            activeSection === menu.href 
                              ? 'text-primary font-semibold dark:text-secondary' 
                              : 'text-muted-foreground hover:text-primary'
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(menu.href);
                          }}
                        >
                          {menu.label}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </ScrollAnimated>
            </div>

            {/* Theme Toggle & Get in Touch Button */}
            <div className="flex items-center gap-2 sm:gap-4">
              <ThemeToggle />
              <div className="hidden sm:block lg:hidden">
                <Link
                  href="#contact"
                  className={buttonVariants({ variant: "default", size: "sm" })}
                >
                  Contact
                </Link>
              </div>
              <div className="hidden lg:block">
                <Link
                  href="#contact"
                  className={buttonVariants({ variant: "default", size: "lg" })}
                >
                  Get in Touch
                </Link>
              </div>
              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t py-4">
              <nav className="flex flex-col space-y-2">
                {menus.map((menu, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      scrollToSection(menu.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left px-4 py-2 rounded-lg transition-colors ${
                      activeSection === menu.href 
                        ? 'bg-primary text-white' 
                        : 'text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {menu.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
      {/* hero */}
      <section id="home">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 z-10">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-between">
            <div className="order-2 lg:order-1">
              <div className="flex items-center flex-1 relative mb-4 lg:mb-0">
                <AnimatedPartners items={partners} />
              </div>
              <ScrollAnimated 
                className="mt-3 text-sm"
                animationClass="animate-in slide-in-from-top-8 fade-in duration-500"
              >
                <span className="underline font-semibold">Digital Solutions</span> for Clients & Organizations
              </ScrollAnimated>
            </div>
            <div className="order-1 lg:order-2 pl-0 lg:pl-36 flex flex-wrap gap-2 items-center">
              <BlurText
                text="Innovative"
                delay={100}
                animateBy="words"
                direction="top"
                className="scroll-m-20 text-4xl lg:text-6xl font-extrabold tracking-tight text-balance"
                animationFrom={{ filter: 'blur(10px)', opacity: 0, y: -50 }}
                animationTo={[
                  { filter: 'blur(5px)', opacity: 0.5, y: 5 },
                  { filter: 'blur(0px)', opacity: 1, y: 0 }
                ]}
                onAnimationComplete={() => {}}
              />
              <SplitText
                text="Digital Solutions"
                className="scroll-m-20 text-4xl lg:text-6xl font-extrabold tracking-tight text-balance text-secondary"
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
                className="scroll-m-20 text-4xl lg:text-6xl font-extrabold tracking-tight text-balance"
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
        <div className="px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            <div className="bg-muted dark:bg-secondary/70 rounded-2xl p-6 sm:p-8 lg:p-12 lg:col-span-4 dark:text-black order-2 lg:order-1">
              <ScrollAnimated 
                animationClass="animate-in slide-in-from-top-8 fade-in duration-500"
              >
                <h2 className="scroll-m-20 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance pacifico-regular leading-14">Selepas <br/>Kerja Studio</h2>
              </ScrollAnimated>
              <ScrollAnimated 
                animationClass="animate-in slide-in-from-bottom-8 fade-in duration-500"
              >
                <p className="text-lg sm:text-xl font-semibold mt-2 mb-6 lg:mb-10">Transforming Ideas into Reality Through Cutting-Edge IT Solutions</p>
                <Link href="#contact" className={buttonVariants({ variant: "default", size: "lg" })}>
                  Get in Touch
                </Link>
              </ScrollAnimated>
            </div>
            <div className="lg:col-span-8 order-1 lg:order-2">
              <ScrollAnimated 
                animationClass="animate-in slide-in-from-left-8 fade-in duration-500"
              >
                <div className="bg-muted rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-[22rem] relative">
                  <Image
                    src="/hero.png"
                    alt="image"
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                    fill
                    priority
                  />
                </div>
              </ScrollAnimated>
            </div>
          </div>
        </div>
      </section>
      {/* about */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-5">
              <BlurText
                text="Transforming ideas into impact with tailored digital solutions"
                delay={100}
                animateBy="words"
                direction="top"
                className="scroll-m-20 text-5xl font-extrabold tracking-tight text-balance"
                animationFrom={{ filter: 'blur(10px)', opacity: 0, y: -50 }}
                animationTo={[
                  { filter: 'blur(5px)', opacity: 0.5, y: 5 },
                  { filter: 'blur(0px)', opacity: 1, y: 0 }
                ]}
                onAnimationComplete={() => {}}
              />
            </div>
            <div className="col-span-12 lg:col-span-7 lg:pl-20">
              <ScrollAnimated 
                  animationClass="animate-in slide-in-from-right-8 fade-in duration-500"
                >
                <p className="leading-7 [&:not(:first-child)]:mt-6">SKS delivers innovative digital products and expert IT consulting services to enhance efficiency and drive digital transformation, empowering businesses, institutions, and social organizations to achieve lasting success through adaptive technology.</p>
                <p className="leading-7 [&:not(:first-child)]:mt-6 mb-8">SKS delivers innovative digital products and expert IT consulting services to enhance efficiency and drive digital transformation, empowering businesses, institutions, and social organizations to achieve lasting success through adaptive technology.</p>

                <Link href="/" className={buttonVariants({ variant: "outline", size: "lg" })}>
                  Get in Touch
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </ScrollAnimated>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-20 sm:mt-32 lg:mt-40">
            {whyChooseUs.map((item, index) => (
            <ScrollAnimated 
              animationClass={`animate-in slide-in-from-${index % 2 === 0 ? 'left' : 'right'}-8 fade-in duration-500`} 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-7">
                {item.description}
              </p>
            </ScrollAnimated>
            ))}
          </div>
        </div>
      </section>

      {/* products */}
      <section id="products" className="py-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-10">
          <div className="bg-muted rounded-2xl p-6 sm:p-12 lg:p-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-8">
                  <BlurText
                    text="Custom System Development. Tailored software solutions built from the ground up to meet your specific business requirements"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="scroll-m-20 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-balance mb-8 sm:mb-12 lg:mb-16 text-center lg:text-left"
                    animationFrom={{ filter: 'blur(10px)', opacity: 0, y: -50 }}
                    animationTo={[
                      { filter: 'blur(5px)', opacity: 0.5, y: 5 },
                      { filter: 'blur(0px)', opacity: 1, y: 0 }
                    ]}
                    onAnimationComplete={() => {}}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
                                <div className="lg:col-span-4 col-span-12">
                  {
                      customServices.slice(0, 3).map((service, index) => (
                        <ScrollAnimated 
                          animationClass={`animate-in slide-in-from-${index % 2 === 0 ? 'left' : 'right'}-8 fade-in duration-500`} 
                          key={index} 
                          className="border-t py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                          <div className="flex-shrink-0">
                            <Image src={service.icon} alt={service.title} width={80} height={80} className="sm:w-[60px] sm:h-[60px]" />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">{service.title}</h3>
                            <p className="text-muted-foreground leading-7 text-sm sm:text-base">{service.description}</p>
                          </div>
                        </ScrollAnimated>
                        ))
                      }
                  </div>
                  <div className="lg:col-span-4 col-span-12 flex flex-col justify-center order-1 lg:order-2">
                    <ScrollAnimated 
                      animationClass="animate-in slide-in-from-bottom-8 fade-in duration-500"
                    >
                      <Robot />
                    </ScrollAnimated>
                  </div>
                  <div className="lg:col-span-4 col-span-12 order-2 lg:order-3">
                                      {
                      customServices.slice(3, 6).map((service, index) => (
                        <ScrollAnimated 
                          animationClass={`animate-in slide-in-from-${index % 2 === 0 ? 'left' : 'right'}-8 fade-in duration-500`} 
                          key={index} 
                          className="border-t py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                          <div className="flex-shrink-0">
                            <Image src={service.icon} alt={service.title} width={80} height={80} className="sm:w-[60px] sm:h-[60px]" />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">{service.title}</h3>
                            <p className="text-muted-foreground leading-7 text-sm sm:text-base">{service.description}</p>
                          </div>
                        </ScrollAnimated>
                      ))
                    }
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="services" className="py-10">
        <div className="max-w-7xl mx-auto px-10">
          <BlurText
            text="Strategic IT Consultation & Digital Transformation Expertise"
            delay={100}
            animateBy="words"
            direction="top"
            className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance mb-16 w-1/2 leading-12"
            animationFrom={{ filter: 'blur(10px)', opacity: 0, y: -50 }}
            animationTo={[
              { filter: 'blur(5px)', opacity: 0.5, y: 5 },
              { filter: 'blur(0px)', opacity: 1, y: 0 }
            ]}
            onAnimationComplete={() => {}}
          />
          <div className="space-y-10">
            {
              services.map((service, index) => (
                <ScrollAnimated 
                  animationClass={`animate-in slide-in-from-${index % 2 === 0 ? 'left' : 'right'}-8 fade-in duration-500`} 
                  key={index} 
                  className="flex gap-10 group"
                >
                  <div className="text-xl lg:text-3xl">0{index + 1}</div>
                  <div>
                    <h3 className="text-4xl lg:text-7xl font-bold mb-2 group-hover:text-secondary transition-all duration-300">{service.title}</h3>
                  </div>
                </ScrollAnimated>
              ))
            }
          </div>
        </div>
      </section>
      {/* happy clients */}
      <section id="clients" className="py-10">
        <div className="mx-auto px-10">
          <div className="bg-primary dark:bg-muted rounded-2xl p-20 text-white relative z-10">
            <div className="absolute top-0 -z-10 w-[100%] opacity-[0.15] left-0">
              <img className="max-w-full" src="/shape-1-light.webp" alt="image" />
            </div>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-12 gap-4 mb-16">
                <div className="col-span-12 lg:col-span-5">
                  <BlurText
                    text="Happy Our Clients"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance mb-2"
                  />
                  <ScrollAnimated 
                    animationClass="animate-in slide-in-from-bottom-8 fade-in duration-500"
                  >
                    <p className="leading-7 text-xl font-semibold">
                      These amazing companies trusted us with their digital dreams - and we delivered! 
                    </p>
                  </ScrollAnimated>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {
                  clients.map((client, index) => (
                    <ScrollAnimated 
                      animationClass={`animate-in slide-in-from-${index % 2 === 0 ? 'left' : 'right'}-8 fade-in duration-500`} 
                      key={index} 
                      className="py-8"
                    >
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
                    </ScrollAnimated>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our team */}
      <section id="team" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <BlurText
            text="The brilliant minds behind every successful project, combining expertise with passion to deliver exceptional results"
            delay={100}
            animateBy="words"
            direction="top"
            className="scroll-m-20 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-balance mb-8 sm:mb-12 lg:mb-16 w-full lg:w-[80%] leading-12 text-center lg:text-left"
          />
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-4">
            {/* Top row - 4 items */}
            {teams.slice(0, 4).map((team, index) => (
              <ScrollAnimated 
                animationClass={`animate-in slide-in-from-${index % 2 === 0 ? 'left' : 'right'}-8 fade-in duration-500`} 
                key={index} 
                className="sm:col-span-1 lg:col-span-3"
              >
                <div className="rounded-2xl overflow-hidden relative h-full flex flex-col">
                    <Image src={team.image} alt={team.name} width={150} height={150} className="w-full mb-4 dark:invert" />
                    <div className="flex-1 flex flex-col">
                      <div className="w-full bg-muted p-4 rounded-2xl h-full flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold">{team.name}</h3>
                          <span className="text-sm font-semibold mb-4 block">{team.role}</span>
                        </div>
                        <p className="text-sm italic opacity-70">{team.motto}</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimated>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4 mt-6 sm:mt-8 lg:mt-10">
             {/* Bottom row - 5 items */}
             {teams.slice(4, 9).map((team, index) => (
               <ScrollAnimated 
                animationClass={`animate-in slide-in-from-${index % 2 === 0 ? 'left' : 'right'}-8 fade-in duration-500`} 
                key={index + 4} 
                className="col-span-1 lg:col-span-2"
              >
                 <div className="rounded-2xl overflow-hidden relative h-full flex flex-col">
                     <Image src={team.image} alt={team.name} width={150} height={150} className="w-full mb-4 dark:invert" />
                     <div className="flex-1 flex flex-col">
                       <div className="w-full bg-muted p-4 rounded-2xl h-full flex flex-col justify-between">
                         <div>
                           <h3 className="text-lg font-bold">{team.name}</h3>
                           <span className="text-sm font-semibold mb-4 block">{team.role}</span>
                         </div>
                         <p className="text-sm italic opacity-70">{team.motto}</p>
                       </div>
                     </div>
                   </div>
                 </ScrollAnimated>
               ))}
           </div>
        </div>
      </section>
      {/* contact us */}
      <section id="contact" className="py-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-10">
          <div className="bg-primary dark:bg-muted rounded-2xl p-6 sm:p-12 lg:p-20 text-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center w-full lg:w-[80%] mx-auto mb-12 sm:mb-16 lg:mb-20">
                <div className="flex items-center justify-center">
                  <BlurText
                    text="Let’s Turn Ideas Into Impact"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance mb-6 flex items-center justify-center"
                  />
                </div>
                <ScrollAnimated 
                  animationClass="animate-in slide-in-from-bottom-8 fade-in duration-500"
                >
                  <p className="leading-7 text-base lg:text-xl font-semibold mb-9">At Selepas Kerja Studio, we believe great work starts with a simple conversation. We’re more than just developers — we’re your creative allies, ready to transform your vision into something that leaves a mark. Whether you have a fully-formed plan or just the spark of an idea, we’ll work with you to shape, design, and build it into reality. Drop us a message today, and let’s start creating something worth talking about.</p>
                  <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                    Contact Us Now
                    <Phone className="w-4 h-4" />
                  </Link>
                </ScrollAnimated>
              </div>
              <ScrollAnimated 
                animationClass="animate-in slide-in-from-top-8 fade-in duration-500"
              >
                <div className="border-t border-white/20 pt-10">
                  <p className="text-center text-sm">Copyright &copy; 2025 SKS. All rights reserved.</p>
                </div>
              </ScrollAnimated>
            </div>
          </div>
        </div>
      </section>
    </main>
   </>
  );
}
