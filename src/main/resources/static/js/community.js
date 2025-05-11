// Sample community data (replace with API call in production)
const communityMembers = [
    {
        name: "Alice Johnson",
        role: "Team Leader",
        bio: "Alice leads the team with a vision for excellence.",
        image: "https://via.placeholder.com/100"
    },
    {
        name: "Bob Smith",
        role: "Developer",
        bio: "Bob is a full-stack developer with a passion for coding.",
        image: "https://via.placeholder.com/100"
    },
    {
        name: "Catherine Lee",
        role: "Designer",
        bio: "Catherine is a creative designer focused on user experiences.",
        image: "https://via.placeholder.com/100"
    },
    {
        name: "David Brown",
        role: "Marketer",
        bio: "David specializes in digital marketing and strategy.",
        image: "https://via.placeholder.com/100"
    }
];

// Function to render community members
const renderCommunity = (members) => {
    const container = document.getElementById('community-container');
    container.innerHTML = ''; // Clear existing members
    members.forEach(member => {
        const memberCard = `
            <div class="community-card">
                <img src="${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p class="role">${member.role}</p>
                <p>${member.bio}</p>
                <a href="#" class="connect-btn">Connect</a>
            </div>
        `;
        container.innerHTML += memberCard;
    });
};

// Render all community members initially
renderCommunity(communityMembers);

// Search functionality
document.getElementById('search-bar').addEventListener('input', function () {
    const keyword = this.value.toLowerCase();
    const filteredMembers = communityMembers.filter(member =>
        member.name.toLowerCase().includes(keyword) ||
        member.role.toLowerCase().includes(keyword)
    );
    renderCommunity(filteredMembers);
});