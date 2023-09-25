const form = document.getElementById("myForm") as HTMLFormElement;
const submitButton = document.getElementById(
  "submitButton"
) as HTMLButtonElement;
// Đặt sự kiện submit cho form
form.addEventListener("submit", (event) => {
  // Chặn sự kiện mặc định của form (ngăn form gửi dữ liệu)
  event.preventDefault();

  const formData = {
    name: "",
    address: "",
    state: "",
    course: "",
    game: "",
    date: "",
  };

  // Lấy giá trị của các phần tử input và hiển thị chúng
  const nameLab_1Element = document.getElementById("name") as HTMLInputElement;
  formData.name = nameLab_1Element.value;
  const addressLab_1Element = document.getElementById(
    "address"
  ) as HTMLTextAreaElement;
  formData.address = addressLab_1Element.value;

  const stateLab_1 = document.getElementById("state") as HTMLSelectElement;
 formData.state = stateLab_1.value;

  // Lấy giá trị của phần tử course (radio buttons)
  const radioCourse = document.getElementsByName(
    "course"
  ) as NodeListOf<HTMLInputElement>;
  let selectedCourse = "";
  radioCourse.forEach((radioCourse) => {
    if (radioCourse.checked) {
      formData.course = radioCourse.value;
    }
  });

  // Lấy giá trị của phần tử game (radio buttons)
  const radioGame = document.getElementsByName(
    "game"
  ) as NodeListOf<HTMLInputElement>;
  let selectedGame = "";
  radioGame.forEach((radioGame) => {
    if (radioGame.checked) {
      formData.game = radioGame.value;
    }
  });

  // Lấy giá trị của phần tử date (input date)
  const dateInputElement = document.getElementById(
    "myDateInput"
  ) as HTMLInputElement;
  formData.date = dateInputElement.value;
  console.log(formData);
});




