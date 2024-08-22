// Example array data
const dataArray = [
    {
        project: "Project 1",
        description: "Lorem ipsum dolor sit amet",
        image: "img/projects/wallicon-interior-pro.webp",
        url: "https://wallicon.in"
    }
];

// Get the container where the data will be displayed
const container = document.getElementById('data-container');

// Function to map array data to HTML
function mapArrayToHTML(array) {
    return array.map(item => {
        return `
           <div class="col-lg-4 col-md-6">
            <div class="blog-item wow fadeInUp" data-wow-delay="0.3s">
              <div class="blog-img">
                <img src="${item.image}" alt="Blog" />
              </div>
              <div class="blog-text">
                <h2>${item.project}</h2>
                <div class="blog-meta">
                  <p><i class="far fa-user"></i>Admin</p>
                  <p><i class="far fa-list-alt"></i>Apps Design</p>
                  <p><i class="far fa-calendar-alt"></i>01-Jan-2045</p>
                  <p><i class="far fa-comments"></i>10</p>
                </div>
                <p>
                  ${item.description}
                </p>
                <a target="_blank" class="btn" href="${item.url}" 
                  >Read More <i class="fa fa-angle-right"></i
                ></a>
              </div>
            </div>
          </div>
        `;
    }).join('');
}

// Inject the mapped HTML into the container
container.innerHTML = mapArrayToHTML(dataArray);
