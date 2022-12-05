const displayFormHandler = async (event) => {
    event.preventDefault();

const contactInfo = document.querySelector(".contact-input").value
const education = document.querySelector(".education-input").value
const workExperience = document.querySelector(".work-input").value
const skills = document.querySelector("#skill-1", "#skill-2", "#skill-3").value
const summary = document.querySelector("#summary-input").value
const user_id = document.querySelector(".logged-in-user-id").innerHTML;

    if (!user_id) {
        alert("Error❗⛔ Unable to view resume, please login❗⛔");
        } else {
        if (contactInfo && education && workExperience && skills && summary && user_id) {
            const response = await fetch("/api/resume/" + user_id, {
                method: "GET",
                body: JSON.stringify({ contactInfo, education, workExperience, skills, summary, user_id }),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                document.location.replace("/dashboard");
                console.log(document.replace('/'));
            } else {
                alert("Error❗⛔ Failed to view resume❗⛔" +
                        response.status +
                        ": " +
                        response.statusText
                );
            }
            }
        };
    };

