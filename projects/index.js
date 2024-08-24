// Example array data
const dataArray = [
  {
    image: "img/projects/wallicon-interior-pro.webp",
    project: "Wallicon",
    skills: [
      "UX Designer",
      "UI Designer",
      "Seller Panel",
      "Admin Panel",
      "Figma",
    ],
    description:
      "Wallicon offers a variety of interior products. Sellers can register easily, set up their profile, choose products, and customize prices. They can manage orders and promote their site on Facebook, Instagram, WhatsApp, and other social media platforms.",
    url: "https://wallicon.in",
    url2: "https://wallicon.in",
  },
  {
    image: "img/projects/restro-pos-webkul.webp",
    project: "Restro-POS Case Study",
    skills: ["UX Designer", "POS Panel", "Figma"],
    description:
      "Webkul provides a Restro POS table booking system with a user-friendly interface for fast transactions, featuring reporting, offline orders, payments, table selection, inventory management, staff management, customer insights, and promotions.",
    url: "https://wallicon.in",
    url2: "https://wallicon.in",
  },
];

// Get the container where the data will be displayed
const container = document.getElementById("data-container");

// Function to map array data to HTML
function mapArrayToHTML(array) {
  return array
    .map((item) => {
      return `
           <div class="col-md-6">
            <div class="blog-item wow fadeInUp" data-wow-delay="0.3s">
              <div class="blog-img">
                <img src="${item.image}" alt="Blog" />
              </div>
              <div class="blog-text">
                <h2>${item.project}</h2>
                <div class="blog-meta">
                  ${item?.skills?.map((skill) => `<p>${skill}</p>`).join("")}
                </div>
                <p class="truncate">
                  ${item.description}
                </p>
                 <div class="hero-btn">
                <a target="_blank" class="btn mt-2" href="${
                  item.url
                }">Read More</a>
                 <a target="_blank" class="btn mt-2" href="${
                   item.url2
                 }">View Demo</a>
                 </div>
              </div>
            </div>
          </div>
        `;
    })
    .join("");
}

// Inject the mapped HTML into the container
container.innerHTML = mapArrayToHTML(dataArray);

{
  /* <p><i class="far fa-user"></i>Admin</p>
                  <p><i class="far fa-list-alt"></i>Apps Design</p>
                  <p><i class="far fa-calendar-alt"></i>01-Jan-2045</p>
                  <p><i class="far fa-comments"></i>10</p> */
}
