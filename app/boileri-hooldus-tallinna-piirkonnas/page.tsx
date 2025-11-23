import Link from 'next/link'

export default function BoileriHooldusTallinnaPiirkonnas() {
  return (
    <div className="container">
      <h1>Boileri Hooldus Tallinna Piirkonnas - Professionaalne Teenus</h1>
      
      <section>
        <h2>Boileri Hooldus Tallinnas ja Ümbruskonnas</h2>
        <p>
          Oleme spetsialiseerunud boilerite Hooldusele kogu Tallinna piirkonnas. 
          Pakume kiiret ja kvaliteetset teenust koos pikaajalise garantiiaga.
        </p>
      </section>

      <section>
        <h3>Meie Teenuse Hinnakiri</h3>
        <ul>
          <li>Tavaboileri Hooldus: 150-300€</li>
          <li>Kiirpaigaldus (sama päev): +50€</li>
          <li>Garantii: 2 aastat</li>
          <li>Tasuta esmane konsultatsioon</li>
        </ul>
      </section>

      <section>
        <h3>Teeninduspiirkond Tallinnas</h3>
        <p>
          Kesklinn, Mustamäe, Õismäe, Lasnamäe, Pirita, Nõmme, Haabersti, 
          Põhja-Tallinn, Kristiine, Viimsi, Rae, Saue vald
        </p>
      </section>

      <div className="cta-section">
        <Link href="/vorm" className="button">
          Telli Tasuta Konsultatsioon
        </Link>
      </div>
    </div>
  )
}
