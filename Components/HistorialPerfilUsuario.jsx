import { useUser } from "../hooks/user";
import RutaUser from "./RutaUser";
export default function HistorialPerfilUsuario() {
  const usuario = useUser();
  var user = "";
  usuario ? (user = JSON.parse(usuario)) : "";

  return (
    <div>
      <RutaUser />
    </div>
  );
}
