function Triangle(side1,side2,side3){
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.triangleType = function(){
  var type = '';

  if ((this.side1+this.side2 <= this.side3) || (this.side2+this.side3 <= this.side1 ) || (this.side1 +this.side3 <=this.side2)) {//is NOT a triangle
    return type = "Not a triangle";

  } else { //proceed to check what type of triangle

    if (this.side1 === this.side2 && this.side2 ===this.side3){
      return type = "Equilateral";

    }
    else if ((this.side1  === this.side2 && this.side1  != this.side3) || (this.side1  === this.side3 && this.side1  !=this.side2) || (this.side2===this.side3 && this.side2 !=this.side1 ))
    {
      return type = "Isosceles";

    } else {
      return type = "Scalene";
    }

  }
}

$(document).ready(function() {
  $("form#new-triangle").submit(function(event) {
    event.preventDefault();

    var userSide1 = $('#side1').val();
    var userSide2 = $('#side2').val();
    var userSide3 = $('#side3').val();

    var userTriangle = new Triangle(userSide1,userSide2,userSide3);
    $("#triangles").text(userTriangle.triangleType());
    //alert(userTriangle.triangleType());

  });
});
