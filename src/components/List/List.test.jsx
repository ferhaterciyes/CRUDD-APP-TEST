import { render, screen, within } from "@testing-library/react";
import List from ".";
import { testUers } from "../../constants/testData";

it("Gönderilen her satır için ekrana satır basılıyormu", () => {
  render(<List users={testUers} />);

  // tablebody kısmını al
  const body = screen.getByTestId("body");
  // tabldaki tablebody kısmındaki satırları sec
  // belirli bir kapsayıcı içindeki elemanları secmek için within kullanılır

  const rows = within(body).getAllByRole("row");

  // tablodaki satırları sec
  console.log(rows);
});
