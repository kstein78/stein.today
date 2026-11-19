# Логотип и фавиконка stein.today из герба von Stein (Schwed. A. 30.9.1653).
# Щит — геометрия, звёзды — правильные пятиконечные, олень с короной — трассировка оригинала,
# усреднённая с зеркальной копией (фигура симметрична), корона — отдельной фигурой.
from PIL import Image
import numpy as np
from scipy import ndimage
import potrace, json, math, sys
SRC=sys.argv[1]
src=np.asarray(Image.open(SRC).convert('RGB')).astype(float)
y0,y1,x0,x1=954,1781,666,1363
crop=src[y0:y1,x0:x1]; r,g,b=crop[...,0],crop[...,1],crop[...,2]
blue=(src[...,2]>src[...,0]+40)&(src[...,2]>src[...,1]+10)
lab,_=ndimage.label(ndimage.binary_closing(blue,iterations=2))
sb=(lab==lab[1400,1000])[y0:y1,x0:x1]
shield=ndimage.binary_fill_holes(ndimage.binary_closing(sb,iterations=6))
inner=ndimage.binary_erosion(shield,iterations=8)
gold=(r>b+25)&(r>90)&(g>70)&inner
info=json.load(open('info.json')); bx0,by0,bx1,by1=info['stag_bbox']
region=np.zeros_like(gold); region[by0-5:by1+5,bx0-5:bx1+5]=True
yy,xx=np.ogrid[:gold.shape[0],:gold.shape[1]]
for cx,cy,R in info['stars']: region&=((xx-cx)**2+(yy-cy)**2)>(R*1.15)**2
stag=(gold&region).astype(float)
axis=347.5; W=gold.shape[1]
mx=np.clip(np.round(2*axis-np.arange(W)).astype(int),0,W-1)
m=ndimage.gaussian_filter((stag+stag[:,mx])/2,1.9)>0.42
m=ndimage.binary_opening(m,iterations=2)
lab,n=ndimage.label(m); sz=ndimage.sum(m,lab,range(1,n+1)); m=np.isin(lab,[i+1 for i,s in enumerate(sz) if s>150])
bm=potrace.Bitmap(~m); path=bm.trace(turdsize=30,alphamax=1.0,opticurve=True,opttolerance=0.45)
d=[]
for c in path:
    s=c.start_point; d.append(f"M{s.x:.1f},{s.y:.1f}")
    for seg in c.segments:
        if seg.is_corner: d.append(f"L{seg.c.x:.1f},{seg.c.y:.1f}L{seg.end_point.x:.1f},{seg.end_point.y:.1f}")
        else: d.append(f"C{seg.c1.x:.1f},{seg.c1.y:.1f} {seg.c2.x:.1f},{seg.c2.y:.1f} {seg.end_point.x:.1f},{seg.end_point.y:.1f}")
    d.append("Z")
stag_d="".join(d)
def star(cx,cy,R):
    pts=[]
    for i in range(10):
        a=-math.pi/2+i*math.pi/5; rr=R if i%2==0 else R*0.42
        pts.append(f"{cx+rr*math.cos(a):.1f},{cy+rr*math.sin(a):.1f}")
    return "M"+"L".join(pts)+"Z"
R=61; stars=star(347.5,168.5,R)+star(347.5-186,536,R)+star(347.5+186,536,R)
AZ,OR='#26508f','#d2a548'
crown=(f'<path d="M258,368L437,368L446,330L410,292L386,326L347.5,256L309,326L285,292L249,330Z" fill="{OR}"/>'
       f'<g fill="{OR}"><circle cx="285" cy="290" r="11"/><circle cx="410" cy="290" r="11"/><circle cx="347.5" cy="252" r="12"/></g>')
crown_lines=(f'<path d="M262,368L433,368M256,331L439,331" stroke="{AZ}" stroke-width="7" stroke-linecap="round" fill="none"/>'
             f'<g fill="{AZ}"><circle cx="300" cy="350" r="7"/><circle cx="347.5" cy="350" r="7"/><circle cx="395" cy="350" r="7"/></g>')
shield_d="M30,30H668V470C668,650 520,760 349,808C178,760 30,650 30,470Z"
def svg(vb, small=False):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}"><title>Stein</title>'
            f'<path d="{shield_d}" fill="{AZ}"/><path d="{stag_d}" fill="{OR}" fill-rule="evenodd"/><path d="{stars}" fill="{OR}"/>{crown}{"" if small else crown_lines}</svg>\n')
open('logo.svg','w').write(svg("0 0 698 838"))
open('favicon.svg','w').write(svg("-70 0 838 838", small=True))
print('ok', len(stag_d))
