function drawGrid() {

    stroke(200);
    strokeWeight(1);
    fill(120);
    
    for (var x = -width; x < width; x += 50) {
        line(x, -height, x, height);
        text(x, x + 1, 12);
    }
    for (var y = -height; y < height; y += 50) {
        line(-width, y, width, y);
        text(y, 1, y + 12);
    }
}
