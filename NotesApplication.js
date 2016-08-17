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
		for (var itemIndex in this.notes) {
			var item = this.notes[itemIndex];
			console.log('\nNote ID:',itemIndex,'\n', item.toString(),'\n\nBy Author', this.author);
		}
	}
	
	get_note(note_id) {
		return this.notes[note_id].toString();
	}
	
	search(search_text) {
		for (var itemIndex in this.notes) {
			var item = this.notes[itemIndex];
			if (item.toString().includes(search_text)) {
				console.log('\nNote ID:',itemIndex,'\n', item.toString(),'\n\nBy Author', this.author);
			}
		}
	}
	
	delete_note(note_id) {
		this.notes.splice(note_id, 1);
	}
	
	edit_note(note_id, new_content) {
		this.notes[note_id] = new_content;
	}
}
