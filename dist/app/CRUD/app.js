"use strict";
// Khởi tạo một mảng để lưu trữ danh sách người chơi
const players = [];
// Hàm để cập nhật giao diện dựa trên dữ liệu người chơi
function updateUI() {
    const playerContainer = document.querySelector(".player-container");
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
    const boardPlayer = document.querySelector(".board-player #total-player");
    boardPlayer.textContent = players.length.toString();
    const boardTotalPoints = document.querySelector(".board-total-points #total-points");
    boardTotalPoints.textContent = totalPoints.toString();
    //  if (players.length === 0) {
    //    alert("Không còn người chơi.");
    //  }
}
// Hàm để thêm người chơi mới
function addPlayer(name) {
    const player = {
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
function decrementPoints(playerName) {
    const player = players.find((p) => p.name === playerName);
    if (player) {
        player.points = Math.max(player.points - 1, 0);
        checkTopPlayer();
        updateUI();
    }
}
// Hàm để tăng điểm
function incrementPoints(playerName) {
    const player = players.find((p) => p.name === playerName);
    if (player) {
        player.points++;
        checkTopPlayer();
        updateUI();
    }
}
// Hàm để xóa người chơi
function deletePlayer(playerName) {
    const playerIndex = players.findIndex((p) => p.name === playerName);
    if (playerIndex !== -1) {
        players.splice(playerIndex, 1);
        updateUI();
    }
}
// Thêm sự kiện khi nút "ADD PLAYER" được nhấn
const addPlayerButton = document.querySelector("button");
addPlayerButton.addEventListener("click", () => {
    const playerNameInput = document.querySelector("input[type='text']");
    const playerName = playerNameInput.value.trim();
    if (playerName !== "") {
        addPlayer(playerName);
        playerNameInput.value = "";
    }
});
// Thực hiện cập nhật giao diện ban đầu
updateUI();
