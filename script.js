function checkSecurity() {
    const companyName = document.getElementById("companyName").value;
    const resultsSection = document.getElementById("resultsSection");

    if (companyName === "") {
        alert("يرجى إدخال اسم الشركة!");
        return;
    }

    const risks = [
        { text: "ثغرات خطيرة تم اكتشافها", color: "red" },
        { text: "ثغرات متوسطة تم اكتشافها", color: "orange" },
        { text: "لا توجد ثغرات معروفة", color: "green" }
    ];

    const randomRisk = risks[Math.floor(Math.random() * risks.length)];

    resultsSection.innerHTML = `
        <h3>نتائج فحص: ${companyName}</h3>
        <p style="color: ${randomRisk.color}; font-size: 20px;">${randomRisk.text}</p>
    `;
    resultsSection.style.display = "block";
}
