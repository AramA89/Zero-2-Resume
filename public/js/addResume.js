//***************************************************** CREATE RESUME MENU ***************************************************//
const submitResumeHandler = async (event) => {
    event.preventDefault();

const name = document.querySelector("#name-input").value;
const phone = document.querySelector("#phone-input").value;
const email = document.querySelector("#email-input").value;
const github = document.querySelector("#github-input").value;
const school = document.querySelector("#school-input").value;
const degree = document.querySelector("#degree-input").value;
const employer = document.querySelector("#employer-input").value;
const dates_worked = document.querySelector("#dates-worked").value;
const skill_1 = document.querySelector("#skill-1").value;
const skill_2 = document.querySelector("#skill-2").value;
const skill_3 = document.querySelector("#skill-3").value;
const summary = document.querySelector("#summary-input").value;
const user_id = document.querySelector(".logged-in-user-id").innerHTML;
    if (!user_id) {
        alert("Error❗⛔ Unable to create resume, please login❗⛔");
    } else {
    if  (name && phone && email && github && school && degree && employer && dates_worked && skill_1 && skill_2 && skill_3 && summary) {
        const response = await fetch("/api/resume/", {
            method: "POST",
            body: JSON.stringify({ name, phone, email, github, school, degree, employer, dates_worked, skill_1, skill_2, skill_3, summary, user_id }),
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
//EVENT LISTENERS//
document
    .querySelector(".submit-resume")
    .addEventListener("click", submitResumeHandler
);
