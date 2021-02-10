function setupButtons(){
    buttonArr.forEach((buttonVal, i) => {
        button = createButton(buttonVal);
        button.position(windowWidth/2 - 390 + 1920/42 * (i+1), windowHeight - 100);
        button.size(31,31);
        button.mousePressed(() => changeR(buttonVal));
      });

    confirmButton = createButton("save current preset");
    confirmButton.position(windowWidth/2 + 290, windowHeight - 50);
    confirmButton.mousePressed(confirmPreset);
}