# NotesApplication
Implementation of a note taking application
class NotesApplication {
	
	constructor(author) {
		this.author = author;
		this.notes = [];
	}
	
	create(note_content) {
		this.notes.push(note_content);
	}