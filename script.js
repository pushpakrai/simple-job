// Sample job listings data (can be fetched from an API)
const jobListings = [
    { title: "Software Engineer", location: "Tokyo", salary: "$80,000" },
    { title: "Marketing Specialist", location: "Osaka", salary: "$65,000" },
    { title: "Marketing Specialist", location: "Osaka", salary: "$65,000" },
      { title: "Cloud Specialist", location: "df", salary: "$65,000" },    { title: "Software Engineer", location: "Tokyo", salary: "$80,000" },
      { title: "Marketing Specialist", location: "Osaka", salary: "$65,000" },
      { title: "Marketing Specialist", location: "Osaka", salary: "$65,000" },
        { title: "Cloud Specialist", location: "df", salary: "$65,000" },    { title: "Software Engineer", location: "Tokyo", salary: "$80,000" },
        { title: "Marketing Specialist", location: "Osaka", salary: "$65,000" },
        { title: "Marketing Specialist", location: "Osaka", salary: "$65,000" },
          { title: "Cloud Specialist", location: "df", salary: "$65,000" },
];

// Function to generate job listings HTML dynamically
function generateJobListings(listings) {
    const jobListingsContainer = document.querySelector('.job-listings');
    jobListingsContainer.innerHTML = '';
    listings.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `
            <img src="https://th.bing.com/th/id/OIP.5ZXqdwZgQkhZ24QZB8W9bAHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Job Image">
            <div class="job-card-content">
                <h3>${job.title}</h3>
                <p>Location: ${job.location}</p>
                <p>Salary: ${job.salary}</p>
                <a href="#" class="btn">Apply Now</a>
            </div>
        `;
        jobListingsContainer.appendChild(jobCard);
    });
}

// Function to filter job listings based on search input
function filterJobListings(searchTerm) {
    const filteredListings = jobListings.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    generateJobListings(filteredListings);
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', function() {
    filterJobListings(this.value.trim());
});

// Example of micro-interaction: Smooth scroll to sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
