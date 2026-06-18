"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["services", "sourcing", "contact"];
      let current = "";
      
      const scrollPosition = window.scrollY;
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 150;
          if (scrollPosition >= top) {
            current = sectionId;
          }
        }
      }
      setActiveTab(current);
    };

    window.addEventListener("scroll", handleScroll);

    // Setup Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Header / Navbar */}
      <header>
        <div className="header-container">
          <a href="#" className="logo">
            <svg viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A1.5,1.5 0 0,1 13.5,5.5A1.5,1.5 0 0,1 12,7A1.5,1.5 0 0,1 10.5,5.5A1.5,1.5 0 0,1 12,4M12,18A1.5,1.5 0 0,1 10.5,16.5A1.5,1.5 0 0,1 12,15A1.5,1.5 0 0,1 13.5,16.5A1.5,1.5 0 0,1 12,18M18.5,12A1.5,1.5 0 0,1 17,13.5A1.5,1.5 0 0,1 15.5,12A1.5,1.5 0 0,1 17,10.5A1.5,1.5 0 0,1 18.5,12M5.5,12A1.5,1.5 0 0,1 7,10.5A1.5,1.5 0 0,1 8.5,12A1.5,1.5 0 0,1 7,13.5A1.5,1.5 0 0,1 5.5,12M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"/>
            </svg>
            <div className="logo-text">
              <h1>UMSL</h1>
            </div>
          </a>
          <nav>
            <a href="#" className={activeTab === "" ? "active" : ""}>Home</a>
            <a href="#services" className={activeTab === "services" ? "active" : ""}>Services</a>
            <a href="#sourcing" className={activeTab === "sourcing" ? "active" : ""}>Sourcing</a>
            <a href="#contact" className={activeTab === "contact" ? "active" : ""}>Contact</a>
            <a href="#contact" className="cta-btn">Get a Quote</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg style={{ width: "14px", height: "14px", fill: "currentColor", marginTop: "-2px" }} viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
              </svg>
              Premier Marine Logistics
            </div>
            <h2>United Merchant<br /><span>Shipping Line</span></h2>
            <p>Global Freight Forwarding & Sourcing Solutions. We bridge international trade barriers with specialized, secure, and end-to-end containerized and project cargo shipping solutions.</p>
            <div className="hero-btns">
              <a href="#services" className="btn-primary">Explore Services</a>
              <a href="#contact" className="btn-secondary">Contact Us</a>
            </div>
          </div>
          <div className="hero-stats-card">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">120+</div>
              <div className="stat-label">Global Ports Covered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Secure Commodity Sourcing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="section-container">
          <div className="section-title-wrapper reveal">
            <span className="section-subtitle">What We Do</span>
            <h2 className="section-title">Our Specialized Services</h2>
            <p className="services-network-desc">
              Direct shipping lanes & custom clearance active across:
            </p>
            <div className="network-badges">
              <span className="network-badge">KSA</span>
              <span className="network-badge">UAE</span>
              <span className="network-badge">Europe</span>
              <span className="network-badge">Malaysia</span>
              <span className="network-badge">China</span>
              <span className="network-badge">Singapore</span>
              <span className="network-badge">USA</span>
              <span className="network-badge">India</span>
            </div>
          </div>
          
          <div className="services-grid">
            {/* Service 1: Flat Rack Cargo */}
            <div className="service-card reveal">
              <div className="service-image-wrapper">
                <img src="/Flatrack.png" alt="Flat Rack Cargo" className="service-image" />
              </div>
              <div className="service-card-content">
                <h3>Flat Rack Cargo</h3>
                <p>Heavy, oversized, or awkward shipments that require open top or open side container configuration, managed with safety-focused rigging.</p>
              </div>
            </div>

            {/* Service 2: OOG Cargo */}
            <div className="service-card reveal delay-1">
              <div className="service-image-wrapper">
                <img src="/oog.png" alt="OOG Cargo" className="service-image" />
              </div>
              <div className="service-card-content">
                <h3>OOG Cargo</h3>
                <p>Out of Gauge logistics specialized for freight extending beyond container parameters. Experienced permit coordination and route planning.</p>
              </div>
            </div>

            {/* Service 3: Machinery Transport */}
            <div className="service-card reveal delay-2">
              <div className="service-image-wrapper">
                <img src="/machinerytransport.png" alt="Machinery Transport" className="service-image" />
              </div>
              <div className="service-card-content">
                <h3>Machinery Transport</h3>
                <p>End-to-end industrial machinery shipping. Includes customized packing, securing, and loading techniques for safe transit of high-value equipment.</p>
              </div>
            </div>

            {/* Service 4: Logs & Timber */}
            <div className="service-card reveal delay-3">
              <div className="service-image-wrapper">
                <img src="/logsandtimber.png" alt="Logs & Timber" className="service-image" />
              </div>
              <div className="service-card-content">
                <h3>Logs & Timber</h3>
                <p>Secured international wood transport. Compliant with biological customs checks, handling bulk timber and processing wood safely across oceans.</p>
              </div>
            </div>

            {/* Service 5: Fresh Fruits */}
            <div className="service-card reveal">
              <div className="service-image-wrapper">
                <img src="/freshfruits.png" alt="Fresh Fruits" className="service-image" />
              </div>
              <div className="service-card-content">
                <h3>Fresh Fruits</h3>
                <p>Temperature-controlled cold-chain shipping of premium fresh fruits, ensuring zero preservation loss from harvest port to final retail destination.</p>
              </div>
            </div>

            {/* Service 6: Agro Products */}
            <div className="service-card reveal delay-1">
              <div className="service-image-wrapper">
                <img src="/agroproducts.png" alt="Agro Products" className="service-image" />
              </div>
              <div className="service-card-content">
                <h3>Agro Products</h3>
                <p>Safe logistics for agro-commodities like pulses, grains, and spices. We employ strict humidity control during sea transit to protect biological goods.</p>
              </div>
            </div>

            {/* Service 7: Chemicals & Raw Materials */}
            <div className="service-card reveal delay-2">
              <div className="service-image-wrapper">
                <img src="/Chemicalsandrawmaterials.png" alt="Chemicals & Raw Materials" className="service-image" />
              </div>
              <div className="service-card-content">
                <h3>Chemicals & Raw Materials</h3>
                <p>Highly secure class-compliant transport for industrial chemicals and raw materials. Fully verified paperwork for hazardous sea and dry transit.</p>
              </div>
            </div>

            {/* Service 8: Global Sourcing */}
            <div className="service-card reveal delay-3">
              <div className="service-image-wrapper">
                <img src="/GlobalSourcing.png" alt="Global Sourcing" className="service-image" />
              </div>
              <div className="service-card-content">
                <h3>Global Sourcing</h3>
                <p>Supplier verification, supply chain inspection, and global procurement. We act as your overseas purchasing and cargo loading audit agent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="sourcing-section" id="sourcing">
        <div className="section-container sourcing-content-grid">
          <div className="sourcing-text">
            <span className="section-subtitle">Why Choose Us</span>
            <h3>Global Sourcing & Quality Sincerity</h3>
            <p>We do not just ship containers. We manage end-to-end global sourcing pipelines, ensuring quality audits at the origins, custom brokerage clearance, biological safety certifications, and punctual sea transits.</p>
            <div className="sourcing-features">
              <div className="sourcing-feature-item">
                <svg viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17L6.5,12.5L7.91,11.08L11,14.17L16.59,8.58L18,10L11,17Z"/>
                </svg>
                <div>
                  <h4>Source Auditing</h4>
                  <p>Verification of agro and timber products directly at origin.</p>
                </div>
              </div>
              <div className="sourcing-feature-item">
                <svg viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17L6.5,12.5L7.91,11.08L11,14.17L16.59,8.58L18,10L11,17Z"/>
                </svg>
                <div>
                  <h4>Optimal Transit Routing</h4>
                  <p>Smart path optimization to save freight charges and fuel taxes.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sourcing-graphic">
            <div className="graphic-item reveal">
              <div className="graphic-number">1</div>
              <div className="graphic-desc">
                <h4>Strict Origin Inspections</h4>
                <p>We check wood moisture and agro hygiene before sealing containers.</p>
              </div>
            </div>
            <div className="graphic-item reveal delay-1">
              <div className="graphic-number">2</div>
              <div className="graphic-desc">
                <h4>Specialized Port Rigging</h4>
                <p>Proper securing of heavy machinery on flat racks and open platforms.</p>
              </div>
            </div>
            <div className="graphic-item reveal delay-2">
              <div className="graphic-number">3</div>
              <div className="graphic-desc">
                <h4>Frictionless Customs</h4>
                <p>Customs declaration paperwork handled in-house for speed and peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section" id="contact">
        <div className="section-container">
          <div className="section-title-wrapper reveal">
            <span className="section-subtitle">Get In Touch</span>
            <h2 className="section-title">Contact Our Global Desk</h2>
          </div>

          <div className="contact-grid">
            {/* Head Office Card */}
            <div className="contact-card reveal">
              <svg viewBox="0 0 24 24">
                <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A8,8 0 0,0 4,10C4,15.25 12,22 12,22C12,22 20,15.25 20,10A8,8 0 0,0 12,2Z"/>
              </svg>
              <h4>Head Office</h4>
              <p>145 P Block Cross Street,<br />Arumbakkam, Chennai - 600106</p>
            </div>

            {/* Phone Card */}
            <div className="contact-card reveal delay-1">
              <svg viewBox="0 0 24 24">
                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
              </svg>
              <h4>Phone Support</h4>
              <p className="contact-name">Mohammed Jarjees</p>
              <p><a href="tel:+919600040004">+91 96000 40004</a></p>
            </div>

            {/* Email Card */}
            <div className="contact-card reveal delay-2">
              <svg viewBox="0 0 24 24">
                <path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z"/>
              </svg>
              <h4>Email Desk</h4>
              <p className="contact-name">Mohammed Jarjees</p>
              <p><a href="mailto:Jarjees@unitedmerchantshippingline.com">Jarjees@unitedmerchantshippingline.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-about">
            <a href="#" className="logo">
              <svg viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A1.5,1.5 0 0,1 13.5,5.5A1.5,1.5 0 0,1 12,7A1.5,1.5 0 0,1 10.5,5.5A1.5,1.5 0 0,1 12,4M12,18A1.5,1.5 0 0,1 10.5,16.5A1.5,1.5 0 0,1 12,15A1.5,1.5 0 0,1 13.5,16.5A1.5,1.5 0 0,1 12,18M18.5,12A1.5,1.5 0 0,1 17,13.5A1.5,1.5 0 0,1 15.5,12A1.5,1.5 0 0,1 17,10.5A1.5,1.5 0 0,1 18.5,12M5.5,12A1.5,1.5 0 0,1 7,10.5A1.5,1.5 0 0,1 8.5,12A1.5,1.5 0 0,1 7,13.5A1.5,1.5 0 0,1 5.5,12M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"/>
              </svg>
              <div className="logo-text">
                <h1 style={{ color: "#FFF" }}>UMSL</h1>
              </div>
            </a>
            <p>United Merchant Shipping Line is a leading regional logistics and procurement partner, managing flat rack, OOG, chemical, and dry container loads globally.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#">Home</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#sourcing">Sourcing Commitment</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Details</h4>
            <ul className="footer-contact-list">
              <li>
                <svg viewBox="0 0 24 24"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/></svg>
                <span>Mohammed Jarjees</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/></svg>
                <span>145 P Block Cross Street, Arumbakkam, Chennai - 600106</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/></svg>
                <span>+91 96000 40004</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24"><path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z"/></svg>
                <span>Jarjees@unitedmerchantshippingline.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 United Merchant Shipping Line. All rights reserved.</p>
          <p>Designed for Excellence in Logistics</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919600040004?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20logistics%20and%20sourcing%20services." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.759.46 3.473 1.33 4.98L2 22l5.233-1.371a9.923 9.923 0 0 0 4.779 1.23h.005c5.501 0 9.982-4.482 9.982-9.988A9.925 9.925 0 0 0 12.012 2zm5.727 14.167c-.253.711-1.258 1.302-1.745 1.383-.482.08-1.077.108-1.706-.093a11.968 11.968 0 0 1-3.69-1.921c-1.428-1.072-2.357-2.348-2.73-2.977-.375-.63-.732-1.637-.732-2.616 0-1.253.645-1.867.872-2.102.227-.235.501-.295.669-.295.167 0 .333.003.475.009.147.006.347-.056.545.42.203.49.693 1.693.754 1.818.061.124.102.27.019.434-.083.167-.124.27-.253.42-.129.15-.27.336-.386.452-.129.129-.264.27-.113.528a9.429 9.429 0 0 0 1.706 2.115c.78.694 1.438 1.135 2.072 1.45.63.315.824.256.969.09.145-.167.625-.725.793-.974.167-.25.333-.209.559-.124.227.086 1.442.68 1.69 1.05.247.37.247.556.12.867z"/>
        </svg>
      </a>
    </>
  );
}
