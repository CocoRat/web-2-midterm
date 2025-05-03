console.log("Hello updated world!!");

document.addEventListener("DOMContentLoaded", () => {

    const dataForm = document.getElementById('post-form')
    dataForm.addEventListener("submit", (event) => {

        event.preventDefault(); //prevents page from loading

        const formData = {
            post: document.getElementById("newpost").value,
        };

        fetch("https://firestore.googleapis.com/v1/projects/forumbackend-c175a/databases/(default)/documents/messages/?key=AIzaSyDwbwMyb66teAKL5BVNA3Jx7n6bwjek0AQ", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })

            .then(response => response.json())
            .then(data => {
                console.log("Success:", data)
                dataForm.reset()
            })
            .catch(error => {
                console.error("Error:", error);
            });

    });
});