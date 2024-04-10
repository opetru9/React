// Generate a random integer number in one diapason 
function randInt( min=0 , max=1 ){
    return Math.floor(
        Math.random() * ( max - min ) + min
    )
}

// Generates a random color in the RGB (Red, Green, Blue) format, 
//  based on approximate hue values for each color channel (red, green, blue).
const randColor = ({
        reddish  = 1,
        greenish = 1,
        blueish  = 1
    } = {} ) => {

    let red   = randInt(0,255 * reddish )
    let blue  = randInt(0,255 * greenish)
    let green = randInt(0,255 * blueish )

    return `rgb(${red}, ${green}, ${blue})`  
}

export {randInt, randColor}