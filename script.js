function checkSecurity() {
    const companyName = document.getElementById("companyName").value;
    const resultsSection = document.getElementById("resultsSection");
    
    if (companyName === "") {
        alert("يرجى إدخال اسم الشركة");
        return;
    }

‎    // عملية محاكاة بسيطة
    const randomRiskLevel = Math.floor(Math.random() * 3);
    let riskText = "لا توجد ثغرات معروفة";
    let riskColor = "green";

    switch(randomRiskLevel) {
        case 0:
            riskText = "ثغرات خطيرة تم اكتشافها";
            riskColor = "red";
            break;
        case 1:
            riskText = "ثغرات متوسطة تم اكتشافها";
            riskColor = "yellow";
            break;
        case 2:
            riskText = "ثغرات بسيطة تم اكتشافها";
            riskColor = "orange";
            break;
    }

    resultsSection.innerHTML = `
        <h3>نتائج فحص ${companyName}</h3>
        <p style="color: ${riskColor}; font-size: 20px;">${riskText}</p>
    `;
    resultsSection.style.display = "block";
}
