
import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'

export default function Beranda() {
  const { items, loading, error } = useKoleksi()

  const jumlahKategori = new Set(
    items.map((item) => item.kategori)
  ).size

  return (
    <section>
      <h1 id= "judul" >Portofolio Proyek</h1>
      <p>Tema: {mahasiswa.tema}</p>

      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : error ? (
        <p role="alert">Gagal memuat data proyek.</p>
      ) : (
        <p>
          Ada {items.length} proyek dalam {jumlahKategori} kategori.
        </p>
      )}

      <Link to="/koleksi">Lihat semua proyek</Link>
    </section>
  )
}
