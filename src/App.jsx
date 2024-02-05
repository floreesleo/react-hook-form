import { Label, Input, Button } from "./components/ui";

export default function App() {
  return (
    <div>
      {/* Nombre */}
      <Label htmlFor="nombre">Nombre alskdjalskdj</Label>
      <Input type="text" />

      {/* Correo */}
      <Label htmlFor="correo">Correo electronico</Label>
      <Input type="email" />

      {/* Contraseña */}
      <Label htmlFor="contraseña">Contraseña</Label>
      <Input type="password" />

      {/* Confirmar contraseña */}
      <Label htmlFor="confirmarContraseña">Confirmar contraseña</Label>
      <Input type="password" />

      {/* Fecha de nacimiento */}
      <Label htmlFor="fechaNacimiento">Fecha de nacimiento</Label>
      <Input />

      {/* Pais */}
      <Label htmlFor="pais">País</Label>
      <select name="" id="">
        <option value="mx">México</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>

      {/* Archivo */}
      <Label htmlFor="file">Foto de perfil</Label>
      <Input type="file" />

      {/* Terminos */}
      <Label htmlFor="terminos">Acepto los terminos y condiciones</Label>
      <Input type="checkbox" />

      <Button>Enviar formulario</Button>
    </div>
  );
}
