# Estructura del Proyecto

Este proyecto está organizado para reflejar la arquitectura limpia, separando las preocupaciones en capas y características. A continuación, se detalla la estructura principal de la carpeta `src/`:

```sh
src/
├── application/
│   ├── features/              # Lógica y componentes específicos de cada "feature" o "característica"
│   │   ├── ZeldaBOTW/
│   │   │   ├── Monsters/
│   │   │   │   ├── components/      # Componentes UI (presentacionales) y containers (lógica de presentación)
│   │   │   │   │   ├── containers/  # Componentes con lógica de estado y comunicación con usecases
│   │   │   │   │   ├── ui/          # Componentes puramente presentacionales (dumb components)
│   │   │   │   ├── hooks/           # Custom hooks relacionados con la feature (e.g., useMonstersHook)
│   │   │   │   ├── MonsterService.ts # Implementación del servicio de la feature
│   │   │   │   ├── MonsterUsecase.ts # Implementación del caso de uso de la feature
│   │   │   ├── Materials/           # Otra feature, con estructura similar
│   │   │   │   ├── components/
│   │   │   │   ├── hooks/
│   │   │   │   ├── MaterialService.ts
│   │   │   │   ├── MaterialUsecase.ts
│   │   └── .../                   # Otras features de ZeldaBOTW
│   ├── shared/                # Componentes y utilidades reutilizables entre features
│   │   ├── components/        # Componentes UI de uso global (e.g., Card, Loading, AddEntCard)
│   │   │   ├── common/
│   │   │   ├── ui/
│   │   ├── hooks/             # Custom hooks genéricos
│   │   ├── utils/             # Funciones de utilidad comunes
│   ├── main.tsx               # Punto de entrada de la aplicación React
│   ├── App.tsx                # Componente principal de la aplicación
│   └── router.tsx             # Definición de las rutas principales
├── domain/                    # Capa de Dominio (lógica de negocio central y contratos)
│   ├── features/
│   │   ├── ZeldaBOTW/
│   │   │   ├── Monsters/
│   │   │   │   ├── MonsterModelInterface.ts  # Definición de la entidad Monster
│   │   │   │   ├── MonsterRepositoryInterface.ts # Contrato del repositorio de Monstruos
│   │   │   ├── Materials/
│   │   │   │   ├── MaterialModelInterface.ts # Definición de la entidad Material
│   │   │   │   ├── MaterialRepositoryInterface.ts # Contrato del repositorio de Materiales
│   │   │   └── .../
│   └── shared/                # Interfaces de dominio compartidas
├── infrastructure/            # Capa de Infraestructura (implementaciones concretas de los contratos)
│   ├── features/
│   │   ├── ZeldaBOTW/
│   │   │   ├── Monsters/
│   │   │   │   ├── MonsterRepository.ts      # Implementación del repositorio (e.g., llamada a API)
│   │   │   ├── Materials/
│   │   │   │   ├── MaterialRepository.ts     # Implementación del repositorio (e.g., llamada a API)
│   │   │   └── .../
│   └── shared/                # Adaptadores o utilidades de infraestructura compartidas
├── assets/                    # Archivos estáticos como imágenes, iconos, etc.
└── styles/                    # Archivos de estilos globales o configuración de Tailwind (e.g., index.css)
```

## Descripción de las Carpetas Principales:

*   **`src/application/`**: Contiene la lógica de la aplicación y la interfaz de usuario. Es donde los casos de uso (`Usecases`) se exponen a los componentes de React, y donde residen la mayoría de los componentes visibles.
    *   **`features/`**: Agrupa código por funcionalidad. Cada `feature` (como `Monsters` o `Materials`) tiene su propio espacio encapsulado.
    *   **`shared/`**: Para código reutilizable que no pertenece específicamente a una única `feature`, como componentes de UI genéricos (`Card`, `Loading`, `AddEntCard`), hooks comunes o utilidades generales.
*   **`src/domain/`**: Es el "corazón" de la aplicación. Define las reglas de negocio, las entidades (`MonsterModelInterface`), y los contratos (`MonsterRepositoryInterface`) que otras capas deben implementar. No tiene dependencias de `application` ni `infrastructure`.
*   **`src/infrastructure/`**: Contiene las implementaciones concretas de los contratos definidos en `domain`. Aquí es donde se conectan con el mundo exterior (APIs, bases de datos, etc.). Por ejemplo, `MonsterRepository.ts` implementa `MonsterRepositoryInterface` para interactuar con una API real.

Esta estructura modular facilita la comprensión, el mantenimiento y la escalabilidad del proyecto, permitiendo que la lógica de negocio permanezca limpia e independiente de los detalles técnicos.

