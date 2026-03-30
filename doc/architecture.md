# Arquitectura del Proyecto

Este proyecto sigue una arquitectura hexagonal o de "puertos y adaptadores", inspirada en principios de Clean Architecture. El objetivo principal es la separación de intereses, haciendo que el dominio de la aplicación (la lógica de negocio) sea independiente de la infraestructura y la interfaz de usuario.

## Capas Principales:

1.  **Dominio (`domain/`)**:
    *   Contiene la lógica de negocio central, entidades (interfaces de modelos como `MonsterModelInterface`, `MaterialModelInterface`) y contratos (interfaces de repositorios).
    *   Es la capa más interna y no tiene dependencias de otras capas. Define "qué" se puede hacer.

2.  **Aplicación (`application/`)**:
    *   Implementa los casos de uso (`Usecases`) que orquestan las operaciones del dominio.
    *   Contiene los `Services` que implementan las interfaces de repositorios definidas en el dominio y adaptan las operaciones para los casos de uso.
    *   También aloja los componentes de interfaz de usuario (UI components) y los contenedores (containers) que manejan la lógica de presentación y la interacción con los casos de uso.
    *   **Estructura de Features:** Cada característica (e.g., `ZeldaBOTW/Monsters`, `ZeldaBOTW/Materials`) tiene su propia subcarpeta con `components/`, `hooks/`, `MonsterUsecase.ts`, `MonsterService.ts`, etc.
    *   **Shared Components:** Componentes de UI reutilizables globalmente se encuentran en `application/shared/components/`.

3.  **Infraestructura (`infrastructure/`)**:
    *   Esta capa es responsable de los detalles técnicos de cómo se implementan los contratos definidos en el dominio y la aplicación.
    *   Contiene las implementaciones concretas de los repositorios (`MonsterRepository.ts`, `MaterialRepository.ts`) que interactúan con fuentes de datos externas (APIs, bases de datos, almacenamiento local, etc.).
    *   Puede incluir adaptadores para APIs externas, configuración de base de datos, etc.

## Flujo de Datos Típico:

1.  **Interfaz de Usuario (UI/Container)**: Un componente en `application/features/.../components/containers` dispara una acción (e.g., un clic de botón).
2.  **Hook (`useMonstersHook`)**: Un hook de React usa un `Usecase` para realizar una operación de negocio.
3.  **Usecase (`MonsterUsecase`)**: El caso de uso coordina con uno o varios `Services` para cumplir la operación.
4.  **Service (`MonsterService`)**: El servicio utiliza una implementación de repositorio (inyectada) para interactuar con la infraestructura.
5.  **Repository (`MonsterRepository`)**: La implementación del repositorio en la capa de infraestructura realiza la llamada a la API o accede a la fuente de datos.
6.  **Retorno**: Los datos o el resultado fluyen de vuelta a través de las capas hasta la UI para ser mostrados al usuario.

Esta estructura promueve la testabilidad, el mantenimiento y la facilidad de cambiar la infraestructura sin afectar la lógica de negocio principal.