//***************************************************** VIEW RESUME MENU ***************************************************//
const displayFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector("#name-input");
    const phone = document.querySelector("#phone-input");
    const email = document.querySelector("#email-input");
    const github = document.querySelector("#github-input");
    const school = document.querySelector("#school-input");
    const degree = document.querySelector("#degree-input");
    const employer = document.querySelector("#employer-input");
    const dates_worked = document.querySelector("#dates-worked");
    const skill_1 = document.querySelector("#skill-1");
    const skill_2 = document.querySelector("#skill-2");
    const skill_3 = document.querySelector("#skill-3");
    const summary = document.querySelector("#summary-input");
const user_id = document.querySelector(".logged-in-user-id").innerHTML;
const resume_id = document.querySelector(".current-resume-id").innerHTML;

    if (!user_id) {
        alert("Error❗⛔ Unable to view resume, please login❗⛔");
        } else {
        if (name && phone && email && github && school && degree && employer && dates_worked && skill_1 && skill_2 && skill_3 && summary) {
            const response = await fetch("/api/resume/" + resume_id, {
                method: "GET",
                body: JSON.stringify({ name, phone, email, github, school, degree, employer, dates_worked, skill_1, skill_2, skill_3, summary, user_id }),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                document.location.replace("/viewResume");
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
