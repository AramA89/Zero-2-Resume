//***************************************************** USER DASHBOARD MENU ***************************************************//
const submitResumeHandler = async (event) => {
    event.preventDefault();

const contactInfo = document.querySelector(".contact-input").value
const education = document.querySelector(".education-input").value
const workExperience = document.querySelector(".work-input").value
const skills = document.querySelector(".skill-input").value
const summary = document.querySelector(".content-input").value
const user_id = document.querySelector(".logged-in-user-id").innerHTML;
    if (!user_id) {
        alert("Error❗⛔ Unable to create resume, please login❗⛔");
        } else {
    if  (contactInfo && education && workExperience && skills && summary && user_id) {
        const response = await fetch("/api/resume/", {
            method: "POST",
            body: JSON.stringify({ contactInfo, education, workExperience, skills, summary, user_id }),
            headers: { "Content-Type": "application/json" },
    });
            if (response.ok) {
                document.location.replace("/dashboard")
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

//DELETE POST//
    const deleteResumeHandler = async (event) => {
        event.preventDefault();
        const deleteResumeId = event.target.getAttribute("data-id");
        if (deleteResumeId) {
            const response = await fetch("/api/resume/" + deleteResumeId, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {

            alert(`Warning❗⛔ Resume deleted❗❌` 
                                +
            document.location.replace("/dashboard"));

            } else {
                alert("Error❗⛔ Failed to delete resume❗⛔" +
                    response.status +
                    ": " +
                    response.statusText);
                }
        }
    };
//EVENT LISTENERS//
    document
        .querySelector(".submit-resume")
        .addEventListener("click", submitResumeHandler
    );
    const deleteButtons = document.querySelectorAll(".delete-resume");
        deleteButtons.forEach((el) =>
            el.addEventListener("click", (event) => deleteResumeHandler(event))
    );