var x=300;
var y=300;
var a=100;
var b=100;

/*function draw_one_frame() {
  ///background(255);
  x+=2;
  y+=2;
	a-=2;
	b-=2;
	strokeWeight(1);
  translate(width/2, height/2);
  for(var i=0;i<15;i++){
	  for(var k=0;k<20;k++){
		stroke(255,255,255);
    rotate(PI / 12.0);
	  fill(255,255-i*10,255-k*10);
  	line(a%100,b%100,x%300,y%300);
	  ellipse((x+i*20)%width,(y+k*20)%height,i+4,i+4);
		drawtriangle((a-i*20)%width,(b-k*20)%height,k/8);
		rect(x%width, y%height, k+10, k+10);
		fill(0,i*10,255-k*10);
		ellipse((x-i*20)%width,(y-k*20)%height,i+3,i+3);
		rotate(PI / 24.0);
		fill(255-(i+k)*5,(i+k)*7,i*20);
		drawtriangle((a+i*20)%width,(b+k*20)%height,k/8);
		rect(a%width, b%height, k+5, k+5);
		drawflower(k,x);
	  }
  }

}

function drawtriangle(x,y,r){
	triangle(x, y, x+7*r, y-13.75*r, x+14*r, y);
}

function drawflower(i,k){
		if(i%2==1){
			fill(255,(k*0.4)%255,30);
			stroke(k%255,255,0);
			arc(0,0,150+i+150*sin(k*PI/24),150,0,PI / 40);
		}
		else{
			fill(k%255,0,255);
			stroke(0,(k*0.4)%255,255);
			arc(0,0,(100+100*cos(k*PI/24))%255,50,0,PI / 20);
		}
}*/

function draw_one_frame(cur_frac) {
	let sun_size = height/8;
  
	noStroke();
	// sky
	fill(0, 204, 255);
	rect(0, 0, width, height);
  
	// sun
	/*fill(255, 255, 0);
	ellipse(0.25 * width, 0.10 * height, sun_size);*/
  
	// sand
	/*fill("#ffb323");
	rect(0, (height/2), width, (height/2));*/

	// top 5th
	/*fill('#ffffff');
	rect(0,0,width,height/5);*/
  
	stroke(0);
	fill(100, 100, 100);
  
	let b1_y = 0.55 * height;
	let b2_y = 0.85 * height;
  
	let b1_size = height/12;
	let b2_size = height/6;
  
	
	let grid_points1 = [
	 -0.25 * width,
	  0.0 * width,
	  0.25 * width,
	  0.50 * width,
	  0.75 * width,
	  1.00 * width
	]
  
	if (debugView) {
	  stroke(255, 0, 0);
	  strokeWeight(height/100);
	  noFill();
	  for(let i=0; i<grid_points1.length; i++) {
		rect(grid_points1[i], b1_y, b1_size, 2*b1_size);
	  }    
	}
  
	/*fill(100, 100, 100);
	noStroke();
	for(let i=0; i<grid_points1.length-1; i++) {
	  let cur_x_pos = map(cur_frac, 0, 1, grid_points1[i], grid_points1[i+1])
	  rect(cur_x_pos, b1_y, b1_size, 2*b1_size);
	}*/
  
	let grid_points2 = [
	 -0.425 * width,
	  0.125 * width,
	  0.625 * width,
	  1.125 * width
	]

	let grid_points3 = [
		1.125 * width,
		 0.625 * width,
		 0.125 * width,
		 -0.425 * width
	   ]
  
	if(debugView) {
	  stroke(255, 0, 0);
	  strokeWeight(height/100);
	  noFill();
	  for(let i=0; i<grid_points2.length; i++) {
		rect(grid_points2[i], b2_y, 2*b2_size, b2_size);
	  }    
	}

	/*Pyramid guides*/
	/*fill("ffffff");
	triangle(0, height, width/2, height, width/4, height/5);
	triangle(width/2, height, width, height, (width/4)*3, height/5);*/

	
	/*Draw Slabs*/
	fill('#ec7100');
	noStroke();
	for(let i=0; i<grid_points2.length-1; i++) {
	  let cur_x_pos = map(cur_frac, 0, 1, grid_points2[i], grid_points2[i+1])
	  let base_coord = cur_x_pos-60;
	  let width_rect = (4*b2_size);
	  

	  rect(base_coord, (height/5)*4, 4*b2_size, height/5);
	  triangle(base_coord,(height/5)*4,base_coord,(height/5)*5,cur_x_pos-(height/5)-10,(height/5)*5);
	  triangle(base_coord+width_rect,(height/5)*4,base_coord+width_rect+(height/9)+10,height,base_coord+width_rect,height);

		
	}

	fill('#ec7100');
	noStroke();
	for(let i=0; i<grid_points3.length-1; i++) {
	  let cur_x_pos = map(cur_frac, 0, 1, grid_points3[i], grid_points3[i+1])
	  base_coord2= cur_x_pos;
	  let width_rect2 = (2.65*b2_size);


	  rect(cur_x_pos, (height/5)*3, 2.655*b2_size, height/5);
	  triangle(base_coord2,(height/5)*3,base_coord2,(height/5)*4,base_coord2-width_rect2/4,(height/5)*4);
	  triangle(base_coord2+width_rect2,(height/5)*3,base_coord2+width_rect2+(height/9),(height/5)*4,base_coord2+width_rect2,(height/5)*4);
	}

	fill('#ec7100');
	noStroke();
	for(let i=0; i<grid_points2.length-1; i++) {

	  let cur_x_pos = map(cur_frac, 0, 1, grid_points2[i], grid_points2[i+1])
	  
	  /*rect(cur_x_pos, (height/5)*2, 1.5*b2_size, height/5);*/
	  quad(cur_x_pos+(height/3),(height/5)*2,cur_x_pos+(height/9),(height/5)*2,cur_x_pos,(height/5)*3,cur_x_pos+(height/5)*2.21,(height/5)*3);
	}

	fill('#ec7100');
	noStroke();
	for(let i=0; i<grid_points3.length-1; i++) {
	  let cur_x_pos = map(cur_frac, 0, 1, grid_points3[i], grid_points3[i+1])

	  /*rect(cur_x_pos, (height/5), 2.6*b2_size, height/5);*/
	  triangle(cur_x_pos+height/4.5,height/5,cur_x_pos+height/9,(height/5)*2,cur_x_pos+height/3,(height/5)*2);
	}
  }
  
  
