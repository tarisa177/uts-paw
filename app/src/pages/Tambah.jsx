
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = {
  judul: '',
  kategori: 'Website',
  teknologi: 'Belum Ada',
  tahun: '2026',
  tautan: 'Belum Tersedia'
}

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul proyek wajib diisi, minimal 3 karakter.')
      return
    }

    tambah({
      ...form,
      id: String(Date.now()),
      judul: form.judul.trim(),
      teknologi: form.teknologi.trim() || 'Belum Ada',
      tahun: Number(form.tahun),
      tautan: form.tautan.trim() || 'Belum tersedia'
    })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Proyek</h1>
      <p>Tambahkan proyek baru ke dalam portofolio.</p>

      <label htmlFor="judul">Judul</label>
      <input
        id="judul"
        name="judul"
        value={form.judul}
        onChange={ubah}
        placeholder="Contoh: Proyek Pilihan Anda"
      />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select
        id="kategori"
        name="kategori"
        value={form.kategori}
        onChange={ubah}
      >
        <option value="Website">Website</option>
        <option value="Aplikasi">Aplikasi</option>
        <option value="Data">Data</option>
        <option value="Sistem Informasi">Sistem Informasi</option>
        <option value="Desain">Desain</option>
      </select>

      <label htmlFor="teknologi">Teknologi</label>
      <input
        id="teknologi"
        name="teknologi"
        value={form.teknologi}
        onChange={ubah}
        placeholder="Contoh: HTML, CSS, JavaScript"
      />

      <label htmlFor="tahun">Tahun</label>
      <input
        id="tahun"
        name="tahun"
        type="number"
        min="2000"
        max="2100"
        value={form.tahun}
        onChange={ubah}
      />

      <label htmlFor="tautan">Tautan</label>
      <input
        id="tautan"
        name="tautan"
        value={form.tautan}
        onChange={ubah}
        placeholder="Masukkan tautan"
      />

      <button type="submit">Simpan</button>
    </form>
  )
}
