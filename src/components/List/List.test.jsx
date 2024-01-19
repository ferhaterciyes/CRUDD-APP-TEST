import { render, screen, within } from "@testing-library/react";
import List from ".";
import { users } from "../../constants/testData";
import { expect } from "vitest";

it("Gönderilen her satır için ekrana satır basılıyormu", () => {
  render(<List users={users} />);

  // tablebody kısmını al
  // tabldaki tablebody kısmındaki satırları sec
  const body = screen.getByTestId("body");
  // belirli bir kapsayıcı içindeki elemanları secmek için within kullanılır

  const rows = within(body).getAllByRole("row");
  // dizideki kullanıcı sayısı kadar kullanıcı varmı
  expect(rows).toHaveLength(users.length);
});

it("Her bir kullanıcı için email, isim ve yas hücreleri bulunur", () => {
  render(<List users={users} />);

  // Dizideki her bir kullanıcı için ekranda bu kullanıcının
  // değerlerini içeren hücre basılır

  for (const user of users) {
    // kullanıcının ismini içeren tablo hücresini al
    screen.getByRole("cell", { name: user.name });
    // kullanıcının emailini içeren tablo hücresini al
    screen.getByRole("cell", { name: user.email });
    // kullanıcının yasını içeren tablo hücresini al
    screen.getByRole("cell", { name: user.age });

  }
});
