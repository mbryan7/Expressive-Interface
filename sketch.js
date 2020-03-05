let brush = ""
let selectred = false
let selectlightorange = false
let selectorange = false
let selectyellow = false
let selectlightgreen = false
let selectgreen = false
let selectteal = false
let selectturquoise = false
let selectlightblue = false
let selectblue = false
let selectnavyblue = false
let selectpurple = false
let selectlavender = false
let selectpink = false
let selectneonpink = false
let selectfusia = false
let erase = false
let numButton = 0


function setup() {

    // create a 640x480 pixel canvas and attach it to your HTML
    createCanvas(640, 480).parent('p5')

    print("this is the setup")

    background(200)

}

function draw() {

  print(brush)

noStroke()
fill(255, 255, 255)
  rect(0, 0, 37, 480)

  //Drawing buttons
//red
  noStroke()
  fill (247, 28, 12)
  rect (7, 7, 23, 23)
//orange
  noStroke()
  fill(252, 144, 3)
  rect(7, 32, 23, 23)
//lightorange
  noStroke()
  fill(252, 186, 3)
  rect(7, 57, 23, 23)
//yellow
  noStroke()
  fill(255, 251, 8)
  rect(7, 82, 23, 23)
//lightgreen
  noStroke()
  fill(189, 250, 7)
  rect(7, 107, 23, 23)
//green
  noStroke()
  fill(20, 222, 47)
  rect(7, 132, 23, 23)
//teal
  noStroke()
  fill(12, 245, 206)
  rect(7, 157, 23, 23)
//turquoise
  noStroke()
  fill(10, 228, 247)
  rect(7, 182, 23, 23)
//lightblue
  noStroke()
  fill(10, 168, 252)
  rect(7, 207, 23, 23)
//blue
  noStroke()
  fill(10, 90, 250)
  rect(7, 232, 23, 23)
//navyblue
  noStroke()
  fill(52, 16, 230)
  rect(7, 257, 23, 23)
//purple
  noStroke()
  fill(122, 10, 250)
  rect(7, 282, 23, 23)
//lavender
  noStroke()
  fill(163, 12, 250)
  rect(7, 307, 23, 23)
//pink
  noStroke()
  fill(216, 12, 247)
  rect(7, 332, 23, 23)
//neonpink
  noStroke()
  fill(245, 12, 241)
  rect(7, 357, 23, 23)
//fusia
  noStroke()
  fill(252, 10, 160)
  rect(7, 382, 23, 23)
//erase button
  noStroke()
    fill(200)
    circle(18, 450, 22)

  noFill()
  stroke(255, 255, 255)
  strokeWeight(7)

  if(selectred == true){
    rect (7, 7, 23, 23)
  }

  if(selectorange == true){
    rect (7, 32, 23, 23)
  }

  if(selectlightorange == true){
    rect (7, 57, 23, 23)
  }

  if(selectyellow == true){
    rect (7, 82, 23, 23)
  }

  if(selectlightgreen == true){
    rect (7, 107, 23, 23)
  }

  if(selectgreen == true){
    rect (7, 132, 23, 23)
  }

  if(selectteal == true){
    rect (7, 157, 23, 23)
  }

  if(selectturquoise == true){
    rect (7, 182, 23, 23)
  }

  if(selectlightblue == true){
    rect (7, 207, 23, 23)
  }

  if(selectblue == true){
    rect (7, 232, 23, 23)
  }

  if(selectnavyblue == true){
    rect (7, 257, 23, 23)
  }

  if(selectpurple == true){
    rect (7, 282, 23, 23)
  }

  if(selectlavender == true){
    rect (7, 307, 23, 23)
  }

  if(selectpink == true){
    rect (7, 332, 23, 23)
  }

  if(selectneonpink == true){
    rect (7, 357, 23, 23)
  }

  if(selectfusia == true){
    rect (7, 382, 23, 23)
  }

  if(erase == true){
   circle(18, 450, 22)
}

   if (mouseIsPressed) {

     let w = 0
     while(w++ < 1000) {
       let dice = floor(random(1, 17))
       print(dice)

       if (dice == 1 && selectred) {
         stroke(247, 28, 12)
         break
       } else if (dice == 2 && selectorange) {
         stroke(252, 144, 3)
         break
       } else if (dice == 3 && selectlightorange) {
         stroke(252, 186, 3)
         break
       } else if (dice == 4 && selectyellow) {
         stroke(255, 251, 8)
         break
       } else if (dice == 5 && selectlightgreen) {
         stroke(189, 250, 7)
         break
       } else if (dice == 6 && selectgreen) {
         stroke(20, 222, 47)
         break
       } else if (dice == 7 && selectteal) {
         stroke(12, 245, 206)
         break
       } else if (dice == 8 && selectturquoise) {
         stroke(10, 228, 247)
         break
       } else if (dice == 9 && selectlightblue) {
         stroke(10, 168, 252)
         break
       } else if (dice == 10 && selectblue) {
         stroke(10, 90, 250)
         break
       } else if (dice == 11 && selectnavyblue) {
         stroke(52, 16, 230)
         break
       } else if (dice == 12 && selectpurple) {
         stroke(122, 10, 250)
         break
       } else if (dice == 13 && selectlavender) {
         stroke(163, 12, 250)
         break
       } else if (dice == 14 && selectpink) {
         stroke(216, 12, 247)
         break
       } else if (dice == 15 && selectneonpink) {
         stroke(245, 12, 241)
         break
       } else if (dice == 16 && selectfusia) {
         stroke(252, 10, 160)
         break
       }
     }
     if (selectred == false && selectorange == false && selectlightorange == false && selectyellow == false && selectlightgreen == false && selectgreen == false && selectteal == false && selectturquoise == false && selectlightblue == false && selectblue == false && selectnavyblue == false && selectpurple == false && selectlavender == false && selectpink == false && selectneonpink == false && selectfusia ==false) {
      noStroke()
     }

     if (erase == true) {
       noStroke()
       fill(200)
       circle(pmouseX, pmouseY, 20)
     } else {
       line(pmouseX, pmouseY, mouseX, mouseY)
     }

  }
}


