const API_ENDPOINT_MOVIES = "http://localhost:3010/api/movies";

export const handleSubmit = async (formData) => {
    try {
        const parsedFormData = {
            ...formData,
            duration: parseInt(formData.duration),
            budget: parseInt(formData.budget),
        };

        const response = await fetch(API_ENDPOINT_MOVIES, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(parsedFormData),
        });
        const data = await response.json();
        console.log("Data sent successfully:", data);
        return data;
    } catch (error) {
        console.error("Error sending data:", error);
        throw error;
    }
};