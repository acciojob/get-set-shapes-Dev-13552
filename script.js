//complete this code
class Rectangle {
	constructor(width, height){
		this.width = width
		this.height = height
	}
	set width(width_value){
		this._width = width_value
	}
	get width(){
		return this._width
	}
	
	set height(height_value){
		this._height = height_value
	}
	get height(){
		return this._height
	}

	getArea(){
		return this.width*this.height
	}
}

class Square extends Animal {
	constructor(side){
		super(side, side)
	}
	getPerimeter(){
		return 4*(this.height)
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
