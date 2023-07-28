const API_ENDPOINT_URL = "/api/movies";

export const handleSubmit = async (formData) => {
    try {
        const response = await fetch(API_ENDPOINT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log("Data sent successfully:", data);
        return data;
    } catch (error) {
        console.error("Error sending data:", error);
        throw error;
    }
};