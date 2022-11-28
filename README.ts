// Typescript syntax

interface Sample {
    c: string;
}

interface Test {
    a: number
}

interface Test extends Sample {
    b: number
}

const obj: Test = {
    a: 1,
    b: 2,
    c: '1'
}

// merged / extended interface

type names = 'grade' | 'class';
type numbers = 1 | 2 | 3 | 4 | 5 | 6;

const str: names = 'grade';
const num: numbers = 3;

type ClassTypes = {
    [k in names]: numbers;
}

const info: ClassTypes = {
    grade: 1,
    class: 3
}

// computed type

const arr: readonly [ string, number, boolean ] = [ 'str', 1, true ];

// readonly typed tuple array

let a: unknown;

if (typeof a === 'number') {
    let b = a + 1;
}

if (typeof a === 'string') {
    let b = a.toUpperCase();
}

const voidVar = (() => {
    return;
})();

// const neverVar = (() => {
//     throw new Error();
// })();

// unknown, void, never type

type GenericFunction = <T, M>(a: T[], b: M) => void;
const superPrint: GenericFunction = (a, b) => {
    a.forEach(r => {
        if (typeof r === 'number' && typeof b === 'number') {
            console.log(r * b);
        }   
    });
};

superPrint([ 1, false, 'str', null, 2 ], 10);

type Player<E> = {
    name: string,
    extraInfo: E
}

type NicoExtra = {
    favFood: string;
}

type NicoPlayer = Player<NicoExtra>;

const nico: NicoPlayer = {
    name: 'nico',
    extraInfo: {
        favFood: 'kimchi'
    }
};

// generic type, call signature

abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        protected nickname: string
    ) {}

    abstract getNickName(): void;
}

class PlayerClass extends User {
    getNickName() {
        return this.nickname;
    }
}

const nicoInstance = new PlayerClass('nico', 'las', '니꼬');
nicoInstance.getNickName()

// OOP, especially abstract / protected keyword

type Words = {
    [key: string]: string;
}

class Dict {
    private words: Words;
    constructor() {
        this.words = {};
    }
    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term: string) {
        const def = this.words[term];
        if (def) return def;
        return '등재되지 않은 단어입니다.';
    }
    update(word: Word) {
        if (this.words[word.term]) {
            this.words[word.term] = word.def;
            return true;
        }
        return false;
    }
    del(term: string) {
        const newWords: Words = {};
        for (const key in this.words) {
            if (key !== term) {
                newWords[term] = this.words[term];
            }
        }
        this.words = newWords;
    }
}

class Word {
    constructor(
        public readonly term: string,
        public readonly def: string
    ) {}
}

const dict = new Dict();
let def = dict.def('kimchi');
console.log(def);

const kimchi = new Word('kimchi', '한국의 음식');
dict.add(kimchi);
def = dict.def('kimchi');
console.log(def);

const newKimchi = new Word('kimchi', '조센징의 음식');
dict.update(newKimchi);
def = dict.def('kimchi');
console.log(def);

dict.del('kimchi');
def = dict.def('kimchi');
console.log(def);

// implement hashmap dictionary with class syntax

interface UserAbstract {
    firstName: string;
    lastName: string;
    sayHi(name: string): string;
    fullName(): string;
}

interface Human {
    health: number;
}

class PlayerC implements UserAbstract, Human {
    constructor(
        public firstName: string,
        public lastName: string,
        public health: number
    ) {}
    sayHi(name: string) {
        return `${this.firstName}, Hi!`;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// implement interface on class. require public keyword on constructor

interface SStorage<T> {
    [key: string]: T
}

class LocalStorage<T> {
    private storage: SStorage<T> = {};
    set(key: string, value: T) {
        this.storage[key] = value;
    }
    remove(key: string) {
        delete this.storage[key];
    }
    get(key: string):T {
        return this.storage[key];
    }
    clear() {}
}

const stringsStorage = new LocalStorage();
stringsStorage.get('ket');
const booleansStorage = new LocalStorage<boolean>();

// polymorphism with interface, generic
