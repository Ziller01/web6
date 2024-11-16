const boxList = document.getElementById("box-list");
for (let i = 0; i < 9; i++) {
    boxList.innerHTML += `<div id="box" class="w-64 bg-black hover:bg-white/10 overflow-hidden relative p-px">
    <div id="light" class="w-32 h-32 absolute rounded-full"></div>
    <div id="box2" class="w-full h-full bg-black overflow-hidden relative group text-white p-5 flex flex-col justify-start items-start">
      <i class="bi bi-card-text text-5xl text-blue-600"></i>
      <h1 class="font-bold">New Title</h1>
      <p class="text-white/70">Lorem ipsum dolor sit amet consectetur.</p>
      <div id="bigLight" class="w-80 h-80 absolute rounded-full opacity-0 group-hover:opacity-100"></div>
    </div>
  </div>`;
}
const lightFooter = document.getElementById("lightFooter"); // استدعاء جميع العناصر التي تحتوي على معرف light
const footer = document.getElementById("footer"); // استدعاء جميع العناصر التي تحتوي على معرف light
const lights = document.querySelectorAll("#light"); // استدعاء جميع العناصر التي تحتوي على معرف light
const bigLights = document.querySelectorAll("#bigLight"); // استدعاء جميع العناصر التي تحتوي على معرف light
const boxes = document.querySelectorAll("#box"); // استدعاء جميع العناصر التي تحتوي على معرف box



lightFooter.style.background = "radial-gradient(circle, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0))";
lights.forEach((light, index) => {
    light.style.background = "radial-gradient(circle, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0))";
});
bigLights.forEach((light, index) => {
    light.style.background = "radial-gradient(circle, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0))";
});

document.addEventListener("mousemove", (e) => {
    lights.forEach((light, index) => {
        light.style.left = e.clientX - boxes[index].offsetLeft - 64 + "px"; // 64 هو نصف عرض المربع
        light.style.top = e.clientY - boxes[index].offsetTop - 64 + "px"; // 64 هو نصف ارتفاع المربع
    });
    bigLights.forEach((light, index) => {
        light.style.left = e.clientX - boxes[index].offsetLeft - 160 + "px"; // 160 هو نصف عرض المربع
        light.style.top = e.clientY - boxes[index].offsetTop - 160 + "px"; // 160 هو نصف ارتفاع المربع
    });
    lightFooter.style.left = e.clientX - footer.offsetLeft - 64 + "px"; // 64 هو نصف عرض المربع
    lightFooter.style.top = e.clientY - footer.offsetTop - 64 + "px"; // 64 هو نصف ارتفاع المربع
});