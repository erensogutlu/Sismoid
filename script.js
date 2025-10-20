// türkiye deprem risk verileri
const sehirVerileri = [
	{
		ad: "İstanbul",
		bolge: "marmara",
		riskSeviyesi: "cok-yuksek",
		magnitut: 7.5,
		tekrarSuresi: 250,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "İzmir",
		bolge: "ege",
		riskSeviyesi: "cok-yuksek",
		magnitut: 7.0,
		tekrarSuresi: 200,
		fayHatti: "Ege Graben",
	},
	{
		ad: "Bursa",
		bolge: "marmara",
		riskSeviyesi: "yuksek",
		magnitut: 6.8,
		tekrarSuresi: 300,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Ankara",
		bolge: "ic-anadolu",
		riskSeviyesi: "orta",
		magnitut: 6.0,
		tekrarSuresi: 400,
		fayHatti: "Orta Anadolu",
	},
	{
		ad: "Antalya",
		bolge: "akdeniz",
		riskSeviyesi: "yuksek",
		magnitut: 6.5,
		tekrarSuresi: 250,
		fayHatti: "Akdeniz",
	},
	{
		ad: "Adana",
		bolge: "akdeniz",
		riskSeviyesi: "yuksek",
		magnitut: 6.7,
		tekrarSuresi: 280,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Gaziantep",
		bolge: "guneydogu-anadolu",
		riskSeviyesi: "cok-yuksek",
		magnitut: 7.8,
		tekrarSuresi: 150,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Konya",
		bolge: "ic-anadolu",
		riskSeviyesi: "orta",
		magnitut: 5.8,
		tekrarSuresi: 500,
		fayHatti: "Orta Anadolu",
	},
	{
		ad: "Kocaeli",
		bolge: "marmara",
		riskSeviyesi: "cok-yuksek",
		magnitut: 7.4,
		tekrarSuresi: 240,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Manisa",
		bolge: "ege",
		riskSeviyesi: "yuksek",
		magnitut: 6.6,
		tekrarSuresi: 270,
		fayHatti: "Ege Graben",
	},
	{
		ad: "Mersin",
		bolge: "akdeniz",
		riskSeviyesi: "yuksek",
		magnitut: 6.4,
		tekrarSuresi: 320,
		fayHatti: "Akdeniz",
	},
	{
		ad: "Kayseri",
		bolge: "ic-anadolu",
		riskSeviyesi: "orta",
		magnitut: 6.1,
		tekrarSuresi: 380,
		fayHatti: "Orta Anadolu",
	},
	{
		ad: "Eskişehir",
		bolge: "ic-anadolu",
		riskSeviyesi: "orta",
		magnitut: 5.9,
		tekrarSuresi: 450,
		fayHatti: "Eskişehir",
	},
	{
		ad: "Diyarbakır",
		bolge: "guneydogu-anadolu",
		riskSeviyesi: "yuksek",
		magnitut: 6.5,
		tekrarSuresi: 290,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Samsun",
		bolge: "karadeniz",
		riskSeviyesi: "orta",
		magnitut: 6.0,
		tekrarSuresi: 400,
		fayHatti: "Karadeniz",
	},
	{
		ad: "Denizli",
		bolge: "ege",
		riskSeviyesi: "yuksek",
		magnitut: 6.8,
		tekrarSuresi: 260,
		fayHatti: "Ege Graben",
	},
	{
		ad: "Şanlıurfa",
		bolge: "guneydogu-anadolu",
		riskSeviyesi: "yuksek",
		magnitut: 6.6,
		tekrarSuresi: 280,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Adapazarı",
		bolge: "marmara",
		riskSeviyesi: "cok-yuksek",
		magnitut: 7.6,
		tekrarSuresi: 230,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Malatya",
		bolge: "dogu-anadolu",
		riskSeviyesi: "cok-yuksek",
		magnitut: 7.2,
		tekrarSuresi: 210,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Kahramanmaraş",
		bolge: "akdeniz",
		riskSeviyesi: "cok-yuksek",
		magnitut: 7.7,
		tekrarSuresi: 160,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Erzurum",
		bolge: "dogu-anadolu",
		riskSeviyesi: "yuksek",
		magnitut: 6.9,
		tekrarSuresi: 250,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Van",
		bolge: "dogu-anadolu",
		riskSeviyesi: "cok-yuksek",
		magnitut: 7.3,
		tekrarSuresi: 190,
		fayHatti: "Van Gölü",
	},
	{
		ad: "Batman",
		bolge: "guneydogu-anadolu",
		riskSeviyesi: "yuksek",
		magnitut: 6.5,
		tekrarSuresi: 300,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Elazığ",
		bolge: "dogu-anadolu",
		riskSeviyesi: "cok-yuksek",
		magnitut: 7.0,
		tekrarSuresi: 220,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Hatay",
		bolge: "akdeniz",
		riskSeviyesi: "cok-yuksek",
		magnitut: 7.8,
		tekrarSuresi: 170,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Balıkesir",
		bolge: "marmara",
		riskSeviyesi: "yuksek",
		magnitut: 6.7,
		tekrarSuresi: 280,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Trabzon",
		bolge: "karadeniz",
		riskSeviyesi: "orta",
		magnitut: 5.8,
		tekrarSuresi: 420,
		fayHatti: "Karadeniz",
	},
	{
		ad: "Muğla",
		bolge: "ege",
		riskSeviyesi: "yuksek",
		magnitut: 6.9,
		tekrarSuresi: 240,
		fayHatti: "Ege Graben",
	},
	{
		ad: "Aydın",
		bolge: "ege",
		riskSeviyesi: "yuksek",
		magnitut: 6.7,
		tekrarSuresi: 270,
		fayHatti: "Ege Graben",
	},
	{
		ad: "Tekirdağ",
		bolge: "marmara",
		riskSeviyesi: "yuksek",
		magnitut: 6.8,
		tekrarSuresi: 290,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Çanakkale",
		bolge: "marmara",
		riskSeviyesi: "yuksek",
		magnitut: 6.6,
		tekrarSuresi: 310,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Ordu",
		bolge: "karadeniz",
		riskSeviyesi: "dusuk",
		magnitut: 5.5,
		tekrarSuresi: 500,
		fayHatti: "Karadeniz",
	},
	{
		ad: "Kütahya",
		bolge: "ege",
		riskSeviyesi: "orta",
		magnitut: 6.1,
		tekrarSuresi: 380,
		fayHatti: "Ege Graben",
	},
	{
		ad: "Tokat",
		bolge: "karadeniz",
		riskSeviyesi: "orta",
		magnitut: 5.9,
		tekrarSuresi: 410,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Çorum",
		bolge: "karadeniz",
		riskSeviyesi: "orta",
		magnitut: 6.0,
		tekrarSuresi: 400,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Sivas",
		bolge: "ic-anadolu",
		riskSeviyesi: "orta",
		magnitut: 6.2,
		tekrarSuresi: 370,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Bolu",
		bolge: "karadeniz",
		riskSeviyesi: "cok-yuksek",
		magnitut: 7.4,
		tekrarSuresi: 240,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Düzce",
		bolge: "karadeniz",
		riskSeviyesi: "cok-yuksek",
		magnitut: 7.5,
		tekrarSuresi: 235,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Afyon",
		bolge: "ege",
		riskSeviyesi: "orta",
		magnitut: 6.0,
		tekrarSuresi: 390,
		fayHatti: "Ege Graben",
	},
	{
		ad: "Uşak",
		bolge: "ege",
		riskSeviyesi: "yuksek",
		magnitut: 6.5,
		tekrarSuresi: 300,
		fayHatti: "Ege Graben",
	},
	{
		ad: "Isparta",
		bolge: "akdeniz",
		riskSeviyesi: "yuksek",
		magnitut: 6.6,
		tekrarSuresi: 280,
		fayHatti: "Akdeniz",
	},
	{
		ad: "Burdur",
		bolge: "akdeniz",
		riskSeviyesi: "yuksek",
		magnitut: 6.7,
		tekrarSuresi: 270,
		fayHatti: "Ege Graben",
	},
	{
		ad: "Aksaray",
		bolge: "ic-anadolu",
		riskSeviyesi: "orta",
		magnitut: 5.8,
		tekrarSuresi: 430,
		fayHatti: "Orta Anadolu",
	},
	{
		ad: "Yozgat",
		bolge: "ic-anadolu",
		riskSeviyesi: "orta",
		magnitut: 5.9,
		tekrarSuresi: 420,
		fayHatti: "Orta Anadolu",
	},
	{
		ad: "Karaman",
		bolge: "ic-anadolu",
		riskSeviyesi: "orta",
		magnitut: 5.7,
		tekrarSuresi: 450,
		fayHatti: "Orta Anadolu",
	},
	{
		ad: "Mardin",
		bolge: "guneydogu-anadolu",
		riskSeviyesi: "yuksek",
		magnitut: 6.4,
		tekrarSuresi: 310,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Bitlis",
		bolge: "dogu-anadolu",
		riskSeviyesi: "cok-yuksek",
		magnitut: 7.1,
		tekrarSuresi: 200,
		fayHatti: "Bitlis Sütur",
	},
	{
		ad: "Muş",
		bolge: "dogu-anadolu",
		riskSeviyesi: "yuksek",
		magnitut: 6.8,
		tekrarSuresi: 260,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Ağrı",
		bolge: "dogu-anadolu",
		riskSeviyesi: "yuksek",
		magnitut: 6.6,
		tekrarSuresi: 280,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Kars",
		bolge: "dogu-anadolu",
		riskSeviyesi: "orta",
		magnitut: 6.0,
		tekrarSuresi: 400,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Giresun",
		bolge: "karadeniz",
		riskSeviyesi: "dusuk",
		magnitut: 5.4,
		tekrarSuresi: 520,
		fayHatti: "Karadeniz",
	},
	{
		ad: "Rize",
		bolge: "karadeniz",
		riskSeviyesi: "dusuk",
		magnitut: 5.3,
		tekrarSuresi: 530,
		fayHatti: "Karadeniz",
	},
	{
		ad: "Artvin",
		bolge: "karadeniz",
		riskSeviyesi: "orta",
		magnitut: 5.8,
		tekrarSuresi: 440,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Gümüşhane",
		bolge: "karadeniz",
		riskSeviyesi: "orta",
		magnitut: 5.9,
		tekrarSuresi: 420,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Bayburt",
		bolge: "karadeniz",
		riskSeviyesi: "orta",
		magnitut: 5.8,
		tekrarSuresi: 430,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Amasya",
		bolge: "karadeniz",
		riskSeviyesi: "orta",
		magnitut: 6.1,
		tekrarSuresi: 390,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Kastamonu",
		bolge: "karadeniz",
		riskSeviyesi: "orta",
		magnitut: 6.0,
		tekrarSuresi: 400,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Sinop",
		bolge: "karadeniz",
		riskSeviyesi: "dusuk",
		magnitut: 5.5,
		tekrarSuresi: 500,
		fayHatti: "Karadeniz",
	},
	{
		ad: "Bartın",
		bolge: "karadeniz",
		riskSeviyesi: "orta",
		magnitut: 5.8,
		tekrarSuresi: 440,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Karabük",
		bolge: "karadeniz",
		riskSeviyesi: "orta",
		magnitut: 6.2,
		tekrarSuresi: 380,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Zonguldak",
		bolge: "karadeniz",
		riskSeviyesi: "orta",
		magnitut: 6.0,
		tekrarSuresi: 400,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Bilecik",
		bolge: "marmara",
		riskSeviyesi: "yuksek",
		magnitut: 6.5,
		tekrarSuresi: 300,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Yalova",
		bolge: "marmara",
		riskSeviyesi: "cok-yuksek",
		magnitut: 7.3,
		tekrarSuresi: 250,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Edirne",
		bolge: "marmara",
		riskSeviyesi: "orta",
		magnitut: 6.2,
		tekrarSuresi: 380,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Kırklareli",
		bolge: "marmara",
		riskSeviyesi: "orta",
		magnitut: 6.1,
		tekrarSuresi: 390,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Osmaniye",
		bolge: "akdeniz",
		riskSeviyesi: "cok-yuksek",
		magnitut: 7.6,
		tekrarSuresi: 180,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Kilis",
		bolge: "guneydogu-anadolu",
		riskSeviyesi: "cok-yuksek",
		magnitut: 7.4,
		tekrarSuresi: 200,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Siirt",
		bolge: "guneydogu-anadolu",
		riskSeviyesi: "yuksek",
		magnitut: 6.7,
		tekrarSuresi: 270,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Şırnak",
		bolge: "guneydogu-anadolu",
		riskSeviyesi: "yuksek",
		magnitut: 6.5,
		tekrarSuresi: 290,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Hakkari",
		bolge: "dogu-anadolu",
		riskSeviyesi: "yuksek",
		magnitut: 6.6,
		tekrarSuresi: 280,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Ardahan",
		bolge: "dogu-anadolu",
		riskSeviyesi: "orta",
		magnitut: 5.9,
		tekrarSuresi: 410,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Iğdır",
		bolge: "dogu-anadolu",
		riskSeviyesi: "orta",
		magnitut: 6.0,
		tekrarSuresi: 400,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Çankırı",
		bolge: "ic-anadolu",
		riskSeviyesi: "orta",
		magnitut: 6.1,
		tekrarSuresi: 390,
		fayHatti: "Kuzey Anadolu",
	},
	{
		ad: "Kırıkkale",
		bolge: "ic-anadolu",
		riskSeviyesi: "orta",
		magnitut: 6.0,
		tekrarSuresi: 400,
		fayHatti: "Orta Anadolu",
	},
	{
		ad: "Kırşehir",
		bolge: "ic-anadolu",
		riskSeviyesi: "orta",
		magnitut: 5.9,
		tekrarSuresi: 420,
		fayHatti: "Orta Anadolu",
	},
	{
		ad: "Nevşehir",
		bolge: "ic-anadolu",
		riskSeviyesi: "orta",
		magnitut: 5.8,
		tekrarSuresi: 430,
		fayHatti: "Orta Anadolu",
	},
	{
		ad: "Niğde",
		bolge: "ic-anadolu",
		riskSeviyesi: "orta",
		magnitut: 6.0,
		tekrarSuresi: 400,
		fayHatti: "Orta Anadolu",
	},
	{
		ad: "Bingöl",
		bolge: "dogu-anadolu",
		riskSeviyesi: "cok-yuksek",
		magnitut: 7.0,
		tekrarSuresi: 210,
		fayHatti: "Doğu Anadolu",
	},
	{
		ad: "Tunceli",
		bolge: "dogu-anadolu",
		riskSeviyesi: "yuksek",
		magnitut: 6.8,
		tekrarSuresi: 260,
		fayHatti: "Doğu Anadolu",
	},
];

