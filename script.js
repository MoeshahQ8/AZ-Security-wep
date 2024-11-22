async function checkSecurity() {
    const companyUrl = document.getElementById("companyUrl").value;
    const resultsSection = document.getElementById("resultsSection");

    if (companyUrl === "") {
        alert("يرجى إدخال رابط الشركة");
        return;
    }

    // إعداد الطلب إلى OpenAI API لتحليل الرابط
    const apiKey = "YOUR_OPENAI_API_KEY"; // ضع مفتاح OpenAI الخاص بك هنا
    const apiURL = "https://api.openai.com/v1/completions";

    try {
        const response = await fetch(apiURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "text-davinci-003", // يمكنك اختيار نموذج آخر حسب احتياجك
                prompt: `حلل الرابط التالي: ${companyUrl}. ما هي الثغرات الأمنية المحتملة وكيف يمكن حلها؟`,
                max_tokens: 500
            })
        });

        if (!response.ok) {
            throw new Error("حدث خطأ أثناء الاتصال بخدمة الذكاء الاصطناعي");
        }

        const data = await response.json();

        // عرض النتائج
        resultsSection.innerHTML = `
            <h3>تحليل الرابط:</h3>
            <p>${data.choices[0].text.trim()}</p>
        `;
        resultsSection.style.display = "block";

    } catch (error) {
        resultsSection.innerHTML = `<p style="color: red;">حدث خطأ أثناء جلب البيانات: ${error.message}</p>`;
        resultsSection.style.display = "block";
    }
}
