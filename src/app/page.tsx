"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumSizeLargeTitles"
        background="grid"
        cardStyle="layered-gradient"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Products",
          id: "#products",
        },
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      button={{
        text: "Shop Now",
        href: "#products",
      }}
      brandName="Glamour Glow"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "plain",
      }}
      title="Unleash Your Inner Radiance"
      description="Discover our exquisite collection of skincare and makeup, crafted to enhance your natural beauty and empower your glow."
      buttons={[
        {
          text: "Shop Best Sellers",
          href: "#products",
        },
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/arrangement-cosmetics-with-copy-space-beige-background_23-2148574394.jpg",
          imageAlt: "Collection of cosmetics products",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-taking-care-herself-home_23-2148974347.jpg",
          imageAlt: "Woman applying face serum",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/shea-butter-beauty-treatment-assortment_23-2148963293.jpg",
          imageAlt: "Flat lay of luxury skincare items",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-cosmetics-containers-arrangement_23-2149270023.jpg",
          imageAlt: "Close up of a vibrant red lipstick",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/lay-out-cosmetics-beige-color_23-2148181452.jpg",
          imageAlt: "Colorful eyeshadow palette",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-broken-white-pill-with-glass-water_23-2147827612.jpg",
          imageAlt: "Skincare serum dropper with liquid",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Deep Hydration",
          description: "Our unique formulas lock in moisture, leaving your skin plump, soft, and visibly radiant all day long.",
          imageSrc: "http://img.b2bpic.net/free-photo/water-therapy-series_1385-575.jpg",
          imageAlt: "Water droplets on skin",
        },
        {
          title: "Natural Ingredients",
          description: "Harness the power of nature with potent botanical extracts and ethically sourced, skin-loving components.",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-geometric-wavy-folds-background_1048-16776.jpg",
          imageAlt: "Green leaves and botanicals",
        },
        {
          title: "Dermatologist Approved",
          description: "Each product is rigorously tested and approved by dermatologists, ensuring safety and efficacy for sensitive skin.",
          imageSrc: "http://img.b2bpic.net/free-photo/face-recognition-personal-identification-collage_23-2150165613.jpg",
          imageAlt: "Dermatologist examining skin",
        },
      ]}
      title="Why Choose Glamour Glow?"
      description="Experience the difference with our meticulously formulated products designed for every skin type and beauty need."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p-serum",
          name: "Radiant Renewal Serum",
          price: "$59.99",
          variant: "30ml",
          imageSrc: "http://img.b2bpic.net/free-photo/cosmetic-tube-gift-box-with-gold-accents-black-background_187299-47583.jpg",
          imageAlt: "Radiant Renewal Serum bottle",
        },
        {
          id: "p-cream",
          name: "Hydrating Day Cream",
          price: "$42.50",
          variant: "50g",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-woman-with-hydrated-skin_23-2149432178.jpg",
          imageAlt: "Hydrating Day Cream jar",
        },
        {
          id: "p-cleanser",
          name: "Gentle Foam Cleanser",
          price: "$28.00",
          variant: "150ml",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-taking-care-herself-home_23-2148976897.jpg",
          imageAlt: "Gentle Foam Cleanser tube",
        },
        {
          id: "p-mask",
          name: "Purifying Clay Mask",
          price: "$35.00",
          variant: "100g",
          imageSrc: "http://img.b2bpic.net/free-photo/teenage-girl-with-dark-skin-has-problematic-skin-applies-foam-wetter-face-keeps-lips-folded_273609-30975.jpg",
          imageAlt: "Purifying Clay Mask jar",
        },
        {
          id: "p-toner",
          name: "Balancing Facial Toner",
          price: "$22.75",
          variant: "200ml",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-assortment-cosmetic-products_23-2148619984.jpg",
          imageAlt: "Balancing Facial Toner bottle",
        },
        {
          id: "p-eyecream",
          name: "Brightening Eye Cream",
          price: "$48.00",
          variant: "15ml",
          imageSrc: "http://img.b2bpic.net/free-photo/dreamy-happy-girl-posing-against-white-wall_176420-32366.jpg",
          imageAlt: "Brightening Eye Cream tube",
        },
      ]}
      title="Our Signature Collection"
      description="Explore our curated range of best-selling skincare and makeup, designed to elevate your beauty routine."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Our Passion for ",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/elegant-model-posing-with-plant_23-2148442617.jpg",
          alt: "Glowing woman's face",
        },
        {
          type: "text",
          content: " Radiant Beauty",
        },
      ]}
      buttons={[
        {
          text: "Our Story",
          href: "#",
        },
        {
          text: "Sustainability",
          href: "#",
        },
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t-1",
          name: "Sarah J.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-portrait-with-hidden-face_52683-86790.jpg",
          imageAlt: "Sarah Johnson",
        },
        {
          id: "t-2",
          name: "Emily R.",
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-young-businesswoman-looking-camera-against-gray-backdrop_23-2148029037.jpg",
          imageAlt: "Emily Rodriguez",
        },
        {
          id: "t-3",
          name: "Michael C.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-girl-with-perfect-light-brown-skin-beautiful-curly-black-hair-smiling-camera-studio_633478-963.jpg",
          imageAlt: "Michael Chen",
        },
        {
          id: "t-4",
          name: "Jessica L.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-man-applying-moisturizer-his-face-smiling_23-2149206726.jpg",
          imageAlt: "Jessica Lee",
        },
        {
          id: "t-5",
          name: "David W.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-posing-with-gold-body-painting_23-2150466356.jpg",
          imageAlt: "David Wilson",
        },
      ]}
      cardTitle="What Our Customers Say"
      cardTag="Real Stories"
      cardAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Beauty Magazine",
        "Skincare Association",
        "Wellness Hub",
        "Glamour Daily",
        "Eco Cert",
        "Urban Trend",
        "Pure Skin Research",
      ]}
      title="As Seen In"
      description="Trusted and featured by leading beauty publications and experts worldwide."
      speed={40}
      showCard={true}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",
          title: "Are your products cruelty-free?",
          content: "Yes, all Glamour Glow products are proudly cruelty-free and never tested on animals.",
        },
        {
          id: "faq-2",
          title: "What is your return policy?",
          content: "We offer a 30-day money-back guarantee on all purchases. If you're not completely satisfied, simply return the product for a full refund.",
        },
        {
          id: "faq-3",
          title: "Are your ingredients organic?",
          content: "We prioritize natural and ethically sourced ingredients. While not all are certified organic, we ensure the highest quality and safety standards.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about our products, ingredients, and policies."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      text="Ready to Transform Your Beauty Routine?"
      buttons={[
        {
          text: "Contact Support",
          href: "#",
        },
        {
          text: "Shop All Products",
          href: "#products",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoSrc="http://img.b2bpic.net/free-vector/social-media-logo-collection_23-2148108296.jpg"
      logoAlt="Glamour Glow Logo"
      logoText="Glamour Glow"
      copyrightText="© 2024 Glamour Glow. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "https://facebook.com/glamourglow",
          ariaLabel: "Facebook",
        },
        {
          icon: Instagram,
          href: "https://instagram.com/glamourglow",
          ariaLabel: "Instagram",
        },
        {
          icon: Twitter,
          href: "https://twitter.com/glamourglow",
          ariaLabel: "Twitter",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
