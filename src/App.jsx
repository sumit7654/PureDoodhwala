import React, { useState, useEffect } from 'react';
import { 
  Droplet, 
  Truck, 
  Clock, 
  ShieldCheck, 
  Smartphone, 
  Menu, 
  X, 
  Star, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Twitter 
} from 'lucide-react';


const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-md";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg",
    secondary: "bg-white text-blue-900 border border-gray-200 hover:border-blue-300 hover:bg-blue-50",
    outline: "border-2 border-white text-white hover:bg-white hover:text-blue-600"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, light = false }) => (
  <div className="text-center max-w-2xl mx-auto mb-16">
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
      {title}
    </h2>
    <div className={`h-1 w-24 mx-auto rounded mb-4 ${light ? 'bg-blue-300' : 'bg-blue-600'}`}></div>
    <p className={`text-lg ${light ? 'text-blue-100' : 'text-gray-600'}`}>
      {subtitle}
    </p>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center group">
    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
      <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const StepCard = ({ number, title, description }) => (
  <div className="relative flex flex-col items-center text-center max-w-xs mx-auto">
    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg mb-6 relative z-10">
      {number}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Droplet className="w-6 h-6 text-white" />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-gray-900' : 'text-gray-900 md:text-blue'}`}>
            Pure<span className="text-blue-600">Doodhwala</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-white/90 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          {/* for clicking mobile app link*/}
          <Button variant={scrolled ? 'primary' : 'secondary'} className="py-2 px-5 text-sm">
            <a href="https://puredoodhwala.onrender.com" className="hover:text-blue-600 transition-colors">Download App</a>
            {/* Download App */}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu className={scrolled ? 'text-gray-900' : 'text-gray-900'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-600 font-medium py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full text-center">Download App</Button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background with curve */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <svg className="absolute bottom-0 left-0 w-full text-white" viewBox="0 0 1440 320" preserveAspectRatio="none">
           <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Hero Image Overlay/Design Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 hidden md:block" style={{clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)"}}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm mb-6">
              #1 Farm-to-Home Delivery App
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Fresh Milk, <br />
              <span className="text-blue-600">Pure Life.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience the taste of purity with Pure DoodhwalaApp. We deliver 100% organic, untreated fresh milk directly from local farms to your doorstep every morning.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="flex items-center justify-center">
                <Smartphone className="w-5 h-5 mr-2" />
                Download App
              </Button>
              <Button variant="secondary" className="flex items-center justify-center">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center text-gray-500 text-sm">
              <div className="flex -space-x-2 mr-4 isolate"> {/* Added 'isolate' for better stacking context */}
  {[
    // Real image URLs for avatars
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&h=64&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces&q=80"
  ].map((imgSrc, i) => (
    // Replaced div/span with an img tag
    <img
      key={i}
      src={imgSrc}
      alt={`Trusted User ${i+1}`}
      // Added 'object-cover' to prevent image distortion and 'shadow-sm' for depth
      className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm relative z-10 hover:z-20 transition-all"
    />
  ))}
</div>
              <p>Trusted by 10,000+ families</p>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
             {/* Mockup Representation */}
             <div className="relative w-72 h-[550px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>
                <div className="w-full h-full bg-blue-50 flex flex-col">
                  {/* App Header */}
                  <div className="bg-blue-600 p-6 pt-12 text-white">
                    <div className="flex justify-between items-center mb-4">
                      <Menu className="w-6 h-6" />
                      <span className="font-bold">Pure Doodhwala</span>
                      <div className="w-8 h-8 rounded-full bg-blue-400"></div>
                    </div>
                    <div className="text-sm opacity-90">Good Morning!</div>
                    <div className="text-xl font-bold">Time for fresh milk?</div>
                  </div>
                  {/* App Body Mock */}
                  <div className="p-4 space-y-4 overflow-hidden">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-gray-800">Cow Milk</span>
                        <span className="text-blue-600 font-bold">$1.5/L</span>
                      </div>
                      <div className="h-24 bg-gray-100 rounded-lg mb-2"></div>
                      <div className="w-full h-8 bg-blue-600 rounded-lg text-white text-xs flex items-center justify-center">Subscribe</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-gray-800">Buffalo Milk</span>
                        <span className="text-blue-600 font-bold">$1.8/L</span>
                      </div>
                       <div className="h-24 bg-gray-100 rounded-lg mb-2"></div>
                    </div>
                  </div>
                  {/* Floating Action Button */}
                  <div className="absolute bottom-6 right-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <Smartphone className="w-6 h-6" />
                  </div>
                </div>
             </div>
             
             {/* Decorative Elements around phone */}
             <div className="absolute top-20 -right-10 bg-white p-4 rounded-xl shadow-lg animate-bounce hidden lg:block">
               <div className="flex items-center space-x-2">
                 <ShieldCheck className="text-green-500 w-8 h-8" />
                 <div>
                   <div className="text-xs text-gray-500">Quality</div>
                   <div className="font-bold text-gray-800">100% Pure</div>
                 </div>
               </div>
             </div>

             <div className="absolute bottom-40 -left-10 bg-white p-4 rounded-xl shadow-lg hidden lg:block">
               <div className="flex items-center space-x-2">
                 <Truck className="text-blue-500 w-8 h-8" />
                 <div>
                   <div className="text-xs text-gray-500">Delivery</div>
                   <div className="font-bold text-gray-800">By 8:00 AM</div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: Droplet,
      title: "100% Pure & Organic",
      description: "No preservatives, no water added. Just pure milk directly from healthy, grass-fed cattle."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Get your milk delivered right to your doorstep every single morning before 7:00 AM."
    },
    {
      icon: ShieldCheck,
      title: "Quality Tested",
      description: "Every batch goes through rigorous 24-point quality checks to ensure safety for your family."
    },
    {
      icon: Smartphone,
      title: "Easy Subscription",
      description: "Manage your daily needs with our app. Pause, resume, or change quantity with a single tap."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Why Choose Pure Doodhwala?" 
          subtitle="We bring the traditional milkman service to the digital age with uncompromising quality." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Fresh Milk in 3 Steps" 
          subtitle="Setting up your daily milk delivery has never been this simple." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-1 bg-blue-200 z-0"></div>
          
          <StepCard 
            number="1" 
            title="Download & Subscribe" 
            description="Install the app, choose your preferred milk type (Cow/Buffalo), and set your daily quantity." 
          />
          <StepCard 
            number="2" 
            title="We Source Fresh" 
            description="We collect fresh milk from our partner farms in the early hours of the morning." 
          />
          <StepCard 
            number="3" 
            title="Doorstep Delivery" 
            description="Our delivery partners drop the sealed bottle at your door before you wake up." 
          />
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  const products = [
    { name: "Pure Cow Milk", price: "₹60/L", color: "bg-blue-100", textColor: "text-blue-800" },
    { name: "Full Cream Buffalo Milk", price: "₹75/L", color: "bg-orange-100", textColor: "text-orange-800" },
    { name: "Low Fat Milk", price: "₹60/L", color: "bg-green-100", textColor: "text-green-800" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-blue-600 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Product Range</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
              We focus on essential dairy products to ensure the highest quality control.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {products.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-6 text-gray-800 transform transition-transform hover:-translate-y-2">
                  <div className={`w-16 h-16 mx-auto ${p.color} rounded-full flex items-center justify-center mb-4`}>
                    <Droplet className={`w-8 h-8 ${p.textColor}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{p.name}</h3>
                  <div className="text-gray-500 text-sm mb-4">Starting from</div>
                  <div className="text-2xl font-bold text-blue-600">{p.price}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
               <p className="text-sm opacity-80 mb-4">*Prices may vary based on location and subscription plan.</p>
               <Button variant="outline" className="px-8">View All Products in App</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, location, text }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
    <div className="flex text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
    </div>
    <p className="text-gray-600 italic mb-6">"{text}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold mr-3">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
        <span className="text-gray-400 text-xs">{location}</span>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="What Our Customers Say" 
          subtitle="Join thousands of happy families who start their day with Pure Doodhwala." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Priya Sharma" 
            location="Indirapuram"
            text="The quality of milk is vastly different from packet milk. It actually forms 'malai' when boiled! Highly recommended." 
          />
          <TestimonialCard 
            name="Rahul Verma" 
            location="Noida Sector 62"
            text="I love the app feature where I can pause milk when I go on vacation. Very convenient and the billing is transparent." 
          />
          <TestimonialCard 
            name="Amit Patel" 
            location="Greater Kailash"
            text="Finally, a service that delivers before I wake up. The packaging is hygienic and the delivery guys are polite." 
          />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Droplet className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">PureDoodhwala</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Bringing purity back to your kitchen. We are committed to delivering fresh, unadulterated milk directly from farms to your family.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/" target="_blank" 
    rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" 
    rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.x.com/" target="_blank" 
    rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Our Story</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Quality Check</a></li>
              <li><a href="#footer" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Get the App</h4>
            <p className="text-gray-400 text-sm mb-4">Available on iOS and Android</p>
            <div className="space-y-3">
              <button className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg p-3 flex items-center justify-center transition-colors">
                 <span className="text-sm font-semibold">Download on App Store</span>
              </button>
              <button className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg p-3 flex items-center justify-center transition-colors">
                 <span className="text-sm font-semibold">Get it on Google Play</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2024 Pure Doodhwala App. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            Designed with <span className="text-red-500">&hearts;</span> for Health
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}