export default function Poster() {
    return (
        <div className="bg-gradient-to-b from-blue-900 to-blue-600  min-h-screen">
            <div className="max-w-5xl mx-auto py-10 px-6">
                <div className="max-w-4xl mx-auto bg-purple-50 rounded-lg shadow-lg p-8">
                    <h1 className="text-center text-3xl font-bold italic text-purple-700 mb-6">
                        Poster Sunumu Hakkında
                    </h1>

                    <p className="mb-4 leading-relaxed text-justify">
                        Kongremiz kapsamında gerçekleştirilecek poster sunumları, bilimsel ve
                        akademik çalışmaları görsel formatta paylaşma fırsatı sunmaktadır.
                        Poster sunumları, katılımcıların araştırma bulgularını
                        aktarmalarına ve kongre katılımcılarıyla etkileşimde bulunmalarına
                        olanak sağlar.
                    </p>
                    <p className="font-semibold mb-2">Poster sunumu başvuruları için aşağıdaki kurallar ve süreçler geçerlidir:</p>

                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-purple-600 mb-2">
                            Bildiri Gönderim Kuralları
                        </h2>
                        <ul className="list-decimal list-inside space-y-2">
                            <li>Bildiriniz 300 kelimeyi geçmemelidir.</li>
                            <li>Özetler, Türkçe yazım kurallarına uygun olmalıdır.</li>
                            <li>Başlık, içeriği kapsamalı ve açıklayıcı olmalıdır.</li>
                            <li>
                                Kısaltmaların ilk geçtiği yerde açılımı yazılmalı, sonrasında
                                parantez içinde belirtilmelidir.
                            </li>
                            <li>
                                Yazar isimleri, yalnızca ilk harf büyük olacak şekilde
                                yazılmalıdır.
                            </li>
                            <li>Yazar isimlerinde akademik unvan kullanılmamalıdır.</li>
                            <li>
                                Başvurular,{" "}
                                <span className="italic text-purple-500">ietyonetim@gmail.com</span>{" "}
                                adresine e-posta yoluyla yapılmalıdır.
                            </li>
                            <li>
                                Son başvuru tarihi:{" "}
                                <span className="font-bold">1 Şubat 2025</span>.
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-purple-600 mb-2">
                            Bildiri Değerlendirme ve Kabul Süreci
                        </h2>
                        <ul className="list-decimal list-inside space-y-2">
                            <li>Bildiriler bilimsel kurul tarafından değerlendirilecektir.</li>
                            <li>Kabul edilen bildiriler, poster sunumu olarak sergilenecektir.</li>
                            <li>Poster sunumları 15-16 Şubat 2025 tarihlerinde yapılacaktır.</li>
                            <li>
                                En iyi üç poster sunumuna ödül verilecektir.
                            </li>
                        </ul>
                    </div>

                    <div className="text-center mt-8">
                        <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                            POSTER SUNUMLARI BAŞVURUSU İÇİN
                        </h3>
                        <a
                            href="#"
                            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg shadow-md font-bold inline-block"
                        >
                            FORM LİNKİ
                        </a>
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="text-center text-3xl font-bold mb-6">Poster Sunumları Jürileri</h3>
                    <div className="flex justify-center gap-8">
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-3"></div>
                            <p className="font-semibold">Ass. Prof. Ayşe Banu Demir</p>
                        </div>
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-3"></div>
                            <p className="font-semibold">Prof. Dr. Gül Akdoğan</p>
                        </div>
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-3"></div>
                            <p className="font-semibold">Doç. Dr. Özden Gökdemir</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};