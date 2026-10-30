import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App.jsx'
import Kategori from './components/Kategori.jsx'
import Informasi from './components/Informasi.jsx'
import KartuItem from './components/KartuItem.jsx'


// Contoh test. Tambahkan minimal 5 test buatan sendiri (butir rubrik F1).
test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})
// test 2
test('Tampilan Kategori', () => { 
  render(<Kategori kategori = "Aplikasi" />)
expect(screen.getByText('Aplikasi')).toBeInTheDocument()
})

// test 3
test('tampilan teknologi dan tahun', () => {
  const item = {
    teknologi: 'React dan JavaScript',
    tahun: 2026,
    tautan: 'https://react.dev/learn',
  }

  render(<InfoProyek item={item} />)

  expect(screen.getByText('React dan JavaScript')).toBeInTheDocument()
  expect(screen.getByText('2026')).toBeInTheDocument()
})

// test 4 rampilan tautan 
test('tampilan link', () => {
  const item = {
    teknologi: 'React dan JavaScript',
    tahun: 2026,
    tautan: 'https://react.dev/learn',
  }

  render(<InfoProyek item={item} />)

  const tautan = screen.getByRole('link', { name: 'Lihat' })

  expect(tautan).toHaveAttribute('href', 'https://react.dev/learn')
})

// test 5 tampilkan judul 
test('tampilkan judul', () => {
  const item = {
    id: '8',
    judul: 'Pengingt Tugas Kuliah',
    kategori: 'Aplikasi',
    teknologi: 'React dan JavaScript',
    tahun: 2026,
  }

  render(
    <MemoryRouter>
      <KartuItem item={item} />
    </MemoryRouter>,
  )

  expect(
    screen.getByRole('link', { name: 'Pengingat Tugas Kuliah' }),
  ).toBeInTheDocument()
})
  

