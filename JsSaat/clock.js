const kullaniciAdi = prompt("Lütfen isminizi giriniz");
document.getElementById("myName").textContent = `${kullaniciAdi}`;

function updateTime() {
    const now = new Date();
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    document.getElementById("myClock").textContent = `${now.toLocaleDateString()} - ${now.toLocaleTimeString()} ${days[now.getDay()]}`;
}

updateTime();
setInterval(updateTime, 1000);