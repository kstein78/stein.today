import math, random, json
random.seed(7)
LON0, LAT0, S = 18.95, 45.52, 1000
K = math.cos(math.radians(45.3))
def P(lat, lon): return ((lon-LON0)*K*S, (LAT0-lat)*S)
def smooth(pts, closed=False):
    # Catmull-Rom -> cubic bezier
    n=len(pts); out=[]
    rng = range(n) if closed else range(n-1)
    d=f"M{pts[0][0]:.1f},{pts[0][1]:.1f}"
    for i in rng:
        p0=pts[(i-1)%n] if closed else pts[max(i-1,0)]
        p1=pts[i]; p2=pts[(i+1)%n]; p3=pts[(i+2)%n] if closed else pts[min(i+2,n-1)]
        c1=(p1[0]+(p2[0]-p0[0])/6, p1[1]+(p2[1]-p0[1])/6)
        c2=(p2[0]-(p3[0]-p1[0])/6, p2[1]-(p3[1]-p1[1])/6)
        d+=f" C{c1[0]:.1f},{c1[1]:.1f} {c2[0]:.1f},{c2[1]:.1f} {p2[0]:.1f},{p2[1]:.1f}"
    if closed: d+=" Z"
    return d
danube=[(45.52,19.07),(45.46,19.05),(45.40,19.03),(45.35,19.01),(45.31,19.10),(45.255,19.30),(45.245,19.45),(45.225,19.60),(45.228,19.72),(45.255,19.84),(45.235,19.90),(45.195,19.96),(45.16,20.05)]
dan=smooth([P(a,b) for a,b in danube])
# Fruska gora contours: nested noisy ellipses
cx,cy=P(45.15,19.62)
rings=[]
for lvl,(rx,ry) in enumerate([(232,52),(196,42),(158,33),(120,25),(82,17),(44,9)]):
    pts=[]; m=40
    ph=[random.uniform(0,6.28) for _ in range(3)]
    for i in range(m):
        t=2*math.pi*i/m
        r=1+0.07*math.sin(3*t+ph[0])+0.05*math.sin(5*t+ph[1])+0.03*math.sin(9*t+ph[2])
        pts.append((cx+rx*r*math.cos(t)+12*lvl, cy+ry*r*math.sin(t)-2*lvl))
    rings.append(smooth(pts,True))
grat={"lat":[(l,round(P(l,19.0)[1],1)) for l in (45.2,45.3,45.4,45.5)],"lon":[(l,round(P(45.3,l)[0],1)) for l in (19.2,19.4,19.6,19.8)]}
places={"rakovac":(45.185,19.78),"novisad":(45.255,19.845),"vajska":(45.417,19.117),"provala":(45.44,19.095),"beocin":(45.208,19.72)}
out={"w":round((20.05-LON0)*K*S),"h":round((LAT0-45.05)*S),"danube":dan,"rings":rings,
     "grat":grat,"places":{k:[round(v,1) for v in P(*c)] for k,c in places.items()}}
print(json.dumps(out))
