"use strict";
// 1. Basic Types va Unions
// a) O'zgaruvchilarni to'g'ri e'lon qilish
let ism = "Ali";
let yosh = 25;
let talabami = true;
let hobby = "Coding";
// b) Stringga aylantiruvchi funksiya
function stringgaAylantir(qiymat) {
    return qiymat.toString();
}
console.log("1b:", stringgaAylantir(123)); // 123 string ko'rinishida
console.log("1b:", stringgaAylantir("Salom")); // Salom
// b) 3 ta kitob obyektini yaratish
let kitob1 = {
    sarlavha: "Yalana",
    muallif: "Mahmoud",
    nashrYili: 2000,
    sahifalarSoni: 50,
    mavjud: true
};
let kitob2 = {
    sarlavha: "Quran",
    muallif: "Mohammad",
    nashrYili: 1945,
    sahifalarSoni: 1142,
    mavjud: true
};
let kitob3 = {
    sarlavha: "Dostor",
    muallif: "Mahmoud",
    nashrYili: 1930,
    sahifalarSoni: 166,
    mavjud: false
};
// c) Kitob haqida ma'lumot chiqaruvchi funksiya
function kitobHaqidaMalumot(kitob) {
    return `Sarlavha: ${kitob.sarlavha}, Muallif: ${kitob.muallif}, Nashr Yili: ${kitob.nashrYili}, Sahifalar Soni: ${kitob.sahifalarSoni}, Mavjud: ${kitob.mavjud}`;
}
console.log("2c:", kitobHaqidaMalumot(kitob1));
console.log("2c:", kitobHaqidaMalumot(kitob2));
console.log("2c:", kitobHaqidaMalumot(kitob3));
// 3. Amaliy mashq: Kutubxona tizimi
// a) Kutubxona classi
class Kutubxona {
    constructor() {
        this.kitoblar = [];
    }
    kitobQoshish(kitob) {
        this.kitoblar.push(kitob);
    }
    kitobniTopish(sarlavha) {
        return this.kitoblar.find((kitob) => kitob.sarlavha === sarlavha);
    }
    mavjudKitoblarSoni() {
        return this.kitoblar.filter((kitob) => kitob.mavjud).length;
    }
}
// b) Kutubxona classidan obyekt yaratish va kitoblar qo'shish
let kutubxona = new Kutubxona();
kutubxona.kitobQoshish(kitob1);
kutubxona.kitobQoshish(kitob2);
kutubxona.kitobQoshish(kitob3);
// c) Kitobni izlab topish
let topilganKitob = kutubxona.kitobniTopish("Quran");
console.log("3c:", kitobHaqidaMalumot(topilganKitob)); // Kitobni topib chiqadi
// d) Mavjud kitoblar soni
console.log("3d: Mavjud kitoblar soni:", kutubxona.mavjudKitoblarSoni());
class Talaba {
    constructor(ism, yosh, kurs) {
        this.ism = ism;
        this.yosh = yosh;
        this.kurs = kurs;
    }
    talabaMalumoti() {
        return `Talaba: ${this.ism}, Yosh: ${this.yosh}, Kurs: ${this.kurs}`;
    }
}
let talaba1 = new Talaba("Olim", 20, 2);
let talaba2 = new Talaba("Aziz", 22, 3);
console.log("4:", talaba1.talabaMalumoti());
console.log("4:", talaba2.talabaMalumoti());
