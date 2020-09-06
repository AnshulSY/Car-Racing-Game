class Form {
    constructor() {

    }
    display() {
        var title = createElement('h2');
        title.html('Car Racing Game');
        title.position(130, 0);
        var input = createInput('name')
        input.position(160, 130, 160);
        var button = createButton('play')
        button.position(250, 200);
    }
}