const colors2 = ["periwinkle", "sand brown", "salmon", "coral", "seagreen", "midnight blue"]
displayColors(colors2)


function displayColors(colorList) {
    //   DEFINING       CHECKING                    CHANGING
    for (let index = 0; index < colorList.length; index += 1) {
        const currentColor = colorList[index]
        console.log(`Color number ${index} is ${currentColor}!`)
    }
}
