// Example array data
const dataArray = [
  {
    image: "img/projects/wallicon-interior-pro.webp",
    project: "Wallicon",
    skills: [
      "UX Design",
      "UI Design",
      "Seller Panel",
      "Admin Panel",
      "Dealer Website",
      "Figma",
    ],
    description:
      "Wallicon offers a variety of interior products. Sellers can register easily, set up their profile, choose products, and customize prices. They can manage orders and promote their site on Facebook, Instagram, WhatsApp, and other social media platforms.",
    url: "https://wallicon.in",
    url2: "https://dealer.wallicon.in",
    url2Name: "Dealer Website"
  },
  {
    image: "img/projects/discount-engine.webp",
    project: "Designing for Deals: A Simple Discount System Design",
    skills: ["UX Design", "User Research", "UI Design", "Discount Engine Design", "Admin Panel", "Wireframing", "Figma"],
    description:
      "This project showcases the design of an easy-to-use discount system for a luxury jewelry e-commerce platform. It features seamless discount integration on product and checkout pages, along with a simple admin dashboard for managing offers. The goal is to boost sales and enhance customer experience.",
    url: "https://www.behance.net/gallery/208140321/Designing-for-Deals-A-Simple-Discount-System-Design",
    url2: "",
  },
  {
    image: "img/projects/restro-pos-webkul.webp",
    project: "Restro-POS Case Study",
    skills: ["UX Design", "UI Design", "POS Panel", "Figma"],
    description:
      "Webkul provides a Restro POS table booking system with a user-friendly interface for fast transactions, featuring reporting, offline orders, payments, table selection, inventory management, staff management, customer insights, and promotions.",
    url: "https://webkul.design/project/pos/",
    url2: "",
  },
  {
    image: "img/projects/go-park-yourself.webp",
    project: "Go Park Yourself- UX Case Study",
    skills: ["UX Design", "User Research", "Wireframing", "Prototyping", "Adobe XD"],
    description:
      `Go Park Yourself case study addresses the widespread problem of finding parking, 
      that helps users find available parking spots in real-time, provides navigation to the parking spot, 
      and assists in locating their vehicle within the parking area.`,
    url: "https://www.behance.net/gallery/113205683/Go-Park-Yourself-(Parking-App)-UX-Case-Study",
    url2: "",
  },
  {
    image: "img/projects/krayin-crm-webkul.webp",
    project: "Krayin CRM- Case Study",
    skills: ["UI Design", "Wireframing", "CRM Design", "Figma"],
    description:
      "Krayin CRM by Webkul is a free, open-source Laravel CRM for SMEs and enterprises that automates sales and marketing to drive substantial growth through complete customer lifecycle management.",
    url: "https://webkul.design/project/krayin-crm/",
    url2: "https://demo.krayincrm.com/",
  },
  {
    image: "img/projects/bagisto-webkul.webp",
    project: "Bagisto",
    skills: ["UI Design", "Wireframing", "Prototyping", "Website Design", "Admin Panel", "Figma"],
    description:
      `Bagisto by Webkul is an open-source e-commerce framework built on Laravel and Vue.js, 
    featuring a user-friendly interface, modular architecture, 
    and seamless integrations for easy customization.`,
    url: "https://bagisto.com/en/",
    url2: "https://demo.bagisto.com/",
    urlName: "",
    url2Name: "",
  },
];

const container = document.getElementById("data-container");

function mapArrayToHTML(array) {
  return array
    .map((item) => {
      const primary = item.url
        ? `<a target="_blank" rel="noopener noreferrer" class="btn mt-2 project-card-cta" href="${item.url}">${item.urlName || "View"}<span class="cta-arrow" aria-hidden="true">→</span></a>`
        : "";
      const secondary = item.url2
        ? `<a target="_blank" rel="noopener noreferrer" class="btn mt-2" href="${item.url2}">${item.url2Name || "View Demo"}</a>`
        : "";
      const hint = item.url
        ? `<span class="project-card-hint" aria-hidden="true">View Project</span>`
        : "";

      return `
          <div class="col-md-6 mb-4">
            <article class="blog-item project-card wow fadeInUp h-100">
              <div class="blog-img project-card-media">
                <div class="project-card-media-shift">
                  <img src="${item.image}" alt="${item.project}" />
                </div>
                ${hint}
              </div>
              <div class="blog-text">
                <h2 class="project-card-title">${item.project}</h2>
                <div class="blog-meta">
                  ${item?.skills?.map((skill) => `<p>${skill}</p>`).join("")}
                </div>
               <div class="text-dsc">
                <p class="truncate">
                  ${item.description}
                </p>
                 <div class="project-card-actions">
               ${primary}
                ${secondary}
                 </div>
                 </div>
              </div>
            </article>
          </div>
        `;
    })
    .join("");
}

if (container) {
  container.innerHTML = mapArrayToHTML(dataArray);
  if (typeof window.setupHeadingReveal === "function") {
    window.setupHeadingReveal();
  }
}
