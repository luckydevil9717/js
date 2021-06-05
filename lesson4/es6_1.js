'use strict';

class Post2 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

const post3 = new Post2('alla', 'lorem ipsum dolor', new Date());
console.log(post3);
post1.edit('sit amet consectetur');
console.log(post3);


class AttachedPost1 extends Post2 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted1() {
        this.highlighted = true;
    }
}

const attached2 = new AttachedPost1('use', 'lorem ipsum dolor', new Date());
console.log(attached2);
attached2.makeTextHighlighted1();
attached2.edit('sit amet consectetur');
console.log(attached2);