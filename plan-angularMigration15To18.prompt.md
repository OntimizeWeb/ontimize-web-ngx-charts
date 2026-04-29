# Plan: Migración Angular 15 → 18 — ontimize-web-ngx-charts

## TL;DR
Migración incremental del addon `ontimize-web-ngx-charts` (Angular 15 → 18) siguiendo la misma estrategia de ramas que el framework principal. La dependencia `ontimize-web-ngx` se actualiza en paralelo con cada fase. El peer `@angular/flex-layout` se sustituye por CSS nativo en la fase 18.

## Datos clave del codebase (reales)
- **3 NgModules**: OChartModule, OChartComponentModule, OChartOnDemandComponentModule
- **0 standalone components** en la versión base (15.x.x)
- **4 componentes**: OChartComponent, OChartOnDemandComponent, LoadPreferencesDialogComponent, SavePreferencesDialogComponent
- **4 templates HTML** con directivas flex-layout (`fxFlexFill` en o-chart, 13 directivas en o-chart-on-demand, usages en dialogs)
- **1 spec file**
- **0 archivos SCSS de theming propios** (usa `scss-bundle` para bundlear estilos de ngx-charts)
- **Sin usages directos de `Injector.get()`** (los providers usan `deps: [Injector]` en factory functions — patrón diferente)
- **Sin guards propios**
- Dependencias externas clave: `@swimlane/ngx-charts ^20.5.0`, `dom-to-image ^2.6.0`
- Build script ejecuta `scss-bundle` para empaquetar SCSS de ngx-charts → verificar tras cada fase

## Estrategia de Ramas

```
15.x.x (intocable)
  └── 18.x.x (punto de partida, copia de 15.x.x)
       ├── migration/16.x.x (Angular 16)
       │    └── migration/17.x.x (Angular 17)
       │         └── migration/18.x.x (Angular 18 final)
       └── (merge final a 18.x.x cuando esté listo)
```

---

## FASE 1: Angular 15 → 16 — Rama `migration/16.x.x`

### Acciones a realizar
- Actualizar todas las dependencias Angular a `^16.2.0`
- `ng-packagr` → `^16.2.0`, `typescript` → `~5.0.4`, `zone.js` → `~0.13.0`
- Actualizar `tsconfig.json`: `module` → `es2022`
- `@swimlane/ngx-charts` → verificar versión compatible con Angular 16 (v20.x soporta Angular 15-16, confirmar)
- Añadir `moment` → `^2.29.4` (actualmente solo en devDependencies, confirmar si se necesita en dependencies)
- Añadir `@ngbracket/ngx-layout@^16.0.0` (sustitución transitional de `@angular/flex-layout`)
- Mantener `@angular/flex-layout@^15.0.0-beta.42` como peer transitorio
- `ontimize-web-ngx` → `^15.9.0` (última versión 15 publicada)
- Actualizar `projects/ontimize-web-ngx-charts/package.json`: peer deps a `^16.2.0`

### Notas de compatibilidad
- `ontimize-web-ngx` no tiene versión 16 publicada en npm → usar `^15.9.0`
- `@swimlane/ngx-charts` — verificar si v20.x o si hay versión v21+ para Angular 16
- `dom-to-image` — librería sin mantenimiento activo; verificar que sigue funcionando
- `scss-bundle` → verificar compatibilidad con nuevo TypeScript

### No aplica en esta fase
- **Control flow migration**: pospuesto a Fase 2
- **Standalone**: pospuesto a Fase 3

### Verificación
- `npm run build` — compila sin errores (incluye scss-bundle y copy-files para assets)
- Verificar que los assets se copian a `dist/assets`

---

## FASE 2: Angular 16 → 17 — Rama `migration/17.x.x`

### Acciones a realizar
- Actualizar todas las dependencias Angular a `^17.3.0`
- `ng-packagr` → `^17.3.0`, `typescript` → `~5.2.2`, `zone.js` → `~0.14.0`
- `@angular-eslint/*` → `^17.0.0`
- `@ngbracket/ngx-layout` → `^17.0.1`
- `ontimize-web-ngx` → mantenido en `^15.9.0`
- Actualizar `projects/ontimize-web-ngx-charts/package.json`: peer deps a `^17.3.0`

### Control flow migration
- **Herramienta**: `ng generate @angular/core:control-flow`
- **Alcance**: 4 templates HTML con `*ngIf`/`*ngFor`
- Volumen bajo — revisión manual tras el schematic

### No aplica en este addon
- **Migración `inject()`**: no hay `Injector.get()` directos — los factory providers con `deps: [Injector]` son compatibles con Angular 18 sin cambios
- **Guards funcionales**: sin guards propios
- **Standalone gradual**: 4 componentes — conveniente migrar todos juntos en Fase 3

### Verificación
- `npm run build` — compila sin errores
- `npm test` — spec pasa

---

