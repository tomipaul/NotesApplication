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
	
	listNotes() {
		for (var itemIndex in this.notes;) {
			var item = this.notes[itemIndex];
			console.log('\nNote ID:',itemIndex,'\n', item.toString(),'\n\nBy Author', this.author)
		}
	}
	
	get(note_id) {
		return this.notes[note_id].toString();
	}
	
	delete(note_id) {
		this.notes.splice(note_id, 1);
	}
	
	edit(note_id, new_content) {
		this.notes[note_id] = new_content;
	}
