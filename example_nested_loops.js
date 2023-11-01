const colors3 = ["periwinkle", "sand brown", "salmon", "coral", "seagreen", "midnight blue"]

// Here, we are looping over the colors3 array first, 
// and then for each color string, we are looping over its characters
for (let colorIndex = 0; colorIndex < colors3.length; colorIndex += 1) {
    const currentColor = colors3[colorIndex]

    for (let characterIndex = 0; characterIndex < currentColor.length; characterIndex++) {
        const currentCharacter = currentColor[characterIndex];
        console.log(`The color ${currentColor} and the character at index ${characterIndex} is "${currentCharacter}"!`)
    }
}