## FASE 3: Angular 17 → 18 — Rama `migration/18.x.x`

### 3.1 Actualizar dependencias core
- Actualizar todas las dependencias Angular a `^18.2.0`
- `ng-packagr` → `^18.2.0`, `typescript` → `~5.5.4`
- Añadir `luxon ^3.4.0` + `@types/luxon` (peer de `ngx-material-timepicker` transitivo del framework)
- Eliminar `@angular/flex-layout` y `@ngbracket/ngx-layout`
- `ontimize-web-ngx` → `file:../ontimize-web-ngx/dist/ontimize-web-ngx-18.0.0-SNAPSHOT-0.tgz`
- Actualizar `projects/ontimize-web-ngx-charts/package.json`: peer deps a `^18.2.0`, `ontimize-web-ngx ^18.0.0`
- **`projects/ontimize-web-ngx-charts/tsconfig.lib.json`**: añadir `"compilationMode": "partial"` en `angularCompilerOptions`
  > ⚠️ `tsconfig.lib.prod.json` ya lo tiene, pero `tsconfig.lib.json` (usado por `npm run build` sin `-c production`) no. Sin esto el dist se compila en modo full y produce errores `NG0203` en el consumidor.

### 3.2 Eliminar flex-layout → CSS nativo
- **Alcance**: 4 templates con directivas `fxLayout`/`fxFlex`/`fxLayoutAlign`/`fxFlexFill`
- Usar las clases utilitarias `o-flex-*` definidas en `ontimize-web-ngx` (flex-layout.scss)
- **Templates afectados**:
  - `o-chart.component.html` — `fxFlexFill` → `o-flex-fill`
  - `o-chart-on-demand.component.html` — múltiples directivas (13 usages)
  - `load-preferences-dialog.component.html`
  - `save-preferences-dialog.component.html`

### 3.3 Standalone migration
**Inventario de componentes a migrar:**
| Componente | Archivo |
|---|---|
| `OChartComponent` | `components/chart/o-chart.component.ts` |
| `OChartOnDemandComponent` | `components/chart-on-demand/o-chart-on-demand.component.ts` |
| `LoadPreferencesDialogComponent` | `components/chart-on-demand/load-preferences-dialog/` |
| `SavePreferencesDialogComponent` | `components/chart-on-demand/save-preferences-dialog/` |

**Módulos wrapper a mantener por backward compatibility:**
- `OChartModule` → re-exportar standalone components
- `OChartComponentModule`, `OChartOnDemandComponentModule` → mantener como wrappers

**Pasos:**
1. Añadir `standalone: true` a cada componente
2. Mover sus `imports` de NgModule al array `imports` del decorador `@Component`
   - `OChartComponent` necesita imports de `@swimlane/ngx-charts` (NgxChartsModule o módulo específico)
   - `OChartOnDemandComponent` necesita imports de OntimizeWebModule + dialogs propios
3. Mantener los NgModule wrapper re-exportando los standalone components
4. Verificar build con scss-bundle y copia de assets

### No aplica en este addon
- **M3 theming migration**: sin archivos SCSS de theming propios — el SCSS bundleado es de ngx-charts y compatible con Angular Material 18 M2
- **Typed Forms**: sin uso de `UntypedFormGroup`/`UntypedFormControl` propios
- **Guards funcionales**: sin guards propios
- **inject() migration**: los providers usan `deps: [Injector]` en factory functions — no requieren cambios

---

### 3.4. Migra la aplicación a la rama `migration/18.x.x` y verificación final
- Migrar la aplicacion que esta en la rama `quickstart-15.x.x-develop` y añadir la aplicacion a projects en la rama `migration/18.x.x` para verificar que funciona correctamente con Angular 18 y asi tener un monorepo con las 2 ramas de desarrollo en paralelo (framework y addon)

## Verificación por fase

1. `npm run build` — debe compilar sin errores (incluye scss-bundle + copy-files para assets)
2. Verificar que `dist/assets` contiene los assets de ngx-charts
3. `npm test` — spec pasa

---

## Decisiones

- **flex-layout**: Añadir `@ngbracket/ngx-layout` transitional en Fases 1-2; eliminar en Fase 3 y migrar a clases `o-flex-*` del framework
- **ontimize-web-ngx**: Usar `^15.9.0` en Fases 1-2; apuntar al tgz local `^18.0.0` en Fase 3
- **@swimlane/ngx-charts**: Verificar versión compatible con Angular 16/17/18 en cada fase — puede requerir major bump
- **dom-to-image**: Mantener — librería sin breaking changes conocidos; considerar alternativa si falla
- **inject()**: No aplica — factory providers con `deps: [Injector]` son compatibles sin cambios
- **Standalone**: Migrar los 4 componentes en Fase 3 — volumen pequeño, conveniente hacerlos todos juntos
- **M3 theming**: No aplica — sin theming propio
- **Control flow**: Migrar en Fase 2 con el schematic automático
