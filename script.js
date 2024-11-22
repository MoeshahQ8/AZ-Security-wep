async function checkSecurity() {
    const companyName = document.getElementById("companyName").value;
    const resultsSection = document.getElementById("resultsSection");
    
    if (companyName === "") {
        alert("يرجى إدخال اسم الشركة");
        return;
    }

    // إعداد الطلب لجلب البيانات من API
    const apiURL = "https://cveawg.mitre.org/api/cves/"; // مثال API للثغرات
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        // عرض البيانات
        let output = `<h3>نتائج فحص ${companyName}</h3>`;
        data.forEach(vulnerability => {
            output += `
                <div style="margin-bottom: 20px;">
                    <h4 style="color: red;">${vulnerability.id}</h4>
                    <p>${vulnerability.description}</p>
                    <p><strong>درجة الخطورة:</strong> ${vulnerability.severity}</p>
                </div>
            `;
        });

        resultsSection.innerHTML = output;
    } catch (error) {
        resultsSection.innerHTML = `<p style="color: red;">حدث خطأ أثناء جلب البيانات. حاول مجددًا لاحقًا.</p>`;
    }

    resultsSection.style.display = "block";
}
