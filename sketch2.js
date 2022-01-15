const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');
const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true,
  duration: 15,
  fps:24
};

const sketch = () => {
  return ({ context, width, height }) => {

    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.shadowBlur = 20;
    context.shadowColor = 'black';
    context.fillStyle = 'black';
    context.strokeStyle = 'black';
    const cx = width/2;
    const cy = height/2;
    
    let x,y;

    const num = 200;
    const radius = width*2;
    
    /*for (let i=0; i<num; i++){
        const w = width * 0.03;
        const h = height * 0.005;
        const slice = math.degToRad(360/num);
        const angle = slice * i;
        x = cx + radius * Math.sin(angle)*0.5;
        y = cy + radius * Math.cos(angle)*0.5;
    
    //save the current state of our canvas context
        context.save();
    //start applying the transformations we want to like rotating our square and moving the canvas context to center the square
        context.translate(x,y);
        context.rotate(-angle);
        context.scale(random.range(0.1,1), 1);
        context.beginPath();
        context.rect(-w/2, -h/2, w, h);
        context.stroke();
  //after completing the trnasforms, we revert back to the previously save dpoint of canvas context so that we are trnaforming everyhting from a single refernece point rather than a cumulative point which change swith each new translation
        context.restore();
    }
    for (let i=0; i<num; i++){
      const w = width * 0.03;
      const h = height * 0.005;
      const slice = math.degToRad(360/num);
      const angle = slice * i;
      x = cx + radius * Math.sin(angle)*1.5;
      y = cy + radius * Math.cos(angle)*1.5;
  
  //save the current state of our canvas context
      context.save();
  //start applying the transformations we want to like rotating our square and moving the canvas context to center the square
      context.translate(x,y);
      context.rotate(-angle);
      context.scale(random.range(0.1,1), 1);
      context.beginPath();
      context.rect(-w/2, -h/2, w, h);
      context.stroke();
//after completing the trnasforms, we revert back to the previously save dpoint of canvas context so that we are trnaforming everyhting from a single refernece point rather than a cumulative point which change swith each new translation
      context.restore();
  }*/
    for (let i=0; i<num; i++){
      const w = width * 0.00;
      const h = height * 0.0;
      const slice = math.degToRad(360/num);
      const angle = slice * i;
      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);
  
  //save the current state of our canvas context
      context.save();
  //start applying the transformations we want to like rotating our square and moving the canvas context to center the square
      context.translate(x,y);
      context.rotate(-angle);
      context.scale(random.range(-100,2),random.range(-1,3))
      context.beginPath();
      context.rect(-w/2, -h/2, random.range(0,w), random.range(0,h));
      context.fill();
    
//after completing the trnasforms, we revert back to the previously save dpoint of canvas context so that we are trnaforming everyhting from a single refernece point rather than a cumulative point which change swith each new translation
      context.restore();
  
//save the current state of our canvas context
    context.save();
//start applying the transformations we want to like rotating our square and moving the canvas context to center the square
    context.translate(cx,cy);
    context.rotate(-angle);
    context.scale(random.range(0,2), random.range(1,9)); 
    context.lineWidth = random.range(0.1,5);
    context.beginPath();
    context.arc(80,80, random.range(10),random.range(0,0.2),25);
    context.stroke();
//after completing the trnasforms, we revert back to the previously save dpoint of canvas context so that we are trnaforming everyhting from a single refernece point rather than a cumulative point which change swith each new translation
    context.restore();
}
  
  };
};

canvasSketch(sketch, settings);
