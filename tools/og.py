import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome')
        pg = await b.new_page(viewport={'width':1200,'height':630})
        await pg.goto('http://localhost:4321/ru/', wait_until='networkidle')
        await pg.evaluate("""() => {
          document.body.innerHTML = `<div style="width:1200px;height:630px;display:grid;grid-template-columns:1fr 420px;align-items:center;box-sizing:border-box;background:#eef1ea;border-bottom:14px solid #15292e"><div style="padding:0 0 0 80px">
            <div style="font:780 88px/1.02 'Piazzolla Variable';letter-spacing:-0.01em;word-spacing:0.08em;color:#15292e">Konstantin Stein</div>
            <div style="font:500 30px/1.4 'Onest Variable';color:#4a5d60;margin-top:22px">Константин Штейн — business, IT, projects, passions</div>
            <div style="font:650 32px 'Onest Variable';color:#3d7a8a;margin-top:40px">stein.today</div></div>
            <img src="/photo.jpg" style="width:420px;height:616px;object-fit:cover;object-position:center 20%"></div>`;
        }""")
        await pg.wait_for_timeout(300)
        await pg.screenshot(path='public/og.png')
        await b.close()
asyncio.run(main())
