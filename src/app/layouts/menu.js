import Link from "next/link";

import "./menu.css";

export default function TopMenu() {
  return (
    <div className="topmenu">
      <Link className="link" href="/pages/catlist">
        Lista de Gatos
      </Link>
      <Link className="link" href="/pages/form">
        Formulário
      </Link>
    </div>
  );
}
