function vowels(){
    let a = prompt("Enter a sentence");
let vowels = 0;
let consonants = 0;

a = a.toLowerCase();

for (let i = 0; i < a.length; i++) {
    let ch = a[i];
 
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            vowels++;
        } else {
            consonants++;
        }
    }
    
    
    console.log("Vowels:", vowels);
    console.log("Consonants:", consonants);
}











