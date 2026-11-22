# Plinko (with scores)

Drop balls through a field of pegs and score points depending on which slot they land in. You get five turns.

## How to play
- **Click** above the pegs to drop a ball from that spot.
- Slots on the left are worth 500, the middle 100 and the right 200.
- After 5 balls the game is over.

## Run it locally
Browsers block games that load images and scripts straight from disk, so serve the folder with any small web server:

```bash
git clone https://github.com/Aakash12321/Plinko-with-scores.git
cd Plinko-with-scores
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser. (The VS Code **Live Server** extension works too.)

## Built with
- p5.js
- Matter.js
