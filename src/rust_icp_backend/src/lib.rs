#[ic_cdk::query]
fn report(name: String, body: String, location: String) -> String {
    format!("Laporan terkirim Judul pengaduan: {}, Isi Pengaduan: {}, Lokasi: {}", name, body, location)
}