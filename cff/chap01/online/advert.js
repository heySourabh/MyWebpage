let adElems = document.getElementsByClassName("advert")

for (let i = 0; i < adElems.length; i++) {
    const element = adElems[i];
    element.innerHTML = `
    <br>
    <p>Content continues after advertisement...</p>
    <div style="background:lightblue; padding:1em; margin:0;">
    <p>--- Ad ---</p>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5232558571567163"
    crossorigin="anonymous"></script>
    <!-- CFF inline ads -->
    <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-5232558571567163"
        data-ad-slot="2481369001"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
    ---
    </div>
    <p>... Content continues ...</p>
    <br>
    `
}