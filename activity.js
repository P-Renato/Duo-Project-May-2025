// Get query parameter
const params = new URLSearchParams(window.location.search);
const activityName = params.get("name");

// Load JSON data
fetch('/data/activities.json')
  .then(res => res.json())
  .then(data => {
    // Find matching activity
    const activity = data.find(a => a.name.toLowerCase() === activityName.toLowerCase());

    if (!activity) {
      document.getElementById("activity-container").innerHTML = "<p>Activity not found.</p>";
      return;
    }

    console.log(data)
    // Fill content
    document.getElementById("title").textContent = activity.name;
    document.getElementById("description").textContent = activity.description;
    document.getElementById("image").src = activity.image;
    document.getElementById("image").alt = activity.name;
  })
  .catch(err => {
    console.error("Failed to load activity data:", err);
  });
