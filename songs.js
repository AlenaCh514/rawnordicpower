/* ============================================================
   RAW NORDIC POWER — СПИСОК ПЕСЕН
   ------------------------------------------------------------
   КАК ДОБАВИТЬ НОВУЮ ПЕСНЮ САМОЙ (без Muse):
   1. Положи файлы песни в папку audio/ рядом с этим файлом.
      Например: audio/nazvanie-pesni.mp3 и audio/nazvanie-pesni.wav
   2. Скопируй блок одной песни ниже (от { до },) и вставь его
      после последнего блока, перед закрывающей скобкой ];
   3. Поменяй в скопированном блоке:
      - id: короткое имя песни латиницей, без пробелов
        (например: "never-give-up")
      - title: название песни, как оно показывается на сайте
      - mp3: имя MP3-файла в папке audio/ (или "" если пока нет)
      - wav: имя WAV-файла в папке audio/ (или "" если пока нет)
      - video: ссылка на клип на YouTube (или "" если пока нет)
      - lyrics: текст песни между обратными кавычками `
   4. Сохрани файл — песня сама появится на сайте.
   Кнопка "Поддержать артиста" пока без ссылки — она появится,
   когда будет ссылка для донатов.
   ============================================================ */

/* Ссылки на магазины — кнопки сверху и внизу сайта.
   Вставь сюда ссылки на свои страницы артиста.
   Пустая строка "" — кнопка не показывается. */
const LINKS = {
  spotify: "",
  apple: "",
  amazon: "",
  youtube: "https://www.youtube.com/@RawNordicPower"
};

const SONGS = [
  {
    id: "the-valkyries-call",
    title: "THE VALKYRIES CALL!",
    mp3: "audio/the-valkyries-call.mp3",
    wav: "",
    video: "https://www.youtube.com/watch?v=MhtQZtACJLg",
    lyrics: `Raise your shields!
Raise your blades!
Hear the call!
No one fades!

From the mountains, from the skies,
Hear the ravens, hear their cries!
Through the thunder, through the flame,
Warriors rise to claim their name!

Do you hear them?
Do you hear?

They are calling!
They are near!

The dead arise, the dead return!
The ravens cry, the heavens burn!

THE VALKYRIES CALL!
RISE, warrior, RISE!
A NEW BATTLE WAITS!
BEHOLD THE SKIES!

THE VALKYRIES CALL!
RISE FROM THE GROUND!
A NEW fight AWAITS!
HEAR THIS SOUND!
THE VALKYRIES CALL!

Across the sky, their shadows fly,
With wings of fire, they ride the night.
They choose the fallen, call their name,
And lead them through the gates of flame.

Hear them calling!
Hear them cry!

Raise your voices!
Touch the sky!

The dead arise, the dead return!
The ravens cry, the heavens burn!

THE VALKYRIES CALL!
RISE, warrior, RISE!
A NEW BATTLE WAITS!
BEHOLD THE SKIES!

THE VALKYRIES CALL!
RISE FROM THE GROUND!
A NEW fight AWAITS!
HEAR THIS SOUND!
THE VALKYRIES CALL!

They fall at dusk, they rise at dawn,
Their swords are ready, their fear is gone.
They fight again, they never tire,
Till Odin calls them back to fire!

Fall and rise!
Fight again!

Death is not the end!
We rise again!

The dead arise, the dead return!
The ravens cry, the heavens burn!

THE VALKYRIES CALL!
RISE, warrior, RISE!
A NEW BATTLE WAITS!
BEHOLD THE SKIES!

THE VALKYRIES CALL!
RISE FROM THE GROUND!
A NEW fight AWAITS!
HEAR THIS SOUND!
THE VALKYRIES CALL!

Fall and rise!
Fight again!

THE VALKYRIES CALL!`
  }
];
