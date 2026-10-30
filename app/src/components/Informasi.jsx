export default function Informasi({ item }) {
  return (
    <dl>
        <dt>Teknologi</dt>
        <dd> {item.teknologi}</dd>

        <dt>Tahun</dt>
        <dd> {item.tahun} </dd>

    </dl>
  )
}