const text = `من ماهان هستم یک برنامه نویس وب..!`;
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("output").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 50); // تایپ هر حرف با تأخیر 100 میلی‌ثانیه
    }
}

typeText();

