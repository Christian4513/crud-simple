import { test, expect } from "@playwright/test";

test("Formulario de usuarios: agregar y visualizar", async ({ page }) => {

  await page.goto("http://localhost:5173");

  await page.fill('input[placeholder="Nombre"]', "Test User");
  await page.fill('input[placeholder="Correo"]', "test@example.com");

  await page.click("text=Agregar usuario");


  const items = page.locator('[data-testid="user-item"]');
  await expect(items).toContainText("Test User");
  await expect(items).toContainText("test@example.com");

});
