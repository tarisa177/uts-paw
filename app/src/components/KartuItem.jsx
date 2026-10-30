import { Link } from 'react-router-dom'
import Kategori from './Kategori.jsx'

export default function KartuItem({ item }) {
  const { id, judul, kategori, teknologi, tahun } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>

      <Kategori kategori={kategori} />
      <p>
        {kategori} · {tahun}
      </p>

      <p>
        TEKNOLOGI: {teknologi}
      </p>
    </article>
  )
}