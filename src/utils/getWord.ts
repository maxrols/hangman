import words from "../data/wordlist.json";

export function getWord() {
    return words[Math.floor(Math.random() * words.length)];
}