async function checkSecurity() {
    const companyName = document.getElementById("companyName").value;
    const resultsSection = document.getElementById("resultsSection");
    
    if (companyName === "") {
        alert("يرجى إدخال اسم الشركة");
        return;
    }

    // رابط الـ API (مثال لرابط ديناميكي)
    const apiURL = `https://api.example.com/vulnerabilities?company=${encodeURIComponent(companyName)}`;

    try {
        // جلب البيانات من API
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error("حدث خطأ أثناء الاتصال بـ API");
        }

        const data = await response.json();

        // إذا لم يتم العثور على نتائج
        if (data.length === 0) {
            resultsSection.innerHTML = `<p style="color: red;">لا توجد ثغرات معروفة لهذه الشركة.</p>`;
            resultsSection.style.display = "block";
            return;
        }

        // عرض البيانات
        let output = `<h3>نتائج فحص ${companyName}</h3>`;
        data.forEach(vulnerability => {
            output += `
                <div style="margin-bottom: 20px;">
                    <h4 style="color: red;">${vulnerability.id}</h4>
                    <p>${vulnerability.description}</p>
                    <p><strong>درجة الخطورة:</strong> ${vulnerability.severity}</p>
                    <p><strong>طريقة الحل:</strong> ${vulnerability.solution}</p>
                </div>
            `;
        });

        resultsSection.innerHTML = output;
    } catch (error) {
        resultsSection.innerHTML = `<p style="color: red;">حدث خطأ أثناء جلب البيانات. حاول مجددًا لاحقًا.</p>`;
    }

    resultsSection.style.display = "block";
}