function mouseClicked() {

    print(int(mouseX), int(mouseY))


    if (mouseX > 10 && mouseX < 40 && mouseY > 5 && mouseY < 27){
      if (selectred == false) {
        numButton++
        print("red button")
        brush = "red"
        selectred = true
      } else {
        numButton--
        print(" no red button")
        brush = "red"
        selectred = false
      }
    }

    if (mouseX > 10 && mouseX < 40 && mouseY > 31 && mouseY < 54){
      if (selectorange == false) {
        numButton++
print("orange button")
brush = "orange"
selectorange = true
} else {
  numButton--
  print(" no orange button")
  brush = "orange"
  selectorange = false
  }
}

    if (mouseX > 10 && mouseX < 40 && mouseY > 57 && mouseY < 76){
      if (selectlightorange == false) {
print("lightorange button")
brush = "lightorange"
selectlightorange = true
} else {
  print(" no lightorange button")
  brush = "lightorange"
  selectlightorange = false
  }
}

    if (mouseX > 10 && mouseX < 40 && mouseY > 83 && mouseY < 98){
      if (selectyellow == false) {
print("yellow button")
brush = "yellow"
selectyellow = true
} else {
  print(" no yellow button")
  brush = "yellow"
  selectyellow = false
  }
}

    if (mouseX > 10 && mouseX < 40 && mouseY > 109 && mouseY < 120){
      if (selectlightgreen == false) {
print("lightgreen button")
brush = "lightgreen"
selectlightgreen = true
} else {
  print(" no lightgreen button")
  brush = "lightgreen"
  selectlightgreen = false
  }
}

    if (mouseX > 10 && mouseX < 40 && mouseY > 131 && mouseY < 152){
      if (selectgreen == false) {
print("green button")
brush = "green"
selectgreen = true
} else {
  print(" no green button")
  brush = "green"
  selectgreen = false
  }
}

    if (mouseX > 10 && mouseX < 40 && mouseY > 161 && mouseY < 176){
      if (selectteal == false) {
print("teal button")
brush = "teal"
selectteal = true
} else {
  print("no teal button")
  brush = "teal"
  selectteal = false
  }
}

    if (mouseX > 10 && mouseX < 40 && mouseY > 181 && mouseY < 203){
      if (selectturquoise == false) {
print("turquoise button")
brush = "turquoise"
selectturquoise = true
} else {
  print("no turquoise button")
  brush = "turquoise"
  selectturquoise = false
  }
}

    if (mouseX > 10 && mouseX < 40 && mouseY > 205 && mouseY < 227){
      if (selectlightblue == false) {
print("lightblue button")
brush = "lightblue"
selectlightblue = true
} else {
  print("no lightblue button")
  brush = "lightblue"
  selectlightblue = false
  }
}

    if (mouseX > 10 && mouseX < 40 && mouseY > 231 && mouseY < 253){
      if (selectblue == false) {
print("blue button")
brush = "blue"
selectblue = true
} else {
  print("no blue button")
  brush = "blue"
  selectblue = false
  }
}

    if (mouseX > 10 && mouseX < 40 && mouseY > 257 && mouseY < 276){
      if (selectnavyblue == false) {
print("navyblue button")
brush = "navyblue"
selectnavyblue = true
} else {
  print("no navyblue button")
  brush = "navy"
  selectnavyblue = false
  }
}

    if (mouseX > 10 && mouseX < 40 && mouseY > 280 && mouseY < 302){
      if (selectpurple == false) {
print("purple button")
brush = "purple"
selectpurple = true
} else {
  print("no purple button")
  brush = "purple"
  selectpurple = false
  }
}

    if (mouseX > 10 && mouseX < 40 && mouseY > 306 && mouseY < 326){
      if (selectlavender == false) {
print("lavender button")
brush = "lavender"
selectlavender = true
} else {
  print("no lavender button")
  brush = "lavender"
  selectlavender = false
  }
}

    if (mouseX > 10 && mouseX < 40 && mouseY > 330 && mouseY < 351){
      if (selectpink == false) {
print("pink button")
brush = "pink"
selectpink = true
} else {
  print("no pink button")
  brush = "pink"
  selectpink = false
  }
}

    if (mouseX > 10 && mouseX < 40 && mouseY > 357 && mouseY < 377){
      if (selectneonpink == false) {
print("neonpink button")
brush = "neonpink"
selectneonpink = true
} else {
  print("no neonpink button")
  brush = "neonpink"
  selectneonpink = false
  }
}

    if (mouseX > 10 && mouseX < 40 && mouseY > 380 && mouseY < 403){
      if (selectfusia == false) {
print("fusia button")
brush = "fusia"
selectfusia = true
} else {
  print("no fusia button")
  brush = "fusia"
  selectfusia = false
  }
}

 if (mouseX > 10 && mouseX < 40 && mouseY > 437 && mouseY < 459){
   if (erase == false) {
    print("erase button")
    brush = "erase"
    erase = true
  } else {
    print("no erase button")
    brush = "erase"
    erase = false
  }
}

}
