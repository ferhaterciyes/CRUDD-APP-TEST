import { expect } from "vitest";

const multiple = (a, b, c) => {
  return a * b * c;
};
it("Fonksiyon doğru sonuc veriyormu", () => {
  const sum = multiple(10, 2, 3);

  expect(sum).toBe(60);
});
