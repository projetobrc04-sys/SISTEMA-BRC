import { Lock } from "lucide-react";
import { Card } from "./Card";

export default function AccessDeniedCard() {
  return (
    <Card className="access-denied">
      <Lock size={28} />
      <h2>Acesso restrito</h2>
      <p>Este conteúdo é permitido apenas para administradores autorizados.</p>
    </Card>
  );
}
