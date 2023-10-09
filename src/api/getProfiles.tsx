export async function getProfiles() {
    const response = await fetch('http://localhost:5000/profile');
    return response.json();
  }