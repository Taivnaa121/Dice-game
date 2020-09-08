// var diceDom = document.querySelector(".dice");
// // Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
// var activePlayer;

// //togloom duussna esehiig hadgalah huvisagch
// var isGameOver;

// // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
// var scores;

// // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
// var roundScore;

// initGame();
// //togloom shineer ehlehed beltgene
// function initGame() {
//   //togloom ehelle gesen tuluvt oruulah
//   isGameOver = false;
//   activePlayer = 0;

//   // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
//   scores = [0, 0];

//   // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
//   roundScore = 0;

//   document.getElementById("score-0").textContent = 0;
//   document.getElementById("score-1").textContent = 0;
//   document.getElementById("current-0").textContent = 0;
//   document.getElementById("current-1").textContent = 0;

//   diceDom.style.display = "none";

//   document.getElementById("name-0").textContent = "Player 1";
//   document.getElementById("name-1").textContent = "Player 2";

//   document.querySelector(".player-0-panel").classList.remove("winner");
//   document.querySelector(".player-1-panel").classList.remove("winner");

//   document.querySelector(".player-0-panel").classList.remove("active");
//   document.querySelector(".player-1-panel").classList.remove("active");

//   document.querySelector(".player-0-panel").classList.add("active");
// }
// solih = function () {
//   roundScore = 0;
//   document.getElementById("current-" + activePlayer).textContent = 0;
//   // toglogchii eeljiig nuguu toglogch ruu shiljuulne
//   //herev idevhitei toglogch ni 0 baival  idevhitei toglogschiig 1 bolgo ugui bol 0 bolgo
//   activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
//   //idevhitei toglogchiig  shiljuuleh (ulaan tseg)

//   document.querySelector(".player-0-panel").classList.toggle("active");
//   document.querySelector(".player-1-panel").classList.toggle("active");

//   //shoog tur alga bolgono
//   diceDom.style.display = "none";
// };

// // Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

// // <div class="player-score" id="score-0">43</div>
// // window.document.querySelector("#score-0").textContent = dice;

// // document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";
// //shoog shideh  event listener
// document.querySelector(".btn-roll").addEventListener("click", function () {
//   if (isGameOver == false) {
//     // 1-6 sanamsargui toog avna
//     var diceNumber = Math.floor(Math.random() * 6) + 1;
//     //shoonii zurgiig delgets deer gargana
//     diceDom.style.display = "block";
//     //buusan sanamsargui  toond hargalzah zurgiig gargah
//     diceDom.src = "dice-" + diceNumber + ".png";
//     // buusan too 1-s yalgaatai bol toglogchhin eeljiin onoog uurchilnu (nemegduulne)
//     if (diceNumber != 1) {
//       //1-s yalgaatai too buulaa. Buusan toog toglogchid nemne
//       roundScore = roundScore + diceNumber;
//       document.getElementById(
//         "current-" + activePlayer
//       ).textContent = roundScore;
//     } else {
//       solih();

//       //1 buusan bol toglogchiin eeliig solino
//       // roundScore = 0;
//       // document.getElementById("current-" + activePlayer).textContent = 0;
//       // // toglogchii eeljiig nuguu toglogch ruu shiljuulne
//       // //herev idevhitei toglogch ni 0 baival  idevhitei toglogschiig 1 bolgo ugui bol 0 bolgo
//       // activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
//       // //idevhitei toglogchiig  shiljuuleh (ulaan tseg)

//       // document.querySelector(".player-0-panel").classList.toggle("active");
//       // document.querySelector(".player-1-panel").classList.toggle("active");

//       // //shoog tur alga bolgono
//       // diceDom.style.display = "none";
//     }
//   } else {
//     alert(
//       "Тоглоом дууссан " +
//         (activePlayer + 1) +
//         "-р тоглогч хожсон NewGame-ийг дарна уу"
//     );
//   }
// });
// //hold tovchnii event listener
// document.querySelector(".btn-hold").addEventListener("click", function () {
//   if (isGameOver == false) {
//     scores[activePlayer] += roundScore;
//     document.getElementById("score-" + activePlayer).textContent =
//       scores[activePlayer];
//     // toglogchiin hojson eshiig shalgah(100-s ih eshiig)
//     if (scores[activePlayer] >= 100) {
//       isGameOver = true;

//       document.getElementById("name-" + activePlayer).textContent =
//         "WINNER !!!";
//       document
//         .querySelector(".player-" + activePlayer + "-panel")
//         .classList.add("winner");
//       document
//         .querySelector(".player-" + activePlayer + "-panel")
//         .classList.remove("active");
//     } else {
//       solih();
//     }
//   } else {
//     alert(
//       "Тоглоом дууссан " +
//         (activePlayer + 1) +
//         "-р тоглогч хожсон NewGame-ийг дарна уу"
//     );
//   }
// });
// //  shineer ehleh
// document.querySelector(".btn-new").addEventListener("click", initGame);
var _0x42b2 = [
  "display",
  "-р\x20тоглогч\x20хожсон\x20NewGame-ийг\x20дарна\x20уу",
  "score-1",
  "Тоглоом\x20дууссан\x20",
  ".btn-hold",
  "score-",
  ".btn-roll",
  "querySelector",
  "remove",
  ".player-",
  "style",
  "-panel",
  "active",
  ".player-1-panel",
  "src",
  "click",
  "none",
  "classList",
  "textContent",
  "winner",
  "name-0",
  "name-",
  ".player-0-panel",
  "add",
  "floor",
  "score-0",
  "toggle",
  "current-",
  "getElementById",
  "block",
  "addEventListener",
];
(function (_0x1aa3bb, _0x42b2e6) {
  var _0x51cf40 = function (_0x2c08b) {
    while (--_0x2c08b) {
      _0x1aa3bb["push"](_0x1aa3bb["shift"]());
    }
  };
  _0x51cf40(++_0x42b2e6);
})(_0x42b2, 0xd3);
var _0x51cf = function (_0x1aa3bb, _0x42b2e6) {
  _0x1aa3bb = _0x1aa3bb - 0x0;
  var _0x51cf40 = _0x42b2[_0x1aa3bb];
  return _0x51cf40;
};
var diceDom = document[_0x51cf("0xd")](".dice"),
  activePlayer,
  isGameOver,
  scores,
  roundScore;
