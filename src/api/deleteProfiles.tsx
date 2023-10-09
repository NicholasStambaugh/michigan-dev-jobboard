export async function deleteProfiles(profileId: string) {
    await fetch(`http://localhost:5000/profile/${profileId}`, {
        method: "DELETE",
    });
}