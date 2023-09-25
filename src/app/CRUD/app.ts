// Khai báo một interface để biểu diễn thông tin của người chơi
interface Player {
  name: string;
  points: number;
  isTopPlayer: boolean;
}

// Khởi tạo một mảng để lưu trữ danh sách người chơi
const players: Player[] = [];

// Hàm để cập nhật giao diện dựa trên dữ liệu người chơi
function updateUI() {
  const playerContainer = document.querySelector(
    ".player-container"
  ) as HTMLElement;
  let playerTasksHTML = "";
  let totalPoints = 0;

  for (const player of players) {
    const crownIconColor = player.isTopPlayer
      ? "color: rgb(255, 220, 24);"
      : "";
    playerTasksHTML += `
            <div class="player-tasks">
                <div class="player-name">
                    <i class="fa-solid fa-xmark" onclick="deletePlayer('${player.name}')"></i>
                    <i class="fa-solid fa-crown" style="${crownIconColor}"></i>
                    <span>${player.name}</span>
                </div>
                <div class="player-point">
                    <i class="fa-solid fa-minus" onclick="decrementPoints('${player.name}')"></i>
                    <span>${player.points}</span>
                    <i class="fa-solid fa-plus" onclick="incrementPoints('${player.name}')"></i>
                </div>
            </div>
        `;
    totalPoints += player.points;
  }

  playerContainer.innerHTML = playerTasksHTML;

  const boardPlayer = document.querySelector(
    ".board-player #total-player"
  ) as HTMLElement;
  boardPlayer.textContent = players.length.toString();

  const boardTotalPoints = document.querySelector(
    ".board-total-points #total-points"
  ) as HTMLElement;
  boardTotalPoints.textContent = totalPoints.toString();
  //  if (players.length === 0) {
  //    alert("Không còn người chơi.");
  //  }
}

// Hàm để thêm người chơi mới
function addPlayer(name: string) {
  const player: Player = {
    name: name,
    points: 0,
    isTopPlayer: false,
  };

  players.push(player);
  updateUI();
}

// Hàm để kiểm tra người chơi có điểm cao nhất
function checkTopPlayer() {
  let maxPoints = 0;

  for (const player of players) {
    if (player.points > maxPoints) {
      maxPoints = player.points;
    }
  }

  for (const player of players) {
    player.isTopPlayer = player.points === maxPoints;
  }
}

// Hàm để giảm điểm
function decrementPoints(playerName: string) {
  const player = players.find((p) => p.name === playerName);

  if (player) {
    player.points = Math.max(player.points - 1, 0);
    checkTopPlayer();
    updateUI();
  }
}

// Hàm để tăng điểm
function incrementPoints(playerName: string) {
  const player = players.find((p) => p.name === playerName);

  if (player) {
    player.points++;
    checkTopPlayer();
    updateUI();
  }
}

// Hàm để xóa người chơi
function deletePlayer(playerName: string) {
  const playerIndex = players.findIndex((p) => p.name === playerName);

  if (playerIndex !== -1) {
    players.splice(playerIndex, 1);
    updateUI();
  }
}

// Thêm sự kiện khi nút "ADD PLAYER" được nhấn
const addPlayerButton = document.querySelector("button") as HTMLButtonElement;
addPlayerButton.addEventListener("click", () => {
  const playerNameInput = document.querySelector(
    "input[type='text']"
  ) as HTMLInputElement;
  const playerName = playerNameInput.value.trim();

  if (playerName !== "") {
    addPlayer(playerName);
    playerNameInput.value = "";
  }
});

// Thực hiện cập nhật giao diện ban đầu
updateUI();
