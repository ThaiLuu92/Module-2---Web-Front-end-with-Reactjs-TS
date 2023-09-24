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

  for (const player of players) {
    playerTasksHTML += `
            <div class="player-tasks">
                <div class="player-name">
                    <i class="fa-solid fa-xmark"></i>
                    <i class="fa-solid fa-crown${
                      player.isTopPlayer ? " top-player" : ""
                    }"></i>
                    <span>${player.name}</span>
                </div>
                <div class="player-point">
                    <i class="fa-solid fa-minus"></i>
                    <span>${player.points}</span>
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        `;
  }

  playerContainer.innerHTML = playerTasksHTML;
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

// Thêm sự kiện khi nút "ADD PLAYER" được nhấn
const addPlayerButton = document.getElementById(
  "addPlayer"
) as HTMLButtonElement;
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

// Thêm sự kiện khi nút "+" và "-" được nhấn để tăng/giảm điểm
const playerContainer = document.querySelector(
  ".player-container"
) as HTMLElement;
playerContainer.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const playerPointElement = target.closest(".player-point");

  if (playerPointElement) {
    const playerIndex = Array.from(
      playerPointElement.parentElement.parentElement.children
    ).indexOf(playerPointElement.parentElement);
    const player = players[playerIndex];

    if (target.classList.contains("fa-plus")) {
      player.points++;
    } else if (target.classList.contains("fa-minus")) {
      player.points = Math.max(player.points - 1, 0);
    }

    checkTopPlayer();
    updateUI();
  }
});
