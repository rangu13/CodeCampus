// Fetch saved settings (mocked here, replace with API call)
const fetchSettings = () => ({
    username: "JohnDoe",
    email: "johndoe@example.com",
    emailNotifications: true,
    smsNotifications: false,
    theme: "light"
});

// Save settings (mocked here, replace with API call)
const saveSettings = (settings) => {
    console.log("Settings saved:", settings);
};

// Load settings into the form
const loadSettings = () => {
    const settings = fetchSettings();

    document.getElementById('username').value = settings.username;
    document.getElementById('email').value = settings.email;
    document.getElementById('email-notifications').checked = settings.emailNotifications;
    document.getElementById('sms-notifications').checked = settings.smsNotifications;
    document.getElementById('theme').value = settings.theme;
};

// Save settings when the button is clicked
document.getElementById('save-btn').addEventListener('click', () => {
    const updatedSettings = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        emailNotifications: document.getElementById('email-notifications').checked,
        smsNotifications: document.getElementById('sms-notifications').checked,
        theme: document.getElementById('theme').value
    };

    saveSettings(updatedSettings);
    alert("Settings saved successfully!");
});

// Load settings on page load
document.addEventListener('DOMContentLoaded', loadSettings);