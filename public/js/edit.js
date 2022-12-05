//***************************************************** EDIT RESUME MENU ***************************************************//
const submitResumeHandler = async (event) => {
    event.preventDefault();

const contactInfo = document.querySelector(".contact-input").value
const education = document.querySelector(".education-input").value
const workExperience = document.querySelector(".work-input").value
const skills = document.querySelector("#skill-1", "#skill-2", "#skill-3").value
const summary = document.querySelector("#summary-input")
const user_id = document.querySelector(".logged-in-user-id").innerHTML;
const resume_id = document.querySelector(".current-in-resume-id").innerHTML;


    if (!user_id) {
        alert("Error❗⛔ Unable to edit resume, please login❗⛔");
        } else {
        if (user_id) {
            const response = await fetch("/api/resume/" + resume_id, {
                method: "PUT",
                body: JSON.stringify({ contactInfo, education, workExperience, skills, summary, user_id }),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                document.location.replace("/dashboard")
                + 
                alert(`Success✅ Resume edited❕✍`);
            } else {
                alert("Error❗⛔ Failed to update resume❗⛔" +
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
        .querySelector(".edit-resume")
        .addEventListener("click", submitResumeHandler
    );
    const deleteLinks = document.querySelectorAll(".delete-resume");
        deleteLinks.forEach((el) =>
        el.addEventListener("click", (event) => deleteResumeHandler(event))
    );