let filtrelenmisVeriler = [...sehirVerileri];
let aramaMetni = "";
let secilenRisk = "tumu";
let secilenBolge = "tumu";

const sehirListesiDiv = document.getElementById("sehirListesi");
const aramaKutusu = document.getElementById("aramaKutusu");
const riskFiltresi = document.getElementById("riskFiltresi");
const bolgeFiltresi = document.getElementById("bolgeFiltresi");
const toplamSehirSpan = document.getElementById("toplamSehir");
const yuksekRiskSayisiSpan = document.getElementById("yuksekRiskSayisi");
const gosterilenSehirSpan = document.getElementById("gosterilenSehir");

// risk seviyesi renk ve metin eşleştirmesi
const riskBilgileri = {
	"cok-yuksek": { metin: "Çok Yüksek", sinif: "risk-cok-yuksek" },
	yuksek: { metin: "Yüksek", sinif: "risk-yuksek" },
	orta: { metin: "Orta", sinif: "risk-orta" },
	dusuk: { metin: "Düşük", sinif: "risk-dusuk" },
};

// şehir kartı oluşturma fonksiyonu
function sehirKartiOlustur(sehir) {
	const riskInfo = riskBilgileri[sehir.riskSeviyesi];

	return `
                <div class="sehir-kart">
                    <div class="sehir-baslik">
                        <div class="sehir-adi">${sehir.ad}</div>
                        <div class="risk-rozet ${riskInfo.sinif}">${
		riskInfo.metin
	}</div>
                    </div>
                    <div class="sehir-detaylar">
                        <div class="detay-satir">
                            <span class="detay-etiket">Bölge</span>
                            <span class="detay-deger">${sehir.bolge
															.split("-")
															.map(
																(k) => k.charAt(0).toUpperCase() + k.slice(1)
															)
															.join(" ")}</span>
                        </div>
                        <div class="detay-satir">
                            <span class="detay-etiket">Beklenen Magnitüt</span>
                            <span class="detay-deger">${sehir.magnitut.toFixed(
															1
														)}</span>
                        </div>
                        <div class="detay-satir">
                            <span class="detay-etiket">Tekrar Süresi</span>
                            <span class="detay-deger">${
															sehir.tekrarSuresi
														} yıl</span>
                        </div>
                        <div class="detay-satir">
                            <span class="detay-etiket">Fay Hattı</span>
                            <span class="detay-deger">${sehir.fayHatti}</span>
                        </div>
                    </div>
                </div>
            `;
}

