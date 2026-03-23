import FormContainer from "../../../../../shared/components/ui/form/FormContainer";
import TextInput from "../../../../../shared/components/ui/form/inputs/TextInput";
import SelectInput from "../../../../../shared/components/ui/form/inputs/SelectInput";
import TextAreaInput from "../../../../../shared/components/ui/form/inputs/TextAreaInput";
import SubmitButton from "../../../../../shared/components/ui/form/SubmitButton";

interface MonsterFormProps {
  register: any;           
  errors: any;             
  onSubmit: () => void;    
}

export default function MonsterForm({ register, errors, onSubmit }: MonsterFormProps) {
  return (
    <FormContainer 
      id="monster-form" 
      title="" 
      onSubmit={onSubmit}
    >
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
            { value: "monsters", label: "Monstruos" },
            { value: "creatures", label: "Criaturas" },
            { value: "materials", label: "Materiales" },
            { value: "equipment", label: "Equipo" },
            { value: "treasures", label: "Tesoros" },
            
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

        <TextAreaInput
          name="description"
          label="Descripción"
          placeholder="Estos monstruos con forma de lagarto y gran astucia..."
          rows={5}
          register={register}
          errors={errors}
        />

        <TextAreaInput
          name="drops"
          label="Objetos que suelta (uno por línea)"
          placeholder="Cuerno de Lizalfos\nCola de Lizalfos\n..."
          rows={3}
          register={register}
          errors={errors}
          helpText="Separa cada drop con una nueva línea. Se convertirá en array."
        />

        <TextInput
          name="image"
          label="URL de la imagen"
          placeholder="https://botw-compendium.herokuapp.com/api/v3/..."
          register={register}
          errors={errors}
        />

        <div className="pt-4">
          <SubmitButton text="Guardar Monstruo" />
        </div>
      </div>
    </FormContainer>
  );
}