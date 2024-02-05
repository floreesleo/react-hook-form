import { Label, Input } from "./components/ui";

export default function App() {
  return (
    <div>
      {/* Nombre */}
      <Label htmlFor="nombre">Nombre alskdjalskdj</Label>
      <Input />

      {/* Correo */}
      <label className="block" htmlFor="correo">
        Correo
      </label>
      <Input placeholder="correo@gmail.com" />

      {/* Contraseña */}
      <label className="block" htmlFor="password">
        Contraseña
      </label>
      <Input />

      {/* Confirmar contraseña */}
      <label className="block" htmlFor="confirmPassword">
        Confirmar contraseña
      </label>
      <Input />

      {/* Fecha de nacimiento */}
      <label className="block" htmlFor="fechaNacimiento">
        Fecha de nacimiento
      </label>
      <Input />

      {/* Pais */}
      <label htmlFor="pais">Pais</label>
      <select name="" id="">
        <option value="mx">México</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>

      {/* Archivo */}
      <label htmlFor="file">Foto de perfil</label>
      <Input />

      {/* Terminos */}
      <label htmlFor="terminos">Acepto términos y condiciones</label>
      <Input />
    </div>
  );
}
