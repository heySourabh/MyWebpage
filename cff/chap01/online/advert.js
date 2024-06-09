let adElems = document.getElementsByClassName("advert")

for (let i = 0; i < adElems.length; i++) {
    const element = adElems[i];
    element.innerHTML = `
    <br>
    <p>Content continues after advertisement...</p>
    <div style="background:lightblue; padding:1em; margin:0;">
    <p>--- Ad ---</p>
        <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5232558571567163"
            data-ad-slot="5414144171" data-ad-format="auto" data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    ---
    </div>
    <p>... Content continues ...</p>
    <br>
    `
}