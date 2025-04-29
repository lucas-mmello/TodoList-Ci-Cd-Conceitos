import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [modoEscuro, setModoEscuro] = useState<boolean>(false);

  useEffect(() => {
    const dark = localStorage.getItem("modoEscuro");
    if (dark === "true") setModoEscuro(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("modoEscuro", String(modoEscuro));

    if (modoEscuro) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [modoEscuro]);
  return (
    <button
      onClick={() => setModoEscuro(!modoEscuro)}
      style={{ cursor: "pointer", display: "block", margin: "1rem auto" }}
    >
      {modoEscuro ? "🌞 Modo Claro" : "🌙 Modo Escuro"}
    </button>
  );
}
