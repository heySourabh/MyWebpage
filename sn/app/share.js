const shareData = {
    title: "Suryanamaskar App",
    text: "Practice daily Suryanamaskar & stay fit!",
    url: "https://spbhat.in/sn/",
};

const shareBtn = document.getElementById("share-btn");
if (!navigator.canShare || !navigator.canShare(shareData)) {
    shareBtn.style.display = "none";
}

shareBtn.addEventListener("click", async () => {
    try {
        await navigator.share(shareData);
    } catch (err) {
        console.log(err);
    }
});