# RoadPulse

RoadPulse is a route-planning prototype that lets people compare sample routes by smoothness, accessibility, safer crossings, or travel time. It layers community hazard reports onto a demo street map and shows report age and confidence. Visitors can choose any two named demo places—such as Willow Park, Market Street, Central Market, or City Library—and compare three illustrative routes.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed in Terminal. If port 3000 is already in use, Next.js will offer another port.

## Prototype boundaries

The map, named places, street network, directions, timings, and hazard reports are demonstration data. Enter or select a named place from the illustrated neighborhood; this is not a global address search. This version does not use live maps, GPS, municipal feeds, or turn-by-turn navigation. It does not guarantee a hazard-free or safe route. Reports are local to the browser and include timestamps to make their age visible.

## Deploy

Push this folder to a GitHub repository and import it as a Next.js project in Vercel. No environment variables are needed for the prototype.
