// 1. Basic Types va Unions
// a) O'zgaruvchilarni to'g'ri e'lon qilish
var ism = "Ali";
var yosh = 25;
var talabami = true;
var hobby = "Coding";
// b) Stringga aylantiruvchi funksiya
function stringgaAylantir(qiymat) {
    return qiymat.toString();
}
console.log("1b:", stringgaAylantir(123)); // 123 string ko'rinishida
console.log("1b:", stringgaAylantir("Salom")); // Salom
// b) 3 ta kitob obyektini yaratish
var kitob1 = {
    sarlavha: "Yalana",
    muallif: "Mahmoud",
    nashrYili: 2000,
    sahifalarSoni: 50,
    mavjud: true
};
var kitob2 = {
    sarlavha: "Quran",
    muallif: "Mohammad",
    nashrYili: 1945,
    sahifalarSoni: 1142,
    mavjud: true
};
var kitob3 = {
    sarlavha: "Dostor",
    muallif: "Mahmoud",
    nashrYili: 1930,
    sahifalarSoni: 166,
    mavjud: false
};
// c) Kitob haqida ma'lumot chiqaruvchi funksiya
function kitobHaqidaMalumot(kitob) {
    return "Sarlavha: ".concat(kitob.sarlavha, ", Muallif: ").concat(kitob.muallif, ", Nashr Yili: ").concat(kitob.nashrYili, ", Sahifalar Soni: ").concat(kitob.sahifalarSoni, ", Mavjud: ").concat(kitob.mavjud);
}
console.log("2c:", kitobHaqidaMalumot(kitob1));
console.log("2c:", kitobHaqidaMalumot(kitob2));
console.log("2c:", kitobHaqidaMalumot(kitob3));
// 3. Amaliy mashq: Kutubxona tizimi
// a) Kutubxona classi
var Kutubxona = /** @class */ (function () {
    function Kutubxona() {
        this.kitoblar = [];
    }
    Kutubxona.prototype.kitobQoshish = function (kitob) {
        this.kitoblar.push(kitob);
    };
    Kutubxona.prototype.kitobniTopish = function (sarlavha) {
        return this.kitoblar.find(function (kitob) { return kitob.sarlavha === sarlavha; });
    };
    Kutubxona.prototype.mavjudKitoblarSoni = function () {
        return this.kitoblar.filter(function (kitob) { return kitob.mavjud; }).length;
    };
    return Kutubxona;
}());
// b) Kutubxona classidan obyekt yaratish va kitoblar qo'shish
var kutubxona = new Kutubxona();
kutubxona.kitobQoshish(kitob1);
kutubxona.kitobQoshish(kitob2);
kutubxona.kitobQoshish(kitob3);
// c) Kitobni izlab topish
var topilganKitob = kutubxona.kitobniTopish("Quran");
console.log("3c:", kitobHaqidaMalumot(topilganKitob)); // Kitobni topib chiqadi
// d) Mavjud kitoblar soni
console.log("3d: Mavjud kitoblar soni:", kutubxona.mavjudKitoblarSoni());
var Talaba = /** @class */ (function () {
    function Talaba(ism, yosh, kurs) {
        this.ism = ism;
        this.yosh = yosh;
        this.kurs = kurs;
    }
    Talaba.prototype.talabaMalumoti = function () {
        return "Talaba: ".concat(this.ism, ", Yosh: ").concat(this.yosh, ", Kurs: ").concat(this.kurs);
    };
    return Talaba;
}());
var talaba1 = new Talaba("Olim", 20, 2);
var talaba2 = new Talaba("Aziz", 22, 3);
console.log("4:", talaba1.talabaMalumoti());
console.log("4:", talaba2.talabaMalumoti());
