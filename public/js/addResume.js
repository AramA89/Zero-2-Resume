//***************************************************** CREATE RESUME MENU ***************************************************//
const submitResumeHandler = async (event) => {
    event.preventDefault();

const contactInfo = document.querySelector(".contact-input").value
const education = document.querySelector(".education-input").value
const workExperience = document.querySelector(".work-input").value
const skills = document.querySelector("#skill-1", "#skill-2", "#skill-3").value
const summary = document.querySelector("#summary-input").value
const user_id = document.querySelector(".logged-in-user-id").innerHTML;
    if (!user_id) {
        alert("Error❗⛔ Unable to create resume, please login❗⛔");
    } else {
    if  (user_id) {
        const response = await fetch("/api/resume/", {
            method: "POST",
            body: JSON.stringify({ contactInfo, education, workExperience, skills, summary, user_id }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/addResume")
            + 
            alert(`Success✅ New Resume Added❕✍`);
        } else {
            alert(
                "Error❗⛔ Failed to create resume❗⛔" +
                    response.status +
                    ": " +
                    response.statusText
            );
        }
        } else {
            alert("Error❗⛔ Please fill out all required fields❗⛔");
        }
    }
};
//EVENT LISTENERS//
document
    .querySelector(".submit-resume")
    .addEventListener("click", submitResumeHandler
);
