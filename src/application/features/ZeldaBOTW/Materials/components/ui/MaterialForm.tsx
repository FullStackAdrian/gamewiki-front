import FormContainer from "../../../../../shared/components/ui/form/FormContainer";
import TextInput from "../../../../../shared/components/ui/form/inputs/TextInput";
import SelectInput from "../../../../../shared/components/ui/form/inputs/SelectInput";
import TextAreaInput from "../../../../../shared/components/ui/form/inputs/TextAreaInput";
import SubmitButton from "../../../../../shared/components/ui/form/SubmitButton";

interface MaterialFormProps {
  register: any;
  errors: any;
  onSubmit: () => void;
}

export default function MaterialForm({
  register,
  errors,
  onSubmit,
}: MaterialFormProps) {
  return (
    <FormContainer id="material-form" title="" onSubmit={onSubmit}>
      <div className="space-y-6">
        <TextInput
          name="name"
          label="Nombre"
          placeholder="Ej: Lizalfos Eléctrico"
          register={register}
          errors={errors}
        />

        <SelectInput
          name="category"
          label="Categoría"
          register={register}
          errors={errors}
          options={[
            { value: "", label: "-- Selecciona categoría --" },
            { value: "monstruos", label: "Monstruos" },
            { value: "criaturas", label: "Criaturas" },
            { value: "materiales", label: "Materiales" },
            { value: "equipo", label: "Equipo" },
            { value: "tesoros", label: "Tesoros" },
          ]}
        />

        <TextAreaInput
          name="common_locations"
          label="Ubicaciones comunes (una por línea)"
          placeholder="Desierto de Gerudo\nCordillera de Hyrule\n..."
          rows={3}
          register={register}
          errors={errors}
          helpText="Separa cada ubicación con una nueva línea. Se convertirá en array."
        />

        <TextInput
          name="cooking_effect"
          label="Efecto de Cocina"
          placeholder="Ej: Corazones extra"
          register={register}
          errors={errors}
        />

        <TextInput
          name="hearts_recovered"
          label="Corazones Recuperados"
          placeholder="Ej: 3"
          register={register}
          errors={errors}
        />

        <TextAreaInput
          name="description"
          label="Descripción"
          placeholder="Estos monstruos con forma de lagarto y gran astucia..."
          rows={5}
          register={register}
          errors={errors}
        />

        <TextInput
          name="image"
          label="URL de la imagen"
          placeholder="https://botw-compendium.herokuapp.com/api/v3/..."
          register={register}
          errors={errors}
        />

        <div className="pt-4">
          <SubmitButton text="Guardar Material" />
        </div>
      </div>
    </FormContainer>
  );
}
