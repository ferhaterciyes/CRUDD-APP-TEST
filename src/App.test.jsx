import { render, screen } from "@testing-library/react";
import App from "./App";
import user from "@testing-library/user-event";
// 
// const multiple = (a, b, c) => {
//   return a * b * c;
// };
// it("Fonksiyon doğru sonuc veriyormu", () => {
//   const sum = multiple(10, 2, 3);

//   expect(sum).toBe(60);
// });

it("Uygulama doğru şekilde çalışıyormu" , async()=>{
render(<App />)
user.setup()
// inputları cağır
const nameInp = screen.getByLabelText("İsim")
const emailInp = screen.getByLabelText("Email")
const ageInp = screen.getByLabelText("Yas")
const sendBtn = screen.getByRole("button", {name:"Kullanıcı Ekle"})
// inputları doldur ,
await user.type(nameInp , "Ferhat")
await user.type(emailInp,"feerciyes@gmail.com ")
await user.type(ageInp , "32")
//kullanıcı ekle butonuna tıkla

await user.click(sendBtn)

//inputlara girdiğimiz veriye uyfun şekilde tablo hücreleri ekrana basılır
screen.getByRole("cell" , {name:"Ferhat"})
screen.getByRole("cell" , {name:"feerciyes@gmail.com"})
screen.getByRole("cell" , {name:32})



})
