# Migration Status — ontimize-web-ngx-charts

Migración incremental Angular 15 → 18. Cada fase se publica en su propia rama para permitir revisión independiente.

## Ramas

| Rama | Angular | Estado | Commit |
|------|---------|--------|--------|
| `15.x.x` | 15 | ✅ Base (intocable) | — |
| `migration/16.x.x` | 16 | ✅ Completada | `13f151c` |
| `migration/17.x.x` | 17 | ✅ Completada | `c33a1ce` |
| `migration/18.x.x` | 18 | ✅ Completada | `93e5027` |

---

## Fase 1 — Angular 15 → 16 (`migration/16.x.x`)

- Bump de todas las dependencias Angular a `^16.2.0`
- `ng-packagr ^16.2.0`, `typescript ~5.1.6`, `zone.js ~0.13.0`
- `@angular-eslint/*` → `16.3.1`
- `@angular/flex-layout` sustituido por alias npm `@ngbracket/ngx-layout@^16.0.0`
- `ontimize-web-ngx` → `^16.0.0`
- Peer dependency en `projects/package.json` actualizada a `^16.0.0`

---

## Fase 2 — Angular 16 → 17 (`migration/17.x.x`)

- Bump de todas las dependencias Angular a `^17.3.0`
- `ng-packagr ^17.3.0`, `typescript ~5.2.2`, `zone.js ~0.14.0`
- `@angular-eslint/*` → `17.5.3`
- `ontimize-web-ngx` → `^17.0.0`
- Peer dependency en `projects/package.json` actualizada a `^17.0.0`

---

## Fase 3 — Angular 17 → 18 (`migration/18.x.x`)

### Dependencias
- Bump de todas las dependencias Angular a `^18.2.0`
- `ng-packagr ^18.2.0`, `typescript ~5.5.4`
- `@angular-eslint/*` → `18.3.1`
- `@angular/flex-layout` / `@ngbracket/ngx-layout` **eliminados**
- `luxon ^3.4.0` + `@types/luxon ^3.4.0` añadidos como devDeps (peer transitivo de `ngx-material-timepicker` del framework)
- `ontimize-web-ngx` → `file:../ontimize-web-ngx/dist/ontimize-web-ngx-18.0.0-SNAPSHOT-0.tgz`
- Peer dependency en `projects/package.json` actualizada a `^18.0.0`

### Templates — eliminación de flex-layout y control flow

Los 4 templates con directivas `fxLayout`/`fxFlex`/`fxFlexFill`/`fxLayoutAlign` han sido migrados a clases CSS utilitarias `o-flex-*` del framework y a la nueva sintaxis de control flow de Angular 17+:

| Template | Cambios |
|----------|---------|
| `o-chart.component.html` | `fxFlexFill` → `class="o-flex-fill"` · `*ngIf` → `@if` · `[ngSwitch]`/`*ngSwitchCase` → `@switch`/`@case` |
| `o-chart-on-demand.component.html` | 13 directivas fxLayout/fxFlex → clases o-flex-* + `style="gap:Xpx"` · `*ngIf` → `@if` · `*ngFor` → `@for` |
| `load-preferences-dialog.component.html` | `fxLayout="column"` → `class="o-flex-column"` · `*ngIf` → `@if` · `*ngFor` → `@for` |
| `save-preferences-dialog.component.html` | `fxLayout="column"` → `class="o-flex-column"` |

### Standalone migration

Los 4 componentes han sido convertidos a `standalone: true`:

| Componente | Imports añadidos al decorador |
|------------|-------------------------------|
| `OChartComponent` | `NgClass`, `NgTemplateOutlet`, `NgxChartsModule` |
| `OChartOnDemandComponent` | `NgClass`, `FormsModule`, `MatDialogModule`, `MatButtonModule`, `MatFormFieldModule`, `MatInputModule`, `MatIconModule`, `MatMenuModule`, `MatRadioModule`, `MatSelectModule`, `MatSidenavModule`, `MatTooltipModule`, `OntimizeWebModule`, `OChartComponent` |
| `SavePreferencesDialogComponent` | `MatDialogModule`, `MatFormFieldModule`, `MatInputModule`, `MatButtonModule`, `ReactiveFormsModule`, `OntimizeWebModule` |
| `LoadPreferencesDialogComponent` | `MatDialogModule`, `MatListModule`, `MatButtonModule`, `OntimizeWebModule` |

Los NgModules wrapper (`OChartComponentModule`, `OChartOnDemandComponentModule`) se han mantenido por compatibilidad hacia atrás, actualizados para importar los componentes standalone en lugar de declararlos.

`OChartModule` actualizado para importar/exportar directamente los componentes standalone.

### Otras correcciones
- `comboData` tipado como `Array<{key: number; value: string}>` (antes `Array<Object>`) para pasar el template type checking
- `array` tipado como `Array<{key: any; value: string}>` en `OChartOnDemandComponent`

---

## Pendiente

- **Aplicación quickstart**: La rama `quickstart-15.x.x-develop` no se ha incorporado al monorepo `migration/18.x.x`. Está planificado añadirla como proyecto adicional en `angular.json` para verificación visual con Angular 18.