// verileri filtreleme fonksiyonu
function verileriFiltrele() {
	filtrelenmisVeriler = sehirVerileri.filter((sehir) => {
		const aramaEslesmesi = sehir.ad
			.toLowerCase()
			.includes(aramaMetni.toLowerCase());
		const riskEslesmesi =
			secilenRisk === "tumu" || sehir.riskSeviyesi === secilenRisk;
		const bolgeEslesmesi =
			secilenBolge === "tumu" || sehir.bolge === secilenBolge;

		return aramaEslesmesi && riskEslesmesi && bolgeEslesmesi;
	});

	ekranaYazdir();
	istatistikleriGuncelle();
}

// şehirleri ekrana yazdırma
function ekranaYazdir() {
	if (filtrelenmisVeriler.length === 0) {
		sehirListesiDiv.innerHTML = `
                    <div class="sonuc-yok">
                        <div class="sonuc-yok-ikon">🔍</div>
                        <div>Arama kriterlerinize uygun şehir bulunamadı.</div>
                    </div>
                `;
		return;
	}

	sehirListesiDiv.innerHTML = filtrelenmisVeriler
		.map((sehir) => sehirKartiOlustur(sehir))
		.join("");
}

// istatistikleri güncelleme
function istatistikleriGuncelle() {
	const yuksekRiskSayisi = sehirVerileri.filter(
		(s) => s.riskSeviyesi === "cok-yuksek" || s.riskSeviyesi === "yuksek"
	).length;

	toplamSehirSpan.textContent = sehirVerileri.length;
	yuksekRiskSayisiSpan.textContent = yuksekRiskSayisi;
	gosterilenSehirSpan.textContent = filtrelenmisVeriler.length;
}

aramaKutusu.addEventListener("input", (e) => {
	aramaMetni = e.target.value;
	verileriFiltrele();
});

riskFiltresi.addEventListener("change", (e) => {
	secilenRisk = e.target.value;
	verileriFiltrele();
});

bolgeFiltresi.addEventListener("change", (e) => {
	secilenBolge = e.target.value;
	verileriFiltrele();
});

// sayfa yüklendiğinde başlat
window.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
		ekranaYazdir();
		istatistikleriGuncelle();
	}, 500);
});