initGame();
function initGame() {
  (isGameOver = ![]),
    (activePlayer = 0x0),
    (scores = [0x0, 0x0]),
    (roundScore = 0x0),
    (document["getElementById"](_0x51cf("0x0"))[_0x51cf("0x18")] = 0x0),
    (document[_0x51cf("0x3")](_0x51cf("0x8"))[_0x51cf("0x18")] = 0x0),
    (document[_0x51cf("0x3")]("current-0")[_0x51cf("0x18")] = 0x0),
    (document[_0x51cf("0x3")]("current-1")[_0x51cf("0x18")] = 0x0),
    (diceDom[_0x51cf("0x10")][_0x51cf("0x6")] = _0x51cf("0x16")),
    (document[_0x51cf("0x3")](_0x51cf("0x1a"))["textContent"] = "Player\x201"),
    (document[_0x51cf("0x3")]("name-1")[_0x51cf("0x18")] = "Player\x202"),
    document[_0x51cf("0xd")](_0x51cf("0x1c"))[_0x51cf("0x17")][_0x51cf("0xe")](
      _0x51cf("0x19")
    ),
    document[_0x51cf("0xd")](_0x51cf("0x13"))[_0x51cf("0x17")][_0x51cf("0xe")](
      _0x51cf("0x19")
    ),
    document[_0x51cf("0xd")](".player-0-panel")[_0x51cf("0x17")]["remove"](
      _0x51cf("0x12")
    ),
    document[_0x51cf("0xd")](".player-1-panel")[_0x51cf("0x17")][
      _0x51cf("0xe")
    ](_0x51cf("0x12")),
    document[_0x51cf("0xd")](_0x51cf("0x1c"))[_0x51cf("0x17")][_0x51cf("0x1d")](
      "active"
    );
}
(solih = function () {
  (roundScore = 0x0),
    (document[_0x51cf("0x3")](_0x51cf("0x2") + activePlayer)[
      _0x51cf("0x18")
    ] = 0x0),
    activePlayer == 0x0 ? (activePlayer = 0x1) : (activePlayer = 0x0),
    document[_0x51cf("0xd")](_0x51cf("0x1c"))[_0x51cf("0x17")]["toggle"](
      _0x51cf("0x12")
    ),
    document[_0x51cf("0xd")](_0x51cf("0x13"))["classList"][_0x51cf("0x1")](
      _0x51cf("0x12")
    ),
    (diceDom[_0x51cf("0x10")][_0x51cf("0x6")] = "none");
}),
  document[_0x51cf("0xd")](_0x51cf("0xc"))[_0x51cf("0x5")](
    "click",
    function () {
      if (isGameOver == ![]) {
        var _0x2c08b = Math[_0x51cf("0x1e")](Math["random"]() * 0x6) + 0x1;
        (diceDom[_0x51cf("0x10")]["display"] = _0x51cf("0x4")),
          (diceDom[_0x51cf("0x14")] = "dice-" + _0x2c08b + ".png"),
          _0x2c08b != 0x1
            ? ((roundScore = roundScore + _0x2c08b),
              (document[_0x51cf("0x3")](_0x51cf("0x2") + activePlayer)[
                "textContent"
              ] = roundScore))
            : solih();
      } else alert(_0x51cf("0x9") + (activePlayer + 0x1) + _0x51cf("0x7"));
    }
  ),
  document["querySelector"](_0x51cf("0xa"))["addEventListener"](
    _0x51cf("0x15"),
    function () {
      isGameOver == ![]
        ? ((scores[activePlayer] += roundScore),
          (document[_0x51cf("0x3")](_0x51cf("0xb") + activePlayer)[
            "textContent"
          ] = scores[activePlayer]),
          scores[activePlayer] >= 0x64
            ? ((isGameOver = !![]),
              (document[_0x51cf("0x3")](_0x51cf("0x1b") + activePlayer)[
                _0x51cf("0x18")
              ] = "WINNER\x20!!!"),
              document["querySelector"](
                _0x51cf("0xf") + activePlayer + _0x51cf("0x11")
              )["classList"][_0x51cf("0x1d")](_0x51cf("0x19")),
              document[_0x51cf("0xd")](
                _0x51cf("0xf") + activePlayer + "-panel"
              )["classList"][_0x51cf("0xe")](_0x51cf("0x12")))
            : solih())
        : alert(_0x51cf("0x9") + (activePlayer + 0x1) + _0x51cf("0x7"));
    }
  ),
  document[_0x51cf("0xd")](".btn-new")["addEventListener"]("click", initGame);
