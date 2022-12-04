//***************************************************** USER DASHBOARD MENU ***************************************************//
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
    const deleteButtons = document.querySelectorAll(".delete-resume");
        deleteButtons.forEach((el) =>
            el.addEventListener("click", (event) => deleteResumeHandler(event))
    );