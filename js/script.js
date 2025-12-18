function replaceName() {
    console.log("Tombol submit sudah merespon!"); // <-- Tambah ini
    
    const emailValue = document.getElementById("email").value;
    console.log("Email yang diambil:", emailValue); // <-- Tambah ini
    
    // ... sisa kode lainnya ...
    return false;
}
// 1. FUNGSI WELCOMING SPEECH (GANTI NAMA)
function askUserName() {
    let name = prompt("Halo, siapakah nama anda?", "");
    const nameElement = document.getElementById("name");

    if (nameElement) {
        if (name !== null && name !== "") {
            nameElement.innerText = name;
        } else {
            nameElement.innerText = "Guest";
        }
    }
}

// Jalankan fungsi welcoming saat halaman selesai dimuat
window.onload = askUserName;

// 2. FUNGSI SUBMIT FORM
function replaceName() {
    // Ambil nilai dari input HTML berdasarkan ID
    const emailValue = document.getElementById("email").value;
    const namaValue = document.getElementById("nama").value;
    const phoneValue = document.getElementById("phone").value;
    const birthDateValue = document.getElementById("birth-date").value;
    const messageValue = document.getElementById("message").value;

    // Masukkan nilai tersebut ke dalam SPAN di Current Data
    document.getElementById("display-email").innerText = emailValue;
    document.getElementById("display-nama").innerText = namaValue;
    document.getElementById("display-phone").innerText = phoneValue;
    document.getElementById("display-birth").innerText = birthDateValue;
    document.getElementById("display-message").innerText = messageValue;

    // Alert feedback ke user
    alert("Pesan Terkirim!");

    // Mencegah halaman refresh
    return false;
}
// 3. FUNGSI UNTUK MENU GARIS TIGA
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        // Toggle class 'active' agar menu muncul/hilang
        navLinks.classList.toggle('active');
        
        // Animasi garis tiga jadi tanda silang (opsional)
        menuToggle.classList.toggle('is-active');
    });
}