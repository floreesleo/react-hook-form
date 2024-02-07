import { Label, Input, Button } from "./components/ui";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      {/* Nombre */}
      <Label htmlFor="nombre">Nombre</Label>
      <Input type="text" {...register("nombre")} />

      {/* Correo */}
      <Label htmlFor="correo">Correo electronico</Label>
      <Input type="email" {...register("correo")} />

      {/* Contraseña */}
      <Label htmlFor="contraseña">Contraseña</Label>
      <Input type="password" {...register("password")} />

      {/* Confirmar contraseña */}
      <Label htmlFor="confirmarContraseña">Confirmar contraseña</Label>
      <Input type="password" {...register("confirmPassword")} />

      {/* Fecha de nacimiento */}
      <Label htmlFor="fechaNacimiento">Fecha de nacimiento</Label>
      <Input type="date" {...register("fechaNacimiento")} />

      {/* Pais */}
      <Label htmlFor="pais">País</Label>
      <select name="" id="" {...register("pais")}>
        <option value="mx">México</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>

      {/* Archivo */}
      <Label htmlFor="foto">Foto de perfil</Label>
      <Input type="file" {...register("foto")} />

      {/* Terminos */}
      <Label htmlFor="terminos">Acepto los terminos y condiciones</Label>
      <Input type="checkbox" {...register("terminos")} />

      <Button type="submit">Enviar formulario</Button>
    </form>
  );
}
