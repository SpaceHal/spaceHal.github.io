class Histogram {
    constructor() {
        // histogramm bins range from -200 to 200
        this.bins       = 9; // #bin: 0, 1, ... , bins-1
        this.incr       = 0.5;
        this.maxValue   = 110
        this.range      = 340;
        this.hist       = Array(this.bins);
        this.yOffset    = 10;  // y-axis offset histogramm (aka x-offset im canvas)
        this.margin     = 3;  // margin between plotted bins
        this.pgX        = 450;
        this.pgY        = 0;
        this.pgHeight   = 400;
        this.pgWidth    = 150;
        this.pgH        = createGraphics(this.pgWidth, this.pgHeight);

        // first bin takes values from -range/2 to -range/2 + range/bins
        for (let i = 0; i < this.bins; i++) {
            this.hist[i] = {
                bin: this.range / (this.bins) * (i+1) - this.range / 2,
                v: 0
            }
        }
    }
    reset(){
        for (let i = 0; i < this.hist.length; i++) {
            this.hist[i].v = 0;
        }
    }

    // receive a value and put it to the corresponding bin of the histogramm
    getValue(pValue) {
        if (pValue > -this.range/2 || pValue < this.range/2){ // only pValues the fit into the histo range
            for (let i = 0; i < this.hist.length; i++) {
                if (pValue < this.hist[i].bin) {
                    this.hist[i].v += this.incr;
                    if (this.hist[i].v >= this.maxValue) { noLoop() }
                    break;
                }
            }
        }
    }

    show() {
        //this.pgH.clear();
        this.pgH.fill(255);
        this.pgH.stroke(0);
        this.pgH.noStroke();
        this.pgH.rect(0, 0, this.pgWidth, this.pgHeight) // Hintergrund
        this.pgH.strokeWeight(2.5);
        this.pgH.fill(200);
        this.pgH.stroke(200,100,100); // Histogramm

        let extraY = (this.pgHeight-this.range)/2;

        this.pgH.beginShape();
        this.pgH.vertex(this.yOffset,                  this.range/2 - this.range/2 + extraY + this.margin );
        this.pgH.vertex(this.yOffset + this.hist[0].v, this.range/2 - this.range/2 + extraY + this.margin);
        this.pgH.vertex(this.yOffset + this.hist[0].v, this.range/2 + this.hist[0].bin + extraY - this.margin );
        this.pgH.vertex(this.yOffset,                  this.range/2 + this.hist[0].bin + extraY - this.margin );
        this.pgH.endShape();



        for (let i = 1; i < this.hist.length; i++) {
            this.pgH.beginShape();
            this.pgH.vertex(this.yOffset,                  this.range/2 + this.hist[i-1].bin + extraY + this.margin );
            this.pgH.vertex(this.yOffset + this.hist[i].v, this.range/2 + this.hist[i-1].bin + extraY + this.margin);
            this.pgH.vertex(this.yOffset + this.hist[i].v, this.range/2 + this.hist[i].bin   + extraY - this.margin);
            this.pgH.vertex(this.yOffset,                  this.range/2 + this.hist[i].bin   + extraY - this.margin );
            this.pgH.endShape();
        }

        this.pgH.fill(150)
        this.pgH.noStroke()
        this.pgH.textAlign(LEFT)

        // BUG: Zeigt die Häufigkeit nicht an
        this.pgH.text(this.hist[0].v*2, this.hist[0].v + 20, this.hist[0].bin + 10 + this.range / 2 + this.margin)

        for (let i = 1; i < this.hist.length; i++) {
            this.pgH.text(this.hist[i].v*2, this.hist[i].v +20, this.range/2 + this.hist[i].bin + 10 + this.margin)
        }

     

        image(this.pgH, this.pgX, this.pgY);
    }


}