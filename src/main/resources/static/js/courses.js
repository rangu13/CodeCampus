// Sample course data (replace with API call in production)
const courses = [
    { name: "Java Basics", description: "Learn the fundamentals of Java programming." },
    { name: "Spring Boot", description: "Build powerful web applications using Spring Boot." },
    { name: "JavaScript Essentials", description: "Master JavaScript and its key concepts." },
    { name: "React for Beginners", description: "Start building dynamic web apps with React." },
    { name: "Python for Data Science", description: "Analyze data and create machine learning models." }
];

// Function to render courses
const renderCourses = (courseList) => {
    const container = document.getElementById('courses-container');
    container.innerHTML = ''; // Clear existing courses
    courseList.forEach(course => {
        const courseCard = `
            <div class="course-card">
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <a href="#" class="learn-more-btn">Learn More</a>
            </div>
        `;
        container.innerHTML += courseCard;
    });
};

// Render all courses initially
renderCourses(courses);

// Search functionality
document.getElementById('search-bar').addEventListener('input', function () {
    const keyword = this.value.toLowerCase();
    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(keyword) ||
        course.description.toLowerCase().includes(keyword)
    );
    renderCourses(filteredCourses);
});