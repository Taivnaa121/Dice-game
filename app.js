var diceDom = document.querySelector(".dice");
// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer;

//togloom duussna esehiig hadgalah huvisagch
var isGameOver;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores;

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore;

initGame();
//togloom shineer ehlehed beltgene
function initGame() {
  //togloom ehelle gesen tuluvt oruulah
  isGameOver = false;
  activePlayer = 0;

  // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];

  // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  diceDom.style.display = "none";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}
solih = function () {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // toglogchii eeljiig nuguu toglogch ruu shiljuulne
  //herev idevhitei toglogch ni 0 baival  idevhitei toglogschiig 1 bolgo ugui bol 0 bolgo
  activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
  //idevhitei toglogchiig  shiljuuleh (ulaan tseg)

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //shoog tur alga bolgono
  diceDom.style.display = "none";
};

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

// <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";
//shoog shideh  event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isGameOver == false) {
    // 1-6 sanamsargui toog avna
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //shoonii zurgiig delgets deer gargana
    diceDom.style.display = "block";
    //buusan sanamsargui  toond hargalzah zurgiig gargah
    diceDom.src = "dice-" + diceNumber + ".png";
    // buusan too 1-s yalgaatai bol toglogchhin eeljiin onoog uurchilnu (nemegduulne)
    if (diceNumber != 1) {
      //1-s yalgaatai too buulaa. Buusan toog toglogchid nemne
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      solih();

      //1 buusan bol toglogchiin eeliig solino
      // roundScore = 0;
      // document.getElementById("current-" + activePlayer).textContent = 0;
      // // toglogchii eeljiig nuguu toglogch ruu shiljuulne
      // //herev idevhitei toglogch ni 0 baival  idevhitei toglogschiig 1 bolgo ugui bol 0 bolgo
      // activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
      // //idevhitei toglogchiig  shiljuuleh (ulaan tseg)

      // document.querySelector(".player-0-panel").classList.toggle("active");
      // document.querySelector(".player-1-panel").classList.toggle("active");

      // //shoog tur alga bolgono
      // diceDom.style.display = "none";
    }
  } else {
    alert(
      "Тоглоом дууссан " +
        (activePlayer + 1) +
        "-р тоглогч хожсон NewGame-ийг дарна уу"
    );
  }
});
//hold tovchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isGameOver == false) {
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    // toglogchiin hojson eshiig shalgah(100-s ih eshiig)
    if (scores[activePlayer] >= 20) {
      isGameOver = true;

      document.getElementById("name-" + activePlayer).textContent =
        "WINNER !!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      solih();
    }
  } else {
    alert(
      "Тоглоом дууссан " +
        (activePlayer + 1) +
        "-р тоглогч хожсон NewGame-ийг дарна уу"
    );
  }
});
//  shineer ehleh
document.querySelector(".btn-new").addEventListener("click", initGame);
