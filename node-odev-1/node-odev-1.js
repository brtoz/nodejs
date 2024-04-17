const yaricap = process.argv[2];

function daireAlaniHesapla(r) {
    return Math.PI * r * r;
}

if (yaricap) {
    const alan = daireAlaniHesapla(yaricap);
    console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan.toFixed(2)}`);
} else {
    console.log('Boş Değer Giremezsiniz.');
}