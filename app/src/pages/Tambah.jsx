
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = {
  judul: '',
  kategori: 'Aplikasi',
  teknologi: '',
  tahun: '2026',
  tautan: 'Belum tersedia'
}

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()

  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  function ubah(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
    setGalat('')
  }

  function simpan(e) {
    e.preventDefault()

    if (form.judul.trim().length < 3) {
      setGalat('Judul proyek minimal 3 karakter.')
      return
    }

    if (!form.teknologi.trim()) {
      setGalat('Teknologi wajib diisi.')
      return
    }

    tambah({
      id: String(Date.now()),
      judul: form.judul.trim(),
      kategori: form.kategori,
      teknologi: form.teknologi.trim(),
      tahun: Number(form.tahun),
      tautan: form.tautan.trim() || 'Belum tersedia'
    })

    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Proyek</h1>
      <p>Tambahkan proyek baru ke portofolio proyek.</p>

      <label htmlFor="judul">Judul</label>
      <input
        id="judul"
        name="judul"
        value={form.judul}
        onChange={ubah}
        placeholder="Contoh: Kalkulator Uang Jajan"
      />

      <label htmlFor="kategori">Kategori</label>
      <select
        id="kategori"
        name="kategori"
        value={form.kategori}
        onChange={ubah}
      >
        <option value="Aplikasi">Aplikasi</option>
        <option value="Website">Website</option>
        <option value="Sistem Informasi">Sistem Informasi</option>
        <option value="Data">Data</option>
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
        placeholder="Tautan proyek atau Belum tersedia"
      />

      {galat && <p role="alert">{galat}</p>}

      <button type="submit">Simpan</button>
    </form>
  )
}
