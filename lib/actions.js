"use server"; // Dosyanın en başında olmalı

export async function handleContactAction(prevState, formData) {
    // prevState: Bir önceki state (başlangıçta null)
    // formData: Form verileri

    const name = formData.get("name");

    // Yapay bir gecikme ekleyelim (yükleniyor durumunu görmek için)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Sunucu tarafında işlendi:", name);

    // Örnek: Eğer anasayfadaki bir veriyi güncelliyor olsaydık
    revalidatePath("/"); // Anasayfayı tazele
    revalidatePath("/blog"); // Blog sayfasını tazele

    // Geriye bir sonuç objesi dönüyoruz
    return {
        success: true,
        message: `Teşekkürler ${name}, mesajın başarıyla alındı!`
    };
}
