const galleryContainer = document.getElementById("galleryContainer");

const totalImages = 4; // n1.jpg → nN.jpg
const baseURL = "https://jewellery-palvi.s3.ap-south-1.amazonaws.com/necklace/";

for (let i = 1; i <= totalImages; i++) {
  const div = document.createElement("div");
  div.classList.add("gallery-item");

  const img = document.createElement("img");
  img.src = `${baseURL}n${i}.jpeg`;
  img.alt = `Necklace Style ${i}`;

  const downloadLink = document.createElement("a");
  downloadLink.href = img.src;
  downloadLink.download = `Necklace_Style_${i}.jpg`;
  downloadLink.textContent = "Download";
  downloadLink.classList.add("download-btn");

  downloadLink.style.position = "absolute";
  downloadLink.style.bottom = "10px";
  downloadLink.style.left = "50%";
  downloadLink.style.transform = "translateX(-50%)";
  downloadLink.style.background = "#fff";
  downloadLink.style.padding = "6px 12px";
  downloadLink.style.borderRadius = "6px";
  downloadLink.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
  downloadLink.style.color = "#007BFF";
  downloadLink.style.textDecoration = "none";
  downloadLink.style.fontSize = "14px";
  downloadLink.style.display = "none";

  div.addEventListener("mouseenter", () => {
    downloadLink.style.display = "block";
  });
  div.addEventListener("mouseleave", () => {
    downloadLink.style.display = "none";
  });

  div.appendChild(img);
  div.appendChild(downloadLink);
  galleryContainer.appendChild(div);
}



