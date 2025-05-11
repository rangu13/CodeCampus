// Sample mentor data (replace with API call in production)
const mentors = [
    {
        name: "Alice Johnson",
        expertise: "Team Leadership, Project Management",
        bio: "Alice has 10 years of experience managing teams and delivering successful projects.",
        image: "https://via.placeholder.com/120"
    },
    {
        name: "Bob Smith",
        expertise: "Full-Stack Development",
        bio: "Bob is a full-stack developer with a passion for building scalable applications.",
        image: "https://via.placeholder.com/120"
    },
    {
        name: "Catherine Lee",
        expertise: "UI/UX Design",
        bio: "Catherine is a creative designer focused on delivering exceptional user experiences.",
        image: "https://via.placeholder.com/120"
    },
    {
        name: "David Brown",
        expertise: "Digital Marketing, SEO",
        bio: "David specializes in digital marketing strategies that drive results.",
        image: "https://via.placeholder.com/120"
    }
];

// Function to render mentors
const renderMentors = (mentorList) => {
    const container = document.getElementById('mentors-container');
    container.innerHTML = ''; // Clear existing mentors
    mentorList.forEach(mentor => {
        const mentorCard = `
            <div class="mentor-card">
                <img src="${mentor.image}" alt="${mentor.name}">
                <h3>${mentor.name}</h3>
                <p class="expertise">${mentor.expertise}</p>
                <p>${mentor.bio}</p>
                <a href="#" class="connect-btn">Connect</a>
            </div>
        `;
        container.innerHTML += mentorCard;
    });
};

// Render all mentors initially
renderMentors(mentors);

// Search functionality
document.getElementById('search-bar').addEventListener('input', function () {
    const keyword = this.value.toLowerCase();
    const filteredMentors = mentors.filter(mentor =>
        mentor.name.toLowerCase().includes(keyword) ||
        mentor.expertise.toLowerCase().includes(keyword)
    );
    renderMentors(filteredMentors);
});