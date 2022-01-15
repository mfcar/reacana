import katakana from './data/katakanaSymbols.json';

function ShowCharacters() {
   return (
      <ul>
         {katakana.map((kata) => (
            <li key={kata.transliteration}>
               {kata.katakana} - {kata.transliteration}
            </li>
         ))}
      </ul>
   );
}

export default ShowCharacters;
