export async function createProfiles(username: string, password: string) {
  const response = await fetch('http://localhost:5000/profile', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      username,
      password
    }),
  });
  window.location.href = '/';
  return response.json();
}