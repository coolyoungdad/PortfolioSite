var images = document.getElementsByClassName('images');
  /**
   * Determine if two rectangles overlap
   * @param image1 - a rectangle object of format {height, width, topLeftCorner}
   * @param image2 - a rectangle object
   * @returns boolean
   */

  function rectangles_overlap(image1, image2) {
     // does any corner fall within the other rectangle?
    for (let corner of get_corners(image1)) { 
      if (is_inside(corner, image2)) { // check if each corner is in the other rect.
        console.log("OVERLAP");
        return true; // if it is, we know they overlap!
        }
    }
    // if none of the corners do, we know they don't overlap:
    console.log("NOT OVERLAP");
    return false;
  };
  
  
  /**
   * Tests whether a single corner falls inside a rectangle.
   * @param corner - [x, y] coordinate pair
   * @param images - rectangle object {height, width, topLeftCorner}
   * @returns boolean
   */
  function is_inside(corner, images) {
      let cornerX = corner[0];
    let cornerY = corner[1];
    // more than left, less than right
    // left hand side looks good.
    // how wide is a rectangle? where would its right side be compared to its left?
    // nice.
    //oh duh
    return (cornerX >= images.topLeftCorner[0]
        && cornerX <= images.topLeftCorner[0]+width
        && cornerY >= images.topLeftCorner[1]
        && cornerY <= images.topLeftCorner[1]+height) // this whole thing in () evaluates to true or false
  
  }

  /**
   * Gets all 4 corners of a image and returns them as an array of coordinate [x, y] pairs.
   * @param images - image input
   * @returns Array<[number, number]>
   */
  function get_corners(images) {
    // Let's figure out how to find all 4 corners of a rectangle. 
    // rect = {height, width, topLeftCorner}
    let topLeft = images.topLeftCorner;   
    
    let topRightX = (images.topLeftCorner[0] + width);
    let topRightY = images.topLeftCorner[1]; // (y)
    let topRight = [topRightX, topRightY]; 
    
    let bottomLeftX = images.topLeftCorner[0]; // (y)
    let bottomLeftY = images.topLeftCorner[1] + height; // (y)
    let bottomLeft = [bottomLeftX, bottomLeftY];
    
    let bottomRightX = (images.topLeftCorner[0] + width); // (y)
    let bottomRightY = (images.topLeftCorner[1] + height); // (y)
    let bottomRight = [bottomRightX, bottomRightY];
  
    return [topLeft, topRight, bottomLeft, bottomRight]
  }

  rectangles_overlap();
  