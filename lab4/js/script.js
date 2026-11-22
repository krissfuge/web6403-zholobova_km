class RecipeNote {

    constructor(name, text, agree) {
        this.name = name;
        this.text = text;
        this.agree = agree;
    }

    printToConsole() {
        console.log('Получена новая заметка!');
        console.log('от некого ' + this.name + ':');
        console.log('"' + this.text + '"');
    }
}

const form = document.getElementById('note-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('note-name').value;
    const text = document.getElementById('note-text').value;
    const agree = document.getElementById('note-agree').checked;

    const note = new RecipeNote(name, text, agree);

    note.printToConsole();

    const notesBlock = document.getElementById('notes');
    const newNote = document.createElement('p');
    newNote.className = 'notes__item';
    newNote.textContent = note.name + ': ' + note.text;
    notesBlock.appendChild(newNote);

    form.reset();
});