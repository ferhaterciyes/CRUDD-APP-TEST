import { render, screen } from "@testing-library/react";
import Form from ".";
import user from "@testing-library/user-event";
import { expect } from "vitest";

it("Formu gönderince adduser fonksiyonu doğru parametrelerle calışıyormu", async () => {
  // fonksiyonu mock lama (taklit fonksiyon oluşturma)
  // kaçkere cağırıldı hangi parametrelerle cağırılıd
  // tarxında testleri yapmamaızı sağlayan orj
  //fonk taklit eden fonksiyon
  const mock = vi.fn();
  render(<Form addUser={mock} />);
  // gerekli elemanları çağır
  user.setup();
  const nameInp = screen.getByLabelText("İsim");
  const ageInp = screen.getByPlaceholderText("ör:25");
  const emailInp = screen.getByLabelText("Email");
  const sendBtn = screen.getByRole("button");
  //inputları doldur
  // yol-1 isim inputunu doldur
  await user.click(nameInp);
  await user.keyboard("Firat");

  // yol-2 mail inputu doldur
  await user.type(emailInp, "firat@gmail.com");

  // yol-2 yaş inputu doldur
  await user.type(ageInp, "25");

  // gönder butonuna tıkla
  await user.click(sendBtn);
  // fonksiyon doğru parametrelerle  çalışıyormu

  expect(mock).toBeCalledWith({
    name:"Firat",
    email: "firat@gmail.com",
    age:"25"
  })
});
